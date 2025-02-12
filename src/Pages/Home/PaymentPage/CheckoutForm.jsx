import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const CheckoutForm = () => {
  const { user } = useContext(AuthContext);
  const [error, setError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const [cartUser, setCartUser] = useState([]);

  // Fetch cart items for the logged-in user
  useEffect(() => {
    const fetchCart = async () => {
      try {
        if (user?.email) {
          const result = await axios.get(`http://localhost:5000/cartItem/${user.email}`);
          setCartUser(result.data);
        }
      } catch (err) {
        console.error('Error fetching cart items:', err.message);
      }
    };

    fetchCart();
  }, [user?.email]);

  // Calculate total price
  const total = cartUser.reduce((sum, item) => sum + (Number(item?.course?.price) || 0), 0);

  console.log('Total:', total);

  // Create payment intent when total price updates
  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        if (total > 0) {
          const res = await axios.post('http://localhost:5000/create-payment-intent', { price: total });
          setClientSecret(res.data.clientSecret);
        }
      } catch (err) {
        console.error('Error creating payment intent:', err.message);
      }
    };

    createPaymentIntent();
  }, [total]);

  // Handle payment submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    // Create payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.error('Payment Error:', error);
      setError(error.message);
      Swal.fire('Payment Failed', error.message, 'error'); // Show error alert
      return;
    }

    setError('');
    console.log('PaymentMethod:', paymentMethod);

    // Confirm payment
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'n/a',
          name: user?.displayName || 'n/a',
        },
      },
    });

    if (confirmError) {
      console.log('Confirm Error:', confirmError);
      Swal.fire('Payment Failed', confirmError.message, 'error'); // Show error alert
    } else {
      console.log('PaymentIntent:', paymentIntent);
      if (paymentIntent.status === 'succeeded') {
        console.log('Transaction ID:', paymentIntent.id);

        // Save payment data in the database
        const paymentData = {
          transactionId: paymentIntent.id,
          amount: total,
          email: user?.email,
          name: user?.displayName,
          date: new Date().toISOString(),
          cartItems: cartUser.map((item) => ({
            courseId: item.course._id,
            courseName: item.course.courseName,
            price: item.course.price,
          })),
        };

        // Save payment details
        axios.post('http://localhost:5000/save-payment', paymentData)
          .then((res) => {
            console.log('Payment saved:', res.data);
            Swal.fire({
              title: 'Payment Successful!',
              text: `Transaction ID: ${paymentIntent.id}`,
              icon: 'success',
            });

            // Remove cart items after successful payment
            axios.post('http://localhost:5000/remove-cart-items', { email: user?.email })
              .then((response) => {
                console.log('Cart items removed:', response.data);

                // Clear the cart data in the frontend
                setCartUser([]); // This clears the cart state
              })
              .catch((error) => {
                console.error('Error removing cart items:', error);
              });
          })
          .catch((error) => {
            console.error('Error saving payment:', error);
            Swal.fire('Payment Save Failed', 'Error storing payment in DB', 'error');
          });
      }
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
      <h2 className="text-2xl font-semibold text-center text-gray-700">Secure Checkout</h2>
      <p className="text-center text-gray-500">Complete your payment below</p>

      <form onSubmit={handleSubmit} className="mt-6">
        <div className="border border-gray-300 p-4 rounded-lg bg-gray-100">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': { color: '#aab7c4' },
                },
                invalid: { color: '#9e2146' },
              },
            }}
          />
        </div>
        
        {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}

        <button 
          className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all disabled:bg-gray-400"
          type="submit" 
          disabled={!stripe || !clientSecret}
        >
          Pay ${total.toFixed(2)}
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;

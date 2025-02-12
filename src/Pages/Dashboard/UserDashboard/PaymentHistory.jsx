import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import axios from "axios";

const PaymentHistory = () => {
    const { user } = useContext(AuthContext);
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        if (user?.email) {
            axios.get(`http://localhost:5000/payment/${user.email}`)
                .then(res => {
                    setPayments(res.data);
                })
                .catch(err => {
                    console.error(err.message);
                });
        }
    }, [user?.email]);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-semibold text-gray-900 mb-6">Payment History</h1>

            {payments.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 px-4 py-2">Transaction ID</th>
                                <th className="border border-gray-300 px-4 py-2">Name</th>
                                <th className="border border-gray-300 px-4 py-2">Amount</th>
                                <th className="border border-gray-300 px-4 py-2">Date</th>
                                <th className="border border-gray-300 px-4 py-2">Course Name</th>
                                <th className="border border-gray-300 px-4 py-2">Course Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payments.map((payment, index) => (
                                payment.cartItems.map((course, courseIndex) => (
                                    <tr key={`${index}-${courseIndex}`} className="text-center">
                                        <td className="border border-gray-300 px-4 py-2">{payment.transactionId}</td>
                                        <td className="border border-gray-300 px-4 py-2">{payment.name}</td>
                                        <td className="border border-gray-300 px-4 py-2">${payment.amount}</td>
                                        <td className="border border-gray-300 px-4 py-2">{new Date(payment.date).toLocaleDateString()}</td>
                                        <td className="border border-gray-300 px-4 py-2">{course.courseName}</td>
                                        <td className="border border-gray-300 px-4 py-2">${course.price}</td>
                                    </tr>
                                ))
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-center text-gray-500">No payments found.</p>
            )}
        </div>
    );
};

export default PaymentHistory;

import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import swal from 'sweetalert2';  // Import SweetAlert2

const ReviewForm = () => {
  const [rating, setRating] = useState(0);  // Rating from 1 to 5
  const [reviewText, setReviewText] = useState('');
  const { user } = useContext(AuthContext); // Get user data from context

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate rating
    if (rating < 1 || rating > 5) {
      swal.fire({
        icon: 'error',
        title: 'Invalid Rating',
        text: 'Please select a valid rating between 1 and 5.',
      });
      return;
    }

    // Make a POST request to add a review to the database
    axios.post('http://localhost:5000/review', {
      rating,
      reviewText,
      userEmail: user.email,      // Send the user's email
      userName: user.displayName,        // Send the user's name
    })
    .then((response) => {
      swal.fire({
        icon: 'success',
        title: 'Review Submitted!',
        text: 'Your review has been successfully submitted.',
      });
      // Reset the form
      setRating(0);
      setReviewText('');
    })
    .catch((error) => {
      console.error('Error submitting review:', error);
      swal.fire({
        icon: 'error',
        title: 'Submission Failed',
        text: 'There was an error submitting your review.',
      });
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Submit Your Review</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Rating</label>
          <select 
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value={0}>Select Rating</option>
            <option value={1}>1 - Poor</option>
            <option value={2}>2 - Fair</option>
            <option value={3}>3 - Good</option>
            <option value={4}>4 - Very Good</option>
            <option value={5}>5 - Excellent</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Review</label>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            rows="4"
            placeholder="Write your review..."
          ></textarea>
        </div>
        <button type="submit" className="bg-indigo-600 text-white p-2 rounded-lg">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;

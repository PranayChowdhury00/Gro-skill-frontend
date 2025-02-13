import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const TestimonialPage = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("https://skill-gro-banckend.vercel.app/review") // Replace with your API endpoint
      .then((response) => setReviews(response.data))
      .catch((error) => console.error("Error fetching reviews:", error));
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h2 className="text-center text-3xl font-bold text-indigo-600 mb-8">User Testimonials</h2>
      <div className="max-w-4xl mx-auto grid gap-6">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review._id} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{review.userName}</h3>
                <div className="flex">{renderStars(review.rating)}</div>
              </div>
              <p className="text-gray-600">{review.reviewText}</p>
              <p className="text-sm text-gray-400 mt-2">
                {new Date(review.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No reviews available.</p>
        )}
      </div>
    </div>
  );
};

export default TestimonialPage;

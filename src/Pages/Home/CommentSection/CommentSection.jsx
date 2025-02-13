import axios from "axios";
import React, { useEffect, useState } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(1);
  const [totalComments, setTotalComments] = useState(0);
  const limit = 5; // Number of comments per page

  // ✅ Fetch Comments from Server
  const fetchComments = async () => {
    try {
      const response = await axios.get(`https://skill-gro-banckend.vercel.app/getComment?page=${page}&limit=${limit}`);
      setComments(response.data.comments);
      setTotalComments(response.data.totalComments);
    } catch (error) {
      console.error("Error fetching comments:", error.message);
    }
  };

  // ✅ Handle Form Submission (Add Comment)
  const handleComment = async (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const data = { comment, name, email };

    try {
      await axios.post("https://skill-gro-banckend.vercel.app/doComment", data);
      e.target.reset(); // Clear the form
      fetchComments(); // Refresh comments
    } catch (error) {
      console.error("Error submitting comment:", error.message);
    }
  };

  // ✅ Fetch Comments on Component Mount and Page Change
  useEffect(() => {
    fetchComments();
  }, [page]);

  return (
    <div className="bg-gray-100 w-full flex flex-col md:flex-row justify-center items-center py-10">
      {/* Add Your Comment Section */}
      <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md md:mr-6 md:mb-0 mb-6">
        <h2 className="text-lg font-semibold text-gray-700 text-center mb-4">
          Add Your Comment
        </h2>
        <form onSubmit={handleComment} className="space-y-4">
          <textarea
            name="comment"
            placeholder="Write your comment..."
            className="textarea textarea-bordered w-full h-24 p-3 rounded-md"
            required
          ></textarea>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input input-bordered w-full"
            required
          />
          <input
            name="email"
            type="email"
            className="w-full outline-none pl-2 border border-gray-300 rounded-md p-2"
            placeholder="Enter your email"
            required
          />
          <button className="btn btn-primary w-full mt-2 hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>
  
      {/* Comments Section */}
      <div className="w-full max-w-md bg-white p-4 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Comments</h3>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div key={index} className="border-b py-2">
              <p className="text-sm text-gray-700">
                <strong>{comment.name}:</strong> {comment.comment}
              </p>
              <p className="text-xs text-gray-500">{comment.email}</p>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500">No comments yet.</p>
        )}
  
        {/* Pagination Buttons */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="btn btn-sm btn-outline"
          >
            Previous
          </button>
          <span>Page {page}</span>
          <button
            onClick={() => setPage(page + 1)}
            disabled={page * limit >= totalComments}
            className="btn btn-sm btn-outline"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
  
};

export default CommentSection;

import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert

const AddCourse = () => {
  const [courseName, setCourseName] = useState("");
  const [instructor, setInstructor] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [review] = useState(4.8); // Default review rating

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://skill-gro-banckend.vercel.app/addCourses", {
        courseName,
        instructor,
        price: parseFloat(price), // Ensure price is a number
        image,
        category,
        review, // Default rating
      });

      // Show success alert
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your course has been added",
        showConfirmButton: false,
        timer: 1500,
      });

      // Reset form fields after success
      setCourseName("");
      setInstructor("");
      setPrice("");
      setImage("");
      setCategory("");

    } catch (error) {
      console.error("Error adding course:", error);

      // Show error alert
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Failed to add course",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen flex justify-center items-center rounded-md">
      <div className="hero-content w-full max-w-4xl"> 
        {/* Increased max width to make the form wider */}
        <div className="card bg-base-100 w-full shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-center mb-4">Add New Course</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Course Name</span>
              </label>
              <input
                type="text"
                placeholder="Course Name"
                className="input input-bordered w-full"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Instructor Name</span>
              </label>
              <input
                type="text"
                placeholder="Instructor"
                className="input input-bordered w-full"
                value={instructor}
                onChange={(e) => setInstructor(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                className="input input-bordered w-full"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="url"
                placeholder="Image URL"
                className="input input-bordered w-full"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                placeholder="Category"
                className="input input-bordered w-full"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              />
            </div>

            {/* Hidden Input for Review (Default: 4.8) */}
            <input type="hidden" value={review} readOnly />

            <div className="form-control col-span-2">
              <button type="submit" className="btn btn-primary w-full">
                Add Course
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;

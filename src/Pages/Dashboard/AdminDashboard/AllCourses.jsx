import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaStar, FaEdit, FaTrash } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [modalData, setModalData] = useState({
    courseName: "",
    instructor: "",
    category: "",
    image: "",
    price: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/courses")
      .then((result) => {
        setCourses(result.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  // Open Modal with Course Data
  const openUpdateModal = (course) => {
    setSelectedCourse(course._id);
    setModalData({
      courseName: course.courseName,
      instructor: course.instructor,
      category: course.category,
      image: course.image,
      price: course.price,
    });
    document.getElementById("updateModal").showModal();
  };

  // Handle Input Change in Modal
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setModalData({ ...modalData, [name]: value });
  };

  // Handle Course Update Submission
  const handleUpdateCourse = async (e) => {
    e.preventDefault();
    if (!selectedCourse) return;
  
    // Convert price to number
    const updatedData = {
      ...modalData,
      price: parseFloat(modalData.price),
    };
  
    try {
      const response = await axios.patch(
        `http://localhost:5000/updateCourse/${selectedCourse}`,
        updatedData
      );
  
      if (response.status === 200) {
        Swal.fire("Updated!", "Your course has been updated.", "success");
        setCourses((prevCourses) =>
          prevCourses.map((course) =>
            course._id === selectedCourse ? { ...course, ...updatedData } : course
          )
        );
        document.getElementById("updateModal").close();
      } else {
        Swal.fire("Error", response.data.message, "error");
      }
    } catch (error) {
      Swal.fire("Error", "Something went wrong!", "error");
    }
  };
  

  // Handle Delete Course
  const handleDeleteCourse = (courseId) => {
    // console.log(courseId)
    Swal.fire({
      title: "Are you sure?",
      text: "This course will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/deleteCourse/${courseId}`)
          .then((response) => {
            setCourses(courses.filter((course) => course._id !== courseId));
            Swal.fire("Deleted!", "The course has been deleted.", "success");
          })
          .catch((err) => {
            console.error(err.message);
            Swal.fire("Error", "Failed to delete the course.", "error");
          });
      }
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-4">All Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {courses.map((course) => (
          <div key={course._id} className="card bg-base-100 w-80 shadow-xl">
            <figure className="p-5 relative group overflow-hidden">
              <img
                className="rounded-xl transition-all duration-500 group-hover:brightness-75"
                src={course.image}
                alt={course.courseName}
              />
              <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 transition-all duration-500 ease-in-out group-hover:left-full"></div>
            </figure>
            <div className="card-body">
              <div className="flex justify-between items-center">
                <h2 className="card-title bg-base-200 px-2 py-1 text-sm rounded-xl">
                  {course.category}
                </h2>
                <p className="flex items-center">
                  <FaStar className="text-yellow-400" /> ({course.review || 4.8}{" "}
                  Reviews)
                </p>
              </div>
              <h1 className="text-xl font-bold py-1">{course.courseName}</h1>
              <p className="text-gray-500">{course.instructor}</p>
              <div className="flex justify-between items-center mt-4">
                <Link to={`/course/${course._id}`}>
                  <button className="btn bg-yellow-400 font-bold border-1 border-black px-6 hover:bg-yellow-500 mr-4">
                    Enroll Now <FaArrowRightLong />
                  </button>
                </Link>
                <p className="text-indigo-600 font-semibold text-[19px]">
                  {typeof course.price === "number"
                    ? course.price.toFixed(2)
                    : "$0.00"}
                </p>
              </div>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => openUpdateModal(course)}
                  className="btn bg-blue-500 text-white px-4 hover:bg-blue-600"
                >
                  <FaEdit /> Update
                </button>
                <button
                  onClick={() => handleDeleteCourse(course._id)}
                  className="btn bg-red-500 text-white px-4 hover:bg-red-600"
                >
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Update Modal */}
      <dialog id="updateModal" className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Update Course</h3>
          <form onSubmit={handleUpdateCourse} className="mt-4 space-y-3">
            <label className="block">
              <span className="text-gray-700">Course Name</span>
              <input
                type="text"
                name="courseName"
                value={modalData.courseName}
                onChange={handleInputChange}
                className="input input-bordered w-full mt-1"
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Instructor</span>
              <input
                type="text"
                name="instructor"
                value={modalData.instructor}
                onChange={handleInputChange}
                className="input input-bordered w-full mt-1"
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Category</span>
              <input
                type="text"
                name="category"
                value={modalData.category}
                onChange={handleInputChange}
                className="input input-bordered w-full mt-1"
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Image URL</span>
              <input
                type="text"
                name="image"
                value={modalData.image}
                onChange={handleInputChange}
                className="input input-bordered w-full mt-1"
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Price</span>
              <input
                type="number"
                name="price"
                value={modalData.price}
                onChange={handleInputChange}
                className="input input-bordered w-full mt-1"
              />
            </label>
            <div className="modal-action">
              <button type="submit" className="btn bg-green-500 text-white">
                Update
              </button>
              <button
                type="button"
                onClick={() => document.getElementById("updateModal").close()}
                className="btn bg-gray-500 text-white"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default AllCourses;

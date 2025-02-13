import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert
import { AuthContext } from "../../AuthProvider/AuthProvider";

const CourseDetails = () => {
    const{user}=useContext(AuthContext);
    // console.log(user.email)
  const { id } = useParams();
  const [courses, setCourses] = useState([]);
  const [singleCourse, setSingleCourse] = useState(null);

  useEffect(() => {
    axios
      .get("https://skill-gro-banckend.vercel.app/courses")
      .then((result) => {
        setCourses(result.data);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  useEffect(() => {
    if (courses.length > 0) {
      const foundCourse = courses.find((x) => x._id === id);
      setSingleCourse(foundCourse || null);
    }
  }, [courses, id]);

  const handleAddToCart = () => {
    const cartData = {
        email:user.email,
        course: singleCourse
    }
    if (!singleCourse) return;

    axios
      .post("https://skill-gro-banckend.vercel.app/addToCart", cartData)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Course added to cart!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(() => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Failed to add course",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  if (!singleCourse) {
    return <p className="text-center mt-10">Loading course details...</p>;
  }

  return (
    <div className="mt-10 mb-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-semibold py-7">Course Details</h1>

      <div>
        <img className="w-full h-[300px] rounded-xl" src={singleCourse.image} alt="" />
        <div className="card-body">
          <div className="flex justify-between items-center">
            <h2 className="card-title bg-base-200 px-2 py-1 text-xl rounded-xl">
              {singleCourse.category}
            </h2>
            <p className="flex items-center">
              <FaStar className="text-yellow-400" /> (4.8 Reviews)
            </p>
          </div>
          <h1 className="text-3xl font-bold py-1">{singleCourse.courseName}</h1>
          <p className="text-gray-500">{singleCourse.instructor}</p>
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={handleAddToCart}
              className="btn bg-yellow-400 font-bold border-1 border-black px-6 hover:bg-yellow-500 mr-4"
            >
              Add to Cart <FaArrowRightLong />
            </button>
            <p className="text-indigo-600 font-semibold text-[19px]">
              ${singleCourse.price.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;

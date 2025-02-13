import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Course = () => {
  const { user } = useContext(AuthContext); // Get the logged-in user
  const [courses, setCourses] = useState([]);
  const [userRole, setUserRole] = useState(null); // Store user role

  // Fetch the current user's role
  useEffect(() => {
    if (user?.email) {
      axios
        .get(`https://skill-gro-banckend.vercel.app/user/${user.email}`) // Fetch user by email
        .then((res) => {
          setUserRole(res.data.userRole); // Set userRole
        })
        .catch((err) => console.error("Error fetching user:", err.message));
    }
  }, [user]);

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

  const handleEnrollBtn = (id) => {
    console.log("Enrolled in course:", id);
  };

  return (
    <div className="max-w-7xl mx-auto mb-10 mt-5 min-h-[calc(100vh-180px)]">
      <h1 className="text-3xl font-bold py-5 ">All Courses ({courses.length})</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {courses.map((course) => (
          <div key={course._id} className="card bg-base-100 w-96 shadow-xl">
            <figure className="p-5 relative group overflow-hidden">
              <img
                className="rounded-xl transition-all duration-500 group-hover:brightness-75"
                src={course.image}
                alt={course.title}
              />
              <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 transition-all duration-500 ease-in-out group-hover:left-full"></div>
            </figure>
            <div className="card-body">
              <div className="flex justify-between items-center">
                <h2 className="card-title bg-base-200 px-2 py-1 text-sm rounded-xl">
                  {course.category}
                </h2>
                <p className="flex items-center">
                  <FaStar className="text-yellow-400" /> (4.8 Reviews)
                </p>
              </div>
              <h1 className="text-xl font-bold py-1">{course.courseName}</h1>
              <p className="text-gray-500">{course.instructor}</p>
              <div className="flex justify-between items-center mt-4">
                {userRole === "admin" ? (
                  <button className="btn btn-success opacity-50 cursor-not-allowed" disabled>
                    Already an Admin
                  </button>
                ) : (
                  <Link to={`/course/${course._id}`}>
                    <button
                      onClick={() => handleEnrollBtn(course._id)}
                      className="btn bg-yellow-400 font-bold border-1 border-black px-6 hover:bg-yellow-500 mr-4"
                    >
                      Enroll Now <FaArrowRightLong />
                    </button>
                  </Link>
                )}
                <p className="text-indigo-600 font-semibold text-[19px]">
                  ${course.price.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;

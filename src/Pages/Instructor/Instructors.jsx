import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Instructors = () => {
  const { user } = useContext(AuthContext); // Get the logged-in user
  const [instructors, setInstructors] = useState([]);
  const [userRole, setUserRole] = useState(null); // Store user role

  // Fetch the logged-in user's role
  useEffect(() => {
    if (user?.email) {
      axios
        .get(`https://skill-gro-banckend.vercel.app/user/${user.email}`) // Fetch user by email
        .then((res) => {
          setUserRole(res.data.userRole); // Set userRole
          // console.log(res.data)
        })
        .catch((err) => console.error("Error fetching user:", err.message));
    }
  }, [user]);

  // Fetch instructors (excluding pending status)
  useEffect(() => {
    axios
      .get("https://skill-gro-banckend.vercel.app/getInstructor")
      .then((result) => {
        const filteredInstructors = result.data.filter(
          (instructor) => instructor.status !== "pending"
        );
        setInstructors(filteredInstructors);
      })
      .catch((err) => {
        console.error("Error fetching instructors:", err.message);
      });
  }, []);
console.log(userRole)
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-8 p-10 bg-gray-100">
        {instructors.map((instructor, index) => (
          <motion.div
            key={instructor.email}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
            className="bg-white rounded-2xl shadow-lg w-96 overflow-hidden transform transition-all"
          >
            <img
              src={instructor.photo}
              alt={instructor.name}
              className="w-full h-56 object-cover rounded-t-2xl"
            />
            <div className="p-5">
              <h2 className="text-2xl font-bold text-gray-800">{instructor.name}</h2>
              <p className="text-gray-600 mt-2 text-sm">{instructor.description}</p>
              <p className="mt-1 text-blue-500 font-medium">Subject: {instructor.subject}</p>
              <div className="mt-4 flex justify-end">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg transition-all"
                >
                  View Profile
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col items-center py-7 bg-base-200 max-w-7xl mx-auto rounded-lg mt-10 mb-10">
        <h1 className="text-3xl font-bold text-gray-900 py-2">Apply for Instructor</h1>
        <p className="text-[18px] font-normal text-gray-700 py-2">We are looking for you!</p>

        {userRole === "admin" ? (
          <button className="btn btn-success opacity-50 cursor-not-allowed" disabled>
            Already an Admin
          </button>
        ) : (
          <Link to="/becomeInstructor">
            <button className="btn btn-success">Apply Now</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Instructors;

import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const AdminDashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar - Collapsible for Mobile */}
      <div className={`lg:w-1/4 w-64 bg-indigo-700 p-6 text-white transition-all duration-300 ${isSidebarOpen ? "block" : "hidden"} lg:block`}>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-center">Admin Dashboard</h2>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-white text-2xl">
            <FaTimes />
          </button>
        </div>
        <hr className="border-indigo-400 mb-6" />

        <ul>
          <li className="text-lg font-medium mb-6">
            <NavLink
              to="adminProfile"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive ? "bg-indigo-500 text-white" : "hover:bg-indigo-600"
                }`
              }
            >
              Admin Profile
            </NavLink>
          </li>
          <li className="text-lg font-medium mb-6">
            <NavLink
              to="addCourse"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive ? "bg-indigo-500 text-white" : "hover:bg-indigo-600"
                }`
              }
            >
              Add Course
            </NavLink>
          </li>
          <li className="text-lg font-medium mb-6">
            <NavLink
              to="allCourses"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive ? "bg-indigo-500 text-white" : "hover:bg-indigo-600"
                }`
              }
            >
             Manage Courses
            </NavLink>
          </li>
          <li className="text-lg font-medium mb-6">
            <NavLink
              to="manageUsers"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive ? "bg-indigo-500 text-white" : "hover:bg-indigo-600"
                }`
              }
            >
             Manage Users
            </NavLink>
          </li>
          <li className="text-lg font-medium mb-6">
            <NavLink
              to="instructorRequest"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive ? "bg-indigo-500 text-white" : "hover:bg-indigo-600"
                }`
              }
            >
             Instructor Request
            </NavLink>
          </li>
          <li className="text-lg font-medium mb-6">
            <NavLink
              to="transactions"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive ? "bg-indigo-500 text-white" : "hover:bg-indigo-600"
                }`
              }
            >
             Transactions 
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8 bg-white shadow-lg rounded-l-lg relative">
        {/* Mobile Sidebar Toggle Button */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden text-indigo-700 text-2xl absolute top-4 left-4"
        >
          <FaBars />
        </button>

        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;

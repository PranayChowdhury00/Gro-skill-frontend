import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* Left Sidebar */}
      <div className="w-1/4 bg-indigo-700 p-6 text-white">
        <div className="mb-8">
          <h2 className="text-3xl py-2 font-semibold text-center">Dashboard</h2>
          <hr />
        </div>
        
        <ul>
          <li className="text-xl font-medium mb-6">
            <NavLink 
              to="userProfile" 
              className={({ isActive }) => 
                `block ${isActive ? 'text-indigo-200 w-[110px] border-b-2 border-b-indigo-400' : 'text-white'} 
                hover:text-indigo-200 hover:w-[110px] hover:border-b-2 hover:border-b-indigo-400 transition duration-300`
              }
            >
              User Profile
            </NavLink>
          </li>
          <li className="text-xl font-medium mb-6">
            <NavLink 
              to="progress" 
              className={({ isActive }) => 
                `block ${isActive ? 'text-indigo-200 w-[115px] border-b-2 border-b-indigo-400' : 'text-white'} 
                hover:text-indigo-200 hover:w-[115px] hover:border-b-2 hover:border-b-indigo-400 transition duration-300`
              }
            >
              My Progress
            </NavLink>
          </li>
          <li className="text-xl font-medium mb-6">
            <NavLink 
              to="myCourses" 
              className={({ isActive }) => 
                `block ${isActive ? 'text-indigo-200 w-[115px] border-b-2 border-b-indigo-400' : 'text-white'} 
                hover:text-indigo-200 hover:w-[115px] hover:border-b-2 hover:border-b-indigo-400 transition duration-300`
              }
            >
              My Courses
            </NavLink>
          </li>
          <li className="text-xl font-medium mb-6">
            <NavLink 
              to="paymentHistory" 
              className={({ isActive }) => 
                `block ${isActive ? 'text-indigo-200 w-[160px] border-b-2 border-b-indigo-400' : 'text-white'} 
                hover:text-indigo-200 hover:w-[160px] hover:border-b-2 hover:border-b-indigo-400 transition duration-300`
              }
            >
              Payment History
            </NavLink>
          </li>
          <li className="text-xl font-medium mb-6">
            <NavLink 
              to="reviewForm" 
              className={({ isActive }) => 
                `block ${isActive ? 'text-indigo-200 w-[130px] border-b-2 border-b-indigo-400' : 'text-white'} 
                hover:text-indigo-200 hover:w-[130px] hover:border-b-2 hover:border-b-indigo-400 transition duration-300`
              }
            >
              Review Form
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-8 bg-white shadow-lg rounded-l-lg">
        <Outlet />
      </div>
    </div>
  );
};

export default UserDashboard;

import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, loading, signOutUser } = useContext(AuthContext);
  console.log(user);
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/course">Course</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    </>
  );
  const handelLogOut = () => {
    signOutUser().then((result) => {
      const user = result.user;

      if (user) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You have successfully signed out",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div className="navbar bg-base-200 shadow-xl sticky top-0 z-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex gap-5 items-center">
          <img className="w-14 h-14 rounded-full" src="/logo.jpg" alt="" />
          <a className=" text-xl font-semibold">Gro Skill</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <>
          {user ? (
            <>
              <span className="text-gray-700 font-normal mr-3">{user.displayName}</span>
              <button className="btn" onClick={handelLogOut}>Log Out</button>
            </>
          ) : (
            <Link to="/login">Log In</Link>
          )}
        </>
      </div>
    </div>
  );
};

export default Navbar;

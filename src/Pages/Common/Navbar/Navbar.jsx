import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import axios from "axios";

const Navbar = () => {
  const { user, loading, signOutUser } = useContext(AuthContext);
  const [cartCount, setCartCount] = useState(0);
  const [admin, setAdmin] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/user`)
      .then((result) => setAdmin(result.data))
      .catch((err) => console.error(err.message));
  }, [user]);
  const findAdmin = admin.some((a) => a.userRole === "admin");
  // console.log(findAdmin);
  // Fetch cart count whenever `user` changes
  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:5000/cartCount/${user.email}`)
        .then((res) => setCartCount(res.data.count))
        .catch((error) => console.error("Error fetching cart count:", error));
    }
  }, [user]); // Fetch cart count whenever `user` changes

  // Function to update cart count after adding an item
  const updateCartCount = () => {
    if (user?.email) {
      axios
        .get(`http://localhost:5000/cartCount/${user.email}`)
        .then((res) => setCartCount(res.data.count))
        .catch((error) => console.error("Error fetching cart count:", error));
    }
  };

  // Function to handle adding an item to the cart
  const addToCart = async (course) => {
    try {
      const response = await axios.post("http://localhost:5000/addToCart", {
        email: user.email,
        course,
      });

      // Call updateCartCount to get the updated cart count
      updateCartCount();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${course} has been added to your cart!`,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const handelLogOut = () => {
    signOutUser().then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "You have successfully signed out",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };

  return (
    <div className="navbar bg-base-200 shadow-xl sticky top-0 z-20 px-10">
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
            <li>
              <NavLink className="text-[17px] font-medium" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="text-[17px] font-medium" to="/course">
                Course
              </NavLink>
            </li>
            {findAdmin ? (
              <li>
                <NavLink
                  className="text-[17px] font-medium"
                  to="/adminDashboard"
                >
                  Admin Dashboard
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink
                  className="text-[17px] font-medium"
                  to="/UserDashboard"
                >
                  User Dashboard
                </NavLink>
              </li>
            )}

            <li>
              <NavLink className="text-[17px] font-medium" to="/videoPlayer">
                VideoPlayer
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex gap-5 items-center">
          <img className="w-14 h-14 rounded-full" src="/logo.jpg" alt="" />
          <a className="text-xl font-semibold">Gro Skill</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal items-center px-1">
          <li>
            <NavLink className="text-[17px] font-medium" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="text-[17px] font-medium" to="/course">
              Course
            </NavLink>
          </li>
          {findAdmin ? (
            <li>
              <NavLink className="text-[17px] font-medium" to="/adminDashboard">
                Admin Dashboard
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink className="text-[17px] font-medium" to="/UserDashboard">
                User Dashboard
              </NavLink>
            </li>
          )}
          <li>
            <NavLink className="text-[17px] font-medium" to="/videoPlayer">
              VideoPlayer
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="mr-10 flex gap-3 relative">
          <Link to="/cart" className="relative">
            <IoCartOutline className="w-8 h-8 hover:text-yellow-400" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-sm rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          <IoMdHeartEmpty className="w-8 h-8 hover:text-yellow-400" />
        </div>
        <div>
          {user ? (
            <>
              <span className="text-gray-700 font-normal mr-3">
                {user.displayName}
              </span>
              <button className="btn" onClick={handelLogOut}>
                Log Out
              </button>
            </>
          ) : (
            <Link className="text-[18px] font-medium" to="/login">
              Log In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

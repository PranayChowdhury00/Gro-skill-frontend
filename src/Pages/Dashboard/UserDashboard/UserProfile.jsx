import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const UserProfile = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [userDb, setUserDb] = useState([]);

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

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:5000/user/${user.email}`)
        .then((res) => setUserDb(res.data))
        .catch((err) => console.log(err.message));
    }
  }, [user]);

  console.log(userDb);

  return (
    <div className="flex justify-center bg-gray-50 ">
      {userDb.map((user) => {
        return (
          <div className="card bg-white w-[400px] shadow-xl p-6 text-center rounded-lg">
            <h1 className="text-3xl font-semibold pb-5 text-indigo-600">
              Your Profile
            </h1>

            <figure>
              <img
                className="rounded-full w-32 h-32 object-cover mx-auto border-2 border-gray-300"
                src={user?.photoURL || "https://via.placeholder.com/150"}
                alt={user?.userName || "User"}
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title ml-2 text-indigo-600">
                Name: {user?.userName || "N/A"}
              </h2>
              <p className="text-[17px] text-indigo-400">
                Email: {user?.email || "N/A"}
              </p>

              <div className="card-actions flex justify-center mt-4 gap-4">
                <Link to="/UserDashboard/edit-profile">
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                    Edit Profile
                  </button>
                </Link>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                  onClick={handelLogOut}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserProfile;

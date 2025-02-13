import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2"; // Import SweetAlert

const EditProfile = () => {
  const { user } = useContext(AuthContext);
  const [userDb, setUserDb] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      axios.get(`https://skill-gro-banckend.vercel.app/user/${user.email}`)
        .then(res => {
          setUserDb(res.data); // Assuming res.data is an array
          if (res.data.length > 0) {
            const userData = res.data[0]; // Access the first object in the array
            setName(userData.name || "");
            setEmail(userData.email || "");
            setPhotoURL(userData.photoURL || "");
          }
        })
        .catch(err => {
          console.error("Error fetching user data:", err.message);
        });
    }
  }, [user?.email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!name.trim() || !email.trim() || !photoURL.trim()) {
      alert("All fields are required!");
      return;
    }
  
    const updatedUser = { name, email, photoURL };
  
    try {
      const response = await fetch(`https://skill-gro-banckend.vercel.app/user/${user?.email}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      });
  
      if (response.ok) {
        // Show success message with SweetAlert
        Swal.fire({
          icon: 'success',
          title: 'Profile updated successfully!',
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        alert("Failed to update profile.");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-[400px] shadow-xl p-6">
        <h1 className="text-3xl font-semibold pb-5 text-center">Edit Profile</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium">Photo URL</label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={() => navigate("/userProfile")}
              className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;

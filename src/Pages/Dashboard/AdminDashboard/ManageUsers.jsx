import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://skill-gro-banckend.vercel.app/user")
      .then((result) => {
        setUsers(result.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  // ✅ Correctly filter out admins
  const onlyUser = users.filter((user) => user.userRole !== "admin");

  const makeAdmin = async (id) => {
    try {
      const response = await axios.patch(`https://skill-gro-banckend.vercel.app/makeAdmin/${id}`, {
        userRole: "admin",
      });
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === id ? { ...user, userRole: "admin" } : user
        )
      );
      // Success notification
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User role updated to Admin",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error("Error updating user role:", error);
      // Error notification
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Failed to update user role",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const deleteUser = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`https://skill-gro-banckend.vercel.app/deleteUser/${id}`);
          setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
          // Success notification
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User deleted successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        } catch (error) {
          console.error("Error deleting user:", error.message);
          // Error notification
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Failed to delete user",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* Table Head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>User Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {onlyUser.map((user, index) => (
              <tr key={index}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={
                            user.photoUrl ||
                            "https://img.daisyui.com/images/profile/demo/2@94.webp"
                          }
                          alt="User Avatar"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.userName || "Unknown"}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="text-sm opacity-50">
                    {user.email || "No location"}
                  </div>
                  <br />
                </td>
                <td>
                  <span className="badge badge-ghost badge-sm">
                    {user.userRole || "No role"}
                  </span>
                </td>
                <th>
                  <button onClick={() => deleteUser(user._id)} className="btn btn-warning mr-3">
                    Delete
                  </button>
                  <button onClick={() => makeAdmin(user?._id)} className="btn btn-success mr-3">
                    Make Admin
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;

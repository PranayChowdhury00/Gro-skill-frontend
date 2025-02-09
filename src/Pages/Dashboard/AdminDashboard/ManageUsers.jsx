import axios from "axios";
import React, { useEffect, useState } from "react";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/user")
      .then((result) => {
        setUsers(result.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  // ✅ Correctly filter out admins
  const onlyUser = users.filter((user) => user.userRole !== "admin");

  console.log(onlyUser); // ✅ Now this logs an array of user objects, not booleans

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
                          src={user.photoUrl || "https://img.daisyui.com/images/profile/demo/2@94.webp"}
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
                <div className="text-sm opacity-50">{user.email || "No location"}</div>
                  <br />
                </td>
                <td> <span className="badge badge-ghost badge-sm">
                    {user.userRole || "No role"}
                  </span></td>
                <th>
                  <button className="btn  btn-warning mr-3">Delete</button>
                  <button className="btn  btn-success mr-3">Make Admin</button>
                  <button className="btn  btn-info">Make Instructor</button>
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

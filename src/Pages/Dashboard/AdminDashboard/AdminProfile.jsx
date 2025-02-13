import axios from "axios";
import React, { useEffect, useState } from "react";

const AdminProfile = () => {
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    axios
      .get("https://skill-gro-banckend.vercel.app/user")
      .then((result) => {
        const adminUser = result.data.find((user) => user.userRole === "admin");
        setAdmin(adminUser);
      })
      .catch((err) => console.error(err.message));
  }, []);

  if (!admin) {
    return <p>Loading admin profile...</p>;
  }

  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure className="p-5">
        <img src={admin.photoUrl} className=" rounded-lg" alt="Admin Profile" />
      </figure>
      <div className="card-body">
        <h2 className="card-title"><span className="text-xl font-semibold">Name:</span>{admin.userName}</h2>
        <p className="text-gray-500"><span className=" font-medium">Email:</span>{admin.email}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Manage</button>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;

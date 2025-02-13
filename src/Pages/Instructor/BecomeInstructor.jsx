import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

const BecomeInstructor = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photo: "",
    resume: "",
    age: "",
    address: "",
    phone: "",
    subject: "",
    status:"pending"
  });
console.log(formData)
const handleChange = (e) => {
    const { name, value } = e.target; // No need to check for type here
    setFormData({ ...formData, [name]: value });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://skill-gro-banckend.vercel.app/applyInstructor",
        formData 
      );
      
      if (response.data.success) {
        Swal.fire({ icon: "success", title: "Application Submitted", timer: 1500 });
      } else {
        Swal.fire({ icon: "error", title: response.data.message, timer: 1500 });
      }
      setFormData({ name: "", email: "", photo: "", resume: "", age: "", address: "", phone: "", subject: "" });
    } catch (error) {
      Swal.fire({ icon: "error", title: "Submission Failed", timer: 1500 });
    }
  };
  

  return (
    <div className="container mx-auto py-10 max-w-lg bg-white p-6 mt-10 mb-10 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Become an Instructor</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required className="input input-bordered w-full" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="input input-bordered w-full" />
        <input type="text" name="photo" value={formData.photo} onChange={handleChange} placeholder="Photo URL" required className="input input-bordered w-full" />
        <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" required className="input input-bordered w-full" />
        <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" required className="input input-bordered w-full" />
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required className="input input-bordered w-full" />
        <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject to Teach" required className="input input-bordered w-full" />
        <input
  type="url"
  name="resume"
  value={formData.resume}
  onChange={handleChange}
  placeholder="Resume URL"
  required
  className="input input-bordered w-full"
/>


        <button type="submit" className="btn btn-primary w-full">Apply Now</button>
      </form>
    </div>
  );
};

export default BecomeInstructor;

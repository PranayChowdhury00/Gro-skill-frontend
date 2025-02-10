import axios from "axios";
import React, { useState } from "react";

const BecomeInstructor = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        photo: "",
        resume: null,
        age: "",
        address: "",
        phone: "",
        subject: "",
      });
    
      const handleChange = (e) => {
        const { name, value, type } = e.target;
        if (type === "file") {
          setFormData({ ...formData, [name]: e.target.files[0] });
        } else {
          setFormData({ ...formData, [name]: value });
        }
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        
        const data = new FormData();
        Object.keys(formData).forEach((key) => {
          data.append(key, formData[key]);
        });
    
        try {
          await axios.post("http://localhost:5000/applyInstructor", data, {
            headers: { "Content-Type": "multipart/form-data" },
          });
          alert("Application Submitted Successfully!");
          setFormData({ name: "", email: "", photo: "", resume: null, age: "", address: "", phone: "", subject: "" });
        } catch (error) {
          console.error("Error submitting application:", error);
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
        <input type="file" name="resume" onChange={handleChange} required className="file-input file-input-bordered w-full" />
        <button type="submit" className="btn btn-primary w-full">Apply Now</button>
      </form>
    </div>
    );
};

export default BecomeInstructor;
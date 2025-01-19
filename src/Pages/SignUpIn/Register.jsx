import React from "react";

const Register = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
            <h1 className="text-3xl text-gray-900 font-bold py-2">Create Your Account</h1>
            <p className="text-gray-700">Hey there! Ready to join the party? We just need a few details from you to get
            started. Let's do this!</p>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-[18px]">Full Name*</span>
              </label>
              <input
                type="text"
                placeholder="full name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[18px] font-semibold">Email*</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[18px] font-semibold">Password*</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

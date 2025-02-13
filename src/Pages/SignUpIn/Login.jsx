import React, { useContext } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import loginAnimation from "../../assets/login.json";
import { useLottie } from "lottie-react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";



const Login = () => {
  const { loading, googleLogin,signInUser,setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
}
  const options = {
    animationData: loginAnimation,
    loop: true,
  };
  const { View } = useLottie(options);

  const handleLogin = (e) => {
     e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;
    
            signInUser(email, password)
                .then((result) => {
                    const user = result.user;
                    console.log(user);
                    
                    if (user) {                    
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "You have successfully signed up",
                                showConfirmButton: false,
                                timer: 1500,
                            });
                        }
                        navigate('/')
                })
                .catch((err) => {
                  setLoading(false)
                    console.log(err.message);
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: `Error: ${err.message}`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                });
        };
  

  const handleGoogle = () => {
          googleLogin()
              .then((result) => {
                  if (result.user) {
                      const { displayName, email } = result.user;
      
                      // Store Google user in the database
                      fetch('https://skill-gro-banckend.vercel.app/googleUser', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ email, userName: displayName })
                      })
                      .then(res => res.json())
                      .then(data => console.log('Google user stored:', data))
                      .catch(err => console.error('Database error:', err));
      
                      Swal.fire({
                          position: "top-end",
                          icon: "success",
                          title: "You have successfully signed up with Google",
                          showConfirmButton: false,
                          timer: 1500,
                      });
                      navigate('/');
                  }
              })
              .catch((err) => {
                  Swal.fire({ position: "top-end", icon: "error", title: `Error: ${err.message}`, showConfirmButton: false, timer: 1500 });
              });
      };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-6">
        {/* Lottie Animation */}
        <div className="hidden lg:block w-1/2">{View}</div>

        {/* Registration Form */}
        <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl p-5">
          <h1 className="text-3xl text-gray-900 font-bold py-2">
            Welcome back!
          </h1>
          <p className="text-gray-700">
            Hey there! Ready to log in? Just enter your username and password
            below and you'll be back in action in no time. Let's go!
          </p>
          <button
            onClick={handleGoogle}
            className="mt-6 bg-base-300 rounded-md py-2 flex items-center justify-center gap-4 hover:border-2 hover:border-gray-600 hover:shadow-xl hover:transition hover:duration-500"
          >
            <FcGoogle /> Continue with Google
          </button>
          <div className="flex items-center gap-3 mt-4">
            <hr className="flex-grow border-gray-300" />
            <span>or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[18px] font-semibold">
                  Email*
                </span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-[18px] font-semibold">
                  Password*
                </span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
               <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-warning flex items-center justify-center gap-2 group hover:bg-primary hover:text-white">
                <span className="group-hover:text-white">Sign In</span>
                <FaLongArrowAltRight className="text-current transition-colors duration-300 group-hover:text-white" />
              </button>
            </div>
            <p>
              Don't have an account?{" "}
              <Link to="/register" className="text-primary">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

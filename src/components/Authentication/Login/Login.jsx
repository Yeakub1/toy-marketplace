import React from "react";
import "./login.css";
import { Link } from "react-router-dom";


const Login = () => {
      const handleLogin = (event) => {
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        
        const userLogin = { email, password };
          console.log(userLogin);
      };



  return (
      <div className="login-bg w-6/12 mx-auto mt-2">
        <div className="w-7/12 mx-auto flex items-center ">
          <div className="mt-5 w-full">
            <h1 className="text-4xl font-bold text-center text-primary">
              Login
            </h1>
            <form onSubmit={handleLogin}>
              <div className="mt-5">
                <label htmlFor="">Email:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  className="py-2 bg-slate-200 rounded-md border-0 w-full  px-2"
                  required
                />
              </div>
              <div className="mt-5">
                <label htmlFor="">Password:</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Your Password"
                  className="py-2 bg-slate-200 rounded-md border-0 w-full  px-2"
                  required
                />
              </div>

              <div className="flex items-center justify-between mt-5">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      for="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a href="#" className="text-sm font-medium text-primary">
                  Forgot password?
                </a>
              </div>
              <input
                type="submit"
                value="Login"
                className="py-3 w-full bg-blue-500 text-white font-semibold text-xl rounded-md mt-9"
              />
            </form>
            <p className="text-center mt-5">Or Sign In with</p>

            <button className="py-2 w-full flex items-center justify-center font-semibold  rounded-md mt-5 outline outline-offset-2 outline-1">
              <img
                width="20"
                height="20"
                className="mr-2"
                src="https://img.icons8.com/color/48/google-logo.png"
                alt="google-logo"
              />
              <p>Sign In Width Google</p>
            </button>

            <p className="text-sm font-light mt-3 text-gray-500 dark:text-gray-400">
              Don’t have an account yet?{" "}
              <Link to="/register" className="text-primary">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
  );
};

export default Login;

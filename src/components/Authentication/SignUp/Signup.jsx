import React, { useContext } from "react";
import "../Login/login.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

import { toast } from "react-hot-toast";
const SignUp = () => {
  const { createUser, updateUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const email = from.email.value;
      const password = from.password.value;
      const photo = from.photo.value;
    const loged = { name, email, password, photo };
    console.log(loged);


    createUser(email, password)
      .then(result => {
        const loggedUsr = result.user;
        console.log(loggedUsr);

        // phoot and name
       updateUser(name, photo)
         .then(() => {})
         .catch((error) => console.log("an error occuered", error));
         from.reset();
         toast.success("Successfully register!");
    })
      .catch(error => {
      console.log(error);
    })
  };


  return (
    <div className="login-bg lg:w-6/12 mx-auto mt-2">
      <div className="w-7/12 mx-auto flex items-center ">
        <div className="mt-2 w-full">
          <h1 className="text-4xl font-bold text-center text-primary">
            Register
          </h1>
          <form onSubmit={handleRegister}>
            <div className="mt-3">
              <label htmlFor="">Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="py-2 bg-slate-200 rounded-md border-0 w-full  px-2"
              />
            </div>
            <div className="mt-5">
              <label htmlFor="">Email:</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email Address"
                className="py-2 bg-slate-200 rounded-md border-0 w-full  px-2"
              />
            </div>
            <div className="mt-5">
              <label htmlFor="">Password:</label>
              <input
                type="password"
                name="password"
                required
                placeholder="Your Password"
                className="py-2 bg-slate-200 rounded-md border-0 w-full  px-2"
              />
            </div>
            <div className="mt-5">
              <label htmlFor="">Photo Url:</label>
              <input
                type="text"
                name="photo"
                required
                placeholder="Your Photo Url"
                className="py-2 bg-slate-200 rounded-md border-0 w-full  px-2"
              />
            </div>

            <div className="flex items-start mt-3">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  for="terms"
                  className="font-light text-gray-500 dark:text-gray-300"
                >
                  I accept the{" "}
                  <a
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    href="#"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>

            <input
              type="submit"
              value="Register"
              className="py-3 w-full bg-blue-500 text-white font-semibold text-xl rounded-md mt-5"
            />
          </form>
          <p className="text-sm font-light mt-3 text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <Link to="/login" className="text-primary">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

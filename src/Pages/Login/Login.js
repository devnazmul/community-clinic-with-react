import React from "react";
import { NavLink } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

export const Login = () => {
  const { signinWithGoogle } = useAuth();
  return (
    <div className="Login pt-36 flex justify-center items-center h-screen">
      <div className="w-full md:w-1/2 flex mb-10">
        <div className="bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-textPrimary text-5xl mb-1 font-medium title-font">
            Log In
          </h2>
          <div className="relative mb-4 text-left">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4 text-left">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <p className="text-left">
            Haven't An Account?{" "}
            <NavLink to="/signup" className="text-textPrimary">
              Sign Up.
            </NavLink>
          </p>
          <button className="mt-8 text-white bg-bgPrimary border-0 py-2 px-6 focus:outline-none hover:bg-green-300 rounded text-lg">
            Log In
          </button>

          <button
            onClick={signinWithGoogle}
            className="flex mx-auto  justify-center items-center w-1/2 mt-8 text-white bg-red-500 border-0 py-1 px-6 focus:outline-none hover:bg-green-300 rounded text-lg"
          >
            <FaGoogle className="text-4xl mr-5" /> Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export const SignUp = () => {
  const { signinWithGoogle, signUpWithEmail } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const saveEmail = (e) => {
    setEmail(e.target.value);
  };
  const savePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleRegistration = (e) => {
    signUpWithEmail(email, password);
    e.preventDefault();
  };

  return (
    <div className="SignUp pt-36 flex justify-center items-center h-screen">
      <div className="w-full md:w-1/2 flex">
        <div
          onSubmit={handleRegistration}
          className="bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
        >
          <form>
            <h2 className="text-textPrimary text-5xl mb-1 font-medium title-font">
              Sign Up
            </h2>
            <div className="relative mb-4 text-left">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                required
                onChange={saveEmail}
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4 text-left">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Password
              </label>
              <input
                required
                onChange={savePassword}
                type="password"
                id="password"
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <p className="text-left">
              Have An Account?{" "}
              <NavLink to="/login" className="text-textPrimary">
                Sign In.
              </NavLink>
            </p>
            <input
              type="submit"
              value="Sign Up"
              className="w-full mt-8 text-white bg-bgPrimary border-0 py-2 px-6 focus:outline-none hover:bg-green-300 rounded text-lg"
            />
          </form>
          <button
            onClick={signinWithGoogle}
            className="flex lg:flex-row flex-col mx-auto justify-center items-center w-1/2 mt-8 text-white bg-red-500 border-0 py-1 px-6 focus:outline-none hover:bg-green-300 rounded text-lg"
          >
            <FaGoogle className="text-4xl mr-5" /> Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import logo from "../../../images/site_identity/logo.png";
import useAuth from "../../../hooks/useAuth";

const Header = () => {

  const { logOut, user } = useAuth();
  return (
    <div className="z-40 text-gray-100 body-font shadow-lg fixed w-full bg-white">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <NavLink
          to="/"
          className="flex items-center text-gray-900 font-semibold text-xl mb-4 md:mb-0"
        >
          <img className="h-12" src={logo} alt="" /> Community Clinic
        </NavLink>
        <nav className="h-full md:ml-auto flex flex-wrap items-center text-base justify-center">
          <NavHashLink
            to="/home#home"
            activeClassName="font-semibold text-textPrimary"
            className="mr-5 text-black hover:text-gray-300"
          >
            Home
          </NavHashLink>
          <NavHashLink
            to="/services#services"
            activeClassName="font-semibold text-textPrimary"
            className="mr-5 text-black hover:text-gray-300"
          >
            Services
          </NavHashLink>
          <NavHashLink
            to="/doctors#doctors"
            activeClassName="font-semibold text-textPrimary"
            className="mr-5 text-black hover:text-gray-300"
          >
            Doctors
          </NavHashLink>
          <NavHashLink
            to="/contact#contact"
            activeClassName="font-semibold text-textPrimary"
            className="mr-5 text-black hover:text-gray-300"
          >
            Contact Us
          </NavHashLink>

          {user.email ? (
            <button
              onClick={logOut}
              className="mr-5 text-black hover:text-gray-300"
            >
              Log Out
            </button>
          ) : (
            <NavHashLink
              to="/login"
              activeClassName="font-semibold text-textPrimary"
              className="mr-5 text-black hover:text-gray-300"
            >
              Log In
            </NavHashLink>
          )}
        </nav>
        {user.email && (
          <div
            to="/"
            className="hover:bg-gray-100 rounded-full px-1 py-1 flex justify-between items-center"
          >
            <span className="text-textPrimary ml-2">{user.displayName}</span>
            <img
              className="h-10 w-10 rounded-full ml-3"
              src={user.photoURL}
              alt=""
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

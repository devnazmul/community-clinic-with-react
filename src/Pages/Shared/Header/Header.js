import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../../images/site_identity/logo.png';

const Header = () => {
  return (
    <div className="text-gray-100 body-font glass">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <NavLink to='/' className="flex items-center text-gray-900 font-semibold text-xl mb-4 md:mb-0">
          <img className="h-12" src={logo} alt="" /> Community Clinic
        </NavLink>
        <nav className="h-full md:ml-auto flex flex-wrap items-center text-base justify-center">
          <NavLink to='/home' activeClassName="font-bold text-green-600" className="mr-5 hover:text-gray-900">Home</NavLink>
          <NavLink to='/services' activeClassName="font-bold text-green-600" className="mr-5 hover:text-gray-900">Services</NavLink>
          <NavLink to='/shop' activeClassName="font-bold text-green-600" className="mr-5 hover:text-gray-900">Shop</NavLink>
          <NavLink to='/login' activeClassName="font-bold text-green-600" className="mr-5 hover:text-gray-900">Login</NavLink>
        </nav>
        <NavLink to='/profile' className="overflow-hidden h-10 w-10 rounded-full">
          <img className="h-10 w-16" src='https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg' alt="" />
        </NavLink>
      </div>
    </div>
  );
};

export default Header;

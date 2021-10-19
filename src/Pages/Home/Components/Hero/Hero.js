import React from 'react';
import { NavLink } from 'react-router-dom';
import heroImg from '../../../../images/hero.gif';

const Hero = () => {
    return (
        <div id="home" className="Hero pt-40 lg:pt-20 h-screen block md:flex justify-between items-center md:px-20 px-10">
            <div className="w-full md:w-1/2 text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-gray-700">We are always ready to take care your <span className=" text-textPrimary">health</span></h1>
                <p className="mt-10">At health grades, We tate the guesswork out of finding the right doctors and care for you and your family.</p>
                <div className="mt-10">
                    <NavLink to="/purches" className="block md:inline-block w-full rounded-md transition duration-500 ease-in-out hover:text-textPrimary hover:bg-white hover:border-2 hover:border-primary bg-bgPrimary font-medium text-white border-2 border-borderPrimary py-2 px-5 md:w-52 ">Booking a sit</NavLink>
                    <NavLink to="/purches" className="block md:inline-block w-full rounded-md transition duration-500 ease-in-out hover:bg-bgPrimary hover:text-white hover:border-2 hover:border-borderPrimary text-textPrimary font-medium bg-white border-2 border-borderPrimary py-2 px-5 md:w-52 lg:ml-full mt-5 lg:ml-5">Call to ambulance</NavLink>
                </div>
            </div>
            <div className='hidden md:block md:w-1/2'>
                <img src={heroImg} alt="" />
            </div>
        </div>
    );
};

export default Hero;
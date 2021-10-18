import React from 'react';
import heroImg from '../../../../images/hero.gif';

const Hero = () => {
    return (
        <div className="Hero pt-20 h-screen flex justify-between items-center px-20">
            <div className="w-1/2 text-left">
                <h1 className="text-7xl font-bold text-gray-700">We are always ready to take care your <span className=" text-textPrimary">health</span></h1>
                <p className="mt-10">At health grades, We tate the guesswork out of finding the right doctors and care for you and your family.</p>
                <div className="mt-10">
                    <button className="rounded-md transition duration-500 ease-in-out hover:text-textPrimary hover:bg-white hover:border-2 hover:border-primary bg-bgPrimary font-medium text-white border-2 border-borderPrimary py-2 px-5 w-48 ">Booking a sit</button>
                    <button className="rounded-md transition duration-500 ease-in-out hover:bg-bgPrimary hover:text-white hover:border-2 hover:border-borderPrimary text-textPrimary font-medium bg-white border-2 border-borderPrimary py-2 px-5 w-48 ml-5">Call to ambulance</button>
                </div>
            </div>
            <div>
                <img src={heroImg} alt="" />
            </div>
        </div>
    );
};

export default Hero;
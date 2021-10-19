import React from 'react';
import { NavLink } from 'react-router-dom';
import relax from '../../images/relax.gif';

const PurchaseDone = () => {
    return (
        <div className='h-full w-full flex flex-col justify-center items-center pt-36 md:pt-24'>
            <h1 className='text-5xl font-semibold text-textPrimary'>Your Order Has Taken</h1>
            <p className='text-gray-300 mt-5'>Have a relax we will contact you as soon as possible!</p>
            <img src={relax} alt="" />
            <NavLink to='/home' className='rounded-md transition duration-500 ease-in-out hover:text-textPrimary hover:bg-white hover:border-2 hover:border-primary bg-bgPrimary font-medium text-white border-2 border-borderPrimary py-2 px-5 w-52 mb-20'>
                Go Home
            </NavLink>
        </div>
    );
};

export default PurchaseDone;
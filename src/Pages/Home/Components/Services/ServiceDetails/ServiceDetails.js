import React from "react";
import { NavLink, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { name,desc,price } = useParams();

  return (
    <div
      className="text-gray-600 body-font overflow-hidden pt-28"
    >
      <div className="container px-10 sm:px-25 md:px-32 lg:px-40 xl:px-72 py-24 mx-auto">
        <div className="w-full mx-auto items-center flex flex-wrap text-left">
            <div className=" mx-auto w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Community Clinic
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {name}
              </h1>
              <p className="leading-relaxed">
                {desc}
              </p>
              <div className="flex mt-10">
                <span className="title-font font-medium text-2xl text-gray-900">
                  {price}
                </span>
                <NavLink to='/purches_done' className="flex ml-auto text-white bg-bgPrimary border-0 py-2 px-6 focus:outline-none hover:bg-green-400 rounded">
                  Purchase
                </NavLink>

              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default ServiceDetails;

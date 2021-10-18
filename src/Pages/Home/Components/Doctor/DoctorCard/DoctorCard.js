import React from "react";

const DoctorCard = ({ image, doctorName, jobStatus }) => {
  return (
    <div className="py-5 px-5 w-full md:w-1/2 lg:w-1/3">
      <div className="py-5 mx-3 px-3 h-full w-full flex items-center justify-around hover:bg-bgPrimary border-2 transition duration-500 ease-in-out hover:shadow-xl border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="mr-5 lg:h-36 md:h-36 w-36 rounded-full object-cover object-center"
          src={image}
          alt="blog"
        />
        <div className="text-left w-full">
          <h1 className="title-font text-lg font-medium text-gray-900">
            {doctorName}
          </h1>
          <span className="leading-relaxed">{jobStatus}</span>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;

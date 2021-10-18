import React from 'react'

const DoctorCard = ({image, doctorName, jobStatus}) => {
    return (
        <div class="p-4 md:w-1/2 lg:w-1/3">
              <div class="h-full hover:bg-bgPrimary border-2 transition duration-500 ease-in-out hover:shadow-xl border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={image}
                  alt="blog"
                />
                <div class="p-6 ">
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    {doctorName}
                  </h1>
                  <span class="leading-relaxed mb-3">
                    {jobStatus}
                  </span>
                </div>
              </div>
            </div>
    )
}

export default DoctorCard;
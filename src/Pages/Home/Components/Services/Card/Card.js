import React from 'react'
import { NavLink } from "react-router-dom";

export default function Card({id, serviceName, image, desc, price}) {
    return (
        <div className="p-4 md:w-1/2 lg:w-1/3">
              <div className="h-full border-2 transition duration-500 ease-in-out hover:shadow-xl border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={image}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    {serviceName}
                  </h1>
                  <p className="leading-relaxed mb-3">
                    {desc}
                  </p>
                  <div className="flex justify-center items-center flex-wrap ">
                    <NavLink to={`/service_details/${id}`} className="px-10 mt-5 hover:bg-green-400 py-1 rounded-full bg-bgPrimary text-white inline-flex items-center md:mb-2 lg:mb-0">
                      Checkout
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
    )
}

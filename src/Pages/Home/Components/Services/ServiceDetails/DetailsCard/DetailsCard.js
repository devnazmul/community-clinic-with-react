import React from 'react';

const DetailsCard = ({serviceName, desc, price, image}) => {
    return (
        <div className="w-full mx-auto items-center flex flex-wrap text-left">
            <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={image} />
            <div className=" mx-auto w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Community Clinic
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {serviceName}
              </h1>
              <p className="leading-relaxed">
                {desc}
              </p>
              <div className="flex mt-10">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${price}
                </span>
                <NavLink to='/purches_done' className="flex ml-auto text-white bg-bgPrimary border-0 py-2 px-6 focus:outline-none hover:bg-green-400 rounded">
                  Purchase
                </NavLink>

              </div>
            </div>
          </div>
    );
};

export default DetailsCard;
import React, { useEffect, useState } from "react";
import Card from './Card/Card';




const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./Data/services.json")
    .then(res=>res.json())
    .then(data => {setServices(data)})
  }, [])
  return (
    <div id="services" className="Services bg-gray-100 pt-28 pb-20">
      <h2 className="text-center text-gray-700 text-4xl font-bold mb-5">
        Our Wide Range Of Medical <span className="text-textPrimary"> Services</span>
      </h2>
      <p className="text-gray-400">
        Capitalize on low hanging fruit to identify a ballpark value added
        activity to beta test.
      </p>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {services.map(service => <Card key={service.id} image={service.image} serviceName={service.serviceName} desc={service.desc} /> )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

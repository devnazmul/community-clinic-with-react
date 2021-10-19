import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard/DetailsCard";

const ServiceDetails = () => {
  const { id } = useParams();
  const [services, setServices] = useState();
  useEffect(() => {
    fetch('./Data/services')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  return (
    <div
      className="text-gray-600 body-font overflow-hidden pt-28"
    >
      <div className="container px-10 sm:px-25 md:px-32 lg:px-40 xl:px-72 py-24 mx-auto">
        {services.filter(data => data.id === id).map((service) => {
          <DetailsCard key={service.id} service={service} />
        })}
      </div>
    </div>
  );
};

export default ServiceDetails;

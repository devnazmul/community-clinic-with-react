import React from "react";
import Card from "./Card/Card";



const Services = () => {

  return (
    <div className="Services bg-gray-100 py-20">
      <h2 className="text-center text-gray-700 text-4xl font-bold mb-5">
        Wide Range Of Medical Services
      </h2>
      <p className="text-gray-400">
        Capitalize on low hanging fruit to identify a ballpark value added
        activity to beta test.
      </p>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            {/* <Card service={service} /> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

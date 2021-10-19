import React, { useEffect, useState } from 'react'
import DoctorCard from './DoctorCard/DoctorCard';


const Doctor = () => {
    const [doctors,setDoctors] = useState([]);
    useEffect(()=>{
        fetch("./Data/doctors.json")
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[]);
    return (
        <div id="doctors" className="Services bg-white pt-36 md:pt-28 pb-20">
        <h2 className="text-center text-gray-700 text-4xl font-bold mb-5">
          Ours Carefull <span className="text-textPrimary"> Doctors</span>
        </h2>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
            {doctors.map(doctor => <DoctorCard key={doctor.id} image={doctor.image} doctorName={doctor.doctorName} jobStatus={doctor.jobStatus} />)}
            </div>
          </div>
        </section>
      </div>
    )
}

export default Doctor

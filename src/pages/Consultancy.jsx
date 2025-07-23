import React from "react";
import {FaLandmark, FaBriefcase, FaUsers } from "react-icons/fa";
import ServiceCard from "../components/ServiceCard"; 

export default function CapacityBuilding() {
  const ServiceData=[
    {
      Icon: FaLandmark,
      title: "Government Agencies",
      description: "Environmental impact assessments ...",
    },
    {
      Icon: FaBriefcase,
      title: "Private Sector",
      description: "Corporate sustainability strategies ...",
    },
    {
      Icon: FaUsers,
      title: "Community Organizations",
      description: "Local environmental initiatives ...",
    },
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-[#204E67]">Consultancy Services</h2>
        <p className="text-gray-600 mt-4">Our department offers expert consultancy services across a range of sectors</p>
        <h3 className="text-lg text-[#DD994D] font-semibold mt-4">Who We Consult</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {ServiceData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}

import React from "react";
import {FaLandmark, FaBriefcase} from "react-icons/fa";
import {Users, CheckCircle } from 'lucide-react';
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
      Icon: Users,
      title: "Community Organizations",
      description: "Local environmental initiatives ...",
    },
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-secondary">Consultancy Services</h2>
        <p className="text-gray-600 mt-4">Our department offers expert consultancy services across a range of sectors</p>
        <h3 className="text-lg text-secondary font-semibold mt-4">Who We Consult</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {ServiceData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
      <div className="bg-secondary mt-6 text-white rounded-xl p-8 lg:p-12 text-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">Why Choose Our Consultancy?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Multidisciplinary team of experts</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Cutting-edge technology and methods</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Global project experience</span>
                  </li>
                </ul>
                <div className="flex mt-5">
              <a
                href="/ContactUs"
               className="px-8 py-3 bg-primary text-secondary hover:bg-gray-100 font-medium rounded-lg transition-colors"
              >
                Request Consultancy Service
              </a>
                </div>
              </div>
            </div>
          </div>
    </section>
  );
}

import React, { useState } from "react";
import Research from "./Research";
import Consultancy from "./Consultancy";
import CapacityBuilding from "./CapacityBuilding";

export default function Sectors() {
  const [filter, setFilter] = useState("Research & Projects");

  return (
    <div>
          <section className="bg-[#204E67] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Sectors</h1>
            <p className="text-xl lg:text-2xl max-w-4xl mx-auto text-gray-200">
              We operate across three core sectors, delivering excellence in research, 
              consultancy services, and capacity building initiatives.
            </p>
          </div>
        </div>
      </section>
      <div className="max-w-6xl mx-auto px-6">
        <Research />
        <Consultancy />
        <CapacityBuilding />
      </div>
    </div>
  );
}

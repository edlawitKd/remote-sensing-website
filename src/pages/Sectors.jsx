import React, { useState } from "react";
import Research from "./Research";
import Consultancy from "./Consultancy";
import CapacityBuilding from "./CapacityBuilding";

export default function Sectors() {
  const [filter, setFilter] = useState("Research & Projects");

  return (
    <div>
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-[#204E67]">Explore Our Department</h2>
          <p className="text-gray-600 mt-4">Discover the key areas of our work and expertise.</p>
        </div>

        <div className="flex justify-center gap-4 mb-6">
          <button
            className={`px-6 py-2 rounded-md font-medium ${
              filter === "Research & Projects"
                ? "bg-[#204E67] text-[#DD994D]"
                : "text-[#204E67] border border-[#204E67] hover:bg-gray-100"
            }`}
            onClick={() => setFilter("Research & Projects")}
          >
            Research & Projects
          </button>

          <button
            className={`px-6 py-2 rounded-md font-medium ${
              filter === "Consultancy"
                ? "bg-[#204E67] text-[#DD994D]"
                : "text-[#204E67] border border-[#204E67] hover:bg-gray-100"
            }`}
            onClick={() => setFilter("Consultancy")}
          >
            Consultancy
          </button>

          <button
            className={`px-6 py-2 rounded-md font-medium ${
              filter === "Capacity Building"
                ? "bg-[#204E67] text-[#DD994D]"
                : "text-[#204E67] border border-[#204E67] hover:bg-gray-100"
            }`}
            onClick={() => setFilter("Capacity Building")}
          >
            Capacity Building
          </button>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        {filter === "Research & Projects" && <Research />}
        {filter === "Consultancy" && <Consultancy />}
        {filter === "Capacity Building" && <CapacityBuilding />}
      </div>
    </div>
  );
}

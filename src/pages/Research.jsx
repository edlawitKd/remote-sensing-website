import React, { useState } from "react";
import ResearchCard from "../components/ResearchCard";

export default function Research() {
  const [filter, setFilter] = useState("Active ");

  const researchData = [
    {
      id: 1,
      type: "Active ",
      title: "Satellite Crop Monitoring",
      link: "https://example.com/crop-monitoring",
      authors: "Dr. A. Alemu, M. Kebede"
    },
    {
      id: 2,
      type: "Completed",
      title: "Land Use Change Detection",
      link: "https://example.com/crop-monitoring",
      authors: "Dr. S. Teshome"
    },
    {
      id: 3,
      type: "Active ",
      title: "Carbon Mapping Platform",
      link: "https://example.com/carbon-mapping",
      authors: "A. Bekele"
    }
  ];

  const filteredData = researchData.filter(item => item.type === filter);

  return (
    <div className="text-center">
      <h2 className="text-3xl p-5 font-bold text-[#204E67] mb-8">Research & Projects</h2>

      <div className="space-x-4 mb-8">
        <button
          onClick={() => setFilter("Active ")}
          className={`px-6 py-2 rounded-md font-medium ${
            filter === "Active "
              ? "text-[#DD994D] bg-[#204E67]"
              : "text-[#204E67] border border-[#204E67] hover:bg-gray-100"
          }`}
        >
          Active Projects
        </button>

        <button
          onClick={() => setFilter("Completed")}
          className={`px-6 py-2 rounded-md font-medium ${
            filter === "Completed"
              ? "text-[#DD994D] bg-[#204E67]"
              : "text-[#204E67] border border-[#204E67] hover:bg-gray-100"
          }`}
        >
          Developed Projects
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map(item => (
          <ResearchCard
            key={item.id}
            type={item.type}
            title={item.title}
            link={item.link}
            authors={item.authors}
          />
        ))}
      </div>
    </div>
  );
}

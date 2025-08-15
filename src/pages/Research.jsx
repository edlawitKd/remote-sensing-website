import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import ResearchCard from "../components/ResearchCard";

export default function Research() {
  const [filter, setFilter] = useState("Active");

  const researchData = [
    {
      id: 1,
      type: "Active",
      title: "Satellite Crop Monitoring",
      link: "https://example.com/crop-monitoring",
      authors: "Dr. A. Alemu, M. Kebede"
    },
    {
      id: 2,
      type: "Completed",
      title: "Land Use Change Detection",
      link: "https://example.com/land-use",
      authors: "Dr. S. Teshome"
    },
    {
      id: 3,
      type: "Active",
      title: "Carbon Mapping Platform",
      link: "https://example.com/carbon-mapping",
      authors: "A. Bekele"
    }
  ];

  const filteredData = researchData.filter(item => item.type === filter);

  return (
    <section id="research" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
            Research and developments (R&D)
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conducting cutting-edge research projects that advance remote
            sensing science and address real-world challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Current Research Areas */}
          <div>
            <h3 className="text-2xl font-bold text-secondary mb-6">Current Research Areas</h3>
            <div className="space-y-4">
              {[
                {
                  title: "Climate Change Monitoring",
                  desc: "Long-term climate data analysis and impact assessment."
                },
                {
                  title: "Agricultural Remote Sensing",
                  desc: "Crop monitoring and precision agriculture solutions."
                },
                {
                  title: "Urban Environmental Monitoring",
                  desc: "Air quality, heat islands, and urban sustainability studies."
                }
              ].map((area, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-secondary">{area.title}</h4>
                    <p className="text-gray-600">{area.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Filter + Project List */}
          <div>
            {/* Filter Buttons */}
            <div className="space-x-4 mb-6">
              <button
                onClick={() => setFilter("Active")}
                className={`px-6 py-2 rounded-md font-medium ${
                  filter === "Active"
                    ? "text-primary bg-secondary"
                    : "text-secondary border border-[#204E67] hover:bg-gray-100"
                }`}
              >
                Active Projects
              </button>
              <button
                onClick={() => setFilter("Completed")}
                className={`px-6 py-2 rounded-md font-medium ${
                  filter === "Completed"
                    ? "text-primary bg-secondary"
                    : "text-secondary border border-[#204E67] hover:bg-gray-100"
                }`}
              >
                Developed Projects
              </button>
            </div>

            {/* Research Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
        </div>
      </div>
    </section>
  );
}

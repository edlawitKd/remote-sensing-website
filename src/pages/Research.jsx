import React, { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import ResearchCard from "../components/ResearchCard";
import axios from "axios";

export default function Research() {
  const [filter, setFilter] = useState("Active");
  const [researchData, setResearchData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/mandate/research/")
      .then((res) => setResearchData(res.data))
      .catch((err) => {
        console.error(err);
        setError("Failed to load research projects.");
      })
      .finally(() => setLoading(false));
  }, []);

  const filteredData = researchData.filter((item) => item.type === filter);

  return (
    <section id="research" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
            Research and Developments (R&D)
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conducting cutting-edge research projects that advance remote
            sensing science and address real-world challenges.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Current Research Areas */}
          <div>
            <h3 className="text-2xl font-bold text-secondary mb-6">
              Current Research Areas
            </h3>
            <div className="space-y-4">
              {[
                {
                  title: "Climate Change Monitoring",
                  desc: "Long-term climate data analysis and impact assessment.",
                },
                {
                  title: "Agricultural Remote Sensing",
                  desc: "Crop monitoring and precision agriculture solutions.",
                },
                {
                  title: "Urban Environmental Monitoring",
                  desc: "Air quality, heat islands, and urban sustainability studies.",
                },
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
              {["Active", "Completed"].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilter(status)}
                  className={`px-6 py-2 rounded-md font-medium ${
                    filter === status
                      ? "text-primary bg-secondary"
                      : "text-secondary border border-[#204E67] hover:bg-gray-100"
                  }`}
                >
                  {status === "Active" ? "Active Projects" : "Developed Projects"}
                </button>
              ))}
            </div>

            {/* Loading / Error / Projects */}
            {loading && <p className="text-gray-500">Loading projects...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {!loading && !error && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filteredData.length > 0 ? (
                  filteredData.map((item) => (
                    <ResearchCard
                      key={item.id}
                      type={item.type}
                      title={item.title}
                      link={item.link}
                      authors={item.authors}
                    />
                  ))
                ) : (
                  <p className="col-span-2 text-gray-500 text-center">
                    No {filter.toLowerCase()} projects available.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

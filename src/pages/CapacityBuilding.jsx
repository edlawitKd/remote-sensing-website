import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import axios from "axios";

export default function CapacityBuilding() {
  const [trainingPrograms, setTrainingPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/mandate/capatcity-building/")
      .then((res) => setTrainingPrograms(res.data))
      .catch((err) => setError("Failed to load training programs."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="px-4 py-12">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-secondary">Capacity Building</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Empowering individuals through comprehensive training programs 
          and knowledge transfer initiatives.
        </p>
      </div>

      {loading && <p className="text-center text-gray-500">Loading programs...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {trainingPrograms.map((program) => (
            <div
              key={program.id || program.title}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-secondary">
                  {program.title}
                </h3>
                <span className="px-3 py-1 text-sm bg-primary bg-opacity-10 text-primary rounded-full">
                  {program.level}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <div className="space-y-2 text-sm text-gray-500">
                <p>
                  <span className="font-medium">Duration:</span>{" "}
                  {program.duration}
                </p>
                <p>
                  <span className="font-medium">Max Participants:</span>{" "}
                  {program.participants}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Call-to-action card */}
           <div className="bg-secondary mt-6 text-white rounded-xl p-8 lg:p-12 text-center">
         <h3 className="text-2xl text-primary font-bold mb-4">
              Ready to Enhance Your Skills?
            </h3>
            <p className="text-xl mb-6">
              Join our next training program and advance your remote sensing expertise.
            </p>
            <a
                href="/ContactUs"
               className="px-8 py-3 bg-primary text-secondary hover:bg-gray-100 font-medium rounded-lg transition-colors"
              >
              Request for Training
            </a>
          </div>
    </section>
  );
}

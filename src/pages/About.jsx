import React from "react";
import { Zap, Users, Globe } from "lucide-react"; // Importing icons

export default function About() {
  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              About Our Department
            </h1>
            <p className="text-xl lg:text-2xl max-w-4xl mx-auto text-gray-200">
              Advancing the frontiers of remote sensing science through innovative research, 
              cutting-edge technology, and collaborative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Resources */}
      <section className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Vision */}
          <div className="card border-t-4 bg-white shadow-md border-t-[#DD994D] rounded-lg p-6 hover:shadow-lg transition duration-300 text-center">
            <h3 className="text-xl font-semibold mb-4 text-secondary">Our Vision</h3>
            <p className="text-gray-700">
              To be a national leader in geospatial science and remote sensing, 
              advancing data-driven solutions for sustainable development.
            </p>
          </div>

          {/* Mission */}
          <div className="card border-t-4 bg-white shadow-md border-t-[#DD994D] rounded-lg p-6 hover:shadow-lg transition duration-300 text-center">
            <h3 className="text-xl font-semibold mb-4 text-secondary">Our Mission</h3>
            <p className="text-gray-700">
              To conduct innovative geospatial research, provide capacity-building programs,
              and deliver remote sensing solutions for sustainable development and decision-making.
            </p>
          </div>

          {/* Core Values */}
          <div className="card border-t-4 bg-white shadow-md border-t-[#DD994D] rounded-lg p-6 hover:shadow-lg transition duration-300 text-center">
            <h3 className="text-xl font-semibold mb-6 text-secondary">Our Core Values</h3>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <div className="flex flex-col items-center p-4 bg-white shadow rounded-lg">
                <Zap className="w-6 h-6 text-primary mb-2"/>
                <span className="text-gray-700 font-medium">Innovation</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white shadow rounded-lg">
                <Users className="w-6 h-6 text-primary mb-2"/>
                <span className="text-gray-700 font-medium">Collaboration</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white shadow rounded-lg">
                <Globe className="w-6 h-6 text-primary mb-2"/>
                <span className="text-gray-700 font-medium">Sustainability</span>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="card border-t-4 bg-white shadow-md border-t-[#DD994D] rounded-lg p-6 hover:shadow-lg transition duration-300 text-center">
            <h3 className="text-xl font-semibold mb-4 text-secondary">Our Resources</h3>

            <h5 className="text-primary font-semibold mb-2 mt-4">Technology & Equipment</h5>
            <ul className="text-gray-700 list-disc list-inside text-left space-y-2">
              <li>Satellite imagery archives</li>
              <li>Drone fleets for aerial surveys</li>
              <li>High-resolution GIS workstations</li>
              <li>Specialized remote sensing software</li>
            </ul>

            <h5 className="text-primary font-semibold mb-2 mt-4">Research Facilities</h5>
            <ul className="text-gray-700 list-disc list-inside text-left space-y-2">
              <li>Remote sensing laboratories</li>
              <li>Image processing and data analysis centers</li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}

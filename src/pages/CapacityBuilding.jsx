import { FaClock, FaCalendarAlt } from "react-icons/fa";

export default function CapacityBuilding() {
  return (
    <section className="px-4 py-12">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-[#204E67]">Capacity Building</h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        {/* PhD Column */}
        <div>
          <h3 className="text-lg text-[#DD994D] font-semibold mb-4 text-center">PhD Students</h3>
          <div className="bg-white shadow-md border-t-4 border-t-[#DD994D] rounded-lg p-4 mb-6 hover:shadow-lg transition">
            <img src="src/PhD-image.webp" alt="PhD student" className="w-full h-48 object-cover rounded-md mb-4" />
            <h4 className="text-xl font-semibold text-[#204E67] mb-2">Remote Sensing Analyst</h4>
            <p className="text-gray-600">Research on climate change impacts...</p>
          </div>
        </div>

        {/* MSc Column */}
        <div>
          <h3 className="text-lg text-[#DD994D] font-semibold mb-4 text-center">MSc Students</h3>
          <div className="bg-white shadow-md border-t-4 border-t-[#DD994D] rounded-lg p-4 mb-6 hover:shadow-lg transition">
            <img src="src/MScImages.jpeg" alt="MSc student" className="w-full h-48 object-cover rounded-md mb-4" />
            <h4 className="text-xl font-semibold text-[#204E67] mb-2">Remote Sensing Analyst</h4>
            <p className="text-gray-600">Studying satellite data analysis...</p>
          </div>
        </div>

        {/* Training Column */}
        <div>
          <h3 className="text-lg text-[#DD994D] font-semibold mb-4 text-center">Short Course Trainings</h3>

          <div className="bg-white shadow-md border-t-4 border-t-[#DD994D] rounded-lg p-4 mb-6 hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-[#204E67] mb-2">Climate Data Analysis and Visualization</h4>
            <p className="text-gray-600 mb-4">Learn techniques for analyzing climate data...</p>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <FaClock className="text-[#DD994D]" />
              <p>4 weeks</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <FaCalendarAlt className="text-[#DD994D]" />
              <p>Tuesdays & Thursdays, 2–5pm</p>
            </div>
          </div>

          <div className="bg-white shadow-md border-t-4 border-t-[#DD994D] rounded-lg p-4 mb-6 hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-[#204E67] mb-2">GIS for Environmental Analysis</h4>
            <p className="text-gray-600 mb-4">Use GIS tools for environmental monitoring...</p>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <FaClock className="text-[#DD994D]" />
              <p>2 weeks</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <FaCalendarAlt className="text-[#DD994D]" />
              <p>Mondays, Wednesdays, Fridays, 9am–12pm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

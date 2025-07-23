import React, { useState } from "react";
import StaffCard from "../components/StaffCard";

const staffList = [
  {
    name: "Dr. Abebe Alemu",
    expertise:[ "Remote Sensing", "Climate Change"],
    image: "",
    biography: "Expert in geospatial analysis and land monitoring.",
    email: "Abebe@example.com",
    phone_no: "+251912345678",
    publication: "10+ research papers on NDVI and land use."
  },
  {
    name: "Mr. selomon mulatu",
    expertise: ["Environmental Monitoring" , "Satellite Imagery"],
    image: "../image/selomon.jpeg",
    biography: "Focused on satellite data interpretation and training.",
    email: "Selomon@gmail.com",
    phone_no: "+251987654321",
    publication: "MSc thesis on carbon flux estimation."
  },

];

export default function Staff() {
  const [search, setSearch] = useState("");

  const filteredStaff = staffList.filter((staff) =>
    staff.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="bg-gray-50 min-h-screen">
      <section className="bg-[#204E67] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Team</h1>
            <p className="text-xl lg:text-2xl max-w-4xl mx-auto text-gray-200">
              Meet our world-class team of researchers, scientists, and experts dedicated to 
              advancing remote sensing science and applications.
            </p>
          </div>
        </div>
      </section>
      <div className="text-center">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md mx-auto mt-6 px-4 py-2 mb-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DD994D]"
        />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredStaff.length > 0 ? (
            filteredStaff.map((staff, index) => (
              <StaffCard key={index} {...staff} />
            ))
          ) : (
            <p className="text-gray-600 col-span-full">No staff found.</p>
          )}
        </div>
    </section>
  );
}

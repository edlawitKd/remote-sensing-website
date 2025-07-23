import React, { useState } from "react";
import StaffCard from "../components/StaffCard";

const staffList = [
  {
    name: "Dr. Abebe Alemu",
    specialization: "Remote Sensing",
    image: "",
    biography: "Expert in geospatial analysis and land monitoring.",
    email: "Abebe@example.com",
    phone_no: "+251912345678",
    publication: "10+ research papers on NDVI and land use."
  },
  {
    name: "Mr. selomon mulatu",
    specialization: "Satellite Imagery",
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
    <section className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-[#204E67] mb-6">Staff Profile</h1>

        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md mx-auto px-4 py-2 mb-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DD994D]"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredStaff.length > 0 ? (
            filteredStaff.map((staff, index) => (
              <StaffCard key={index} {...staff} />
            ))
          ) : (
            <p className="text-gray-600 col-span-full">No staff found.</p>
          )}
        </div>
      </div>
    </section>
  );
}

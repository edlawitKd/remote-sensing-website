import React, { useState, useEffect } from "react";
import axios from "axios";
import StaffCard from "../components/StaffCard";

export default function Staff() {
  const [search, setSearch] = useState("");
  const [staffList, setStaffList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/staff/") // Django API endpoint
      .then((res) => setStaffList(res.data))
      .catch((err) => {
        console.error(err);
        setError("Failed to load staff members.");
      });
  }, []);

  // Filter staff by search input
  const filteredStaff = staffList.filter((staff) =>
    staff.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Team</h1>
          <p className="text-xl lg:text-2xl max-w-4xl mx-auto text-gray-200">
            Meet our world-class team of researchers, scientists, and experts
            dedicated to advancing remote sensing science and applications.
          </p>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
      </section>

      {/* Search Bar */}
      <div className="text-center mt-6">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md mx-auto px-4 py-2 mb-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DD994D]"
        />
      </div>

      {/* Staff Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
        {filteredStaff && filteredStaff.length > 0 ? (
          filteredStaff.map((staff) => (
            <StaffCard
               key={staff.id}
               image={staff.photo}
               name={staff.name}
               position={staff.position}
               biography={staff.bio}
               email={staff.email}
               phone_no={staff.phone}
               publication={staff.publication}
               link={staff.link}
             />
          ))
        ) : (
          <p className="text-gray-600 col-span-full text-center">
            No staff found.
          </p>
        )}
      </div>
    </section>
  );
}

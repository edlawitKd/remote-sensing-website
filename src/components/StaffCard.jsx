import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function StaffCard({
  image,
  name,
  position,
  biography,
  email,
  phone_no,
  publication,
  link,
}) {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300 flex flex-col h-full mb-10">
   {/* Staff Image */}
      <img
        src={image || "/default-profile.jpeg"}
        alt={name || "Staff Member"}
        className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
      />

      {/* Name & Position */}
      <h3 className="text-xl font-semibold text-center mb-1">{name || "No Name"}</h3>
      <p className="text-gray-600 mb-3 text-center">
        <strong>Position:</strong> {position || "No position"}
      </p>

      {/* Details */}
      {showDetail && (
        <div className="text-gray-700 space-y-3 flex-grow">
          <p><strong>Biography:</strong> {biography || "No biography available."}</p>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-primary" />
            <p>{email || "No email"}</p>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-primary" />
            <p>{phone_no || "No phone"}</p>
          </div>
          <p><strong>Publication:</strong> {publication || "No publications"}</p>
          {link && (
            <div className="flex justify-center">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary transition-colors p-2"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          )}
        </div>
      )}

      {/* Fixed Button at Bottom */}
      <div className="mt-auto pt-4 border-t border-gray-100">
        <button
          className={`w-full px-4 py-2 rounded-md font-medium transition ${
            showDetail
              ? "text-primary border border-[#204E67] hover:bg-gray-100"
              : "bg-secondary text-white hover:bg-[#16394e]"
          }`}
          onClick={() => setShowDetail(!showDetail)}
        >
          {showDetail ? "Hide Detail" : "View Detail"}
        </button>
      </div>
    </div>
  );
}

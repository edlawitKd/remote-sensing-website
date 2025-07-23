import React from "react";
import { Link } from "react-router-dom";

export default function ExploreCard({ title, description, icon: Icon, link }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300 text-center">
      {Icon && <Icon className="text-[#DD994D] text-4xl mb-4 mx-auto" />}
      <h3 className="text-xl font-semibold mb-2 text-[#204E67]">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link to={link} className="text-[#204E67] font-medium hover:text-[#DD994D]">
        Learn more →
      </Link>
    </div>
  );
}

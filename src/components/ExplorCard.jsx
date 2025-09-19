import React from "react";
import { Link } from "react-router-dom";

export default function ExploreCard({ title, description, icon: Icon, link }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl hover:scale-105 transition-transform duration-300 flex flex-col h-full">
      {Icon && <Icon className="text-primary text-4xl mb-4 mx-auto" />}
      <h3 className="text-xl font-semibold mb-2 text-secondary">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <div className="mt-auto pt-4 border-t border-gray-100">
        <Link 
          to={link} 
          className="text-secondary font-medium hover:text-primary transition-colors duration-200 inline-flex items-center"
        >
          Learn more →
        </Link>
      </div>
    </div>
  );
}
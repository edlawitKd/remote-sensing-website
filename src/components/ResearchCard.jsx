import React from "react";

export default function ResearchCard({ type, title, link, authors }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300 text-left space-y-2">
      <h3 className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 text-secondary bg-[#80CBC4]">
        {type}
      </h3>
      <h4 className="text-sm font-medium text-gray-700">{title}</h4>
      {authors && <p className="text-sm text-gray-600">{authors}</p>}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 px-4 py-2 bg-secondary text-white rounded hover:bg-primary transition"
        >
          View More
        </a>
      )}
    </div>
  );
}

import React from "react";

const newsData = [
  {
    id: 1,
    title: "Remote Sensing Lab Receives New Satellite Data",
    date: "August 10, 2025",
    description:
      "Our lab now has access to the latest Landsat 9 data, enhancing our research capabilities in environmental monitoring.",
    image: "image/news1.png",
  },
  {
    id: 2,
    title: "Drone Survey Project Launched in National Park",
    date: "August 8, 2025",
    description:
      "We started a drone-based project to monitor wildlife and vegetation changes in the park.",
    image: "image/news2.png",
  },
  {
    id: 3,
    title: "New Publication on Crop Monitoring Techniques",
    date: "August 5, 2025",
    description:
      "Our team published a paper introducing innovative methods for precision agriculture using satellite imagery.",
    image: "",
  },
];

export default function News() {
  return (
    <section className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="text-center bg-secondary py-20 mb-16 px-4 ">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
          Latest News & Updates
        </h1>
        <p className="text-lg lg:text-xl text-white max-w-2xl mx-auto">
          Stay informed about our research, projects, publications, and events.
        </p>
      </div>

      {/* News Grid */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-secondary">
                {news.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4">{news.date}</p>
              <p className="text-gray-700 mb-4">{news.description}</p>
              <button className="px-4 py-2 bg-secondary text-white rounded hover:bg-primary transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

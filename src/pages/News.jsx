import React, { useEffect, useState } from "react";
import axios from "axios";

export default function News() {
  const [filter, setFilter] = useState(""); 
  const [newsData, setNewsData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/news/")
      .then((res) => setNewsData(res.data))
      .catch((err) => {
        console.error(err);
        setError("Failed to load news.");
      });
  }, []);

  // Get unique dates from data
  const uniqueDates = [...new Set(newsData.map((item) => item.date))];

  const filteredData = filter
    ? newsData.filter((item) => item.date === filter)
    : newsData;

  if (error) {
    return <p className="text-red-500 text-center mt-10">{error}</p>;
  }

  return (
    <section className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="text-center bg-secondary py-20 mb-10 px-4">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
          Latest News & Updates
        </h1>
        <p className="text-lg lg:text-xl text-white max-w-2xl mx-auto">
          Stay informed about our research, projects, publications, and events.
        </p>
      </div>

      {/* Filter Section */}
      <div className="max-w-6xl mx-auto px-4 mb-10 flex justify-end">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-secondary"
        >
          <option value="">All Dates</option>
          {uniqueDates.map((date, index) => (
            <option key={index} value={date}>
              {date}
            </option>
          ))}
        </select>
      </div>

      {/* News Grid */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredData.length > 0 ? (
          filteredData.map((news) => (
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
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">
            No news available for the selected date.
          </p>
        )}
      </div>
    </section>
  );
}

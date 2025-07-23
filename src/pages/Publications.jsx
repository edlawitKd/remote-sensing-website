import React, { useState } from "react";
import PublicationCard from "../components/PublicationCard";

export default function Publications() {
  const [filter, setFilter] = useState("book");
  const [search, setSearch] = useState("");

  const BookData = [
    {
      id: 1,
      type: "Book",
      title: "Advanced Research Methods in Environmental Science",
      authors: "Dr. Abebe, Selomon",
      year: 2015,
      link: "https://example.com/book1.pdf",
    },
    {
      id: 2,
      type: "Book",
      title: "Effects of Climate Change",
      authors: "Dr. Melaku, Selomon",
      year: 2016,
      link: "https://example.com/book2.pdf",
    },
    {
      id: 3,
      type: "Book",
      title: "Urban Planning Strategies",
      authors: "Dr. Selomon",
      year: 2017,
      link: "https://example.com/book3.pdf",
    },
  ];

  const PaperData = [
    {
      id: 1,
      type: "Paper",
      title: "Advanced Methods in Science",
      authors: "Dr. Abebe, Selomon",
      year: 2015,
      link: "https://example.com/paper1.pdf",
    },
    {
      id: 2,
      type: "Paper",
      title: "Research Methods in Environmental",
      authors: "Dr. Abebe, Selomon",
      year: 2015,
      link: "https://example.com/paper2.pdf",
    },
  ];

 const sortedBooks = [...BookData].sort((a, b) => b.year - a.year);
const sortedPapers = [...PaperData]
  .filter((paper) =>
    paper.title.toLowerCase().includes(search.toLowerCase())
  )
  .sort((a, b) => b.year - a.year);

  return (
    <div>
      <section className="bg-[#204E67] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Publications</h1>
            <p className="text-xl lg:text-2xl max-w-4xl mx-auto text-gray-200">
              Explore our comprehensive collection of books, research papers, and technical publications 
              contributing to the advancement of remote sensing science.
            </p>
          </div>
        </div>
      </section>

      <div className="px-6 py-10 max-w-7xl mx-auto">
        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            className={`px-6 py-2 rounded-md font-medium ${
              filter === "book"
                ? "bg-[#204E67] text-[#DD994D]"
                : "text-[#204E67] border border-[#204E67] hover:bg-gray-100"
            }`}
            onClick={() => setFilter("book")}
          >
            Books
          </button>
          <button
            className={`px-6 py-2 rounded-md font-medium ${
              filter === "paper"
                ? "bg-[#204E67] text-[#DD994D]"
                : "text-[#204E67] border border-[#204E67] hover:bg-gray-100"
            }`}
            onClick={() => setFilter("paper")}
          >
            Papers
          </button>
        </div>

        {/* Search Bar (only visible when 'paper' is selected) */}
        {filter === "paper" && (
          <div className="mb-6 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search papers by title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#204E67]"
            />
          </div>
        )}

        {/* Publication List */}
        <section className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {(filter === "book" ? sortedBooks : sortedPapers).map((item) => (
            <PublicationCard
              key={item.id}
              type={item.type}
              title={item.title}
              authors={item.authors}
              year={item.year}
              link={item.link}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import PublicationCard from '../components/PublicationCard';

export default function Publications() {
  const [filter, setFilter] = useState("book");

  const BookData = [
    {
      id: 1,
      type: 'Book',
      title: "Advanced Research Methods in Environmental Science",
      authors: "Dr. Abebe, Selomon",
      year: 2015,
      link: "https://example.com/book1.pdf"
    },
    {
      id: 2,
      type: 'Book',
      title: "Effects of Climate Change",
      authors: "Dr. Melaku, Selomon",
      year: 2016,
      link: "https://example.com/book2.pdf"
    },
    {
      id: 3,
      type: 'Book',
      title: "Urban Planning Strategies",
      authors: "Dr. Selomon",
      year: 2017,
      link: "https://example.com/book3.pdf"
    }
  ];

  const PaperData = [
    {
      id: 1,
      type: 'Paper',
      title: "Advanced Methods in Science",
      authors: "Dr. Abebe, Selomon",
      year: 2015,
      link: "https://example.com/paper1.pdf"
    },
    {
      id: 2,
      type: 'Paper',
      title: "Research Methods in Environmental",
      authors: "Dr. Abebe, Selomon",
      year: 2015,
      link: "https://example.com/paper2.pdf"
    }
  ];

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
      <div className="flex justify-center gap-4 mb-6">
        <button
          className={`px-6 py-2 rounded-md font-medium ${
            filter === "book"
              ? "bg-[#204E67] text-[#DD994D]"
              : "text-[#204E67] border border-[#204E67] hover:bg-gray-100 ac"
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

      <section className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {(filter === "book" ? BookData : PaperData).map((item) => (
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
  );
}





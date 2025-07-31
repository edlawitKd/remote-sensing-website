import { Link } from "react-router-dom";
import Explore from "../components/Explore";

export default function Home() {
  const stats = [
    { number: "50+", label: "Research & Projects" },
    { number: "50+", label: "Publications" },
    { number: "8+", label: "Expert Staff" },
    { number: "5+", label: "Years Experience" },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-[#204E67] text-white">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Remote Sensing
              <span className="block text-[#DD994D]">Department</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
              Advancing Earth observation science through innovative remote
              sensing technologies, research excellence, and practical
              applications for a sustainable future.
            </p>
            <Link
              to="/about"
              className="text-white py-5 hover:text-[#DD994D] font-semibold transition-colors duration-200"
            >
              Read more about our Vision and Mission →
            </Link>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <Explore />

      {/* Stats Section */}
      <section className="py-20 bg-[#204E67]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-[#DD994D] mb-2">
                  {stat.number}
                </div>
                <div className="text-xl text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <div className="bg-gray-200 rounded-xl flex items-center justify-center py-10">
        <img
          src="./image/world.png"
          alt="World map remote sensing illustration"
          className=" rounded-xl w-72 hover:scale-95 delay-150 duration-100 "
        />
      </div>
    </main>
  );
}

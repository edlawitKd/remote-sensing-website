import { Link } from "react-router-dom";
import Explore from "../components/Explore";

export default function Home() {
  const stats = [
    { number: "50+", label: "Research and developments" },
    { number: "50+", label: "Publications" },
    { number: "8+", label: "Expert Staff" },
    { number: "5+", label: "Years Experience" },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-secondary text-white">
        <div className="relative text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Remote Sensing
              <span className="block text-primary">Department</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
              Advancing Earth observation science through innovative remote
              sensing technologies, research excellence, and practical
              applications for a sustainable future.
            </p>
            <Link
              to="/about"
              className="text-white py-5 hover:text-primary font-semibold transition-colors duration-200"
            >
              Read more about our Vision and Mission →
            </Link>
        </div>
      </section>

      {/* Explore Section */}
      <Explore />

      {/* Stats Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-xl text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 bg-gray-200 rounded-xl items-center py-10">
        <img
          src="./image/pic.webp"
          alt="World map remote sensing illustration"
          className=" rounded-xl w-72 mx-auto  hover:shadow-xl hover:scale-105 transition-transform duration-300 "
        />
         <img
          src="./image/pic3.jpg"
          alt="World map remote sensing illustration"
          className=" rounded-xl w-72 mx-auto hover:shadow-xl hover:scale-105 transition-transform duration-300 "
        />
         <img
          src="./image/pic2.jpg"
          alt="World map remote sensing illustration"
          className=" rounded-xl w-72 mx-auto hover:shadow-xl hover:scale-105 transition-transform duration-300 "
        />
         <img
          src="./image/pic4.jpeg"
          alt="World map remote sensing illustration"
          className=" rounded-xl w-72 mx-auto hover:shadow-xl hover:scale-105 transition-transform duration-300 "
        />
      </div>
    </main>
  );
}

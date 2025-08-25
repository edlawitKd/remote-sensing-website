import { Link } from "react-router-dom";
import Explore from "../components/Explore";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CountUp from "react-countup";

export default function Home() {
  const [data, setData] = useState({
    stats: [],
    images: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/home/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Image slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
    cssEase: "linear",
  };

  if (loading) return <div className="text-center py-20">Loading...</div>;

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
            sensing technologies, research excellence, and practical applications
            for a sustainable future.
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

      {/* Stats Section (grid display) */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {data.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                  <CountUp
                    end={stat.number}
                    duration={3}
                    suffix={stat.is_plus ? "+" : ""}
                  />
                </div>
                <div className="text-xl text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Slider Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Slider {...sliderSettings}>
          {data.images.map((image, index) => (
            <div key={index} className="px-4">
              <div className="relative group rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={image.image_url}
                  alt={image.alt_text}
                  className="w-full h-72 md:h-[28rem] object-cover rounded-2xl transform transition duration-700 ease-in-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-70 group-hover:opacity-80 transition duration-500">
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl md:text-2xl font-semibold drop-shadow-md">
                    {image.alt_text}
                  </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </main>
  );
}

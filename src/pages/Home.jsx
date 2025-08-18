import { Link } from "react-router-dom";
import Explore from "../components/Explore";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CountUp from 'react-countup';
import axios from 'axios';  // Import axios

export default function Home() {
  const [data, setData] = useState({
    stats: [],
    images: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);  // Add error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/home/");
        setData(response.data);  // Axios wraps the response in data property
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);  // Store error message
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Slider settings remain the same
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
    cssEase: 'linear'
  };

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (error) return <div className="text-center py-20 text-red-500">Error: {error}</div>;
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
    <Slider
      dots={false}
      infinite={true}
      autoplay={true}
      autoplaySpeed={2500}
      speed={600}
      slidesToShow={3}   // show 3 stats at a time
      slidesToScroll={1} // move one by one
      arrows={false}
      responsive={[
        {
          breakpoint: 1024, // tablets
          settings: { slidesToShow: 2 }
        },
        {
          breakpoint: 640, // mobile
          settings: { slidesToShow: 1 }
        }
      ]}
    >
      {data.stats.map((stat, index) => (
        <div key={index} className="px-4">
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
              <CountUp 
                end={stat.number} 
                duration={2}
                suffix={stat.is_plus ? "+" : ""}
              />
            </div>
            <div className="text-xl text-gray-200">{stat.label}</div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</section>



      {/* Image Carousel Section */}
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  <Slider
    dots={false}
    infinite={true}
    autoplay={true}
    autoplaySpeed={2500}
    speed={600}
    slidesToShow={3}
    centerMode={true}
    centerPadding="0px"
    arrows={false}
    responsive={[
      {
        breakpoint: 1024, // tablets
        settings: { slidesToShow: 1, centerMode: true }
      }
    ]}
  >
    {data.images.map((image, index) => (
      <div key={index} className="px-4">
        <div className="relative group rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105">
          {/* Image */}
          <img
            src={image.image_url}
            alt={image.alt_text}
            className="w-full h-96 object-cover rounded-2xl"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition duration-500"></div>

          {/* Caption */}
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-2xl font-semibold drop-shadow-lg">
              {image.alt_text}
            </h3>
          </div>
        </div>
      </div>
    ))}
  </Slider>
</div>

    </main>
  );
}
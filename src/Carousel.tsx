import React, { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ images }: { images: string[] }) => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Set global animation duration
  }, []);

  // React Slick settings
  const settings = {
    dots: true, // Show pagination dots
    infinite: true, // Enable infinite looping
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay interval
    arrows: true, // Show navigation arrows
    centerMode: true, // Center the active slide
    centerPadding: "0", // No extra padding for centered slides
    focusOnSelect: true, // Scale the focused slide
  };

  return (
    <div className="relative w-full max-w-8xl mx-auto p-8">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-2"> {/* Add margin between slides */}
            <div
              className={`flex justify-center items-center transform transition-transform duration-500 ease-in-out hover:scale-110 ${
                index % 2 === 0 ? "rotate-6" : "-rotate-6"
              }`}
              data-aos="fade-up" // Add AOS animation
              data-aos-duration="1000" // Animation duration
              data-aos-delay={index * 200} // Staggered delay
              style={{
                transformStyle: "preserve-3d", // Enable 3D transformations
              }}
            >
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-64 object-cover rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
                style={{
                  transform: "perspective(1000px) rotateY(20deg)", // 3D effect
                }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
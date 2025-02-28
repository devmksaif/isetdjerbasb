import React, { useEffect } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ images }: { images: string[] }) => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Set global animation duration
  }, []);

  // Responsive settings for different screen sizes
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    centerMode: true,
    centerPadding: "0",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024, // Tablet landscape
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
        }
      },
      {
        breakpoint: 768, // Tablet portrait
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "40px",
        }
      },
      {
        breakpoint: 480, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
          arrows: false, // Hide arrows on mobile for better UX
        }
      }
    ],
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
            Our Gallery
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our events and activities through these captured moments
          </p>
        </motion.div>

        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
          <Slider {...settings} className="gallery-slider">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="px-2 sm:px-3 lg:px-4"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {/* Fixed aspect ratio container */}
                  <div className="relative w-full pb-[75%]"> {/* 4:3 aspect ratio */}
                    <img
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="text-lg font-semibold">Event {index + 1}</h3>
                        <p className="text-sm">Click to view details</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Custom styles for the carousel */}
      <style>{`
        .gallery-slider .slick-slide {
          padding: 0 8px;
          opacity: 0.5;
          transition: all 0.3s ease;
        }
        
        .gallery-slider .slick-center {
          opacity: 1;
          transform: scale(1.05);
        }
        
        .gallery-slider .slick-dots {
          bottom: -40px;
        }
        
        .gallery-slider .slick-dots li button:before {
          font-size: 12px;
          color: #3B82F6;
          opacity: 0.5;
        }
        
        .gallery-slider .slick-dots li.slick-active button:before {
          opacity: 1;
        }
        
        .gallery-slider .slick-prev,
        .gallery-slider .slick-next {
          width: 40px;
          height: 40px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          z-index: 1;
          transition: all 0.3s ease;
        }
        
        .gallery-slider .slick-prev:hover,
        .gallery-slider .slick-next:hover {
          background: #3B82F6;
        }
        
        .gallery-slider .slick-prev:hover:before,
        .gallery-slider .slick-next:hover:before {
          color: white;
        }
        
        .gallery-slider .slick-prev {
          left: 20px;
        }
        
        .gallery-slider .slick-next {
          right: 20px;
        }
        
        @media (max-width: 768px) {
          .gallery-slider .slick-prev,
          .gallery-slider .slick-next {
            display: none !important;
          }
          
          .gallery-slider .slick-slide {
            padding: 0 4px;
          }
        }
      `}</style>
    </section>
  );
};

export default Carousel;
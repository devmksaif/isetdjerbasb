import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function ChapterItems() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
   
    });
  }, []);

  const chapters = [
    {
      title: "Robotics & Automation Society",
      image: "https://www.ieee-ras.org/images/ras-resources/IEEE_RAS_logo_4C_stacked-HiRes.fw.png",
      description: "Advancing the theory and practice of robotics and automation engineering.",
      link: "#"
    },
    {
      title: "Computer Society",
      image: "https://ieee-ceda.org/files/ieeeceda/styles/responsive_4_3_760w/public/images/media/photos/computer-society-color.jpg?h=f3216549&itok=DjnJTxex",
      description: "Leading the computer and technology world to innovate tomorrow.",
      link: "#"
    },
    {
      title: "Industrial Applications Society",
      image: "https://edu.ieee.org/jo-yu/wp-content/uploads/sites/1202/IEEE-IAS.png",
      description: "Discovering and applying industrial applications of technology.",
      link: "#"
    },
    // Add more chapters as needed
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
            Our Technical Chapters
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our specialized technical communities and their initiatives
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chapters.map((chapter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={chapter.image}
                  alt={chapter.title}
                  className="w-full h-64 object-contain p-4 bg-gray-50 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {chapter.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {chapter.description}
                </p>
                <a
                  href={chapter.link}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
                >
                  Learn More
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
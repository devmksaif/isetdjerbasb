import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function ChaptersSection() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
    });
  }, []);

  const stats = [
    {
      icon: (
        <svg fill="#6183d1" width="72px" height="72px" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
          {/* Your existing SVG path */}
        </svg>
      ),
      title: "Active Members",
      value: "150+",
      description: "Engaged IEEE members"
    },
    {
      icon: (
        <svg fill="#6183d1" width="72px" height="72px" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
          {/* Your existing SVG path */}
        </svg>
      ),
      title: "Technical Chapters",
      value: "4",
      description: "Specialized groups"
    },
    {
      icon: (
        <svg fill="#6183d1" width="72px" height="72px" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
          {/* Your existing SVG path */}
        </svg>
      ),
      title: "Annual Events",
      value: "20+",
      description: "Technical activities"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
            Chapter Statistics
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover the impact of our IEEE Student Branch chapters
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center group"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors duration-300">
                  {stat.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {stat.title}
              </h3>
              <p className="text-4xl font-bold text-blue-600 mb-2">
                {stat.value}
              </p>
              <p className="text-gray-600">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
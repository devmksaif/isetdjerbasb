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

  return (
    <div className="text-gray-600 body-font flex flex-row items-center justify-center gap-8 py-8">
      {/* First Card */}
      <motion.div
        className="flex flex-col justify-center items-center bg-gray-100"
        data-aos="fade-right" // AOS animation
        whileHover={{ scale: 1.05 }} // Framer Motion hover effect
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
          <img
            src="https://www.ieee-ras.org/images/ras-resources/IEEE_RAS_logo_4C_stacked-HiRes.fw.png"
            alt="Robotics & Automation Society"
            className="w-full h-64 object-contain"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Robotics & Automation Society
            </h2>
            <p className="text-gray-700 leading-tight mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu
              sapien porttitor, blandit velit ac, vehicula elit. Nunc et ex at
              turpis rutrum viverra.
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="text-gray-800 font-semibold"></span>
              </div>
              <span className="text-blue-500">Visit Website</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Second Card */}
      <motion.div
        className="flex flex-col justify-center items-center bg-gray-100"
        data-aos="fade-up" // AOS animation
        whileHover={{ scale: 1.05 }} // Framer Motion hover effect
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
          <img
            src="https://images.squarespace-cdn.com/content/v1/65a93a089f862c1d17683127/9bb0b9bc-1c1e-4a9f-8d8a-6d4fbdac1b5a/csociety_logo.png"
            alt="Computer Society"
            className="w-full h-64 object-contain"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Computer Society
            </h2>
            <p className="text-gray-700 leading-tight mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu
              sapien porttitor, blandit velit ac, vehicula elit. Nunc et ex at
              turpis rutrum viverra.
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="text-gray-800 font-semibold"></span>
              </div>
              <span className="text-blue-500">Visit Website</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Third Card */}
      <motion.div
        className="flex flex-col justify-center items-center bg-gray-100"
        data-aos="fade-up" // AOS animation
        whileHover={{ scale: 1.05 }} // Framer Motion hover effect
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
          <img
            src="https://www.ufsm.br/cursos/pos-graduacao/santa-maria/ppgee/wp-content/uploads/sites/553/2019/07/Logo_IAS-300x208.png"
            alt="Industry Applications Society"
            className="w-full h-64 object-contain"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Industry Applications Society
            </h2>
            <p className="text-gray-700 leading-tight mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu
              sapien porttitor, blandit velit ac, vehicula elit. Nunc et ex at
              turpis rutrum viverra.
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="text-gray-800 font-semibold"></span>
              </div>
              <span className="text-blue-500">Visit Website</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
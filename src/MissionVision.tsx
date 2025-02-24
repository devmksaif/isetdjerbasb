import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles
import Machine from './assets/machine.svg'
import Mission from './assets/mission.svg'
const MissionVision: React.FC = () => {
    // Initialize AOS
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    return (
        <>
            <h2
                className="text-4xl font-bold text-center text-gray-800 mb-12   bg-clip-text text-transparent"
                data-aos="fade-up"
            >
                Mission & Vision
            </h2>
            <div className="container mx-auto flex-row gap-4 flex px-6 py-12  0">

                <div
                    data-aos="fade-up"  style={{ backgroundColor : "#374151"}}
                    className="bg-white p-8 rounded-lg shadow-lg mb-8 transform transition-all hover:scale-105 hover:shadow-xl"
                >
                    <div className="flex items-center mb-4">
                        <div className="p-3 bg-blue-100 rounded-full">
                        <img src={Mission} alt="Machine Icon" className="w-16 h-16" />
                        </div>
                        <h2 className="text-2xl font-bold text-white ml-4">Mission</h2>
                    </div>
                    <p className="text-lg text-white leading-relaxed">
                        Our mission is to empower students by fostering a culture of
                        innovation, technical excellence, and leadership. We aim to bridge the
                        gap between academia and industry through workshops, hackathons, and
                        collaborative projects, equipping our members with the skills and
                        knowledge to thrive in the ever-evolving world of technology.
                    </p>
                </div>
                <div
                    data-aos="fade-up" style={{ backgroundColor : "#374151"}}
                    className="bg-white p-8 rounded-lg shadow-lg mb-8 transform transition-all hover:scale-105 hover:shadow-xl"
                >
                    <div className="flex items-center mb-4">
                        <div className="p-3 bg-blue-100 rounded-full">
                        <img src={Machine} alt="Machine Icon" className="w-16 h-16" />
                        </div>
                        <h2 className="text-2xl font-bold text-white ml-4">Vision</h2>
                    </div>
                    <p className="text-lg text-white leading-relaxed">
                        Our mission is to empower students by fostering a culture of
                        innovation, technical excellence, and leadership. We aim to bridge the
                        gap between academia and industry through workshops, hackathons, and
                        collaborative projects, equipping our members with the skills and
                        knowledge to thrive in the ever-evolving world of technology.
                    </p>
                </div>


            </div>
        </>

    );
};

export default MissionVision;
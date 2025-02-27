import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import IEEELogo from './assets/ieee.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import TeamSection from './TeamSection';
import MissionVision from './MissionVision';

const DetailsAbout = () => {
    // Initialize AOS
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                {/* Logo and Description Section */}
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="lg:w-1/3"
                        >
                            <div className="relative">
                                <div className="absolute -inset-4 bg-blue-100 rounded-full opacity-50 blur-2xl"></div>
                                <img
                                    src={IEEELogo}
                                    alt="IEEE Logo"
                                    className="relative w-64 h-64 object-contain rounded-full shadow-xl hover:shadow-2xl transition-shadow duration-300"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            {...fadeInUp}
                            className="lg:w-2/3 space-y-6"
                        >
                            <div className="space-y-4">
                                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                                    Who Are We?
                                </h2>
                                <div className="w-24 h-1 bg-blue-500 rounded-full"></div>
                            </div>

                            <div className="space-y-4 text-gray-600">
                                <p className="text-lg leading-relaxed">
                                    Founded in 2016, the IEEE ISET Djerba Student Branch stands as a 
                                    beacon of <span className="text-blue-600 font-semibold">technical excellence</span> and 
                                    <span className="text-blue-600 font-semibold"> innovation</span> within our academic community.
                                </p>
                                
                                <p className="text-lg leading-relaxed">
                                    Through our dynamic program of workshops, hackathons, and networking events, 
                                    we empower students to develop crucial skills and forge valuable industry connections.
                                </p>

                                <div className="pt-4">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold 
                                                 hover:bg-blue-700 transform transition-all duration-300 
                                                 shadow-lg hover:shadow-blue-500/50"
                                    >
                                        Join IEEE Today
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Statistics Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
                    >
                        {[
                            { number: "500+", label: "Active Members" },
                            { number: "50+", label: "Annual Events" },
                            { number: "12+", label: "Technical Workshops" }
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl 
                                         transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <h3 className="text-4xl font-bold text-blue-600 mb-2">
                                    {stat.number}
                                </h3>
                                <p className="text-gray-600 font-medium">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </motion.div>

                    {/* Values Section */}
                    <motion.div
                        {...fadeInUp}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
                    >
                        {[
                            {
                                title: "Innovation",
                                description: "Fostering creative solutions and cutting-edge technologies"
                            },
                            {
                                title: "Leadership",
                                description: "Developing tomorrow's technical leaders"
                            },
                            {
                                title: "Excellence",
                                description: "Striving for the highest standards in everything we do"
                            }
                        ].map((value, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl 
                                         transition-all duration-300 border border-gray-100"
                            >
                                <h3 className="text-xl font-bold text-gray-800 mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Team and Mission/Vision Sections */}
                <TeamSection />
                <MissionVision />
            </div>
        </section>
    );
};

export default DetailsAbout;
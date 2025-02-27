import React from 'react';
import { motion } from 'framer-motion';
import Machine from './assets/machine.svg';
import Mission from './assets/mission.svg';

const MissionVision: React.FC = () => {
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
                        Our Mission & Vision
                    </h2>
                    <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Driving innovation and excellence in technology through leadership and collaboration
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Mission Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                    >
                        <div className="p-8">
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-blue-100 rounded-2xl">
                                    <img src={Mission} alt="Mission Icon" className="w-16 h-16" />
                                </div>
                                <h3 className="text-3xl font-bold text-gray-800 ml-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                                    Mission
                                </h3>
                            </div>
                            <p className="text-lg text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                Our mission is to foster technological innovation and excellence for the benefit of humanity. 
                                We strive to advance technology through knowledge sharing, collaborative projects, and 
                                professional development opportunities for our members.
                            </p>
                        </div>
                    </motion.div>

                    {/* Vision Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                    >
                        <div className="p-8">
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-blue-100 rounded-2xl">
                                    <img src={Machine} alt="Vision Icon" className="w-16 h-16" />
                                </div>
                                <h3 className="text-3xl font-bold text-gray-800 ml-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                                    Vision
                                </h3>
                            </div>
                            <p className="text-lg text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                We envision a future where technology serves as a bridge to connect, inspire, and 
                                empower communities worldwide. Through leadership development and technical excellence, 
                                we aim to shape tomorrow's innovations.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;
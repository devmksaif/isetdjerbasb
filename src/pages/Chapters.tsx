import React from "react";
import { motion } from "framer-motion";
import NavBar from "../components/layout/NavBar";
import IEEE_COVER from '../assets/ieee_cover.jpg';
import ChaptersSection from "../components/sections/ChaptersSection";
import ChapterItems from "../components/sections/ChapterItems";

export default function Chapters() {
    return (
        <>
            <div
                className="relative w-full min-h-screen flex flex-col justify-center bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: `url(${IEEE_COVER})` }}
            >
                {/* Enhanced Overlay with Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 backdrop-blur-sm"></div>

                <NavBar />

                {/* Enhanced Hero Content */}
                <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-4 md:px-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full max-w-6xl mx-auto text-center"
                    >
                        {/* Decorative Element */}
                        <div className="mb-6">
                            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
                        </div>

                        {/* Main Title */}
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            <span className="text-blue-500">IEEE</span>{" "}
                            <span className="[text-shadow:_2px_2px_4px_rgba(0,0,0,0.5)]">
                                Chapters
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
                        >
                            Discover our specialized technical communities and their innovative initiatives
                        </motion.p>

                        {/* Scroll Indicator */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                        >
                            <div className="animate-bounce">
                                <svg
                                    className="w-6 h-6 text-white"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                                </svg>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Content Sections with Enhanced Spacing */}
            <div className="bg-gradient-to-b from-white to-gray-50">
                <ChaptersSection />
                <ChapterItems />
            </div>
        </>
    );
}
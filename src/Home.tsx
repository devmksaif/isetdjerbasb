import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import IEEE_COVER from './assets/ieee_cover.jpg';
import TSYP1 from './assets/tsyp.jpg'
import TSYP2 from './assets/ieee_officers.jpg'
import Details from "./Details";
import Carousel from "./Carousel";
import TSYP3 from './assets/ieee_officers2.jpg'
import TSYP4 from './assets/tsyp4.jpeg'
import TSYP5 from './assets/tsyp5.jpeg'
import TSYP6 from './assets/tsyp6.gif'
import { motion } from "framer-motion";

export default function Home() {
    const openingPhrase = "Welcome to";
    const endingPhrase = "IEEE ISET Djerba Student Branch";
    const [copyPhrase, setCopyPhrase] = useState("");
    const [copyEnding, setCopyEnding] = useState("");
    const [indexOpening, setIndexOpening] = useState(0);
    const [indexEnding, setIndexEnding] = useState(0);
    const [isOpeningComplete, setIsOpeningComplete] = useState(false);
    const [isRemoving, setIsRemoving] = useState(false);

    const endingPart1 = "IEEE ISET Djerba";
    const endingPart2 = " Student Branch";

    useEffect(() => {
        let timer: any;

        if (!isOpeningComplete) {
            timer = setInterval(() => {
                if (indexOpening < openingPhrase.length) {
                    setCopyPhrase((prev) => prev + openingPhrase[indexOpening]);
                    setIndexOpening((prev) => prev + 1);
                } else {
                    setIsOpeningComplete(true);
                    clearInterval(timer);
                }
            }, 50);
        } else if (!isRemoving) {
            timer = setInterval(() => {
                if (indexEnding < endingPhrase.length) {
                    setCopyEnding((prev) => prev + endingPhrase[indexEnding]);
                    setIndexEnding((prev) => prev + 1);
                } else {
                    setTimeout(() => {
                        setIsRemoving(true);
                    }, 5000);
                    clearInterval(timer);
                }
            }, 50);
        } else {
            // Backspace effect
            timer = setInterval(() => {
                if (copyEnding.length > 0) {
                    setCopyEnding((prev) => prev.slice(0, -1));
                } else if (copyPhrase.length > 0) {
                    setCopyPhrase((prev) => prev.slice(0, -1));
                } else {
                    setIsOpeningComplete(false);
                    setIsRemoving(false);
                    setIndexOpening(0);
                    setIndexEnding(0);
                    clearInterval(timer);
                }
            }, 100);
        }

        return () => clearInterval(timer);
    }, [indexOpening, indexEnding, isOpeningComplete, isRemoving, copyPhrase, copyEnding]);

    const images = [
        TSYP1,
        TSYP2,
        TSYP3,
        TSYP4,
        TSYP5,
        TSYP6
    ];
    const isStudentBranchTyped = copyEnding.length > endingPart1.length;

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
                            <span className="text-blue-500">{copyPhrase}</span>
                            <br />
                            <span className="text-white [text-shadow:_2px_2px_4px_rgba(0,0,0,0.5)]">
                                {copyEnding.slice(0, endingPart1.length)}
                            </span>
                            {isStudentBranchTyped && (
                                <span className="text-blue-400 [text-shadow:_2px_2px_4px_rgba(0,0,0,0.5)]">
                                    {copyEnding.slice(endingPart1.length)}
                                </span>
                            )}
                        </h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
                        >
                            Empowering students through technology, innovation, and leadership
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50">
                                Join IEEE
                            </button>
                            <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
                                Learn More
                            </button>
                        </motion.div>

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
            <Details />
            <Carousel images={images} />
        </>
    );
}
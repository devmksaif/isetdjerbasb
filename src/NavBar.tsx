import React ,{useState} from "react";
import LogoIEEE from './assets/ieee.png'
import { useNavigate } from "react-router-dom";
export default function NavBar() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleAboutNavigation() {
        navigate("/about");
        setIsMenuOpen(false);
    }

    function handleHomeNavigation() {
        navigate("/");
        setIsMenuOpen(false);
    }

    function handleUnitsNavigation() {
        navigate("/units");
        setIsMenuOpen(false);
    }

    function handleEventsNavigation() {
        navigate("/events");
        setIsMenuOpen(false);
    }

    return (
        <>
            <div className="absolute self-center z-50 top-0 justify-self-center flex bg-white backdrop-blur-sm bg-opacity-90 flex-row gap-10 items-center py-4 justify-between px-4 h-16 mt-10 rounded-full shadow-lg hover:shadow-sm hover:shadow-blue-200/50 w-11/12 md:w-8/12 transition-all duration-300 border border-gray-100">
                <div className="items-center flex flex-row gap-5">
                    <div>
                        <img onClick={handleHomeNavigation} src={LogoIEEE} className="cursor-pointer w-20 md:w-28 h-auto hover:scale-110 transition-transform duration-300" alt="IEEE Logo" />
                    </div>

                    {/* Hamburger Menu Button for Mobile */}
                    <button 
                        className="md:hidden text-gray-700 hover:text-[#00629B] focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center flex-row justify-evenly gap-10">
                        <button onClick={handleAboutNavigation} className="font-semibold text-gray-700 hover:text-[#00629B] hover:scale-105 transition-all duration-300">
                            ABOUT US
                        </button>
                        <button onClick={handleUnitsNavigation} className="font-semibold text-gray-700 hover:text-[#00629B] hover:scale-105 transition-all duration-300">
                            UNITS
                        </button>
                        <button onClick={handleEventsNavigation} className="font-semibold text-gray-700 hover:text-[#00629B] hover:scale-105 transition-all duration-300">
                            EVENTS
                        </button>
                    </div>
                </div>

                {/* Register Button */}
                <button className="hidden md:block relative overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-2.5 font-mono font-bold text-white transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 active:scale-95">
                    <span className="relative z-10">Register</span>
                    <span className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></span>
                </button>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg md:hidden">
                        <div className="flex flex-col p-4 gap-4">
                            <button onClick={handleAboutNavigation} className="font-semibold text-gray-700 hover:text-[#00629B] transition-all duration-300">
                                ABOUT US
                            </button>
                            <button onClick={handleUnitsNavigation} className="font-semibold text-gray-700 hover:text-[#00629B] transition-all duration-300">
                                UNITS
                            </button>
                            <button onClick={handleEventsNavigation} className="font-semibold text-gray-700 hover:text-[#00629B] transition-all duration-300">
                                EVENTS
                            </button>
                            <button className="w-full relative overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-2.5 font-mono font-bold text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300">
                                <span className="relative z-10">Register</span>
                                <span className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
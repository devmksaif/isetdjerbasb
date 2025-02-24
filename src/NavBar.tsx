
import React from "react";
import LogoIEEE from './assets/ieee.png'
import { useNavigate } from "react-router-dom";
export default function NavBar() {
    const navigate = useNavigate();
    function handleAboutNavigation() {
        navigate("/about");
    }

    function handleHomeNavigation() {
        navigate("/");
    }
    function handleChaptersNavigation() {
        navigate("/chapters");
    }

    return (
        <>
            <div className="absolute self-center z-50 top-0 justify-self-center flex bg-white backdrop-blur-sm bg-opacity-90 flex-row gap-10 items-center py-4 justify-between px-4 h-16 mt-10 rounded-full shadow-lg hover:shadow-sm hover:shadow-blue-200/50 w-8/12 transition-all duration-300 border border-gray-100">
                <div className="items-center flex flex-row gap-5">
                    <div>
                        <img onClick={handleHomeNavigation} src={LogoIEEE} className="cursor-pointer w-28 h-28s shover:scale-110 transition-transform duration-300" alt="IEEE Logo" />
                    </div>

                    <div className="items-center flex-row flex justify-evenly gap-10">
                        <button onClick={handleAboutNavigation} className="font-semibold text-gray-700 hover:text-[#00629B] hover:scale-105 transition-all duration-300">
                            ABOUT US
                        </button>
                        <button onClick={handleChaptersNavigation} className="font-semibold text-gray-700 hover:text-[#00629B] hover:scale-105 transition-all duration-300">
                            CHAPTERS
                        </button>
                        <button className="font-semibold text-gray-700 hover:text-[#00629B] hover:scale-105 transition-all duration-300">
                            UNITS
                        </button>
                    </div>
                </div>
                <button  className="relative rounded-full bg-blue-500 px-4 py-2 font-mono font-bold text-white transition-colors duration-300 ease-linear before:absolute before:right-1/2 before:top-1/2 before:-z-[1] before:h-3/4 before:w-2/3 before:origin-bottom-left before:-translate-y-1/2 before:translate-x-1/2 before:animate-ping before:rounded-full before:bg-blue-500 hover:bg-blue-700 hover:before:bg-blue-700">
                    Register
                </button>
            </div>
        </>
    )
}
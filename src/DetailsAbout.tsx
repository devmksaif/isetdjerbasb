import React, { useEffect } from 'react';
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

    return (
        <section className="py-16 bg-gradient-to-r  ">
            <div className="container mx-auto px-4">
                {/* Logo and Description Section */}
                <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
                    <img
                        src={IEEELogo}
                        alt="IEEE Logo"
                        className="w-64 h-64 rounded-full shadow-lg"
                        data-aos="fade-right"
                    />
                    <div className="flex flex-col space-y-4" data-aos="fade-left">
                        <h2 className="text-4xl font-bold text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Who Are We?
                        </h2>
                        <p className="text-base text-gray-700 leading-relaxed">
                            Founded in 2016, the IEEE ISET Djerba Student Branch is a vibrant IEEE chapter fostering technical excellence, innovation, and leadership. Through workshops, hackathons, and networking events, students gain skills and industry exposure. Members participate in global IEEE competitions and conferences, staying ahead in technology. Open to all disciplines, the branch empowers students to innovate and make an impact in engineering, computing, and emerging technologies. <span className="font-semibold text-blue-600">Join us</span> and shape the future!
                        </p>
                    </div>
                </div>

                <TeamSection />
                <MissionVision/>
            </div>
        </section>
    );
};

export default DetailsAbout;
import React from "react";
import { motion } from "framer-motion";
import NavBar from "../components/layout/NavBar";
import IEEE_COVER from '../assets/ieee_cover.jpg';

export default function Events() {
    const events = [
        {
            title: "Tech Innovators Summit",
            date: "2023-11-15",
            location: "Main Auditorium",
            description: "Join us for a day of cutting-edge technology presentations and networking.",
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            tags: ["Technology", "Networking", "Innovation"]
        },
        {
            title: "Women in Engineering Workshop",
            date: "2023-12-01",
            location: "Engineering Building",
            description: "Empowering women in STEM fields through hands-on workshops and mentorship.",
            image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
            tags: ["Workshop", "Women in STEM", "Mentorship"]
        },
        {
            title: "Hackathon 2023",
            date: "2023-12-10",
            location: "Innovation Hub",
            description: "48-hour coding marathon to solve real-world problems with innovative solutions.",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            tags: ["Coding", "Innovation", "Competition"]
        },
        {
            title: "AI & Machine Learning Conference",
            date: "2024-01-20",
            location: "Conference Center",
            description: "Explore the latest advancements in AI and machine learning technologies.",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            tags: ["AI", "Machine Learning", "Conference"]
        },
        {
            title: "Robotics Workshop",
            date: "2024-02-10",
            location: "Engineering Lab",
            description: "Hands-on workshop exploring the latest in robotics technology and applications.",
            image: "https://images.unsplash.com/photo-1591117207239-788bf8de6c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
            tags: ["Robotics", "Workshop", "Hands-on"]
        },
        {
            title: "Cybersecurity Symposium",
            date: "2024-03-05",
            location: "Security Center",
            description: "Deep dive into the latest cybersecurity threats and defense strategies.",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            tags: ["Security", "Symposium", "Technology"]
        }
    ];

    const cardVariants = {
        offscreen: {
            y: 50,
            opacity: 0
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

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
                                Events
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
                        >
                            Discover our upcoming events, workshops, and technical sessions
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50">
                                View Calendar
                            </button>
                            <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
                                Past Events
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

            {/* Events Grid Section */}
            <section className="py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
                            Upcoming Events
                        </h2>
                        <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Explore our exciting lineup of technical events and workshops
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {events.map((event, index) => (
                            <motion.div
                                key={index}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.5 }}
                                variants={cardVariants}
                            >
                                <div className="relative group h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                                    {/* Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        {/* Date */}
                                        <div className="text-sm text-gray-500 mb-2">
                                            {new Date(event.date).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">
                                            {event.title}
                                        </h3>

                                        {/* Location */}
                                        <div className="flex items-center text-gray-600 mb-4">
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span>{event.location}</span>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-600 mb-4">
                                            {event.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {event.tags.map((tag, tagIndex) => (
                                                <span
                                                    key={tagIndex}
                                                    className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* CTA Button */}
                                        <button className="mt-6 w-full px-4 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
} 
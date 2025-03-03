import React, { useState } from 'react';
import { motion } from 'framer-motion';
import NavBar from '../components/layout/NavBar';
import IEEE_COVER from '../assets/ieee_cover.jpg';
import { useNavigate } from 'react-router-dom';

type EventType = {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    image: string;
    status?: string;
    
};

export default function Calendar() {
    const navigate = useNavigate();
    const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);

    const events = [
        {
            id: 1,
            title: "Tech Innovators Summit",
            date: "2023-11-15",
            time: "10:00 AM",
            location: "Main Auditorium",
            description: "Join us for a day of cutting-edge technology presentations and networking.",
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            status: "ongoing"
        },
        {
            id: 2,
            title: "Women in Engineering Workshop",
            date: "2023-12-01",
            time: "2:00 PM",
            location: "Engineering Building",
            description: "Empowering women in STEM fields through hands-on workshops and mentorship.",
            image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
            status: "upcoming"
        },
        {
            id: 3,
            title: "Hackathon 2023",
            date: "2023-12-10",
            time: "9:00 AM",
            location: "Innovation Hub",
            description: "48-hour coding marathon to solve real-world problems with innovative solutions.",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        }
    ];

    // Filter ongoing events, handling undefined status
    const ongoingEvents = events.filter((event) => event.status === "ongoing");

    return (
        <>
            {/* Hero Section */}
            <div
                className="relative w-full h-[60vh] flex flex-col justify-center bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: `url(${IEEE_COVER})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 backdrop-blur-sm"></div>
                <NavBar />

                <div className="relative z-10 flex flex-col justify-center items-center px-4 md:px-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full max-w-6xl mx-auto text-center"
                    >
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            <span className="text-blue-500">IEEE</span>{" "}
                            <span className="[text-shadow:_2px_2px_4px_rgba(0,0,0,0.5)]">
                                Event Calendar
                            </span>
                        </h1>
                    </motion.div>
                </div>
            </div>

            {/* Calendar Section */}
            <section className="py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
                            All Events
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {events.map((event) => (
                                <motion.div
                                    key={event.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                                    onClick={() => setSelectedEvent(event)}
                                >
                                    <div className="relative h-48 overflow-hidden rounded-t-2xl">
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-sm text-gray-500 mb-2">
                                            {new Date(event.date).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })} | {event.time}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">
                                            {event.title}
                                        </h3>
                                        <div className="flex items-center text-gray-600 mb-4">
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span>{event.location}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Event Details Modal */}
            {selectedEvent && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl p-8 max-w-2xl mx-4">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedEvent.title}</h2>
                        <div className="text-sm text-gray-500 mb-4">
                            {new Date(selectedEvent.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })} | {selectedEvent.time}
                        </div>
                        <div className="flex items-center text-gray-600 mb-4">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>{selectedEvent.location}</span>
                        </div>
                        <p className="text-gray-600 mb-6">{selectedEvent.description}</p>
                        <button
                            onClick={() => setSelectedEvent(null)}
                            className="bg-blue-600 text-white font-semibold px-8 py-2 rounded-full hover:bg-blue-700 transition-all duration-300"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
} 
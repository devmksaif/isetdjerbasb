import React from "react";
import { motion } from "framer-motion";
import NavBar from "../components/layout/NavBar";
import IEEE_COVER from '../assets/ieee_cover.jpg';
import { useNavigate } from "react-router-dom";

export default function JoinUs() {
    const navigate = useNavigate();

    return (
        <>
            {/* Hero Section */}
            <div
                className="relative w-full min-h-screen flex flex-col justify-center bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: `url(${IEEE_COVER})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 backdrop-blur-sm"></div>
                <NavBar />

                <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-4 md:px-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full max-w-6xl mx-auto text-center"
                    >
                        <div className="mb-6">
                            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            <span className="text-blue-500">Join</span>{" "}
                            <span className="[text-shadow:_2px_2px_4px_rgba(0,0,0,0.5)]">
                                IEEE ISET Djerba
                            </span>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
                        >
                            Become part of our innovative community and shape the future of technology
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            {/* Alternating Vertical Timeline */}
            <section className="py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col space-y-16 relative">
                            {/* Curved Vertical Connector */}
                            <div className="hidden md:block absolute left-1/2 h-full w-32 transform -translate-x-1/2">
                                <svg viewBox="0 0 100 1000" preserveAspectRatio="none" className="w-full h-full">
                                    {/* Background Path */}
                                    <path 
                                        d="M50,0 C50,150 50,150 50,300 C50,450 50,450 50,600 C50,750 50,750 50,1000" 
                                        stroke="#E5E7EB" 
                                        strokeWidth="4" 
                                        fill="none"
                                        strokeDasharray="8 4"
                                    />
                                    {/* Animated Primary Path */}
                                    <path 
                                        d="M50,0 C50,150 50,150 50,300 C50,450 50,450 50,600 C50,750 50,750 50,1000" 
                                        stroke="#3B82F6" 
                                        strokeWidth="4" 
                                        fill="none"
                                        strokeDasharray="20 10"
                                        className="animate-flow"
                                    />
                                    {/* Moving Circle Animation */}
                                    <circle 
                                        cx="0" 
                                        cy="0" 
                                        r="8" 
                                        fill="#3B82F6" 
                                        className="animate-move"
                                    >
                                        <animateMotion
                                            dur="4s"
                                            repeatCount="indefinite"
                                            path="M50,0 C50,150 50,150 50,300 C50,450 50,450 50,600 C50,750 50,750 50,1000"
                                        />
                                    </circle>
                                </svg>
                            </div>

                            {/* Step 1 - Left */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="relative z-10 group md:w-1/2 md:mr-auto"
                            >
                                <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                                    <div className="absolute -top-6 -right-6 md:right-auto md:-left-6 bg-gradient-to-br from-blue-500 to-purple-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                                        01
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Sign Up</h3>
                                    <p className="text-gray-600 mb-6">
                                        Create your IEEE account and join our student branch
                                    </p>
                                    <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full group-hover:scale-x-125 transition-transform duration-300"></div>
                                </div>
                            </motion.div>

                            {/* Step 2 - Right */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="relative z-10 group md:w-1/2 md:ml-auto"
                            >
                                <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                                    <div className="absolute -top-6 -right-6 md:right-auto md:-left-6 bg-gradient-to-br from-blue-500 to-purple-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                                        02
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Choose Your Chapter</h3>
                                    <p className="text-gray-600 mb-6">
                                        Select from our technical chapters based on your interests
                                    </p>
                                    <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full group-hover:scale-x-125 transition-transform duration-300"></div>
                                </div>
                            </motion.div>

                            {/* Step 3 - Left */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="relative z-10 group md:w-1/2 md:mr-auto"
                            >
                                <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                                    <div className="absolute -top-6 -right-6 md:right-auto md:-left-6 bg-gradient-to-br from-blue-500 to-purple-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                                        03
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Get Involved</h3>
                                    <p className="text-gray-600 mb-6">
                                        Participate in events, workshops, and projects
                                    </p>
                                    <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full group-hover:scale-x-125 transition-transform duration-300"></div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { icon: '👥', title: 'Networking', description: 'Connect with industry professionals' },
                                { icon: '💡', title: 'Innovation', description: 'Work on cutting-edge projects' },
                                { icon: '🎓', title: 'Learning', description: 'Access exclusive workshops' },
                                { icon: '🌐', title: 'Global', description: 'Be part of a worldwide community' }
                            ].map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: i * 0.2 }}
                                    className="text-center"
                                >
                                    <div className="text-4xl mb-4">{feature.icon}</div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-4">
                            {[
                                {
                                    question: "How do I join IEEE ISET Djerba?",
                                    answer: "You can join by creating an IEEE account and selecting our student branch during the registration process."
                                },
                                {
                                    question: "What are the membership benefits?",
                                    answer: "Members get access to exclusive workshops, networking events, and project opportunities."
                                },
                                {
                                    question: "Is there a membership fee?",
                                    answer: "Yes, there is a nominal annual fee that helps support our activities and events."
                                }
                            ].map((faq, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: i * 0.2 }}
                                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="text-lg font-semibold text-gray-800 mb-2">
                                        {faq.question}
                                    </div>
                                    <div className="text-gray-600">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-blue-500 to-purple-600">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to Join Our Community?
                        </h2>
                        <p className="text-lg text-gray-200 mb-8">
                            Take the first step towards an exciting journey in technology and innovation.
                        </p>
                        <button
                            onClick={() => navigate('/contact')}
                            className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Join Now
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
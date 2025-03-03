import React, { useState } from 'react';
import { motion } from 'framer-motion';
import NavBar from '../components/layout/NavBar';
import IEEE_COVER from '../assets/ieee_cover.jpg';

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

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
                            <span className="text-blue-500">Contact</span>{" "}
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
                            We're here to help! Reach out to us for any inquiries or collaborations.
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            {/* Contact Form Section */}
            <section className="py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
                        >
                            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                                Get in Touch
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                            placeholder="John"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                            placeholder="Doe"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                        placeholder="john.doe@example.com"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                        placeholder="Your subject"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                        rows={5}
                                        placeholder="Your message..."
                                        required
                                    ></textarea>
                                </div>

                                <div className="flex justify-center">
                                    <button
                                        type="submit"
                                        className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Info Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: '📍',
                                    title: 'Location',
                                    content: 'ISET Djerba, Midoun, Tunisia',
                                    link: '#'
                                },
                                {
                                    icon: '📞',
                                    title: 'Phone',
                                    content: '+216 12 345 678',
                                    link: 'tel:+21612345678'
                                },
                                {
                                    icon: '📧',
                                    title: 'Email',
                                    content: 'contact@ieeeisetdjerba.tn',
                                    link: 'mailto:contact@ieeeisetdjerba.tn'
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: i * 0.2 }}
                                    className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="text-4xl mb-4">{item.icon}</div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                                    <a
                                        href={item.link}
                                        className="text-blue-600 hover:text-blue-700 transition-colors"
                                    >
                                        {item.content}
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
} 
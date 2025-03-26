import React, { ChangeEvent, useState } from "react";
import { motion } from "framer-motion";
import NavBar from "../components/layout/NavBar";
import IEEE_COVER from '../assets/ieee_cover.jpg';
import { useNavigate } from "react-router-dom";

export default function JoinUs() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        studyLevel: '',
        interests: [],
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const target = e.target as HTMLInputElement; // Type assertion for checked property
        
        if (type === 'checkbox') {
            let updatedInterests = [...formData.interests];
            if (target.checked) {
                updatedInterests.push(target.value as never);
            } else {
                updatedInterests = updatedInterests.filter(item => item !== target.value);
            }
            setFormData({...formData, interests: updatedInterests});
        } else {
            setFormData({...formData, [name]: value});
        }
    };

    const handleSubmit = async (e: any ) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            // In a real app, you would send this to your backend API
            // which would then send the email using a service like SendGrid
            console.log('Form submitted:', formData);
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            setSubmitSuccess(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                studyLevel: '',
                interests: [],
                message: ''
            });
            
            // Reset success message after 5 seconds
            setTimeout(() => setSubmitSuccess(false), 5000);
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

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

            {/* Recruitment Form Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-3xl shadow-xl overflow-hidden"
                        >
                            <div className="md:flex">
                                <div className="md:w-1/3 bg-gradient-to-b from-blue-500 to-purple-600 p-8 text-white flex flex-col justify-center">
                                    <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
                                    <p className="mb-6">Fill out this form to apply for membership with IEEE ISET Djerba.</p>
                                    <div className="flex items-center">
                                        <div className="mr-4">
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-semibold">Email us at</p>
                                            <p className="text-sm">saifmkholy@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:w-2/3 p-8">
                                    {submitSuccess && (
                                        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                                            Thank you for your application! We'll contact you soon.
                                        </div>
                                    )}
                                    <form onSubmit={handleSubmit}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                                                    Full Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-gray-700 font-medium mb-2" htmlFor="studyLevel">
                                                    Study Level
                                                </label>
                                                <select
                                                    id="studyLevel"
                                                    name="studyLevel"
                                                    value={formData.studyLevel}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                                    required
                                                >
                                                    <option value="">Select your level</option>
                                                    <option value="1st Year">1st Year</option>
                                                    <option value="2nd Year">2nd Year</option>
                                                    <option value="3rd Year">3rd Year</option>
                                                    <option value="Graduate">Graduate</option>
                                                </select>
                                            </div>
                                        </div>
                                        
                                        <div className="mt-6">
                                            <label className="block text-gray-700 font-medium mb-2">
                                                Areas of Interest (Select all that apply)
                                            </label>
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                                {['Robotics', 'AI', 'Web Dev', 'IoT', 'Cybersecurity', 'Data Science'].map((interest) => (
                                                    <div key={interest} className="flex items-center">
                                                        <input
                                                            type="checkbox"
                                                            id={interest}
                                                            name="interests"
                                                            value={interest}
                                                            checked={formData.interests.includes(interest as never)}
                                                            onChange={handleChange}
                                                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                                        />
                                                        <label htmlFor={interest} className="ml-2 text-gray-700">
                                                            {interest}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        <div className="mt-6">
                                            <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                                                Why do you want to join IEEE ISET Djerba?
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={4}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                                required
                                            ></textarea>
                                        </div>
                                        
                                        <div className="mt-8">
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className={`w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                            >
                                                {isSubmitting ? (
                                                    <span className="flex items-center justify-center">
                                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                        </svg>
                                                        Processing...
                                                    </span>
                                                ) : 'Submit Application'}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </motion.div>
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
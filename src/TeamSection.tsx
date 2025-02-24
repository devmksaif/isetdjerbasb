import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

// Team Data
const teamMembers = [
    {
        name: "Chayma Sansa",
        position: "Chairwomen",
        avatar: "https://engineering.unl.edu/images/staff/Kayla-Person.jpg", // Replace with actual image URL
    },
    {
        name: "Iyed Tawila",
        position: "Vicechair",
        avatar: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg", // Replace with actual image URL
    },
    {
        name: "Mariem Souissi",
        position: "General Secretary",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbIvoj8NtPFJNdYMfV1qxb9lVN4hPd-yLzIQ&s", // Replace with actual image URL
    },
    {
        name: "Mahmoud Chtourou",
        position: "Human Resources",
        avatar: "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BsYXlcLzBiN2Y0ZTliLWY1OWMtNDAyNC05ZjA2LWIzZGMxMjg1MGFiNy0xOTIwLTEwODAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9fX0=", // Replace with actual image URL
    },
   
    {
        name: "Saifeddine Makhlouf",
        position: "Webmaster",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCp_ByMCZW8m0s3KmAbIENDvR2Zc_HkBJyYw&s", // Replace with actual image URL
    },
    {
        name: "Taha Hamrouni",
        position: "Media Manager",
        avatar: "https://kentuckycounselingcenter.com/wp-content/uploads/2022/01/thinking-man-gf9b9e7a8b_1920.png", // Replace with actual image URL
    },
];

const TeamSection = () => {
    // Initialize AOS
    React.useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section className="py-16 bg-gradient-to-r  ">
            <div className="container mx-auto px-4">
                {/* Section Heading */}
                <h2
                    className="text-4xl font-bold text-center text-gray-800 mb-12 bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text text-transparent"
                    data-aos="fade-up"
                >
                    Our Executive Committee
                </h2>

                {/* Team Members Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
                            data-aos="fade-up"
                            data-aos-delay={index * 100} // Staggered delay
                        >
                            {/* Avatar */}
                            <img
                                src={member.avatar}
                                alt={member.name}
                                className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-100"
                            />

                            {/* Name */}
                            <h3 className="text-xl font-semibold text-gray-800">
                                {member.name}
                            </h3>

                            {/* Position */}
                            <p className="text-gray-600 text-sm">
                                {member.position}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
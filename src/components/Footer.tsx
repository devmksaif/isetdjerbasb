import React from 'react';
import { motion } from "framer-motion";
import { Linkedin, Twitter, GitHub, Mail,Facebook,Instagram } from "react-feather";

export default function Footer() {
  const socialLinks = [
    { icon: <Linkedin />, url: "https://www.linkedin.com/company/ieee-iset-djerba-sb/posts/?feedView=all" },
    { icon: <Instagram />, url: "https://www.instagram.com/ieee.iset.djerba/" },
    { icon: <Facebook />, url: "https://www.facebook.com/ieee.isetjb/" },
    { 
      icon: <Mail />, 
      url: "mailto:saifmkholy@gmail.com",
      onClick: () => window.location.href = "mailto:saifmkholy@gmail.com"
    }
  ];

  return (
    <motion.footer 
      className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-12 mt-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
              IEEE ISET Djerba
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Empowering students through technology, innovation, and leadership.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="/units" className="text-gray-300 hover:text-blue-400 transition-colors">Chapters</a></li>
              <li><a href="/events" className="text-gray-300 hover:text-blue-400 transition-colors">Events</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Join Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
              Contact Us
            </h3>
            <ul className="text-gray-300 space-y-2">
              <li>Email: contact@ieeeiset.tn</li>
              <li>Phone: +216 12 345 678</li>
              <li>Address: ISET Djerba, Tunisia</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-2xl"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} IEEE ISET Djerba. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
} 
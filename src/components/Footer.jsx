import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <section className='py-10'>
        <div className="bg-[#003A2E] text-white py-24 px-6 container mx-auto rounded-2xl">
        <div className="max-w-7xl mx-auto">
            {/* Main Navigation Links */}
            <div className="flex flex-wrap justify-between mb-8 gap-y-6">
            <div className="flex items-center space-x-2">
                <h2 className="text-2xl font-semibold">Kingpins</h2>
                <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm">
                Overview
                </span>
            </div>
            
            <nav className="flex flex-wrap gap-x-8 gap-y-4 items-center">
                <a href="#" className="hover:text-[#BB914A] transition-colors">Home</a>
                <a href="#" className="hover:text-[#BB914A] transition-colors">Courses</a>
                <a href="#" className="hover:text-[#BB914A] transition-colors">About</a>
                <a href="#" className="hover:text-[#BB914A] transition-colors">Events</a>
                <a href="#" className="hover:text-[#BB914A] transition-colors">Blog</a>
                <a href="#" className="hover:text-[#BB914A] transition-colors">Store</a>
                <a href="#" className="hover:text-[#BB914A] transition-colors">Questions</a>
                <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#BB914A] text-black px-6 py-2 rounded-full font-medium"
                >
                Contact →
                </motion.button>
            </nav>
            </div>

            {/* Secondary Links */}
            {/* <div className="space-y-6 mb-8">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-300">
                <a href="#" className="hover:text-white transition-colors">Home 2</a>
                <a href="#" className="hover:text-white transition-colors">Home 3</a>
                <a href="#" className="hover:text-white transition-colors">Course 2</a>
                <a href="#" className="hover:text-white transition-colors">Course 3</a>
                <a href="#" className="hover:text-white transition-colors">About 2</a>
                <a href="#" className="hover:text-white transition-colors">About 3</a>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-300">
                <span className="bg-purple-800 px-3 py-1 rounded-md">UI Kit</span>
                <a href="#" className="hover:text-white transition-colors">Hero</a>
                <a href="#" className="hover:text-white transition-colors">Listing</a>
                <a href="#" className="hover:text-white transition-colors">Content</a>
                <a href="#" className="hover:text-white transition-colors">Tabs & Accordions</a>
                <a href="#" className="hover:text-white transition-colors">Buttons & Forms</a>
                <a href="#" className="hover:text-white transition-colors">Ecommerce</a>
            </div>
            </div> */}

            {/* Social Icons */}
            <div className="flex justify-center space-x-4 mb-8">
            <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="p-3 bg-[#005544] rounded-full hover:bg-[#00705a] transition-colors"
            >
                <Phone size={20} />
            </motion.a>
            <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="p-3 bg-[#005544] rounded-full hover:bg-[#00705a] transition-colors"
            >
                <Mail size={20} />
            </motion.a>
            <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="p-3 bg-[#005544] rounded-full hover:bg-[#00705a] transition-colors"
            >
                <Facebook size={20} />
            </motion.a>
            <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="p-3 bg-[#005544] rounded-full hover:bg-[#00705a] transition-colors"
            >
                <Linkedin size={20} />
            </motion.a>
            <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="p-3 bg-[#005544] rounded-full hover:bg-[#00705a] transition-colors"
            >
                <Instagram size={20} />
            </motion.a>
            </div>

            {/* Bottom Links */}
            <div className="flex flex-wrap justify-between text-sm text-gray-400 gap-y-4">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
                <a href="#" className="hover:text-white transition-colors">Instructions</a>
                <a href="#" className="hover:text-white transition-colors">Licenses</a>
                <a href="#" className="hover:text-white transition-colors">Changelog</a>
                <a href="#" className="hover:text-white transition-colors">Powered by Webflow</a>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
                <a href="#" className="hover:text-white transition-colors">Webflow templates</a>
                <a href="#" className="hover:text-white transition-colors">Made by xyz</a>
            </div>
            </div>
        </div>
        </div>
    </section>
  );
};

export default Footer;
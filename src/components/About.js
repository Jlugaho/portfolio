import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 text-gray-900"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <img
        src="/images/profile.jpg"
        alt="Profile"
        className="w-64 h-64 rounded-full shadow-lg mb-6 md:mb-0 md:mr-10"
      />
      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg">
          I am an Aeronautical Engineering student passionate about aircraft design, propulsion systems, and computational simulations. I enjoy turning complex aerospace concepts into practical solutions.
        </p>
      </div>
    </motion.section>
  );
}


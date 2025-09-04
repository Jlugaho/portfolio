import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-4 text-gray-800">About Me</h2>
      <p className="text-lg max-w-2xl text-gray-600">
        I am an Aeronautical Engineering student passionate about aircraft design,
        propulsion systems, and aerospace simulations. I enjoy solving complex problems
        and applying my skills to real-world aviation challenges.
      </p>
    </motion.section>
  );
}

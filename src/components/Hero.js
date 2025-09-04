import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white pt-16">
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Joseph Malongo Lugaho
      </motion.h1>

      <p className="text-xl mb-6 max-w-xl">
        🚀 Aeronautical Engineering Student | Aspiring Aerospace Innovator | Passionate about aircraft design, propulsion systems, and computational simulations
      </p>

      <div className="flex space-x-4 mb-6">
        <motion.a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-blue-600 px-6 py-3 rounded-xl shadow-lg flex items-center space-x-2 hover:bg-gray-100 transition-all"
          whileHover={{ scale: 1.05 }}
        >
          <FileText size={20} />
          <span>Resume</span>
        </motion.a>

        <motion.a
          href="#contact"
          className="bg-white text-blue-600 px-6 py-3 rounded-xl shadow-lg hover:bg-gray-100 transition-all"
          whileHover={{ scale: 1.05 }}
        >
          Contact Me
        </motion.a>
      </div>

      <div className="flex space-x-6">
        <motion.a
          href="https://www.linkedin.com/in/joseph-lugaho-52104814b/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-blue-600 p-3 rounded-full shadow-lg hover:bg-gray-100"
          whileHover={{ scale: 1.2 }}
        >
          <Linkedin size={24} />
        </motion.a>

        <motion.a
          href="https://github.com/Jlugaho"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-gray-900 p-3 rounded-full shadow-lg hover:bg-gray-100"
          whileHover={{ scale: 1.2 }}
        >
          <Github size={24} />
        </motion.a>

        <motion.a
          href="mailto:peterndungu.mwaura@slu.edu"
          className="bg-white text-red-600 p-3 rounded-full shadow-lg hover:bg-gray-100"
          whileHover={{ scale: 1.2 }}
        >
          <Mail size={24} />
        </motion.a>
      </div>
    </section>
  );
}



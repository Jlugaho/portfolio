import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-8">Contact Me</h2>

      <a
        href="mailto:peterndungu.mwaura@slu.edu"
        className="flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-xl shadow-lg hover:bg-gray-100 transition-all"
      >
        <Mail size={20} />
        <span>Email Me</span>
      </a>
    </motion.section>
  );
}



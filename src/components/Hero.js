import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Peter Ndungu Mwaura
      </motion.h1>
      <p className="text-xl mb-6">🚀 Aeronautical Engineering Student | Aspiring Aerospace Innovator</p>
      <motion.a
        href="#contact"
        className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:bg-gray-100"
        whileHover={{ scale: 1.05 }}
      >
        Get in Touch
      </motion.a>
    </section>
  );
}

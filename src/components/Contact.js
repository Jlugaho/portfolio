import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-6 text-gray-800">Contact Me</h2>
      <p className="mb-4 text-lg text-gray-600">You can reach me at:</p>
      <a href="mailto:peterndungu.mwaura@slu.edu" className="text-blue-600 underline">
        peterndungu.mwaura@slu.edu
      </a>
    </motion.section>
  );
}


import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = ["Aerodynamics", "Propulsion Systems", "CAD", "MATLAB", "CFD", "Python"];

  return (
    <motion.section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-6 text-gray-800">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <motion.div
            key={skill}
            className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg shadow"
            whileHover={{ scale: 1.1 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}


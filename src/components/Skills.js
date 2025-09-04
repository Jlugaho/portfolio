import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "Aerodynamics", level: 90 },
    { name: "CFD Simulation", level: 80 },
    { name: "MATLAB", level: 85 },
    { name: "SolidWorks", level: 75 },
    { name: "Python", level: 80 },
  ];

  return (
    <motion.section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-600 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-8">Skills</h2>
      <div className="w-full max-w-3xl space-y-6">
        {skills.map((skill) => (
          <div key={skill.name}>
            <p className="font-semibold mb-1">{skill.name}</p>
            <div className="w-full bg-white bg-opacity-30 rounded-full h-6">
              <motion.div
                className="bg-white h-6 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

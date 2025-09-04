import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    { name: "Aircraft Design Simulation", link: "#" },
    { name: "Propulsion System Analysis", link: "#" },
    { name: "CFD Study on Wing Aerodynamics", link: "#" },
  ];

  return (
    <motion.section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-6 text-gray-800">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.a
            key={project.name}
            href={project.link}
            className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.05 }}
          >
            {project.name}
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}


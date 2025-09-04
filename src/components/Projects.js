import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      name: "Aircraft Design Simulation",
      description: "Simulated wing aerodynamics and aircraft design parameters.",
      image: "project1.png",
      link: "#",
    },
    {
      name: "Propulsion System Analysis",
      description: "Analyzed jet engine performance using MATLAB and CFD.",
      image: "project2.png",
      link: "#",
    },
    {
      name: "CFD Wing Study",
      description: "Performed computational fluid dynamics study on wing lift and drag.",
      image: "project3.png",
      link: "#",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-8 text-gray-800">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.a
            key={project.name}
            href={project.link}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow bg-white"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={`/images/${project.image}`}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg">{project.name}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}



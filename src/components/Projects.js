import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Aircraft Wing CFD Analysis",
      desc: "Performed aerodynamic simulations using ANSYS Fluent to optimize wing performance.",
    },
    {
      title: "Drone Design Project",
      desc: "Designed and built a functional quadcopter prototype for payload delivery.",
    },
    {
      title: "Rocket Propulsion Study",
      desc: "Analyzed liquid fuel propulsion efficiency for small-scale rockets.",
    },
  ];

  return (
    <section className="py-16 px-6 max-w-5xl mx-auto" id="projects">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-600">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

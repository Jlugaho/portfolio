import React from "react";
import { Code, Wrench, Wind } from "lucide-react";

export default function Skills() {
  const skills = [
    { name: "MATLAB / Python", level: 85, icon: <Code /> },
    { name: "CATIA / SolidWorks", level: 80, icon: <Wrench /> },
    { name: "Aerodynamics / CFD", level: 90, icon: <Wind /> },
  ];

  return (
    <section className="py-16 bg-gray-100" id="skills">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {skills.map((skill, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <div className="text-blue-600">{skill.icon}</div>
            <div className="flex-1">
              <p className="font-semibold">{skill.name}</p>
              <div className="w-full bg-gray-300 rounded-full h-3 mt-1">
                <div
                  className="bg-blue-600 h-3 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
            <span className="font-medium">{skill.level}%</span>
          </div>
        ))}
      </div>
    </section>
  );
}

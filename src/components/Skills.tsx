
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript"]
    },
    {
      title: "Frontend Development",
      skills: ["React.js", "Material-UI", "Bootstrap", "Redux", "Redux Toolkit", "HTML", "CSS"]
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Postman", "VS Code"]
    }
  ];

  const getSkillColor = (skill: string) => {
    const colors = [
      "bg-blue-100 text-blue-800",
      "bg-green-100 text-green-800",
      "bg-purple-100 text-purple-800",
      "bg-orange-100 text-orange-800",
      "bg-pink-100 text-pink-800",
      "bg-indigo-100 text-indigo-800",
      "bg-red-100 text-red-800",
      "bg-yellow-100 text-yellow-800",
    ];
    return colors[skill.length % colors.length];
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getSkillColor(skill)} transform hover:scale-105 transition-transform duration-200`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Singaji Software Solutions",
      location: "Sandalpur",
      period: "Jan 2024 - Present",
      projects: [
        {
          name: "SOAR - Eclipse.XDR",
          description: "Integrated Shuffler.io features with Eclipse.XDR to enhance the SOAR module, focusing on automation and streamlined incident response.",
          technologies: ["React.js", "Material-UI"]
        },
        {
          name: "BUZZ Regional",
          description: "Contributed as a Frontend Developer from start to finish on Buzz Regional, a platform for discovering and advertising local events and businesses across Australia.",
          technologies: ["React.js", "Material-UI", "Redux Toolkit", "Stripe"]
        }
      ]
    },
    {
      title: "Frontend Developer",
      company: "Baelworks Innovation",
      location: "Bangalore",
      period: "Jan 2023 - Nov 2023",
      projects: [
        {
          name: "Singaji Central (College Management System)",
          description: "Contributed as a full-time member for the development of the Singaji Central College Management System, implementing key features and improvements.",
          technologies: ["React.js", "Redux", "Material-UI"]
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                    <h4 className="text-xl text-blue-600 font-semibold mb-2">{exp.company}</h4>
                  </div>
                  <div className="flex flex-col md:items-end space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Calendar size={16} className="mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin size={16} className="mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {exp.projects.map((project, projectIndex) => (
                    <div key={projectIndex} className="border-l-4 border-blue-200 pl-6">
                      <h5 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                        {project.name}
                        <ExternalLink size={16} className="ml-2 text-gray-400" />
                      </h5>
                      <p className="text-gray-600 mb-3 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

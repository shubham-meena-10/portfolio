
import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "M.C.A. (Computer Application)",
      institution: "Sage University, Indore",
      period: "2024 - 2026",
      status: "Pursuing"
    },
    {
      degree: "B.C.A. (Computer Application)",
      institution: "Vikram University, Ujjain",
      period: "2021 - 2024",
      percentage: "76.00%"
    },
    {
      degree: "Class 12, M.P. Board of Secondary Education",
      institution: "Bhopal",
      period: "2020 - 2021",
      percentage: "90.20%"
    },
    {
      degree: "Class 10, M.P. Board of Secondary Education",
      institution: "Bhopal",
      period: "2018 - 2019",
      percentage: "89.40%"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                  <GraduationCap className="text-blue-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{edu.degree}</h3>
                  <p className="text-blue-600 font-medium mb-2">{edu.institution}</p>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar size={16} className="mr-2" />
                    <span>{edu.period}</span>
                  </div>
                  {edu.percentage && (
                    <div className="flex items-center text-green-600">
                      <Award size={16} className="mr-2" />
                      <span className="font-medium">{edu.percentage}</span>
                    </div>
                  )}
                  {edu.status && (
                    <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mt-2">
                      {edu.status}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

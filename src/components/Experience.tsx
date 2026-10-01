
// import React from 'react';
// import { Calendar, MapPin, ExternalLink } from 'lucide-react';

// const Experience = () => {
//   const experiences = [
//     {
//       title: "Frontend Developer",
//       company: "Singaji Software Solutions",
//       location: "Sandalpur",
//       period: "Jan 2024 - Present",
//       projects: [
//         {
//           name: "SOAR - Eclipse.XDR",
//           description: "Integrated Shuffler.io features with Eclipse.XDR to enhance the SOAR module, focusing on automation and streamlined incident response.",
//           technologies: ["React.js", "Material-UI"]
//         },
//         {
//           name: "BUZZ Regional",
//           description: "Contributed as a Frontend Developer from start to finish on Buzz Regional, a platform for discovering and advertising local events and businesses across Australia.",
//           technologies: ["React.js", "Material-UI", "Redux Toolkit", "Stripe"]
//         }
//       ]
//     },
//     {
//       title: "Frontend Developer",
//       company: "Baelworks Innovation",
//       location: "Bangalore",
//       period: "Jan 2023 - Nov 2023",
//       projects: [
//         {
//           name: "Singaji Central (College Management System)",
//           description: "Contributed as a full-time member for the development of the Singaji Central College Management System, implementing key features and improvements.",
//           technologies: ["React.js", "Redux", "Material-UI"]
//         }
//       ]
//     }
//   ];

//   return (
//     <section id="experience" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
//           <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
//         </div>

//         <div className="space-y-12">
//           {experiences.map((exp, index) => (
//             <div key={index} className="relative">
//               <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
//                 <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
//                   <div>
//                     <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
//                     <h4 className="text-xl text-blue-600 font-semibold mb-2">{exp.company}</h4>
//                   </div>
//                   <div className="flex flex-col md:items-end space-y-2">
//                     <div className="flex items-center text-gray-600">
//                       <Calendar size={16} className="mr-2" />
//                       <span>{exp.period}</span>
//                     </div>
//                     <div className="flex items-center text-gray-600">
//                       <MapPin size={16} className="mr-2" />
//                       <span>{exp.location}</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="space-y-6">
//                   {exp.projects.map((project, projectIndex) => (
//                     <div key={projectIndex} className="border-l-4 border-blue-200 pl-6">
//                       <h5 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
//                         {project.name}
//                         <ExternalLink size={16} className="ml-2 text-gray-400" />
//                       </h5>
//                       <p className="text-gray-600 mb-3 leading-relaxed">{project.description}</p>
//                       <div className="flex flex-wrap gap-2">
//                         {project.technologies.map((tech, techIndex) => (
//                           <span
//                             key={techIndex}
//                             className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
//                           >
//                             {tech}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;















// //  Without URLS code
// import { Calendar, MapPin } from 'lucide-react';

// const experiences = [
//   {
//     company: 'HORA Services Pvt. Ltd.', role: 'Full Stack Developer', location: 'India', period: 'Jul 2025 — Present',
//     projects: [
//       {
//         name: 'Wonderland', label: 'Built from the ground up',
//         description: 'Owned the complete dynamic event and invitation platform—from architecture and MongoDB design to backend services, frontend, integrations and production deployment.',
//         impact: ['Built REST APIs and business logic with Node.js, Express.js and MongoDB', 'Delivered event creation, invitations, RSVP, guest management and lifecycle workflows', 'Added Socket.IO chat, live guest updates, Firebase notifications and cron reminders', 'Designed AWS S3 and OPFS media workflows for reliable photo and video uploads'],
//         technologies: ['Node.js', 'Express.js', 'MongoDB', 'Next.js', 'Socket.IO', 'AWS S3', 'Firebase', 'OPFS']
//       },
//       {
//         name: 'HORA Services', label: 'Production platform',
//         description: 'Developed customer, product, package, order and operations workflows for a multi-service event and party marketplace.',
//         impact: ['Maintained REST APIs and backend business logic across core workflows', 'Enhanced product, package, user and team management in the admin portal', 'Implemented Razorpay payments, WhatsApp automation and lead-generation flows', 'Handled S3 media workflows and deployment with EC2, Nginx and Hostinger'],
//         technologies: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay', 'AWS EC2', 'Nginx']
//       }
//     ]
//   },
//   {
//     company: 'Singaji Software Solutions', role: 'Full Stack Developer', location: 'Sandalpur', period: 'Sep 2023 — Jun 2025',
//     projects: [
//       {
//         name: 'SOAR — Eclipse.XDR', label: 'Security operations',
//         description: 'Extended Shuffler.io capabilities inside Eclipse.XDR for incident-response automation and complex workflow operations.',
//         impact: ['Customized automation workflows and incident-management features', 'Integrated React Flow for visual workflow management', 'Improved usability across security operations interfaces'],
//         technologies: ['React.js', 'Material UI', 'React Flow', 'Shuffler.io']
//       },
//       {
//         name: 'BUZZ Regional', label: 'Events platform',
//         description: 'Built public and admin experiences for an Australian local events, ticketing, business deals and advertising platform.',
//         impact: ['Developed responsive event, booking and business-deal modules', 'Used RTK Query for data fetching and state synchronization', 'Integrated Stripe payments for advertisements'],
//         technologies: ['React.js', 'Material UI', 'RTK Query', 'Stripe']
//       }
//     ]
//   },
//   {
//     company: 'Baelworks Innovation', role: 'Frontend Developer', location: 'Bangalore', period: 'Jan 2023 — Aug 2023',
//     projects: [{
//       name: 'Singaji Central', label: 'College management',
//       description: 'Contributed student and administrative features to a college management platform during a full-time internship.',
//       impact: ['Integrated PhonePe for online student fee payments', 'Built administrator data visualizations', 'Developed student reports for academic tracking'],
//       technologies: ['React.js', 'Redux', 'Material UI', 'PhonePe']
//     }]
//   }
// ];

// const Experience = () => (
//   <section id="experience" className="bg-background py-24">
//     <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//       <div className="mb-16">
//         <p className="section-label">Experience / 03</p>
//         <h2 className="section-title">Production systems, built end to end.</h2>
//       </div>

//       <div className="space-y-20">
//         {experiences.map((experience, companyIndex) => (
//           <article key={experience.company} className="grid gap-8 border-t border-border pt-8 lg:grid-cols-[0.32fr_0.68fr] lg:gap-16">
//             <header>
//               <span className="mb-5 block font-mono text-xs text-muted-foreground">0{companyIndex + 1}</span>
//               <h3 className="mb-2 text-2xl font-bold">{experience.company}</h3>
//               <p className="mb-5 font-medium text-accent">{experience.role}</p>
//               <div className="space-y-2 text-sm text-muted-foreground">
//                 <p className="flex items-center gap-2"><Calendar size={15} /> {experience.period}</p>
//                 <p className="flex items-center gap-2"><MapPin size={15} /> {experience.location}</p>
//               </div>
//             </header>

//             <div className="space-y-12">
//               {experience.projects.map((project) => (
//                 <div key={project.name}>
//                   <p className="mb-2 font-mono text-xs uppercase text-muted-foreground">{project.label}</p>
//                   <h4 className="mb-3 text-2xl font-semibold">{project.name}</h4>
//                   <p className="mb-6 max-w-3xl leading-relaxed text-muted-foreground">{project.description}</p>
//                   <ul className="mb-6 grid gap-3 text-sm sm:grid-cols-2">
//                     {project.impact.map((item) => <li key={item} className="border-l-2 border-accent pl-3 leading-relaxed">{item}</li>)}
//                   </ul>
//                   <div className="flex flex-wrap gap-2">
//                     {project.technologies.map((technology) => <span key={technology} className="bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground">{technology}</span>)}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </article>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// export default Experience;














import { trackProjectClick } from '@/lib/tracker';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const experiences = [
  {
    company: 'HORA Services Pvt. Ltd.',
    companyUrl: 'https://horaservices.com',
    role: 'Full Stack Developer',
    location: 'Bangalore, India',
    period: 'Jul 2025 — Present',
    projects: [
      {
        name: 'Wonderland',
        projectUrl: "https://horaservices.com/wonderland",
        label: 'Built from the ground up',
        description:
          'Owned the complete dynamic event and invitation platform—from architecture and MongoDB design to backend services, frontend, integrations and production deployment.',
        impact: [
          'Built REST APIs and business logic with Node.js, Express.js and MongoDB',
          'Delivered event creation, invitations, RSVP, guest management and lifecycle workflows',
          'Added Socket.IO chat, live guest updates, Firebase notifications and cron reminders',
          'Designed AWS S3 and OPFS media workflows for reliable photo and video uploads',
        ],
        technologies: [
          'Node.js',
          'Express.js',
          'MongoDB',
          'Next.js',
          'Socket.IO',
          'AWS S3',
          'Firebase',
          'OPFS',
        ],
      },
      {
        name: 'HORA',
        projectUrl: 'https://horaservices.com',
        label: 'Production platform',
        description:
          'Developed customer, product, package, order and operations workflows for a multi-service event and party marketplace.',
        impact: [
          'Maintained REST APIs and backend business logic across core workflows',
          'Enhanced product, package, user and team management in the admin portal',
          'Implemented Razorpay payments, WhatsApp automation and lead-generation flows',
          'Handled S3 media workflows and deployment with EC2, Nginx and Hostinger',
        ],
        technologies: [
          'Next.js',
          'Node.js',
          'Express.js',
          'MongoDB',
          'Razorpay',
          'AWS EC2',
          'Nginx',
        ],
      },
    ],
  },
  {
    company: 'Singaji Software Solutions',
    companyUrl: "https://singaji.in",
    role: 'Full Stack Developer',
    location: 'Sandalpur, India',
    period: 'Sep 2023 — Jun 2025',
    projects: [
      {
        name: 'SOAR — Eclipse.XDR',
        projectUrl: null,
        label: 'Security operations',
        description:
          'Extended Shuffler.io capabilities inside Eclipse.XDR for incident-response automation and complex workflow operations.',
        impact: [
          'Customized automation workflows and incident-management features',
          'Integrated React Flow for visual workflow management',
          'Improved usability across security operations interfaces',
        ],
        technologies: [
          'React.js',
          'Material UI',
          'React Flow',
          'Shuffler.io',
        ],
      },
      {
        name: 'BUZZ Regional',
        projectUrl: null,
        label: 'Events platform',
        description:
          'Built public and admin experiences for an Australian local events, ticketing, business deals and advertising platform.',
        impact: [
          'Developed responsive event, booking and business-deal modules',
          'Used RTK Query for data fetching and state synchronization',
          'Integrated Stripe payments for advertisements',
        ],
        technologies: [
          'React.js',
          'Material UI',
          'RTK Query',
          'Stripe',
        ],
      },
    ],
  },
  {
    company: 'Baelworks Innovation',
    companyUrl: "",
    role: 'Frontend Developer',
    location: 'Bangalore, India',
    period: 'Jan 2023 — Aug 2023',
    projects: [
      {
        name: 'Singaji Central',
        projectUrl: "https://central.ssism.org/",
        label: 'College management',
        description:
          'Contributed student and administrative features to a college management platform during a full-time internship.',
        impact: [
          'Integrated PhonePe for online student fee payments',
          'Built administrator data visualizations',
          'Developed student reports for academic tracking',
          "Implemented students id card scanning and verification for attendance and access control systems",
        ],
        technologies: [
          'React.js',
          'Redux',
          'Material UI',
          'PhonePe',
        ],
      },
    ],
  },
];

const Experience = () => (
  <section id="experience" className="bg-background py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-16">
        <p className="section-label">Experience</p>
        <h2 className="section-title">
          Production systems, built end to end.
        </h2>
      </div>

      <div className="space-y-20">
        {experiences.map((experience, companyIndex) => (
          <article
            key={experience.company}
            className="grid gap-8 border-t border-border pt-8 lg:grid-cols-[0.32fr_0.68fr] lg:gap-16"
          >
            <header>
              <span className="mb-5 block font-mono text-xs text-muted-foreground">
                0{companyIndex + 1}
              </span>

              {/* Company Name + Link */}
              <div className="mb-2 flex items-center gap-2">
                <h3 className="text-2xl font-bold">
                  {experience.company}
                </h3>

                {experience.companyUrl ? (
                  <a
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${experience.company}`}
                    title={`Visit ${experience.company}`}
                    className="inline-flex shrink-0 items-center justify-center text-muted-foreground transition-colors hover:text-accent"
                    onClick={() => trackProjectClick(experience.company)}
                  >
                    <ExternalLink size={16} strokeWidth={1.8} />
                  </a>
                ) : (
                  <span
                    aria-disabled="true"
                    title="Company website not available"
                    className="inline-flex shrink-0 cursor-not-allowed items-center justify-center text-muted-foreground/30"
                  >
                    <ExternalLink size={16} strokeWidth={1.8} />
                  </span>
                )}
              </div>

              <p className="mb-5 font-medium text-accent">
                {experience.role}
              </p>

              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Calendar size={15} />
                  {experience.period}
                </p>

                <p className="flex items-center gap-2">
                  <MapPin size={15} />
                  {experience.location}
                </p>
              </div>
            </header>

            <div className="space-y-12">
              {experience.projects.map((project) => (
                <div key={project.name}>
                  <p className="mb-2 font-mono text-xs uppercase text-muted-foreground">
                    {project.label}
                  </p>

                  {/* Project Name + Link */}
                  <div className="mb-3 flex items-center gap-2">
                    <h4 className="text-2xl font-semibold">
                      {project.name}
                    </h4>

                    {project.projectUrl ? (
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${project.name}`}
                        title={`Visit ${project.name}`}
                        onClick={() => trackProjectClick(project.name)}
                        className="inline-flex shrink-0 items-center justify-center text-muted-foreground transition-colors hover:text-accent"
                      >
                        <ExternalLink size={16} strokeWidth={1.8} />
                      </a>
                    ) : (
                      <span
                        aria-disabled="true"
                        title="Project website not available"
                        className="inline-flex shrink-0 cursor-not-allowed items-center justify-center text-muted-foreground/30"
                      >
                        <ExternalLink size={16} strokeWidth={1.8} />
                      </span>
                    )}
                  </div>

                  <p className="mb-6 max-w-3xl leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <ul className="mb-6 grid gap-3 text-sm sm:grid-cols-2">
                    {project.impact.map((item) => (
                      <li
                        key={item}
                        className="border-l-2 border-accent pl-3 leading-relaxed"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
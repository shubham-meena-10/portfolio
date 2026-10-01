
// import React from 'react';
// import { Code, Users, Lightbulb, Target } from 'lucide-react';

// const About = () => {
//   const highlights = [
//     {
//       icon: Code,
//       title: "Technical Excellence",
//       description: "Experienced in end-to-end project development with modern web technologies"
//     },
//     {
//       icon: Users,
//       title: "Team Collaboration",
//       description: "Contributing across various stages of software development lifecycle"
//     },
//     {
//       icon: Lightbulb,
//       title: "Innovation",
//       description: "Passionate about learning new technologies and solving complex problems"
//     },
//     {
//       icon: Target,
//       title: "Results Driven",
//       description: "Delivering innovative, scalable solutions that make a real impact"
//     }
//   ];

//   return (
//     <section id="about" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
//           <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             A dedicated Software Engineer with a passion for creating exceptional web experiences. 
//             I specialize in React.js development and have extensive experience in building scalable, 
//             user-friendly applications that solve real-world problems.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {highlights.map((item, index) => (
//             <div 
//               key={index}
//               className="text-center group hover:transform hover:scale-105 transition-all duration-300"
//             >
//               <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
//                 <item.icon className="text-blue-600" size={32} />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
//               <p className="text-gray-600">{item.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;







import { Boxes, Cloud, Database, Radio } from 'lucide-react';

const strengths = [
  { icon: Database, title: 'Backend foundations', description: 'Data models, REST APIs and business logic built with Node.js, Express.js and MongoDB.' },
  { icon: Radio, title: 'Real-time products', description: 'Socket.IO communication, live updates, notifications and scheduled workflows.' },
  { icon: Cloud, title: 'Production delivery', description: 'AWS S3 media pipelines, EC2, Nginx, Hostinger and release ownership.' },
  { icon: Boxes, title: 'End-to-end systems', description: 'Architecture through frontend, admin platforms, payments, tracking and deployment.' },
];

const About = () => (
  <section id="about" className="bg-background py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="section-label">Profile / 01</p>
          <h2 className="section-title">Engineering beyond the interface.</h2>
        </div>
        <div>
          <p className="mb-10 text-xl leading-relaxed text-muted-foreground">
            Full Stack Developer with 3+ years of professional experience building production web applications. My strongest work sits where backend architecture, product logic and user experience meet—turning complex workflows into dependable systems that can be operated, scaled and shipped.
          </p>
          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {strengths.map(({ icon: Icon, title, description }) => (
              <div key={title} className="border-t border-border pt-5">
                <Icon className="mb-4 text-accent" size={23} />
                <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                <p className="leading-relaxed text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
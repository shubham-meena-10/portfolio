// import React from 'react';
// import { Github, Linkedin, Mail, Phone } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const Hero = () => {
//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <div className="animate-fade-in">
//           <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
//             Shubham <span className="text-blue-600">Meena</span>
//           </h1>
//           <h2 className="text-2xl md:text-3xl text-gray-700 mb-8 font-light">
//             Software Engineer
//           </h2>
//           <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
//             Specializing in <span className="font-semibold text-blue-600">React.js</span> with expertise in
//             <span className="font-semibold text-blue-600"> Material-UI</span> and
//             <span className="font-semibold text-blue-600"> Redux Toolkit</span> for building efficient,
//             user-friendly web applications.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
//             <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
//               <a href="#contact" className="flex items-center gap-2">
//                 Get In Touch
//                 <Mail size={18} />
//               </a>
//             </Button>
//             <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
//               <a href="#experience" className="flex items-center gap-2">
//                 View My Work
//               </a>
//             </Button>
//           </div>

//           <div className="flex justify-center space-x-6">
//             <a
//               href="https://www.linkedin.com/in/shubhammeena10/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110"
//             >
//               <Linkedin size={28} />
//             </a>
//             <a
//               href="https://github.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110"
//             >
//               <Github size={28} />
//             </a>
//             <a
//               href="tel:+919893229774"
//               className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110"
//             >
//               <Phone size={28} />
//             </a>
//             <a
//               href="mailto:shubhammeena1913@gmail.com"
//               className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110"
//             >
//               <Mail size={28} />
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Server,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import backendSystem from "@/assets/backend-system.jpg";
import { trackContactClick } from "@/lib/tracker";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-foreground pt-16 text-background"
    >
      <img
        src={backendSystem}
        alt="Backend system architecture displayed on a developer workstation"
        className="absolute inset-0 h-full w-full object-cover object-center"
        width={1600}
        height={1000}
      />
      <div className="absolute inset-0 bg-foreground/75" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.25fr_0.75fr] lg:px-8">
        <div className="max-w-3xl animate-fade-in">
          <div className="mb-8 inline-flex items-center gap-2 border border-background/20 bg-foreground/60 px-3 py-2 text-sm text-background/80 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Full Stack Developer · 3+ years in production
          </div>
          <h1 className="mb-6 text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            Shubham Meena
          </h1>
          <p className="mb-6 max-w-2xl text-2xl font-medium leading-tight text-background/90 sm:text-3xl">
            Backend-minded engineering. Complete product ownership.
          </p>
          <p className="mb-9 max-w-2xl text-lg leading-relaxed text-background/70">
            I build and ship production products with Node.js, Express.js,
            MongoDB, Next.js and React—from data models and REST APIs to
            real-time systems, cloud media and deployment.
          </p>

          <div className="mb-10 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <a href="#experience">
                Explore my work <ArrowDown />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-background/30 bg-foreground/30 text-background hover:bg-background hover:text-foreground"
              onClick={() => trackContactClick("Email")}
            >
              <a href="mailto:shubhammeena1913@gmail.com">
                <Mail /> Get in touch
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-background/65">
            <span className="flex items-center gap-2">
              <MapPin size={16} /> Khategaon, Madhya Pradesh
            </span>
            <a
              className="transition-colors hover:text-accent"
              href="https://github.com/shubham-meena-10"
              target="_blank"
              rel="noreferrer"
              onClick={() => trackContactClick("GitHub")}
            >
              <Github size={20} aria-label="GitHub" />
            </a>
            <a
              className="transition-colors hover:text-accent"
              href="https://www.linkedin.com/in/shubhammeena10/"
              target="_blank"
              rel="noreferrer"
              onClick={() => trackContactClick("LinkedIn")}
            >
              <Linkedin size={20} aria-label="LinkedIn" />
            </a>
          </div>
        </div>

        <div className="self-end border-l border-background/20 pl-6 lg:mb-4">
          <div className="mb-5 flex items-center gap-3 text-accent">
            <Server size={20} />
            <span className="font-mono text-xs uppercase tracking-widest">
              Primary stack
            </span>
          </div>
          <div className="grid grid-cols-2 gap-px overflow-hidden border border-background/15 bg-background/15">
            {[
              "Node.js",
              "Express.js",
              "MongoDB",
              "REST APIs",
              "Next.js",
              "AWS",
            ].map((item) => (
              <div
                key={item}
                className="bg-foreground/80 px-4 py-4 font-mono text-sm text-background/80 backdrop-blur-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

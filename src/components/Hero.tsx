
import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Shubham <span className="text-blue-600">Meena</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-8 font-light">
            Software Engineer
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Specializing in <span className="font-semibold text-blue-600">React.js</span> with expertise in 
            <span className="font-semibold text-blue-600"> Material-UI</span> and 
            <span className="font-semibold text-blue-600"> Redux Toolkit</span> for building efficient, 
            user-friendly web applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              <a href="#contact" className="flex items-center gap-2">
                Get In Touch
                <Mail size={18} />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
              <a href="#experience" className="flex items-center gap-2">
                View My Work
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/shubhammeena10/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110"
            >
              <Github size={28} />
            </a>
            <a
              href="tel:+919893229774"
              className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110"
            >
              <Phone size={28} />
            </a>
            <a
              href="mailto:shubhammeena1913@gmail.com"
              className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

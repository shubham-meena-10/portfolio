
import React from 'react';
import { Mail, Phone, Linkedin, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9893229774",
      href: "tel:+919893229774"
    },
    {
      icon: Mail,
      label: "Email",
      value: "shubhammeena1913@gmail.com",
      href: "mailto:shubhammeena1913@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/shubhammeena10",
      href: "https://www.linkedin.com/in/shubhammeena10/"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss your next project or opportunity. I'm always open to new challenges and collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200 group"
                >
                  <div className="bg-blue-600 p-3 rounded-full group-hover:bg-blue-500 transition-colors">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gray-800 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Let's Connect!</h4>
              <p className="text-gray-300 mb-4">
                I'm currently open to new opportunities and interesting projects. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <a href="mailto:shubhammeena1913@gmail.com" className="flex items-center gap-2">
                  Send Email
                  <Send size={16} />
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="your.email@example.com"
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <Input
                  type="text"
                  id="subject"
                  placeholder="What's this about?"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={6}
                  placeholder="Tell me about your project or just say hello!"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
                />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Send Message
                <Send size={16} className="ml-2" />
              </Button>
            </form>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-400">
            © 2024 Shubham Meena. Built with React.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

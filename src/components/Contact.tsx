// // import React from 'react';
// // import { Mail, Phone, Linkedin, MapPin, Send } from 'lucide-react';
// // import { Button } from '@/components/ui/button';
// // import { Input } from '@/components/ui/input';
// // import { Textarea } from '@/components/ui/textarea';

// // const Contact = () => {
// //   const contactInfo = [
// //     {
// //       icon: Phone,
// //       label: "Phone",
// //       value: "+91 9893229774",
// //       href: "tel:+919893229774"
// //     },
// //     {
// //       icon: Mail,
// //       label: "Email",
// //       value: "shubhammeena1913@gmail.com",
// //       href: "mailto:shubhammeena1913@gmail.com"
// //     },
// //     {
// //       icon: Linkedin,
// //       label: "LinkedIn",
// //       value: "linkedin.com/in/shubhammeena10",
// //       href: "https://www.linkedin.com/in/shubhammeena10/"
// //     }
// //   ];

// //   return (
// //     <section id="contact" className="py-20 bg-gray-900 text-white">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="text-center mb-16">
// //           <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
// //           <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
// //           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
// //             Let's discuss your next project or opportunity. I'm always open to new challenges and collaborations.
// //           </p>
// //         </div>

// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
// //           {/* Contact Information */}
// //           <div>
// //             <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
// //             <div className="space-y-6">
// //               {contactInfo.map((info, index) => (
// //                 <a
// //                   key={index}
// //                   href={info.href}
// //                   target={info.href.startsWith('http') ? '_blank' : undefined}
// //                   rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
// //                   className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200 group"
// //                 >
// //                   <div className="bg-blue-600 p-3 rounded-full group-hover:bg-blue-500 transition-colors">
// //                     <info.icon size={24} />
// //                   </div>
// //                   <div>
// //                     <p className="text-gray-400 text-sm">{info.label}</p>
// //                     <p className="text-white font-medium">{info.value}</p>
// //                   </div>
// //                 </a>
// //               ))}
// //             </div>

// //             <div className="mt-8 p-6 bg-gray-800 rounded-lg">
// //               <h4 className="text-xl font-semibold mb-4">Let's Connect!</h4>
// //               <p className="text-gray-300 mb-4">
// //                 I'm currently open to new opportunities and interesting projects.
// //                 Whether you have a question or just want to say hi, I'll try my best to get back to you!
// //               </p>
// //               <Button className="bg-blue-600 hover:bg-blue-700">
// //                 <a href="mailto:shubhammeena1913@gmail.com" className="flex items-center gap-2">
// //                   Send Email
// //                   <Send size={16} />
// //                 </a>
// //               </Button>
// //             </div>
// //           </div>

// //           {/* Contact Form */}
// //           <div>
// //             <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
// //             <form className="space-y-6">
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                 <div>
// //                   <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
// //                     Name
// //                   </label>
// //                   <Input
// //                     type="text"
// //                     id="name"
// //                     placeholder="Your Name"
// //                     className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
// //                   />
// //                 </div>
// //                 <div>
// //                   <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
// //                     Email
// //                   </label>
// //                   <Input
// //                     type="email"
// //                     id="email"
// //                     placeholder="your.email@example.com"
// //                     className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
// //                   />
// //                 </div>
// //               </div>
// //               <div>
// //                 <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
// //                   Subject
// //                 </label>
// //                 <Input
// //                   type="text"
// //                   id="subject"
// //                   placeholder="What's this about?"
// //                   className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
// //                 />
// //               </div>
// //               <div>
// //                 <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
// //                   Message
// //                 </label>
// //                 <Textarea
// //                   id="message"
// //                   rows={6}
// //                   placeholder="Tell me about your project or just say hello!"
// //                   className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
// //                 />
// //               </div>
// //               <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
// //                 Send Message
// //                 <Send size={16} className="ml-2" />
// //               </Button>
// //             </form>
// //           </div>
// //         </div>

// //         <div className="text-center mt-16 pt-8 border-t border-gray-800">
// //           <p className="text-gray-400">
// //             © 2024 Shubham Meena. Built with React.js and Tailwind CSS.
// //           </p>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Contact;

// import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const links = [
//   { icon: Mail, label: 'Email', value: 'shubhammeena1913@gmail.com', href: 'mailto:shubhammeena1913@gmail.com' },
//   { icon: Phone, label: 'Phone', value: '+91 9893229774', href: 'tel:+919893229774' },
//   { icon: Linkedin, label: 'LinkedIn', value: 'shubhammeena10', href: 'https://www.linkedin.com/in/shubhammeena10/' },
//   { icon: Github, label: 'GitHub', value: 'shubham-meena-10', href: 'https://github.com/shubham-meena-10' },
// ];

// const Contact = () => (
//   <section id="contact" className="bg-foreground py-24 text-background">
//     <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//       <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
//         <div className="min-w-0">
//           <p className="mb-5 font-mono text-xs uppercase tracking-widest text-accent">Contact / 05</p>
//           <h2 className="mb-7 text-4xl font-bold leading-tight sm:text-5xl">Have a system worth building?</h2>
//           <p className="mb-8 max-w-xl text-lg leading-relaxed text-background/65">I’m open to full-stack and backend-focused opportunities where strong ownership, dependable APIs and thoughtful product engineering matter.</p>
//           <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
//             <a href="mailto:shubhammeena1913@gmail.com">Start a conversation <ArrowUpRight /></a>
//           </Button>
//           <p className="mt-8 flex items-center gap-2 text-sm text-background/50"><MapPin size={15} /> Khategaon, Dewas, Madhya Pradesh</p>
//         </div>

//         <div className="min-w-0 border-t border-background/15">
//           {links.map(({ icon: Icon, label, value, href }) => (
//             <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className="group flex min-w-0 items-center gap-3 border-b border-background/15 py-5 transition-colors hover:text-accent sm:gap-4">
//               <Icon size={19} />
//               <span className="w-16 shrink-0 text-sm text-background/45 sm:w-20">{label}</span>
//               <span className="min-w-0 flex-1 break-all font-medium sm:break-words">{value}</span>
//               <ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" size={18} />
//             </a>
//           ))}
//         </div>
//       </div>
//       <div className="mt-20 flex flex-col justify-between gap-3 border-t border-background/15 pt-6 text-xs text-background/40 sm:flex-row">
//         <p>© 2026 Shubham Meena</p>
//         <p>Full Stack Developer · Node.js · React.js · Next.js</p>
//       </div>
//     </div>
//   </section>
// );

// export default Contact;

// import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';

// const links = [
//   { icon: Mail, label: 'Email', value: 'shubhammeena1913@gmail.com', href: 'mailto:shubhammeena1913@gmail.com' },
//   { icon: Phone, label: 'Phone', value: '+91 9893229774', href: 'tel:+919893229774' },
//   { icon: Linkedin, label: 'LinkedIn', value: 'shubhammeena10', href: 'https://www.linkedin.com/in/shubhammeena10/' },
//   { icon: Github, label: 'GitHub', value: 'shubham-meena-10', href: 'https://github.com/shubham-meena-10' },
// ];

// const FORM_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby-OVi-ZMj15Gq3P7NPS9yIs98NCZ2_9zvQjJcojLbj2NEV3lKScBFhH6tHAO2ilXgh/exec";
// const FORM_DATA_SHEETID = "1EYsttdTUmPe6Bvzxmt6xk0AtJ9brQqbHivtwaI3HT2M";

// const Contact = () => (
//   <section id="contact" className="bg-foreground py-24 text-background">
//     <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//       <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
//         {/* Left column – intro + links */}
//         <div className="min-w-0">
//           <p className="mb-5 font-mono text-xs uppercase tracking-widest text-accent">Contact / 05</p>
//           <h2 className="mb-7 text-4xl font-bold leading-tight sm:text-5xl">Have a system worth building?</h2>
//           <p className="mb-8 max-w-xl text-lg leading-relaxed text-background/65">
//             I’m open to full-stack and backend-focused opportunities where strong ownership, dependable APIs and thoughtful product engineering matter.
//           </p>
//           <p className="mb-8 flex items-center gap-2 text-sm text-background/50">
//             <MapPin size={15} /> Khategaon, Dewas, Madhya Pradesh
//           </p>
//           <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
//             <a href="mailto:shubhammeena1913@gmail.com">
//               Start a conversation <ArrowUpRight />
//             </a>
//           </Button>

//           {/* Contact links */}
//           <div className="mt-12 border-t border-background/15">
//             {links.map(({ icon: Icon, label, value, href }) => (
//               <a
//                 key={label}
//                 href={href}
//                 target={href.startsWith('http') ? '_blank' : undefined}
//                 rel={href.startsWith('http') ? 'noreferrer' : undefined}
//                 className="group flex min-w-0 items-center gap-3 border-b border-background/15 py-5 transition-colors hover:text-accent sm:gap-4"
//               >
//                 <Icon size={19} />
//                 <span className="w-16 shrink-0 text-sm text-background/45 sm:w-20">{label}</span>
//                 <span className="min-w-0 flex-1 break-all font-medium sm:break-words">{value}</span>
//                 <ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" size={18} />
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Right column – Send a Message form */}
//         <div className="min-w-0">
//           <p className="mb-5 font-mono text-xs uppercase tracking-widest text-accent">Send a message</p>
//           <h3 className="mb-8 text-2xl font-bold sm:text-3xl">Let’s talk</h3>

//           <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
//             <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
//               <div className="space-y-2">
//                 <label htmlFor="name" className="block text-sm font-medium text-background/60">
//                   Name
//                 </label>
//                 <Input
//                   id="name"
//                   type="text"
//                   placeholder="Your name"
//                   className="border-background/20 bg-background/5 text-background placeholder:text-background/40 focus-visible:ring-accent"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label htmlFor="email" className="block text-sm font-medium text-background/60">
//                   Email
//                 </label>
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="you@example.com"
//                   className="border-background/20 bg-background/5 text-background placeholder:text-background/40 focus-visible:ring-accent"
//                 />
//               </div>
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="subject" className="block text-sm font-medium text-background/60">
//                 Subject
//               </label>
//               <Input
//                 id="subject"
//                 type="text"
//                 placeholder="What’s this about?"
//                 className="border-background/20 bg-background/5 text-background placeholder:text-background/40 focus-visible:ring-accent"
//               />
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="message" className="block text-sm font-medium text-background/60">
//                 Message
//               </label>
//               <Textarea
//                 id="message"
//                 rows={6}
//                 placeholder="Tell me about your project or just say hello..."
//                 className="resize-none border-background/20 bg-background/5 text-background placeholder:text-background/40 focus-visible:ring-accent"
//               />
//             </div>

//             <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto">
//               Send Message
//               <Send size={16} className="ml-2" />
//             </Button>
//           </form>
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="mt-20 flex flex-col justify-between gap-3 border-t border-background/15 pt-6 text-xs text-background/40 sm:flex-row">
//         <p>© 2026 Shubham Meena</p>
//         <p>Full Stack Developer · Node.js · React.js · Next.js</p>
//       </div>
//     </div>
//   </section>
// );

// export default Contact;

"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  getOrCreateVisitorId,
  markFormSubmitted,
  trackContactClick,
} from "@/lib/tracker";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyNH0SiwaGY7PsXpklhj4Eu1IGMh5oVbQrJAq76MNiGprE97RZOkb6WII0pHcT9VGL6/exec"; 

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "shubhammeena1913@gmail.com",
    href: "mailto:shubhammeena1913@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9893229774",
    href: "tel:+919893229774",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "shubhammeena10",
    href: "https://www.linkedin.com/in/shubhammeena10/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "shubham-meena-10",
    href: "https://github.com/shubham-meena-10",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill name, email and message.");
      return;
    }

    setIsSubmitting(true);
    const visitorId = getOrCreateVisitorId();

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({
          type: "contact",
          visitorId,
          ...formData,
        }),
        mode: "no-cors", // Apps Script ke liye safe
      });

      markFormSubmitted();
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-foreground py-24 text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
          {/* Left column */}
          <div className="min-w-0">
            <p className="mb-5 font-mono text-xs uppercase tracking-widest text-accent">
              Contact / 05
            </p>
            <h2 className="mb-7 text-4xl font-bold leading-tight sm:text-5xl">
              Have a system worth building?
            </h2>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-background/65">
              I’m open to full-stack and backend-focused opportunities where
              strong ownership, dependable APIs and thoughtful product
              engineering matter.
            </p>
            <p className="mb-8 flex items-center gap-2 text-sm text-background/50">
              <MapPin size={15} /> Khategaon, Dewas, Madhya Pradesh
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <a href="mailto:shubhammeena1913@gmail.com">
                Start a conversation <ArrowUpRight />
              </a>
            </Button>

            <div className="mt-12 border-t border-background/15">
              {links.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  onClick={() => trackContactClick(label)}
                  className="group flex min-w-0 items-center gap-3 border-b border-background/15 py-5 transition-colors hover:text-accent sm:gap-4"
                >
                  <Icon size={19} />
                  <span className="w-16 shrink-0 text-sm text-background/45 sm:w-20">
                    {label}
                  </span>
                  <span className="min-w-0 flex-1 break-all font-medium sm:break-words">
                    {value}
                  </span>
                  <ArrowUpRight
                    className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    size={18}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Right column – Form */}
          <div className="min-w-0">
            <p className="mb-5 font-mono text-xs uppercase tracking-widest text-accent">
              Send a message
            </p>
            <h3 className="mb-8 text-2xl font-bold sm:text-3xl">Let’s talk</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-background/60"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-background/20 bg-background/5 text-background placeholder:text-background/40 focus-visible:ring-accent"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-background/60"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-background/20 bg-background/5 text-background placeholder:text-background/40 focus-visible:ring-accent"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-background/60"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What’s this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  className="border-background/20 bg-background/5 text-background placeholder:text-background/40 focus-visible:ring-accent"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-background/60"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell me about your project or just say hello..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="resize-none border-background/20 bg-background/5 text-background placeholder:text-background/40 focus-visible:ring-accent"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Send size={16} className="ml-2" />}
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-20 flex flex-col justify-between gap-3 border-t border-background/15 pt-6 text-xs text-background/40 sm:flex-row">
          <p>© 2026 Shubham Meena</p>
          <p>Full Stack Developer · Node.js · React.js · Next.js</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

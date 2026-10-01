
// import React, { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';

// const Navigation = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { href: '#home', label: 'Home' },
//     { href: '#about', label: 'About' },
//     { href: '#skills', label: 'Skills' },
//     { href: '#experience', label: 'Experience' },
//     { href: '#education', label: 'Education' },
//     { href: '#contact', label: 'Contact' },
//   ];

//   return (
//     <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//       scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
//     }`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <div className="font-bold text-2xl text-primary">
//             Shubham Meena
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex space-x-8">
//             {navItems.map((item) => (
//               <a
//                 key={item.href}
//                 href={item.href}
//                 className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
//               >
//                 {item.label}
//               </a>
//             ))}
//           </div>

//           {/* Mobile Navigation Button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-foreground hover:text-primary transition-colors"
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation Menu */}
//         {isOpen && (
//           <div className="md:hidden bg-white/95 backdrop-blur-sm border-t">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {navItems.map((item) => (
//                 <a
//                   key={item.href}
//                   href={item.href}
//                   className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {item.label}
//                 </a>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navigation;






















import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Stack' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav aria-label="Main navigation" className={`fixed top-0 z-50 w-full border-b transition-all ${scrolled || isOpen ? 'border-border bg-background/95 text-foreground backdrop-blur-md' : 'border-background/15 bg-foreground/25 text-background backdrop-blur-sm'}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="font-mono text-sm font-bold uppercase tracking-widest">SM<span className="text-accent">/</span>DEV</a>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => <a key={item.href} href={item.href} className="text-sm font-medium transition-colors hover:text-accent">{item.label}</a>)}
        </div>
        <Button type="button" variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen((open) => !open)} aria-label={isOpen ? 'Close menu' : 'Open menu'}>
          {isOpen ? <X /> : <Menu />}
        </Button>
      </div>
      {isOpen && (
        <div className="border-t border-border bg-background px-4 py-4 text-foreground md:hidden">
          {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="block border-b border-border py-3 font-medium last:border-0">{item.label}</a>)}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
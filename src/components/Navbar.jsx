import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, Download, FileText, Check } from 'lucide-react';

export default function Navbar({ onResumeClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'education', 'certificates', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-dark-900/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/30 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden p-0.5 bg-gradient-to-tr from-brand-purple via-brand-blue to-brand-cyan shadow-md group-hover:scale-105 transition-transform">
              <img 
                src={personalInfo.avatar} 
                alt="KV Monogram" 
                className="w-full h-full rounded-[10px] bg-dark-900 object-cover" 
              />
            </div>
            <div>
              <span className="font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-brand-cyan transition-colors">
                Krishna Verma
              </span>
              <span className="hidden sm:block text-[11px] font-mono text-slate-400">
                B.Tech AIML • IPS Academy
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  activeSection === item.href.substring(1)
                    ? 'text-white bg-white/10 shadow-inner'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onResumeClick}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/10 transition-all hover:border-brand-purple/40"
              title="Resume is prepared for future upload"
            >
              <FileText className="w-3.5 h-3.5 text-brand-purple" />
              <span>Resume</span>
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r from-brand-purple to-brand-blue hover:from-purple-600 hover:to-blue-600 text-white shadow-md shadow-brand-purple/20 transition-all hover:shadow-brand-purple/40 active:scale-95"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-dark-950/95 backdrop-blur-xl border-b border-white/10 px-4 pt-4 pb-6 space-y-3 animate-fadeIn">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === item.href.substring(1)
                    ? 'text-white bg-brand-purple/20 border border-brand-purple/40'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setIsOpen(false);
                onResumeClick();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-white/5 text-slate-200 border border-white/10"
            >
              <FileText className="w-4 h-4 text-brand-purple" />
              <span>Resume (Upload Ready)</span>
            </button>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-brand-purple to-brand-blue text-white shadow-md shadow-brand-purple/20"
            >
              <span>Contact Krishna</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

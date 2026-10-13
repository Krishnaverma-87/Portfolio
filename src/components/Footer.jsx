import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-950 border-t border-white/10 text-slate-400 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-xl overflow-hidden p-0.5 bg-gradient-to-tr from-brand-purple to-brand-cyan">
              <img
                src={personalInfo.avatar}
                alt="Krishna Verma Initials"
                className="w-full h-full rounded-[10px] bg-dark-900 object-cover"
              />
            </div>
            <div>
              <div className="text-base font-bold text-white">Krishna Verma</div>
              <div className="text-xs font-mono text-slate-400">
                B.Tech AIML • IPS Academy, Indore (2024–2028)
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors border border-white/10"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors border border-white/10"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-blue-400" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors border border-white/10"
              title="Email"
            >
              <Mail className="w-4 h-4 text-brand-cyan" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-brand-purple/20 hover:bg-brand-purple text-brand-purple hover:text-white transition-colors border border-brand-purple/30 ml-2"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div>
            © {new Date().getFullYear()} Krishna Verma. All rights reserved.
          </div>
          <div className="text-slate-400">
            Designed for Performance, Accessibility & Professional Representation
          </div>
        </div>

      </div>
    </footer>
  );
}

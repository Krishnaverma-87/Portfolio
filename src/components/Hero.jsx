import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code2, Bot, Terminal, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-radial-gradient">
      
      {/* Background Decorative Grid and Glow Circles */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[600px] h-96 sm:h-[600px] bg-brand-purple/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Column: Text & Hero Intro */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-slate-300 shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Third Year B.Tech • AIML Specialization</span>
              <span className="text-slate-500">•</span>
              <span className="text-brand-cyan font-mono text-xs">IPS Academy, Indore</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-brand-cyan">Krishna Verma</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-indigo-300 to-brand-cyan max-w-2xl">
                "{personalInfo.tagline}"
              </p>
            </div>

            {/* Concise Bio Paragraph */}
            <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Third-year student specializing in <strong className="text-white font-semibold">Artificial Intelligence & Machine Learning</strong> at IPS Academy, Indore. Focused on building real-world applications with Python, C++, SQL, FastAPI, Streamlit, and modern web architectures.
            </p>

            {/* Quick Skills Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                <Bot className="w-3.5 h-3.5 text-brand-purple" /> GenAI & Gemini
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono bg-blue-500/10 text-blue-300 border border-blue-500/20">
                <Code2 className="w-3.5 h-3.5 text-brand-blue" /> Python & C++
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                <Terminal className="w-3.5 h-3.5 text-brand-cyan" /> FastAPI & SQL
              </span>
            </div>

            {/* Call to Actions & Social Links */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-brand-purple via-indigo-600 to-brand-blue hover:from-purple-600 hover:to-blue-600 text-white shadow-lg shadow-brand-purple/25 hover:shadow-brand-purple/40 hover:-translate-y-0.5 transition-all active:scale-95"
              >
                <span>Explore My Projects</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-dark-800 hover:bg-dark-700 text-slate-200 hover:text-white border border-white/10 hover:border-brand-purple/40 hover:-translate-y-0.5 transition-all active:scale-95 shadow-md"
              >
                <Mail className="w-4 h-4 text-brand-cyan" />
                <span>Contact Me</span>
              </a>

              {/* Social Icon Links */}
              <div className="flex items-center gap-2 pt-2 sm:pt-0 sm:pl-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 hover:border-brand-purple/50 transition-all hover:scale-105"
                  title="GitHub: Krishnaverma-87"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 hover:border-brand-blue/50 transition-all hover:scale-105"
                  title="LinkedIn: Krishna Verma"
                >
                  <Linkedin className="w-5 h-5 text-blue-400" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: KV Avatar with Glowing Rings */}
          <div className="flex-shrink-0 relative">
            
            {/* Outer Aura Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple via-brand-blue to-brand-cyan rounded-full filter blur-2xl opacity-40 animate-pulse-slow" />
            
            {/* Avatar Container */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-brand-purple via-indigo-500 to-brand-cyan shadow-2xl animate-float">
              
              {/* Inner Circle Frame */}
              <div className="w-full h-full rounded-full bg-dark-950 p-2 overflow-hidden flex items-center justify-center">
                <img
                  src={personalInfo.avatar}
                  alt="Krishna Verma (KV) Avatar"
                  className="w-full h-full rounded-full object-cover select-none"
                />
              </div>

              {/* Floating Badge 1: AIML Student */}
              <div className="absolute -bottom-2 -left-4 sm:bottom-4 sm:-left-6 bg-dark-900/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-brand-purple/30 shadow-xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-brand-purple/20 flex items-center justify-center text-brand-purple font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Specialization</div>
                  <div className="text-xs sm:text-sm font-bold text-white">AI & Machine Learning</div>
                </div>
              </div>

              {/* Floating Badge 2: Batch 2028 */}
              <div className="absolute -top-3 -right-2 sm:top-4 sm:-right-4 bg-dark-900/90 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-brand-cyan/30 shadow-xl flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-ping" />
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Class of</div>
                  <div className="text-xs font-bold text-white">2028 • IPS Academy</div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="pt-16 pb-4 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-xs font-mono text-slate-500 hover:text-slate-300 transition-colors"
          >
            <span>DISCOVER MORE</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-brand-purple" />
          </a>
        </div>

      </div>
    </section>
  );
}

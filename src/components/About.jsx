import React from 'react';
import { personalInfo, aboutMe } from '../data/portfolioData';
import { Brain, Code2, Cpu, Sparkles, GraduationCap, MapPin, Target, CheckCircle2 } from 'lucide-react';

export default function About() {
  const iconMap = {
    Brain: Brain,
    Code2: Code2,
    Cpu: Cpu,
    Sparkles: Sparkles
  };

  return (
    <section id="about" className="py-24 relative bg-dark-950/70 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-xs font-mono text-brand-purple uppercase tracking-wider">
            <span>// About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Bridging Creative Thinking with <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-indigo-400 to-brand-cyan">Intelligent Code</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Third-year undergraduate developer committed to mastering software engineering principles and cutting-edge artificial intelligence.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Formatted Official Introduction Card */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 space-y-6 border border-white/10 shadow-xl relative overflow-hidden">
            
            {/* Background Accent glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-purple to-brand-blue flex items-center justify-center text-white font-bold">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Student & Aspiring AI Developer</h3>
                <p className="text-xs font-mono text-slate-400">IPS Academy, Indore • Class of 2028</p>
              </div>
            </div>

            {/* Exactly confirmed bio with highlighted key terms */}
            <div className="text-slate-200 text-base sm:text-lg leading-relaxed space-y-4">
              <p>
                I am a third-year B.Tech student specializing in{' '}
                <span className="font-semibold text-white bg-brand-purple/20 px-1.5 py-0.5 rounded border border-brand-purple/30">
                  Artificial Intelligence and Machine Learning
                </span>{' '}
                at IPS Academy, Indore. I enjoy exploring new technologies,{' '}
                <span className="font-semibold text-brand-cyan underline decoration-brand-cyan/40 underline-offset-4">
                  solving problems
                </span>
                , and developing{' '}
                <span className="font-semibold text-brand-blue underline decoration-brand-blue/40 underline-offset-4">
                  practical applications
                </span>{' '}
                that combine creativity with technology.
              </p>
              
              <p>
                I have experience with <strong className="text-white">Python, C++, SQL, web development fundamentals</strong>, and{' '}
                <span className="font-semibold text-white bg-indigo-500/20 px-1.5 py-0.5 rounded border border-indigo-500/30">
                  AI-powered applications
                </span>
                . I am continuously improving my skills through hands-on projects and learning new technologies.
              </p>

              <p className="text-slate-300">
                My goal is to become a skilled <strong className="text-white">software and AI developer</strong> and contribute to innovative projects that solve real-world problems.
              </p>
            </div>

            {/* Core Values / Learning Mindset Checklist */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Hands-on Project Builder</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Continuous Upskilling</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Clean & Maintainable Code</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Real-world Problem Solving</span>
              </div>
            </div>

          </div>

          {/* Right Column: Highlights Cards & Quick Stats */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {aboutMe.quickStats.map((stat, idx) => (
                <div 
                  key={idx}
                  className="glass-card rounded-xl p-4 sm:p-5 border border-white/10 text-center glass-card-hover"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-brand-cyan">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Learning Highlights Cards */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 px-1">
                Learning Highlights & Focus Areas
              </h4>

              {aboutMe.highlights.map((highlight, idx) => {
                const IconComponent = iconMap[highlight.icon] || Sparkles;
                return (
                  <div
                    key={idx}
                    className="glass-card rounded-xl p-4 border border-white/5 hover:border-brand-purple/30 transition-all flex items-start gap-3.5 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/5 group-hover:bg-brand-purple/20 flex items-center justify-center text-slate-300 group-hover:text-brand-purple transition-colors flex-shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-white group-hover:text-brand-cyan transition-colors">
                        {highlight.title}
                      </h5>
                      <p className="text-xs text-slate-400 leading-relaxed mt-0.5">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

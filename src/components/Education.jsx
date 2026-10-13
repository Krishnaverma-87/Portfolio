import React from 'react';
import { educationData } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar, BookOpen, CheckCircle2, ChevronRight, School } from 'lucide-react';

export default function Education() {
  const { currentDegree, schoolEducation } = educationData;

  return (
    <section id="education" className="py-24 relative bg-dark-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-xs font-mono text-brand-blue uppercase tracking-wider">
            <span>// Academic Pathway</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-indigo-300 to-brand-purple">Qualifications</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Formal technical education in Computer Science, Artificial Intelligence, and Applied Machine Learning.
          </p>
        </div>

        {/* Education Timeline / Cards Container */}
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Main B.Tech Card */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-brand-purple/30 bg-gradient-to-br from-dark-850 via-dark-900 to-dark-950 shadow-2xl relative overflow-hidden group">
            
            {/* Top Right Decorative Glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-brand-purple/15 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-purple to-brand-blue flex items-center justify-center text-white shadow-lg shadow-brand-purple/20">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Enrolled • 2024 – 2028</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {currentDegree.degree}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-brand-cyan">
                    Specialization: {currentDegree.specialization}
                  </p>
                </div>
              </div>

              <div className="text-left md:text-right space-y-1">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">Target Graduation</div>
                <div className="text-2xl font-extrabold text-white">{currentDegree.expectedGraduation}</div>
                <div className="text-xs font-mono text-brand-purple">{currentDegree.currentStatus}</div>
              </div>
            </div>

            {/* Institution Info */}
            <div className="py-6 border-b border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <School className="w-5 h-5 text-brand-purple flex-shrink-0" />
                <div>
                  <div className="text-slate-400 text-xs">Institution</div>
                  <strong className="text-white font-semibold">{currentDegree.institution}</strong>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-brand-cyan flex-shrink-0" />
                <div>
                  <div className="text-slate-400 text-xs">Campus Location</div>
                  <strong className="text-white font-semibold">{currentDegree.location}</strong>
                </div>
              </div>
            </div>

            {/* Coursework Modules */}
            <div className="pt-6 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-brand-blue" />
                <span>Core Curriculum & Applied Coursework</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {currentDegree.relevantCoursework.map((course, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-200 flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* School Education Card (Clean, Transparent, Ready for verified updates) */}
          <div className="glass-card rounded-2xl p-6 border border-white/10 text-slate-300 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <School className="w-5 h-5 text-slate-400" />
                <h4 className="text-base font-bold text-white">Higher Secondary & High School (Class 10 & 12)</h4>
              </div>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/5 text-slate-400 border border-white/10">
                Science & Mathematics Stream
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Foundational secondary education completed in science and mathematics. Exact board verification, institution names, and scorecards are documented and will be displayed upon certificate upload.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

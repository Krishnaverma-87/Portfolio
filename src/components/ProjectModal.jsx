import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, AlertTriangle, Layers, Info, Sparkles } from 'lucide-react';
import CalorieCalculatorWidget from './CalorieCalculatorWidget';
import InterviewSimulatorWidget from './InterviewSimulatorWidget';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md overflow-y-auto">
      
      {/* Modal Dialog Card */}
      <div 
        className="relative w-full max-w-4xl bg-dark-900 border border-white/15 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-dark-950/60 sticky top-0 z-20 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-brand-purple/20 text-brand-purple border border-brand-purple/30">
              {project.category.toUpperCase()}
            </span>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">• Project Details</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Hero Banner / Visual Preview */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-dark-950 flex items-center justify-center max-h-80">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-contain max-h-80"
            />
            {project.featured && (
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-brand-purple/90 backdrop-blur-md text-white text-xs font-bold shadow-lg flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Featured Project
              </div>
            )}
          </div>

          {/* Title & Subtitle */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-sm sm:text-base font-semibold text-brand-cyan mt-1">
                {project.subtitle}
              </p>
            )}
          </div>

          {/* Description */}
          <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-3">
            <p>{project.description}</p>
            {project.technicalDetails && (
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-300">
                <strong className="text-white block mb-1">Architecture & Implementation Note:</strong>
                {project.technicalDetails}
              </div>
            )}
          </div>

          {/* Medical Disclaimer for Dementia Platform */}
          {project.medicalDisclaimer && (
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-amber-200/90 leading-relaxed">
                <strong className="font-bold text-amber-300 block mb-0.5">Healthcare Disclaimer & Scope:</strong>
                {project.medicalDisclaimer}
              </div>
            </div>
          )}

          {/* Interactive Widget Section */}
          {project.hasCalorieWidget && (
            <div className="pt-2">
              <CalorieCalculatorWidget />
            </div>
          )}

          {project.hasSimulator && (
            <div className="pt-2">
              <InterviewSimulatorWidget />
            </div>
          )}

          {/* Implemented Features List */}
          {project.features && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Key Features & Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-start gap-2.5 text-xs text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Planned Features (if any) */}
          {project.plannedFeatures && (
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Future Roadmap (Planned Features)
              </h4>
              <div className="space-y-1.5">
                {project.plannedFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-dark-950 border border-white/10 text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links & Repository Status */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <Info className="w-4 h-4 text-brand-purple" />
              <span>
                {project.githubUrl ? 'Source available' : 'Repository link will be updated upon public release'}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-purple to-brand-blue text-white text-xs font-bold transition-all shadow-md"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-semibold transition-colors border border-white/10"
              >
                Close View
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

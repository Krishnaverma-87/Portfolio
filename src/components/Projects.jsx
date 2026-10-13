import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { Sparkles, ArrowUpRight, Github, ExternalLink, Code2, Eye, Flame, Bot, HeartHandshake } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterTabs = [
    { label: 'All Projects', value: 'all', count: projects.length },
    { label: 'AI & Machine Learning', value: 'ai', count: projects.filter(p => p.category === 'ai').length },
    { label: 'Web & Full Stack', value: 'web', count: projects.filter(p => p.category !== 'ai').length },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : activeFilter === 'ai'
      ? projects.filter(p => p.category === 'ai')
      : projects.filter(p => p.category !== 'ai');

  return (
    <section id="projects" className="py-24 relative bg-dark-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-xs font-mono text-brand-purple uppercase tracking-wider">
            <span>// Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Hands-on Projects & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-indigo-400 to-brand-cyan">Prototypes</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Engineered with a focus on real-world utility, clean architectures, and modern AI capabilities.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeFilter === tab.value
                    ? 'bg-gradient-to-r from-brand-purple to-brand-blue text-white shadow-md shadow-brand-purple/20'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {tab.label} <span className="text-[10px] opacity-75 font-mono">({tab.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const isAIProject = project.category === 'ai';
            return (
              <div
                key={project.id}
                className={`glass-card rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 ${
                  project.featured 
                    ? 'border-brand-purple/40 shadow-lg shadow-brand-purple/10 hover:border-brand-purple/70' 
                    : 'border-white/10 hover:border-white/30'
                }`}
              >
                {/* Card Top / Visual */}
                <div>
                  <div className="relative aspect-video w-full overflow-hidden bg-dark-900 border-b border-white/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-60" />

                    {/* Category / Featured Pill */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      {project.featured && (
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-brand-purple text-white shadow-md flex items-center gap-1">
                          <Sparkles className="w-3 h-3" /> Featured AI
                        </span>
                      )}
                      {project.hasCalorieWidget && (
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-emerald-600 text-white shadow-md flex items-center gap-1">
                          <Flame className="w-3 h-3" /> Live Tool
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors">
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <p className="text-xs font-semibold text-brand-purple mt-0.5">
                          {project.subtitle}
                        </p>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technology Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 border border-white/5 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer / Action Buttons */}
                <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-brand-purple text-white text-xs font-bold transition-all shadow-sm"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Project Details</span>
                  </button>

                  {/* Show actual Github if available, else clean indicator */}
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors border border-white/10"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  ) : null}

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-brand-blue/20 hover:bg-brand-blue text-brand-blue hover:text-white transition-colors border border-brand-blue/30"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

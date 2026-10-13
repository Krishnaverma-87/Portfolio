import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { Code, BrainCircuit, Layout, Database, Users, Check, Sparkles, Terminal } from 'lucide-react';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categoryIcons = {
    'Programming Languages': Code,
    'AI, Machine Learning & Backend': BrainCircuit,
    'Web Development': Layout,
    'Databases & Development Tools': Database,
    'Soft Skills': Users
  };

  const filteredCategories = selectedCategory === 'All' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative bg-dark-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-xs font-mono text-brand-cyan uppercase tracking-wider">
            <span>// Technical Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Tools, Technologies & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-indigo-300 to-brand-purple">Capabilities</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Categorized skills grounded in real coursework and practical project development. No inflated percentages.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === 'All'
                  ? 'bg-gradient-to-r from-brand-purple to-brand-blue text-white shadow-md shadow-brand-purple/20'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              All Categories ({skillCategories.length})
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setSelectedCategory(cat.category)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat.category
                    ? 'bg-brand-purple/20 text-brand-purple border border-brand-purple/40 font-semibold'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((catGroup, idx) => {
            const Icon = categoryIcons[catGroup.category] || Terminal;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 border border-white/10 shadow-lg hover:border-brand-purple/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-brand-purple/20 flex items-center justify-center text-brand-cyan group-hover:text-brand-purple transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-brand-cyan transition-colors">
                        {catGroup.category}
                      </h3>
                      <p className="text-[11px] text-slate-400">
                        {catGroup.skills.length} skills listed
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {catGroup.description}
                  </p>

                  {/* Skills Badges List */}
                  <div className="flex flex-wrap gap-2">
                    {catGroup.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-brand-purple/30 text-slate-200 transition-all flex items-center justify-between gap-2.5 group/skill"
                      >
                        <span className="text-xs font-semibold text-white">
                          {skill.name}
                        </span>
                        {skill.level && (
                          <span className="text-[10px] font-mono text-slate-400 group-hover/skill:text-brand-cyan transition-colors">
                            {skill.level}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom subtle indicator */}
                <div className="pt-5 mt-5 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <Check className="w-3.5 h-3.5" /> Verified in Projects
                  </span>
                  <span className="text-slate-400">IPS Academy</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

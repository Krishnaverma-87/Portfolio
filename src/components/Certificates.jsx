import React, { useState } from 'react';
import { certificates, hackathonsAndAchievements } from '../data/portfolioData';
import { Award, ExternalLink, Eye, CheckCircle2, ShieldCheck, Trophy, Sparkles } from 'lucide-react';
import CertificateModal from './CertificateModal';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="py-24 relative bg-dark-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 uppercase tracking-wider">
            <span>// Credentials & Accreditations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-brand-cyan">Achievements</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Verified technical certifications, virtual simulations, internships, and national hackathon preparation.
          </p>
        </div>

        {/* Certificate Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className={`glass-card rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${
                cert.verified 
                  ? 'border-white/10 hover:border-emerald-500/40 shadow-lg hover:shadow-emerald-500/10' 
                  : 'border-white/5 hover:border-white/20'
              }`}
            >
              <div>
                {/* Certificate Thumbnail Preview Frame */}
                <div 
                  onClick={() => setSelectedCert(cert)}
                  className="relative aspect-[4/3] w-full overflow-hidden bg-dark-900 border-b border-white/10 cursor-pointer"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-dark-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-dark-900/90 text-white text-xs font-bold border border-white/20 shadow-xl">
                      <Eye className="w-4 h-4 text-emerald-400" />
                      <span>Enlarge Certificate</span>
                    </span>
                  </div>

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3">
                    {cert.score ? (
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-emerald-600 text-white shadow-md">
                        Score: {cert.score}
                      </span>
                    ) : cert.verified ? (
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-brand-blue text-white shadow-md">
                        Verified Credential
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold bg-white/10 text-slate-300">
                        Pending Upload
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mt-1">
                      Issuer: <span className="text-slate-200 font-semibold">{cert.issuer}</span>
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                    {cert.description}
                  </p>

                  {cert.date && (
                    <div className="text-[11px] font-mono text-slate-400 pt-1">
                      Date: <span className="text-slate-300">{cert.date}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white text-xs font-semibold transition-colors border border-white/5"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Details</span>
                </button>

                {cert.credlyUrl && (
                  <a
                    href={cert.credlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-brand-blue/20 hover:bg-brand-blue text-brand-blue hover:text-white transition-colors"
                    title="Verify on Credly"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Smart India Hackathon (SIH 2026) Card */}
        <div className="mt-12 glass-card rounded-2xl p-6 sm:p-8 border border-brand-purple/30 bg-gradient-to-r from-dark-900 via-dark-850 to-dark-900 shadow-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-purple/20 text-brand-purple flex items-center justify-center flex-shrink-0">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-purple/20 text-brand-purple border border-brand-purple/30">
                    National Hackathon Preparation
                  </span>
                  <span className="text-xs text-slate-400">SIH 2026</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                  Smart India Hackathon 2026 — Problem Statement Exploration
                </h3>
              </div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-4">
            Researched SIH 2026 problem statements, synthesized technical architecture concepts, developed comprehensive presentation content, and rehearsed solution pitches and technical defense.
          </p>
        </div>

      </div>

      {/* Lightbox / Modal */}
      {selectedCert && (
        <CertificateModal
          certificate={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </section>
  );
}

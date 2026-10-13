import React, { useEffect } from 'react';
import { X, ExternalLink, Award, CheckCircle2, Calendar, UserCheck, ShieldCheck } from 'lucide-react';

export default function CertificateModal({ certificate, onClose }) {
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

  if (!certificate) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-dark-900 border border-white/20 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[92vh] flex flex-col animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-dark-950/70 sticky top-0 z-20 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white truncate max-w-xs sm:max-w-md">
                {certificate.title}
              </h3>
              <p className="text-[11px] font-mono text-slate-400">
                Issued by {certificate.issuer}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* Certificate Image Frame */}
          <div className="rounded-2xl overflow-hidden border border-white/15 bg-dark-950 flex items-center justify-center p-2 sm:p-4 shadow-inner">
            <img
              src={certificate.image}
              alt={certificate.title}
              className="max-h-[500px] w-auto object-contain rounded-lg shadow-xl"
            />
          </div>

          {/* Certificate Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certificate.score && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <div className="text-[11px] font-mono uppercase text-emerald-400">Examination Score</div>
                <div className="text-2xl font-extrabold text-emerald-300 mt-0.5">{certificate.score}</div>
                <div className="text-xs text-slate-400">{certificate.credits || 'Verified Assessment'}</div>
              </div>
            )}

            {certificate.date && (
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-[11px] font-mono uppercase text-slate-400">Date Issued / Period</div>
                <div className="text-base font-bold text-white mt-1">{certificate.date || certificate.period}</div>
                <div className="text-xs text-slate-400">{certificate.issuer}</div>
              </div>
            )}

            {certificate.signatories && (
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 sm:col-span-2">
                <div className="text-[11px] font-mono uppercase text-slate-400">Signatory & Authority</div>
                <div className="text-xs font-semibold text-slate-200 mt-1">{certificate.signatories}</div>
              </div>
            )}

            {certificate.verificationCode && (
              <div className="p-4 rounded-xl bg-brand-purple/10 border border-brand-purple/20 sm:col-span-2">
                <div className="text-[11px] font-mono uppercase text-brand-purple">Verification Code</div>
                <div className="text-xs font-mono text-purple-200 mt-1">{certificate.verificationCode}</div>
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {certificate.description}
          </p>

          {/* Action Footer */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            {certificate.credlyUrl ? (
              <a
                href={certificate.credlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-blue hover:bg-blue-600 text-white text-xs font-bold transition-all shadow-md"
              >
                <span>Verify Credly Digital Badge</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> Authenticated Credential
              </span>
            )}

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-semibold transition-colors border border-white/10"
            >
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

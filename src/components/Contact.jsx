import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Github, Linkedin, Send, Copy, Check, MapPin, AlertCircle, Sparkles } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format (name@domain.com).';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject line is required.';
    if (!formData.message.trim()) {
      errs.message = 'Message body cannot be empty.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);

    // Pre-fill email client link as direct reliable dispatch
    const mailtoUri = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.fullName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    // Open user's email client
    window.location.href = mailtoUri;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative bg-dark-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-xs font-mono text-brand-cyan uppercase tracking-wider">
            <span>// Connect With Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let's Discuss <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-indigo-300 to-brand-purple">Opportunities</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Open for software internships, AI/ML project collaborations, and full-time discussions.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Card */}
            <div className="glass-card rounded-2xl p-6 border border-brand-purple/20 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Direct Email</span>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-[11px] font-mono text-slate-300 transition-colors border border-white/10"
                  title="Copy email address"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              <a
                href={`mailto:${personalInfo.email}`}
                className="text-base sm:text-lg font-bold text-white hover:text-brand-cyan transition-colors flex items-center gap-2.5 group break-all"
              >
                <div className="w-9 h-9 rounded-xl bg-brand-purple/20 text-brand-purple flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <span>{personalInfo.email}</span>
              </a>
            </div>

            {/* Social Links Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* GitHub */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-5 border border-white/10 hover:border-brand-purple/40 transition-all flex items-center gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-brand-purple/20 flex items-center justify-center text-slate-300 group-hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">GitHub</div>
                  <div className="text-sm font-bold text-white group-hover:text-brand-purple transition-colors">Krishnaverma-87</div>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-5 border border-white/10 hover:border-brand-blue/40 transition-all flex items-center gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-blue/10 group-hover:bg-brand-blue/20 flex items-center justify-center text-blue-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">LinkedIn</div>
                  <div className="text-sm font-bold text-white group-hover:text-brand-blue transition-colors">Krishna Verma</div>
                </div>
              </a>
            </div>

            {/* Academic Location Card */}
            <div className="glass-card rounded-2xl p-5 border border-white/10 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-cyan">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-mono">Campus Location</div>
                <div className="text-sm font-bold text-white">{personalInfo.college}</div>
                <div className="text-xs text-slate-400">{personalInfo.collegeLocation}</div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-1">Send a Direct Message</h3>
            <p className="text-xs text-slate-400 mb-6">
              Complete the form below to initiate communication or request resume / code reviews.
            </p>

            {isSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Opening Email Client!</h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Your message has been pre-formatted for direct dispatch to <strong>{personalInfo.email}</strong>.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ fullName: '', email: '', subject: '', message: '' });
                  }}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors mt-2"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Full Name Field */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    Full Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Recruiter or Colleague Name"
                    className={`w-full bg-dark-900 border rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors ${
                      errors.fullName ? 'border-rose-500' : 'border-white/15 focus:border-brand-purple'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email Address Field */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    Email Address <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@organization.com"
                    className={`w-full bg-dark-900 border rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors ${
                      errors.email ? 'border-rose-500' : 'border-white/15 focus:border-brand-purple'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject Field */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    Subject <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Internship Inquiry / Project Collaboration"
                    className={`w-full bg-dark-900 border rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors ${
                      errors.subject ? 'border-rose-500' : 'border-white/15 focus:border-brand-purple'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Krishna, I reviewed your portfolio and would like to discuss..."
                    className={`w-full bg-dark-900 border rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors ${
                      errors.message ? 'border-rose-500' : 'border-white/15 focus:border-brand-purple'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-purple via-indigo-600 to-brand-blue hover:from-purple-600 hover:to-blue-600 text-white font-bold text-sm shadow-lg shadow-brand-purple/20 transition-all active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

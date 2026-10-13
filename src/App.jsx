import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { FileText, X, CheckCircle2, UploadCloud } from 'lucide-react';

export default function App() {
  const [showResumeModal, setShowResumeModal] = useState(false);

  return (
    <div className="min-h-screen bg-dark-900 text-slate-100 flex flex-col selection:bg-brand-purple selection:text-white">
      {/* Navigation */}
      <Navbar onResumeClick={() => setShowResumeModal(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Future Resume Upload Ready Modal */}
      {showResumeModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setShowResumeModal(false)}
        >
          <div 
            className="relative w-full max-w-md bg-dark-950 border border-brand-purple/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5 animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-purple/20 text-brand-purple flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Resume Document</h4>
                  <p className="text-xs font-mono text-slate-400">Ready for Future Upload</p>
                </div>
              </div>

              <button
                onClick={() => setShowResumeModal(false)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs sm:text-sm text-slate-300 leading-relaxed space-y-3">
              <p>
                Krishna's verified resume is currently being tailored for technical internship roles.
              </p>
              
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <div className="font-semibold text-white flex items-center gap-2">
                  <UploadCloud className="w-4 h-4 text-brand-cyan" />
                  <span>How to attach your PDF:</span>
                </div>
                <p className="text-xs text-slate-400">
                  Save your finalized resume as <code className="text-brand-purple font-mono bg-dark-900 px-1.5 py-0.5 rounded">public/Krishna_Verma_Resume.pdf</code> and set <code className="text-brand-cyan font-mono bg-dark-900 px-1.5 py-0.5 rounded">resumeAvailable: true</code> in <code className="text-slate-200 font-mono">src/data/portfolioData.js</code>. The button will automatically serve the direct download!
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowResumeModal(false)}
              className="w-full py-2.5 rounded-xl bg-brand-purple hover:bg-purple-600 text-white font-bold text-xs transition-colors shadow-md"
            >
              Understood
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

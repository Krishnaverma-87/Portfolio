import React, { useState } from 'react';
import { Bot, Play, Sparkles, CheckCircle2, RotateCcw, Clock, Award, Briefcase, Zap } from 'lucide-react';

export default function InterviewSimulatorWidget() {
  const [role, setRole] = useState('AI/ML Engineer');
  const [difficulty, setDifficulty] = useState('Intermediate');
  const [type, setType] = useState('Technical');
  const [duration, setDuration] = useState('30 minutes');
  
  const [sessionActive, setSessionActive] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [evaluating, setEvaluating] = useState(false);

  const roles = [
    'AI/ML Engineer',
    'Python Developer',
    'Data Analyst',
    'Web Developer',
    'Java Developer'
  ];

  const difficulties = ['Beginner', 'Intermediate', 'Advanced'];
  const types = ['Technical', 'HR', 'Mixed'];
  const durations = ['15 minutes', '30 minutes', '45 minutes', '60 minutes'];

  const sampleQuestions = {
    'AI/ML Engineer': [
      "Can you explain the mathematical foundation of gradient descent and how momentum addresses oscillations?",
      "How do you handle severe class imbalance in a classification dataset without overfitting?",
      "Explain the attention mechanism in Transformers versus recurrent neural networks (RNNs)."
    ],
    'Python Developer': [
      "What is the Python GIL (Global Interpreter Lock), and how does it affect multi-threaded CPU-bound programs?",
      "Explain the differences between `@classmethod`, `@staticmethod`, and instance methods.",
      "How do generators and the `yield` keyword optimize memory consumption when processing large datasets?"
    ],
    'Data Analyst': [
      "How do you distinguish between correlation and causation when presenting business findings?",
      "Explain the difference between a LEFT JOIN and an INNER JOIN with SQL query examples.",
      "What statistical tests would you run to validate the results of an A/B test?"
    ],
    'Web Developer': [
      "Explain how the browser rendering pipeline works from HTML parsing to compositing.",
      "What are the trade-offs between Client-Side Rendering (CSR) and Server-Side Rendering (SSR)?",
      "How do you prevent Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF) vulnerabilities?"
    ],
    'Java Developer': [
      "Explain Java Memory Model: Heap vs Stack, and how garbage collection algorithms operate.",
      "What is the contract between `equals()` and `hashCode()` in Java collections?",
      "How does the Spring Boot dependency injection container manage bean life-cycles?"
    ]
  };

  const activeQuestions = sampleQuestions[role] || sampleQuestions['AI/ML Engineer'];

  const handleStart = () => {
    setSessionActive(true);
    setCurrentQuestionIndex(0);
    setUserAnswer('');
    setFeedback(null);
  };

  const handleEvaluate = () => {
    if (!userAnswer.trim()) return;
    setEvaluating(true);
    setTimeout(() => {
      setEvaluating(false);
      setFeedback({
        score: '88%',
        clarity: 'Strong technical clarity',
        keyStrength: 'Effective explanation of underlying architecture and edge case awareness.',
        improvementTip: 'Could elaborate on real-world production trade-offs and latency considerations.'
      });
    }, 800);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < activeQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserAnswer('');
      setFeedback(null);
    } else {
      setSessionActive(false);
    }
  };

  return (
    <div className="bg-dark-950 rounded-2xl p-5 sm:p-6 border border-white/10 text-slate-100 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Bot className="w-4 h-4 text-brand-purple" />
            <span className="text-xs font-mono uppercase tracking-wider text-brand-purple font-bold">
              InterviewIQ AI Engine Preview
            </span>
          </div>
          <h4 className="text-lg font-bold text-white mt-1">Configurable Interview Simulator</h4>
          <p className="text-xs text-slate-400">
            Powered by prompt architecture modeled on Google Gemini API integration.
          </p>
        </div>

        {sessionActive && (
          <button
            onClick={() => setSessionActive(false)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-slate-300 transition-colors border border-white/10"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reconfigure</span>
          </button>
        )}
      </div>

      {!sessionActive ? (
        /* Configuration Screen */
        <div className="space-y-5">
          {/* 1. Job Role */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-brand-cyan" /> 1. Select Target Job Role
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {roles.map((r) => (
                <button
                  key={r}
                  onClick={() => setRole(r)}
                  className={`px-3 py-2.5 rounded-xl text-xs font-semibold text-left transition-all border ${
                    role === r
                      ? 'bg-brand-purple/20 border-brand-purple text-white shadow-md shadow-brand-purple/20'
                      : 'bg-dark-900 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Difficulty Level */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-400" /> 2. Difficulty Level
            </label>
            <div className="grid grid-cols-3 gap-2">
              {difficulties.map((d) => (
                <button
                  key={d}
                  onClick={() => setDifficulty(d)}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold text-center transition-all border ${
                    difficulty === d
                      ? 'bg-brand-blue/20 border-brand-blue text-white'
                      : 'bg-dark-900 border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Type & Duration */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-emerald-400" /> 3. Interview Type
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {types.map((t) => (
                  <button
                    key={t}
                    onClick={() => setType(t)}
                    className={`px-2 py-2 rounded-lg text-xs font-semibold text-center border ${
                      type === t
                        ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                        : 'bg-dark-900 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-indigo-400" /> 4. Duration
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {durations.map((dur) => (
                  <button
                    key={dur}
                    onClick={() => setDuration(dur)}
                    className={`px-2 py-2 rounded-lg text-xs font-semibold text-center border ${
                      duration === dur
                        ? 'bg-indigo-500/20 border-indigo-500 text-indigo-300'
                        : 'bg-dark-900 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    {dur}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Configuration Summary Box */}
          <div className="glass-card rounded-xl p-4 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs space-y-1 text-center sm:text-left">
              <div className="text-slate-400">Ready to simulate interview with settings:</div>
              <div className="text-sm font-bold text-white flex flex-wrap gap-2 justify-center sm:justify-start">
                <span className="text-brand-cyan">{role}</span> •
                <span className="text-amber-400">{difficulty}</span> •
                <span className="text-emerald-400">{type}</span> •
                <span className="text-indigo-400">{duration}</span>
              </div>
            </div>

            <button
              onClick={handleStart}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-purple to-brand-blue hover:from-purple-600 hover:to-blue-600 text-white font-bold text-sm shadow-lg shadow-brand-purple/20 transition-all active:scale-95"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Launch Mock Interview</span>
            </button>
          </div>
        </div>
      ) : (
        /* Active Simulation Session */
        <div className="space-y-5 animate-fadeIn">
          
          {/* Progress Banner */}
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-white/10 pb-3">
            <span>QUESTION {currentQuestionIndex + 1} OF {activeQuestions.length}</span>
            <span className="text-brand-cyan">{role} • {difficulty}</span>
          </div>

          {/* AI Question Card */}
          <div className="glass-card rounded-xl p-5 border border-brand-purple/30 bg-brand-purple/5 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-purple">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI Interviewer Prompt</span>
            </div>
            <p className="text-base sm:text-lg font-semibold text-white leading-relaxed">
              "{activeQuestions[currentQuestionIndex]}"
            </p>
          </div>

          {/* User Response Area */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
              Your Response (Speak or Type)
            </label>
            <textarea
              rows={4}
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Structure your answer here (e.g. key concepts, architectural decisions, practical applications)..."
              className="w-full bg-dark-900 border border-white/15 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-brand-purple placeholder:text-slate-600"
            />
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={handleEvaluate}
              disabled={!userAnswer.trim() || evaluating}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs transition-all ${
                !userAnswer.trim() || evaluating
                  ? 'bg-white/5 text-slate-500 cursor-not-allowed'
                  : 'bg-brand-purple hover:bg-purple-600 text-white shadow-md'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{evaluating ? 'Analyzing with Gemini...' : 'Analyze Answer with AI'}</span>
            </button>

            {feedback && (
              <button
                onClick={handleNextQuestion}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white transition-all"
              >
                <span>{currentQuestionIndex < activeQuestions.length - 1 ? 'Next Question →' : 'Complete Session ✓'}</span>
              </button>
            )}
          </div>

          {/* AI Evaluation Box */}
          {feedback && (
            <div className="glass-card rounded-xl p-4 border border-emerald-500/30 bg-emerald-950/20 space-y-3 animate-fadeIn">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> AI EVALUATION FEEDBACK
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                  Rating: {feedback.score}
                </span>
              </div>
              <div className="text-xs text-slate-300 space-y-1">
                <p><strong>Strength:</strong> {feedback.keyStrength}</p>
                <p><strong>Recommendation:</strong> {feedback.improvementTip}</p>
              </div>
            </div>
          )}

        </div>
      )}

    </div>
  );
}

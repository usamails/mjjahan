import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, CheckCircle2, Layers, Wrench, Shield, ArrowRight } from 'lucide-react';
import { WorkExperienceItem } from './WorkExperienceData';

interface WorkCaseStudyModalProps {
  item: WorkExperienceItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function WorkCaseStudyModal({ item, isOpen, onClose }: WorkCaseStudyModalProps) {
  if (!item) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl bg-[#080b12] border border-slate-700/80 rounded-3xl p-6 sm:p-9 shadow-2xl shadow-black z-10 max-h-[90vh] overflow-y-auto text-slate-200"
          >
            {/* Top Close Bar */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold">
                  EXPERIENCE {item.number}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {item.period}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close Case Study Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Header Content */}
            <div className="mt-6 mb-8">
              <div className="text-xs font-semibold text-cyan-400 uppercase tracking-widest font-mono mb-1">
                {item.category} {item.company ? `• ${item.company}` : ''}
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-display tracking-tight mb-2">
                {item.title}
              </h3>
              <div className="text-sm text-slate-400 font-medium">
                Role: <span className="text-cyan-300 font-semibold">{item.role}</span>
              </div>
            </div>

            {/* Case Study Details Grid */}
            <div className="space-y-6">
              
              {/* 1. Overview */}
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80">
                <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider font-mono mb-2">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  <span>Overview</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.caseStudy.overview}
                </p>
              </div>

              {/* 2. Challenge & Approach */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80">
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider font-mono mb-2">
                    The Challenge
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.caseStudy.challenge}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80">
                  <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider font-mono mb-2">
                    Strategic Approach
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.caseStudy.approach}
                  </p>
                </div>
              </div>

              {/* 3. Practical Execution */}
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80">
                <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider font-mono mb-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Practical Execution</span>
                </div>
                <ul className="space-y-2">
                  {item.caseStudy.execution.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 4. Outcome & Tools */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80">
                  <div className="text-xs font-bold text-white uppercase tracking-wider font-mono mb-2">
                    Outcome & Realization
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.caseStudy.outcomeSummary}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80">
                  <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider font-mono mb-2">
                    <Wrench className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Technologies & Tools</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {item.caseStudy.tools.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-md bg-slate-950 text-[11px] font-mono text-slate-300 border border-slate-800">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Footer Action */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Shield className="w-3.5 h-3.5 text-cyan-400" />
                <span>Verified Practical Experience Archive</span>
              </div>

              {item.websiteUrl && (
                <a
                  href={item.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs tracking-wide shadow-lg shadow-cyan-500/20 flex items-center gap-2 transition-all cursor-pointer"
                >
                  <span>{item.ctaText || 'Visit Live Platform'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

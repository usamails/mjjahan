import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Infinity as InfinityIcon, Rocket, Mail, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import MagneticButton from './MagneticButton';

interface WhatsNextProps {
  onContactClick: () => void;
}

export default function WhatsNextSection({ onContactClick }: WhatsNextProps) {
  return (
    <section id="whats-next" className="py-32 relative overflow-hidden bg-[#05060b] border-t border-slate-800/80 text-center">
      {/* Background Animated Expanding Network / Glowing Orb */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.15, 0.35, 0.15] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
          className="w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/20 via-sky-500/20 to-blue-600/20 rounded-full blur-3xl"
        />
        <div className="absolute inset-0 grid-background opacity-40" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider mb-6"
        >
          <Rocket className="w-3.5 h-3.5" />
          <span>The Next Chapter</span>
        </motion.div>

        {/* Huge Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-black font-display tracking-tight text-white mb-6"
        >
          WHAT'S NEXT?
        </motion.h2>

        {/* Dynamic Philosophy Phrase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent mb-6 tracking-wide"
        >
          Build. Learn. Explore. Repeat.
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-base sm:text-xl text-slate-300 max-w-xl mx-auto font-normal leading-relaxed mb-10"
        >
          The journey doesn't end here. Continually creating new digital platforms, expanding cross-border services, and turning ideas into execution.
        </motion.p>

        {/* Magnetic Primary CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton strength={20}>
            <button
              onClick={onContactClick}
              data-cursor-label="CONNECT"
              className="px-8 py-4.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-sm tracking-wide shadow-2xl shadow-cyan-500/30 transition-all flex items-center gap-3 cursor-pointer group"
            >
              <span>Let's Build Something Together</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </MagneticButton>
        </motion.div>

        {/* Sub text */}
        <div className="mt-12 text-xs font-mono text-slate-500 flex items-center justify-center gap-2">
          <span>2020</span>
          <span>→</span>
          <span>2026</span>
          <span>→</span>
          <InfinityIcon className="w-4 h-4 text-cyan-400" />
        </div>

      </div>
    </section>
  );
}

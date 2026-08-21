import { motion } from 'motion/react';
import { BookOpen, Layers, TrendingUp, Sparkles, Quote } from 'lucide-react';
import { PERSONAL_INFO, PHILOSOPHY_PRINCIPLES } from '../data/portfolioData';

const iconMap = {
  BookOpen,
  Layers,
  TrendingUp
};

export default function PhilosophySection() {
  return (
    <section className="py-28 relative overflow-hidden bg-slate-950/90 border-t border-slate-800/80">
      {/* Subtle Central Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Quote Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mx-auto mb-8 shadow-lg shadow-cyan-500/10"
        >
          <Quote className="w-5 h-5" />
        </motion.div>

        {/* Large Editorial Philosophy Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-relaxed md:leading-snug tracking-tight mb-12 font-display"
        >
          {PERSONAL_INFO.philosophyStatement}
        </motion.blockquote>

        {/* 3 Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-16 pt-12 border-t border-slate-800/80">
          {PHILOSOPHY_PRINCIPLES.map((principle, index) => {
            const IconComponent = iconMap[principle.icon as keyof typeof iconMap] || Sparkles;
            return (
              <motion.div
                key={principle.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 group-hover:bg-cyan-500/20 text-slate-300 group-hover:text-cyan-300 flex items-center justify-center transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-cyan-400">
                    {principle.number}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {principle.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

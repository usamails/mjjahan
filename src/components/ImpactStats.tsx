import { motion } from 'motion/react';
import { IMPACT_METRICS } from '../data/portfolioData';

export default function ImpactStats() {
  return (
    <section className="py-20 bg-[#06080d] border-y border-slate-800/80 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 grid-background opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {IMPACT_METRICS.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col items-start"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 font-display tracking-tight mb-2">
                {metric.number}
              </div>
              <div className="text-sm font-bold text-cyan-400 mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-slate-400 leading-snug">
                {metric.description}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

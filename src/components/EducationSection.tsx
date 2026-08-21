import { motion } from 'motion/react';
import { GraduationCap, Award, BookMarked, Sparkles, Calendar, BookOpen } from 'lucide-react';
import { EDUCATION_ITEMS } from '../data/portfolioData';

const iconMap = {
  Award,
  GraduationCap,
  BookMarked,
  Sparkles
};

export default function EducationSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#07090f] border-t border-slate-800/80">
      {/* Glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 font-display"
          >
            Education Journey
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm sm:text-base text-slate-300"
          >
            Formal academic foundations in Science, Management, and Business Administration.
          </motion.p>
        </div>

        {/* Vertical Education Timeline */}
        <div className="space-y-6 relative">
          
          {/* Vertical subtle connection line */}
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-slate-800 hidden sm:block" />

          {EDUCATION_ITEMS.map((item, index) => {
            const IconComponent = iconMap[item.iconName as keyof typeof iconMap] || BookOpen;
            const isRunning = item.status === 'Currently Running';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative sm:pl-16 flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all duration-300"
              >
                {/* Timeline Node Icon (Desktop) */}
                <div className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 text-cyan-400 items-center justify-center group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50 transition-all z-10">
                  <IconComponent className="w-5 h-5" />
                </div>

                {/* Main Content */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded border border-cyan-500/20">
                      {item.year}
                    </span>
                    {isRunning && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {item.status}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.degree}
                  </h3>

                  <div className="text-sm font-semibold text-cyan-400/90 mt-0.5">
                    {item.institution}
                  </div>

                  <div className="text-xs text-slate-400 mt-0.5">
                    {item.field}
                  </div>
                </div>

                <div className="mt-4 sm:mt-0 text-xs font-medium text-slate-500 group-hover:text-slate-400">
                  Academic Milestone
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

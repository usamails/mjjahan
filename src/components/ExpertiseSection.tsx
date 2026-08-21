import { motion } from 'motion/react';
import { 
  Search, 
  Target, 
  Code, 
  Share2, 
  Users, 
  BarChart3, 
  Sparkles, 
  Layers, 
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { DIGITAL_EXPERTISE } from '../data/portfolioData';

const iconMap = {
  Search,
  Target,
  Code,
  Share2,
  Users,
  BarChart3,
  Sparkles
};

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="py-24 relative overflow-hidden bg-slate-950/80 border-t border-slate-800/80">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Core Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 font-display"
          >
            What I Do
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            A combination of marketing, technology, business and travel industry expertise.
          </motion.p>
        </div>

        {/* Section Category Title */}
        <div className="flex items-center gap-3 mb-8 pb-3 border-b border-slate-800">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
          <h3 className="text-lg font-bold uppercase tracking-wider text-white">
            Digital & Business Strategy
          </h3>
        </div>

        {/* Digital & Business Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {DIGITAL_EXPERTISE.map((item, index) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap] || Layers;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="group rounded-2xl p-6 sm:p-7 bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all duration-300 shadow-md hover:shadow-cyan-500/10 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Header */}
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/20 text-slate-300 group-hover:text-cyan-300 flex items-center justify-center mb-5 transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-5">
                    {item.description}
                  </p>
                </div>

                {/* Sub-items Tags */}
                {item.subItems && (
                  <div className="pt-4 border-t border-slate-800/70 flex flex-wrap gap-1.5">
                    {item.subItems.map((sub) => (
                      <span
                        key={sub}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-950 text-[11px] font-medium text-slate-400 group-hover:text-slate-300 border border-slate-800/80"
                      >
                        <CheckCircle2 className="w-2.5 h-2.5 text-cyan-400" />
                        <span>{sub}</span>
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

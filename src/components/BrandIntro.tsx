import { motion } from 'motion/react';
import { UserCheck, TrendingUp, Building2, Briefcase, Sparkles, ArrowRight } from 'lucide-react';

const PILLARS = [
  {
    num: "01",
    role: "FREELANCER",
    desc: "Started freelancing in 2020 and developed practical experience through real projects and client work.",
    icon: UserCheck,
    highlight: "Practical execution & client empathy",
    theme: "from-cyan-500/20 to-transparent",
    border: "hover:border-cyan-500/50"
  },
  {
    num: "02",
    role: "DIGITAL MARKETER",
    desc: "SEO, paid advertising, social media, lead generation and digital growth.",
    icon: TrendingUp,
    highlight: "Performance marketing & ROI systems",
    theme: "from-sky-500/20 to-transparent",
    border: "hover:border-sky-500/50"
  },
  {
    num: "03",
    role: "ENTREPRENEUR",
    desc: "Building ideas into practical digital businesses and ventures.",
    icon: Sparkles,
    highlight: "Venture incubation & sustainable models",
    theme: "from-blue-500/20 to-transparent",
    border: "hover:border-blue-500/50"
  },
  {
    num: "04",
    role: "AGENCY OWNER",
    desc: "Founder and owner of Flowdigita LLC.",
    icon: Building2,
    highlight: "Full-service digital marketing agency",
    theme: "from-indigo-500/20 to-transparent",
    border: "hover:border-indigo-500/50"
  }
];

export default function BrandIntro() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#07090f] border-t border-slate-800/80">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Evolution & Positioning</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-5 font-display"
          >
            MORE THAN A FREELANCER.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed"
          >
            A journey from independent freelancing to building businesses and digital ventures.
          </motion.p>
        </div>

        {/* 4 Large Progressive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.6 }}
                className={`group relative rounded-3xl p-7 bg-slate-900/70 border border-slate-800/90 ${item.border} transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/5`}
              >
                {/* Top Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black font-display text-slate-400 group-hover:text-cyan-400 transition-colors">
                      {item.num}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-slate-800/80 border border-slate-700 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold font-display text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.role}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Highlight */}
                <div className="mt-6 pt-4 border-t border-slate-800/70 flex items-center justify-between text-[11px] font-mono text-slate-400 group-hover:text-cyan-400 transition-colors">
                  <span>{item.highlight}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion } from 'motion/react';
import { Globe, Plane, Code, Compass, Search, Share2, Layers, ShieldCheck, Ticket, Users, Sparkles } from 'lucide-react';

const DIGITAL_SKILLS = [
  { name: "SEO & Organic Strategy", desc: "Technical SEO, indexing, and ranking authority", icon: Search },
  { name: "Google & Meta Ads", desc: "Paid search, retargeting & performance acquisition", icon: Globe },
  { name: "Web Development", desc: "Modern frontend platforms, CMS, and web architectures", icon: Code },
  { name: "Social Media Systems", desc: "Brand distribution, organic reach, and content engines", icon: Share2 },
  { name: "Lead Generation", desc: "High-intent client pipelines and conversion funnels", icon: Users },
  { name: "AI Tools & Automation", desc: "Prompt engineering, workflow automation, and tooling", icon: Sparkles },
  { name: "Business Growth", desc: "Full-funnel monetization and strategic positioning", icon: Layers }
];

const TRAVEL_SKILLS = [
  { name: "Air Ticketing Operations", desc: "Global airline route management & flight reservations", icon: Plane },
  { name: "Galileo / Travelport GDS", desc: "Certified PNR creation, fare pricing & ticketing", icon: Ticket },
  { name: "Amadeus GDS", desc: "Multi-sector routing, seat assignment & global inventory", icon: Compass },
  { name: "Sabre GDS", desc: "Worldwide reservation system management", icon: Globe },
  { name: "Visa Consultation", desc: "Document preparation, checklist audits & embassy guidance", icon: ShieldCheck },
  { name: "Work Permit Assistance", desc: "Overseas employment documentation & verified processes", icon: Users }
];

export default function TwoWorldsSection() {
  const [activeSide, setActiveSide] = useState<'both' | 'digital' | 'travel'>('both');

  return (
    <section id="two-worlds" className="py-24 relative overflow-hidden bg-[#05070c] border-t border-slate-800/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

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
            <Compass className="w-3.5 h-3.5" />
            <span>Dual Industry Domain</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4 font-display"
          >
            TWO WORLDS. ONE BUILDER.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed"
          >
            Uniting deep technical digital growth systems with international air travel & GDS consultancy.
          </motion.p>
        </div>

        {/* Dual Interactive Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative items-stretch">
          
          {/* LEFT: DIGITAL WORLD */}
          <motion.div
            onMouseEnter={() => setActiveSide('digital')}
            onMouseLeave={() => setActiveSide('both')}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`lg:col-span-5 rounded-3xl p-8 transition-all duration-500 border relative flex flex-col justify-between ${
              activeSide === 'digital'
                ? 'bg-slate-900/95 border-cyan-500/60 shadow-2xl shadow-cyan-500/10'
                : activeSide === 'travel'
                ? 'bg-slate-950/40 border-slate-900 opacity-60'
                : 'bg-slate-900/60 border-slate-800/80'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                  DIGITAL WORLD
                </span>
                <span className="text-xs text-slate-400 font-mono">01 / TECH & GROWTH</span>
              </div>

              <h3 className="text-2xl font-black font-display text-white mb-2">
                Marketing, Code & Automation
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Data-driven growth infrastructure, high-intent lead systems, and full-stack marketing delivery under Flowdigita LLC.
              </p>

              {/* Skills List */}
              <div className="space-y-2.5">
                {DIGITAL_SKILLS.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/30 flex items-start gap-3 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">{skill.name}</div>
                        <div className="text-[11px] text-slate-400">{skill.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-cyan-300 font-mono">
              <span>POWERED BY FLOWDIGITA LLC</span>
              <span>GROWTH MATRIX →</span>
            </div>
          </motion.div>

          {/* CENTER: JAHAN NUCLEUS (Desktop) */}
          <div className="hidden lg:flex lg:col-span-2 flex-col items-center justify-center relative">
            {/* Animated Connector lines */}
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500/40 via-sky-400/80 to-blue-500/40 -translate-y-1/2 z-0" />

            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="relative z-10 w-24 h-24 rounded-2xl bg-slate-950 border-2 border-cyan-400 text-white flex flex-col items-center justify-center shadow-xl shadow-cyan-500/20 p-2 text-center"
            >
              <span className="text-xs font-black font-display tracking-widest text-cyan-400">JAHAN</span>
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-tight">BUILDER</span>
            </motion.div>
          </div>

          {/* RIGHT: TRAVEL WORLD */}
          <motion.div
            onMouseEnter={() => setActiveSide('travel')}
            onMouseLeave={() => setActiveSide('both')}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`lg:col-span-5 rounded-3xl p-8 transition-all duration-500 border relative flex flex-col justify-between ${
              activeSide === 'travel'
                ? 'bg-slate-900/95 border-blue-500/60 shadow-2xl shadow-blue-500/10'
                : activeSide === 'digital'
                ? 'bg-slate-950/40 border-slate-900 opacity-60'
                : 'bg-slate-900/60 border-slate-800/80'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                  TRAVEL WORLD
                </span>
                <span className="text-xs text-slate-400 font-mono">02 / GDS & VISAS</span>
              </div>

              <h3 className="text-2xl font-black font-display text-white mb-2">
                Aviation, GDS & Mobility
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Specialized ticketing operations across all major global airline distribution systems, and verified visa application guidance under Dreams Fly International.
              </p>

              {/* Skills List */}
              <div className="space-y-2.5">
                {TRAVEL_SKILLS.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-blue-500/30 flex items-start gap-3 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">{skill.name}</div>
                        <div className="text-[11px] text-slate-400">{skill.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-blue-300 font-mono">
              <span>POWERED BY DREAMS FLY INTL</span>
              <span>TRAVEL MATRIX →</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { Layers, Plane, Sparkles, ArrowRight, ExternalLink } from 'lucide-react';

const VENTURE_STATUSES = [
  {
    name: "Flowdigita LLC",
    category: "Digital Growth & Agency",
    status: "ACTIVE",
    statusColor: "emerald",
    desc: "Scaling digital performance campaigns, SEO indexing authority, and custom website builds for international brands.",
    link: "https://flowdigita.com/",
    icon: Layers
  },
  {
    name: "Dreams Fly International",
    category: "Travel & Visa Advisory",
    status: "ACTIVE",
    statusColor: "emerald",
    desc: "Facilitating multi-sector global air ticketing through Galileo, Amadeus, and Sabre GDS alongside verified visa consulting.",
    link: "https://dreamsfly.net/",
    icon: Plane
  },
  {
    name: "Future Venture",
    category: "Digital Business",
    status: "EXPLORING",
    statusColor: "cyan",
    desc: "“Something new is being explored.” Researching AI-powered automation systems and cross-border digital services.",
    link: "#contact",
    icon: Sparkles
  }
];

export default function CurrentlyBuilding() {
  return (
    <section id="currently-building" className="py-20 relative overflow-hidden bg-[#05070c] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-2">
              REAL-TIME ACTIVITY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display">
              CURRENTLY BUILDING
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 max-w-md mt-3 md:mt-0">
            A dynamic snapshot of active businesses and next-generation exploratory ventures.
          </p>
        </div>

        {/* 3 Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VENTURE_STATUSES.map((venture, idx) => {
            const Icon = venture.icon;
            const isActive = venture.status === 'ACTIVE';

            return (
              <motion.div
                key={venture.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`rounded-3xl p-7 border transition-all duration-300 flex flex-col justify-between ${
                  isActive
                    ? 'bg-slate-900/70 border-slate-800 hover:border-cyan-500/40 hover:-translate-y-1'
                    : 'bg-gradient-to-b from-slate-900/40 to-slate-950/80 border-slate-800/80 border-dashed'
                }`}
              >
                <div>
                  {/* Top Status & Category */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-slate-400">
                      {venture.category}
                    </span>

                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold ${
                      isActive
                        ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800/80'
                        : 'bg-cyan-950/80 text-cyan-300 border border-cyan-800/80'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-emerald-400 animate-pulse' : 'bg-cyan-400 animate-ping'}`} />
                      {venture.status}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 text-cyan-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold font-display text-white">
                      {venture.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {venture.desc}
                  </p>
                </div>

                {/* Bottom Action */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold">
                  {venture.link.startsWith('http') ? (
                    <a
                      href={venture.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5"
                    >
                      <span>Visit Live Platform</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <a
                      href={venture.link}
                      className="text-slate-400 hover:text-cyan-300 flex items-center gap-1.5"
                    >
                      <span>Inquire / Collaborate</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <span className="font-mono text-[10px] text-slate-500">2026</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

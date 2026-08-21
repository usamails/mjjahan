import { motion } from 'motion/react';
import { Plane, FileCheck, Briefcase, Globe, Shield, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { TRAVEL_EXPERTISE } from '../data/portfolioData';

export default function TravelVisaSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-950 via-[#0a0f1d] to-slate-950 border-t border-slate-800/80">
      {/* Background World/Aviation Ambient Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Globe className="w-3.5 h-3.5 text-blue-400" />
            <span>Travel & Visa Industry Advisory</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 font-display"
          >
            Travel. Tickets. Opportunities.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            Building expertise beyond digital marketing through the international travel and visa industry.
          </motion.p>
        </div>

        {/* 3 Travel Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {TRAVEL_EXPERTISE.map((card, index) => {
            const icons = {
              'travel-gds': Plane,
              'travel-visa': FileCheck,
              'travel-work-permit': Briefcase
            };
            const CardIcon = icons[card.id as keyof typeof icons] || Globe;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group rounded-2xl p-7 bg-[#0d1424]/90 border border-blue-900/40 hover:border-blue-500/50 hover:bg-[#0f172a] transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-950/80 border border-blue-800/60 group-hover:border-blue-400 group-hover:bg-blue-600/20 text-blue-300 group-hover:text-blue-200 flex items-center justify-center transition-all duration-300">
                      <CardIcon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-blue-950/70 border border-blue-800/50 text-[10px] font-semibold text-blue-300 tracking-wide uppercase">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                    {card.title}
                  </h3>
                  <div className="text-xs font-semibold text-slate-400 mb-4">
                    {card.subtitle}
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                {/* Systems & Platforms list */}
                <div className="pt-4 border-t border-blue-900/40 space-y-2">
                  <div className="text-[11px] font-mono font-bold text-blue-400 uppercase tracking-wider">
                    Specialized Competencies:
                  </div>
                  <div className="space-y-1.5">
                    {card.systems.map((sys) => (
                      <div
                        key={sys}
                        className="flex items-center gap-2 text-xs font-medium text-slate-300"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{sys}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Professional Disclaimer / Compliance Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="rounded-xl p-4 bg-slate-900/60 border border-slate-800 flex items-start gap-3 text-xs text-slate-400 max-w-3xl mx-auto"
        >
          <Shield className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <p>
            <span className="font-semibold text-slate-300">Professional Advisory Standards:</span> Services provided represent structured procedural consultation, GDS ticketing operations (Galileo, Amadeus, Sabre), document verification support, and application assistance through Dreams Fly International. No embassy affiliation or official government endorsement is implied.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

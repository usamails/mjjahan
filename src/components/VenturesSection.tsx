import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Building2, Globe, ArrowRight, ShieldCheck, CheckCircle2, ChevronRight, Layers, Plane } from 'lucide-react';
import { VENTURES } from '../data/portfolioData';
import MagneticButton from './MagneticButton';

export default function VenturesSection() {
  const [activeTab, setActiveTab] = useState<'flowdigita' | 'dreamsfly'>('flowdigita');

  const currentVenture = activeTab === 'flowdigita' ? VENTURES[0] : VENTURES[1];

  return (
    <section id="ventures" className="py-28 relative overflow-hidden bg-[#06080d] border-t border-slate-800/80">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Giant Editorial Statement Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4"
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Venture Incubation</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4 font-display leading-[1.1]"
          >
            I DON'T JUST WORK ON BUSINESSES.
            <span className="block bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent mt-1">
              I BUILD THEM.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto"
          >
            Two active, operational ventures founded and managed by Jahan Ali across digital growth and global travel.
          </motion.p>

          {/* Interactive World Switcher Tabs */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={() => setActiveTab('flowdigita')}
              className={`px-6 py-3 rounded-xl font-bold text-xs sm:text-sm font-display tracking-wide transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'flowdigita'
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 scale-105'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>01. Flowdigita LLC</span>
            </button>

            <button
              onClick={() => setActiveTab('dreamsfly')}
              className={`px-6 py-3 rounded-xl font-bold text-xs sm:text-sm font-display tracking-wide transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'dreamsfly'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 scale-105'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              <Plane className="w-4 h-4" />
              <span>02. Dreams Fly International</span>
            </button>
          </div>
        </div>

        {/* Dynamic Horizontal Transition Stage for Ventures */}
        <AnimatePresence mode="wait">
          {activeTab === 'flowdigita' ? (
            <motion.div
              key="flowdigita"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl p-8 sm:p-12 bg-slate-900/80 border border-cyan-500/40 shadow-2xl shadow-cyan-500/5 relative overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Venture Narrative */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
                      DIGITAL AGENCY
                    </span>
                    <span className="text-xs text-slate-400 font-mono">Founded 2024</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-black text-white font-display">
                    Flowdigita LLC
                  </h3>

                  <div className="text-sm font-semibold text-cyan-400 font-mono">
                    Role: Founder & Owner
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                    A digital-focused venture working around marketing, web and online growth services. Delivering end-to-end SEO architectures, conversion-focused paid advertising across Google & Meta, and high-performance modern web platforms for global brands.
                  </p>

                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Full-service digital marketing & performance agency</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Technical SEO & global search visibility systems</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Modern website development & custom digital assets</span>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <MagneticButton strength={15}>
                      <a
                        href="https://flowdigita.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs tracking-wide shadow-lg shadow-cyan-500/20 transition-all flex items-center gap-2"
                      >
                        <span>Explore Flowdigita</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </MagneticButton>

                    <a
                      href="https://flowdigita.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1.5"
                    >
                      <span>flowdigita.com</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Large Browser Mockup */}
                <div className="lg:col-span-6">
                  <div className="rounded-2xl bg-slate-950 border border-slate-700/80 overflow-hidden shadow-2xl project-card group">
                    {/* Browser Chrome Header */}
                    <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                        <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                        <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="px-3 py-1 rounded-md bg-slate-950 text-[11px] font-mono text-slate-400 flex items-center gap-2 border border-slate-800">
                        <Globe className="w-3 h-3 text-cyan-400" />
                        <span>https://flowdigita.com</span>
                      </div>
                      <div className="w-4" />
                    </div>

                    {/* Mockup Canvas */}
                    <div className="p-6 sm:p-8 bg-gradient-to-br from-slate-950 via-[#0a0f1d] to-slate-950 min-h-[260px] flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider block mb-1">
                          FLOWDIGITA AGENCY PORTAL
                        </span>
                        <div className="text-xl sm:text-2xl font-black text-white font-display mb-2">
                          Transforming Traffic into Revenue & Authority
                        </div>
                        <p className="text-xs text-slate-400">
                          Digital Marketing • SEO Strategy • Performance Media • Web Design
                        </p>
                      </div>

                      {/* Animated Growth Graph preview */}
                      <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-xs font-mono text-slate-300">Live Client Systems Active</span>
                        </div>
                        <a
                          href="https://flowdigita.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                        >
                          <span>Open Live Site</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="dreamsfly"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl p-8 sm:p-12 bg-slate-900/80 border border-blue-500/40 shadow-2xl shadow-blue-500/5 relative overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Venture Narrative */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono font-bold">
                      TRAVEL & VISA
                    </span>
                    <span className="text-xs text-slate-400 font-mono">Founded 2026</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-black text-white font-display">
                    Dreams Fly International
                  </h3>

                  <div className="text-sm font-semibold text-blue-400 font-mono">
                    Role: Founder & Owner
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                    A travel-focused venture providing air ticketing, visa consultation and work permit-related services. Operating across major Global Distribution Systems (Galileo, Amadeus, Sabre) to ensure seamless global routing and verified application pathways.
                  </p>

                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>Certified Global Distribution Systems (Galileo, Amadeus, Sabre)</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>End-to-end tourist, student, and business visa advisory</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>Verified international work permit documentation</span>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <MagneticButton strength={15}>
                      <a
                        href="https://dreamsfly.net/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs tracking-wide shadow-lg shadow-blue-600/20 transition-all flex items-center gap-2"
                      >
                        <span>Explore Dreams Fly</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </MagneticButton>

                    <a
                      href="https://dreamsfly.net/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-blue-400 hover:underline flex items-center gap-1.5"
                    >
                      <span>dreamsfly.net</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Large Browser Mockup */}
                <div className="lg:col-span-6">
                  <div className="rounded-2xl bg-slate-950 border border-slate-700/80 overflow-hidden shadow-2xl project-card group">
                    {/* Browser Chrome Header */}
                    <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                        <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                        <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="px-3 py-1 rounded-md bg-slate-950 text-[11px] font-mono text-slate-400 flex items-center gap-2 border border-slate-800">
                        <Globe className="w-3 h-3 text-blue-400" />
                        <span>https://dreamsfly.net</span>
                      </div>
                      <div className="w-4" />
                    </div>

                    {/* Mockup Canvas */}
                    <div className="p-6 sm:p-8 bg-gradient-to-br from-slate-950 via-[#0b1324] to-slate-950 min-h-[260px] flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-blue-400 font-bold uppercase tracking-wider block mb-1">
                          DREAMS FLY INTERNATIONAL
                        </span>
                        <div className="text-xl sm:text-2xl font-black text-white font-display mb-2">
                          Your Direct Gateway to Global Destinations
                        </div>
                        <p className="text-xs text-slate-400">
                          Air Ticketing • Global GDS Systems • Visa Advisory • Overseas Mobility
                        </p>
                      </div>

                      {/* Status indicator */}
                      <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-xs font-mono text-slate-300">Live Ticketing & Visa Portal Active</span>
                        </div>
                        <a
                          href="https://dreamsfly.net/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1"
                        >
                          <span>Open Live Site</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

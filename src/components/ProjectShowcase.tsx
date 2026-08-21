import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, 
  ExternalLink, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Plane, 
  FileText, 
  Terminal, 
  Layers, 
  Globe, 
  TrendingUp, 
  ShieldCheck, 
  Mail, 
  Search, 
  BarChart3, 
  Code, 
  Users, 
  Calendar,
  Compass,
  ArrowUpRight
} from 'lucide-react';
import { 
  WORK_EXPERIENCES, 
  GDS_PLATFORMS, 
  VISA_CONSULTATION_SERVICES, 
  SERVICE_TO_BUSINESS_MILESTONES, 
  WHAT_I_ACTUALLY_WORK_ON, 
  WorkExperienceItem 
} from './work/WorkExperienceData';
import WorkCaseStudyModal from './work/WorkCaseStudyModal';
import MagneticButton from './MagneticButton';
import { PERSONAL_INFO } from '../data/portfolioData';

type FilterCategory = 'all' | 'marketing' | 'tech' | 'agency' | 'travel' | 'business';

const FILTER_TABS: { key: FilterCategory; label: string }[] = [
  { key: 'all', label: 'ALL' },
  { key: 'marketing', label: 'DIGITAL MARKETING' },
  { key: 'tech', label: 'WEB & TECHNOLOGY' },
  { key: 'agency', label: 'AGENCY' },
  { key: 'travel', label: 'TRAVEL & TICKETING' },
  { key: 'business', label: 'BUSINESS' },
];

export default function ProjectShowcase() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<WorkExperienceItem | null>(null);
  const [activeGdsTab, setActiveGdsTab] = useState<number>(0);
  const [activeWorkCard, setActiveWorkCard] = useState<string | null>(null);

  // Filtered items
  const filteredExperiences = activeFilter === 'all'
    ? WORK_EXPERIENCES
    : WORK_EXPERIENCES.filter(exp => {
        if (activeFilter === 'marketing') return exp.filterKey === 'marketing' || exp.category === 'DIGITAL MARKETING';
        if (activeFilter === 'tech') return exp.filterKey === 'tech' || exp.category === 'WEB & TECHNOLOGY';
        if (activeFilter === 'agency') return exp.filterKey === 'agency' || exp.category === 'AGENCY';
        if (activeFilter === 'travel') return exp.filterKey === 'travel' || exp.category === 'TRAVEL & TICKETING';
        if (activeFilter === 'business') return exp.filterKey === 'business' || exp.category === 'FREELANCING' || exp.category === 'BUSINESS';
        return true;
      });

  return (
    <section id="work" className="py-28 relative overflow-hidden bg-[#07090e] border-t border-slate-800/80">
      
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. SECTION INTRO */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest mb-4 shadow-sm"
          >
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>REAL-WORLD EXPERIENCE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse ml-1" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-6 font-display uppercase"
          >
            WORK THAT MOVED BEYOND THEORY<span className="text-cyan-400">.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6"
          >
            From freelancing and digital marketing projects to agency ownership and travel operations, my experience has been built through practical work, experimentation and real-world execution.
          </motion.p>

          {/* Animated Indicator: 2020 -> PRESENT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-900/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 font-semibold"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>2020 → PRESENT</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">6+ YEARS OF EXECUTION</span>
          </motion.div>
        </div>

        {/* 2. EXPERIENCE FILTER TABS */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold font-mono tracking-wider transition-all duration-300 cursor-pointer ${
                activeFilter === tab.key
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 scale-105'
                  : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 3. FEATURED EDITORIAL EXPERIENCE CARDS */}
        <div className="space-y-8 mb-24">
          <AnimatePresence mode="popLayout">
            {filteredExperiences.map((exp) => (
              <motion.div
                key={exp.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="group rounded-3xl p-7 sm:p-10 bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 shadow-2xl backdrop-blur-sm relative overflow-hidden"
              >
                {/* Background Accent Grid */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-cyan-500/5 to-transparent rounded-bl-full pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column: Experience Details & Role */}
                  <div className="lg:col-span-7 space-y-5">
                    
                    {/* Header Tags & Status */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-2xl sm:text-3xl font-black text-cyan-400/80">
                        {exp.number}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-[11px] font-mono font-bold text-cyan-300">
                        {exp.category}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {exp.period}
                      </span>
                      {exp.status && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>{exp.status}</span>
                        </span>
                      )}
                    </div>

                    {/* Title & Role */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white font-display tracking-tight group-hover:text-cyan-300 transition-colors">
                        {exp.title}
                      </h3>
                      <div className="text-xs sm:text-sm font-semibold text-cyan-400 mt-1 font-mono">
                        Role: {exp.role} {exp.company ? `• ${exp.company}` : ''}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* What I Do Bullet Points (if available) */}
                    {exp.whatIDo && exp.whatIDo.length > 0 && (
                      <div className="pt-2">
                        <div className="text-xs font-bold text-white uppercase tracking-wider font-mono mb-2">
                          Key Operational Focus:
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {exp.whatIDo.map((task, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                              <span>{task}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Experience Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-lg bg-slate-950/80 border border-slate-800 text-[11px] font-medium text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Action CTAs */}
                    <div className="flex flex-wrap items-center gap-4 pt-3">
                      <button
                        onClick={() => setSelectedCaseStudy(exp)}
                        className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 hover:text-white border border-slate-700 hover:border-cyan-500/40 text-xs font-bold font-mono tracking-wide flex items-center gap-2 transition-all cursor-pointer"
                      >
                        <span>Explore Experience / Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      {exp.websiteUrl && (
                        <a
                          href={exp.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs font-mono tracking-wide shadow-md shadow-cyan-500/20 flex items-center gap-2 transition-all cursor-pointer"
                        >
                          <span>{exp.ctaText || 'Visit Live Platform'}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                  </div>

                  {/* Right Column: Stylized Visual Mockup / Interface Card */}
                  <div className="lg:col-span-5">
                    <div className="rounded-2xl p-5 bg-[#05070c] border border-slate-800 shadow-xl relative overflow-hidden group-hover:border-slate-700 transition-all">
                      
                      {/* Top Window Bar */}
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        </div>
                        <span className="text-[10px] font-mono text-slate-500">
                          {exp.company ? `${exp.company.toLowerCase().replace(/\s+/g, '')}.sys` : `workspace_${exp.number}.env`}
                        </span>
                      </div>

                      {/* Visual Content based on Experience */}
                      {exp.id === 'exp-freelancing' && (
                        <div className="space-y-3 font-mono text-xs">
                          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                            <span className="text-slate-400">FOUNDATIONAL SKILLS</span>
                            <span className="text-cyan-400 font-bold">SEO • Web • Ads</span>
                          </div>
                          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                            <div className="text-[11px] text-slate-400 mb-1">CLIENT DELIVERY SYSTEM</div>
                            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 h-full w-[88%]" />
                            </div>
                          </div>
                          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-[11px]">
                            <span className="text-slate-400">PRACTICE PERIOD</span>
                            <span className="text-white">2020 – 2023 (Continuous)</span>
                          </div>
                        </div>
                      )}

                      {exp.id === 'exp-digital-marketing' && (
                        <div className="space-y-3 font-mono text-xs">
                          <div className="grid grid-cols-2 gap-2">
                            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                              <div className="text-[10px] text-slate-500">PAID CHANNELS</div>
                              <div className="text-xs font-bold text-cyan-400 mt-1">Google & Meta Ads</div>
                            </div>
                            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                              <div className="text-[10px] text-slate-500">ORGANIC SEARCH</div>
                              <div className="text-xs font-bold text-sky-400 mt-1">Technical SEO</div>
                            </div>
                          </div>
                          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-[11px]">
                            <span className="text-slate-400">CONVERSION TRACKING</span>
                            <span className="text-emerald-400 font-bold">GA4 • Pixel • GTM</span>
                          </div>
                        </div>
                      )}

                      {exp.id === 'exp-web-development' && (
                        <div className="space-y-3 font-mono text-xs">
                          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] text-slate-300">
                            <span className="text-cyan-400 font-bold">$ deploy</span> --prod --domain=mjjahan.com
                            <div className="text-emerald-400 mt-1">✓ Build verified & SSL active</div>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">WordPress</div>
                            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">React/TS</div>
                            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">Cloudflare</div>
                          </div>
                        </div>
                      )}

                      {exp.id === 'exp-flowdigita' && (
                        <div className="space-y-3">
                          <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-950/40 to-blue-950/40 border border-cyan-500/30">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs font-black font-display text-cyan-300">FLOWDIGITA LLC</span>
                              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/20 text-cyan-400">FOUNDED 2024</span>
                            </div>
                            <p className="text-xs text-slate-300 leading-relaxed">
                              Digital Marketing & Custom Web Solutions Platform
                            </p>
                          </div>
                          <div className="text-[11px] text-slate-400 font-mono flex items-center justify-between px-1">
                            <span>Official Domain:</span>
                            <span className="text-cyan-400 font-semibold">flowdigita.com</span>
                          </div>
                        </div>
                      )}

                      {exp.id === 'exp-dreamsfly' && (
                        <div className="space-y-3">
                          {/* Boarding Pass Styled Visual */}
                          <div className="p-4 rounded-xl bg-gradient-to-br from-blue-950/40 to-indigo-950/40 border border-blue-500/30">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-1.5">
                                <Plane className="w-4 h-4 text-cyan-400 rotate-45" />
                                <span className="text-xs font-black font-display text-white">DREAMS FLY INTL</span>
                              </div>
                              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/20 text-cyan-300">GDS & VISA</span>
                            </div>
                            <div className="flex items-center justify-between py-2 border-y border-slate-800 font-mono text-xs">
                              <div>
                                <span className="text-[10px] text-slate-500 block">ORIGIN</span>
                                <span className="text-white font-bold">DAC</span>
                              </div>
                              <div className="text-cyan-400 text-xs">✈ ••••• ✈</div>
                              <div>
                                <span className="text-[10px] text-slate-500 block">DESTINATION</span>
                                <span className="text-white font-bold">GLOBAL</span>
                              </div>
                            </div>
                            <div className="mt-2 flex items-center justify-between text-[11px] font-mono text-slate-400">
                              <span>GDS: Amadeus • Galileo • Sabre</span>
                              <span className="text-cyan-400">dreamsfly.net</span>
                            </div>
                          </div>
                        </div>
                      )}

                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* 4. AIR TICKETING & GDS EXPERIENCE */}
        <div className="mb-24">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#090e1a] to-[#06080e] border border-cyan-500/30 shadow-2xl relative overflow-hidden">
            
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase mb-2">
                  <Plane className="w-3.5 h-3.5" />
                  <span>TRAVEL LOGISTICS & AIRLINE SYSTEMS</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
                  AIR TICKETING & GDS EXPERIENCE
                </h3>
                <p className="text-sm text-slate-300 max-w-2xl mt-1">
                  Hands-on learning and professional experience with airline reservation and ticketing workflows using major GDS platforms.
                </p>
              </div>

              {/* GDS Switcher Tabs */}
              <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-900 border border-slate-800">
                {GDS_PLATFORMS.map((gds, idx) => (
                  <button
                    key={gds.name}
                    onClick={() => setActiveGdsTab(idx)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                      activeGdsTab === idx
                        ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {gds.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Active GDS Terminal & Features */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left: Description & Features */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-md bg-slate-800 text-cyan-400 font-mono text-sm font-bold">
                    {GDS_PLATFORMS[activeGdsTab].shortCode}
                  </span>
                  <h4 className="text-xl font-bold text-white font-display">
                    {GDS_PLATFORMS[activeGdsTab].name}
                  </h4>
                </div>
                
                <p className="text-xs font-mono text-cyan-300 font-semibold">
                  {GDS_PLATFORMS[activeGdsTab].role}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {GDS_PLATFORMS[activeGdsTab].description}
                </p>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-bold font-mono text-white uppercase">Key Operational Workflows:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {GDS_PLATFORMS[activeGdsTab].features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Terminal Emulator View */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl p-5 bg-[#04060a] border border-slate-800 font-mono text-xs text-slate-300 shadow-2xl">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2 text-[11px] text-cyan-400 font-bold">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>{GDS_PLATFORMS[activeGdsTab].name.toUpperCase()} COMMAND WORKSPACE</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-semibold">● SESSION CONNECTED</span>
                  </div>

                  <div className="space-y-1.5 text-[11px] leading-relaxed text-slate-400">
                    <p className="text-cyan-300 font-bold">&gt; NM1ALI/JAHAN MR</p>
                    <p className="text-slate-400">&gt; AN15OCTDACDOH/QR</p>
                    <p className="text-emerald-400 font-mono">1 QR 641 J 15OCT DACDOH HK1  1940 2235  77W E 0</p>
                    <p className="text-cyan-300 font-bold">&gt; FXP (FARE QUOTE BEST BUY)</p>
                    <p className="text-slate-300">FARE: BDT 64,500 + TAX 12,300 = TOTAL 76,800</p>
                    <p className="text-cyan-300 font-bold">&gt; TTP/RT (TICKET ISSUANCE DIRECT)</p>
                    <p className="text-emerald-400 font-bold">✓ ETKT 157-9843210984 ISSUED • PNR CONFIRMED</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* 5. VISA CONSULTATION EXPERIENCE */}
        <div className="mb-24">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-slate-800 shadow-xl">
            
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-cyan-400 text-xs font-mono font-bold uppercase mb-2">
                <FileText className="w-3.5 h-3.5" />
                <span>DOCUMENTATION & ADVISORY</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
                VISA CONSULTATION & APPLICATION ASSISTANCE
              </h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Experience assisting clients with travel and visa-related information, documentation and application processes with transparency and regulatory precision.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {VISA_CONSULTATION_SERVICES.map((srv) => (
                <div key={srv.id} className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800/90 hover:border-cyan-500/30 transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                      <FileText className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-white font-display mb-2">
                      {srv.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {srv.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Advisory Note */}
            <div className="mt-8 p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-3 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>
                <strong>Professional Advisory Scope:</strong> Dedicated document verification and authentic procedural assistance without fabricated guarantees.
              </span>
            </div>

          </div>
        </div>

        {/* 6. BUSINESS BUILDING PROGRESSION: FROM SERVICE TO BUSINESS */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest mb-2">
              ENTREPRENEURIAL EVOLUTION
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-display uppercase">
              FROM SERVICE TO BUSINESS<span className="text-cyan-400">.</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              A continuous, disciplined progression from individual skill mastery to scalable venture creation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {SERVICE_TO_BUSINESS_MILESTONES.map((m, idx) => (
              <div
                key={m.year}
                className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 relative flex flex-col justify-between group hover:border-cyan-500/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-cyan-400 font-bold mb-2">
                    <span>{m.year}</span>
                    <span className="text-slate-600">0{idx + 1}</span>
                  </div>
                  <div className="text-xs font-mono font-black text-white uppercase tracking-wider mb-2">
                    {m.phase}
                  </div>
                  <div className="text-sm font-bold text-slate-200 mb-2 font-display">
                    {m.title}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {m.description}
                  </p>
                </div>

                {m.activeVenture && (
                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>FOUNDED VENTURE</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 7. "WHAT I ACTUALLY WORK ON" INTERACTIVE GRID */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest mb-2">
              CORE CAPABILITIES
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-display uppercase">
              WHAT I ACTUALLY WORK ON<span className="text-cyan-400">.</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Hover over each capability to reveal specific operational deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {WHAT_I_ACTUALLY_WORK_ON.map((card) => (
              <div
                key={card.id}
                onMouseEnter={() => setActiveWorkCard(card.id)}
                onMouseLeave={() => setActiveWorkCard(null)}
                onClick={() => setActiveWorkCard(activeWorkCard === card.id ? null : card.id)}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer relative overflow-hidden group min-h-[160px] flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-lg font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-mono mt-1">
                    {card.subtitle}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-cyan-400 group-hover:text-cyan-300">
                    WHAT I DO →
                  </span>
                </div>

                {/* Animated Hover Reveal Overlay */}
                <AnimatePresence>
                  {activeWorkCard === card.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 bg-[#060a12] p-5 flex flex-col justify-between z-20 border border-cyan-500/60 rounded-2xl"
                    >
                      <div>
                        <div className="text-xs font-bold text-cyan-300 font-display mb-1.5">{card.title}</div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {card.whatIDoText}
                        </p>
                      </div>
                      <span className="text-[10px] font-mono text-cyan-400 font-semibold">Active Operational Domain</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* 8. WORK EXPERIENCE TIMELINE & CREDIBILITY */}
        <div className="mb-20">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/40 border border-slate-800">
            
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white font-display">
                  EXPERIENCE TIMELINE
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Key career milestones across freelancing, agency building, and travel operations.
                </p>
              </div>
              <span className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold">
                6+ YEARS OF BUILDING, LEARNING & EXECUTING
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-1">
                <span className="font-mono text-xs text-cyan-400 font-bold">2020</span>
                <div className="text-sm font-bold text-white">Freelancing Begins</div>
                <p className="text-xs text-slate-400">Independent digital marketing, web builds, and search optimization practice.</p>
              </div>
              <div className="space-y-1">
                <span className="font-mono text-xs text-cyan-400 font-bold">2021–2023</span>
                <div className="text-sm font-bold text-white">Client Work & Digital Projects</div>
                <p className="text-xs text-slate-400">Multi-channel performance campaigns, conversion landing pages, and lead workflows.</p>
              </div>
              <div className="space-y-1">
                <span className="font-mono text-xs text-cyan-400 font-bold">2024</span>
                <div className="text-sm font-bold text-white">Flowdigita LLC</div>
                <p className="text-xs text-slate-400">Founder & Owner — Established digital marketing & web development agency.</p>
              </div>
              <div className="space-y-1">
                <span className="font-mono text-xs text-cyan-400 font-bold">2026</span>
                <div className="text-sm font-bold text-white">Dreams Fly International</div>
                <p className="text-xs text-slate-400">Founder & Owner — Established travel, GDS ticketing, and visa advisory venture.</p>
              </div>
            </div>

            {/* Credibility Statement */}
            <div className="mt-10 pt-6 border-t border-slate-800/80 text-center max-w-2xl mx-auto space-y-2">
              <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                Real projects. Practical experience. Continuous learning.
              </div>
              <p className="text-sm text-slate-200 font-medium italic">
                “I believe experience comes from actually building, testing, solving and improving — not simply collecting titles.”
              </p>
            </div>

          </div>
        </div>

        {/* 9. FINAL WORK CTA */}
        <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-cyan-950/50 via-slate-900 to-blue-950/50 border border-cyan-500/40 text-center relative overflow-hidden shadow-2xl">
          
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h3 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight uppercase">
              HAVE A PROJECT IN MIND?
            </h3>
            <p className="text-sm sm:text-base text-slate-300">
              Let's turn an idea into something useful, measurable and real.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <MagneticButton strength={15}>
                <a
                  href="#contact"
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs sm:text-sm font-mono tracking-wide shadow-lg shadow-cyan-500/25 flex items-center gap-2 transition-all cursor-pointer"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </MagneticButton>

              <MagneticButton strength={12}>
                <a
                  href="#ventures"
                  className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer"
                >
                  <span>View My Ventures</span>
                  <ArrowUpRight className="w-4 h-4 text-cyan-400" />
                </a>
              </MagneticButton>

              <MagneticButton strength={10}>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>Email Jahan</span>
                </a>
              </MagneticButton>
            </div>
          </div>

        </div>

      </div>

      {/* Case Study Modal */}
      <WorkCaseStudyModal
        item={selectedCaseStudy}
        isOpen={Boolean(selectedCaseStudy)}
        onClose={() => setSelectedCaseStudy(null)}
      />

    </section>
  );
}

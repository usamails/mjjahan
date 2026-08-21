import { useState } from 'react';
import { motion } from 'motion/react';
import { History, ExternalLink, Sparkles, CheckCircle2, ChevronRight, Compass } from 'lucide-react';

const TIMELINE_STEPS = [
  {
    id: "2020",
    year: "2020",
    title: "Started Freelancing",
    tag: "The Genesis",
    description: "Began journey in the digital space through independent freelancing, mastering core foundations of digital marketing, search engine optimization, and direct client delivery.",
    role: "Independent Freelancer"
  },
  {
    id: "2021-2023",
    year: "2021–2023",
    title: "Freelancing & Client Projects",
    tag: "Expansion & Mastery",
    description: "Scaled digital execution across international marketing campaigns, advanced paid media (Google & Meta Ads), conversion optimization, and technical web projects.",
    role: "Digital Marketer & Specialist"
  },
  {
    id: "2024",
    year: "2024",
    title: "Founded Flowdigita LLC",
    tag: "Agency Inception",
    description: "Transitioned from individual freelancing to agency ownership. Established Flowdigita LLC to provide full-service digital marketing, SEO strategy, and custom web builds.",
    role: "Founder & Owner",
    website: "https://flowdigita.com/",
    highlight: true
  },
  {
    id: "2026",
    year: "2026",
    title: "Founded Dreams Fly International",
    tag: "New Frontier",
    description: "Expanded business horizons into international travel, specialized air ticketing across major Global Distribution Systems (Galileo, Amadeus, Sabre), visa consultation, and work permits.",
    role: "Founder & Owner",
    website: "https://dreamsfly.net/",
    highlight: true
  },
  {
    id: "next",
    year: "NEXT",
    title: "What's coming?",
    tag: "The Horizon",
    description: "Exploring new technology-driven ventures, cross-border digital commerce, and scalable business systems. Building, learning, and creating new opportunities.",
    role: "Continuous Evolution"
  }
];

export default function JourneyTimeline() {
  const [selectedMilestone, setSelectedMilestone] = useState(TIMELINE_STEPS[2]);

  return (
    <section id="journey" className="py-24 relative overflow-hidden bg-[#06080e] border-t border-slate-800/80">
      {/* Dynamic ambient glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

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
            <History className="w-3.5 h-3.5" />
            <span>Evolutionary Roadmap</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4 font-display"
          >
            FROM FREELANCER TO ENTREPRENEUR.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed"
          >
            A chronological timeline of milestones, businesses launched, and expanding digital capabilities.
          </motion.p>
        </div>

        {/* Timeline Path & Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Year Nav Buttons with Glowing Progress Line */}
          <div className="lg:col-span-5 relative space-y-4">
            {/* Glowing Vertical Line */}
            <div className="absolute left-6 top-6 bottom-6 w-[2px] bg-gradient-to-b from-cyan-500/40 via-blue-500/30 to-indigo-500/10 hidden sm:block" />

            {TIMELINE_STEPS.map((step, idx) => {
              const isSelected = selectedMilestone.id === step.id;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  onClick={() => setSelectedMilestone(step)}
                  className={`group relative pl-0 sm:pl-14 p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isSelected
                      ? 'bg-slate-900/90 border-cyan-500/60 shadow-lg shadow-cyan-500/10'
                      : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40'
                  }`}
                >
                  {/* Node Dot on Desktop */}
                  <div
                    className={`hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 items-center justify-center transition-all ${
                      isSelected
                        ? 'border-cyan-400 bg-cyan-500 shadow-md shadow-cyan-400/50 scale-125'
                        : 'border-slate-600 bg-slate-950 group-hover:border-cyan-400'
                    }`}
                  />

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                          isSelected
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                            : 'bg-slate-900 text-slate-400'
                        }`}>
                          {step.year}
                        </span>
                        <span className="text-[11px] font-medium text-slate-400 font-mono">
                          {step.tag}
                        </span>
                      </div>
                      
                      <h4 className={`text-base font-bold font-display mt-1.5 transition-colors ${
                        isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'
                      }`}>
                        {step.title}
                      </h4>
                    </div>

                    <ChevronRight className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-600 group-hover:text-slate-400'
                    }`} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Detailed Milestone Stage Display */}
          <div className="lg:col-span-7">
            <motion.div
              key={selectedMilestone.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl p-8 sm:p-10 bg-slate-900/85 border border-slate-800 shadow-2xl relative overflow-hidden"
            >
              {/* Top Meta */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-slate-800">
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                    MILESTONE YEAR
                  </span>
                  <span className="text-3xl sm:text-4xl font-black font-display text-white">
                    {selectedMilestone.year}
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">
                    ROLE & FOCUS
                  </span>
                  <span className="text-sm font-bold text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                    {selectedMilestone.role}
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl sm:text-3xl font-black text-white font-display mb-4">
                {selectedMilestone.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-8">
                {selectedMilestone.description}
              </p>

              {/* Link CTA if milestone is a venture */}
              {selectedMilestone.website && (
                <div className="mb-6">
                  <a
                    href={selectedMilestone.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 text-xs font-semibold border border-cyan-500/30 transition-all"
                  >
                    <span>Visit Official Platform ({selectedMilestone.website.replace('https://', '')})</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              {/* Final Statement Card */}
              <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span className="font-bold text-slate-200">
                    THE JOURNEY IS STILL BEING WRITTEN.
                  </span>
                </div>
                <span className="font-mono text-[11px] text-cyan-400 font-semibold">2020 → Present</span>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, Sparkles, ArrowRight, History, Layers, Compass, Mail, Code } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const TOPICS = [
  {
    id: 'journey',
    label: 'My Journey',
    icon: History,
    title: 'From 2020 Freelancing to 2026 Dual Venture Founder',
    answer: 'I started freelancing in 2020, scaled through diverse client campaigns (2021–2023), established Flowdigita LLC in 2024 to deliver full-scale digital agency services, and founded Dreams Fly International in 2026 to provide certified global travel & visa consultation.',
    targetSection: 'journey',
    actionText: 'View Interactive Timeline'
  },
  {
    id: 'skills',
    label: 'My Skills',
    icon: Code,
    title: 'Digital Systems, Paid Media & GDS Aviation',
    answer: 'My skill architecture spans technical SEO, Google Search & Display Ads, Meta Performance campaigns, custom responsive web development, and certified Global Distribution Systems (Galileo, Amadeus, Sabre) for international air ticketing.',
    targetSection: 'skills',
    actionText: 'Explore Skill Constellation'
  },
  {
    id: 'businesses',
    label: 'My Businesses',
    icon: Layers,
    title: 'Flowdigita LLC & Dreams Fly International',
    answer: 'Flowdigita LLC (flowdigita.com) is a full-service digital marketing agency for SEO, ads, and web builds. Dreams Fly International (dreamsfly.net) provides international flight bookings across major GDS platforms, student & tourist visa advisory, and work permit consulting.',
    targetSection: 'ventures',
    actionText: 'Inspect Live Ventures'
  },
  {
    id: 'expertise',
    label: 'My Expertise',
    icon: Compass,
    title: 'Digital Growth Strategy & International Mobility',
    answer: 'I specialize in helping brands increase organic search visibility and run profitable paid ad campaigns, while also assisting travelers and professionals with global airline itineraries and verified visa application procedures.',
    targetSection: 'two-worlds',
    actionText: 'Explore Two Worlds'
  },
  {
    id: 'contact',
    label: 'Work With Me',
    icon: Mail,
    title: 'Direct Client Inquiries & Collaborative Projects',
    answer: `You can reach out directly via email at ${PERSONAL_INFO.email} or on WhatsApp at ${PERSONAL_INFO.phoneFormatted}. I am always open to exploring high-impact marketing projects, agency partnerships, and business consultations.`,
    targetSection: 'contact',
    actionText: 'Start a Conversation'
  }
];

export default function AskJahan() {
  const [selectedTopic, setSelectedTopic] = useState(TOPICS[0]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="ask-jahan" className="py-24 relative overflow-hidden bg-[#06080e] border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Interactive Discovery</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display mb-3"
          >
            WANT TO KNOW MORE?
          </motion.h2>

          <p className="text-sm sm:text-base text-slate-300">
            What would you like to explore about my background, businesses, or expertise?
          </p>
        </div>

        {/* Quick Question Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {TOPICS.map((topic) => {
            const Icon = topic.icon;
            const isSelected = selectedTopic.id === topic.id;
            return (
              <button
                key={topic.id}
                onClick={() => setSelectedTopic(topic)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20 scale-105'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{topic.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Card Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTopic.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl p-8 sm:p-10 bg-slate-900/90 border border-slate-800 shadow-2xl relative overflow-hidden"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{selectedTopic.label} Overview</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-4">
              {selectedTopic.title}
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-8">
              {selectedTopic.answer}
            </p>

            <button
              onClick={() => scrollTo(selectedTopic.targetSection)}
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-bold border border-slate-700 hover:border-cyan-500/40 transition-all flex items-center gap-2 cursor-pointer group"
            >
              <span>{selectedTopic.actionText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

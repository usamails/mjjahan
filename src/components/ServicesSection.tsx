import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  Search, 
  Target, 
  Share2, 
  Users, 
  Code2, 
  LineChart, 
  Bot, 
  Plane, 
  FileCheck2, 
  Briefcase, 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';

interface ServicesSectionProps {
  onSelectService: (slug: string) => void;
  onOpenConsultationModal: () => void;
}

const SERVICE_ICONS: Record<string, any> = {
  'digital-marketing': TrendingUp,
  'seo': Search,
  'google-ads': Target,
  'meta-ads': Share2,
  'social-media-marketing': Users,
  'lead-generation': LineChart,
  'web-development': Code2,
  'business-growth': LineChart,
  'ai-digital-marketing': Bot,
  'air-ticketing': Plane,
  'visa-consultation': FileCheck2,
  'work-permit': Briefcase,
};

export default function ServicesSection({ onSelectService, onOpenConsultationModal }: ServicesSectionProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'digital' | 'travel'>('all');

  const servicesList = Object.values(SERVICES_DATA);

  const filteredServices = activeTab === 'all' 
    ? servicesList 
    : servicesList.filter(s => s.category === activeTab);

  return (
    <section id="services" className="py-24 bg-[#06080d] relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SERVICES & SPECIALIZATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white">
              Data-Driven Growth & Travel Expertise
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3">
              Explore dedicated services designed to scale your business traffic, build compounding search authority, and manage international travel operations.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md self-start md:self-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-cyan-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All (12)
            </button>
            <button
              onClick={() => setActiveTab('digital')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'digital'
                  ? 'bg-cyan-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Digital & Marketing (9)
            </button>
            <button
              onClick={() => setActiveTab('travel')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'travel'
                  ? 'bg-cyan-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Travel & Aviation (3)
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const Icon = SERVICE_ICONS[service.id] || Sparkles;
            return (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => onSelectService(service.slug)}
                className="group p-6 sm:p-7 rounded-2xl bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-lg hover:shadow-cyan-500/5 relative overflow-hidden"
              >
                {/* Top Subtle Glow */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-cyan-500/5 group-hover:bg-cyan-500/10 rounded-full blur-2xl transition-all" />

                <div>
                  {/* Category Pill & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-cyan-500/50 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-slate-950/80 border border-slate-800 text-[10px] font-mono text-slate-400 uppercase">
                      {service.category === 'digital' ? 'Digital' : 'Travel'}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {service.h1.replace(' in Bangladesh', '').replace(' Services', '')}
                  </h3>

                  {/* Tagline */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5 line-clamp-3">
                    {service.tagline}
                  </p>

                  {/* Keyword preview */}
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-400/80 mb-6">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="truncate">{service.primaryKeyword}</span>
                  </div>
                </div>

                {/* View Details Link */}
                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-bold text-slate-300 group-hover:text-cyan-400 transition-colors">
                  <span>Explore Service Page</span>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner CTA */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold font-display text-white mb-1">
              Need a Custom Growth Strategy or Consulting Package?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Schedule a 1-on-1 discovery call to discuss your business KPIs, target audience, and roadmap.
            </p>
          </div>
          <button
            onClick={onOpenConsultationModal}
            className="px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs tracking-wide shrink-0 transition-all flex items-center gap-2 shadow-md cursor-pointer"
          >
            <span>Let's Talk Business</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}

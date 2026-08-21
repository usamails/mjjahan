import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Calendar, GraduationCap, Building2, Sparkles, Quote, Mail, Phone } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';

export default function BehindTheBuilder() {
  const [imageError, setImageError] = useState(false);

  const portraitSrc = imageError
    ? "https://drive.google.com/uc?export=view&id=1SrT1UbKeZFWRTKHa_XMasrYH3ebyoHr6"
    : (PERSONAL_INFO.profileImage || "https://lh3.googleusercontent.com/d/1SrT1UbKeZFWRTKHa_XMasrYH3ebyoHr6");

  return (
    <section id="behind-the-builder" className="py-24 relative overflow-hidden bg-[#07090f] border-t border-slate-800/80">
      {/* Subtle Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Large Editorial Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md rounded-3xl p-3 bg-gradient-to-b from-slate-800/80 to-slate-950/90 border border-slate-700/60 shadow-2xl gallery-card">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-950">
                <img
                  src={portraitSrc}
                  alt="Jahan Ali — The Builder Behind The Brand"
                  className="w-full h-full object-cover object-top"
                  onError={() => setImageError(true)}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Subtle bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700/60 flex items-center justify-between text-xs">
                  <span className="font-bold text-white">Jahan Ali</span>
                  <span className="font-mono text-cyan-400">Builder & Founder</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Key Facts & Personal Identity */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-8"
          >
            <div>
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-2">
                PERSONAL IDENTITY & ETHOS
              </span>
              
              <h2 className="text-3xl sm:text-5xl font-black text-white font-display mb-4">
                BEHIND THE BUILDER
              </h2>

              <p className="text-base text-slate-300 leading-relaxed font-normal">
                Combining grounded execution with ambitious long-term venture building. From writing copy and running search ad campaigns in 2020 to leading full-service agency projects and international travel consultancies today.
              </p>
            </div>

            {/* 4 Identity Grid Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Based in */}
              <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase font-bold">Based in</span>
                  <div className="text-sm font-bold text-white mt-0.5">Rohanpur, Bangladesh</div>
                  <span className="text-xs text-slate-400">Gomastapur, Chapai Nawabganj</span>
                </div>
              </div>

              {/* Started */}
              <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase font-bold">Started</span>
                  <div className="text-sm font-bold text-white mt-0.5">Freelancing in 2020</div>
                  <span className="text-xs text-slate-400">5+ years of digital progression</span>
                </div>
              </div>

              {/* Currently */}
              <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase font-bold">Currently</span>
                  <div className="text-sm font-bold text-white mt-0.5">MBA Student (Running)</div>
                  <span className="text-xs text-slate-400">University of Dhaka</span>
                </div>
              </div>

              {/* Building */}
              <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase font-bold">Building</span>
                  <div className="text-sm font-bold text-white mt-0.5">Digital & Travel Ventures</div>
                  <span className="text-xs text-slate-400">Flowdigita LLC & Dreams Fly</span>
                </div>
              </div>

            </div>

            {/* Closing Signature Ethos Quote */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-cyan-500/30 relative">
              <Quote className="w-6 h-6 text-cyan-400/40 mb-2" />
              <p className="text-lg font-bold text-white font-display">
                “Always learning. Always experimenting. Always building.”
              </p>
              <span className="text-xs font-mono text-cyan-400 mt-1 block">
                — Jahan Ali
              </span>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

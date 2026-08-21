import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowDown, Sparkles, CheckCircle2, ShieldCheck, Mail, Compass } from 'lucide-react';
import { PERSONAL_INFO, HERO_FLOATING_TAGS } from '../data/portfolioData';
import MagneticButton from './MagneticButton';

interface HeroProps {
  onExploreJourney: () => void;
  onWorkTogether: () => void;
}

const ROTATING_TITLES = [
  "DIGITAL ENTREPRENEUR",
  "DIGITAL MARKETER",
  "AGENCY OWNER",
  "BUSINESS BUILDER",
  "TRAVEL & VISA CONSULTANT"
];

export default function Hero({ onExploreJourney, onWorkTogether }: HeroProps) {
  const [imageError, setImageError] = useState(false);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [titleIndex, setTitleIndex] = useState(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  // Rotating title timer (clean vertical slide/morph every 2.8 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % ROTATING_TITLES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Desktop mouse parallax handling
  useEffect(() => {
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (hasTouch || prefersReducedMotion) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const x = (e.clientX - centerX) / (rect.width / 2);
      const y = (e.clientY - centerY) / (rect.height / 2);

      setMouseOffset({
        x: Math.max(-1, Math.min(1, x)),
        y: Math.max(-1, Math.min(1, y))
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const heroImageSrc = imageError
    ? (PERSONAL_INFO.profileImage || "https://lh3.googleusercontent.com/d/1SrT1UbKeZFWRTKHa_XMasrYH3ebyoHr6")
    : "/avatar.jpg";

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-[95vh] pt-28 pb-20 flex items-center justify-center overflow-hidden bg-[#06080d]"
    >
      {/* Background Interactive Glow & Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Cursor-reacting Radial Glow */}
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-cyan-500/10 via-blue-600/10 to-indigo-900/10 rounded-full blur-3xl"
          animate={!isTouchDevice ? {
            x: mouseOffset.x * 30,
            y: mouseOffset.y * 30
          } : {}}
          transition={{ type: 'spring', damping: 40, stiffness: 80 }}
        />

        {/* Dynamic Grid Background with slight parallax */}
        <motion.div
          className="absolute inset-0 grid-background opacity-70"
          animate={!isTouchDevice ? {
            x: mouseOffset.x * -8,
            y: mouseOffset.y * -8
          } : {}}
          transition={{ type: 'spring', damping: 50, stiffness: 60 }}
        />

        {/* Ambient Subtle Particle Orbs */}
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-2xl animate-pulse-subtle" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Cinematic Identity & Typography */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold mb-6 shadow-sm shadow-cyan-500/10 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>BUILDING • LEARNING • GROWING</span>
            </motion.div>

            {/* Giant Name Display */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-tight text-white leading-[1.05] mb-2">
              JAHAN ALI
            </h1>

            {/* Rotating/Morphing Titles Bar */}
            <div className="h-10 sm:h-12 overflow-hidden flex items-center mb-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={ROTATING_TITLES[titleIndex]}
                  initial={{ y: 28, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -28, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="text-lg sm:text-2xl md:text-3xl font-extrabold font-display bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent tracking-wide"
                >
                  {ROTATING_TITLES[titleIndex]}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-xl font-normal leading-relaxed mb-8">
              I build digital businesses, brands and growth systems while constantly learning, experimenting and creating new opportunities.
            </p>

            {/* CTAs with Magnetic Effect */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <MagneticButton strength={15}>
                <button
                  onClick={onWorkTogether}
                  data-cursor-label="TALK"
                  className="px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/25 transition-all flex items-center gap-2.5 cursor-pointer group"
                >
                  <span>Let's Work Together</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </MagneticButton>

              <MagneticButton strength={12}>
                <button
                  onClick={onExploreJourney}
                  className="px-6 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-700/80 hover:border-slate-600 transition-all flex items-center gap-2 cursor-pointer backdrop-blur-sm"
                >
                  <span>Explore My Journey</span>
                  <ArrowDown className="w-4 h-4 text-cyan-400" />
                </button>
              </MagneticButton>
            </div>

            {/* Key Pillars Highlights */}
            <div className="mt-10 pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-6 w-full max-w-lg text-xs">
              <div>
                <span className="block text-slate-400 font-mono">CORE FOCUS</span>
                <span className="font-semibold text-white">Digital & Growth</span>
              </div>
              <div>
                <span className="block text-slate-400 font-mono">VENTURES</span>
                <span className="font-semibold text-white">Flowdigita & Dreams Fly</span>
              </div>
              <div>
                <span className="block text-slate-400 font-mono">LOCATION</span>
                <span className="font-semibold text-white">Bangladesh (GMT+6)</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Editorial Portrait with Interactive Parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Portrait Frame Container */}
            <motion.div
              className="relative w-full max-w-sm sm:max-w-md"
              animate={!isTouchDevice ? {
                x: mouseOffset.x * 5,
                y: mouseOffset.y * 5,
              } : {}}
              transition={{ type: 'spring', damping: 35, stiffness: 120 }}
            >
              {/* Outer Glass Card */}
              <div className="relative rounded-3xl p-3 bg-gradient-to-b from-slate-800/70 via-slate-900/85 to-slate-950/90 border border-slate-700/60 shadow-2xl shadow-black/80 backdrop-blur-xl">
                
                {/* Image Stage */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-950 flex items-center justify-center group gallery-card">
                  
                  {/* Subtle Corner Markers */}
                  <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-cyan-400/80 z-20" />
                  <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-cyan-400/80 z-20" />
                  <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-cyan-400/80 z-20" />
                  <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-cyan-400/80 z-20" />

                  <img
                    src={heroImageSrc}
                    alt="Jahan Ali — Digital Entrepreneur & Growth Strategist"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    onError={() => setImageError(true)}
                    referrerPolicy="no-referrer"
                    loading="eager"
                  />

                  {/* Gradient Overlay for Editorial Depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080a10] via-transparent to-transparent opacity-85" />

                  {/* Lower Identity Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-700/60 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white tracking-wide">{PERSONAL_INFO.name}</div>
                      <div className="text-[11px] text-cyan-400 font-medium">{PERSONAL_INFO.primaryTitle}</div>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  </div>
                </div>

                {/* Floating Interactive Skill Tags with varying parallax speeds */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5 justify-center">
                  {HERO_FLOATING_TAGS.map((tag, idx) => {
                    const parallaxSpeed = ((idx % 3) + 1) * 3;
                    return (
                      <motion.button
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + idx * 0.04 }}
                        style={!isTouchDevice ? {
                          transform: `translate(${mouseOffset.x * parallaxSpeed}px, ${mouseOffset.y * parallaxSpeed}px)`
                        } : {}}
                        onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all duration-200 cursor-pointer ${
                          activeTag === tag
                            ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/30'
                            : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300'
                        }`}
                      >
                        {tag}
                      </motion.button>
                    );
                  })}
                </div>

              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

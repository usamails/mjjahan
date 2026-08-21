import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

const SECTIONS = [
  { id: 'home', title: '01 / HERO', story: 'LEARN' },
  { id: 'about', title: '02 / STORY', story: 'BUILD' },
  { id: 'journey', title: '03 / TIMELINE', story: 'LAUNCH' },
  { id: 'two-worlds', title: '04 / TWO WORLDS', story: 'GROW' },
  { id: 'ventures', title: '05 / VENTURES', story: 'EXPLORE' },
  { id: 'skills', title: '06 / SKILL DNA', story: 'BUILD' },
  { id: 'currently-building', title: '07 / ACTIVE', story: 'LAUNCH' },
  { id: 'behind-the-builder', title: '08 / BUILDER', story: 'GROW' },
  { id: 'education', title: '09 / ACADEMIC', story: 'LEARN' },
  { id: 'work', title: '10 / PORTFOLIO', story: 'EXPLORE' },
  { id: 'ask-jahan', title: '11 / DISCOVER', story: 'LEARN' },
  { id: 'gallery', title: '12 / GALLERY', story: 'EXPLORE' },
  { id: 'whats-next', title: '13 / NEXT', story: 'REPEAT' },
  { id: 'contact', title: '14 / CONTACT', story: 'CONNECT' },
];

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeSection, setActiveSection] = useState(SECTIONS[0]);
  const [showIndicator, setShowIndicator] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      setShowIndicator(window.scrollY > 300);

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(SECTIONS[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Thin Progress Line */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-600 origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      {/* Floating Minimalist Section & Story Index (Desktop only) */}
      <div className={`fixed right-6 bottom-8 z-40 hidden xl:flex items-center gap-3 transition-opacity duration-300 pointer-events-none ${showIndicator ? 'opacity-100' : 'opacity-0'}`}>
        {/* Storytelling stage badge */}
        <span className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-[10px] font-mono text-cyan-400 font-bold backdrop-blur-md">
          STAGE: {activeSection.story}
        </span>

        {/* Section Counter */}
        <span className="px-3 py-1 rounded-md bg-slate-950/90 border border-cyan-500/30 text-[11px] font-mono font-semibold text-slate-300 backdrop-blur-md shadow-lg shadow-black/60">
          {activeSection.title}
        </span>
      </div>
    </>
  );
}

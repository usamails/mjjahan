import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Home, Sparkles, Briefcase, ArrowLeft } from 'lucide-react';
import MagneticButton from './MagneticButton';

interface NotFoundPageProps {
  onNavigateHome: () => void;
  onNavigateToServices?: () => void;
  onNavigateToWork?: () => void;
}

export default function NotFoundPage({
  onNavigateHome,
  onNavigateToServices,
  onNavigateToWork
}: NotFoundPageProps) {
  useEffect(() => {
    document.title = "404 - Page Not Found | Jahan Ali";

    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    const previousRobots = robotsMeta.getAttribute('content') || 'index, follow';
    robotsMeta.setAttribute('content', 'noindex, follow');

    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => {
      document.title = "Jahan Ali | Digital Entrepreneur, Marketer & Agency Owner";
      if (robotsMeta) {
        robotsMeta.setAttribute('content', previousRobots);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#06080d] text-slate-100 flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-mono mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          ERROR 404
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent"
        >
          LOST IN THE DIGITAL WORLD?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-400 max-w-lg mx-auto mb-10 leading-relaxed"
        >
          The page you're looking for doesn't exist or may have moved. Let's get you back on track.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton>
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all hover:scale-105"
            >
              <Home className="w-4 h-4" />
              Back Home
            </button>
          </MagneticButton>

          <button
            onClick={onNavigateToServices ? onNavigateToServices : onNavigateHome}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            Explore Services
          </button>

          <button
            onClick={onNavigateToWork ? onNavigateToWork : onNavigateHome}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all"
          >
            <Briefcase className="w-4 h-4 text-blue-400" />
            View My Work
          </button>
        </motion.div>
      </div>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Terminal } from 'lucide-react';

export default function JahanModeEasterEgg() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input or textarea
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (e.key === 'j' || e.key === 'J') {
        setActive(true);
        setTimeout(() => setActive(false), 3500);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-6 left-6 z-50 p-4 rounded-2xl bg-slate-900/95 border border-cyan-400/60 shadow-2xl shadow-cyan-500/20 text-white backdrop-blur-xl max-w-xs"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-mono font-bold text-xs">
              J
            </div>
            <div>
              <div className="text-xs font-bold font-display text-white flex items-center gap-1.5">
                <span>JAHAN MODE ACTIVE</span>
                <Sparkles className="w-3 h-3 text-cyan-400 animate-spin" />
              </div>
              <p className="text-[11px] text-cyan-300/90 mt-0.5">
                “Building, learning & growing — one venture at a time.”
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

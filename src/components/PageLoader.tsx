import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PageLoaderProps {
  onLoaded?: () => void;
}

export default function PageLoader({ onLoaded }: PageLoaderProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    try {
      if (sessionStorage.getItem('jahan_loaded')) {
        setShow(false);
        if (onLoaded) onLoaded();
        return;
      }
    } catch {
      // Ignore storage restrictions
    }

    const timer = setTimeout(() => {
      try {
        sessionStorage.setItem('jahan_loaded', 'true');
      } catch {
        // Ignore storage restrictions
      }
      setShow(false);
      if (onLoaded) onLoaded();
    }, 600);

    return () => clearTimeout(timer);
  }, [onLoaded]);

  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="page-loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#05070c] text-white pointer-events-none"
      >
        <div className="flex flex-col items-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white mb-2"
          >
            JAHAN ALI
          </motion.div>
          <div className="text-xs sm:text-sm font-mono text-cyan-400 tracking-widest uppercase font-semibold">
            DIGITAL ENTREPRENEUR & MARKETER
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

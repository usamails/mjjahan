import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'button' | 'project' | 'image' | 'link'>('default');
  const [cursorText, setCursorText] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Disable on touch devices or reduced motion
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (hasTouch || prefersReducedMotion) {
      setIsTouchDevice(true);
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const customLabel = target.closest('[data-cursor-label]')?.getAttribute('data-cursor-label');
      const isProject = target.closest('[data-cursor="project"]') || target.closest('.project-card');
      const isGalleryImg = target.closest('[data-cursor="image"]') || target.closest('.gallery-card') || target.tagName === 'IMG';
      const isBtn = target.tagName === 'BUTTON' || target.closest('button') || target.getAttribute('role') === 'button';
      const isLink = target.tagName === 'A' || target.closest('a');

      if (customLabel) {
        setCursorType('button');
        setCursorText(customLabel);
      } else if (isProject) {
        setCursorType('project');
        setCursorText('VIEW');
      } else if (isGalleryImg) {
        setCursorType('image');
        setCursorText('EXPLORE');
      } else if (isBtn) {
        setCursorType('button');
        setCursorText('');
      } else if (isLink) {
        setCursorType('link');
        setCursorText('');
      } else {
        setCursorType('default');
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  const isExpanded = cursorType !== 'default';
  const hasLabel = cursorText !== '';

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Central crisp dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-cyan-400 mix-blend-screen"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: hasLabel ? 0 : isExpanded ? 1.4 : 1,
          opacity: hasLabel ? 0 : 1
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 450, mass: 0.1 }}
        style={{ width: '6px', height: '6px' }}
      />

      {/* Outer contextual aura & badge */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full flex items-center justify-center font-mono font-bold text-[10px] tracking-wider transition-colors duration-200 backdrop-blur-[2px] ${
          cursorType === 'project'
            ? 'bg-cyan-500/90 text-slate-950 border border-cyan-300 shadow-lg shadow-cyan-500/30'
            : cursorType === 'image'
            ? 'bg-blue-600/90 text-white border border-blue-400 shadow-lg shadow-blue-500/30'
            : cursorType === 'button'
            ? 'bg-cyan-500/10 border-cyan-400/80'
            : cursorType === 'link'
            ? 'bg-cyan-500/10 border-cyan-400/50'
            : 'border-cyan-400/30 bg-cyan-500/5'
        } border`}
        animate={{
          x: mousePosition.x - (hasLabel ? 32 : isExpanded ? 24 : 16),
          y: mousePosition.y - (hasLabel ? 32 : isExpanded ? 24 : 16),
          width: hasLabel ? 64 : isExpanded ? 48 : 32,
          height: hasLabel ? 64 : isExpanded ? 48 : 32,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 240, mass: 0.15 }}
      >
        <AnimatePresence mode="wait">
          {hasLabel && (
            <motion.span
              key={cursorText}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
            >
              {cursorText}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

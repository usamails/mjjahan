import { useState } from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AnimatedLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  onClick?: () => void;
}

export default function AnimatedLogo({ 
  size = 'md', 
  showText = true, 
  onClick 
}: AnimatedLogoProps) {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 700);
    if (onClick) onClick();
  };

  // Dimensions based on size
  const avatarSizeClasses = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-14 h-14'
  }[size];

  const svgDimension = {
    sm: 44,
    md: 52,
    lg: 64
  }[size];

  const profilePhotoUrl = imageError
    ? (PERSONAL_INFO.profileImage || 'https://lh3.googleusercontent.com/d/1SrT1UbKeZFWRTKHa_XMasrYH3ebyoHr6')
    : '/avatar.jpg';

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex items-center gap-3 cursor-pointer group select-none relative"
      role="button"
      tabIndex={0}
      aria-label="Jahan Ali Logo - Back to top"
    >
      {/* Animated Avatar Container */}
      <div className="relative flex items-center justify-center">
        
        {/* Animated Sketch Rings SVG Background */}
        <motion.svg
          width={svgDimension}
          height={svgDimension}
          viewBox="0 0 56 56"
          className="absolute inset-0 -m-1 pointer-events-none z-10 overflow-visible"
          animate={{
            rotate: isHovered ? [0, 360] : [0, 360],
          }}
          transition={{
            duration: isHovered ? 4 : 12,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <defs>
            <linearGradient id="logoSketchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>

          {/* Outer Hand-drawn Sketch Dash Ring */}
          <circle
            cx="28"
            cy="28"
            r="25"
            fill="none"
            stroke="url(#logoSketchGrad)"
            strokeWidth="1.8"
            strokeDasharray="6 4 2 4"
            strokeLinecap="round"
            className="transition-all duration-300 group-hover:stroke-cyan-300"
          />

          {/* Inner Accent Dashes */}
          <motion.circle
            cx="28"
            cy="28"
            r="22"
            fill="none"
            stroke="url(#glowGrad)"
            strokeWidth="1"
            strokeDasharray="14 10"
            strokeLinecap="round"
            opacity={isHovered ? 0.9 : 0.4}
            animate={{
              rotate: [360, 0]
            }}
            transition={{
              duration: isHovered ? 3 : 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.svg>

        {/* Ambient Glow Aura */}
        <motion.div
          animate={isHovered ? { scale: 1.25, opacity: 0.7 } : { scale: 1, opacity: 0.35 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 via-sky-400 to-blue-600 blur-md pointer-events-none"
        />

        {/* Main Photo Circular Frame */}
        <motion.div
          animate={isClicked ? { scale: [1, 0.88, 1.15, 1], rotate: [0, -10, 10, 0] } : isHovered ? { scale: 1.06 } : { scale: 1 }}
          transition={{ duration: 0.4 }}
          className={`${avatarSizeClasses} rounded-full relative z-20 overflow-hidden bg-slate-900 border-2 border-cyan-400/80 shadow-md shadow-cyan-500/20 group-hover:border-cyan-300 group-hover:shadow-cyan-400/40 transition-all duration-300`}
        >
          <img
            src={profilePhotoUrl}
            alt="Jahan Ali"
            className="w-full h-full object-cover scale-[1.7] object-[50%_12%] transition-transform duration-500 group-hover:scale-[1.85]"
            onError={() => setImageError(true)}
            referrerPolicy="no-referrer"
            loading="eager"
          />
          
          {/* Subtle Sketch / Scanline Glow overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-cyan-500/10 pointer-events-none" />
        </motion.div>

        {/* Live Availability Green Dot */}
        <span className="absolute -bottom-0.5 -right-0.5 z-30 flex h-3 w-3 items-center justify-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 border border-slate-950" />
        </span>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="font-display font-black text-lg sm:text-xl tracking-tight text-white group-hover:text-cyan-300 transition-colors duration-200">
              JAHAN<span className="text-cyan-400 inline-block animate-pulse">.</span>
            </span>
          </div>
          <span className="text-[9px] font-mono tracking-widest uppercase text-cyan-400/75 group-hover:text-cyan-300 transition-colors font-semibold -mt-1 hidden sm:block">
            Growth & Ventures
          </span>
        </div>
      )}
    </div>
  );
}

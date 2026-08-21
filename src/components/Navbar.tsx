import { useState, useEffect, useRef, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  MessageSquare, 
  ChevronDown, 
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
  Sparkles,
  ArrowRight,
  Home,
  Layers,
  HelpCircle,
  ShieldCheck,
  Tag
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SERVICES_DATA } from '../data/servicesData';
import MagneticButton from './MagneticButton';
import AnimatedLogo from './AnimatedLogo';

export interface NavbarProps {
  onOpenConsultationModal: () => void;
  onSelectService?: (slug: string) => void;
  onNavigateHome?: () => void;
  isServicePage?: boolean;
  activeServiceSlug?: string;
}

const DIGITAL_SERVICES = [
  { slug: 'digital-marketing', name: 'Digital Marketing', desc: 'Full-funnel growth & strategy', icon: TrendingUp },
  { slug: 'seo', name: 'SEO Services', desc: 'Google rankings & organic search', icon: Search },
  { slug: 'google-ads', name: 'Google Ads & PPC', desc: 'Search, PMax & Shopping Ads', icon: Target },
  { slug: 'meta-ads', name: 'Facebook & Meta Ads', desc: 'Paid social acquisition funnels', icon: Share2 },
  { slug: 'social-media-marketing', name: 'Social Media Marketing', desc: 'Brand authority & engagement', icon: Users },
  { slug: 'lead-generation', name: 'Lead Generation', desc: 'High-ticket B2B & consumer leads', icon: LineChart },
  { slug: 'web-development', name: 'Web Development', desc: 'Fast, responsive landing pages', icon: Code2 },
  { slug: 'business-growth', name: 'Business Growth', desc: 'Consulting & customer acquisition', icon: LineChart },
  { slug: 'ai-digital-marketing', name: 'AI Marketing & Tools', desc: 'Workflow automation & LLMs', icon: Bot },
];

const TRAVEL_SERVICES = [
  { slug: 'air-ticketing', name: 'Air Ticketing & GDS', desc: 'Amadeus, Galileo & Sabre booking', icon: Plane },
  { slug: 'visa-consultation', name: 'Visa Consultation', desc: 'Embassy file prep & guidance', icon: FileCheck2 },
  { slug: 'work-permit', name: 'Work Permit Advisory', desc: 'Overseas employment protocols', icon: Briefcase },
];

interface NavLinkItem {
  name: string;
  href: string;
  hasSubmenu?: boolean;
  isHomeAction?: boolean;
  highlight?: boolean;
}

const HOMEPAGE_LINKS: NavLinkItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services', hasSubmenu: true },
  { name: 'About', href: '#about' },
  { name: 'Journey', href: '#journey' },
  { name: 'Two Worlds', href: '#two-worlds' },
  { name: 'Ventures', href: '#ventures' },
  { name: 'Skill DNA', href: '#skills' },
  { name: 'Work', href: '#work' },
  { name: 'Contact', href: '#contact' },
];

const SERVICE_PAGE_LINKS: NavLinkItem[] = [
  { name: 'Home', href: '#home', isHomeAction: true },
  { name: 'All Services', href: '#services', hasSubmenu: true },
  { name: 'Overview', href: '#overview' },
  { name: 'Process', href: '#process' },
  { name: 'Pricing', href: '#pricing', highlight: true },
  { name: 'Why Jahan', href: '#why-choose' },
  { name: 'FAQs', href: '#faqs' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({
  onOpenConsultationModal,
  onSelectService,
  onNavigateHome,
  isServicePage = false,
  activeServiceSlug,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [logoPulse, setLogoPulse] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: globalThis.MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 250);
  };

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string, isHomeAction?: boolean) => {
    e.preventDefault();
    setIsServicesDropdownOpen(false);
    setIsMobileMenuOpen(false);

    if (isHomeAction || href === '#home' || href === '/') {
      if (onNavigateHome) {
        onNavigateHome();
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (window.location.hash) {
          window.history.replaceState(null, '', window.location.pathname);
        }
      }
      return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', href);
    } else if (onNavigateHome) {
      // If the section doesn't exist on this page, go home and scroll there
      onNavigateHome();
      setTimeout(() => {
        const homeElement = document.getElementById(targetId);
        if (homeElement) homeElement.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  const handleServiceClick = (slug: string) => {
    setIsServicesDropdownOpen(false);
    setIsMobileMenuOpen(false);
    if (onSelectService) {
      onSelectService(slug);
    } else {
      const service = SERVICES_DATA[slug];
      if (service) {
        window.location.href = service.url;
      }
    }
  };

  const handleLogoClick = () => {
    setLogoPulse(true);
    setTimeout(() => setLogoPulse(false), 1000);
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
    }
  };

  const currentNavLinks = isServicePage ? SERVICE_PAGE_LINKS : HOMEPAGE_LINKS;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#05070c]/90 backdrop-blur-xl border-b border-slate-800/80 shadow-xl shadow-black/30'
            : 'py-5 bg-[#05070c]/60 backdrop-blur-md border-b border-slate-800/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo with Photo & Animated Sketch Effect */}
          <div className="flex items-center gap-3">
            <AnimatedLogo
              size="md"
              onClick={handleLogoClick}
            />
            {isServicePage && (
              <span className="hidden xl:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-mono text-cyan-400">
                <span>SERVICE HUB</span>
              </span>
            )}
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800/80 backdrop-blur-xl relative">
            {currentNavLinks.map((link) => {
              if (link.hasSubmenu) {
                return (
                  <div
                    key={link.name}
                    ref={dropdownRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="relative"
                  >
                    <button
                      onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-1 cursor-pointer ${
                        isServicesDropdownOpen
                          ? 'text-white bg-slate-800 text-cyan-400'
                          : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                      }`}
                    >
                      <Layers className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isServicesDropdownOpen ? 'rotate-180 text-cyan-400' : 'text-slate-400'
                        }`}
                      />
                    </button>

                    {/* Services Submenu Mega Dropdown */}
                    <AnimatePresence>
                      {isServicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[720px] p-6 rounded-2xl bg-[#080c14]/95 border border-slate-700/80 shadow-2xl backdrop-blur-2xl z-50 overflow-hidden"
                        >
                          {/* Top Ambient Glow */}
                          <div className="absolute top-0 left-1/4 w-72 h-36 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

                          <div className="grid grid-cols-12 gap-6 relative z-10">
                            
                            {/* Column 1: Digital & Growth (9 services) */}
                            <div className="col-span-8 space-y-3">
                              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                                <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                                  <Sparkles className="w-3.5 h-3.5" />
                                  <span>Digital & Marketing Services (9)</span>
                                </div>
                                <span className="text-[10px] font-mono text-slate-500">Flowdigita LLC</span>
                              </div>

                              <div className="grid grid-cols-2 gap-2">
                                {DIGITAL_SERVICES.map((s) => {
                                  const Icon = s.icon;
                                  const isActive = activeServiceSlug === s.slug;
                                  return (
                                    <div
                                      key={s.slug}
                                      onClick={() => handleServiceClick(s.slug)}
                                      className={`p-2.5 rounded-xl border transition-all cursor-pointer group flex items-start gap-2.5 ${
                                        isActive
                                          ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-300'
                                          : 'hover:bg-slate-900/80 border-transparent hover:border-slate-800'
                                      }`}
                                    >
                                      <div className={`w-7 h-7 rounded-lg border flex items-center justify-center shrink-0 mt-0.5 ${
                                        isActive
                                          ? 'bg-cyan-500 text-slate-950 border-cyan-400'
                                          : 'bg-slate-900 border-slate-800 group-hover:border-cyan-500/50 text-cyan-400'
                                      }`}>
                                        <Icon className="w-3.5 h-3.5" />
                                      </div>
                                      <div className="min-w-0">
                                        <div className="text-xs font-bold text-slate-200 group-hover:text-cyan-300 transition-colors truncate flex items-center gap-1.5">
                                          <span>{s.name}</span>
                                          {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />}
                                        </div>
                                        <div className="text-[10px] text-slate-500 truncate">
                                          {s.desc}
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>

                            {/* Column 2: Travel & Aviation (3 services) */}
                            <div className="col-span-4 space-y-3 pl-3 border-l border-slate-800/80 flex flex-col justify-between">
                              <div className="space-y-3">
                                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                                  <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                                    Travel & Aviation (3)
                                  </span>
                                  <span className="text-[10px] font-mono text-slate-500">Dreams Fly</span>
                                </div>

                                <div className="space-y-2">
                                  {TRAVEL_SERVICES.map((s) => {
                                    const Icon = s.icon;
                                    const isActive = activeServiceSlug === s.slug;
                                    return (
                                      <div
                                        key={s.slug}
                                        onClick={() => handleServiceClick(s.slug)}
                                        className={`p-2.5 rounded-xl border transition-all cursor-pointer group flex items-start gap-2.5 ${
                                          isActive
                                            ? 'bg-blue-500/10 border-blue-500/40 text-blue-300'
                                            : 'hover:bg-slate-900/80 border-transparent hover:border-slate-800'
                                        }`}
                                      >
                                        <div className={`w-7 h-7 rounded-lg border flex items-center justify-center shrink-0 mt-0.5 ${
                                          isActive
                                            ? 'bg-blue-500 text-slate-950 border-blue-400'
                                            : 'bg-slate-900 border-slate-800 group-hover:border-blue-500/50 text-blue-400'
                                        }`}>
                                          <Icon className="w-3.5 h-3.5" />
                                        </div>
                                        <div className="min-w-0">
                                          <div className="text-xs font-bold text-slate-200 group-hover:text-blue-300 transition-colors truncate flex items-center gap-1.5">
                                            <span>{s.name}</span>
                                            {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />}
                                          </div>
                                          <div className="text-[10px] text-slate-500 truncate">
                                            {s.desc}
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>

                              {/* Bottom All Services button */}
                              <div className="pt-3 border-t border-slate-800/80">
                                {isServicePage ? (
                                  <button
                                    onClick={onNavigateHome}
                                    className="w-full py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-[11px] font-bold text-slate-300 hover:text-white transition-all flex items-center justify-between cursor-pointer"
                                  >
                                    <span>Homepage Services Hub</span>
                                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                                  </button>
                                ) : (
                                  <a
                                    href="#services"
                                    onClick={(e) => handleNavClick(e, '#services')}
                                    className="w-full py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-[11px] font-bold text-slate-300 hover:text-white transition-all flex items-center justify-between cursor-pointer"
                                  >
                                    <span>View Services Hub</span>
                                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                                  </a>
                                )}
                              </div>

                            </div>

                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.isHomeAction)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                    link.highlight
                      ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500 hover:text-slate-950 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.isHomeAction && <Home className="w-3 h-3 text-slate-400" />}
                  {link.highlight && <Sparkles className="w-3 h-3 text-cyan-400" />}
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <MagneticButton strength={12}>
              <button
                onClick={onOpenConsultationModal}
                data-cursor-label="TALK"
                className="px-5 py-2.5 rounded-full bg-cyan-500 text-slate-950 hover:bg-cyan-400 text-xs font-bold font-display tracking-wide transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-md shadow-cyan-500/20"
              >
                <span>{isServicePage ? 'Free Strategy Call' : "Let's Talk"}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </MagneticButton>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white lg:hidden cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </header>

      {/* Full-Screen Animated Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[#05070c]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-8 lg:hidden overflow-y-auto"
          >
            {/* Mobile Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
              <AnimatedLogo
                size="md"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleLogoClick();
                }}
              />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Staggered Navigation Links */}
            <div className="flex flex-col space-y-2.5 my-6">
              {currentNavLinks.map((link, idx) => {
                if (link.hasSubmenu) {
                  return (
                    <div key={link.name} className="py-1">
                      <button
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className="w-full text-lg sm:text-xl font-black font-display text-white hover:text-cyan-400 transition-colors flex items-center justify-between cursor-pointer py-1"
                      >
                        <span className="flex items-center gap-2">
                          <Layers className="w-4 h-4 text-cyan-400" />
                          <span>{link.name}</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400">12 Services</span>
                        </span>
                        <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180 text-cyan-400' : 'text-slate-500'}`} />
                      </button>

                      {/* Mobile Submenu Accordion */}
                      {isMobileServicesOpen && (
                        <div className="mt-2 pl-3 space-y-2 border-l-2 border-cyan-500/30 py-2">
                          <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold tracking-wider block">
                            Digital Marketing (9)
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                            {DIGITAL_SERVICES.map((s) => {
                              const isActive = activeServiceSlug === s.slug;
                              return (
                                <button
                                  key={s.slug}
                                  onClick={() => handleServiceClick(s.slug)}
                                  className={`text-left text-xs font-semibold py-1.5 px-2 rounded-lg flex items-center gap-2 transition-all ${
                                    isActive
                                      ? 'bg-cyan-500/15 text-cyan-300 font-bold'
                                      : 'text-slate-300 hover:text-cyan-400'
                                  }`}
                                >
                                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-cyan-400 animate-pulse' : 'bg-slate-600'}`} />
                                  <span className="truncate">{s.name}</span>
                                </button>
                              );
                            })}
                          </div>

                          <span className="text-[10px] font-mono text-blue-400 uppercase font-bold tracking-wider block pt-3">
                            Travel & Aviation (3)
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                            {TRAVEL_SERVICES.map((s) => {
                              const isActive = activeServiceSlug === s.slug;
                              return (
                                <button
                                  key={s.slug}
                                  onClick={() => handleServiceClick(s.slug)}
                                  className={`text-left text-xs font-semibold py-1.5 px-2 rounded-lg flex items-center gap-2 transition-all ${
                                    isActive
                                      ? 'bg-blue-500/15 text-blue-300 font-bold'
                                      : 'text-slate-300 hover:text-blue-400'
                                  }`}
                                >
                                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-blue-400 animate-pulse' : 'bg-slate-600'}`} />
                                  <span className="truncate">{s.name}</span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.03 * idx, duration: 0.3 }}
                    onClick={(e) => {
                      setIsMobileMenuOpen(false);
                      handleNavClick(e, link.href, link.isHomeAction);
                    }}
                    className={`text-lg sm:text-xl font-bold font-display text-white hover:text-cyan-400 transition-colors flex items-center justify-between py-1.5 ${
                      link.highlight ? 'text-cyan-300' : ''
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {link.isHomeAction && <Home className="w-4 h-4 text-slate-400" />}
                      {link.highlight && <Sparkles className="w-4 h-4 text-cyan-400" />}
                      <span>{link.name}</span>
                    </span>
                    <span className="text-xs font-mono text-cyan-400/60">0{idx + 1}</span>
                  </motion.a>
                );
              })}
            </div>

            {/* Mobile Footer CTAs */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenConsultationModal();
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm tracking-wide shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{isServicePage ? 'Free Strategy Consultation' : "Let's Talk"}</span>
              </button>
              <p className="text-[11px] text-center text-slate-400 font-mono">
                {PERSONAL_INFO.email} • {PERSONAL_INFO.phoneFormatted}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

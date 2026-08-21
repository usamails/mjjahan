import { MouseEvent } from 'react';
import { motion } from 'motion/react';
import { Linkedin, Facebook, Instagram, Phone, Mail, MapPin, ArrowUp, Globe, Infinity, Sparkles, ShieldCheck, CreditCard, Wallet } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';
import AnimatedLogo from './AnimatedLogo';

interface FooterProps {
  onNavigatePayment?: () => void;
}

export default function Footer({ onNavigatePayment }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePaymentClick = (e: MouseEvent) => {
    if (onNavigatePayment) {
      e.preventDefault();
      onNavigatePayment();
    }
  };

  return (
    <footer className="bg-[#030509] text-slate-400 border-t border-slate-900 pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Brand Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-slate-900">
          
          {/* Brand & Positioning */}
          <div className="md:col-span-5 space-y-4">
            <div className="pb-1">
              <AnimatedLogo size="lg" onClick={scrollToTop} />
            </div>
            
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Founder of Flowdigita LLC and Dreams Fly International. Operating across digital marketing, growth strategy, and international travel consulting.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                aria-label="Facebook Profile"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-pink-400 hover:border-pink-500/50 transition-all"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
                aria-label="WhatsApp Direct"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

            {/* Secure Payment Portal Pill */}
            <div className="pt-3">
              <a
                href="/payment"
                onClick={handlePaymentClick}
                className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-transparent border border-cyan-500/30 text-cyan-300 hover:text-white hover:border-cyan-400 text-xs font-semibold transition-all group"
              >
                <ShieldCheck className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>Client Payment Portal (Crypto, Card & Wise)</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-200">256-BIT</span>
              </a>
            </div>
          </div>

          {/* Quick Section Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors text-cyan-400 font-semibold">All Services (12)</a>
              </li>
              <li>
                <a 
                  href="/payment" 
                  onClick={handlePaymentClick}
                  className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors flex items-center gap-1.5"
                >
                  <CreditCard className="w-3.5 h-3.5" />
                  <span>Make a Payment (Secure)</span>
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">About & Evolution</a>
              </li>
              <li>
                <a href="#journey" className="hover:text-cyan-400 transition-colors">Career Timeline</a>
              </li>
              <li>
                <a href="#two-worlds" className="hover:text-cyan-400 transition-colors">Two Worlds</a>
              </li>
              <li>
                <a href="#ventures" className="hover:text-cyan-400 transition-colors">Ventures (Flowdigita & Dreams Fly)</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition-colors">Skill Constellation</a>
              </li>
              <li>
                <a href="#behind-the-builder" className="hover:text-cyan-400 transition-colors">Behind the Builder</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Dedicated Service Pages Directory */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Specialized Services
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5 text-[11px]">
              <a href="/services/digital-marketing" className="hover:text-cyan-400 transition-colors">Digital Marketing</a>
              <a href="/services/seo" className="hover:text-cyan-400 transition-colors">SEO Services</a>
              <a href="/services/google-ads" className="hover:text-cyan-400 transition-colors">Google Ads & PPC</a>
              <a href="/services/meta-ads" className="hover:text-cyan-400 transition-colors">Facebook / Meta Ads</a>
              <a href="/services/social-media-marketing" className="hover:text-cyan-400 transition-colors">Social Media Marketing</a>
              <a href="/services/lead-generation" className="hover:text-cyan-400 transition-colors">Lead Generation</a>
              <a href="/services/web-development" className="hover:text-cyan-400 transition-colors">Web Development</a>
              <a href="/services/business-growth" className="hover:text-cyan-400 transition-colors">Business Growth</a>
              <a href="/services/ai-digital-marketing" className="hover:text-cyan-400 transition-colors">AI Marketing Tools</a>
              <a href="/travel/air-ticketing" className="hover:text-cyan-400 transition-colors">Air Ticketing & GDS</a>
              <a href="/travel/visa-consultation" className="hover:text-cyan-400 transition-colors">Visa Consultation</a>
              <a href="/travel/work-permit" className="hover:text-cyan-400 transition-colors">Work Permit Advisory</a>
            </div>

            <div className="pt-3 border-t border-slate-900">
              <h5 className="text-[11px] font-mono text-slate-500 uppercase mb-2">Active Ventures & Payments</h5>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://flowdigita.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-[11px] text-slate-300 hover:text-cyan-300 transition-all"
                >
                  Flowdigita LLC ↗
                </a>
                <a
                  href="https://dreamsfly.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 hover:border-blue-500/40 text-[11px] text-slate-300 hover:text-blue-300 transition-all"
                >
                  Dreams Fly Int. ↗
                </a>
                <a
                  href="/payment"
                  onClick={handlePaymentClick}
                  className="px-2.5 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/40 hover:border-emerald-400 text-[11px] text-emerald-300 hover:text-emerald-200 font-medium transition-all flex items-center gap-1"
                >
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>Make Payment ↗</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          
          <div className="text-center sm:text-left space-y-1">
            <div className="flex items-center gap-2 font-mono font-bold text-cyan-400 text-xs">
              <span>2020</span>
              <span>→</span>
              <span>2026</span>
              <span>→</span>
              <Infinity className="w-3.5 h-3.5" />
            </div>
            <p className="font-medium text-slate-300">
              Building, learning and growing — one digital venture at a time.
            </p>
            <p className="text-slate-500 text-[11px]">
              © 2026 Jahan Ali. All rights reserved. • Press <span className="text-cyan-400 font-mono">J</span> for Jahan Mode.
            </p>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 transition-all flex items-center gap-1.5 text-xs font-medium cursor-pointer"
            aria-label="Back to Top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

      </div>
    </footer>
  );
}

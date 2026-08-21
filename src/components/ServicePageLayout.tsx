import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  CheckCircle2, 
  HelpCircle, 
  ChevronDown, 
  Sparkles, 
  Search, 
  MessageSquare, 
  Phone, 
  Mail, 
  Globe, 
  ShieldCheck, 
  Calendar,
  Layers,
  ArrowRight
} from 'lucide-react';
import { ServiceData, SERVICES_DATA } from '../data/servicesData';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';
import Navbar from './Navbar';
import MagneticButton from './MagneticButton';

interface ServicePageLayoutProps {
  service: ServiceData;
  onOpenConsultationModal: () => void;
  onNavigateHome: () => void;
  onNavigateService: (slug: string) => void;
}

export default function ServicePageLayout({
  service,
  onOpenConsultationModal,
  onNavigateHome,
  onNavigateService
}: ServicePageLayoutProps) {
  const [openFaqIndices, setOpenFaqIndices] = useState<number[]>([0]);
  const [faqSearch, setFaqSearch] = useState('');

  // SEO: Update Title, Meta Description, Canonical URL, and JSON-LD
  useEffect(() => {
    document.title = service.seoTitle;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', service.metaDescription);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://mjjahan.com${service.url}`);

    // OpenGraph & Twitter tags update
    const updateMetaTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`) || document.querySelector(`meta[name="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        if (property.startsWith('og:')) {
          meta.setAttribute('property', property);
        } else {
          meta.setAttribute('name', property);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateMetaTag('og:title', service.seoTitle);
    updateMetaTag('og:description', service.metaDescription);
    updateMetaTag('og:url', `https://mjjahan.com${service.url}`);
    updateMetaTag('twitter:title', service.seoTitle);
    updateMetaTag('twitter:description', service.metaDescription);

    // Injected Schema.org Structured Data (Service + FAQPage + BreadcrumbList)
    const scriptId = 'service-schema-jsonld';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "name": service.h1,
          "serviceType": service.primaryKeyword,
          "provider": {
            "@type": "Person",
            "name": "Jahan Ali",
            "url": "https://mjjahan.com"
          },
          "areaServed": [
            { "@type": "Country", "name": "Bangladesh" },
            { "@type": "Country", "name": "Worldwide" }
          ],
          "description": service.metaDescription,
          "url": `https://mjjahan.com${service.url}`
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://mjjahan.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": service.category === 'travel' ? "Travel & Aviation" : "Services",
              "item": "https://mjjahan.com/#services"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": service.h1,
              "item": `https://mjjahan.com${service.url}`
            }
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": service.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }
      ]
    };

    script.text = JSON.stringify(schemaData);

    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => {
      // Revert canonical & title when unmounting
      document.title = "Jahan Ali | Digital Entrepreneur, Marketer & Agency Owner";
      if (canonical) canonical.setAttribute('href', 'https://mjjahan.com/');
      updateMetaTag('og:title', 'Jahan Ali | Digital Entrepreneur, Marketer & Agency Owner');
      updateMetaTag('og:description', 'Personal brand and portfolio of Jahan Ali — Founder of Flowdigita LLC & Dreams Fly International.');
      updateMetaTag('og:url', 'https://mjjahan.com/');
    };
  }, [service]);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndices(prev => 
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  const filteredFaqs = service.faqs.filter(
    faq =>
      faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
      faq.answer.toLowerCase().includes(faqSearch.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#06080d] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Universal Top Navbar with Services Submenu */}
      <Navbar
        isServicePage={true}
        activeServiceSlug={service.slug}
        onNavigateHome={onNavigateHome}
        onSelectService={onNavigateService}
        onOpenConsultationModal={onOpenConsultationModal}
      />

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-mono text-slate-400">
          <button onClick={onNavigateHome} className="hover:text-cyan-400 transition-colors cursor-pointer">
            Home
          </button>
          <span>/</span>
          <span className="text-slate-500">
            {service.category === 'digital' ? 'Services' : 'Travel Expertise'}
          </span>
          <span>/</span>
          <span className="text-cyan-400 font-semibold">{service.h1}</span>
        </nav>

        {/* Hero Section */}
        <div id="overview" className="relative mb-16 p-6 sm:p-12 rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-950/80 to-[#06080d] border border-slate-800/80 shadow-2xl overflow-hidden scroll-mt-24">
          {/* Subtle Ambient Background Gradients */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            {/* Category Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{service.categoryLabel}</span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white mb-4 leading-tight">
              {service.h1}
            </h1>

            {/* Tagline */}
            <p className="text-base sm:text-xl text-slate-300 font-medium mb-6 leading-relaxed">
              {service.tagline}
            </p>

            {/* Intro Content */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8">
              {service.intro}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultationModal}
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Strategy Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3.5 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-white font-semibold text-sm transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Jahan Ali</span>
              </a>
            </div>

            {/* Semantic Keyword Tags */}
            <div className="mt-8 pt-6 border-t border-slate-800/80">
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-2">
                Target Topics & Specializations:
              </span>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-[11px] font-mono font-medium">
                  #{service.primaryKeyword}
                </span>
                {service.secondaryKeywords.map((kw, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-400 text-[11px] font-mono"
                  >
                    #{kw}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content Sections Grid */}
        <div className="space-y-12 mb-16">
          {service.sections.map((section, idx) => (
            <section
              key={idx}
              className="p-6 sm:p-10 rounded-2xl bg-slate-900/40 border border-slate-800/70 hover:border-slate-700/80 transition-all"
            >
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>{section.title}</span>
              </h2>

              {section.subtitle && (
                <p className="text-sm font-mono text-cyan-400/80 mb-3 uppercase tracking-wider">
                  {section.subtitle}
                </p>
              )}

              <p className="text-slate-300 leading-relaxed text-base mb-6">
                {section.content}
              </p>

              {/* Feature Cards if present */}
              {section.features && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {section.features.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/30 transition-all"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        <h3 className="text-base font-bold text-white font-display">
                          {feat.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-6">
                        {feat.desc}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Bullet Points if present */}
              {section.points && (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  {section.points.map((pt, pIdx) => (
                    <li
                      key={pIdx}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-950/40 border border-slate-800/50 text-sm text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* 4-Step Process Section */}
        {service.process && service.process.length > 0 && (
          <section id="process" className="mb-16 p-6 sm:p-10 rounded-2xl bg-gradient-to-b from-slate-900/60 to-slate-950/80 border border-slate-800 scroll-mt-24">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase">
                Step-by-Step Framework
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-1">
                My Delivery Process
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {service.process.map((step, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-950 border border-slate-800/80 relative overflow-hidden flex flex-col justify-between"
                >
                  <span className="text-3xl font-black font-mono text-cyan-500/20 mb-3 block">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-white mb-2 font-display">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Pricing & Service Packages Section */}
        {service.pricingPackages && service.pricingPackages.length > 0 && (
          <section id="pricing" className="mb-16 p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-slate-900/80 via-slate-950/90 to-[#06080d] border border-slate-800/90 shadow-2xl relative overflow-hidden scroll-mt-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>TRANSPARENT VALUE PRICING</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black font-display text-white mb-3">
                Pricing & Service Packages
              </h2>
              <p className="text-sm sm:text-base text-slate-400">
                Choose a plan tailored to your scale. Every package is backed by real execution, clear deliverables, and direct strategy consultation with Jahan Ali.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
              {service.pricingPackages.map((pkg, idx) => {
                const isPopular = pkg.isPopular;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                      isPopular
                        ? 'bg-slate-900/90 border-2 border-cyan-500/80 shadow-xl shadow-cyan-500/10 lg:-translate-y-2'
                        : 'bg-slate-950/70 border border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {isPopular && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black text-[11px] uppercase tracking-wider shadow-md">
                        Most Popular
                      </div>
                    )}

                    <div>
                      {/* Tier Name */}
                      <h3 className="text-xl font-bold font-display text-white mb-2">
                        {pkg.name}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-slate-400 min-h-[36px] leading-relaxed mb-6">
                        {pkg.description}
                      </p>

                      {/* Price Display */}
                      <div className="flex items-baseline gap-1.5 pb-6 border-b border-slate-800 mb-6">
                        <span className="text-3xl sm:text-4xl font-black font-display text-white tracking-tight">
                          {pkg.price}
                        </span>
                        {pkg.period && (
                          <span className="text-xs font-mono text-slate-400">
                            {pkg.period}
                          </span>
                        )}
                      </div>

                      {/* Feature Checklist */}
                      <div className="space-y-3 mb-8">
                        <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                          What's Included:
                        </span>
                        {pkg.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isPopular ? 'text-cyan-400' : 'text-slate-400'}`} />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={onOpenConsultationModal}
                      className={`w-full py-3.5 rounded-xl font-bold text-xs tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        isPopular
                          ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md shadow-cyan-500/25'
                          : 'bg-slate-900 hover:bg-slate-800 text-white border border-slate-700'
                      }`}
                    >
                      <span>{pkg.ctaText || 'Get Started'}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Custom Quote Note */}
            <div className="mt-10 pt-6 border-t border-slate-800 text-center">
              <p className="text-xs text-slate-400">
                Have specific enterprise requirements or custom volume needs?{' '}
                <button
                  onClick={onOpenConsultationModal}
                  className="text-cyan-400 font-bold hover:underline cursor-pointer"
                >
                  Contact Jahan Ali for a tailored proposal →
                </button>
              </p>
            </div>
          </section>
        )}

        {/* Why Choose Jahan Ali */}
        {service.whyChoose && (
          <section id="why-choose" className="mb-16 p-6 sm:p-10 rounded-2xl bg-slate-900/40 border border-slate-800/80 scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-6 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-cyan-400" />
              <span>Why Choose Jahan Ali?</span>
            </h2>

            <div className="space-y-4">
              {service.whyChoose.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/70 flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Interactive FAQ Section with Search */}
        <section id="faqs" className="mb-16 p-6 sm:p-10 rounded-2xl bg-slate-900/40 border border-slate-800 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase">
                Got Questions?
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-1 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-cyan-400" />
                <span>Frequently Asked Questions</span>
              </h2>
            </div>

            {/* FAQ Search Bar */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={faqSearch}
                onChange={(e) => setFaqSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
          </div>

          <div className="space-y-3">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, idx) => {
                const isOpen = openFaqIndices.includes(idx);
                return (
                  <div
                    key={idx}
                    className={`rounded-xl border transition-all ${
                      isOpen
                        ? 'bg-slate-950 border-cyan-500/30'
                        : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="text-sm sm:text-base font-bold text-white font-display">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-cyan-400 transition-transform duration-200 shrink-0 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <p className="text-center text-sm text-slate-400 py-6">
                No matching questions found for "{faqSearch}".
              </p>
            )}
          </div>
        </section>

        {/* Contextual Internal Linking (SEO Engine) */}
        {service.internalLinks && service.internalLinks.length > 0 && (
          <section className="mb-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-950 to-slate-900 border border-slate-800">
            <div className="mb-6 flex items-center gap-2">
              <Layers className="w-5 h-5 text-cyan-400" />
              <h2 className="text-xl font-bold font-display text-white">
                Related & Complementary Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.internalLinks.map((link, idx) => {
                const targetSlug = link.path.split('/').pop() || '';
                return (
                  <div
                    key={idx}
                    onClick={() => onNavigateService(targetSlug)}
                    className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors font-display">
                        {link.title}
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-transform group-hover:translate-x-1" />
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {link.context}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Bottom High-Converting Conversion Card */}
        <div id="contact" className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-cyan-950/60 via-slate-900 to-blue-950/60 border border-cyan-500/30 text-center relative overflow-hidden shadow-2xl scroll-mt-24">
          <div className="max-w-2xl mx-auto relative z-10">
            <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold mb-4 inline-block">
              READY TO SCALE?
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-display text-white mb-4">
              Let's Discuss Your Growth Strategy
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mb-8 leading-relaxed">
              Whether you need high-ROI paid ads, top-tier SEO rankings, or custom web architecture, Jahan Ali delivers actionable results tailored to your exact business goals.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenConsultationModal}
                className="px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/30 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Request Free Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-4 rounded-full bg-slate-900 border border-slate-700 text-white font-semibold text-sm hover:bg-slate-800 transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} Jahan Ali. All rights reserved. • Founder of Flowdigita LLC & Dreams Fly International.
          </div>
          <div className="flex items-center gap-4">
            <button onClick={onNavigateHome} className="hover:text-cyan-400 transition-colors cursor-pointer">
              Home
            </button>
            <span>•</span>
            <a href="mailto:mjjahanali@gmail.com" className="hover:text-cyan-400 transition-colors">
              mjjahanali@gmail.com
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}

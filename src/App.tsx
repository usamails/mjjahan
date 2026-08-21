import { useState, useEffect } from 'react';
import PageLoader from './components/PageLoader';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandIntro from './components/BrandIntro';
import ServicesSection from './components/ServicesSection';
import JourneyTimeline from './components/JourneyTimeline';
import TwoWorldsSection from './components/TwoWorldsSection';
import VenturesSection from './components/VenturesSection';
import SkillsConstellation from './components/SkillsConstellation';
import CurrentlyBuilding from './components/CurrentlyBuilding';
import ImpactStats from './components/ImpactStats';
import PhilosophySection from './components/PhilosophySection';
import BehindTheBuilder from './components/BehindTheBuilder';
import EducationSection from './components/EducationSection';
import ProjectShowcase from './components/ProjectShowcase';
import AskJahan from './components/AskJahan';
import PhotoGallery from './components/PhotoGallery';
import WhatsNextSection from './components/WhatsNextSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import QuickContactModal from './components/QuickContactModal';
import JahanModeEasterEgg from './components/JahanModeEasterEgg';
import ServicePageLayout from './components/ServicePageLayout';
import PaymentPageLayout from './components/PaymentPageLayout';
import { SERVICES_DATA } from './data/servicesData';

type AppRoute = 
  | { type: 'home' }
  | { type: 'service'; slug: string }
  | { type: 'payment' };

// Pure helper to parse the current URL state safely across custom domains and subpaths
function parseCurrentRoute(): AppRoute {
  try {
    const rawPath = window.location.pathname.toLowerCase();
    // Normalize path by removing trailing slashes, index.html, and .html extensions
    const pathname = rawPath
      .replace(/\/index\.html$/, '')
      .replace(/\.html$/, '')
      .replace(/\/+$/, '') || '/';

    const search = new URLSearchParams(window.location.search);
    const rawHash = window.location.hash.toLowerCase();
    const hash = rawHash.replace(/^#\/?/, '');

    // 1. Payment Route Check
    const isPaymentPath = 
      pathname === '/payment' || 
      pathname === '/pay' || 
      pathname.endsWith('/payment') || 
      pathname.endsWith('/pay');
      
    const isPaymentQuery = 
      search.get('page') === 'payment' || 
      search.get('p') === '/payment' || 
      search.get('p') === 'payment' || 
      (search.get('p') && search.get('p')?.includes('payment'));
      
    const isPaymentHash = 
      hash === 'payment' || 
      hash === '/payment' || 
      hash === 'pay';

    if (isPaymentPath || isPaymentQuery || isPaymentHash) {
      return { type: 'payment' };
    }

    // 2. Direct query param (?service=seo)
    const serviceParam = search.get('service');
    if (serviceParam && SERVICES_DATA[serviceParam]) {
      return { type: 'service', slug: serviceParam };
    }

    // 3. GitHub Pages SPA redirect query (?p=/services/seo or ?p=/travel/air-ticketing)
    const pParam = search.get('p');
    if (pParam) {
      const decodedP = decodeURIComponent(pParam).replace(/~and~/g, '&');
      const pParts = decodedP.split('/').filter(Boolean).filter(part => part !== 'mjjahan');
      
      if (pParts.length >= 2 && (pParts[0] === 'services' || pParts[0] === 'travel')) {
        const slug = pParts[1];
        if (SERVICES_DATA[slug]) return { type: 'service', slug };
      } else if (pParts.length === 1) {
        if (pParts[0] === 'payment' || pParts[0] === 'pay') return { type: 'payment' };
        if (SERVICES_DATA[pParts[0]]) return { type: 'service', slug: pParts[0] };
      }
    }

    // 4. Pathname (/services/seo or /travel/air-ticketing or /mjjahan/services/seo)
    const pathParts = pathname.split('/').filter(Boolean).filter(part => part !== 'mjjahan');
    if (pathParts.length >= 2 && (pathParts[0] === 'services' || pathParts[0] === 'travel')) {
      const slug = pathParts[1];
      if (SERVICES_DATA[slug]) return { type: 'service', slug };
    } else if (pathParts.length === 1) {
      if (pathParts[0] === 'payment' || pathParts[0] === 'pay') return { type: 'payment' };
      if (SERVICES_DATA[pathParts[0]]) return { type: 'service', slug: pathParts[0] };
    }

    // 5. Hash (#/services/seo or #services/seo)
    if (hash.includes('/')) {
      const hashParts = hash.split('/').filter(Boolean).filter(part => part !== 'mjjahan');
      if (hashParts.length >= 2 && SERVICES_DATA[hashParts[1]]) {
        return { type: 'service', slug: hashParts[1] };
      } else if (hashParts.length === 1 && SERVICES_DATA[hashParts[0]]) {
        return { type: 'service', slug: hashParts[0] };
      }
    }
  } catch (err) {
    console.warn('Route parsing fallback to home:', err);
  }
  return { type: 'home' };
}

export default function App() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [route, setRoute] = useState<AppRoute>(() => parseCurrentRoute());

  // Restore clean URL if redirected via GitHub Pages ?p=
  useEffect(() => {
    try {
      const search = new URLSearchParams(window.location.search);
      const pParam = search.get('p');
      if (pParam) {
        const decodedP = decodeURIComponent(pParam).replace(/~and~/g, '&');
        const qParam = search.get('q');
        const decodedQ = qParam ? '?' + decodeURIComponent(qParam).replace(/~and~/g, '&') : '';
        const hash = window.location.hash || '';
        const base = window.location.hostname.endsWith('github.io') ? '/mjjahan' : '';
        const cleanPath = base + (decodedP.startsWith('/') ? decodedP : '/' + decodedP);
        window.history.replaceState(null, '', cleanPath + decodedQ + hash);
      }
    } catch {
      // Ignore URL replacement errors
    }
  }, []);

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setRoute(parseCurrentRoute());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToService = (slug: string) => {
    const service = SERVICES_DATA[slug];
    if (service) {
      setRoute({ type: 'service', slug });
      window.history.pushState(null, '', service.url);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateToPayment = () => {
    setRoute({ type: 'payment' });
    window.history.pushState(null, '', '/payment');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setRoute({ type: 'home' });
    window.history.pushState(null, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    if (route.type !== 'home') {
      setRoute({ type: 'home' });
      window.history.pushState(null, '', '/#' + sectionId);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // If viewing the dedicated Secure Payment Page
  if (route.type === 'payment') {
    return (
      <>
        <CustomCursor />
        <PaymentPageLayout
          onNavigateHome={navigateToHome}
          onOpenConsultationModal={() => setIsConsultationModalOpen(true)}
        />
        <QuickContactModal
          isOpen={isConsultationModalOpen}
          onClose={() => setIsConsultationModalOpen(false)}
        />
      </>
    );
  }

  // If viewing a dedicated service page
  if (route.type === 'service' && SERVICES_DATA[route.slug]) {
    const service = SERVICES_DATA[route.slug];
    return (
      <>
        <CustomCursor />
        <ServicePageLayout
          service={service}
          onOpenConsultationModal={() => setIsConsultationModalOpen(true)}
          onNavigateHome={navigateToHome}
          onNavigateService={navigateToService}
        />
        <QuickContactModal
          isOpen={isConsultationModalOpen}
          onClose={() => setIsConsultationModalOpen(false)}
        />
      </>
    );
  }

  // Otherwise render Full Homepage
  return (
    <div className="min-h-screen bg-[#06080d] text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Initial Page Loading Sequence */}
      <PageLoader />

      {/* Top Scroll Indicator & Section Counter */}
      <ScrollProgress />

      {/* Desktop-only Magnetic Custom Cursor */}
      <CustomCursor />

      {/* Easter Egg 'J' keyboard trigger */}
      <JahanModeEasterEgg />

      {/* Navigation Header */}
      <Navbar 
        onOpenConsultationModal={() => setIsConsultationModalOpen(true)} 
        onSelectService={navigateToService}
      />

      {/* Main Content Flow */}
      <main>
        {/* 1. Cinematic Hero */}
        <Hero
          onExploreJourney={() => scrollToSection('journey')}
          onWorkTogether={() => scrollToSection('contact')}
        />

        {/* 2. Comprehensive Services Hub (12 Dedicated Specialized Pages) */}
        <ServicesSection
          onSelectService={navigateToService}
          onOpenConsultationModal={() => setIsConsultationModalOpen(true)}
        />

        {/* 3. Personal Brand Introduction (More Than a Freelancer) */}
        <BrandIntro />

        {/* 4. Career Evolution (From Freelancer to Entrepreneur Timeline) */}
        <JourneyTimeline />

        {/* 5. Two Worlds (Digital World vs. Travel World) */}
        <TwoWorldsSection />

        {/* 6. Business Ventures (Flowdigita LLC & Dreams Fly International) */}
        <VenturesSection />

        {/* 7. Skill DNA / Interactive Constellation */}
        <SkillsConstellation />

        {/* 8. Currently Building (Active & Exploratory Ventures) */}
        <CurrentlyBuilding />

        {/* 9. Verified Impact Numbers */}
        <ImpactStats />

        {/* 10. Personal Philosophy (Learn • Build • Grow) */}
        <PhilosophySection />

        {/* 11. Behind the Builder (Personal Identity, Ethos & Facts) */}
        <BehindTheBuilder />

        {/* 12. Education Journey Timeline */}
        <EducationSection />

        {/* 13. Selected Work / Projects */}
        <ProjectShowcase />

        {/* 14. Interactive Discovery (Want to Know More?) */}
        <AskJahan />

        {/* 15. Photo Gallery (Life Behind The Screen with Lightbox) */}
        <PhotoGallery />

        {/* 16. What's Next? (Build. Learn. Explore. Repeat.) */}
        <WhatsNextSection onContactClick={() => scrollToSection('contact')} />

        {/* 17. Contact Section (Direct Info & Fast Message) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigatePayment={navigateToPayment} />

      {/* Fast Consultation Outreach Modal */}
      <QuickContactModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
    </div>
  );
}

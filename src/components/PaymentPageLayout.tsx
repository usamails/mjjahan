import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { QRCodeSVG } from 'qrcode.react';
import { 
  ShieldCheck, 
  CreditCard, 
  Wallet, 
  Send, 
  ArrowRight, 
  Copy, 
  Check, 
  AlertTriangle, 
  QrCode, 
  ExternalLink, 
  HelpCircle, 
  ChevronDown, 
  CheckCircle2, 
  Lock, 
  Globe, 
  Phone, 
  Mail, 
  Sparkles,
  ArrowUpRight,
  Info,
  Shield,
  Clock,
  Home,
  CheckSquare,
  Square,
  Play,
  Share2,
  Video,
  MonitorPlay
} from 'lucide-react';
import { VideoTutorialPlayer } from './VideoTutorialPlayer';
import { 
  CRYPTO_WALLETS, 
  REMITLY_STEPS, 
  XOOM_STEPS, 
  WISE_STEPS, 
  PAYMENT_FAQS,
  CryptoWallet 
} from '../data/paymentData';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';
import { 
  BitcoinLogo, 
  EthereumLogo, 
  TetherLogo, 
  UsdcLogo, 
  BnbLogo, 
  SolanaLogo, 
  LitecoinLogo, 
  TronLogo, 
  DogeLogo, 
  RemitlyLogo, 
  PaypalLogo, 
  XoomLogo, 
  WiseLogo, 
  BkashLogo, 
  UpayLogo, 
  VisaMastercardBadge,
  WhatsAppLogo,
  TelegramLogo 
} from './PaymentLogos';

interface PaymentPageLayoutProps {
  onNavigateHome: () => void;
  onOpenConsultationModal?: () => void;
}

// Helper to render cryptocurrency logo
function getCryptoLogo(symbol: string, className = "w-6 h-6") {
  if (symbol.includes('BTC')) return <BitcoinLogo className={className} />;
  if (symbol.includes('ETH')) return <EthereumLogo className={className} />;
  if (symbol.includes('USDT')) return <TetherLogo className={className} />;
  if (symbol.includes('USDC')) return <UsdcLogo className={className} />;
  if (symbol.includes('BNB')) return <BnbLogo className={className} />;
  if (symbol.includes('SOL')) return <SolanaLogo className={className} />;
  if (symbol.includes('LTC')) return <LitecoinLogo className={className} />;
  if (symbol.includes('TRX')) return <TronLogo className={className} />;
  if (symbol.includes('DOGE')) return <DogeLogo className={className} />;
  return <Wallet className={className} />;
}

type PaymentMethodType = 'crypto' | 'remitly' | 'xoom' | 'wise' | 'videos' | 'faq';

export default function PaymentPageLayout({
  onNavigateHome,
  onOpenConsultationModal
}: PaymentPageLayoutProps) {
  const [activeTab, setActiveTab] = useState<PaymentMethodType>('crypto');
  const [selectedWalletId, setSelectedWalletId] = useState<string>('usdt-trc20');
  const [cryptoViewMode, setCryptoViewMode] = useState<'featured' | 'grid'>('featured');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [hasVerifiedNetwork, setHasVerifiedNetwork] = useState(false);
  const [activeQrModalWallet, setActiveQrModalWallet] = useState<CryptoWallet | null>(null);
  const [openFaqIndices, setOpenFaqIndices] = useState<number[]>([0, 1, 2]);
  const [selectedTutorialVideo, setSelectedTutorialVideo] = useState<'remitly' | 'xoom' | 'wise'>('remitly');

  // SEO & Head Metadata
  useEffect(() => {
    document.title = "Official Payment Portal | Jahan Ali (Crypto, Card, PayPal & Wise)";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Official secure payment instructions for Jahan Ali clients. Pay via Cryptocurrency (USDT, BTC, ETH, SOL), Credit/Debit Card via Remitly, PayPal via Xoom, or Wise directly.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://mjjahan.com/payment');

    // Injected Schema.org Structured Data
    const scriptId = 'payment-schema-jsonld';
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
          "@type": "WebPage",
          "name": "Secure Payment Portal | Jahan Ali",
          "url": "https://mjjahan.com/payment",
          "description": "Choose a secure payment method using cryptocurrency, Remitly, PayPal via Xoom, or Wise.",
          "isPartOf": {
            "@type": "WebSite",
            "name": "Jahan Ali",
            "url": "https://mjjahan.com"
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": PAYMENT_FAQS.map(faq => ({
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
      document.title = "Jahan Ali | Digital Entrepreneur, Marketer & Agency Owner";
      if (canonical) canonical.setAttribute('href', 'https://mjjahan.com/');
    };
  }, []);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2500);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIndices(prev => 
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  const activeWallet = CRYPTO_WALLETS.find(w => w.id === selectedWalletId) || CRYPTO_WALLETS[1];

  const getWhatsappPaymentUrl = () => {
    const text = encodeURIComponent(`Hello Jahan, I have completed my payment for our project/services.\n\nMethod: ${activeTab.toUpperCase()}\nAmount: \nTransaction ID/Receipt: `);
    return `https://wa.me/8801650222581?text=${text}`;
  };

  return (
    <div className="min-h-screen bg-[#04060a] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Top Security & Trust Header */}
      <header className="sticky top-0 z-50 bg-[#04060a]/90 backdrop-blur-xl border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Brand & Home Navigation */}
          <div className="flex items-center gap-4">
            <button
              onClick={onNavigateHome}
              className="group flex items-center gap-2.5 text-xs font-medium text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer py-1.5 px-3 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40"
              aria-label="Back to main homepage"
            >
              <Home className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to Home</span>
            </button>

            <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-slate-800">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono font-semibold text-slate-300">Official Payment Gateway</span>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-[11px] font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>SSL 256-Bit Encrypted</span>
            </div>
            
            <a
              href={getWhatsappPaymentUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02]"
            >
              <WhatsAppLogo className="w-4 h-4 text-slate-950" />
              <span className="hidden sm:inline">Confirm Payment</span>
              <span className="sm:hidden">Confirm</span>
            </a>
          </div>

        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">

        {/* 1. Hero Title & Intro Banner */}
        <section className="text-center max-w-3xl mx-auto space-y-4 pt-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-transparent border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>VERIFIED CLIENT PAYMENT PORTAL</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Secure & Easy <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">Payment Methods</span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Select your preferred method below to view official wallet addresses, step-by-step remittance instructions, or direct transfer details.
          </p>

          {/* Quick Logos Bar */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800">
              <TetherLogo className="w-4 h-4" />
              <BitcoinLogo className="w-4 h-4" />
              <EthereumLogo className="w-4 h-4" />
              <SolanaLogo className="w-4 h-4" />
              <BnbLogo className="w-4 h-4" />
              <span className="text-[11px] font-semibold text-slate-300 ml-1">Crypto (12+)</span>
            </div>
            
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800">
              <RemitlyLogo className="h-4 w-auto" />
              <VisaMastercardBadge className="scale-90" />
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800">
              <PaypalLogo className="w-4 h-4" />
              <XoomLogo className="h-4 w-auto" />
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800">
              <WiseLogo className="h-4 w-auto" />
              <BkashLogo className="h-4 w-auto" />
            </div>
          </div>
        </section>

        {/* 2. Interactive Main Method Switcher (Tabs) */}
        <section className="bg-slate-900/70 border border-slate-800 rounded-2xl p-2 sm:p-3 shadow-2xl backdrop-blur-sm">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            
            {/* Tab 1: Cryptocurrency */}
            <button
              onClick={() => setActiveTab('crypto')}
              className={`flex flex-col sm:flex-row items-center sm:items-start gap-3 p-3.5 rounded-xl text-left transition-all cursor-pointer border ${
                activeTab === 'crypto'
                  ? 'bg-gradient-to-br from-cyan-950/80 to-slate-900 border-cyan-500/60 shadow-lg shadow-cyan-500/10'
                  : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 text-slate-400 hover:text-white'
              }`}
            >
              <div className={`p-2.5 rounded-xl ${activeTab === 'crypto' ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-800 text-slate-400'}`}>
                <Wallet className="w-5 h-5" />
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1.5">
                  <span className="text-xs font-bold text-white">Cryptocurrency</span>
                  <span className="px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-mono font-bold">12 Wallets</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">USDT, BTC, ETH, SOL</p>
              </div>
            </button>

            {/* Tab 2: Remitly Card */}
            <button
              onClick={() => setActiveTab('remitly')}
              className={`flex flex-col sm:flex-row items-center sm:items-start gap-3 p-3.5 rounded-xl text-left transition-all cursor-pointer border ${
                activeTab === 'remitly'
                  ? 'bg-gradient-to-br from-blue-950/80 to-slate-900 border-blue-500/60 shadow-lg shadow-blue-500/10'
                  : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 text-slate-400 hover:text-white'
              }`}
            >
              <div className={`p-2.5 rounded-xl ${activeTab === 'remitly' ? 'bg-blue-500/20 text-blue-300' : 'bg-slate-800 text-slate-400'}`}>
                <CreditCard className="w-5 h-5" />
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1.5">
                  <span className="text-xs font-bold text-white">Card via Remitly</span>
                  <span className="px-1.5 py-0.2 rounded bg-blue-500/20 text-blue-300 text-[10px] font-mono font-bold">Fast</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">Visa, Mastercard, Debit</p>
              </div>
            </button>

            {/* Tab 3: PayPal via Xoom */}
            <button
              onClick={() => setActiveTab('xoom')}
              className={`flex flex-col sm:flex-row items-center sm:items-start gap-3 p-3.5 rounded-xl text-left transition-all cursor-pointer border ${
                activeTab === 'xoom'
                  ? 'bg-gradient-to-br from-sky-950/80 to-slate-900 border-sky-500/60 shadow-lg shadow-sky-500/10'
                  : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 text-slate-400 hover:text-white'
              }`}
            >
              <div className={`p-2.5 rounded-xl ${activeTab === 'xoom' ? 'bg-sky-500/20 text-sky-300' : 'bg-slate-800 text-slate-400'}`}>
                <PaypalLogo className="w-5 h-5" />
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1.5">
                  <span className="text-xs font-bold text-white">PayPal / Xoom</span>
                  <span className="px-1.5 py-0.2 rounded bg-sky-500/20 text-sky-300 text-[10px] font-mono font-bold">bKash</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">PayPal balance or card</p>
              </div>
            </button>

            {/* Tab 4: Wise */}
            <button
              onClick={() => setActiveTab('wise')}
              className={`flex flex-col sm:flex-row items-center sm:items-start gap-3 p-3.5 rounded-xl text-left transition-all cursor-pointer border ${
                activeTab === 'wise'
                  ? 'bg-gradient-to-br from-emerald-950/80 to-slate-900 border-emerald-500/60 shadow-lg shadow-emerald-500/10'
                  : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 text-slate-400 hover:text-white'
              }`}
            >
              <div className={`p-2.5 rounded-xl ${activeTab === 'wise' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-800 text-slate-400'}`}>
                <Globe className="w-5 h-5" />
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1.5">
                  <span className="text-xs font-bold text-white">Wise Transfer</span>
                  <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold">Low Fee</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">Direct mid-market rates</p>
              </div>
            </button>

            {/* Tab 5: Video Tutorials */}
            <button
              onClick={() => setActiveTab('videos')}
              className={`col-span-2 sm:col-span-1 flex flex-col sm:flex-row items-center sm:items-start gap-3 p-3.5 rounded-xl text-left transition-all cursor-pointer border ${
                activeTab === 'videos'
                  ? 'bg-gradient-to-br from-red-950/80 to-slate-900 border-red-500/60 shadow-lg shadow-red-500/10'
                  : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 text-slate-400 hover:text-white'
              }`}
            >
              <div className={`p-2.5 rounded-xl ${activeTab === 'videos' ? 'bg-red-500/20 text-red-400' : 'bg-slate-800 text-slate-400'}`}>
                <Play className="w-5 h-5 fill-current" />
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1.5">
                  <span className="text-xs font-bold text-white">Video Tutorials</span>
                  <span className="px-1.5 py-0.2 rounded bg-red-500/20 text-red-400 text-[10px] font-mono font-bold">Watch</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">Live in-page player</p>
              </div>
            </button>

          </div>
        </section>

        {/* 3. TAB CONTENT VIEWS */}

        {/* VIEW A: CRYPTOCURRENCY */}
        {activeTab === 'crypto' && (
          <div className="space-y-8 animate-fadeIn">
            
            {/* Crypto Header Bar with View Toggle & Network Safety Check */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-bold text-white">Cryptocurrency Payment Hub</h2>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono">
                    Instant & Zero Extra Charge
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Select a cryptocurrency below to instantly reveal the wallet address and scanning QR code.
                </p>
              </div>

              {/* View Switcher */}
              <div className="flex items-center gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-medium">
                <button
                  onClick={() => setCryptoViewMode('featured')}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    cryptoViewMode === 'featured'
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Interactive Selector
                </button>
                <button
                  onClick={() => setCryptoViewMode('grid')}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    cryptoViewMode === 'grid'
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  View All Grid (12)
                </button>
              </div>
            </div>

            {/* INTERACTIVE SELECTOR MODE */}
            {cryptoViewMode === 'featured' ? (
              <div className="space-y-6">
                
                {/* Horizontal Quick Currency Selectors with Official Logos */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
                  {CRYPTO_WALLETS.map(wallet => {
                    const isSelected = wallet.id === activeWallet.id;
                    return (
                      <button
                        key={wallet.id}
                        onClick={() => {
                          setSelectedWalletId(wallet.id);
                          setHasVerifiedNetwork(false);
                        }}
                        className={`flex items-center gap-2.5 p-3 rounded-xl border transition-all text-left cursor-pointer ${
                          isSelected
                            ? 'bg-slate-800 border-cyan-400 shadow-md shadow-cyan-500/10 scale-[1.02]'
                            : 'bg-slate-900/70 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900'
                        }`}
                      >
                        <div className="flex-shrink-0">
                          {getCryptoLogo(wallet.symbol, "w-7 h-7")}
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-white truncate">{wallet.symbol}</div>
                          <div className="text-[10px] text-slate-400 truncate">{wallet.network}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* PROMINENT ACTIVE WALLET SHOWCASE CARD */}
                <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-[#0a0f18] to-slate-950 border border-slate-800/90 shadow-2xl relative overflow-hidden">
                  
                  {/* Subtle Background Glow */}
                  <div 
                    className="absolute -right-20 -top-20 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-20"
                    style={{ backgroundColor: activeWallet.color }}
                  />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                    
                    {/* Left Details (8 Cols) */}
                    <div className="lg:col-span-8 space-y-6">
                      
                      {/* Coin Header */}
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-2xl bg-slate-800 border border-slate-700 shadow-inner">
                          {getCryptoLogo(activeWallet.symbol, "w-10 h-10")}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-2xl font-bold text-white">{activeWallet.name}</h3>
                            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                              {activeWallet.symbol}
                            </span>
                            {activeWallet.id === 'usdt-trc20' && (
                              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] font-bold">
                                ★ RECOMMENDED (FAST & CHEAP)
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                            <span className="text-cyan-400 font-mono font-semibold">Network:</span>
                            <span className="font-semibold text-slate-200">{activeWallet.networkBadge}</span>
                          </div>
                        </div>
                      </div>

                      {/* Official Address Box with Big Copy Button */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-mono text-slate-400 uppercase tracking-wider text-[11px] font-bold">
                            Official {activeWallet.symbol} Deposit Address:
                          </span>
                          <span className="text-[11px] text-slate-400 flex items-center gap-1 font-mono">
                            <Lock className="w-3 h-3 text-emerald-400" />
                            Verified Address
                          </span>
                        </div>

                        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-slate-700 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 transition-all">
                          <span className="font-mono text-sm sm:text-base font-bold text-white break-all select-all tracking-wide">
                            {activeWallet.address}
                          </span>

                          <button
                            onClick={() => handleCopy(activeWallet.address, activeWallet.id)}
                            className={`flex-shrink-0 px-4 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                              copiedKey === activeWallet.id
                                ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                                : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/20 hover:scale-[1.02]'
                            }`}
                          >
                            {copiedKey === activeWallet.id ? (
                              <>
                                <Check className="w-4 h-4 stroke-[3]" />
                                <span>Address Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-4 h-4" />
                                <span>Copy Address</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Network Warning Checklist */}
                      <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/30 space-y-2.5">
                        <div className="flex items-start gap-2.5">
                          <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                          <div className="text-xs text-amber-200 leading-relaxed font-medium">
                            {activeWallet.warningNote}
                          </div>
                        </div>

                        <label className="flex items-center gap-2.5 pt-1 text-xs text-slate-300 font-medium cursor-pointer select-none">
                          <button
                            type="button"
                            onClick={() => setHasVerifiedNetwork(!hasVerifiedNetwork)}
                            className="text-cyan-400 focus:outline-none"
                          >
                            {hasVerifiedNetwork ? (
                              <CheckSquare className="w-4 h-4 text-emerald-400" />
                            ) : (
                              <Square className="w-4 h-4 text-slate-500" />
                            )}
                          </button>
                          <span className={hasVerifiedNetwork ? 'text-emerald-300' : 'text-slate-400'}>
                            I confirm that I am sending through the <span className="text-white font-bold">{activeWallet.network}</span> network only.
                          </span>
                        </label>
                      </div>

                    </div>

                    {/* Right QR Code (4 Cols) */}
                    <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-3">
                      <div className="p-3 bg-white rounded-2xl shadow-xl border-4 border-slate-800">
                        <QRCodeSVG
                          value={activeWallet.qrValue}
                          size={160}
                          level="H"
                          includeMargin={false}
                        />
                      </div>
                      
                      <div className="space-y-1">
                        <div className="text-xs font-bold text-slate-200">Scan to Pay with Wallet App</div>
                        <div className="text-[10px] text-slate-400 font-mono">Binance, TrustWallet, MetaMask, OKX</div>
                      </div>

                      <button
                        onClick={() => setActiveQrModalWallet(activeWallet)}
                        className="text-xs text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center gap-1 cursor-pointer pt-1"
                      >
                        <QrCode className="w-3.5 h-3.5" />
                        <span>Enlarge QR Code</span>
                      </button>
                    </div>

                  </div>
                </div>

              </div>
            ) : (
              /* GRID VIEW (ALL 12 WALLETS) */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {CRYPTO_WALLETS.map(wallet => (
                  <div
                    key={wallet.id}
                    className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          {getCryptoLogo(wallet.symbol, "w-8 h-8")}
                          <div>
                            <div className="text-sm font-bold text-white">{wallet.name}</div>
                            <div className="text-[10px] font-mono text-cyan-400">{wallet.network}</div>
                          </div>
                        </div>
                        <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                          {wallet.symbol}
                        </span>
                      </div>

                      {/* Address */}
                      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                        <div className="text-[10px] font-mono text-slate-400 uppercase mb-1">Wallet Address:</div>
                        <div className="font-mono text-xs text-slate-200 break-all select-all font-semibold">
                          {wallet.address}
                        </div>
                      </div>

                      {/* Warning */}
                      <p className="text-[11px] text-slate-400 leading-snug">
                        {wallet.warningNote}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 pt-2 border-t border-slate-800">
                      <button
                        onClick={() => handleCopy(wallet.address, wallet.id)}
                        className={`flex-1 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                          copiedKey === wallet.id
                            ? 'bg-emerald-500 text-slate-950'
                            : 'bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-200'
                        }`}
                      >
                        {copiedKey === wallet.id ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedKey === wallet.id ? 'Copied' : 'Copy Address'}</span>
                      </button>

                      <button
                        onClick={() => setActiveQrModalWallet(wallet)}
                        className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white cursor-pointer"
                        title="Scan QR Code"
                      >
                        <QrCode className="w-4 h-4" />
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            )}

          </div>
        )}

        {/* VIEW B: REMITLY (CREDIT / DEBIT CARD TO BKASH) */}
        {activeTab === 'remitly' && (
          <div className="space-y-8 animate-fadeIn">
            
            {/* Intro Banner */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0c2340] via-slate-900 to-slate-950 border border-blue-500/30 shadow-2xl relative overflow-hidden">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                
                <div className="space-y-3 max-w-2xl">
                  <div className="flex items-center gap-3">
                    <RemitlyLogo className="h-8 w-auto" />
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      INTERNATIONAL CARD PAYMENT
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Pay with Credit Card, Debit Card or Bank Account
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Remitly allows international clients in the USA, UK, Canada, Europe, Australia, and 100+ countries to send funds directly to our verified Bangladeshi <span className="text-pink-400 font-bold">bKash</span> wallet using Visa, Mastercard, or Bank Transfer.
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <VisaMastercardBadge />
                    <BkashLogo className="h-5 w-auto" />
                    <UpayLogo className="h-5 w-auto" />
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="flex flex-col gap-2.5 w-full md:w-auto">
                  <a
                    href="https://www.remitly.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02]"
                  >
                    <span>Open Remitly Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => {
                      document.getElementById('remitly-tutorial-player')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-all cursor-pointer"
                  >
                    <Play className="w-4 h-4 text-red-400 fill-red-400" />
                    <span>Watch Video Tutorial (In-Page)</span>
                  </button>
                </div>

              </div>
            </div>

            {/* Quick Beneficiary Details Card (One-click Copy) */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                    Recipient Information for Remitly
                  </h3>
                </div>
                <span className="text-[11px] text-slate-400">Click any field to copy</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                
                {/* First Name */}
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-2">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-mono font-bold">First Name</div>
                    <div className="text-sm font-bold text-white">Md Jahan</div>
                  </div>
                  <button
                    onClick={() => handleCopy('Md Jahan', 'remitly-fn')}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-300 transition-all cursor-pointer"
                    title="Copy First Name"
                  >
                    {copiedKey === 'remitly-fn' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Last Name */}
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-2">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-mono font-bold">Last Name</div>
                    <div className="text-sm font-bold text-white">Ali</div>
                  </div>
                  <button
                    onClick={() => handleCopy('Ali', 'remitly-ln')}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-300 transition-all cursor-pointer"
                    title="Copy Last Name"
                  >
                    {copiedKey === 'remitly-ln' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Mobile / bKash Number */}
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-2">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-mono font-bold">Mobile Number (bKash)</div>
                    <div className="text-sm font-mono font-bold text-pink-400">1774786497</div>
                  </div>
                  <button
                    onClick={() => handleCopy('1774786497', 'remitly-phone')}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-300 transition-all cursor-pointer"
                    title="Copy Mobile Number"
                  >
                    {copiedKey === 'remitly-phone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

              </div>
            </div>

            {/* Step by Step Flow Grid */}
            <div className="space-y-4">
              <h3 className="text-sm font-mono font-bold text-slate-300 uppercase tracking-wider">
                Step-by-Step Payment Instructions (8 Simple Steps)
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {REMITLY_STEPS.map(step => (
                  <div
                    key={step.stepNumber}
                    className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/90 flex gap-3.5"
                  >
                    <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-300 border border-blue-500/30 flex items-center justify-center font-mono font-bold text-xs flex-shrink-0">
                      {step.stepNumber}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xs font-bold text-white">{step.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{step.instruction}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Embedded Live Video Tutorial Player */}
            <div id="remitly-tutorial-player">
              <VideoTutorialPlayer
                videoId="44N4NnWxVqU"
                title="How to Send Money with Remitly to bKash (Bangladesh)"
                subtitle="Complete visual walkthrough showing how to enter recipient details and pay with Visa, Mastercard or Bank Transfer directly to bKash."
                platformName="Remitly Card to bKash"
                badgeColor="bg-blue-500/20 text-blue-300 border-blue-500/30"
                accentColor="border-blue-500/40"
                keyStepsSummary={[
                  "Country: Bangladesh → Delivery: Mobile Money (bKash)",
                  "Recipient Name: Md Jahan Ali | Mobile: 1774786497",
                  "Pay securely using any International Debit/Credit Card"
                ]}
              />
            </div>

          </div>
        )}

        {/* VIEW C: PAYPAL VIA XOOM */}
        {activeTab === 'xoom' && (
          <div className="space-y-8 animate-fadeIn">
            
            {/* Intro Banner */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#003087] via-slate-900 to-slate-950 border border-sky-500/30 shadow-2xl relative overflow-hidden">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                
                <div className="space-y-3 max-w-2xl">
                  <div className="flex items-center gap-3">
                    <PaypalLogo className="w-7 h-7" />
                    <XoomLogo className="h-7 w-auto" />
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">
                      PAYPAL SEND MONEY
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Send Payment Using PayPal Balance or Cards
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Use PayPal's official international service, <span className="text-sky-300 font-bold">Xoom</span>, to transfer funds directly from your PayPal wallet or debit/credit card to our verified bKash mobile money account.
                  </p>

                  <div className="flex items-center gap-2 pt-2">
                    <BkashLogo className="h-5 w-auto" />
                    <span className="text-xs text-slate-400 font-mono">Direct Mobile Wallet Deposit</span>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="flex flex-col gap-2.5 w-full md:w-auto">
                  <a
                    href="https://www.xoom.com/bangladesh/send-money"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20 transition-all hover:scale-[1.02]"
                  >
                    <span>Open PayPal Xoom Portal</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => {
                      document.getElementById('xoom-tutorial-player')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-all cursor-pointer"
                  >
                    <Play className="w-4 h-4 text-red-400 fill-red-400" />
                    <span>Watch Video Tutorial (In-Page)</span>
                  </button>
                </div>

              </div>
            </div>

            {/* Quick Beneficiary & Address Copy Card */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-sky-400" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                    Recipient Information for Xoom
                  </h3>
                </div>
                <span className="text-[11px] text-slate-400">Click any field to copy</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-mono font-bold">First Name</div>
                    <div className="text-sm font-bold text-white">Md Jahan</div>
                  </div>
                  <button
                    onClick={() => handleCopy('Md Jahan', 'xoom-fn')}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-sky-400 hover:text-slate-950 text-slate-300 transition-all cursor-pointer"
                  >
                    {copiedKey === 'xoom-fn' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-mono font-bold">Last Name</div>
                    <div className="text-sm font-bold text-white">Ali</div>
                  </div>
                  <button
                    onClick={() => handleCopy('Ali', 'xoom-ln')}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-sky-400 hover:text-slate-950 text-slate-300 transition-all cursor-pointer"
                  >
                    {copiedKey === 'xoom-ln' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-mono font-bold">bKash Number</div>
                    <div className="text-sm font-mono font-bold text-pink-400">1774786497</div>
                  </div>
                  <button
                    onClick={() => handleCopy('1774786497', 'xoom-phone')}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-sky-400 hover:text-slate-950 text-slate-300 transition-all cursor-pointer"
                  >
                    {copiedKey === 'xoom-phone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-mono font-bold">Postal Code / City</div>
                    <div className="text-sm font-bold text-white">6320, Rohanpur</div>
                  </div>
                  <button
                    onClick={() => handleCopy('6320, Rohanpur', 'xoom-city')}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-sky-400 hover:text-slate-950 text-slate-300 transition-all cursor-pointer"
                  >
                    {copiedKey === 'xoom-city' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

              </div>

              {/* Full Address Row */}
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3">
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-mono font-bold">Registered Recipient Address</div>
                  <div className="text-xs font-semibold text-slate-200 mt-0.5">
                    Rohanpur, Gomastapur, Chapai Nawabganj, Postcode: 6320, Bangladesh
                  </div>
                </div>
                <button
                  onClick={() => handleCopy('Rohanpur, Gomastapur, Chapai Nawabganj, 6320, Bangladesh', 'xoom-addr')}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-sky-400 hover:text-slate-950 text-xs font-bold text-slate-300 transition-all flex items-center gap-1.5 flex-shrink-0 cursor-pointer"
                >
                  {copiedKey === 'xoom-addr' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>Copy Address</span>
                </button>
              </div>
            </div>

            {/* Step by Step Flow Grid */}
            <div className="space-y-4">
              <h3 className="text-sm font-mono font-bold text-slate-300 uppercase tracking-wider">
                Xoom Step-by-Step Instructions (7 Steps)
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {XOOM_STEPS.map(step => (
                  <div
                    key={step.stepNumber}
                    className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/90 flex gap-3.5"
                  >
                    <div className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-300 border border-sky-500/30 flex items-center justify-center font-mono font-bold text-xs flex-shrink-0">
                      {step.stepNumber}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xs font-bold text-white">{step.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{step.instruction}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Embedded Live Video Tutorial Player */}
            <div id="xoom-tutorial-player">
              <VideoTutorialPlayer
                videoId="fsR364Ef8dU"
                title="How to Send Money from PayPal to bKash via Xoom"
                subtitle="Watch step-by-step instructions on transferring PayPal balances or linked bank cards straight to our verified bKash mobile account."
                platformName="PayPal Xoom"
                badgeColor="bg-sky-500/20 text-sky-300 border-sky-500/30"
                accentColor="border-sky-500/40"
                keyStepsSummary={[
                  "Country: Bangladesh → Transfer Method: Mobile Wallet",
                  "Wallet Partner: bKash | Recipient: Md Jahan Ali (1774786497)",
                  "Address: 6320 Rohanpur, Chapai Nawabganj | Send from PayPal"
                ]}
              />
            </div>

          </div>
        )}

        {/* VIEW D: WISE (TRANSFERWISE) */}
        {activeTab === 'wise' && (
          <div className="space-y-8 animate-fadeIn">
            
            {/* Intro Banner */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#163300] via-slate-900 to-slate-950 border border-emerald-500/30 shadow-2xl relative overflow-hidden">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                
                <div className="space-y-3 max-w-2xl">
                  <div className="flex items-center gap-3">
                    <WiseLogo className="h-8 w-auto" />
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      LOWEST FEES & REAL EXCHANGE RATE
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Direct Transfer via Wise to bKash
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Wise provides real mid-market exchange rates without hidden fees. You can easily send BDT to our verified bKash mobile account using your Wise balance or local bank account.
                  </p>

                  <div className="flex items-center gap-2 pt-2">
                    <BkashLogo className="h-5 w-auto" />
                    <span className="text-xs text-slate-400 font-mono">Direct bKash BDT Deposit</span>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="flex flex-col gap-2.5 w-full md:w-auto">
                  <a
                    href="https://wise.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02]"
                  >
                    <span>Open Wise Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => {
                      document.getElementById('wise-tutorial-player')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-all cursor-pointer"
                  >
                    <Play className="w-4 h-4 text-red-400 fill-red-400" />
                    <span>Watch Video Tutorial (In-Page)</span>
                  </button>
                </div>

              </div>
            </div>

            {/* Quick Beneficiary & Address Copy Card */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                    Recipient Information for Wise
                  </h3>
                </div>
                <span className="text-[11px] text-slate-400">Click any field to copy</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-mono font-bold">Account Holder Name</div>
                    <div className="text-sm font-bold text-white">Md Jahan Ali</div>
                  </div>
                  <button
                    onClick={() => handleCopy('Md Jahan Ali', 'wise-name')}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-emerald-400 hover:text-slate-950 text-slate-300 transition-all cursor-pointer"
                  >
                    {copiedKey === 'wise-name' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-mono font-bold">Country Code</div>
                    <div className="text-sm font-mono font-bold text-white">+880 (Bangladesh)</div>
                  </div>
                  <button
                    onClick={() => handleCopy('+880', 'wise-cc')}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-emerald-400 hover:text-slate-950 text-slate-300 transition-all cursor-pointer"
                  >
                    {copiedKey === 'wise-cc' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-mono font-bold">bKash Number</div>
                    <div className="text-sm font-mono font-bold text-pink-400">1774786497</div>
                  </div>
                  <button
                    onClick={() => handleCopy('1774786497', 'wise-phone')}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-emerald-400 hover:text-slate-950 text-slate-300 transition-all cursor-pointer"
                  >
                    {copiedKey === 'wise-phone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-mono font-bold">City / Postal Code</div>
                    <div className="text-sm font-bold text-white">Rohanpur, 6320</div>
                  </div>
                  <button
                    onClick={() => handleCopy('Rohanpur, 6320', 'wise-post')}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-emerald-400 hover:text-slate-950 text-slate-300 transition-all cursor-pointer"
                  >
                    {copiedKey === 'wise-post' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

              </div>

              {/* Full Address Row */}
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3">
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-mono font-bold">Full Registered Address</div>
                  <div className="text-xs font-semibold text-slate-200 mt-0.5">
                    Rohanpur, Gomastapur, Chapai Nawabganj, 6320, Bangladesh
                  </div>
                </div>
                <button
                  onClick={() => handleCopy('Rohanpur, Gomastapur, Chapai Nawabganj, 6320, Bangladesh', 'wise-addr')}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-emerald-400 hover:text-slate-950 text-xs font-bold text-slate-300 transition-all flex items-center gap-1.5 flex-shrink-0 cursor-pointer"
                >
                  {copiedKey === 'wise-addr' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>Copy Address</span>
                </button>
              </div>
            </div>

            {/* Step by Step Flow Grid */}
            <div className="space-y-4">
              <h3 className="text-sm font-mono font-bold text-slate-300 uppercase tracking-wider">
                Wise Step-by-Step Instructions (8 Steps)
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {WISE_STEPS.map(step => (
                  <div
                    key={step.stepNumber}
                    className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/90 flex gap-3.5"
                  >
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center justify-center font-mono font-bold text-xs flex-shrink-0">
                      {step.stepNumber}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xs font-bold text-white">{step.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{step.instruction}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Embedded Live Video Tutorial Player */}
            <div id="wise-tutorial-player">
              <VideoTutorialPlayer
                videoId="Br4sK2nPvXs"
                title="How to Send Money with Wise to bKash in Bangladesh"
                subtitle="Complete video tutorial demonstrating how to use Wise for sending BDT directly to our bKash wallet at real mid-market exchange rates."
                platformName="Wise to bKash"
                badgeColor="bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                accentColor="border-emerald-500/40"
                keyStepsSummary={[
                  "Click Send Money → Select Bangladeshi Taka (BDT)",
                  "Choose Delivery Method: bKash Account",
                  "Enter Recipient Name: Md Jahan Ali | Phone: +880 1774786497"
                ]}
              />
            </div>

          </div>
        )}

        {/* VIEW E: ALL VIDEO TUTORIALS */}
        {activeTab === 'videos' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Header Banner */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-950 border border-indigo-500/30 shadow-2xl relative overflow-hidden">
              <div className="space-y-3 max-w-3xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/20 text-red-400 border border-red-500/30 flex items-center justify-center">
                    <Play className="w-4 h-4 fill-red-400" />
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    INTERACTIVE VIDEO GUIDES
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Step-by-Step Payment Video Walkthroughs
                </h2>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Watch official video tutorials directly within this page. Learn how to quickly transfer funds via Credit/Debit Cards (Remitly), PayPal (Xoom), or Wise directly to our verified Bangladeshi bKash account.
                </p>
              </div>

              {/* Video Selector Tabs */}
              <div className="flex flex-wrap items-center gap-2.5 pt-6">
                <button
                  onClick={() => setSelectedTutorialVideo('remitly')}
                  className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all cursor-pointer ${
                    selectedTutorialVideo === 'remitly'
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-400'
                      : 'bg-slate-800/90 hover:bg-slate-700 text-slate-300 border border-slate-700'
                  }`}
                >
                  <RemitlyLogo className="h-4 w-auto" />
                  <span>Remitly (Card / Bank)</span>
                </button>

                <button
                  onClick={() => setSelectedTutorialVideo('xoom')}
                  className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all cursor-pointer ${
                    selectedTutorialVideo === 'xoom'
                      ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/30 border border-sky-400'
                      : 'bg-slate-800/90 hover:bg-slate-700 text-slate-300 border border-slate-700'
                  }`}
                >
                  <XoomLogo className="h-4 w-auto" />
                  <span>PayPal (Xoom)</span>
                </button>

                <button
                  onClick={() => setSelectedTutorialVideo('wise')}
                  className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all cursor-pointer ${
                    selectedTutorialVideo === 'wise'
                      ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 border border-emerald-400'
                      : 'bg-slate-800/90 hover:bg-slate-700 text-slate-300 border border-slate-700'
                  }`}
                >
                  <WiseLogo className="h-4 w-auto" />
                  <span>Wise (TransferWise)</span>
                </button>
              </div>
            </div>

            {/* Currently Selected Active Video Player */}
            <div>
              {selectedTutorialVideo === 'remitly' && (
                <div className="space-y-6">
                  <VideoTutorialPlayer
                    videoId="44N4NnWxVqU"
                    title="How to Send Money with Remitly to bKash (Bangladesh)"
                    subtitle="Learn how to pay using Visa, Mastercard, or bank deposit directly to our bKash wallet with low transfer fees."
                    platformName="Remitly Card to bKash"
                    badgeColor="bg-blue-500/20 text-blue-300 border-blue-500/30"
                    accentColor="border-blue-500/40"
                    keyStepsSummary={[
                      "Country: Bangladesh → Delivery: Mobile Money (bKash)",
                      "Recipient Name: Md Jahan Ali | Mobile: 1774786497",
                      "Pay securely using any International Debit/Credit Card"
                    ]}
                  />

                  <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
                    <div className="space-y-1">
                      <div className="text-sm font-bold text-white">Ready to pay with Remitly?</div>
                      <div className="text-xs text-slate-400">View recipient credentials or open the Remitly portal.</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setActiveTab('remitly')}
                        className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all cursor-pointer"
                      >
                        Go to Remitly Payment Tab
                      </button>
                      <a
                        href="https://www.remitly.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-bold flex items-center gap-1.5 transition-all"
                      >
                        <span>Open Remitly</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {selectedTutorialVideo === 'xoom' && (
                <div className="space-y-6">
                  <VideoTutorialPlayer
                    videoId="fsR364Ef8dU"
                    title="How to Send Money from PayPal to bKash via Xoom"
                    subtitle="Watch step-by-step instructions on transferring PayPal balances or linked bank cards straight to our verified bKash mobile account."
                    platformName="PayPal Xoom"
                    badgeColor="bg-sky-500/20 text-sky-300 border-sky-500/30"
                    accentColor="border-sky-500/40"
                    keyStepsSummary={[
                      "Country: Bangladesh → Transfer Method: Mobile Wallet",
                      "Wallet Partner: bKash | Recipient: Md Jahan Ali (1774786497)",
                      "Address: 6320 Rohanpur, Chapai Nawabganj | Send from PayPal"
                    ]}
                  />

                  <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
                    <div className="space-y-1">
                      <div className="text-sm font-bold text-white">Ready to pay with PayPal / Xoom?</div>
                      <div className="text-xs text-slate-400">View recipient credentials or open the Xoom portal.</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setActiveTab('xoom')}
                        className="px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold transition-all cursor-pointer"
                      >
                        Go to PayPal Xoom Tab
                      </button>
                      <a
                        href="https://www.xoom.com/bangladesh/send-money"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 text-xs font-bold flex items-center gap-1.5 transition-all"
                      >
                        <span>Open Xoom</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {selectedTutorialVideo === 'wise' && (
                <div className="space-y-6">
                  <VideoTutorialPlayer
                    videoId="Br4sK2nPvXs"
                    title="How to Send Money with Wise to bKash in Bangladesh"
                    subtitle="Complete video tutorial demonstrating how to use Wise for sending BDT directly to our bKash wallet at real mid-market exchange rates."
                    platformName="Wise to bKash"
                    badgeColor="bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                    accentColor="border-emerald-500/40"
                    keyStepsSummary={[
                      "Click Send Money → Select Bangladeshi Taka (BDT)",
                      "Choose Delivery Method: bKash Account",
                      "Enter Recipient Name: Md Jahan Ali | Phone: +880 1774786497"
                    ]}
                  />

                  <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
                    <div className="space-y-1">
                      <div className="text-sm font-bold text-white">Ready to pay with Wise?</div>
                      <div className="text-xs text-slate-400">View recipient credentials or open the Wise portal.</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setActiveTab('wise')}
                        className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all cursor-pointer"
                      >
                        Go to Wise Payment Tab
                      </button>
                      <a
                        href="https://wise.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-xs font-bold flex items-center gap-1.5 transition-all"
                      >
                        <span>Open Wise</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Grid of All Available Guides */}
            <div className="space-y-4 pt-4 border-t border-slate-800">
              <h3 className="text-sm font-mono font-bold text-slate-300 uppercase tracking-wider">
                All Available Payment Tutorials
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Remitly Card */}
                <div
                  onClick={() => setSelectedTutorialVideo('remitly')}
                  className={`p-4 rounded-2xl bg-slate-900/80 border transition-all cursor-pointer ${
                    selectedTutorialVideo === 'remitly'
                      ? 'border-blue-500 bg-blue-950/20'
                      : 'border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <RemitlyLogo className="h-6 w-auto" />
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      Card / Bank
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-white mb-1">Remitly to bKash Guide</h4>
                  <p className="text-[11px] text-slate-400">Step-by-step payment using Visa, Mastercard, or Bank Transfer.</p>
                  <div className="mt-3 flex items-center gap-1.5 text-xs font-bold text-cyan-400">
                    <Play className="w-3 h-3 fill-cyan-400" />
                    <span>Watch Tutorial</span>
                  </div>
                </div>

                {/* Xoom Card */}
                <div
                  onClick={() => setSelectedTutorialVideo('xoom')}
                  className={`p-4 rounded-2xl bg-slate-900/80 border transition-all cursor-pointer ${
                    selectedTutorialVideo === 'xoom'
                      ? 'border-sky-500 bg-sky-950/20'
                      : 'border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <XoomLogo className="h-6 w-auto" />
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">
                      PayPal
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-white mb-1">PayPal via Xoom Guide</h4>
                  <p className="text-[11px] text-slate-400">How to send funds from PayPal balance directly to bKash.</p>
                  <div className="mt-3 flex items-center gap-1.5 text-xs font-bold text-sky-400">
                    <Play className="w-3 h-3 fill-sky-400" />
                    <span>Watch Tutorial</span>
                  </div>
                </div>

                {/* Wise Card */}
                <div
                  onClick={() => setSelectedTutorialVideo('wise')}
                  className={`p-4 rounded-2xl bg-slate-900/80 border transition-all cursor-pointer ${
                    selectedTutorialVideo === 'wise'
                      ? 'border-emerald-500 bg-emerald-950/20'
                      : 'border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <WiseLogo className="h-6 w-auto" />
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Wise BDT
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-white mb-1">Wise Transfer Guide</h4>
                  <p className="text-[11px] text-slate-400">Send money at mid-market rate directly to bKash account.</p>
                  <div className="mt-3 flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                    <Play className="w-3 h-3 fill-emerald-400" />
                    <span>Watch Tutorial</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* 4. CONFIRMATION / SUBMIT PROOF SECTION */}
        <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-[#0d1624] to-slate-900 border border-cyan-500/30 shadow-2xl space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <h3 className="text-xl font-bold text-white">Completed Your Payment?</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Please notify us immediately after sending funds. Provide your Transaction Hash / ID or receipt screenshot so we can verify and confirm your service right away.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <a
                href={getWhatsappPaymentUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial px-5 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02]"
              >
                <WhatsAppLogo className="w-4 h-4 text-slate-950" />
                <span>Send Proof on WhatsApp</span>
              </a>

              <a
                href="https://t.me/mjjahanali"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial px-5 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20 transition-all hover:scale-[1.02]"
              >
                <TelegramLogo className="w-4 h-4 text-slate-950" />
                <span>Telegram</span>
              </a>

              <a
                href={`mailto:mjjahanali@gmail.com?subject=Payment%20Confirmation%20Receipt&body=Hello%20Jahan,%0A%0AI%20have%20sent%20payment%20for%20our%20project.%0AMethod:%20${activeTab.toUpperCase()}%0ATransaction%20ID:%20`}
                className="flex-1 sm:flex-initial px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-all"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Email Receipt</span>
              </a>
            </div>

          </div>
        </section>

        {/* 5. IMPORTANT PAYMENT SAFETY CHECKLIST */}
        <section className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2.5">
            <Shield className="w-5 h-5 text-cyan-400" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Important Safety & Security Rules
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300 leading-relaxed">
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1">
              <div className="font-bold text-cyan-300">1. Network Accuracy</div>
              <p className="text-slate-400 text-[11px]">Always verify the exact network when sending crypto (e.g. TRC20 vs ERC20). Blockchain transactions cannot be reversed.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1">
              <div className="font-bold text-cyan-300">2. Save Transaction Hash</div>
              <p className="text-slate-400 text-[11px]">Keep a copy of your TXID / Transfer Reference until we confirm receipt and update your project milestone.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1">
              <div className="font-bold text-cyan-300">3. Verified Accounts Only</div>
              <p className="text-slate-400 text-[11px]">Only send to the verified addresses listed on this official domain (mjjahan.com/payment). Beware of impersonators.</p>
            </div>
          </div>
        </section>

        {/* 6. FREQUENTLY ASKED QUESTIONS (ACCORDION) */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-cyan-400" />
              <h3 className="text-base font-bold text-white font-mono uppercase tracking-wider">
                Payment Frequently Asked Questions
              </h3>
            </div>
            <span className="text-xs text-slate-400">10 Detailed Answers</span>
          </div>

          <div className="space-y-2.5">
            {PAYMENT_FAQS.map((faq, idx) => {
              const isOpen = openFaqIndices.includes(idx);
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-slate-900/70 border border-slate-800 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-800/50 transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-bold text-slate-200">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-cyan-400 transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 text-xs text-slate-400 leading-relaxed border-t border-slate-800/60 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

      </main>

      {/* QR CODE EXPANDED MODAL */}
      <AnimatePresence>
        {activeQrModalWallet && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveQrModalWallet(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="w-full max-w-sm p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl text-center space-y-4 relative"
            >
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  {getCryptoLogo(activeQrModalWallet.symbol, "w-6 h-6")}
                  <span className="text-sm font-bold text-white">{activeQrModalWallet.name}</span>
                </div>
                <button
                  onClick={() => setActiveQrModalWallet(null)}
                  className="text-slate-400 hover:text-white text-xs font-mono"
                >
                  ✕ Close
                </button>
              </div>

              <div className="p-4 bg-white rounded-2xl inline-block shadow-xl">
                <QRCodeSVG
                  value={activeQrModalWallet.qrValue}
                  size={220}
                  level="H"
                  includeMargin={false}
                />
              </div>

              <div className="space-y-1">
                <div className="text-xs font-mono font-bold text-cyan-400">{activeQrModalWallet.networkBadge}</div>
                <div className="text-[11px] font-mono text-slate-300 break-all select-all p-2 rounded bg-slate-950 border border-slate-800">
                  {activeQrModalWallet.address}
                </div>
              </div>

              <button
                onClick={() => handleCopy(activeQrModalWallet.address, `modal-${activeQrModalWallet.id}`)}
                className={`w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                  copiedKey === `modal-${activeQrModalWallet.id}`
                    ? 'bg-emerald-500 text-slate-950'
                    : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950'
                }`}
              >
                {copiedKey === `modal-${activeQrModalWallet.id}` ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Deposit Address</span>
                  </>
                )}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="mt-16 border-t border-slate-900 bg-[#030508] py-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p className="text-slate-400">
            © 2026 Jahan Ali (Md Jahan Ali) • Founder, Flowdigita LLC & Dreams Fly International
          </p>
          <p className="text-slate-600 text-[11px]">
            Direct Verification & Support: WhatsApp +880 1650-222581 • Email: mjjahanali@gmail.com
          </p>
        </div>
      </footer>

    </div>
  );
}

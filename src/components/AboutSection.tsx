import { motion } from 'motion/react';
import { User, MapPin, Mail, Phone, GraduationCap, Briefcase, Sparkles, Building, Globe } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';

export default function AboutSection() {
  return (
    <section id="about-details" className="py-24 relative overflow-hidden bg-slate-950 border-t border-slate-800/80">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Editorial Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl p-8 bg-slate-900/80 border border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-2xl mb-6 shadow-lg shadow-cyan-500/20">
                JA
              </div>

              <h3 className="text-2xl font-bold text-white mb-1 font-display">
                {PERSONAL_INFO.name}
              </h3>
              <div className="text-xs font-semibold text-cyan-400 mb-6 tracking-wide uppercase">
                {PERSONAL_INFO.primaryTitle}
              </div>

              {/* Verified Contact Details Grid */}
              <div className="space-y-4 pt-6 border-t border-slate-800 text-xs">
                <div className="flex items-start gap-3 text-slate-300">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-white">Location</span>
                    <span className="text-slate-400">{PERSONAL_INFO.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-300">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-white">Direct Email</span>
                    <a href={SOCIAL_LINKS.email} className="text-cyan-400 hover:underline">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-300">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-white">Direct Mobile & WhatsApp</span>
                    <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-emerald-400">
                      {PERSONAL_INFO.phoneFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-300">
                  <GraduationCap className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-white">Higher Education</span>
                    <span className="text-slate-400">BBA (Rohanpur Yousuf Ali Gov. College) • MBA (University of Dhaka, Running)</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Narrative Copy */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <User className="w-3.5 h-3.5" />
              <span>Personal Profile</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6 font-display">
              A Little About Me
            </h2>

            <div className="space-y-4 text-base text-slate-300 leading-relaxed">
              <p>
                My name is <strong className="text-white font-semibold">Jahan Ali</strong>, based in Rohanpur, Gomastapur, Chapai Nawabganj, Bangladesh. I began my digital journey in 2020 through independent freelance projects, focusing on the fundamentals of digital marketing, search engine optimization, and web technology.
              </p>

              <p>
                As client requirements expanded, I scaled from individual freelance execution into digital marketing strategy and full agency ownership — founding <strong className="text-cyan-300 font-semibold">Flowdigita LLC</strong> to deliver structured SEO, paid advertising, and web solutions for clients worldwide.
              </p>

              <p>
                In 2026, I further expanded my entrepreneurial scope by founding <strong className="text-blue-300 font-semibold">Dreams Fly International</strong>, a venture dedicated to international air ticketing across major Global Distribution Systems (Galileo, Amadeus, Sabre), visa consultation, and work permit application assistance.
              </p>

              <p>
                Currently pursuing my <strong className="text-white font-semibold">MBA in Management</strong>, I continuously unite strategic business management with digital technology and practical venture development.
              </p>
            </div>

            {/* Quick Venture Summary Badges */}
            <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="flex items-center gap-2 font-bold text-white text-sm mb-1">
                  <Building className="w-4 h-4 text-cyan-400" />
                  <span>Flowdigita LLC</span>
                </div>
                <div className="text-xs text-slate-400">Digital Marketing & Growth Agency</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="flex items-center gap-2 font-bold text-white text-sm mb-1">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span>Dreams Fly International</span>
                </div>
                <div className="text-xs text-slate-400">Air Ticketing & Visa Consultation</div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

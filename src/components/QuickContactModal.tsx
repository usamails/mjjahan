import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Phone, MessageSquare, Send, CheckCircle2, Copy, Check, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';

interface QuickContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickContactModal({ isOpen, onClose }: QuickContactModalProps) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleQuickSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Consultation Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Hello Jahan,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative max-w-lg w-full bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl p-6 sm:p-8 text-white overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 flex items-center justify-center font-bold">
              JA
            </div>
            <div>
              <h3 className="text-xl font-bold font-display">Let's Connect</h3>
              <p className="text-xs text-cyan-400 font-medium">Jahan Ali — Digital Entrepreneur & Marketer</p>
            </div>
          </div>

          <p className="text-xs text-slate-300 mb-6">
            Reach out directly for digital marketing, Flowdigita LLC agency services, or Dreams Fly International travel & visa consulting.
          </p>

          {/* Quick Direct Actions */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800/60 hover:border-emerald-500 text-emerald-300 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp Chat</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Email' : 'Copy Email'}</span>
            </button>
          </div>

          {/* Quick Note Form */}
          {submitted ? (
            <div className="p-6 text-center space-y-2 rounded-2xl bg-slate-950/60 border border-slate-800">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
              <div className="text-sm font-bold text-white">Opening Email Client...</div>
              <p className="text-xs text-slate-400">You can also message directly on WhatsApp: {PERSONAL_INFO.phoneFormatted}</p>
            </div>
          ) : (
            <form onSubmit={handleQuickSubmit} className="space-y-3">
              <div>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/90 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/90 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>
              <div>
                <textarea
                  rows={3}
                  required
                  placeholder="Brief note or inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/90 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Send Direct Inquiry</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

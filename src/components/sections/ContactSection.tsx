import React, { useState } from 'react';
import { motion } from 'motion/react';
import emailjs from '@emailjs/browser';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { useCopy } from '../../hooks/useCopy';
import { useScrollTo } from '../../hooks/useScrollTo';
import { ContactBackground } from '../ui/Backgrounds';
import {
  MessageSquare,
  Mail,
  Github,
  Globe,
  Phone,
  MapPin,
  Send,
  Check,
  Copy,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Business Website',
    message: '',
  });

  const { copiedField, copyToClipboard } = useCopy();
  const scrollTo = useScrollTo();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [infoNotice, setInfoNotice] = useState('');

  const handleCopy = (text: string, field: string) => {
    copyToClipboard(text, field);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setInfoNotice('');

    // Client-side Validation Checks
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Please write your project details or message.');
      return;
    }

    setLoading(true);

    /**
     * EMAILJS ENVIRONMENT VARIABLE READ:
     * Credentials fetched dynamically from Vite environment variables (defined in .env / .env.example).
     * Set these in your Vercel or deployment settings:
     * - VITE_EMAILJS_PUBLIC_KEY
     * - VITE_EMAILJS_SERVICE_ID
     * - VITE_EMAILJS_TEMPLATE_ID
     */
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'Ot4ZReW9QWHzOY9bh';
    const rawServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const serviceId = (rawServiceId && rawServiceId !== 'service_xiuv2uc') ? rawServiceId : 'service_fxcabua';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_7kjthvx';

    if (publicKey && serviceId && templateId) {
      try {
        // Initialize EmailJS Browser SDK
        emailjs.init(publicKey);

        // Send template parameters mapping common EmailJS template variables
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            name: formData.name,
            user_name: formData.name,
            from_email: formData.email,
            email: formData.email,
            user_email: formData.email,
            reply_to: formData.email,
            service_requested: formData.service,
            service: formData.service,
            message: formData.message,
            subject: `New Inquiry: ${formData.service} from ${formData.name}`,
          },
          publicKey
        );
        // Clear form after successful dispatch
        setSubmitted(true);
        setFormData({ name: '', email: '', service: 'Business Website', message: '' });
      } catch (err: any) {
        console.warn('EmailJS delivery status:', err);
        const errorDetail =
          err?.text ||
          err?.message ||
          (typeof err === 'string' ? err : 'Unable to connect to EmailJS service.');
        
        setErrorMessage(
          `EmailJS Delivery Status: "${errorDetail}". (Service: ${serviceId}, Template: ${templateId}). Please ensure this service & template are active in your EmailJS dashboard.`
        );
      } finally {
        setLoading(false);
      }
    } else {
      // Fallback mode when environment variables are not yet configured in local/preview env
      console.warn('EmailJS keys not found in environment. Set VITE_EMAILJS_PUBLIC_KEY, VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID');
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
        setInfoNotice(
          'Preview mode submission! Add VITE_EMAILJS_PUBLIC_KEY, VITE_EMAILJS_SERVICE_ID, and VITE_EMAILJS_TEMPLATE_ID to your .env file to enable live email delivery to your inbox.'
        );
        setFormData({ name: '', email: '', service: 'Business Website', message: '' });
      }, 1000);
    }
  };

  // Scroll Trigger Sequence Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 overflow-hidden bg-[#060606]">
      {/* REUSABLE MODULAR CONTACT BACKGROUND */}
      <ContactBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="space-y-16"
        >
          {/* HEADER BLOCK WITH LARGE TYPOGRAPHY & ANIMATED GRADIENT */}
          <div className="space-y-6 max-w-4xl">
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono text-xs font-bold uppercase tracking-widest backdrop-blur-md">
              <Sparkles className="w-4 h-4" />
              <span>07 // START A PROJECT</span>
            </motion.div>

            {/* LARGE HEADING: "Let's Build Something Great." */}
            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight text-white leading-[1.05]"
            >
              LET'S BUILD{' '}
              <span className="text-zinc-400">
                SOMETHING GREAT.
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-zinc-300 text-base sm:text-xl leading-relaxed font-normal max-w-2xl"
            >
              Have a project in mind, need a brand website redesign, or want to launch a new digital presence? Reach out directly via WhatsApp, email, or send an inquiry below.
            </motion.p>
          </div>

          {/* QUICK BUTTONS ROW: WhatsApp, Email, GitHub, Portfolio */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* 1. WHATSAPP BUTTON */}
            <a
              href={PERSONAL_INFO.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="group relative p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-500 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex items-center justify-between"
            >
              <div className="flex items-center space-x-3.5">
                <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-zinc-400 uppercase tracking-widest font-bold">
                    WhatsApp Chat
                  </span>
                  <span className="block text-sm font-bold text-white font-mono">
                    {PERSONAL_INFO.whatsapp}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-white group-hover:rotate-45 transition-transform" />
            </a>

            {/* 2. EMAIL BUTTON */}
            <a
              href={PERSONAL_INFO.emailMailto}
              className="group relative p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-500 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex items-center justify-between"
            >
              <div className="flex items-center space-x-3.5">
                <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-zinc-400 uppercase tracking-widest font-bold">
                    Email Direct
                  </span>
                  <span className="block text-sm font-bold text-white font-mono truncate max-w-[130px] sm:max-w-[150px]">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-white group-hover:rotate-45 transition-transform" />
            </a>

            {/* 3. GITHUB BUTTON */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="group relative p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-500 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex items-center justify-between"
            >
              <div className="flex items-center space-x-3.5">
                <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-zinc-400 uppercase tracking-widest font-bold">
                    GitHub Profile
                  </span>
                  <span className="block text-sm font-bold text-white font-mono">
                    @kganya782-ai
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-white group-hover:rotate-45 transition-transform" />
            </a>

            {/* 4. PORTFOLIO BUTTON */}
            <button
              onClick={() => scrollTo('hero')}
              className="group relative p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-500 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex items-center justify-between text-left cursor-pointer"
            >
              <div className="flex items-center space-x-3.5">
                <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-zinc-400 uppercase tracking-widest font-bold">
                    Live Portfolio
                  </span>
                  <span className="block text-sm font-bold text-white font-mono">
                    kganyadev.vercel.app
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-white group-hover:rotate-45 transition-transform" />
            </button>
          </motion.div>

          {/* MAIN TWO-COLUMN CONTACT BODY: Form + Socials & Quick Copies */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* LEFT COLUMN: Interactive Inquiry Form */}
            <motion.div variants={itemVariants} className="lg:col-span-7">
              <div className="p-7 sm:p-10 rounded-3xl bg-[#121212]/90 backdrop-blur-2xl border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-zinc-800/20 rounded-full blur-3xl pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <h3 className="text-2xl font-display font-extrabold text-white">
                        Send a Direct Message
                      </h3>
                      <p className="text-xs text-zinc-400 font-mono">
                        Guaranteed response within 12-24 hours
                      </p>
                    </div>

                    <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300 text-[10px] font-mono font-bold uppercase">
                      <span className="w-2 h-2 rounded-full bg-zinc-300 animate-ping" />
                      <span>LIVE INBOX</span>
                    </span>
                  </div>

                  {errorMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-zinc-900 border border-zinc-700 flex flex-col space-y-3 text-zinc-300 text-xs font-mono"
                    >
                      <div className="flex items-start space-x-3">
                        <AlertCircle className="w-5 h-5 shrink-0 text-zinc-400 mt-0.5" />
                        <span className="leading-relaxed">{errorMessage}</span>
                      </div>
                      <div className="pt-1 flex items-center space-x-3">
                        <a
                          href={`mailto:${PERSONAL_INFO.email}?subject=Inquiry: ${encodeURIComponent(formData.service)}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.name + ' (' + formData.email + ')')}`}
                          target="_blank"
                          rel="noreferrer"
                          className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-[11px] font-bold uppercase transition-colors flex items-center space-x-1.5"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Send via Email Client</span>
                        </a>
                      </div>
                    </motion.div>
                  )}

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-8 rounded-2xl bg-zinc-900 border border-zinc-700 text-center space-y-4"
                    >
                      <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center mx-auto shadow-xl">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h4 className="text-2xl font-display font-bold text-white">
                        Message Sent Successfully!
                      </h4>
                      <p className="text-zinc-300 text-sm max-w-md mx-auto leading-relaxed">
                        Thank you for reaching out! Kganya has received your inquiry and will respond to your email promptly.
                      </p>
                      {infoNotice && (
                        <p className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono">
                          {infoNotice}
                        </p>
                      )}
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setErrorMessage('');
                          setInfoNotice('');
                        }}
                        className="px-6 py-2.5 rounded-xl bg-white text-black font-mono text-xs font-bold uppercase transition-all cursor-pointer shadow-lg hover:bg-zinc-200"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="block text-xs font-mono uppercase text-zinc-400 font-bold">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. David Smith"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3.5 rounded-xl bg-[#0a0a0a] border border-white/10 text-white text-sm focus:border-white focus:ring-1 focus:ring-white outline-none transition-all"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="block text-xs font-mono uppercase text-zinc-400 font-bold">
                            Your Email *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="david@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3.5 rounded-xl bg-[#0a0a0a] border border-white/10 text-white text-sm focus:border-white focus:ring-1 focus:ring-white outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-mono uppercase text-zinc-400 font-bold">
                          Service Needed
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-[#0a0a0a] border border-white/10 text-white text-sm focus:border-white focus:ring-1 focus:ring-white outline-none transition-all cursor-pointer"
                        >
                          <option value="Business Website">Business Website</option>
                          <option value="Landing Page">Landing Page</option>
                          <option value="Website Redesign">Website Redesign</option>
                          <option value="Responsive Mobile Fixes">Responsive Mobile Fixes</option>
                          <option value="Custom Web App">Custom Web App</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-mono uppercase text-zinc-400 font-bold">
                          Project Details *
                        </label>
                        <textarea
                          required
                          rows={4}
                          placeholder="Tell me about your business, website goals, preferred features..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-[#0a0a0a] border border-white/10 text-white text-sm focus:border-white focus:ring-1 focus:ring-white outline-none transition-all resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-xs font-mono uppercase tracking-widest transition-all duration-300 shadow-xl flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin text-black" />
                            <span>SENDING INQUIRY...</span>
                          </>
                        ) : (
                          <>
                            <span>SEND MESSAGE NOW</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Quick Copy Cards & Social Icon Grid */}
            <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6">
              {/* Quick Copy Contact Cards */}
              <div className="space-y-3">
                {/* Phone Copy */}
                <div className="p-4 rounded-2xl bg-[#121212]/90 border border-white/10 flex items-center justify-between group hover:border-zinc-500 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0a0a0a] text-zinc-300 border border-white/10 flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono text-zinc-500 uppercase">Direct Call</span>
                      <span className="text-sm font-bold text-white font-mono">{PERSONAL_INFO.phone}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                    className="p-2.5 rounded-xl bg-[#0a0a0a] text-zinc-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
                    title="Copy Phone"
                  >
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* WhatsApp Copy */}
                <div className="p-4 rounded-2xl bg-[#121212]/90 border border-white/10 flex items-center justify-between group hover:border-zinc-500 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0a0a0a] text-zinc-300 border border-white/10 flex items-center justify-center">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono text-zinc-500 uppercase">WhatsApp</span>
                      <span className="text-sm font-bold text-white font-mono">{PERSONAL_INFO.whatsapp}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.whatsapp, 'whatsapp')}
                    className="p-2.5 rounded-xl bg-[#0a0a0a] text-zinc-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
                    title="Copy WhatsApp"
                  >
                    {copiedField === 'whatsapp' ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Email Copy */}
                <div className="p-4 rounded-2xl bg-[#121212]/90 border border-white/10 flex items-center justify-between group hover:border-zinc-500 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0a0a0a] text-zinc-300 border border-white/10 flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono text-zinc-500 uppercase">Email</span>
                      <span className="text-sm font-bold text-white font-mono">{PERSONAL_INFO.email}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                    className="p-2.5 rounded-xl bg-[#0a0a0a] text-zinc-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Card */}
                <div className="p-4 rounded-2xl bg-[#121212]/90 border border-white/10 flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0a0a0a] text-zinc-300 border border-white/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-zinc-500 uppercase">Location</span>
                    <span className="text-sm font-bold text-white font-mono">{PERSONAL_INFO.location}</span>
                  </div>
                </div>
              </div>

              {/* Social Icons Card */}
              <div className="p-6 rounded-3xl bg-[#121212]/90 border border-white/10 space-y-4">
                <span className="block text-xs font-mono uppercase text-zinc-400 font-bold tracking-widest">
                  CONNECT ON SOCIAL MEDIA
                </span>
                <div className="grid grid-cols-3 gap-3">
                  <a
                    href={PERSONAL_INFO.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-zinc-500 text-zinc-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                    title="WhatsApp"
                  >
                    <MessageSquare className="w-5 h-5" />
                  </a>

                  <a
                    href={PERSONAL_INFO.emailMailto}
                    className="p-3.5 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-zinc-500 text-zinc-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                    title="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-zinc-500 text-zinc-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                    title="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


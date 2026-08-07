import React from 'react';
import { motion } from 'motion/react';
import { ArrowUp, Github, MessageSquare, Mail, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { useClock } from '../../hooks/useClock';
import { useScrollTo } from '../../hooks/useScrollTo';

export const Footer: React.FC = () => {
  const saTime = useClock('Africa/Johannesburg');
  const scrollTo = useScrollTo();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'why-choose-me', label: 'Why Choose Me' },
    { id: 'process', label: 'Process' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative bg-[#050505] text-white pt-20 pb-12 border-t border-white/10 overflow-hidden"
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-white/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Top Section: Brand & Quick Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand Info & Live Time */}
          <div className="md:col-span-6 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 p-0.5 shadow-lg flex items-center justify-center">
                <span className="font-display font-black text-white text-lg">
                  K
                </span>
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight text-white">
                KGANYA WEB DEVELOPMENT
              </span>
            </div>

            <p className="text-zinc-400 text-sm max-w-md leading-relaxed font-normal">
              Self-taught 15-year-old South African web developer dedicated to building fast, modern, and high-converting websites for businesses.
            </p>

            {/* Live South Africa Clock */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#121212] border border-white/10 text-xs font-mono text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-zinc-300 animate-pulse" />
              <span>South Africa Time:</span>
              <span className="text-white font-bold">{saTime || '02:00 PM'}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <span className="block text-xs font-mono uppercase text-zinc-400 font-bold tracking-widest">
              NAVIGATION
            </span>
            <ul className="space-y-2 text-sm font-mono text-zinc-400">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: More Links & Back to Top */}
          <div className="md:col-span-3 space-y-4">
            <span className="block text-xs font-mono uppercase text-zinc-400 font-bold tracking-widest">
              EXPLORE
            </span>
            <ul className="space-y-2 text-sm font-mono text-zinc-400">
              {navLinks.slice(4).map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright & Socials */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 font-mono gap-6">
          <p className="flex items-center space-x-1">
            <span>© {new Date().getFullYear()} KGANYA WEB DEV. Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-zinc-400 fill-zinc-400 inline" />
            <span>in South Africa.</span>
          </p>

          <div className="flex items-center space-x-3">
            <a
              href={PERSONAL_INFO.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-[#121212] border border-white/10 hover:border-zinc-500 text-zinc-400 hover:text-white transition-colors"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.emailMailto}
              className="p-2.5 rounded-xl bg-[#121212] border border-white/10 hover:border-zinc-500 text-zinc-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-[#121212] border border-white/10 hover:border-zinc-500 text-zinc-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white hover:bg-zinc-200 text-black transition-colors shadow-lg flex items-center space-x-1 cursor-pointer ml-2"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-[10px] font-bold">TOP</span>
            </button>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

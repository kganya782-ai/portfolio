import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sparkles, Send, Github } from 'lucide-react';
import { useScrollTo } from '../../hooks/useScrollTo';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollTo = useScrollTo();

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    scrollTo(id);
  };

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/80 shadow-2xl shadow-black/40'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          aria-label="Kganya Web Development Home"
          className="group flex items-center space-x-3 text-left focus:outline-none focus:ring-2 focus:ring-white rounded-xl cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center font-display font-bold text-lg text-white group-hover:scale-105 transition-transform">
            K
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg tracking-tight text-white group-hover:text-zinc-300 transition-colors leading-none">
              KGANYA
            </span>
            <span className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase leading-tight">
              WEB DEVELOPMENT
            </span>
          </div>
        </button>

        {/* Desktop Navigation Navigation Pills */}
        <nav
          role="navigation"
          aria-label="Desktop primary navigation"
          className="hidden md:flex items-center space-x-1 bg-zinc-900/70 border border-zinc-800/80 backdrop-blur-xl p-1.5 rounded-full shadow-inner"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative px-4 py-1.5 text-xs font-semibold tracking-wide rounded-full transition-all duration-200 uppercase cursor-pointer focus:outline-none focus:ring-2 focus:ring-white ${
                  isActive
                    ? 'text-black font-bold'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-white rounded-full shadow-lg shadow-white/20"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="p-2 text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-700 hover:border-zinc-500 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center"
          >
            <Github className="w-4 h-4" />
          </a>

          <button
            onClick={() => scrollToSection('contact')}
            className="flex items-center space-x-2 px-4 py-2 text-xs uppercase tracking-wider font-bold text-black bg-white hover:bg-zinc-200 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Let's Talk</span>
            <Send className="w-3.5 h-3.5 text-black" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-950/95 border-b border-zinc-800/80 backdrop-blur-2xl overflow-hidden"
          >
            <div className="px-6 py-6 space-y-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-display text-sm tracking-wider font-semibold uppercase flex items-center justify-between ${
                      isActive
                        ? 'bg-zinc-800 text-white border border-zinc-700'
                        : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <Sparkles className="w-4 h-4 text-white" />}
                  </button>
                );
              })}

              <div className="flex items-center space-x-3 mt-4">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 text-xs font-bold uppercase tracking-wider text-zinc-200 bg-zinc-900 border border-zinc-800 rounded-xl"
                >
                  <Github className="w-4 h-4 text-zinc-300" />
                  <span>GitHub Profile</span>
                </a>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 text-xs font-bold uppercase tracking-wider text-black bg-white rounded-xl shadow-lg"
                >
                  <span>Contact Me</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

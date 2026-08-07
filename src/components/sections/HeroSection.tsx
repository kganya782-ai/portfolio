import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Send, Sparkles, Code, Rocket, CheckCircle2 } from 'lucide-react';
import { ProfileImage } from '../ui/ProfileImage';
import profileImage from '../../assets/profile-original.png';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { useScrollTo } from '../../hooks/useScrollTo';
import { HomeBackground } from '../ui/Backgrounds';

export const HeroSection: React.FC = () => {
  const scrollTo = useScrollTo();
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll Trigger Container Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  // Item variants
  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
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
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center pt-28 sm:pt-36 pb-20 overflow-hidden bg-[#0a0a0a]"
    >
      {/* REUSABLE HOME BACKGROUND */}
      <HomeBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full"
        >
          {/* Left Side: Introduction Column */}
          <div className="lg:col-span-7 space-y-7 text-left w-full">
            {/* 1. Large Section Number & Badge */}
            <motion.div variants={itemVariants} className="flex items-center space-x-4">
              <span className="text-6xl sm:text-8xl font-display font-black tracking-tighter text-zinc-500 select-none drop-shadow-lg">
                01
              </span>
              <div className="space-y-1">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>01 // {PERSONAL_INFO.brandName}</span>
                  <Sparkles className="w-3.5 h-3.5 text-zinc-300 ml-1" />
                </div>
                <div className="h-[3px] w-20 bg-zinc-700 rounded-full" />
              </div>
            </motion.div>

            {/* 2. Greeting & Role */}
            <motion.div variants={itemVariants}>
              <p className="text-zinc-300 text-lg sm:text-xl font-medium">
                Hi, I'm <span className="text-white font-bold font-display text-2xl sm:text-3xl tracking-tight">{PERSONAL_INFO.name}</span> — <span className="text-zinc-200 font-semibold">{PERSONAL_INFO.role}</span>
              </p>
            </motion.div>

            {/* 3. Main Title */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-[1.06]">
                MODERN WEBSITES FOR <span className="text-white">MODERN BUSINESSES</span>
              </h1>
            </motion.div>

            {/* 4. Description */}
            <motion.p variants={itemVariants} className="text-zinc-400 text-base sm:text-lg max-w-xl leading-relaxed">
              {PERSONAL_INFO.mission}
            </motion.p>

            {/* 5. CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => scrollTo('contact')}
                className="group flex items-center space-x-3 px-8 py-4 rounded-full bg-white hover:bg-zinc-200 text-black font-bold text-xs uppercase tracking-wider shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <span>{PERSONAL_INFO.primaryCTA}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo('projects')}
                className="flex items-center space-x-2 px-8 py-4 rounded-full bg-[#161616] hover:bg-[#202020] border border-[#262626] hover:border-zinc-700 text-zinc-200 font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg"
              >
                <span>{PERSONAL_INFO.secondaryCTA}</span>
                <Send className="w-3.5 h-3.5 text-zinc-400" />
              </button>
            </motion.div>

            {/* 6. Micro Features Checklist */}
            <motion.div variants={itemVariants} className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs font-mono text-zinc-400">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-zinc-300" />
                <span>100% Custom Code</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-zinc-300" />
                <span>Mobile Responsive</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-zinc-300" />
                <span>SEO Optimised</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Professional Portrait Centered on the Right */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 w-full flex items-center justify-center relative"
          >
            <div className="relative w-full max-w-md mx-auto flex items-center justify-center">
              <ProfileImage image={profileImage} className="scale-105 sm:scale-110" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};



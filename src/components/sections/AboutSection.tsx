import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Globe, Sparkles, Heart, Terminal, Compass } from 'lucide-react';
import profile from '../../assets/profile-original.png';
import { AboutBackground } from '../ui/Backgrounds';

export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Track scroll position inside this section for background & text color transition
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Background transitions smoothly from dark -> light luxury slate -> dark
  const backgroundColor = useTransform(
    scrollYProgress,
    [0.1, 0.35, 0.75, 0.95],
    ['#0a0a0a', '#f4f4f6', '#f4f4f6', '#0a0a0a']
  );

  // Headings smoothly animate from white to black while scrolling
  const headingColor = useTransform(
    scrollYProgress,
    [0.1, 0.35, 0.75, 0.95],
    ['#ffffff', '#09090b', '#09090b', '#ffffff']
  );

  // Subtitle & body text smoothly animate from light gray to dark gray
  const paragraphColor = useTransform(
    scrollYProgress,
    [0.1, 0.35, 0.75, 0.95],
    ['#a1a1aa', '#27272a', '#27272a', '#a1a1aa']
  );

  // Cards background transition
  const cardBgColor = useTransform(
    scrollYProgress,
    [0.1, 0.35, 0.75, 0.95],
    ['#161616', '#ffffff', '#ffffff', '#161616']
  );

  // Card border transition
  const cardBorderColor = useTransform(
    scrollYProgress,
    [0.1, 0.35, 0.75, 0.95],
    ['#262626', '#e4e4e7', '#e4e4e7', '#262626']
  );

  // Card shadow transition
  const cardShadow = useTransform(
    scrollYProgress,
    [0.1, 0.35, 0.75, 0.95],
    [
      '0 20px 25px -5px rgba(0,0,0,0.5)',
      '0 20px 30px -5px rgba(0,0,0,0.08)',
      '0 20px 30px -5px rgba(0,0,0,0.08)',
      '0 20px 25px -5px rgba(0,0,0,0.5)',
    ]
  );

  // Staggered variants for children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.22,
        delayChildren: 0.1,
      },
    },
  };

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
    <motion.section
      ref={sectionRef}
      id="about"
      style={{ backgroundColor }}
      className="relative py-24 sm:py-32 overflow-hidden transition-colors duration-700"
    >
      {/* REUSABLE ABOUT BACKGROUND */}
      <AboutBackground />

      {/* Section Content */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column: STAGGERED STORY CONTENT */}
          <div className="lg:col-span-7 space-y-8">
            {/* 1. Large Animated Section Number 01 (APPEARS FIRST) */}
            <motion.div variants={itemVariants} className="flex items-center space-x-4">
              <span className="text-7xl sm:text-9xl font-display font-black tracking-tighter text-zinc-500 select-none drop-shadow-md">
                01
              </span>
              <div className="space-y-1">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono text-xs font-bold uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>01 // THE STORY & JOURNEY</span>
                </div>
                <div className="h-[3px] w-20 bg-zinc-700 rounded-full" />
              </div>
            </motion.div>

            {/* 2. Section Heading (APPEARS SECOND, ANIMATES WHITE -> BLACK ON SCROLL) */}
            <motion.h2
              variants={itemVariants}
              style={{ color: headingColor }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight leading-[1.1] transition-colors duration-500"
            >
              SELF-TAUGHT DEVELOPER WITH A DREAM
            </motion.h2>

            {/* 3. Staggered Story Paragraphs (APPEARS THIRD) */}
            <motion.div variants={itemVariants} className="space-y-5">
              <motion.p
                style={{ color: paragraphColor }}
                className="text-base sm:text-lg leading-relaxed font-medium transition-colors duration-500"
              >
                I am a <strong className="text-zinc-900 dark:text-white font-bold">15-year-old self-taught web developer</strong> based in <span className="underline decoration-zinc-400 underline-offset-4 font-semibold">South Africa</span>. My coding journey began exactly <strong className="text-zinc-900 dark:text-white font-bold">11 months ago</strong> when I decided to take learning into my own hands, driven by sheer curiosity and ambition.
              </motion.p>

              <motion.p
                style={{ color: paragraphColor }}
                className="text-sm sm:text-base leading-relaxed transition-colors duration-500"
              >
                Through 11 intensive months of self-study, I fell in love with <strong className="text-zinc-900 dark:text-white font-semibold">solving complex problems</strong> and mastering <strong className="text-zinc-900 dark:text-white font-semibold">modern UI & UX design</strong>. That passion culminated in building <strong className="text-zinc-900 dark:text-white font-semibold">Avenew</strong> — my flagship travel exploration platform featuring interactive destination search and AI itinerary generation.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-sm"
              >
                <p className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-zinc-200 leading-relaxed flex items-start gap-3">
                  <Heart className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span>
                    <strong>My Dream:</strong> To build high-quality software that truly helps people — empowering local South African businesses to thrive online and creating meaningful digital solutions used around the world.
                  </span>
                </p>
              </motion.div>
            </motion.div>

            {/* 4. Stat Counter Cards Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {[
                { label: 'Self-Taught', value: '11 Months', sub: 'Dedicated Study' },
                { label: 'Flagship App', value: 'Avenew', sub: 'Travel Platform' },
                { label: 'Developer Age', value: '15 Y/O', sub: 'South Africa' },
                { label: 'Code Quality', value: '100%', sub: 'Modern Standards' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  style={{ backgroundColor: cardBgColor, borderColor: cardBorderColor, boxShadow: cardShadow }}
                  className="p-4 rounded-2xl border transition-all duration-300 hover:scale-105"
                >
                  <span className="block text-[10px] font-mono text-zinc-400 font-bold uppercase tracking-wider">
                    {stat.label}
                  </span>
                  <span className="block text-xl font-display font-black text-zinc-900 dark:text-white mt-0.5">
                    {stat.value}
                  </span>
                  <span className="block text-[10px] font-mono text-zinc-500 mt-0.5">
                    {stat.sub}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: PORTRAIT IMAGE WITH INTERACTIVE FRAME */}
          <motion.div variants={itemVariants} className="lg:col-span-5 relative flex justify-center">
            <motion.div
              style={{ backgroundColor: cardBgColor, borderColor: cardBorderColor, boxShadow: cardShadow }}
              className="relative rounded-[32px] border p-4 sm:p-6 w-full max-w-md transition-all duration-500 group"
            >
              {/* Neutral Backdrop Glow */}
              <div className="absolute -inset-2 rounded-[36px] bg-white/[0.05] blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Top Glass Badge */}
              <div className="absolute top-8 left-8 right-8 z-20 flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white font-mono text-[10px] uppercase font-bold tracking-widest border border-white/20">
                  SOUTH AFRICA
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-zinc-800 text-white font-mono text-[10px] uppercase font-bold tracking-widest shadow-lg border border-zinc-700">
                  15 Y/O DEV
                </span>
              </div>

              {/* Main Portrait Frame with User Image (KEPT STRICTLY ROUND) */}
              <div className="relative w-[280px] sm:w-[320px] h-[280px] sm:h-[320px] mx-auto rounded-full overflow-hidden border-2 border-white/20 shadow-2xl bg-zinc-950 p-1 bg-zinc-800">
                <img
                  src={profile}
                  alt="Kganya — South African Self-Taught Web Developer"
                  loading="lazy"
                  decoding="async"
                  width={320}
                  height={320}
                  className="w-full h-full object-contain object-center rounded-full"
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none rounded-full" />

                {/* Bottom Glass Overlay Card */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white flex items-center space-x-2.5 z-20 shadow-xl whitespace-nowrap">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-bold font-display tracking-tight text-white">KGANYA</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
                    15 Y/O DEV
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

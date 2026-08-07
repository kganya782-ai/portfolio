import React from 'react';
import { motion } from 'motion/react';

interface SectionHeaderProps {
  number: string; // e.g. "01", "02", "03"
  label: string; // e.g. "BIOGRAPHY // OVERVIEW"
  title: string; // e.g. "ABOUT ME"
  highlightText?: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  label,
  title,
  highlightText,
  subtitle,
  className = '',
}) => {
  // Split title to highlight target word
  const parts = highlightText && title.includes(highlightText)
    ? title.split(highlightText)
    : [title];

  return (
    <div className={`space-y-3 relative z-10 ${className}`}>
      {/* 1. Large Animated Section Number */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center space-x-3"
      >
        <span className="text-4xl sm:text-6xl font-display font-black text-zinc-500 tracking-tighter opacity-90 select-none">
          {number}
        </span>
        <div className="h-[2px] w-12 sm:w-16 bg-zinc-700" />
      </motion.div>

      {/* 2. Badge / Category Label */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono uppercase tracking-widest text-zinc-300 font-semibold shadow-sm">
          <span>{label}</span>
        </div>
      </motion.div>

      {/* 3. Heading with Smooth Color Transition */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white transition-colors duration-500"
      >
        {highlightText && parts.length > 1 ? (
          <>
            {parts[0]}
            <span className="text-white">
              {highlightText}
            </span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </motion.h2>

      {/* 4. Subtitle / Description Paragraph */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="text-zinc-400 text-sm sm:text-base max-w-xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

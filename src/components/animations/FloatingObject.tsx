import React from 'react';
import { motion } from 'motion/react';

interface GlassCardProps {
  children?: React.ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Premium Glass UI Panel with subtle depth and slow diagonal parallax.
 * Used exclusively for product-style 3D UI cards.
 */
export const FloatingObject: React.FC<GlassCardProps> = ({
  children,
  className = '',
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ x: 20, y: 20, opacity: 0.9 }}
      animate={{
        x: [-8, 8, -8],
        y: [12, -12, 12],
      }}
      transition={{
        duration: 9,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
        delay,
      }}
      className={`relative rounded-2xl bg-[#161618]/90 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-4 text-left overflow-hidden ${className}`}
    >
      {/* Soft Ambient Reflection */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

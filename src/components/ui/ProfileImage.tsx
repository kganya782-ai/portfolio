import React, { useState } from 'react';
import { motion } from 'motion/react';

interface ProfileImageProps {
  image: string;
  alt?: string;
  className?: string;
}

export const ProfileImage: React.FC<ProfileImageProps> = ({
  image,
  alt = 'KGANYA — Professional Developer Portrait',
  className = '',
}) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Calculate subtle 3D tilt angle
    setTilt({
      x: -y * 0.04,
      y: x * 0.04,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={`relative group cursor-pointer select-none ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
      }}
    >
      {/* Soft Blue & Purple Glow Layer behind image */}
      <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-indigo-600/40 via-purple-600/35 to-pink-500/30 blur-3xl opacity-70 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />

      {/* Floating 3D Animated Round Avatar Frame */}
      <motion.div
        animate={{
          y: isHovered ? 0 : [-6, 6, -6],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isHovered ? 1.03 : 1})`,
          transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="relative z-10 w-[280px] sm:w-[320px] lg:w-[360px] h-[280px] sm:h-[320px] lg:h-[360px] mx-auto rounded-full p-[3px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-2xl shadow-indigo-950/80"
      >
        {/* Glassmorphism Round Inner Container */}
        <div className="relative w-full h-full rounded-full bg-[#121212] overflow-hidden border-2 border-white/20 flex items-center justify-center">
          {/* Main Portrait Photograph (KEPT STRICTLY ROUND) */}
          <img
            src={image}
            alt={alt}
            loading="eager"
            decoding="async"
            width={360}
            height={360}
            className="w-full h-full object-contain object-center rounded-full"
          />

          {/* Bottom Glass Pill Badge */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-[#0a0a0a]/85 border border-white/15 backdrop-blur-md flex items-center space-x-2.5 z-20 shadow-xl whitespace-nowrap">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs font-bold text-white font-display tracking-tight">KGANYA</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              AVAILABLE
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

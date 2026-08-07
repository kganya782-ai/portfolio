import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface ProjectImageFrameProps {
  image?: string;
  title: string;
  aspectRatio?: string;
  className?: string;
}

export const ProjectImageFrame: React.FC<ProjectImageFrameProps> = ({
  image,
  title,
  aspectRatio = 'aspect-[16/10]',
  className = '',
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`relative ${aspectRatio} bg-[#08080c] overflow-hidden group/img ${className}`}>
      {!imgError && image ? (
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          onError={() => setImgError(true)}
          onLoad={(e) => {
            // If the PNG is a 1x1 placeholder image or corrupt
            if (e.currentTarget.naturalWidth <= 10) {
              setImgError(true);
            }
          }}
          className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700 ease-out"
        />
      ) : null}

      {(imgError || !image) && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c0c12] via-[#111118] to-[#07070a] flex flex-col items-center justify-center p-6 text-center select-none">
          {/* Subtle Grid Pattern Background */}
          <div
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#818cf8 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
            }}
          />
          {/* Glowing Ambient Glow */}
          <div className="absolute w-44 h-44 rounded-full bg-indigo-500/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-indigo-400 shadow-xl backdrop-blur-md">
              <ImageIcon className="w-5 h-5 text-indigo-400" />
            </div>
            <div className="space-y-1">
              <span className="block text-sm sm:text-base font-display font-semibold text-zinc-200 tracking-wide">
                Project Screenshot Coming Soon
              </span>
              <span className="block text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
                {title} // Asset Ready
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Subtle Bottom Vignette Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
    </div>
  );
};

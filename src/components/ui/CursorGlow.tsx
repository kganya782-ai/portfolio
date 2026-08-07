import React, { useEffect, useRef } from 'react';

export const CursorGlow: React.FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;

    const handlePointerMove = (e: PointerEvent) => {
      if (glowRef.current) {
        const x = e.clientX;
        const y = e.clientY;
        rafId = requestAnimationFrame(() => {
          if (glowRef.current) {
            glowRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(255, 255, 255, 0.03), transparent 80%)`;
          }
        });
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed inset-0 pointer-events-none z-30 transition-opacity duration-300 hidden md:block"
      aria-hidden="true"
    />
  );
};

import React, { useEffect, useRef } from 'react';
import { gsap } from '../../lib/gsap';

interface AnimatedHeadingProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  className?: string;
  highlightText?: string;
  highlightClassName?: string;
  delay?: number;
}

export const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  text,
  as: Component = 'h2',
  className = '',
  highlightText = '',
  highlightClassName = 'text-primary bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-400 bg-clip-text text-transparent',
  delay = 0,
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const words = containerRef.current.querySelectorAll('.word-span');
    if (words.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        {
          y: '100%',
          opacity: 0,
          rotateX: -45,
        },
        {
          y: '0%',
          opacity: 1,
          rotateX: 0,
          duration: 0.9,
          delay,
          stagger: 0.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [text, delay]);

  // Handle highlighted portion if specified
  const renderTextParts = () => {
    if (!highlightText) {
      return text.split(' ').map((word, idx) => (
        <span key={idx} className="inline-block overflow-hidden mr-[0.25em] align-top">
          <span className="word-span inline-block transform-gpu origin-bottom">
            {word}
          </span>
        </span>
      ));
    }

    const parts = text.split(highlightText);
    return (
      <>
        {parts[0] &&
          parts[0].split(' ').map((word, idx) => (
            <span key={`p1-${idx}`} className="inline-block overflow-hidden mr-[0.25em] align-top">
              <span className="word-span inline-block transform-gpu origin-bottom">
                {word}
              </span>
            </span>
          ))}
        <span className="inline-block overflow-hidden mr-[0.25em] align-top">
          <span className={`word-span inline-block transform-gpu origin-bottom ${highlightClassName}`}>
            {highlightText}
          </span>
        </span>
        {parts[1] &&
          parts[1].split(' ').map((word, idx) => (
            <span key={`p2-${idx}`} className="inline-block overflow-hidden mr-[0.25em] align-top">
              <span className="word-span inline-block transform-gpu origin-bottom">
                {word}
              </span>
            </span>
          ))}
      </>
    );
  };

  return (
    <Component
      ref={containerRef as any}
      className={`font-display tracking-tight leading-none ${className}`}
    >
      {renderTextParts()}
    </Component>
  );
};

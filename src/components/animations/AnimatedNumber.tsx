import React, { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from '../../lib/gsap';

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  suffix = '',
  prefix = '',
  decimals = 0,
  duration = 2,
  className = '',
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    if (!elementRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: elementRef.current,
      start: 'top 85%',
      onEnter: () => {
        if (animatedRef.current) return;
        animatedRef.current = true;

        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
          // Ease out cubic equation
          const easedProgress = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(easedProgress * value * Math.pow(10, decimals)) / Math.pow(10, decimals);
          
          setDisplayValue(current);

          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            setDisplayValue(value);
          }
        };

        requestAnimationFrame(step);
      },
    });

    return () => {
      trigger.kill();
    };
  }, [value, duration, decimals]);

  return (
    <span ref={elementRef} className={`font-display tabular-nums ${className}`}>
      {prefix}
      {displayValue.toFixed(decimals)}
      {suffix}
    </span>
  );
};

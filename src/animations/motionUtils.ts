import { Variants } from 'motion/react';

// Custom fluid cubic bezier easings
export const EASINGS = {
  customSmooth: [0.25, 1, 0.5, 1] as [number, number, number, number],
  bounceOut: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
  expressive: [0.16, 1, 0.3, 1] as [number, number, number, number],
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: EASINGS.expressive,
    },
  },
};

export const scaleUpVariants: Variants = {
  hidden: { opacity: 0, scale: 0.88, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASINGS.customSmooth,
    },
  },
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: EASINGS.customSmooth,
    },
  },
};

export const floatingVariants: Variants = {
  animate: {
    y: [-8, 8, -8],
    rotate: [-1, 1.5, -1],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeInOut',
    },
  },
};

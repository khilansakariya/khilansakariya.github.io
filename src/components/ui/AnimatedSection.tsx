'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
  animation?: 'fadeUp' | 'fadeIn' | 'slideUp' | 'scaleIn';
}

const animations = {
  fadeUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 }
  },
  slideUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0, 
  threshold = 0.1, 
  triggerOnce = true,
  animation = 'fadeUp'
}: AnimatedSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce,
    threshold,
  });

  const animConfig = animations[animation];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={animConfig.initial}
      animate={inView ? animConfig.animate : animConfig.initial}
      transition={{ ...animConfig.transition, delay }}
    >
      {children}
    </motion.div>
  );
}

// Pre-configured section components for common use cases
export function SectionHeader({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <AnimatedSection className={`text-center mb-16 ${className}`} delay={0.2}>
      {children}
    </AnimatedSection>
  );
}

export function SectionContent({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <AnimatedSection className={className} delay={0.4}>
      {children}
    </AnimatedSection>
  );
}

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <AnimatedSection 
      className={`bg-navy-800/50 rounded-xl p-6 border border-navy-700 hover:border-navy-600 transition-all duration-300 hover:scale-105 ${className}`}
      animation="scaleIn"
      delay={0.2}
    >
      {children}
    </AnimatedSection>
  );
} 
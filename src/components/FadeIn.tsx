import { motion, type Easing } from 'framer-motion';
import type { CSSProperties, ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  x?: number;
  y?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
}

const EASE: Easing = [0.25, 0.1, 0.25, 1];

export default function FadeIn({
  children,
  delay = 0,
  x = 0,
  y = 20,
  duration = 0.6,
  className,
  style,
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-20px', amount: 0 }}
      transition={{ delay, duration, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export interface RevealProps {
  children: ReactNode;
  delay?: number;
}

export function Reveal({ children, delay = 0 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      {eyebrow && (
        <div className="mb-4 inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
          <p className="text-sm font-medium text-primary">{eyebrow}</p>
        </div>
      )}
      <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
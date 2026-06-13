'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './Section';
import { Mail, Check, Loader } from 'lucide-react';

export function CTA() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'loading' | 'done'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('loading');
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setState('done');
    setEmail('');
    setTimeout(() => setState('idle'), 3000);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <Reveal>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-3xl bg-gradient-to-br from-card to-muted border border-primary/20 backdrop-blur-xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground text-center mb-4">
              Build the brand you\'ve been putting off.
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-8">
              Start free today. 7-day Pro trial. No credit card required.
            </p>

            <form onSubmit={handleSubmit} className="flex gap-3">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  disabled={state !== 'idle'}
                />
              </div>
              <motion.button
                type="submit"
                disabled={state !== 'idle'}
                className="px-6 py-3 rounded-lg bg-gradient-brand text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:shadow-glow transition-all disabled:opacity-70"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {state === 'idle' && 'Get Started'}
                {state === 'loading' && (
                  <>
                    <Loader className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                )}
                {state === 'done' && (
                  <>
                    <Check className="w-4 h-4" />
                    Success!
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
'use client';

import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Reveal } from './Section';

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div>
              <div className="mb-6 inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                <p className="text-sm font-medium text-primary">✨ AI Personal Branding Agent</p>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display text-foreground mb-6 leading-tight">
                Turn Your Expertise Into <span className="text-gradient-brand">Creator-Grade Brand</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-md leading-relaxed">
                Transform documents, ideas, and expertise into videos, social posts, and content calendars. Publish across LinkedIn, TikTok, YouTube, Instagram, and more — all in minutes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="px-8 py-4 rounded-lg bg-gradient-brand text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:shadow-glow transition-all">
                  Get Started Free <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 rounded-lg border border-primary/50 text-primary font-semibold hover:bg-primary/10 transition-all">
                  Watch Demo
                </button>
              </div>

              <p className="text-sm text-muted-foreground">
                ✓ 12,000+ founders and creators · 7-day Pro trial · No credit card required
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl bg-card border border-border shadow-card p-6 overflow-hidden">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-foreground">Your Growth</h3>
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-primary/50" />
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-end gap-2 h-32">
                    {[40, 65, 45, 70, 55, 80, 65, 85].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.6 }}
                        className="flex-1 bg-gradient-brand rounded-t-lg opacity-80"
                      />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-border">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Followers</p>
                    <p className="text-2xl font-bold text-accent">12.4K</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Engagement</p>
                    <div className="flex items-center gap-1">
                      <p className="text-2xl font-bold text-highlight">8.2%</p>
                      <TrendingUp className="w-4 h-4 text-accent" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Reach</p>
                    <p className="text-2xl font-bold text-primary">324K</p>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-3xl -z-10" />
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
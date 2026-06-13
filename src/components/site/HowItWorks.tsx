'use client';

import { Reveal, SectionHeader } from './Section';
import { Upload, Brain, Wand2, Send } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Upload,
    title: 'Upload Your Expertise',
    description: 'Share documents, notes, presentations, or record your ideas. ShareOn ingests everything.',
  },
  {
    number: '02',
    icon: Brain,
    title: 'Train Brand Voice',
    description: 'AI learns your unique voice, style, and messaging from your content.',
  },
  {
    number: '03',
    icon: Wand2,
    title: 'Generate Content',
    description: 'Create videos, short-form posts, blog articles, and calendars instantly.',
  },
  {
    number: '04',
    icon: Send,
    title: 'Publish Everywhere',
    description: 'One click to publish across LinkedIn, TikTok, YouTube, Instagram, Twitter, and more.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionHeader
            eyebrow="Process"
            title="How it works"
            description="Four simple steps to build your personal brand without the grind"
          />
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={index} delay={index * 0.1}>
                <div className="group p-6 rounded-xl border border-border hover:border-primary/50 transition-all">
                  <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-brand">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <p className="text-4xl font-bold font-display text-primary/30 mb-3">
                    {step.number}
                  </p>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
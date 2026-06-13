'use client';

import { Reveal, SectionHeader } from './Section';
import {
  Database,
  Zap,
  Video,
  Calendar,
  Globe,
  BarChart3,
} from 'lucide-react';

const features = [
  {
    icon: Database,
    title: 'Knowledge Base',
    description: 'Your personal AI learns from all your content, documents, and expertise.',
  },
  {
    icon: Zap,
    title: 'Brand Voice AI',
    description: 'Automatically maintains your unique tone and messaging across all platforms.',
  },
  {
    icon: Video,
    title: 'Avatar Studio',
    description: 'AI-generated avatars that look and sound authentically like you.',
  },
  {
    icon: Video,
    title: 'Document-to-Video',
    description: 'Transform PDFs, presentations, and articles into engaging short-form videos.',
  },
  {
    icon: Calendar,
    title: 'Content Calendar',
    description: 'Auto-generate editorial calendars and schedule posts weeks in advance.',
  },
  {
    icon: Globe,
    title: 'Multi-Platform Publishing',
    description: 'Publish once, reach everywhere: LinkedIn, TikTok, YouTube, Instagram, Twitter.',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Track engagement, reach, growth, and ROI across all platforms.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionHeader
            eyebrow="Capabilities"
            title="Everything you need to build your brand"
            description="Seven powerful tools to save you hundreds of hours every month"
          />
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Reveal key={index} delay={index * 0.05}>
                <div className="group p-6 rounded-xl border border-border hover:border-primary/50 hover:bg-card transition-all cursor-pointer">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
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
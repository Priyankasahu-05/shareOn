'use client';

import { Reveal, SectionHeader } from './Section';
import {
  Sparkles,
  Volume2,
  Share2,
  Play,
  Music,
  Camera,
  MessageSquare,
  Link2,
} from 'lucide-react';

const integrations = [
  { name: 'OpenAI', icon: Sparkles },
  { name: 'ElevenLabs', icon: Volume2 },
  { name: 'LinkedIn', icon: Share2 },
  { name: 'YouTube', icon: Play },
  { name: 'TikTok', icon: Music },
  { name: 'Meta', icon: Camera },
  { name: 'X (Twitter)', icon: MessageSquare },
  { name: 'Instagram', icon: Link2 },
];

export function Integrations() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionHeader
            eyebrow="Integrations"
            title="Powered by the best"
            description="Publishes to where your audience lives"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4 mt-12">
            {integrations.map((integration, index) => {
              const Icon = integration.icon;
              return (
                <div
                  key={index}
                  className="group flex flex-col items-center justify-center p-6 rounded-xl border border-border hover:border-primary/50 hover:bg-card transition-all"
                >
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors mb-3">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground text-center">
                    {integration.name}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
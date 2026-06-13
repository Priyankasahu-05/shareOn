'use client';

import { Reveal, SectionHeader } from './Section';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      "ShareOn transformed how I build my coaching practice. What used to take 10 hours a week now takes 30 minutes. My content is consistent, professional, and converts like crazy.",
    name: 'Maya Chen',
    role: 'Leadership Coach',
    metric: '3.1x inbound leads',
    rating: 5,
  },
  {
    quote:
      'As an agency director managing 8 clients, this is a game-changer. My team can scale content production 10x without hiring new people. Clients love the consistency.',
    name: 'Devon Okafor',
    role: 'Agency Director',
    metric: '48% cost savings',
    rating: 5,
  },
  {
    quote:
      "I'm an educator with zero tech skills, but ShareOn made me look like a content pro. My students engage more, my reach grew, and I actually have a brand now.",
    name: 'Priya Raman',
    role: 'Educator & Creator',
    metric: '12K followers (6 months)',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionHeader
            eyebrow="Testimonials"
            title="Loved by 12,000+ creators"
            description="See why founders and creators trust ShareOn to build their personal brand"
          />
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="p-8 rounded-xl border border-border hover:border-primary/50 transition-all bg-card">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-highlight text-highlight"
                    />
                  ))}
                </div>

                <p className="text-base text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground mb-3">{testimonial.role}</p>
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                    <p className="text-xs font-medium text-primary">
                      {testimonial.metric}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
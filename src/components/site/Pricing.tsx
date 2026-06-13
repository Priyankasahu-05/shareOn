'use client';

import { Reveal, SectionHeader } from './Section';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Spark',
    price: '0',
    description: 'Perfect for trying us out',
    features: [
      'Up to 5 brand documents',
      '1 brand voice profile',
      'Basic content generation',
      'Monthly analytics report',
      'Community access',
    ],
    cta: 'Start Free',
    highlighted: false,
  },
  {
    name: 'Creator',
    price: '39',
    description: 'Most popular for growing creators',
    features: [
      'Unlimited brand documents',
      'Advanced brand voice AI',
      'Video generation (20/month)',
      'Multi-platform scheduling',
      'Real-time analytics',
      'Priority support',
      'Custom avatar options',
    ],
    cta: 'Start 7-Day Trial',
    highlighted: true,
  },
  {
    name: 'Pro',
    price: '99',
    description: 'For agencies and teams',
    features: [
      'Everything in Creator, plus:',
      'Unlimited video generation',
      'Team collaboration (5 seats)',
      'Advanced scheduling & workflows',
      'Custom integrations',
      'Dedicated account manager',
      'API access',
      'White-label options',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionHeader
            eyebrow="Pricing"
            title="Choose your plan"
            description="All plans include a 7-day free trial. No credit card required to get started."
          />
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {tiers.map((tier, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div
                className={`relative p-8 rounded-2xl border transition-all ${
                  tier.highlighted
                    ? 'border-primary ring-2 ring-primary/20 bg-card shadow-glow'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-brand text-primary-foreground text-xs font-semibold rounded-full">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold font-display text-foreground mb-2">
                  {tier.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>

                <div className="mb-6">
                  <span className="text-5xl font-bold font-display text-foreground">
                    ${tier.price}
                  </span>
                  {tier.price !== '0' && (
                    <span className="text-muted-foreground ml-2">/month</span>
                  )}
                </div>

                <button
                  className={`w-full py-3 px-4 rounded-lg font-semibold mb-8 transition-all ${
                    tier.highlighted
                      ? 'bg-gradient-brand text-primary-foreground hover:shadow-glow'
                      : 'border border-primary/50 text-primary hover:bg-primary/10'
                  }`}
                >
                  {tier.cta}
                </button>

                <div className="space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
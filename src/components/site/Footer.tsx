'use client';

import { Sparkles, Mail, Linkedin, Youtube, Instagram } from 'lucide-react';
import { Reveal } from './Section';

const footerLinks = {
  Product: ['Features', 'Pricing', 'Security', 'Brand Kit'],
  Company: ['About', 'Blog', 'Careers', 'Contact'],
  Resources: ['Help Center', 'Community', 'API Docs', 'Status'],
  Legal: ['Privacy', 'Terms', 'Cookie Policy', 'DPA'],
};

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Mail, href: '#', label: 'Twitter' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12 pb-12 border-b border-border">
          <Reveal>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-gradient-brand">
                  <Sparkles className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-bold font-display text-foreground">ShareOn</span>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs">
                Turn your expertise into a creator-grade brand. Build, publish, and grow across all platforms.
              </p>
            </div>
          </Reveal>

          {Object.entries(footerLinks).map(([category, links]) => (
            <Reveal key={category}>
              <div>
                <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Reveal>
            <div className="flex items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © {currentYear} ShareOn. All rights reserved.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </footer>
  );
}
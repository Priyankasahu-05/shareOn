'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal, SectionHeader } from './Section';
import { Plus } from 'lucide-react';

const faqs = [
  {
    question: 'How does ShareOn learn my brand voice?',
    answer:
      'ShareOn analyzes your documents, past content, and writing samples to create a unique voice profile. You can refine it further by providing examples of what sounds right and what doesn\'t. The AI gets smarter with every piece of content you create.',
  },
  {
    question: 'What platforms can I publish to?',
    answer:
      'ShareOn supports LinkedIn, TikTok, YouTube, Instagram, Twitter/X, and Meta (Facebook). We\'re constantly adding new platforms. You can schedule, auto-format, and publish to all of them from one dashboard.',
  },
  {
    question: 'Can I edit content before publishing?',
    answer:
      'Absolutely. Every piece of content generated is fully editable before you publish. You have complete control over the message, tone, and platform-specific formatting.',
  },
  {
    question: 'Is there a credit card required for the free trial?',
    answer:
      'No. Our 7-day Pro trial is completely free, no credit card needed. You get full access to all Pro features for a week to see if ShareOn is right for you.',
  },
  {
    question: 'Can teams use ShareOn?',
    answer:
      'Yes. The Creator plan supports single users, but our Pro plan includes team collaboration with up to 5 seats. Team members can work together, share brand profiles, and manage content calendars collaboratively.',
  },
  {
    question: 'What if I want to cancel?',
    answer:
      'You can cancel anytime with no penalty. Your data is yours—export it whenever you want. There are no long-term commitments or hidden fees.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <SectionHeader
            eyebrow="FAQ"
            title="Common questions"
            description="Everything you need to know about ShareOn"
          />
        </Reveal>

        <div className="space-y-4 mt-12">
          {faqs.map((faq, index) => (
            <Reveal key={index} delay={index * 0.05}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 rounded-xl border border-border hover:border-primary/50 hover:bg-card transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold text-foreground text-lg">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    className="flex-shrink-0"
                  >
                    <Plus className="w-5 h-5 text-primary" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-muted-foreground mt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
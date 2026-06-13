import { createFileRoute, Head } from '@tanstack/react-router';
import { Navbar } from '~/components/site/Navbar';
import { Hero } from '~/components/site/Hero';
import { Integrations } from '~/components/site/Integrations';
import { HowItWorks } from '~/components/site/HowItWorks';
import { Features } from '~/components/site/Features';
import { Pricing } from '~/components/site/Pricing';
import { Testimonials } from '~/components/site/Testimonials';
import { FAQ } from '~/components/site/FAQ';
import { CTA } from '~/components/site/CTA';
import { Footer } from '~/components/site/Footer';

export const Route = createFileRoute('/')();

export function Component() {
  return (
    <>
      <Head>
        <title>ShareOn — Your AI Personal Branding Agent</title>
        <meta
          name="description"
          content="Transform documents and ideas into videos, social posts, and content calendars. Publish across LinkedIn, TikTok, YouTube, Instagram, and more."
        />
        <meta
          name="og:title"
          content="ShareOn — Your AI Personal Branding Agent"
        />
        <meta
          name="og:description"
          content="Turn your expertise into a creator-grade brand without spending hours on content creation."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <Hero />
        <Integrations />
        <HowItWorks />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </>
  );
}
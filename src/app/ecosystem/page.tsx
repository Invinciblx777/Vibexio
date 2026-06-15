import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductCard } from "@/components/ui/ProductCard";
import { CTASection } from "@/components/ui/CTASection";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Vibexio Ecosystem | Products & Solutions",
  description:
    "Explore Vibexio's ecosystem of AI-powered products and enterprise software solutions. From Clario AI to Kubyn — discover tools built to transform your business.",
  openGraph: {
    title: "Vibexio Ecosystem | Products & Solutions",
    description: "Explore Vibexio's ecosystem of AI-powered products and enterprise software solutions.",
    url: "https://vibexio.ai/ecosystem",
  },
};

export default function EcosystemPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="hidden" />
        <div className="hidden" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-text-muted mb-4">
              Ecosystem
            </span>
            <h1 className="font-[family-name:var(--font-serif)] italic text-4xl sm:text-5xl lg:text-6xl font-semibold text-text-primary leading-tight mb-6">
              Our Ecosystem
            </h1>
            <p className="text-text-secondary text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              Explore Vibexio&apos;s family of intelligent products and services designed to help businesses operate smarter, scale faster, and innovate continuously.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            badge="Products"
            title="Built to Perform"
            description="Our products are crafted with precision, designed for impact, and built to scale with your business needs."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16">
            <ProductCard
              badge="AI-Powered"
              title="Clario AI"
              description="AI-Powered Document Intelligence. Clario transforms how businesses process documents — from invoices and receipts to contracts and forms. Advanced OCR and NLP deliver unmatched accuracy and speed."
              href="/clario"
              ctaText="Explore Clario"
              index={0}
            />
            <ProductCard
              badge="All-in-One"
              title="Kubyn"
              description="Unified Business Operating System. One platform for CRM, project management, invoicing, HR, inventory, and more. Modular, flexible, and built to scale with your business operations."
              href="/kubyn"
              ctaText="Explore Kubyn"
              index={1}
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32 bg-bg-tertiary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            badge="Services"
            title="Solutions for Every Challenge"
            description="Beyond our products, we deliver custom AI and IT solutions tailored to your unique business requirements."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16">
            <AnimatedSection>
              <div className="group p-8 lg:p-10 rounded-2xl bg-bg-secondary border border-border hover:border-border-light transition-all duration-500 h-full flex flex-col">
                <div className="flex-1">
                  <div className="w-12 h-12 rounded-xl bg-bg-tertiary border border-border flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-vibexio-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                    </svg>
                  </div>
                  <h3 className="font-[family-name:var(--font-serif)] italic text-2xl font-semibold text-text-primary mb-4">
                    AI Solutions
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    From predictive analytics to computer vision, NLP to generative AI — we build custom AI systems that learn, adapt, and drive efficiency across your operations.
                  </p>
                </div>
                <Button href="/aisolutions" variant="secondary" size="md">
                  Explore AI Solutions
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="group p-8 lg:p-10 rounded-2xl bg-bg-secondary border border-border hover:border-border-light transition-all duration-500 h-full flex flex-col">
                <div className="flex-1">
                  <div className="w-12 h-12 rounded-xl bg-bg-tertiary border border-border flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-vibexio-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>
                  </div>
                  <h3 className="font-[family-name:var(--font-serif)] italic text-2xl font-semibold text-text-primary mb-4">
                    IT Solutions
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    Custom web development, mobile apps, cloud solutions, digital transformation, and more — we build robust, scalable software tailored to your business DNA.
                  </p>
                </div>
                <Button href="/itsolutions" variant="secondary" size="md">
                  Explore IT Solutions
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Ecosystem Vision */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-text-muted mb-4">
              Our Architecture
            </span>
            <h2 className="font-[family-name:var(--font-serif)] italic text-3xl lg:text-4xl font-semibold text-text-primary mb-6">
              Built to Work Together
            </h2>
            <p className="text-text-secondary text-base lg:text-lg leading-relaxed">
              Every product and service in the Vibexio ecosystem is designed with a modular architecture that allows seamless integration. Use them individually or combine them for a comprehensive business solution. Our unified approach means your data flows naturally, your teams stay connected, and your operations scale without friction.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <CTASection
        title="Ready to Explore?"
        description="Discover how Vibexio's products and services can transform your business operations and drive intelligent growth."
        primaryCTA={{ text: "Let's Collaborate", href: "/collaborate" }}
      />
    </>
  );
}

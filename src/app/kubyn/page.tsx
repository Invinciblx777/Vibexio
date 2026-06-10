import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { CTASection } from "@/components/ui/CTASection";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { KUBYN_FEATURES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kubyn | Unified Business Operating System by Vibexio",
  description:
    "Kubyn brings together CRM, project management, invoicing, HR, inventory, and analytics into one unified platform. Built to scale with your business.",
  openGraph: {
    title: "Kubyn | Unified Business Operating System by Vibexio",
    description: "One platform for CRM, project tracking, HR, invoicing, inventory, and more.",
    url: "https://vibexio.ai/kubyn",
  },
};

export default function KubynPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="hidden" />
        <div className="hidden" />
        <div className="hidden" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-text-muted mb-4">
              All-in-One Platform
            </span>
            <h1 className="font-[family-name:var(--font-serif)] italic text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-4">
              <span className="gradient-text-vibexio">Kubyn</span>
            </h1>
            <p className="font-[family-name:var(--font-serif)] italic text-xl lg:text-2xl text-text-secondary mb-6">
              Unified Business Operating System
            </p>
            <p className="text-text-secondary text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Kubyn brings together CRM, project management, invoicing, HR, inventory, and more — all in one modular platform designed to grow with your business. Stop juggling tools. Start operating efficiently.
            </p>
            <Button
              href="mailto:contact@vibexio.ai?subject=Kubyn%20Early%20Access"
              size="lg"
              external
            >
              Get Early Access
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </AnimatedSection>
        </div>

        {/* Product visual */}
        <AnimatedSection delay={0.25} className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 mt-16">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/kubyn/Landingkubyn.webp"
            alt="Kubyn app on mobile devices"
            className="w-full h-auto"
          />
        </AnimatedSection>
      </section>

      {/* Features */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            badge="Modules"
            title="Everything Your Business <br class='hidden sm:block'/>Needs in One Place"
            description="Each module is designed to work independently or together — giving you the flexibility to scale at your own pace."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {KUBYN_FEATURES.map((feature, i) => (
              <FeatureCard key={feature.title} {...feature} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Kubyn */}
      <section className="py-24 lg:py-32 bg-bg-tertiary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            badge="Why Kubyn"
            title="Built Different, <br class='hidden sm:block'/>By Design"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { title: "All-in-One", description: "Replace 5+ tools with one unified platform. No more switching between apps or losing data in silos." },
              { title: "Modular", description: "Start with what you need, add modules as you grow. Each component works seamlessly with the rest." },
              { title: "Scalable", description: "From 5 users to 500 — Kubyn is built on cloud-native architecture that grows with your business." },
              { title: "Affordable", description: "Enterprise-grade features at startup-friendly pricing. No hidden costs, no surprise charges." },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="p-6 rounded-2xl bg-bg-secondary border border-border text-center group hover:border-border-light transition-all duration-500 h-full">
                  <h3 className="font-[family-name:var(--font-serif)] italic font-medium text-lg text-text-primary mb-3 group-hover:text-vibexio-light transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Simplify Your <span class='gradient-text-vibexio'>Business Operations</span>?"
        description="Get early access to Kubyn and experience a unified platform built for modern businesses."
        primaryCTA={{
          text: "Get Early Access",
          href: "mailto:contact@vibexio.ai?subject=Kubyn%20Early%20Access",
        }}
        secondaryCTA={{ text: "Contact Us", href: "/collaborate" }}
      />
    </>
  );
}

import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { CTASection } from "@/components/ui/CTASection";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { VALUES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Inside Vibexio – Who We Are & What We Stand For",
  description:
    "Learn about Vibexio's mission, values, leadership, and the culture that drives innovation across AI, OCR, and enterprise software development.",
  openGraph: {
    title: "Inside Vibexio – Who We Are & What We Stand For",
    description:
      "Learn about Vibexio's mission, values, leadership, and the culture that drives innovation across AI, OCR, and enterprise software development.",
    url: "https://vibexio.ai/inside",
  },
};

export default function InsidePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="hidden" />
        <div className="hidden" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-text-muted mb-4">
              Inside Vibexio
            </span>
            <h1 className="font-[family-name:var(--font-serif)] italic text-4xl sm:text-5xl lg:text-6xl font-semibold text-text-primary leading-tight mb-6">
              The People, The Mission, The Purpose.
            </h1>
            <p className="text-text-secondary text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              We&apos;re not just a company — we&apos;re a team of builders, dreamers, and engineers driven by one mission: to make technology work harder for businesses.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="p-8 lg:p-10 rounded-2xl bg-bg-secondary border border-border h-full">
                <span className="text-xs font-medium tracking-[0.15em] uppercase text-text-muted mb-4">
                  Our Mission
                </span>
                <h2 className="font-[family-name:var(--font-serif)] italic text-2xl lg:text-3xl font-semibold text-text-primary mb-4">
                  Empowering Businesses Through Intelligent Technology
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  Our mission is simple: to build AI-powered and software solutions that solve real-world problems — faster, smarter, and more affordably than anyone else. We combine deep technical expertise with a product-first mindset to deliver solutions that create lasting impact.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="p-8 lg:p-10 rounded-2xl bg-bg-secondary border border-border h-full">
                <span className="text-xs font-medium tracking-[0.15em] uppercase text-text-muted mb-4">
                  Our Vision
                </span>
                <h2 className="font-[family-name:var(--font-serif)] italic text-2xl lg:text-3xl font-semibold text-text-primary mb-4">
                  To Be India&apos;s Most Trusted AI & Enterprise Software Company
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  We envision a future where every business — from startups to large enterprises — can harness the power of AI and intelligent software to operate efficiently, make smarter decisions, and scale without limits.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-bg-tertiary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            badge="What Drives Us"
            title="Our Core Values"
            description="These principles guide every decision we make, every product we build, and every relationship we nurture."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {VALUES.map((value, i) => (
              <FeatureCard key={value.title} {...value} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <span className="text-xs font-medium tracking-[0.15em] uppercase text-text-muted mb-4">
                Who We Are
              </span>
              <h2 className="font-[family-name:var(--font-serif)] italic text-3xl lg:text-4xl font-semibold text-text-primary mb-8">
                A Team Built on Passion & Purpose
              </h2>
              <div className="text-text-secondary text-base lg:text-lg leading-relaxed space-y-6 text-left">
                <p>
                  Founded in Tamil Nadu, India, Vibexio is a young, focused, and fast-growing technology company built by a team of engineers, designers, and strategists who share a passion for AI, cloud-native applications, and enterprise software.
                </p>
                <p>
                  We started with a simple belief: that businesses of every size deserve access to powerful technology — not just the ones with massive budgets. Today, we build products like Clario AI and Kubyn, and deliver custom AI and IT solutions that help organizations operate smarter, faster, and more efficiently.
                </p>
                <p>
                  We&apos;re remote-first, deeply collaborative, and obsessed with quality. Every product we ship is built to last, scale, and make a real difference.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection
        title="Want to Work With Us?"
        description="Whether you need a custom AI solution, enterprise software, or just want to explore what's possible — we're here to help."
        primaryCTA={{ text: "Let's Collaborate", href: "/collaborate" }}
        secondaryCTA={{ text: "View Careers", href: "/pathways" }}
      />
    </>
  );
}

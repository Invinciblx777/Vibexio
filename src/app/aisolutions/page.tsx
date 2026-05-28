import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { ProcessSteps } from "@/components/ui/StepCard";
import { CTASection } from "@/components/ui/CTASection";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AI_CAPABILITIES, AI_INDUSTRIES, AI_BUILD_STEPS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "AI Solutions by Vibexio | Intelligent Automation & AI Development",
  description:
    "From predictive analytics to computer vision, NLP to generative AI — Vibexio builds custom AI systems that transform how businesses operate.",
  openGraph: {
    title: "AI Solutions by Vibexio | Intelligent Automation & AI Development",
    description: "Custom AI solutions built to transform how businesses operate.",
    url: "https://vibexio.ai/aisolutions",
  },
};

export default function AISolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="hidden" />
        <div className="hidden" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-text-muted mb-4">
              AI Solutions
            </span>
            <h1 className="font-[family-name:var(--font-serif)] italic text-4xl sm:text-5xl lg:text-6xl font-semibold text-text-primary leading-tight mb-6">
              AI Solutions
            </h1>
            <p className="text-text-secondary text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              Intelligent systems for modern businesses. We build custom AI solutions that learn, adapt, and drive efficiency across your entire operation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            badge="Capabilities"
            title="AI Capabilities that Power <br class='hidden sm:block'/>the Modern Enterprise"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {AI_CAPABILITIES.map((cap, i) => (
              <FeatureCard key={cap.title} {...cap} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 lg:py-32 bg-bg-tertiary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            badge="Industries"
            title="How Businesses Use Vibexio"
            description="We deliver AI solutions across diverse industries, each with unique challenges and opportunities."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {AI_INDUSTRIES.map((industry, i) => (
              <AnimatedSection key={industry.title} delay={i * 0.08}>
                <div className="group p-8 rounded-2xl bg-bg-secondary border border-border hover:border-border-light transition-all duration-500 h-full">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-vibexio/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <h3 className="font-[family-name:var(--font-serif)] italic font-medium text-xl text-text-primary mb-3 group-hover:text-vibexio-light transition-colors duration-300">
                    {industry.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{industry.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Build Process */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            badge="Our Process"
            title="How We Build <br class='hidden sm:block'/>Intelligent Solutions"
          />

          <div className="mt-16">
            <ProcessSteps steps={AI_BUILD_STEPS} />
          </div>
        </div>
      </section>

      {/* Strategic Partner */}
      <section className="py-24 lg:py-32 bg-bg-tertiary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            badge="Partnership"
            title="Your Strategic Partner in AI Evolution"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {[
              "Global experience, local innovation.",
              "Enterprise-grade data security and scalability.",
              "Flexible models for startups, SMEs, and enterprises.",
              "AI consulting, design, and implementation under one roof.",
              "Long-term partnership with measurable ROI.",
              "Seamless integration with existing systems and workflows.",
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="p-6 rounded-2xl bg-bg-secondary border border-border group hover:border-border-light transition-all duration-500 h-full flex items-center">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-vibexio-light mt-1.5 shrink-0" />
                    <p className="text-text-secondary text-sm leading-relaxed">{item}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Looking to Combine <span class='gradient-text-vibexio'>AI & Digital</span>?"
        description="Build hybrid ecosystems with Vibexio's unified AI + IT architecture."
        primaryCTA={{ text: "Request a Consultation", href: "/collaborate" }}
      />
    </>
  );
}

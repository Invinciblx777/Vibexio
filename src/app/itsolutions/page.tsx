import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { ProcessSteps } from "@/components/ui/StepCard";
import { CTASection } from "@/components/ui/CTASection";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { IT_SERVICES, IT_BUILD_STEPS, IT_SECTORS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "IT Solutions by Vibexio | Custom Software & Cloud Development",
  description:
    "From concept to code, Vibexio builds seamless digital experiences — web, mobile, and software systems engineered for real-world impact.",
  openGraph: {
    title: "IT Solutions by Vibexio | Custom Software & Cloud Development",
    description: "Custom software and cloud development engineered for real-world impact.",
    url: "https://vibexio.ai/itsolutions",
  },
};

export default function ITSolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="hidden" />
        <div className="hidden" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-text-muted mb-4">
              IT Solutions
            </span>
            <h1 className="font-[family-name:var(--font-serif)] italic text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
              <span className="text-text-primary">Design. Develop.</span>{" "}
              <span className="gradient-text-vibexio">Transform.</span>
            </h1>
            <p className="text-text-secondary text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              From concept to code, Vibexio builds seamless digital experiences — web, mobile, and software systems engineered for real-world impact.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            badge="Services"
            title="Comprehensive IT & <br class='hidden sm:block'/>Digital Services"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {IT_SERVICES.map((service, i) => (
              <FeatureCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Design Thinking */}
      <section className="py-24 lg:py-32 bg-bg-tertiary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            badge="Our Approach"
            title="The Difference Is in the <br class='hidden sm:block'/>Design Thinking"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {[
              "Product-first mindset rooted in strategy.",
              "Scalable architecture with long-term vision.",
              "Human-centered UX and visual storytelling.",
              "Agile execution for faster time to market.",
              "Continuous innovation post-deployment.",
              "Data-driven decisions with measurable impact.",
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

      {/* Challenges → Solutions */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            badge="Challenges & Solutions"
            title="Turning Digital Challenges into <br class='hidden sm:block'/>Scalable Solutions"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16">
            {[
              { challenge: "Legacy technology limits growth.", solution: "Modernize with cloud-native architecture." },
              { challenge: "User engagement remains low.", solution: "Redesign with UX-driven interfaces." },
              { challenge: "Manual workflows slow delivery.", solution: "Automate operations using intelligent systems." },
              { challenge: "Scattered online presence.", solution: "Create a unified, brand-consistent ecosystem." },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="p-6 rounded-2xl bg-bg-secondary border border-border group hover:border-border-light transition-all duration-500">
                  <div className="flex items-start gap-6">
                    <div className="flex-1">
                      <p className="text-xs text-text-muted uppercase tracking-wider mb-2">Challenge</p>
                      <p className="text-text-primary text-sm font-medium">{item.challenge}</p>
                    </div>
                    <div className="text-text-muted">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-vibexio-light uppercase tracking-wider mb-2">Solution</p>
                      <p className="text-vibexio-light text-sm font-medium">{item.solution}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-24 lg:py-32 bg-bg-tertiary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            badge="Industries"
            title="Built for Every Sector, <br class='hidden sm:block'/>Scaled for Every Vision"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {IT_SECTORS.map((sector, i) => (
              <FeatureCard key={sector.title} {...sector} index={i} />
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
            <ProcessSteps steps={IT_BUILD_STEPS} />
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

import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { CTASection } from "@/components/ui/CTASection";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { WHY_JOIN, HOW_WE_WORK, HIRING_STEPS, TEAM_TESTIMONIALS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Pathways at Vibexio | Careers & Opportunities",
  description:
    "Explore Vibexio's pathways to AI-driven transformation — from strategy and automation to scalable digital systems. Join our remote-first team.",
  openGraph: {
    title: "Pathways at Vibexio | Careers & Opportunities",
    description: "Join Vibexio's remote-first team building AI products that matter.",
    url: "https://vibexio.ai/pathways",
  },
};

export default function PathwaysPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="hidden" />
        <div className="hidden" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-text-muted mb-4">
              Careers
            </span>
            <h1 className="font-[family-name:var(--font-serif)] italic text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
              <span className="text-text-primary">Build the Future of AI.</span>
              <br />
              <span className="gradient-text-vibexio">Work From Anywhere.</span>
            </h1>
            <p className="text-text-secondary text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-4">
              Three founders. One dream. A fully remote team redefining how technology solves real-world problems.
            </p>
            <p className="text-text-muted text-sm max-w-xl mx-auto leading-relaxed mb-8">
              Join us in building AI products that actually matter — from the comfort of your home. We&apos;re not just another tech company. We&apos;re proving that India can build world-class AI with a distributed team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="#openings" size="lg">
                View Open Positions
              </Button>
              <Button href="#apply" variant="secondary" size="lg">
                Submit Your Resume
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            badge="Why Join Us"
            title="Your Strategic Partner in <br class='hidden sm:block'/>AI Evolution"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {WHY_JOIN.map((item, i) => (
              <FeatureCard key={item.title} {...item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 lg:py-32 bg-bg-tertiary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            badge="Culture"
            title="The Vibexio Way — <br class='hidden sm:block'/>How We Work"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {HOW_WE_WORK.map((item, i) => (
              <FeatureCard key={item.title} {...item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* What We're Looking For */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="p-8 rounded-2xl bg-bg-secondary border border-border h-full">
                <h3 className="font-[family-name:var(--font-serif)] italic text-2xl font-semibold text-text-primary mb-6">
                  We&apos;re Looking for People Who…
                </h3>
                <ul className="space-y-4">
                  {[
                    "Love solving problems — not just writing code",
                    "Are curious and self-driven",
                    "Communicate clearly",
                    "Take ownership without waiting for instructions",
                    "Care about quality and long-term value",
                    "Are humble and collaborative",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-vibexio-light mt-2 shrink-0" />
                      <span className="text-text-secondary text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="space-y-6 h-full flex flex-col">
                <div className="p-8 rounded-2xl bg-bg-secondary border border-border flex-1">
                  <h4 className="font-[family-name:var(--font-serif)] italic font-medium text-lg text-text-muted mb-4 line-through decoration-text-muted/40">
                    We Don&apos;t Care About
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["College name", "CGPA", "Certificates", "LinkedIn followers"].map((item) => (
                      <span key={item} className="px-3 py-1.5 text-xs text-text-muted bg-bg-tertiary rounded-full border border-border">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-8 rounded-2xl bg-bg-secondary border border-vibexio/20 flex-1">
                  <h4 className="font-[family-name:var(--font-serif)] italic font-medium text-lg text-vibexio-light mb-4">
                    We Care About
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["What you can build", "How you think", "How you work with others"].map((item) => (
                      <span key={item} className="px-3 py-1.5 text-xs text-vibexio-light bg-vibexio/10 rounded-full border border-vibexio/20">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-24 lg:py-32 bg-bg-tertiary scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <SectionHeader
              badge="Open Positions"
              title="Current Openings"
            />
            <div className="mt-12 p-12 rounded-2xl bg-bg-secondary border border-border">
              <p className="text-text-secondary text-lg mb-4">
                No open roles right now — but we&apos;re always listening.
              </p>
              <p className="text-text-muted text-sm mb-6">
                Send your resume and we&apos;ll reach out when something fits.
              </p>
              <Button
                href="mailto:contact@vibexio.ai?subject=Resume%20Submission"
                external
              >
                Send Your Resume
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Life at Vibexio */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            badge="Remote Life"
            title="Life at Vibexio <br class='hidden sm:block'/>(Remote Edition)"
            description="A typical day at Vibexio blends deep focus with collaboration."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { title: "Flexible Mornings", description: "Async standups and deep focus work sessions." },
              { title: "Pair Programming", description: "Design reviews and collaborative coding sessions." },
              { title: "Virtual Coffee Chats", description: "Informal hangouts and Friday social sessions." },
              { title: "Annual Team Retreat", description: "Optional in-person gatherings to connect and celebrate." },
            ].map((item, i) => (
              <FeatureCard key={item.title} {...item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Testimonials */}
      <section className="py-24 lg:py-32 bg-bg-tertiary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            badge="Our Team"
            title="Team Testimonials"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {TEAM_TESTIMONIALS.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.08}>
                <div className="p-6 rounded-2xl bg-bg-secondary border border-border group hover:border-border-light transition-all duration-500 text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-vibexio-light to-vibexio mx-auto mb-4 flex items-center justify-center">
                    <span className="text-bg-primary font-[family-name:var(--font-serif)] italic font-bold text-sm">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-serif)] italic font-medium text-text-primary mb-1">
                    {member.name}
                  </h3>
                  <p className="text-text-muted text-xs">{member.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            badge="Process"
            title="Our Hiring Process"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {HIRING_STEPS.map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 0.08}>
                <div className="p-6 rounded-2xl bg-bg-secondary border border-border group hover:border-border-light transition-all duration-500 h-full">
                  <div className="text-3xl font-[family-name:var(--font-serif)] italic font-bold text-bg-tertiary mb-4 group-hover:text-vibexio/20 transition-colors duration-300">
                    {step.step}
                  </div>
                  <h3 className="font-[family-name:var(--font-serif)] italic font-medium text-text-primary mb-2 group-hover:text-vibexio-light transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-text-muted text-sm">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section id="apply" className="scroll-mt-24">
        <CTASection
          title="Ready to <span class='gradient-text-vibexio'>Build the Future</span>?"
          description="Vibexio — Where Talent Meets Opportunity. Let's Build Together."
          primaryCTA={{
            text: "Send Your Resume",
            href: "mailto:contact@vibexio.ai?subject=Career%20Application",
          }}
          secondaryCTA={{ text: "Contact Us", href: "/collaborate" }}
        />
      </section>
    </>
  );
}

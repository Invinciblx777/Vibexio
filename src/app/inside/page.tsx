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

      {/* Minds Behind Vibexio */}
      <section id="team" className="py-24 lg:py-32 bg-bg-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            badge="Leadership"
            title="The Minds Behind Vibexio"
            description="The people shaping Vibexio's vision, products, and culture."
            dark
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
            <AnimatedSection>
              <div className="p-8 lg:p-10 rounded-2xl bg-bg-dark-secondary border border-[#2a2a29] h-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/inside/profile1.webp"
                  alt="Vignesh Kothandaraman"
                  className="w-40 h-36 object-cover rounded-xl mb-6"
                />
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-[family-name:var(--font-serif)] italic text-2xl text-text-inverse">
                    Vignesh Kothandaraman
                  </h3>
                  <a
                    href="https://www.linkedin.com/in/vignesh-kothandaraman-a93605234"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Vignesh Kothandaraman on LinkedIn"
                    className="text-[#8a8a86] hover:text-text-inverse transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#8a8a86] mb-6">
                  Managing Partner
                </p>
                <p className="text-[#b8b4ac] text-sm lg:text-base leading-relaxed">
                  Focuses on understanding real industry challenges and translating them into practical AI products. He drives product ideation through strong research and R&amp;D to ensure every solution is relevant and future ready. His leadership shapes Vibexio&apos;s vision with clarity, innovation, and long term impact.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="p-8 lg:p-10 rounded-2xl bg-bg-dark-secondary border border-[#2a2a29] h-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/inside/profile2.webp"
                  alt="Santhosh R"
                  className="w-40 h-36 object-cover rounded-xl mb-6"
                />
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-[family-name:var(--font-serif)] italic text-2xl text-text-inverse">
                    Santhosh R
                  </h3>
                  <a
                    href="https://www.linkedin.com/in/santhosh-r-53b1b8226/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Santhosh R on LinkedIn"
                    className="text-[#8a8a86] hover:text-text-inverse transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#8a8a86] mb-6">
                  Co-Founder
                </p>
                <p className="text-[#b8b4ac] text-sm lg:text-base leading-relaxed">
                  Serving as Co-Founder and Director at Vibexio, leading end-to-end product development and shaping the organization&apos;s technology vision. Plays a key role in managing the development team and driving the execution of multiple products, ensuring high standards of quality, performance, and innovation across all deliverables.
                </p>
              </div>
            </AnimatedSection>
          </div>
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

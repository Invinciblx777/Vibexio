import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Collaborate with Vibexio | Let's Build Together",
  description:
    "Have an idea, a challenge, or a vision? Partner with Vibexio to build AI-powered solutions, enterprise software, and more.",
  openGraph: {
    title: "Collaborate with Vibexio | Let's Build Together",
    description: "Partner with Vibexio to build AI-powered solutions and enterprise software.",
    url: "https://vibexio.ai/collaborate",
  },
};

const contactMethods = [
  {
    title: "Email Us",
    description: "Send us a detailed message about your project, requirements, or partnership ideas.",
    value: "contact@vibexio.ai",
    href: "mailto:contact@vibexio.ai",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    title: "Chat on WhatsApp",
    description: "Quick questions? Reach us directly on WhatsApp for a faster conversation.",
    value: "+91 6374404451",
    href: SITE_CONFIG.whatsapp,
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    title: "Connect on LinkedIn",
    description: "Follow us on LinkedIn and start a professional conversation.",
    value: "Vibexio on LinkedIn",
    href: "https://in.linkedin.com/company/vibexio",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
];

const helpItems = [
  { title: "Custom AI Solutions", description: "Predictive analytics, NLP, computer vision, and generative AI tailored to your business." },
  { title: "Enterprise Software Development", description: "Full-stack SaaS platforms, workflow automation, and cloud-native applications." },
  { title: "Product Strategy & Consulting", description: "Technical consulting, architecture review, and AI readiness assessment." },
  { title: "Technology Partnership", description: "Long-term partnerships for ongoing development, maintenance, and innovation." },
];

export default function CollaboratePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="hidden" />
        <div className="hidden" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-text-muted mb-4">
              Let&apos;s Build Together
            </span>
            <h1 className="font-[family-name:var(--font-serif)] italic text-4xl sm:text-5xl lg:text-6xl font-semibold text-text-primary leading-tight mb-6">
              Let&apos;s Collaborate
            </h1>
            <p className="text-text-secondary text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              Have an idea, a challenge, or a vision? We&apos;d love to hear about it. Reach out and let&apos;s explore how Vibexio can help you build something exceptional.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {contactMethods.map((method, i) => (
              <AnimatedSection key={method.title} delay={i * 0.1}>
                <a
                  href={method.href}
                  target={method.title !== "Email Us" ? "_blank" : undefined}
                  rel={method.title !== "Email Us" ? "noopener noreferrer" : undefined}
                  className="block group p-8 rounded-2xl bg-bg-secondary border border-border hover:border-border-light transition-all duration-500 h-full"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-vibexio/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-bg-tertiary border border-border flex items-center justify-center mb-6 text-vibexio-light group-hover:border-vibexio/30 transition-colors duration-300">
                      {method.icon}
                    </div>
                    <h3 className="font-[family-name:var(--font-serif)] italic font-medium text-xl text-text-primary mb-2 group-hover:text-vibexio-light transition-colors duration-300">
                      {method.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                      {method.description}
                    </p>
                    <p className="text-vibexio-light text-sm font-medium">{method.value}</p>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What We Can Help With */}
      <section className="py-24 lg:py-32 bg-bg-tertiary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-xs font-medium tracking-[0.15em] uppercase text-text-muted mb-4">
                How We Help
              </span>
              <h2 className="font-[family-name:var(--font-serif)] italic text-3xl lg:text-4xl font-semibold text-text-primary">
                What We Can Help With
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {helpItems.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <div className="p-8 rounded-2xl bg-bg-secondary border border-border group hover:border-border-light transition-all duration-500 h-full">
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

      {/* Bottom CTA */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-text-secondary text-lg mb-6">
              Prefer email? Write to us at
            </p>
            <a
              href="mailto:contact@vibexio.ai"
              className="font-[family-name:var(--font-serif)] italic text-2xl lg:text-3xl font-semibold text-vibexio hover:opacity-80 transition-opacity duration-300"
            >
              contact@vibexio.ai
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

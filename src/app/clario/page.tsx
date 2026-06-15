import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { ProcessSteps } from "@/components/ui/StepCard";
import { CTASection } from "@/components/ui/CTASection";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { CLARIO_FEATURES, CLARIO_STEPS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Clario AI | AI-Powered Document Intelligence by Vibexio",
  description:
    "Clario AI transforms how businesses process documents — from invoices and receipts to contracts and forms. Advanced OCR and NLP deliver unmatched accuracy.",
  openGraph: {
    title: "Clario AI | AI-Powered Document Intelligence by Vibexio",
    description: "Clario AI transforms how businesses process documents with advanced OCR and NLP.",
    url: "https://vibexio.ai/clario",
  },
};

export default function ClarioPage() {
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
              AI-Powered Product
            </span>
            <h1 className="font-[family-name:var(--font-serif)] italic text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-4">
              <span className="gradient-text-vibexio">Clario AI</span>
            </h1>
            <p className="font-[family-name:var(--font-serif)] italic text-xl lg:text-2xl text-text-secondary mb-6">
              AI-Powered Document Intelligence
            </p>
            <p className="text-text-secondary text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Clario AI transforms how businesses process documents — from invoices and receipts to contracts and forms. Extract, classify, and structure data from any document type with enterprise-grade accuracy and speed.
            </p>
            <Button
              href="mailto:contact@vibexio.ai?subject=Clario%20AI%20Early%20Access"
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
      </section>

      {/* Features */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            badge="Capabilities"
            title="Powerful Features for <br class='hidden sm:block'/>Document Intelligence"
            description="Clario combines advanced AI models with enterprise-ready infrastructure to deliver unmatched document processing."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {CLARIO_FEATURES.map((feature, i) => (
              <FeatureCard key={feature.title} {...feature} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 lg:py-32 bg-bg-tertiary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            badge="How It Works"
            title="Three Simple Steps"
            description="From upload to structured data — Clario handles the complexity so you don't have to."
          />

          <div className="mt-16">
            <ProcessSteps steps={CLARIO_STEPS} />
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            badge="Use Cases"
            title="Built for Real-World <br class='hidden sm:block'/>Document Workflows"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {[
              { title: "Invoice Processing", description: "Automate extraction of line items, totals, dates, and vendor details from invoices at scale." },
              { title: "Receipt Digitization", description: "Convert paper receipts into structured data for expense management and accounting." },
              { title: "Contract Management", description: "Extract key terms, dates, parties, and clauses from contracts for faster review." },
              { title: "Healthcare Records", description: "Process patient forms, prescriptions, and medical records with HIPAA-compliant precision." },
              { title: "Logistics Documentation", description: "Handle bills of lading, shipping manifests, and customs forms automatically." },
              { title: "Financial Documents", description: "Process bank statements, tax forms, and financial reports with enterprise accuracy." },
            ].map((useCase, i) => (
              <FeatureCard key={useCase.title} {...useCase} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your <span class='gradient-text-vibexio'>Document Workflow</span>?"
        description="Get early access to Clario AI and experience the future of document intelligence."
        primaryCTA={{
          text: "Get Early Access",
          href: "mailto:contact@vibexio.ai?subject=Clario%20AI%20Early%20Access",
        }}
        secondaryCTA={{ text: "Learn More", href: "/collaborate" }}
      />
    </>
  );
}

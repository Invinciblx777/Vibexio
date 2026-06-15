import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Privacy Policy & Terms",
  description:
    "Read Vibexio's privacy policy and terms and conditions. We are committed to safeguarding your personal and organizational data.",
  openGraph: {
    title: "Privacy Policy & Terms | Vibexio",
    description: "Vibexio's privacy policy and terms and conditions.",
    url: "https://vibexio.ai/privacypolicies",
  },
};

export default function PrivacyPoliciesPage() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="hidden" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-text-muted mb-4">
              Legal
            </span>
            <h1 className="font-[family-name:var(--font-serif)] italic text-4xl sm:text-5xl font-semibold text-text-primary leading-tight">
              Privacy Policy & Terms
            </h1>
          </div>
        </AnimatedSection>

        {/* Privacy Policy */}
        <AnimatedSection>
          <div className="p-8 lg:p-12 rounded-2xl bg-bg-secondary border border-border mb-8">
            <h2 className="font-[family-name:var(--font-serif)] italic text-2xl font-semibold text-text-primary mb-2">
              Privacy Policy
            </h2>
            <p className="text-text-muted text-xs mb-8">Effective Date: November 11, 2024</p>

            <div className="space-y-6 text-text-secondary text-sm leading-relaxed">
              <p>
                At Vibexio, your privacy matters. This policy outlines how we collect, use, and protect your personal information when you interact with our website, platforms, and services. We are committed to safeguarding your data and ensuring transparency in everything we do.
              </p>

              <div>
                <h3 className="font-[family-name:var(--font-serif)] italic font-medium text-text-primary text-base mb-3">
                  Information We Collect
                </h3>
                <p>
                  We may collect the following categories of information: personal identification details (name, email, phone number), organizational information (company name, role, industry), usage data (pages visited, interaction patterns, device/browser information), and financial details where applicable for billing purposes. We collect this data when you voluntarily submit it through forms, register for our services, or interact with our platforms.
                </p>
              </div>

              <div>
                <h3 className="font-[family-name:var(--font-serif)] italic font-medium text-text-primary text-base mb-3">
                  How We Use Your Information
                </h3>
                <p>
                  We use your information to provide and improve our services, communicate updates and relevant offerings, personalize your experience, process transactions, and ensure the security of our systems. We never sell your personal data to third parties. Data is shared only with trusted partners necessary for service delivery, and all sharing complies with applicable data protection regulations including GDPR and HIPAA where relevant.
                </p>
              </div>

              <div>
                <h3 className="font-[family-name:var(--font-serif)] italic font-medium text-text-primary text-base mb-3">
                  Cookies & Tracking
                </h3>
                <p>
                  Our website may use cookies and similar technologies to enhance user experience and gather analytical data. You can manage your cookie preferences through your browser settings. We respect Do Not Track signals where technically feasible.
                </p>
              </div>

              <div>
                <h3 className="font-[family-name:var(--font-serif)] italic font-medium text-text-primary text-base mb-3">
                  Age Restriction
                </h3>
                <p>
                  Our services are intended for individuals aged 18 and above. We do not knowingly collect data from minors. If we become aware that we have collected data from someone under 18, we will take steps to delete it promptly.
                </p>
              </div>

              <div>
                <h3 className="font-[family-name:var(--font-serif)] italic font-medium text-text-primary text-base mb-3">
                  Data Protection Officer
                </h3>
                <p>
                  For any privacy-related concerns, questions, or requests regarding your data, please contact our Data Protection Officer at{" "}
                  <a href="mailto:Privacy@vibexio.ai" className="text-vibexio-light hover:underline">
                    Privacy@vibexio.ai
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Terms & Conditions */}
        <AnimatedSection delay={0.1}>
          <div className="p-8 lg:p-12 rounded-2xl bg-bg-secondary border border-border">
            <h2 className="font-[family-name:var(--font-serif)] italic text-2xl font-semibold text-text-primary mb-8">
              Terms & Conditions
            </h2>

            <div className="space-y-6 text-text-secondary text-sm leading-relaxed">
              <div>
                <h3 className="font-[family-name:var(--font-serif)] italic font-medium text-text-primary text-base mb-3">
                  Acceptance of Terms
                </h3>
                <p>
                  By accessing and using Vibexio&apos;s website and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please refrain from using our services. We reserve the right to update these terms at any time, and continued use constitutes acceptance of any changes.
                </p>
              </div>

              <div>
                <h3 className="font-[family-name:var(--font-serif)] italic font-medium text-text-primary text-base mb-3">
                  User Responsibilities
                </h3>
                <p>
                  Users are responsible for maintaining the security and confidentiality of their account credentials. Any unauthorized use of your account must be reported immediately. You agree not to use our services for any unlawful purpose or in any way that could damage, disable, or impair our systems.
                </p>
              </div>

              <div>
                <h3 className="font-[family-name:var(--font-serif)] italic font-medium text-text-primary text-base mb-3">
                  Disclaimer
                </h3>
                <p>
                  Vibexio&apos;s services are provided &ldquo;as is&rdquo; without warranty of any kind, express or implied. While we strive to ensure accuracy and reliability, we do not guarantee that our services will be uninterrupted or error-free. Our website may contain links to third-party websites; we are not responsible for their content or privacy practices.
                </p>
              </div>

              <div>
                <h3 className="font-[family-name:var(--font-serif)] italic font-medium text-text-primary text-base mb-3">
                  Indemnification
                </h3>
                <p>
                  You agree to indemnify and hold Vibexio harmless from any claims, damages, losses, or expenses arising from your use of our services or violation of these terms. For complete details about our data handling practices, please refer to our Privacy Policy above.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Contact */}
        <AnimatedSection delay={0.2}>
          <div className="text-center mt-12">
            <p className="text-text-muted text-sm">
              Questions about our policies? Contact us at{" "}
              <a href="mailto:contact@vibexio.ai" className="text-vibexio-light hover:underline">
                contact@vibexio.ai
              </a>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

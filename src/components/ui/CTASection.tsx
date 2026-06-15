import { AnimatedSection } from "./AnimatedSection";
import { Button } from "./Button";

interface CTASectionProps {
  title: string;
  description: string;
  primaryCTA: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  dark?: boolean;
}

export function CTASection({ title, description, primaryCTA, secondaryCTA, dark = false }: CTASectionProps) {
  return (
    <section className={`py-24 lg:py-32 relative ${dark ? "bg-bg-dark" : "bg-bg-tertiary"}`}>
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2
            className={`font-[family-name:var(--font-serif)] italic text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6 ${
              dark ? "text-text-inverse" : "text-text-primary"
            }`}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className={`text-base lg:text-lg leading-relaxed mb-10 max-w-2xl mx-auto ${
            dark ? "text-[#b8b4ac]" : "text-text-secondary"
          }`}>
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={primaryCTA.href} size="lg" variant={dark ? "primary" : "primary"}>
              {primaryCTA.text}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            {secondaryCTA && (
              <Button href={secondaryCTA.href} variant="secondary" size="lg">
                {secondaryCTA.text}
              </Button>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

import Link from "next/link";
import { AnimatedSection } from "./AnimatedSection";

interface ProductCardProps {
  badge: string;
  title: string;
  description: string;
  href: string;
  ctaText: string;
  index?: number;
}

export function ProductCard({
  badge,
  title,
  description,
  href,
  ctaText,
  index = 0,
}: ProductCardProps) {
  return (
    <AnimatedSection delay={index * 0.1}>
      <div className="group relative overflow-hidden rounded-xl bg-bg-secondary border border-border card-hover h-full">
        <div className="relative z-10 p-8 lg:p-10 flex flex-col h-full">
          <span className="text-xs font-medium tracking-[0.15em] uppercase text-text-muted mb-6">
            {badge}
          </span>

          <h3 className="font-[family-name:var(--font-serif)] italic text-2xl lg:text-3xl text-text-primary mb-4 leading-tight">
            {title}
          </h3>

          <p className="text-text-secondary text-sm lg:text-base leading-relaxed mb-8 flex-1">
            {description}
          </p>

          <Link
            href={href}
            className="inline-flex items-center gap-2 text-sm font-medium text-text-primary hover:text-vibexio-light transition-colors duration-300"
          >
            {ctaText}
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}

"use client";

import { AnimatedSection } from "./AnimatedSection";

interface FeatureCardProps {
  title: string;
  description: string;
  index?: number;
}

export function FeatureCard({ title, description, index = 0 }: FeatureCardProps) {
  return (
    <AnimatedSection delay={index * 0.08}>
      <div className="group p-6 lg:p-8 rounded-xl bg-bg-secondary border border-border card-hover h-full">
        <h3 className="font-[family-name:var(--font-inter)] font-medium text-base lg:text-lg text-text-primary mb-3 group-hover:text-vibexio-light transition-colors duration-300">
          {title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </AnimatedSection>
  );
}

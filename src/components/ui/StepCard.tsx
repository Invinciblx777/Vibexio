"use client";

import { AnimatedSection } from "./AnimatedSection";

interface StepCardProps {
  step: string;
  title: string;
  description: string;
  index?: number;
}

export function StepCard({ step, title, description, index = 0 }: StepCardProps) {
  return (
    <AnimatedSection delay={index * 0.1}>
      <div className="relative group">
        <div className="text-5xl lg:text-6xl font-[family-name:var(--font-serif)] italic text-border group-hover:text-border-light transition-colors duration-500 mb-4">
          {step}
        </div>
        <h3 className="font-[family-name:var(--font-inter)] font-medium text-lg text-text-primary mb-2 group-hover:text-vibexio-light transition-colors duration-300">
          {title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
      </div>
    </AnimatedSection>
  );
}

interface ProcessStepsProps {
  steps: Array<{ step: string; title: string; description: string }>;
}

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
      {steps.map((s, i) => (
        <StepCard key={s.step} {...s} index={i} />
      ))}
    </div>
  );
}

import { AnimatedSection } from "./AnimatedSection";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  alignment?: "left" | "center";
  dark?: boolean;
}

export function SectionHeader({
  badge,
  title,
  description,
  alignment = "center",
  dark = false,
}: SectionHeaderProps) {
  const align = alignment === "center" ? "text-center" : "text-left";
  const descAlign = alignment === "center" ? "mx-auto" : "";

  return (
    <AnimatedSection className={align}>
      {badge && (
        <p className={`text-xs font-medium tracking-[0.15em] uppercase ${dark ? "text-[#8a8a86]" : "text-text-muted"} mb-4`}>
          {badge}
        </p>
      )}
      <h2
        className={`font-[family-name:var(--font-serif)] italic text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4 ${
          dark ? "text-text-inverse" : "text-text-primary"
        }`}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {description && (
        <p
          className={`text-base lg:text-lg leading-relaxed max-w-2xl ${descAlign} ${
            dark ? "text-[#b8b4ac]" : "text-text-secondary"
          }`}
        >
          {description}
        </p>
      )}
    </AnimatedSection>
  );
}

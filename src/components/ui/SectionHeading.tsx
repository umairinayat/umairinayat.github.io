import { ScrollReveal } from "./ScrollReveal";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  return (
    <ScrollReveal className="text-center mb-16">
      <p className="text-violet-400 text-sm uppercase tracking-[3px] mb-3 font-mono">
        {label}
      </p>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[var(--muted)] max-w-2xl mx-auto">{subtitle}</p>
      )}
    </ScrollReveal>
  );
}

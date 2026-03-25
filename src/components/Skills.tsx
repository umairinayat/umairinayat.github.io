"use client";

import { ScrollReveal } from "./ui/ScrollReveal";
import { SectionHeading } from "./ui/SectionHeading";
import { skillCategories } from "@/data/skills";

const colorMap = {
  violet: {
    bg: "bg-violet-500/5",
    border: "border-violet-500/15 hover:border-violet-500/40",
    title: "text-violet-400",
    tag: "bg-violet-500/10 text-violet-300",
  },
  blue: {
    bg: "bg-blue-500/5",
    border: "border-blue-500/15 hover:border-blue-500/40",
    title: "text-blue-400",
    tag: "bg-blue-500/10 text-blue-300",
  },
  cyan: {
    bg: "bg-cyan-500/5",
    border: "border-cyan-500/15 hover:border-cyan-500/40",
    title: "text-cyan-400",
    tag: "bg-cyan-500/10 text-cyan-300",
  },
};

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="Tech Stack"
          title="Technical Skills"
          subtitle="Technologies and tools I work with daily"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => {
            const colors = colorMap[category.color];
            return (
              <ScrollReveal key={category.title} delay={i * 0.15}>
                <div
                  className={`${colors.bg} ${colors.border} border rounded-2xl p-6 transition-colors h-full`}
                >
                  <h3 className={`text-lg font-bold ${colors.title} mb-4`}>
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1.5 text-xs rounded-lg ${colors.tag}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

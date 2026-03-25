"use client";

import { Trophy, Award, BadgeCheck } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { ScrollReveal } from "./ui/ScrollReveal";
import { competitions, awards, certifications } from "@/data/achievements";

export function Achievements() {
  return (
    <section id="achievements" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="Recognition"
          title="Achievements & Certifications"
          subtitle="Competition placements, academic awards, and professional certifications"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Competitions */}
          <ScrollReveal>
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Trophy className="w-5 h-5 text-violet-400" />
                <h3 className="text-lg font-bold">Competitions</h3>
              </div>
              <div className="space-y-4">
                {competitions.map((comp) => (
                  <div
                    key={comp.title}
                    className="border border-[var(--surface-border)] rounded-xl p-5 bg-[var(--card-bg)] hover:border-violet-500/30 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-3xl font-extrabold text-amber-400">
                        {comp.position}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm">{comp.title}</h4>
                        <p className="text-xs text-[var(--muted)]">{comp.description}</p>
                        <p className="text-xs text-violet-400 mt-1">{comp.year}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <div className="space-y-8">
            {/* Awards */}
            <ScrollReveal delay={0.1}>
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Award className="w-5 h-5 text-blue-400" />
                  <h3 className="text-lg font-bold">Awards</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {awards.map((award) => (
                    <div
                      key={award.title}
                      className="border border-[var(--surface-border)] rounded-lg p-4 bg-[var(--card-bg)] hover:border-blue-500/30 transition-colors"
                    >
                      <h4 className="font-bold text-sm">{award.title}</h4>
                      <p className="text-xs text-[var(--muted)] mt-1">{award.subtitle}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Certifications */}
            <ScrollReveal delay={0.2}>
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <BadgeCheck className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-lg font-bold">Certifications</h3>
                </div>
                <div className="space-y-3">
                  {certifications.map((cert) => (
                    <div
                      key={cert.title}
                      className="flex items-center gap-3 border border-[var(--surface-border)] rounded-lg p-3 bg-[var(--card-bg)] hover:border-cyan-500/30 transition-colors"
                    >
                      <div>
                        <h4 className="font-bold text-sm">{cert.title}</h4>
                        <p className="text-xs text-[var(--muted)]">{cert.issuer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

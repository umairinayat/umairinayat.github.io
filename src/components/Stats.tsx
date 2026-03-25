"use client";

import { ScrollReveal } from "./ui/ScrollReveal";
import { CountUp } from "./ui/CountUp";
import { siteConfig } from "@/data/siteConfig";

const colors = [
  "text-violet-400",
  "text-blue-400",
  "text-cyan-400",
  "text-violet-300",
  "text-indigo-400",
];

export function Stats() {
  return (
    <section className="py-12 border-y border-[var(--surface-border)]">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {siteConfig.stats.map((stat, i) => (
              <div key={stat.label}>
                <div className={`text-3xl md:text-4xl font-extrabold ${colors[i]}`}>
                  <CountUp
                    end={stat.value}
                    decimals={stat.decimals}
                    suffix={stat.suffix}
                  />
                </div>
                <div className="text-sm text-[var(--muted)] mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

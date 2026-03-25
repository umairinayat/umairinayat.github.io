"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "./ui/SectionHeading";
import { ScrollReveal } from "./ui/ScrollReveal";
import { timelineItems, type TimelineItem } from "@/data/experience";

const tabs = [
  { key: "experience" as const, label: "Experience" },
  { key: "education" as const, label: "Education" },
  { key: "leadership" as const, label: "Leadership" },
];

const dotColors: Record<string, string> = {
  experience: "bg-violet-500",
  education: "bg-blue-500",
  leadership: "bg-cyan-500",
};

const lineColors: Record<string, string> = {
  experience: "border-violet-500/30",
  education: "border-blue-500/30",
  leadership: "border-cyan-500/30",
};

const textAccent: Record<string, string> = {
  experience: "text-violet-400",
  education: "text-blue-400",
  leadership: "text-cyan-400",
};

export function Experience() {
  const [activeTab, setActiveTab] = useState<TimelineItem["type"]>("experience");
  const filtered = timelineItems.filter((item) => item.type === activeTab);

  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          label="Journey"
          title="Experience & Education"
          subtitle="My professional journey, academic background, and leadership roles"
        />

        <ScrollReveal>
          <div className="flex gap-3 justify-center mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === tab.key
                    ? "bg-gradient-to-r from-violet-500/20 to-blue-500/20 border border-violet-500/30 text-violet-400"
                    : "border border-[var(--surface-border)] text-[var(--muted)] hover:border-violet-500/20"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`border-l-2 ${lineColors[activeTab]} pl-8 ml-4 space-y-10`}
          >
            {filtered.map((item, i) => (
              <ScrollReveal key={`${activeTab}-${i}`} delay={i * 0.1}>
                <div className="relative">
                  <div
                    className={`absolute -left-[calc(2rem+5px)] top-1.5 w-3 h-3 rounded-full ${dotColors[activeTab]} ring-4 ring-[var(--background)]`}
                  />
                  <p className={`text-xs font-mono ${textAccent[activeTab]} mb-1`}>
                    {item.period}
                  </p>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-[var(--muted)] mb-2">{item.organization}</p>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

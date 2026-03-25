"use client";

import Image from "next/image";
import { ScrollReveal } from "./ui/ScrollReveal";
import { SectionHeading } from "./ui/SectionHeading";

const focusAreas = [
  "Computer Vision",
  "NLP",
  "LLMs",
  "RAG Systems",
  "Deep Learning",
  "Explainable AI",
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="About Me"
          title="Building AI That Works in the Real World"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="space-y-5 text-[var(--muted)] leading-relaxed">
              <p>
                I&apos;m a <span className="text-violet-400 font-medium">Computer Vision Engineer</span> at
                a startup, where I build production AI systems that solve real-world problems. My work spans
                the full pipeline — from research and model development to deployment and optimization.
              </p>
              <p>
                Currently pursuing my BS in Computer Science at the University of Management and Technology
                with a 3.82 GPA, I&apos;ve been recognized with the Dean&apos;s Award and Rector&apos;s Award for
                academic excellence. I also serve as a Teaching Assistant for Deep Learning and Automata courses.
              </p>
              <p>
                Beyond my day job, I&apos;m an active open-source contributor building tools like{" "}
                <span className="text-blue-400 font-medium">DeepContext</span> (hierarchical memory for AI agents)
                and <span className="text-blue-400 font-medium">AgentTrace</span> (observability for multi-agent systems).
                I lead the AI/ML team at Google Developer Group on Campus UMT and served as a Beta Microsoft
                Student Ambassador organizing tech summits across 15 universities.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1.5 text-sm rounded-lg border border-violet-500/20 bg-violet-500/10 text-violet-400"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="right">
            <div className="flex justify-center">
              <div className="relative w-72 h-72 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500 via-blue-500 to-cyan-500 blur-lg opacity-30" />
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-violet-500/30">
                  <Image
                    src="/images/profile.jpg"
                    alt="Umair Inayat"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

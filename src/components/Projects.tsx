"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./ui/SocialIcons";
import { SectionHeading } from "./ui/SectionHeading";
import { ScrollReveal } from "./ui/ScrollReveal";
import { projects, type ProjectCategory } from "@/data/projects";

const filters: { key: ProjectCategory | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "research", label: "Research" },
  { key: "product", label: "Products" },
  { key: "opensource", label: "Open Source" },
  { key: "ml", label: "ML / DL" },
  { key: "academic", label: "Academic" },
];

const categoryColors: Record<ProjectCategory, string> = {
  research: "text-violet-400 bg-violet-500/10",
  product: "text-cyan-400 bg-cyan-500/10",
  opensource: "text-blue-400 bg-blue-500/10",
  ml: "text-green-400 bg-green-500/10",
  academic: "text-amber-400 bg-amber-500/10",
};

const categoryLabels: Record<ProjectCategory, string> = {
  research: "Research",
  product: "Product",
  opensource: "Open Source",
  ml: "ML / DL",
  academic: "Academic",
};

export function Projects() {
  const [active, setActive] = useState<ProjectCategory | "all">("all");

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);
  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="Portfolio"
          title="Featured Projects"
          subtitle="A curated selection from 43+ projects spanning research, products, and open source"
        />

        <ScrollReveal>
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  active === f.key
                    ? "bg-gradient-to-r from-violet-500 to-blue-500 text-white"
                    : "border border-[var(--surface-border)] text-[var(--muted)] hover:border-violet-500/30"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {featured.length > 0 && (
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {featured.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    className="group relative bg-gradient-to-br from-violet-500/5 to-blue-500/5 border border-violet-500/15 hover:border-violet-500/40 rounded-2xl p-6 transition-all"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <span
                        className={`text-xs px-2.5 py-1 rounded-md ${categoryColors[project.category]}`}
                      >
                        {categoryLabels[project.category]}
                      </span>
                      <div className="flex gap-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} on GitHub`}
                          className="text-[var(--muted)] hover:text-violet-400 transition-colors"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} live demo`}
                            className="text-[var(--muted)] hover:text-violet-400 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-xs rounded-md bg-violet-500/10 text-violet-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {rest.length > 0 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {rest.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    className="group border border-[var(--surface-border)] hover:border-violet-500/30 rounded-xl p-5 transition-all bg-[var(--card-bg)]"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-sm">{project.title}</h3>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} on GitHub`}
                        className="text-[var(--muted)] hover:text-violet-400 transition-colors shrink-0"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                    </div>
                    <p className="text-xs text-[var(--muted)] leading-relaxed mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {project.tech.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 text-[10px] rounded bg-[var(--surface)] text-[var(--muted)]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded ${categoryColors[project.category]}`}
                      >
                        {categoryLabels[project.category]}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

"use client";

import { Mail } from "lucide-react";
import { LinkedinIcon } from "./ui/SocialIcons";
import { ScrollReveal } from "./ui/ScrollReveal";
import { siteConfig } from "@/data/siteConfig";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <ScrollReveal>
          <p className="text-violet-400 text-sm uppercase tracking-[3px] mb-3 font-mono">
            Get in Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-[var(--muted)] mb-10 max-w-lg mx-auto">
            Open for CV/ML engineering roles, research collaborations, and open-source projects.
            Feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-violet-500 to-blue-500 rounded-xl hover:opacity-90 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              Send Email
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold border border-violet-500/40 text-violet-400 rounded-xl hover:bg-violet-500/10 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

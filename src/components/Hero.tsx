"use client";

import { motion } from "framer-motion";
import { GradientOrbs } from "./ui/GradientOrbs";
import { GithubIcon, LinkedinIcon, TwitterIcon, KaggleIcon } from "./ui/SocialIcons";
import { siteConfig } from "@/data/siteConfig";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <GradientOrbs />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <motion.div variants={item}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border border-violet-500/30 bg-violet-500/10 text-violet-400 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for Opportunities
          </span>
        </motion.div>

        <motion.p variants={item} className="text-lg text-[var(--muted)] mb-2">
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight"
        >
          {siteConfig.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="text-2xl md:text-3xl font-bold gradient-text mb-6"
        >
          {siteConfig.title}
        </motion.p>

        <motion.p
          variants={item}
          className="text-[var(--muted)] text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {siteConfig.description}
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-violet-500 to-blue-500 rounded-xl hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href={siteConfig.resumePath}
            download
            className="px-8 py-3.5 text-sm font-semibold border border-violet-500/40 text-violet-400 rounded-xl hover:bg-violet-500/10 transition-colors"
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div variants={item} className="flex gap-4 justify-center">
          {[
            { href: siteConfig.social.github, icon: GithubIcon, label: "GitHub" },
            { href: siteConfig.social.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
            { href: siteConfig.social.twitter, icon: TwitterIcon, label: "X / Twitter" },
            { href: siteConfig.social.kaggle, icon: KaggleIcon, label: "Kaggle" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-[var(--surface-border)] text-[var(--muted)] hover:text-violet-400 hover:border-violet-500/30 transition-colors"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

import { GithubIcon, LinkedinIcon, TwitterIcon, KaggleIcon } from "./ui/SocialIcons";
import { siteConfig } from "@/data/siteConfig";

export function Footer() {
  return (
    <footer className="py-8 border-t border-[var(--surface-border)]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--muted)]">
          &copy; {new Date().getFullYear()} {siteConfig.name}. Built with Next.js, Tailwind &amp; Framer Motion.
        </p>
        <div className="flex gap-4">
          {[
            { href: siteConfig.social.github, icon: GithubIcon, label: "GitHub" },
            { href: siteConfig.social.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
            { href: siteConfig.social.twitter, icon: TwitterIcon, label: "X" },
            { href: siteConfig.social.kaggle, icon: KaggleIcon, label: "Kaggle" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[var(--muted)] hover:text-violet-400 transition-colors"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

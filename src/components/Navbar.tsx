"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { siteConfig } from "@/data/siteConfig";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass bg-[var(--background)]/80 border-b border-[var(--surface-border)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleClick("#home");
            }}
            className="text-xl font-bold"
          >
            UI<span className="text-violet-500">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.href);
                }}
                className="text-sm text-[var(--muted)] hover:text-violet-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href={siteConfig.resumePath}
              download
              className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-violet-500 to-blue-500 rounded-lg hover:opacity-90 transition-opacity"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-[var(--background)] border-l border-[var(--surface-border)] z-50 md:hidden p-6 pt-20"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(link.href);
                    }}
                    className="text-lg text-[var(--muted)] hover:text-violet-400 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={siteConfig.resumePath}
                  download
                  className="mt-4 flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-violet-500 to-blue-500 rounded-lg"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

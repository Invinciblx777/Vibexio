"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const logoRef = useRef<HTMLDivElement>(null);

  // Scroll-based logo collapse (Anthropic style)
  const { scrollY } = useScroll();
  const [isCollapsed, setIsCollapsed] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
    setIsCollapsed(latest > 100);
  });

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-bg-primary/95 backdrop-blur-md border-b border-border"
            : "bg-bg-primary"
        }`}
      >
        <nav className="max-w-[90rem] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-[4.25rem]">
            {/* Logo — VIBEXIO wordmark that collapses to V */}
            <Link
              href="/"
              className="flex items-center z-50 group"
              aria-label="Vibexio home"
            >
              <div ref={logoRef} className="relative flex items-center overflow-hidden">
                {/* V letter (always visible) */}
                <motion.span
                  className="font-[family-name:var(--font-heading)] font-semibold text-[1.15rem] tracking-[0.08em] uppercase text-text-primary"
                  layout
                >
                  V
                </motion.span>
                
                {/* IBEXIO letters (collapse on scroll) */}
                <motion.span
                  className="font-[family-name:var(--font-heading)] font-semibold text-[1.15rem] tracking-[0.08em] uppercase text-text-primary inline-block overflow-hidden whitespace-nowrap"
                  animate={{
                    width: isCollapsed ? 0 : "auto",
                    opacity: isCollapsed ? 0 : 1,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  IBEXIO
                </motion.span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                if (link.isCTA) {
                  return (
                    <Link
                      key={link.label}
                      href={link.href || "/"}
                      className="ml-6 px-5 py-2 bg-text-primary text-text-inverse rounded-full text-[13px] font-medium hover:bg-text-secondary transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  );
                }

                if (link.children) {
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(link.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button className="px-4 py-2 text-[14px] text-text-secondary hover:text-text-primary transition-colors duration-300 flex items-center gap-1.5">
                        {link.label}
                        <svg
                          className={`w-3 h-3 transition-transform duration-300 ${
                            activeDropdown === link.label ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      <AnimatePresence>
                        {activeDropdown === link.label && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute top-full left-0 mt-1 w-52 py-2 bg-bg-secondary border border-border rounded-xl shadow-lg shadow-black/5"
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className={`block px-5 py-2.5 text-[13px] transition-colors duration-200 ${
                                  pathname === child.href
                                    ? "text-text-primary font-medium"
                                    : "text-text-secondary hover:text-text-primary hover:bg-bg-tertiary"
                                }`}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                const linkHref = link.href || "/";
                return (
                  <Link
                    key={link.label}
                    href={linkHref}
                    className={`px-4 py-2 text-[14px] transition-colors duration-300 ${
                      pathname === linkHref
                        ? "text-text-primary"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden z-50 w-10 h-10 flex items-center justify-center"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`w-full h-px bg-text-primary transition-all duration-300 origin-center ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`w-full h-px bg-text-primary transition-all duration-300 ${
                    isOpen ? "opacity-0 scale-0" : ""
                  }`}
                />
                <span
                  className={`w-full h-px bg-text-primary transition-all duration-300 origin-center ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg-primary"
          >
            <div className="flex flex-col items-start justify-center min-h-screen px-8 py-24">
              <nav className="flex flex-col gap-2 w-full">
                {NAV_LINKS.map((link, i) => {
                  if (link.children) {
                    return (
                      <motion.div
                        key={link.label}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                      >
                        <button
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === link.label ? null : link.label
                            )
                          }
                          className="text-3xl font-[family-name:var(--font-serif)] italic text-text-primary hover:text-text-secondary transition-colors duration-300 flex items-center gap-3 py-3 w-full text-left"
                        >
                          {link.label}
                          <svg
                            className={`w-5 h-5 transition-transform duration-300 ${
                              activeDropdown === link.label ? "rotate-180" : ""
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <AnimatePresence>
                          {activeDropdown === link.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden pl-6"
                            >
                              {link.children.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  className="block py-2 text-xl text-text-muted hover:text-text-primary transition-colors duration-200"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  }

                  const mobileHref = link.href || "/";
                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                    >
                      <Link
                        href={mobileHref}
                        className={`text-3xl font-[family-name:var(--font-serif)] italic transition-colors duration-300 block py-3 ${
                          link.isCTA
                            ? "text-vibexio"
                            : pathname === mobileHref
                            ? "text-text-primary"
                            : "text-text-secondary hover:text-text-primary"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12 pt-8 border-t border-border w-full"
              >
                <p className="text-text-muted text-sm">contact@vibexio.ai</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

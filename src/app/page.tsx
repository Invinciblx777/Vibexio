"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { ProductCard } from "@/components/ui/ProductCard";
import { CTASection } from "@/components/ui/CTASection";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import {
  HOME_FEATURES,
  HOME_STATS,
  MARQUEE_ITEMS,
  TESTIMONIALS,
} from "@/lib/constants";

// ─── Typing Animation Hook ───
function useTypingAnimation(words: string[], typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      setText(currentWord.substring(0, text.length - 1));
    } else {
      setText(currentWord.substring(0, text.length + 1));
    }
  }, [text, wordIndex, isDeleting, words]);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, tick, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}

// ─── Hero Section (Anthropic-style split layout) ───
function HeroSection() {
  const typedText = useTypingAnimation(
    ["software.", "solutions.", "products.", "experiences."],
    80,
    40,
    2500
  );

  return (
    <section className="relative min-h-screen flex items-center">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-10 pt-32 pb-20 lg:pt-40 lg:pb-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Main heading */}
          <AnimatedSection>
            <h1 className="font-[family-name:var(--font-serif)] italic text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.1] text-text-primary">
              From intelligent AI to scalable{" "}
              <span className="text-text-secondary">
                {typedText}
                <span className="typing-cursor" />
              </span>
            </h1>
          </AnimatedSection>

          {/* Right — Description */}
          <AnimatedSection delay={0.15}>
            <div className="lg:pt-8">
              <p className="text-text-secondary text-lg lg:text-xl leading-relaxed mb-8">
                Vibexio is an enterprise software company building AI-powered solutions, advanced OCR platforms, and custom software that automate operations, reduce costs, and drive real growth.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Button href="/collaborate" size="lg">
                  Get Started
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
                <Button href="/ecosystem" variant="secondary" size="lg">
                  Explore Ecosystem
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

// ─── Marquee Section ───
function MarqueeSection() {
  return (
    <section className="py-6 border-y border-border overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
          <span
            key={i}
            className="mx-8 text-sm text-text-muted font-medium flex items-center gap-3 shrink-0"
          >
            <span className="w-1 h-1 rounded-full bg-text-muted" />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

// ─── Featured Products (Dark section like Anthropic) ───
function FeaturedSection() {
  return (
    <section className="bg-bg-dark py-24 lg:py-32">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-10">
        <SectionHeader
          badge="Our Products"
          title="Products that solve<br class='hidden sm:block'/> real problems"
          dark
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16">
          {/* Clario Card */}
          <AnimatedSection>
            <Link href="/clario" className="block group">
              <div className="rounded-xl bg-bg-dark-secondary p-8 lg:p-10 border border-[#2a2a29] hover:border-[#3a3a39] transition-all duration-500 h-full">
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#8a8a86] mb-6">
                  AI-Powered
                </p>
                <h3 className="font-[family-name:var(--font-serif)] italic text-3xl lg:text-4xl text-text-inverse mb-4 group-hover:text-[#cc785c] transition-colors duration-300">
                  Clario AI
                </h3>
                <p className="text-[#b8b4ac] text-base leading-relaxed mb-6">
                  Advanced OCR and NLP platform that reads, classifies, and extracts data from any document type. Built for finance, healthcare, logistics, and enterprise operations.
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-text-inverse group-hover:text-[#cc785c] transition-colors duration-300">
                  Explore Clario
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          </AnimatedSection>

          {/* Kubyn Card */}
          <AnimatedSection delay={0.1}>
            <Link href="/kubyn" className="block group">
              <div className="rounded-xl bg-bg-dark-secondary p-8 lg:p-10 border border-[#2a2a29] hover:border-[#3a3a39] transition-all duration-500 h-full">
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#8a8a86] mb-6">
                  All-in-One
                </p>
                <h3 className="font-[family-name:var(--font-serif)] italic text-3xl lg:text-4xl text-text-inverse mb-4 group-hover:text-[#cc785c] transition-colors duration-300">
                  Kubyn
                </h3>
                <p className="text-[#b8b4ac] text-base leading-relaxed mb-6">
                  One platform for CRM, project tracking, HR, invoicing, inventory, and more. Modular, flexible, and built to scale with your business.
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-text-inverse group-hover:text-[#cc785c] transition-colors duration-300">
                  Explore Kubyn
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

// ─── Features Section ───
function FeaturesSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-10">
        <SectionHeader
          badge="What We Do"
          title="From vision to deployment —<br class='hidden sm:block'/> built for real impact"
          description="We don't just write code. We engineer solutions that solve deep business challenges using AI, cloud, and modern software architecture."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {HOME_FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} {...feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Stats Section ───
function StatsSection() {
  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {HOME_STATS.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <div className="text-center lg:text-left">
                <div className="font-[family-name:var(--font-serif)] italic text-4xl lg:text-5xl text-text-primary mb-2">
                  {stat.value}
                </div>
                <div className="font-medium text-sm text-text-primary mb-1">
                  {stat.label}
                </div>
                <p className="text-text-muted text-xs">{stat.sub}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials Section ───
function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-bg-tertiary">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <SectionHeader
          badge="What Clients Say"
          title="Trusted by teams that<br class='hidden sm:block'/> build the future"
        />

        <AnimatedSection className="mt-16">
          <div className="relative">
            <div className="min-h-[180px] flex flex-col justify-center">
              <p className="font-[family-name:var(--font-serif)] italic text-2xl lg:text-3xl text-text-primary leading-relaxed mb-8">
                &ldquo;{TESTIMONIALS[current].quote}&rdquo;
              </p>

              <div>
                <p className="font-medium text-text-primary text-sm">
                  {TESTIMONIALS[current].name}
                </p>
                <p className="text-text-muted text-sm">{TESTIMONIALS[current].role}</p>
              </div>
            </div>

            {/* Dots */}
            <div className="flex gap-2 mt-10">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-text-primary w-8"
                      : "bg-border w-1.5 hover:bg-text-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

// ─── Main Page ───
export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <FeaturedSection />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection
        title="Ready to transform your business?"
        description="Partner with Vibexio to unlock the power of AI, automation, and intelligent software — built to scale with your goals."
        primaryCTA={{ text: "Let's Collaborate", href: "/collaborate" }}
        secondaryCTA={{ text: "Explore Products", href: "/ecosystem" }}
      />
    </>
  );
}

"use client";

import { ArrowDown, Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="hero-mesh top-[10%] left-[15%] bg-purple-600 animate-glow-pulse" />
      <div
        className="hero-mesh top-[30%] right-[10%] bg-indigo-600 animate-glow-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="hero-mesh bottom-[10%] left-[40%] bg-pink-600 animate-glow-pulse"
        style={{ animationDelay: "4s" }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Profile Photo */}
        <div className="mb-8 flex justify-center animate-fade-in-up">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 opacity-40 blur-md group-hover:opacity-60 transition-opacity duration-500" />
            {/* Served from public/: the old LinkedIn CDN link was a signed URL that
                expired (403), so the photo silently disappeared from the live site. */}
            <Image
              src="/keerthishree.jpeg"
              alt="KeerthiShree TS"
              width={120}
              height={120}
              className="relative rounded-full border border-white/10 object-cover"
              priority
            />
          </div>
        </div>

        {/* Status */}
        <div
          className="animate-fade-in-up flex justify-center mb-6"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.06] bg-white/[0.02] text-xs text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to internships & collaborations
          </span>
        </div>

        {/* Name */}
        <h1
          className="text-5xl md:text-7xl font-bold tracking-tight mb-3 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          KeerthiShree <span className="gradient-text">TS</span>
        </h1>

        {/* Role */}
        <p
          className="text-base md:text-lg text-accent/80 font-medium mb-5 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          AI/ML Engineer &amp; Full-Stack Developer
        </p>

        {/* Summary */}
        <p
          className="text-sm md:text-[15px] text-muted max-w-xl mx-auto mb-10 animate-fade-in-up leading-relaxed"
          style={{ animationDelay: "0.4s" }}
        >
          Computer Science undergraduate building production-grade AI systems
          and full-stack applications. Specializing in{" "}
          <span className="text-foreground">intelligent automation</span>,{" "}
          <span className="text-foreground">predictive analytics</span>, and{" "}
          <span className="text-foreground">agentic AI workflows</span>.
        </p>

        {/* CTAs */}
        <div
          className="flex items-center justify-center gap-3 mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          <a
            href="#projects"
            className="shimmer-btn px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full border border-white/[0.08] text-sm text-foreground hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300"
          >
            Get in Touch
          </a>
          {/* `download` names the saved file; the PDF lives in public/. */}
          <a
            href="/KeerthiShree_TS_Resume.pdf"
            download="KeerthiShree_TS_Resume.pdf"
            className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/[0.08] text-sm text-foreground hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300"
          >
            <FileText size={15} />
            Resume
          </a>
        </div>

        {/* Social */}
        <div
          className="flex items-center justify-center gap-3 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          {[
            { icon: GithubIcon, href: "https://github.com/keerthishree20", label: "GitHub" },
            { icon: LinkedinIcon, href: "https://www.linkedin.com/in/keerthishree-ts/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:keerthishreets@gmail.com", label: "Email" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-white/[0.06] bg-white/[0.02] flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
              aria-label={link.label}
            >
              <link.icon size={16} />
            </a>
          ))}
        </div>

        <div className="mt-20 animate-float">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown size={16} className="mx-auto text-muted/40" />
          </a>
        </div>
      </div>
    </section>
  );
}

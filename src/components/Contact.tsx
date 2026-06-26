"use client";

import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { ScrollReveal } from "./Effects";

const links = [
  {
    icon: Mail,
    label: "keerthishreets@gmail.com",
    href: "mailto:keerthishreets@gmail.com",
    sublabel: "Email",
  },
  {
    icon: LinkedinIcon,
    label: "linkedin.com/in/keerthishree-ts",
    href: "https://www.linkedin.com/in/keerthishree-ts/",
    sublabel: "LinkedIn",
  },
  {
    icon: GithubIcon,
    label: "github.com/keerthishree20",
    href: "https://github.com/keerthishree20",
    sublabel: "GitHub",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="section-divider max-w-5xl mx-auto mb-32" />
      <div className="max-w-lg mx-auto text-center">
        <ScrollReveal>
          <p className="text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-3">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted text-sm mb-12 leading-relaxed">
            Interested in working together or have a project in mind?
            <br />I&apos;m always open to discussing new opportunities.
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-2">
          {links.map((link) => (
            <ScrollReveal key={link.href}>
              <a
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="glass-card group flex items-center gap-4 rounded-xl px-5 py-4 text-left"
              >
                <div className="w-9 h-9 rounded-lg bg-accent/8 border border-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/12 transition-colors">
                  <link.icon size={16} className="text-accent/70" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] text-muted/50 uppercase tracking-wider mb-0.5">
                    {link.sublabel}
                  </p>
                  <p className="text-sm text-muted group-hover:text-foreground transition-colors truncate">
                    {link.label}
                  </p>
                </div>
                <ArrowUpRight
                  size={14}
                  className="text-muted/30 group-hover:text-accent transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
                />
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

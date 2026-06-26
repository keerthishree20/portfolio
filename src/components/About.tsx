"use client";

import { Brain, Code, Zap, GraduationCap, MapPin, Calendar } from "lucide-react";
import { ScrollReveal } from "./Effects";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="section-divider max-w-5xl mx-auto mb-32" />
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-3 text-center">
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-tight">
            Background &amp; <span className="gradient-text">Expertise</span>
          </h2>
        </ScrollReveal>

        {/* Bio */}
        <ScrollReveal>
          <div className="glass-card rounded-2xl p-8 mb-6">
            <p className="text-[15px] text-muted leading-[1.8] max-w-3xl">
              I&apos;m a Computer Science student at{" "}
              <span className="text-foreground">SNS College of Technology, Coimbatore</span>{" "}
              with a strong focus on applied AI and software engineering. I build
              end-to-end systems — from training ML models and designing REST APIs to
              shipping polished, responsive frontends. My work spans{" "}
              <span className="text-foreground">revenue forecasting engines</span>,{" "}
              <span className="text-foreground">AI-driven browser automation</span>,{" "}
              <span className="text-foreground">document intelligence pipelines</span>, and{" "}
              <span className="text-foreground">real-time computer vision</span>.
              I&apos;m driven by the idea of using technology to automate the tedious and
              augment human decision-making.
            </p>
          </div>
        </ScrollReveal>

        {/* Specializations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          {[
            {
              icon: Brain,
              title: "AI & Machine Learning",
              items: [
                "Retrieval-Augmented Generation (RAG)",
                "Predictive analytics & forecasting",
                "Computer vision & image classification",
                "LLM integration (Gemini, OpenAI)",
              ],
            },
            {
              icon: Code,
              title: "Full-Stack Development",
              items: [
                "Backend: FastAPI, Python, REST APIs",
                "Frontend: Next.js, React, TypeScript",
                "Database: MongoDB, MySQL, SQLite",
                "Styling: Tailwind CSS, Framer Motion",
              ],
            },
            {
              icon: Zap,
              title: "Automation & Tools",
              items: [
                "Browser automation with Playwright",
                "CI/CD & containerization (Docker)",
                "Data pipelines (Pandas, NumPy)",
                "IoT systems (Raspberry Pi, OpenCV)",
              ],
            },
          ].map((card, i) => (
            <ScrollReveal key={card.title}>
              <div className="glass-card rounded-2xl p-6 h-full">
                <div className="w-9 h-9 rounded-xl bg-accent/8 border border-accent/10 flex items-center justify-center mb-4">
                  <card.icon size={17} className="text-accent/80" />
                </div>
                <h3 className="font-semibold text-[15px] text-foreground mb-3">
                  {card.title}
                </h3>
                <ul className="space-y-2">
                  {card.items.map((item) => (
                    <li key={item} className="text-[13px] text-muted leading-relaxed flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent/40 mt-[7px] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Education + Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <ScrollReveal className="md:col-span-2">
            <div className="glass-card rounded-2xl p-6 h-full">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap size={17} className="text-accent/80" />
                <h3 className="font-semibold text-[15px] text-foreground">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-[14px] text-foreground font-medium">
                    B.Tech in Computer Science &amp; Engineering
                  </p>
                  <p className="text-[13px] text-muted">
                    SNS College of Technology, Coimbatore
                  </p>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="flex items-center gap-1.5 text-[12px] text-muted/60">
                      <MapPin size={11} /> Tamil Nadu, India
                    </span>
                    <span className="flex items-center gap-1.5 text-[12px] text-muted/60">
                      <Calendar size={11} /> Expected 2026
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/[0.04]">
                <p className="text-[12px] text-muted/60 uppercase tracking-wider mb-2">Coursework</p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Data Structures & Algorithms",
                    "Machine Learning",
                    "Deep Learning",
                    "Computer Vision",
                    "Database Systems",
                    "Software Engineering",
                  ].map((c) => (
                    <span key={c} className="text-[11px] px-2 py-0.5 rounded-md bg-white/[0.03] text-muted/70 border border-white/[0.04]">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-col gap-3 h-full">
              {[
                { value: "18+", label: "Projects Built" },
                { value: "10+", label: "Technologies" },
                { value: "3+", label: "Live Deployments" },
              ].map((stat) => (
                <div key={stat.label} className="glass-card rounded-2xl p-5 text-center flex-1 flex flex-col justify-center">
                  <p className="text-2xl font-bold gradient-text mb-1">{stat.value}</p>
                  <p className="text-[11px] text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

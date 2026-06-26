"use client";

import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";
import { ScrollReveal } from "./Effects";

interface Project {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "RevCast AI",
    tagline: "Revenue Forecasting Engine",
    description:
      "Probabilistic revenue forecasting platform for paid media. Uses Monte Carlo simulation to generate confidence intervals and budget optimization recommendations. Full-stack app with interactive visualizations and AI-generated summaries.",
    tech: ["FastAPI", "Next.js 14", "Python", "Monte Carlo", "TypeScript"],
    github: "https://github.com/keerthishree20/RevCast-AI",
    live: "https://revcast-frontend.onrender.com",
    featured: true,
  },
  {
    title: "Job Apply Assistant",
    tagline: "AI-Powered Application Automation",
    description:
      "End-to-end job application automation system. Parses job descriptions, tailors resumes using Gemini AI, generates targeted cover letters, and auto-submits applications through LinkedIn Easy Apply and ATS portals via Playwright.",
    tech: ["Google Gemini", "Playwright", "Next.js", "TypeScript", "FastAPI"],
    github: "https://github.com/keerthishree20/job-apply-assistant",
    featured: true,
  },
  {
    title: "Eternova",
    tagline: "Relationship Memory Platform",
    description:
      "Full-stack platform for preserving relationship memories — digital time capsules, memory books, love letters, and milestone tracking with couple mode. Features JWT auth, rich text editing, and smooth animations.",
    tech: ["Next.js", "FastAPI", "SQLite", "JWT", "Framer Motion"],
    github: "https://github.com/keerthishree20/eternova",
    live: "https://eternova-peach.vercel.app",
    featured: true,
  },
  {
    title: "RAG Chatbot",
    tagline: "Document Intelligence",
    description:
      "Retrieval-augmented generation chatbot that enables natural language Q&A over uploaded documents using vector embeddings and semantic search.",
    tech: ["Python", "RAG", "Vector Search", "NLP"],
    github: "https://github.com/keerthishree20/rag-chatbot",
  },
  {
    title: "Blog Writing Platform",
    tagline: "AI Content Generation",
    description:
      "Content creation platform with AI-assisted writing, rich text editing, and publishing workflows. Deployed on Vercel with authentication.",
    tech: ["Next.js", "OpenAI", "TypeScript", "Tailwind"],
    github: "https://github.com/keerthishree20/blog-writing-app",
    live: "https://blog-writing-app-ashy.vercel.app/",
  },
  {
    title: "Image Prediction API",
    tagline: "Deep Learning Service",
    description:
      "Production-ready REST API for real-time image classification. Built on PyTorch with pre-trained models and optimized inference pipelines.",
    tech: ["PyTorch", "FastAPI", "Python", "Deep Learning"],
    github: "https://github.com/keerthishree20/image-prediction-api",
  },
  {
    title: "Document Classifier",
    tagline: "ML Training Pipeline",
    description:
      "Automated document classification pipeline with data preprocessing, model training, evaluation metrics, and exportable model artifacts.",
    tech: ["Python", "scikit-learn", "NLP", "ML Pipeline"],
    github: "https://github.com/keerthishree20/document-classifier-training",
  },
  {
    title: "TrueFrame",
    tagline: "Visual Verification",
    description:
      "Computer vision tool for frame-level analysis and authenticity verification of visual media.",
    tech: ["Python", "OpenCV", "Computer Vision"],
    github: "https://github.com/keerthishree20/TrueFrame",
  },
  {
    title: "Smart Doorbell",
    tagline: "IoT + Computer Vision",
    description:
      "IoT-based smart doorbell system with real-time face detection and push notifications, built on Raspberry Pi with OpenCV.",
    tech: ["Python", "OpenCV", "Raspberry Pi", "IoT"],
    github: "https://github.com/keerthishree20/smart-doorbell",
  },
  {
    title: "Employee Attrition Predictor",
    tagline: "HR Analytics",
    description:
      "Machine learning system that predicts employee attrition risk using historical HR data, enabling proactive retention strategies.",
    tech: ["Python", "scikit-learn", "Pandas", "Data Analysis"],
    github: "https://github.com/keerthishree20/Employee-attrition-risk-analysis",
  },
  {
    title: "Shelf-Life Predictor",
    tagline: "Food Safety ML",
    description:
      "ML-based prediction system for estimating product shelf life, helping reduce food waste through data-driven expiry forecasting.",
    tech: ["Python", "Machine Learning", "Prediction"],
    github: "https://github.com/keerthishree20/Shelf-Life",
  },
  {
    title: "Insurance Cost Predictor",
    tagline: "ML from Scratch",
    description:
      "Linear regression implementation built entirely from scratch in pure Python — no scikit-learn, no NumPy — to demonstrate core ML fundamentals.",
    tech: ["Python", "Mathematics", "From Scratch"],
    github: "https://github.com/keerthishree20/insurance-cost-prediction-scratch",
  },
];

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="section-divider max-w-5xl mx-auto mb-32" />
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-3 text-center">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight">
            Selected <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted text-center max-w-lg mx-auto mb-16 text-sm">
            End-to-end systems I&apos;ve designed, built, and deployed — spanning
            AI/ML, full-stack development, and automation.
          </p>
        </ScrollReveal>

        {/* Featured */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-20">
          {featured.map((project) => (
            <ScrollReveal key={project.title}>
              <div className="gradient-border rounded-2xl p-6 h-full flex flex-col">
                <p className="text-[11px] text-accent/60 uppercase tracking-wider mb-1.5">
                  {project.tagline}
                </p>
                <h3 className="font-semibold text-[16px] text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-[13px] text-muted leading-[1.7] mb-5 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-accent/8 text-accent/70 border border-accent/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 pt-3 border-t border-white/[0.04]">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[12px] text-muted hover:text-foreground transition-colors"
                  >
                    <GithubIcon size={13} />
                    Source Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[12px] text-accent/80 hover:text-accent transition-colors"
                    >
                      <ExternalLink size={12} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Other projects */}
        <ScrollReveal>
          <p className="text-xs font-mono text-muted/50 tracking-[0.15em] uppercase mb-6 text-center">
            Other Projects
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {other.map((project) => (
            <ScrollReveal key={project.title}>
              <div className="glass-card rounded-2xl p-5 h-full flex flex-col">
                <p className="text-[10px] text-accent/50 uppercase tracking-wider mb-1">
                  {project.tagline}
                </p>
                <h3 className="font-semibold text-[14px] text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-[12px] text-muted leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-1.5 py-0.5 rounded bg-white/[0.04] text-muted/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[12px] text-muted hover:text-foreground transition-colors"
                  >
                    <GithubIcon size={12} />
                    Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[12px] text-accent/70 hover:text-accent transition-colors"
                    >
                      <ExternalLink size={11} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

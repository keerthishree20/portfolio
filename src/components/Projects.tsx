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
    title: "Tether",
    tagline: "Durable Job Queue",
    description:
      "Job queue on Postgres that keeps its promises when workers die. Leases taken with SKIP LOCKED expire and are reclaimed, and idempotency claims commit with the acknowledgement so effects happen once. A chaos suite kills and freezes workers and restarts Postgres mid-run: 3,000 in-flight tasks, none lost.",
    tech: ["Python", "PostgreSQL", "Docker", "Chaos testing"],
    github: "https://github.com/keerthishree20/tether",
    featured: true,
  },
  {
    title: "Keel",
    tagline: "Bytecode VM and Garbage Collector",
    description:
      "A small language with two engines held to one conformance suite: a tree-walking interpreter and a bytecode compiler with a stack VM that runs 1.2 to 3 times faster. Its mark-and-sweep collector is proven by a stress mode that collects before every allocation, and by tests that deliberately break it.",
    tech: ["Python", "Compilers", "Virtual machines", "Garbage collection"],
    github: "https://github.com/keerthishree20/keel",
    featured: true,
  },
  {
    title: "Wake",
    tagline: "OpenTelemetry Trace Collector",
    description:
      "Accepts OTLP from real OpenTelemetry exporters, decoding protobuf by hand, and stitches spans across services while repairing clock skew and orphaned spans. Stores 14,600 spans a second sustained to SQLite and serves flame charts and flame graphs. Four profiling-driven changes nearly quadrupled storage throughput.",
    tech: ["Python", "OpenTelemetry", "Protobuf", "SQLite"],
    github: "https://github.com/keerthishree20/wake",
    featured: true,
  },
  {
    title: "Berth",
    tagline: "Reverse Proxy and Load Balancer",
    description:
      "HTTP proxy on asyncio with consistent hashing, circuit breakers, health checks and connection pooling, benchmarked against nginx on pinned cores. nginx wins by 4.5 times, and the README says why. The benchmark also exposed a real bug: client disconnects were tripping breakers on healthy backends.",
    tech: ["Python", "asyncio", "HTTP/1.1", "nginx"],
    github: "https://github.com/keerthishree20/berth",
    featured: true,
  },
  {
    title: "Anchor",
    tagline: "Crash-Safe Key-Value Store",
    description:
      "Append-only key-value store with hint files and compaction. Crash tests kill the writer mid-write and require the surviving keys to form an unbroken prefix. Measures what durability actually costs: 247 writes a second with an fsync on every record, against 199,000 without.",
    tech: ["Python", "Storage engines", "Crash recovery"],
    github: "https://github.com/keerthishree20/anchor",
    featured: true,
  },
  {
    title: "Cutline",
    tagline: "Payment Fraud Risk Scorer",
    description:
      "Fraud scorer whose decline threshold is chosen by minimising expected cost rather than maximising accuracy — the number that actually matters to a payments team. Trained on the 590,540-row IEEE-CIS dataset: PR-AUC 0.4263 against a 0.1325 baseline, calibration error 0.0043, shipping a threshold that respects a 1% decline ceiling.",
    tech: ["Python", "scikit-learn", "FastAPI", "Next.js", "Docker"],
    github: "https://github.com/keerthishree20/cutline",
    featured: true,
  },
  {
    title: "Sextant",
    tagline: "HNSW Vector Index",
    description:
      "Approximate nearest-neighbour index with the graph written from scratch, measured against brute force on random, clustered and real GloVe embeddings. Reaches 94% recall exploring 16 candidates on GloVe, with the honest finding that numpy brute force still wins at 20,000 vectors.",
    tech: ["Python", "NumPy", "HNSW", "Vector search"],
    github: "https://github.com/keerthishree20/sextant",
  },
  {
    title: "Headway",
    tagline: "Real-Time Transit Monitor",
    description:
      "Streams live GTFS-Realtime vehicle positions over a WebSocket and flags bus bunching, ghost vehicles and fleet anomalies against each route's own normal spacing rather than a timetable, so it works on any agency's feed. 81 tests.",
    tech: ["FastAPI", "WebSockets", "Next.js", "GTFS-Realtime"],
    github: "https://github.com/keerthishree20/headway",
  },
  {
    title: "Cardsmith",
    tagline: "Spaced Repetition",
    description:
      "Flashcards scheduled by SM-2 with cloze deletions, cross-deck search, cram mode and a progress dashboard. Runs entirely in the browser, with decks shareable as portable codes.",
    tech: ["JavaScript", "SM-2", "Data visualisation"],
    github: "https://github.com/keerthishree20/cardsmith",
    live: "https://keerthishree20.github.io/cardsmith/",
  },
  {
    title: "ShelfLife Sentinel",
    tagline: "Retail Expiry Scanner",
    description:
      "Scan a barcode or photograph a date panel and the product is logged with its expiry and flagged fresh, expiring or expired. Writing 46 parser tests exposed four real date-reading bugs, including ISO dates read day-first, all fixed.",
    tech: ["FastAPI", "Next.js", "Tesseract", "Gemini Vision"],
    github: "https://github.com/keerthishree20/shelf-life-sentinel",
  },
  {
    title: "Noise to Insights",
    tagline: "Survey Text Analytics",
    description:
      "Turns a survey export into findings: open-text answers are clustered before any model sees them, then each theme is tested against respondent segments with chi-square, Cramér's V and Benjamini-Hochberg correction.",
    tech: ["FastAPI", "scikit-learn", "DuckDB", "React"],
    github: "https://github.com/keerthishree20/noise-to-insights",
  },

  {
    title: "RevCast AI",
    tagline: "Revenue Forecasting Engine",
    description:
      "Probabilistic revenue forecasting platform for paid media. Uses Monte Carlo simulation to generate confidence intervals and budget optimization recommendations. Full-stack app with interactive visualizations and AI-generated summaries.",
    tech: ["FastAPI", "Next.js 14", "Python", "Monte Carlo", "TypeScript"],
    github: "https://github.com/keerthishree20/RevCast-AI",
    live: "https://revcast-frontend.onrender.com",
  },
  {
    title: "Job Apply Assistant",
    tagline: "AI-Powered Application Automation",
    description:
      "End-to-end job application automation. Parses the posting, tailors the resume, drafts a cover letter and answers screening questions, then fills the form via Playwright and shows a screenshot — nothing is submitted without an explicit confirmation. Legal-status questions are deliberately left for the candidate rather than answered by the model.",
    tech: ["Groq", "Playwright", "FastAPI", "Next.js", "TypeScript"],
    github: "https://github.com/keerthishree20/job-apply-assistant",
  },
  {
    title: "Eternova",
    tagline: "Relationship Memory Platform",
    description:
      "Full-stack platform for preserving relationship memories — digital time capsules, memory books, love letters, and milestone tracking with couple mode. Features JWT auth, rich text editing, and smooth animations.",
    tech: ["Next.js", "FastAPI", "SQLite", "JWT", "Framer Motion"],
    github: "https://github.com/keerthishree20/eternova",
    live: "https://eternova-peach.vercel.app",
  },
  {
    title: "ResumeCraft",
    tagline: "AI Resume Toolkit",
    description:
      "Turns one stored profile into resumes tailored to a specific role, then tells you where that resume falls short — ATS compatibility scoring, skill-gap analysis against a job description, LinkedIn headline rewriting and interview-question generation. Three PDF templates.",
    tech: ["Next.js 16", "Google Gemini", "Prisma", "React PDF", "TypeScript"],
    github: "https://github.com/keerthishree20/resume-craft",
  },
  {
    title: "SpendLens",
    tagline: "Receipt-Scanning Expense Tracker",
    description:
      "Snap a receipt and it becomes a categorised expense: Tesseract OCR extracts the text, an LLM parses it into structured JSON (merchant, items, total, date), and the dashboard tracks spending against per-category budgets.",
    tech: ["FastAPI", "Tesseract OCR", "Groq", "Next.js", "Chart.js"],
    github: "https://github.com/keerthishree20/smart-expense-tracker",
  },
  {
    title: "AeroInspect",
    tagline: "Aircraft Defect Detection",
    description:
      "Upload a photo of an aircraft component and get the defect type, severity, and an airworthiness verdict against FAA/EASA thresholds, with bounding boxes showing where. Custom-trained YOLOv8 running locally — no per-image API cost.",
    tech: ["YOLOv8", "FastAPI", "Next.js 16", "SQLAlchemy", "Recharts"],
    github: "https://github.com/keerthishree20/aerospace-inspection",
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
            Systems I&apos;ve designed, built and measured — from storage engines,
            language runtimes and distributed infrastructure to AI/ML products.
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

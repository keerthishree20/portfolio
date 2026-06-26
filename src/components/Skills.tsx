"use client";

import { ScrollReveal } from "./Effects";

const skillCategories = [
  {
    title: "Languages",
    color: "from-purple-500/20 to-indigo-500/20",
    skills: [
      "Python", "TypeScript", "JavaScript", "Java", "HTML", "CSS", "SQL", "Bash",
    ],
  },
  {
    title: "Frameworks & Libraries",
    color: "from-indigo-500/20 to-blue-500/20",
    skills: [
      "FastAPI", "Next.js", "React", "Tailwind CSS", "Framer Motion",
      "Playwright", "JWT Auth",
    ],
  },
  {
    title: "AI / ML & Data Science",
    color: "from-pink-500/20 to-purple-500/20",
    skills: [
      "Google Gemini", "OpenAI API", "PyTorch", "scikit-learn",
      "OpenCV", "NumPy", "Pandas", "openpyxl",
      "RAG Pipelines", "NLP", "Monte Carlo Simulation",
      "Deep Learning", "Computer Vision", "Linear Regression",
    ],
  },
  {
    title: "Databases",
    color: "from-emerald-500/20 to-teal-500/20",
    skills: [
      "MongoDB", "MySQL", "SQLite",
    ],
  },
  {
    title: "DevOps & Infrastructure",
    color: "from-orange-500/20 to-amber-500/20",
    skills: [
      "Git", "GitHub", "Docker", "Linux", "REST APIs",
      "Vercel", "Render",
    ],
  },
  {
    title: "Tools & Platforms",
    color: "from-cyan-500/20 to-blue-500/20",
    skills: [
      "VS Code", "Figma", "Jupyter Notebook", "Raspberry Pi",
      "IoT", "Postman",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-3 text-center">
            Technical Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight">
            Tools &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted text-center max-w-md mx-auto mb-16 text-sm">
            Technologies I work with to design, build, and deploy software.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat) => (
            <ScrollReveal key={cat.title}>
              <div className="glass-card rounded-2xl p-6 h-full">
                <div className={`w-full h-1 rounded-full bg-gradient-to-r ${cat.color} mb-5`} />
                <h3 className="text-xs font-mono text-accent/70 mb-5 tracking-wider uppercase">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-tag px-3 py-1.5 text-[12px] rounded-lg border border-white/[0.06] bg-white/[0.02] text-muted cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Section, Reveal, GlassCard } from "./primitives";

const projects = [
  {
    name: "CloudNotify",
    tagline: "Cloud-based notification platform",
    description:
      "Serverless, event-driven notification system that schedules and delivers reminders across Gmail and Telegram with multi-user support.",
    tags: [
      "AWS Lambda",
      "EventBridge",
      "DynamoDB",
      "API Gateway",
      "React",
      "Tailwind",
      "Google OAuth",
      "Amplify",
      "CloudWatch",
    ],
    highlights: [
      "Event-driven architecture with EventBridge Scheduler",
      "Gmail & Telegram delivery channels",
      "Google OAuth 2.0 secured sign-in",
      "Serverless CI/CD via AWS Amplify",
    ],
    future: ["WhatsApp integration", "Push notifications", "SMS", "Mobile app", "AI reminder suggestions"],
    accent: "from-[#0A84FF] to-[#22D3EE]",
    number: "01",
    github: "https://github.com/Deepakgovindaraj/CloudNotify",
  },
  {
    name: "Eco Learn",
    tagline: "Smart India Hackathon 2025 · Finalist",
    description:
      "Interactive environmental education platform combining 3D visualization, gamification, and animated storytelling to drive climate awareness.",
    tags: ["MERN Stack", "Three.js", "Gamification", "UI / UX", "Responsive"],
    highlights: [
      "Problem: Fragmented, boring climate education",
      "Solution: Immersive 3D learning journeys",
      "Role: Frontend Developer · UI / UX Designer",
      "Selected as SIH 2025 Finalist",
    ],
    future: ["Multi-language support", "Teacher dashboard", "Offline mode"],
    accent: "from-[#7C3AED] to-[#22D3EE]",
    number: "02",
    github: "https://github.com/Deepakgovindaraj/ECO---LEARN",
  },
  {
    name: "JDBC Employee Management",
    tagline: "Java desktop application",
    description:
      "Full-stack CRUD desktop app for managing employee records with secure authentication and a normalized MySQL schema via JDBC.",
    tags: ["Java", "JDBC", "MySQL", "CRUD", "Authentication"],
    highlights: [
      "Layered architecture (UI → Service → DAO)",
      "Normalized relational schema",
      "Session-based authentication",
      "Prepared statements against SQL injection",
    ],
    future: ["REST API layer", "Web UI with React"],
    accent: "from-[#0A84FF] to-[#7C3AED]",
    number: "03",
    github: "https://github.com/Deepakgovindaraj/JAVA-console---EmployeeManagement",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Work"
      title={<>Projects with <span className="text-brand-gradient">purpose.</span></>}
      subtitle="A selection of things I've built — from serverless cloud platforms to award-recognized hackathon products."
    >
      <div className="space-y-8">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.05}>
            <div className="group relative overflow-hidden rounded-3xl glass p-6 md:p-10">
              {/* Accent glow */}
              <div
                aria-hidden
                className={`absolute -right-32 -top-32 h-80 w-80 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-3xl transition-opacity duration-700 group-hover:opacity-40`}
              />

              <div className="grid gap-8 md:grid-cols-[1fr_1.4fr]">
                {/* Left: heading */}
                <div>
                  <span className={`bg-gradient-to-br ${p.accent} bg-clip-text text-6xl font-black text-transparent md:text-7xl`}>
                    {p.number}
                  </span>
                  <h3 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">{p.name}</h3>
                  <p className="mt-2 text-sm uppercase tracking-widest text-[#22D3EE]">{p.tagline}</p>
                  <p className="mt-4 text-muted-foreground">{p.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm transition hover:bg-white/10"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:opacity-90"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </div>
                </div>

                {/* Right: highlights + future */}
                <div className="space-y-6">
                  <div>
                    <h4 className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      Highlights
                    </h4>
                    <ul className="space-y-2">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex gap-3 text-sm">
                          <span className={`mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br ${p.accent}`} />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                    <h4 className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      Future scope
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {p.future.map((f) => (
                        <span
                          key={f}
                          className="inline-flex items-center gap-1 rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-muted-foreground"
                        >
                          <ArrowUpRight className="h-3 w-3" />
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

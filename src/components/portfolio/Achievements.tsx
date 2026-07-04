import { Section, Reveal, GlassCard } from "./primitives";
import { Trophy, Code2, Cloud, Layers, Award, GraduationCap, ExternalLink } from "lucide-react";

const timeline = [
  {
    year: "2025",
    title: "Smart India Hackathon Finalist",
    description: "Selected as a national finalist for Eco Learn — an interactive climate education platform.",
    icon: Trophy,
  },
  {
    year: "2025",
    title: "300+ LeetCode Problems Solved",
    description: "Consistent problem-solving across DSA, dynamic programming, and system design foundations.",
    icon: Code2,
  },
  {
    year: "2024",
    title: "AWS Cloud Projects",
    description: "Shipped serverless production apps using Lambda, EventBridge, DynamoDB, and Amplify.",
    icon: Cloud,
  },
  {
    year: "2024",
    title: "Full Stack Development",
    description: "Multiple end-to-end MERN applications with clean architecture and responsive UI.",
    icon: Layers,
  },
  {
    year: "2023",
    title: "Strong Java & DSA Foundation",
    description: "Built expertise in OOP, collections, multithreading, and algorithmic problem solving.",
    icon: Award,
  },
  {
    year: "2023",
    title: "B.Tech IT — Sri Shakthi IET",
    description: "Enrolled in Information Technology; currently maintaining a CGPA of 8.09.",
    icon: GraduationCap,
  },
];

const profiles = [
  {
    name: "LeetCode",
    desc: "300+ problems · Consistent daily practice",
    href: "https://leetcode.com",
    color: "from-[#FFA116] to-[#FF6B00]",
  },
  {
    name: "GitHub",
    desc: "Open-source projects & experiments",
    href: "https://github.com",
    color: "from-[#6e5494] to-[#4078c0]",
  },
  {
    name: "LinkedIn",
    desc: "Professional network & updates",
    href: "https://linkedin.com",
    color: "from-[#0A66C2] to-[#22D3EE]",
  },
  {
    name: "HackerRank",
    desc: "Certifications & problem solving",
    href: "https://hackerrank.com",
    color: "from-[#2EC866] to-[#22D3EE]",
  },
];

export function Achievements() {
  return (
    <>
      <Section
        id="achievements"
        eyebrow="Milestones"
        title={<>A journey of <span className="text-brand-gradient">consistent progress.</span></>}
      >
        <div className="relative">
          <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-[#0A84FF] via-[#7C3AED] to-transparent md:left-1/2" />
          <div className="space-y-8">
            {timeline.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.05}>
                <div
                  className={`relative grid gap-4 md:grid-cols-2 md:gap-12 ${
                    i % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"
                  }`}
                >
                  <div
                    className={`hidden md:block ${i % 2 === 0 ? "text-right" : ""}`}
                  />
                  <div className={i % 2 === 0 ? "md:col-start-2" : ""}>
                    <div className="absolute left-4 top-3 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full bg-gradient-to-br from-[#0A84FF] to-[#7C3AED] text-white shadow-[0_0_20px_rgba(124,58,237,0.5)] md:left-1/2">
                      <t.icon className="h-4 w-4" />
                    </div>
                    <div className="ml-12 md:ml-0">
                      <GlassCard>
                        <p className="text-xs font-medium uppercase tracking-widest text-[#22D3EE]">
                          {t.year}
                        </p>
                        <h3 className="mt-1 text-lg font-semibold">{t.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{t.description}</p>
                      </GlassCard>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Presence"
        title={<>Find me across the <span className="text-brand-gradient">web.</span></>}
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {profiles.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05}>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group block h-full"
              >
                <GlassCard className="flex h-full flex-col">
                  <div
                    className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${p.color} text-white font-black`}
                  >
                    {p.name[0]}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{p.name}</h3>
                  <p className="mt-1 flex-1 text-sm text-muted-foreground">{p.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-[#22D3EE] transition-transform group-hover:translate-x-1">
                    Visit profile <ExternalLink className="h-3 w-3" />
                  </span>
                </GlassCard>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

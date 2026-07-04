import { Section, Reveal, GlassCard } from "./primitives";
import { Braces, Code2, Database, Layers, Server, Cloud, Wrench, Brain } from "lucide-react";

const categories = [
  { title: "Languages", icon: Braces, skills: ["Java", "JavaScript", "SQL", "HTML", "CSS"] },
  { title: "Frontend", icon: Code2, skills: ["React", "Tailwind CSS", "Bootstrap"] },
  { title: "Backend", icon: Server, skills: ["Node.js", "Express.js", "REST API"] },
  {
    title: "Cloud",
    icon: Cloud,
    skills: ["AWS Lambda", "API Gateway", "DynamoDB", "EventBridge", "Amplify", "CloudWatch"],
  },
  { title: "Database", icon: Database, skills: ["MongoDB", "MySQL", "JDBC"] },
  { title: "Tools", icon: Wrench, skills: ["Git", "GitHub", "VS Code", "Postman", "Figma"] },
  {
    title: "Concepts",
    icon: Brain,
    skills: ["OOP", "DSA", "Collections", "Multithreading", "DBMS", "OS", "Networking"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={<>A toolkit built for <span className="text-brand-gradient">scale.</span></>}
      subtitle="From low-level Java internals to serverless AWS — organized, versatile, always learning."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.06}>
            <GlassCard className="h-full">
              <div className="mb-4 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#0A84FF]/20 to-[#7C3AED]/20 text-[#22D3EE]">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{c.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {c.skills.map((s) => (
                  <span
                    key={s}
                    className="cursor-default rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7C3AED]/50 hover:bg-[#7C3AED]/10 hover:text-white"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        ))}
        <Reveal delay={categories.length * 0.06}>
          <GlassCard className="h-full">
            <Layers className="h-6 w-6 text-[#22D3EE]" />
            <h3 className="mt-4 text-lg font-semibold">Always leveling up</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Currently deepening my expertise in distributed systems, system design, and production-grade
              cloud infrastructure.
            </p>
          </GlassCard>
        </Reveal>
      </div>
    </Section>
  );
}

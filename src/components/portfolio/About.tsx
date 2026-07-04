import { motion } from "framer-motion";
import { Award, Cloud, Code2, Rocket, Trophy } from "lucide-react";
import { Section, Reveal, GlassCard, CountUp } from "./primitives";

const stats = [
  { value: 300, suffix: "+", label: "LeetCode Problems", icon: Code2 },
  { value: 3, suffix: "+", label: "Major Projects", icon: Rocket },
  { value: 1, suffix: "", label: "SIH 2025 Finalist", icon: Trophy, custom: "Finalist" },
  { value: 8.09, suffix: "", label: "CGPA", icon: Award, custom: "8.09" },
];

const focus = [
  "Java",
  "Full Stack Development",
  "AWS Cloud",
  "UI / UX",
  "Problem Solving",
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>Passionate about building <span className="text-brand-gradient">real-world software.</span></>}
      subtitle="B.Tech Information Technology student with a strong grip on Java, Full Stack Development, and AWS Cloud — driven by curiosity and clean engineering."
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <GlassCard className="h-full">
            <p className="text-sm uppercase tracking-widest text-muted-foreground">Education</p>
            <h3 className="mt-2 text-2xl font-semibold">B.Tech Information Technology</h3>
            <p className="mt-1 text-muted-foreground">
              Sri Shakthi Institute of Engineering and Technology · CGPA 8.09
            </p>
            <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <p className="text-sm uppercase tracking-widest text-muted-foreground">Focus Areas</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {focus.map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs"
                >
                  {f}
                </span>
              ))}
            </div>
            <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <p className="text-muted-foreground">
              I love turning complex ideas into simple, elegant products — combining scalable backends,
              cloud-native architectures, and interfaces that feel effortless to use.
            </p>
          </GlassCard>
        </Reveal>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <GlassCard className="h-full">
                <s.icon className="h-5 w-5 text-[#22D3EE]" />
                <div className="mt-4 text-4xl font-bold tracking-tight text-gradient md:text-5xl">
                  {s.custom ? s.custom : <CountUp value={s.value} suffix={s.suffix} />}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={0.15} className="mt-6">
        <div className="flex flex-wrap items-center gap-3 rounded-2xl glass p-5 text-sm">
          <Cloud className="h-4 w-4 text-[#0A84FF]" />
          <span className="text-muted-foreground">Currently exploring:</span>
          <span className="font-medium">Serverless architectures on AWS, event-driven systems, and AI-augmented UX.</span>
        </div>
      </Reveal>
    </Section>
  );
}

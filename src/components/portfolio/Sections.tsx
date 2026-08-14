import { useState } from "react";
import { z } from "zod";
import { Section, Reveal, GlassCard } from "./primitives";
import {
  Download,
  Eye,
  FileText,
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  Code2,
  Briefcase,
  GraduationCap,
} from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(150),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

export function Resume() {
  return (
    <Section
      id="resume"
      eyebrow="Resume"
      title={<>Everything on <span className="text-brand-gradient">one page.</span></>}
    >
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl glass p-8 md:p-12">
          <div
            aria-hidden
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-[#0A84FF] to-[#7C3AED] opacity-20 blur-3xl"
          />
          <div className="relative grid gap-8 md:grid-cols-[auto_1fr_auto] md:items-center">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-[#0A84FF] to-[#7C3AED] text-white">
              <FileText className="h-7 w-7" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Deepak — Resume</h3>
              <p className="mt-1 text-muted-foreground">
                A concise summary of my education, projects, skills, and achievements.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://drive.google.com/uc?export=download&id=1nVcFnstoxZjiaseWqyXL9lIl9eeZVk_8"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
              >
                <Download className="h-4 w-4" />
                Download
              </a>
              <a
                href="https://drive.google.com/file/d/1nVcFnstoxZjiaseWqyXL9lIl9eeZVk_8/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium transition hover:bg-white/10"
              >
                <Eye className="h-4 w-4" />
                Preview
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export function Experience() {
  const areas = [
    { icon: Code2, title: "Full Stack Development", desc: "MERN, Java, REST APIs" },
    { icon: Briefcase, title: "Cloud Architecture", desc: "Serverless AWS systems" },
    { icon: Code2, title: "Java Development", desc: "OOP, JDBC, Multithreading" },
    { icon: Briefcase, title: "UI / UX Design", desc: "Product-first, accessible" },
    { icon: Code2, title: "Problem Solving", desc: "300+ DSA problems" },
  ];
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={<>Projects & <span className="text-brand-gradient">practical experience.</span></>}
      subtitle="No formal roles yet — but plenty of shipped work that mirrors real-world engineering."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {areas.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.05}>
            <GlassCard>
              <a.icon className="h-5 w-5 text-[#22D3EE]" />
              <h3 className="mt-4 text-lg font-semibold">{a.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{a.desc}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title={<>Foundations of my <span className="text-brand-gradient">craft.</span></>}
    >
      <Reveal>
        <GlassCard>
          <div className="flex items-start gap-5">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#0A84FF] to-[#7C3AED] text-white">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs uppercase tracking-widest text-[#22D3EE]">2023 — 2027 (Expected)</p>
              <h3 className="mt-1 text-2xl font-semibold">B.Tech, Information Technology</h3>
              <p className="mt-1 text-muted-foreground">
                Sri Shakthi Institute of Engineering and Technology
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
                <span className="text-muted-foreground">CGPA</span>
                <span className="font-semibold text-gradient">8.09</span>
              </div>
            </div>
          </div>
        </GlassCard>
      </Reveal>
    </Section>
  );
}

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const info = [
    { icon: Mail, label: "Email", value: "rgdeepak91@gmail.com", href: "mailto:rgdeepak91@gmail.com" },
    { icon: MapPin, label: "Location", value: "Coimbatore, India", href: "#" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/deepak-rg", href: "https://www.linkedin.com/in/deepak-rg/" },
    { icon: Github, label: "GitHub", value: "github.com/Deepakgovindaraj", href: "https://github.com/Deepakgovindaraj" },
    { icon: Code2, label: "LeetCode", value: "leetcode.com/u/Deepak_RG", href: "https://leetcode.com/u/Deepak_RG/" },
    { icon: Code2, label: "HackerRank", value: "hackerrank.com/rgdeepak91", href: "https://www.hackerrank.com/profile/rgdeepak91" },
  ];

  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title={<>Let's build something <span className="text-brand-gradient">memorable.</span></>}
      subtitle="Open to internships, freelance projects, and full-time opportunities in software & cloud engineering."
    >
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <form onSubmit={submit} className="rounded-3xl glass p-6 md:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <Field
                label="Name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                error={errors.name}
              />
              <Field
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                error={errors.email}
              />
            </div>
            <div className="mt-4">
              <Field
                label="Subject"
                value={form.subject}
                onChange={(v) => setForm({ ...form, subject: v })}
                error={errors.subject}
              />
            </div>
            <div className="mt-4">
              <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                maxLength={1000}
                className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition focus:border-[#7C3AED] focus:bg-white/[0.06]"
                placeholder="Tell me about your project..."
              />
              {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              <Send className="h-4 w-4" />
              {sent ? "Message sent!" : "Send Message"}
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid gap-3">
            {info.map((it) => (
              <a
                key={it.label}
                href={it.href}
                target={it.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl glass p-4 transition hover:-translate-y-0.5 hover:border-white/20"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#0A84FF]/20 to-[#7C3AED]/20 text-[#22D3EE]">
                  <it.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{it.label}</p>
                  <p className="truncate text-sm font-medium">{it.value}</p>
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        value={value}
        maxLength={255}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition focus:border-[#7C3AED] focus:bg-white/[0.06]"
        placeholder={label}
      />
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}

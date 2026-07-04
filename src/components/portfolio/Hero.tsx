import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const roles = ["Software Developer", "Java Developer", "Full Stack Developer", "Cloud Enthusiast"];

function TypewriterRoles() {
  const [i, setI] = useState(0);
  const [txt, setTxt] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = roles[i];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      if (!del) {
        setTxt(current.slice(0, txt.length + 1));
        if (txt.length + 1 === current.length) setTimeout(() => setDel(true), 1400);
      } else {
        setTxt(current.slice(0, txt.length - 1));
        if (txt.length - 1 === 0) {
          setDel(false);
          setI((i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [txt, del, i]);

  return (
    <span className="text-brand-gradient">
      {txt}
      <span className="ml-1 inline-block h-[0.9em] w-[3px] animate-pulse bg-[#7C3AED] align-middle" />
    </span>
  );
}

function Particles() {
  const dots = Array.from({ length: 24 });
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-white/40"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: 0,
          }}
          animate={{
            y: ["0%", "-20%", "0%"],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}

function CharReveal({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {text.split("").map((c, i) => (
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ delay: 0.2 + i * 0.03, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block"
        >
          {c === " " ? "\u00A0" : c}
        </motion.span>
      ))}
    </span>
  );
}

function MagneticButton({
  children,
  primary,
  href,
  onClick,
}: {
  children: React.ReactNode;
  primary?: boolean;
  href?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      el.style.transform = `translate(${x * 0.2}px, ${y * 0.3}px)`;
    };
    const onLeave = () => (el.style.transform = "translate(0,0)");
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);
  const cls = `group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
    primary
      ? "bg-white text-black shadow-[0_10px_40px_-10px_rgba(255,255,255,0.5)] hover:shadow-[0_20px_60px_-10px_rgba(124,58,237,0.6)]"
      : "glass hover:bg-white/10"
  }`;
  if (href) {
    return (
      <a ref={ref as never} href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button ref={ref as never} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      {/* Animated gradient bg */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 animate-gradient opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 30% 20%, rgba(10,132,255,0.35), transparent 60%), radial-gradient(ellipse 70% 60% at 80% 30%, rgba(124,58,237,0.4), transparent 60%), radial-gradient(ellipse 60% 60% at 50% 100%, rgba(34,211,238,0.25), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
      <Particles />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground"
          >
            <Sparkles className="h-3 w-3 text-[#22D3EE]" />
            Available for opportunities
          </motion.div>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl lg:text-[5.5rem] lg:leading-[1.02]">
            <span className="block overflow-hidden">
              <CharReveal text="Hi, I'm" className="text-muted-foreground" />
            </span>
            <span className="block overflow-hidden">
              <CharReveal text="Deeps." className="text-gradient" />
            </span>
            <span className="mt-3 block h-[1.2em] text-2xl md:text-4xl lg:text-5xl">
              <TypewriterRoles />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg"
          >
            I build scalable applications, cloud-powered solutions, and interactive user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <MagneticButton primary href="#projects">
              View Projects
            </MagneticButton>
            <MagneticButton href="#resume">
              <Download className="h-4 w-4" />
              Download Resume
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-8 flex items-center gap-4 text-muted-foreground"
          >
            {[
              { icon: Github, href: "https://github.com" },
              { icon: Linkedin, href: "https://linkedin.com" },
              { icon: Mail, href: "#contact" },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full glass transition hover:-translate-y-1 hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative mx-auto aspect-square w-[280px] md:w-[380px]"
        >
          <div className="absolute inset-0 animate-float">
            <div
              aria-hidden
              className="absolute -inset-6 rounded-full opacity-70 blur-2xl"
              style={{
                background:
                  "conic-gradient(from 180deg, #0A84FF, #7C3AED, #22D3EE, #0A84FF)",
              }}
            />
            <div className="relative h-full w-full overflow-hidden rounded-full border border-white/10 glass-strong">
              <img
                src={profileImg}
                alt="Deeps"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
          {/* Orbiting badges */}
          {["Java", "AWS", "React"].map((tag, i) => (
            <motion.div
              key={tag}
              className="absolute rounded-full glass-strong px-3 py-1.5 text-xs font-medium"
              style={{
                top: `${[8, 55, 85][i]}%`,
                left: `${[85, -5, 70][i]}%`,
              }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.3 }}
            >
              {tag}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.a>
    </section>
  );
}

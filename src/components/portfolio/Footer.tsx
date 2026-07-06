import { useEffect, useState } from "react";
import { ArrowUp, Github, Linkedin, Mail, Code2 } from "lucide-react";

export function Footer() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#achievements", label: "Achievements" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <footer className="relative border-t border-white/5 px-6 pb-10 pt-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <div className="flex items-center gap-2 font-semibold">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-[#0A84FF] via-[#7C3AED] to-[#22D3EE] text-sm font-black text-white">
                  D
                </span>
                Deepak
              </div>
              <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                Software developer crafting scalable applications and cloud-powered products.
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="transition hover:text-foreground">
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              {[
                { icon: Github, href: "https://github.com/Deepakgovindaraj" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/deepak-rg/" },
                { icon: Code2, href: "https://leetcode.com/u/Deepak_RG/" },
                { icon: Mail, href: "mailto:rgdeepak91@gmail.com" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="grid h-9 w-9 place-items-center rounded-full glass transition hover:-translate-y-0.5 hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-muted-foreground md:flex-row">
            <p>© {new Date().getFullYear()} Deepak. Crafted with care.</p>
            <p>Built with React · TanStack · Framer Motion</p>
          </div>
        </div>
      </footer>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-50 grid h-11 w-11 place-items-center rounded-full bg-white text-black shadow-[0_10px_40px_-10px_rgba(124,58,237,0.6)] transition-all duration-500 ${
          show ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </>
  );
}

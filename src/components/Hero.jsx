import { useEffect, useRef } from "react";
import { Github, Linkedin, Mail, ArrowDown, Terminal } from "lucide-react";
import { personalInfo } from "../data";

export default function Hero() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const phrases = ["Backend Developer.", "Python Enthusiast.", "System Engineer.", "Problem Solver."];
    let phraseIdx = 0, charIdx = 0, deleting = false, timeout;

    const type = () => {
      const current = phrases[phraseIdx];
      if (cursorRef.current) {
        if (!deleting) {
          cursorRef.current.textContent = current.slice(0, charIdx + 1);
          charIdx++;
          if (charIdx === current.length) { deleting = true; timeout = setTimeout(type, 1800); return; }
        } else {
          cursorRef.current.textContent = current.slice(0, charIdx - 1);
          charIdx--;
          if (charIdx === 0) { deleting = false; phraseIdx = (phraseIdx + 1) % phrases.length; }
        }
      }
      timeout = setTimeout(type, deleting ? 60 : 90);
    };
    timeout = setTimeout(type, 600);
    return () => clearTimeout(timeout);
  }, []);

  const iconBtn = "w-11 h-11 rounded-lg border border-border bg-surface flex items-center justify-center text-txt-muted transition-all duration-300 hover:-translate-y-0.5";

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-100" />
      {/* Radial glow */}
      <div className="absolute inset-0 bg-hero-glow" />
      {/* Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-[120px] pointer-events-none" style={{ backgroundColor: "rgba(0,212,255,0.05)" }} />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full blur-[100px] pointer-events-none" style={{ backgroundColor: "rgba(0,212,255,0.05)" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 animate-fade-in"
          style={{ border: "1px solid rgba(0,212,255,0.3)", backgroundColor: "rgba(0,212,255,0.08)" }}
        >
          <Terminal size={12} style={{ color: "#00d4ff" }} />
          <span className="font-mono text-xs tracking-widest" style={{ color: "#00d4ff" }}>
            AVAILABLE FOR OPPORTUNITIES
          </span>
        </div>

        {/* Name */}
        <h1 className="font-display text-6xl md:text-8xl font-bold text-white mb-4 leading-none tracking-tight animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Nikhil
          <br />
          <span className="text-gradient">Maurya</span>
        </h1>

        {/* Typewriter */}
        <div className="font-mono text-xl md:text-2xl text-txt-muted mb-6 h-8 flex items-center justify-center gap-1 animate-fade-up" style={{ animationDelay: "0.35s" }}>
          <span style={{ color: "#00d4ff" }}>&gt;</span>
          <span ref={cursorRef} className="text-white" />
          <span className="w-0.5 h-6 ml-0.5 animate-blink" style={{ backgroundColor: "#00d4ff" }} />
        </div>

        {/* Summary */}
        <p className="font-body text-txt-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          {personalInfo.summary}
        </p>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4 mb-10 animate-fade-up" style={{ animationDelay: "0.65s" }}>
          {[
            { href: personalInfo.github, icon: <Github size={18} />, label: "GitHub" },
            { href: personalInfo.linkedin, icon: <Linkedin size={18} />, label: "LinkedIn" },
            { href: `mailto:${personalInfo.email}`, icon: <Mail size={18} />, label: "Email" },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className={iconBtn}
              style={{ "--hover-color": "#00d4ff" }}
              onMouseEnter={e => { e.currentTarget.style.color = "#00d4ff"; e.currentTarget.style.borderColor = "rgba(0,212,255,0.4)"; e.currentTarget.style.backgroundColor = "rgba(0,212,255,0.08)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = ""; e.currentTarget.style.borderColor = ""; e.currentTarget.style.backgroundColor = ""; }}
            >
              {icon}
            </a>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-4 flex-wrap animate-fade-up" style={{ animationDelay: "0.8s" }}>
          <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} className="btn-primary text-sm">
            View My Work
          </button>
          <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="btn-outline text-sm">
            Get In Touch
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex flex-col items-center gap-2 opacity-40 animate-float">
          <span className="font-mono text-xs text-txt-muted tracking-widest">SCROLL</span>
          <ArrowDown size={14} className="text-txt-muted" />
        </div>
      </div>
    </section>
  );
}

import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { personalInfo } from "../data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-bg py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display text-lg font-bold text-white">
          <span style={{ color: "#00d4ff" }}>N</span>M
          <span className="font-mono text-xs text-txt-muted ml-1">.dev</span>
        </div>
        <p className="font-mono text-xs text-txt-muted flex items-center gap-1.5">
          © {year} Nikhil Maurya. Built with
          <Heart size={11} className="text-red-400 fill-red-400" />
          using React & Tailwind.
        </p>
        <div className="flex items-center gap-3">
          {[
            { href: personalInfo.github, icon: <Github size={16} />, label: "GitHub" },
            { href: personalInfo.linkedin, icon: <Linkedin size={16} />, label: "LinkedIn" },
            { href: `mailto:${personalInfo.email}`, icon: <Mail size={16} />, label: "Email" },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className="text-txt-muted transition-colors duration-200"
              onMouseEnter={e => e.currentTarget.style.color = "#00d4ff"}
              onMouseLeave={e => e.currentTarget.style.color = ""}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

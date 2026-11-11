import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { personalInfo } from "../data";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["about", "experience", "projects", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-xl border-b border-border shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-xl font-bold text-white tracking-tight group"
        >
          <span style={{ color: "#00d4ff" }}>N</span>
          <span>M</span>
          <span className="font-mono text-xs text-txt-muted ml-1 group-hover:text-accent transition-colors" style={{}}>
            .dev
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => {
            const id = link.href.replace("#", "");
            return (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className={`nav-link pb-0.5 ${active === id ? "text-white" : ""}`}
              >
                <span className="font-mono text-xs mr-1" style={{ color: "#00d4ff" }}>
                  0{idx + 1}.
                </span>
                {link.label}
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href={personalInfo.resumeFile} download className="btn-outline flex items-center gap-2 text-sm">
            <Download size={14} />
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-txt-muted hover:text-white transition-colors"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-surface/95 backdrop-blur-xl border-b border-border px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link, idx) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className="text-left font-mono text-sm text-txt-muted hover:text-white transition-colors py-1"
            >
              <span className="mr-2 text-xs" style={{ color: "#00d4ff" }}>0{idx + 1}.</span>
              {link.label}
            </button>
          ))}
          <a href={personalInfo.resumeFile} download className="btn-outline flex items-center gap-2 text-sm w-fit mt-2">
            <Download size={14} />
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

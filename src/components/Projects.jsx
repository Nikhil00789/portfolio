import { useEffect, useRef } from "react";
import { Github, ExternalLink, Star } from "lucide-react";
import { projects } from "../data";

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".reveal").forEach((child, i) => setTimeout(() => child.classList.add("visible"), i * 120));
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

const gradients = [
  "linear-gradient(to bottom, rgba(0,212,255,0.08), transparent)",
  "linear-gradient(to bottom, rgba(192,132,252,0.08), transparent)",
  "linear-gradient(to bottom, rgba(74,222,128,0.08), transparent)",
];

export default function Projects() {
  const sectionRef = useReveal();

  return (
    <section id="projects" className="py-28 px-6" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-16">
          <p className="section-subline">// What I've Built</p>
          <h2 className="section-heading">Projects</h2>
          <div className="gradient-line w-24 mt-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div key={project.id} className="reveal">
              <div className="relative border border-border bg-card rounded-2xl p-6 h-full flex flex-col overflow-hidden group transition-all duration-300 hover:-translate-y-1" style={{ "--hover-shadow": "0 0 30px rgba(0,212,255,0.12)" }}>
                {/* Gradient top overlay */}
                <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none" style={{ background: gradients[idx % gradients.length] }} />

                {project.featured && (
                  <div className="flex items-center gap-1.5 mb-4 relative z-10">
                    <Star size={12} className="text-yellow-400 fill-yellow-400" />
                    <span className="font-mono text-xs text-yellow-400 tracking-widest">FEATURED</span>
                  </div>
                )}

                <div className="font-mono text-4xl font-bold mb-4 relative z-10 transition-colors duration-500" style={{ color: "#1e2d45" }}
                  onMouseEnter={e => e.currentTarget.closest('.group') && (e.currentTarget.style.color = "rgba(0,212,255,0.2)")}
                >
                  {String(idx + 1).padStart(2, "0")}
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-3 relative z-10 leading-snug">{project.title}</h3>
                <p className="font-body text-txt-muted text-sm leading-relaxed mb-5 relative z-10 flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-5 relative z-10">
                  {project.tech.map((t) => (
                    <span key={t} className="font-mono text-xs px-2 py-0.5 rounded border border-border bg-surface text-txt-muted">{t}</span>
                  ))}
                </div>

                <div className="flex items-center gap-3 relative z-10 pt-4 border-t border-border">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 font-mono text-xs text-txt-muted transition-colors duration-200"
                    onMouseEnter={e => e.currentTarget.style.color = "#00d4ff"}
                    onMouseLeave={e => e.currentTarget.style.color = ""}
                  >
                    <Github size={14} /> GitHub
                  </a>
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 font-mono text-xs text-txt-muted transition-colors duration-200"
                      onMouseEnter={e => e.currentTarget.style.color = "#00d4ff"}
                      onMouseLeave={e => e.currentTarget.style.color = ""}
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  ) : (
                    <span className="flex items-center gap-1.5 font-mono text-xs text-border cursor-not-allowed">
                      <ExternalLink size={14} /> No Demo
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-12 text-center">
          <p className="font-body text-txt-muted text-sm mb-4">Want to see more of my work?</p>
          <a
            href="https://github.com/Nikhil00789"
            target="_blank"
            rel="noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <Github size={16} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

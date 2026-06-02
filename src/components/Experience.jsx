import { useEffect, useRef } from "react";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import { experiences } from "../data";

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

export default function Experience() {
  const sectionRef = useReveal();

  return (
    <section id="experience" className="py-28 px-6 relative" style={{ backgroundColor: "rgba(13,19,33,0.4)" }} ref={sectionRef}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #1e2d45, transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #1e2d45, transparent)" }} />

      <div className="max-w-4xl mx-auto">
        <div className="reveal mb-16">
          <p className="section-subline">// Work History</p>
          <h2 className="section-heading">Experience</h2>
          <div className="gradient-line w-24 mt-4" />
        </div>

        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px timeline-line hidden md:block" />
          <div className="flex flex-col gap-10">
            {experiences.map((exp, idx) => (
              <div key={exp.id} className="reveal relative flex gap-8">
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center flex-shrink-0">
                  <div
                    className="w-10 h-10 rounded-xl border-2 bg-surface flex items-center justify-center flex-shrink-0"
                    style={{ borderColor: "#00d4ff", boxShadow: "0 0 20px rgba(0,212,255,0.3)" }}
                  >
                    <Briefcase size={16} style={{ color: "#00d4ff" }} />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 border border-border bg-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5" style={{ "--hover": "1" }}>
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="font-mono text-xs px-2 py-0.5 rounded border"
                          style={
                            exp.type === "Full-time"
                              ? { color: "#00d4ff", backgroundColor: "rgba(0,212,255,0.1)", borderColor: "rgba(0,212,255,0.3)" }
                              : { color: "#c084fc", backgroundColor: "rgba(192,132,252,0.1)", borderColor: "rgba(192,132,252,0.3)" }
                          }
                        >
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-white">{exp.role}</h3>
                      <p className="font-body text-sm font-medium" style={{ color: "#00d4ff" }}>{exp.company}</p>
                      <p className="font-mono text-xs text-txt-muted mt-0.5">{exp.project}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-txt-muted">
                      <Calendar size={13} />
                      <span className="font-mono text-xs">{exp.period}</span>
                    </div>
                  </div>

                  <div className="h-px bg-border mb-4" />

                  <ul className="flex flex-col gap-2.5">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <ChevronRight size={14} style={{ color: "#00d4ff", flexShrink: 0, marginTop: "2px" }} />
                        <span className="font-body text-txt-muted text-sm leading-relaxed">{ach}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-border">
                    {exp.tech.map((t) => (
                      <span key={t} className="tag text-xs">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef } from "react";
import { GraduationCap, Award, MapPin } from "lucide-react";
import { skills, education, certifications, achievements } from "../data";

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".reveal").forEach((child, i) => setTimeout(() => child.classList.add("visible"), i * 100));
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

const categoryColors = {
  Languages:    { color: "#00d4ff", bg: "rgba(0,212,255,0.05)",   border: "rgba(0,212,255,0.3)"   },
  Mainframe:    { color: "#c084fc", bg: "rgba(192,132,252,0.05)", border: "rgba(192,132,252,0.3)" },
  "Web & DB":   { color: "#4ade80", bg: "rgba(74,222,128,0.05)",  border: "rgba(74,222,128,0.3)"  },
  Tools:        { color: "#fb923c", bg: "rgba(251,146,60,0.05)",  border: "rgba(251,146,60,0.3)"  },
  "Core Skills":{ color: "#f472b6", bg: "rgba(244,114,182,0.05)", border: "rgba(244,114,182,0.3)" },
};

export default function About() {
  const sectionRef = useReveal();

  return (
    <section id="about" className="py-28 px-6" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-16">
          <p className="section-subline">// Who I Am</p>
          <h2 className="section-heading">About Me</h2>
          <div className="gradient-line w-24 mt-4" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Bio Column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="reveal">
              <div className="w-48 h-48 rounded-2xl border border-border bg-surface flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(135deg, rgba(0,212,255,0.1), transparent)" }} />
                <span className="font-display text-6xl font-bold text-gradient">NM</span>
              </div>
            </div>

            <div className="reveal">
              <p className="font-body text-txt-muted leading-relaxed text-sm">
                Python-oriented software developer with hands-on experience in enterprise healthcare systems and mainframe technologies at Cognizant. Passionate about backend development, automation, and building scalable solutions that solve real-world problems.
              </p>
            </div>

            <div className="reveal flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm">
                <MapPin size={14} style={{ color: "#00d4ff", flexShrink: 0 }} />
                <span className="font-mono text-xs text-txt-muted">Lucknow / India</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" style={{ flexShrink: 0 }} />
                <span className="font-mono text-xs text-txt-muted">Open to new opportunities</span>
              </div>
            </div>

            <div className="reveal mt-2">
              <h3 className="font-display text-sm font-bold text-white mb-3 flex items-center gap-2">
                <Award size={14} style={{ color: "#00d4ff" }} />
                Achievements
              </h3>
              <div className="flex flex-col gap-2">
                {achievements.map((a, i) => (
                  <p key={i} className="font-mono text-xs text-txt-muted leading-relaxed">{a}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Skills + Education Column */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            <div className="reveal">
              <h3 className="font-display text-lg font-bold text-white mb-5">Technical Skills</h3>
              <div className="flex flex-col gap-4">
                {skills.map((group) => {
                  const c = categoryColors[group.category] || { color: "#94a3b8", bg: "rgba(148,163,184,0.05)", border: "rgba(148,163,184,0.3)" };
                  return (
                    <div key={group.category} className="flex gap-3 items-start">
                      <span
                        className="font-mono text-xs font-bold px-2.5 py-1 rounded border flex-shrink-0 mt-0.5"
                        style={{ color: c.color, backgroundColor: c.bg, borderColor: c.border }}
                      >
                        {group.category}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((skill) => (
                          <span key={skill} className="tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="reveal">
              <h3 className="font-display text-lg font-bold text-white mb-5 flex items-center gap-2">
                <GraduationCap size={18} style={{ color: "#00d4ff" }} />
                Education
              </h3>
              <div className="flex flex-col gap-4">
                {education.map((edu, i) => (
                  <div key={i} className="border border-border bg-card rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5" style={{ "--hover-shadow": "0 0 30px rgba(0,212,255,0.12)" }}>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-display text-sm font-bold text-white mb-1">{edu.degree}</p>
                        <p className="font-body text-xs text-txt-muted">{edu.institution}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="font-mono text-xs" style={{ color: "#00d4ff" }}>{edu.score}</p>
                        <p className="font-mono text-xs text-txt-muted mt-1">{edu.period}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal">
              <h3 className="font-display text-lg font-bold text-white mb-5">Certifications</h3>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, i) => (
                  <span
                    key={i}
                    className="font-mono text-xs px-3 py-1.5 rounded-lg border border-border bg-surface text-txt-light cursor-default transition-all duration-200"
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(0,212,255,0.4)"; e.currentTarget.style.color = "#00d4ff"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = ""; e.currentTarget.style.color = ""; }}
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

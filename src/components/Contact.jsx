import { useEffect, useRef, useState } from "react";
import { Mail, Github, Linkedin, Phone, Send, CheckCircle, AlertCircle } from "lucide-react";
import { personalInfo } from "../data";

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".reveal").forEach((child, i) =>
            setTimeout(() => child.classList.add("visible"), i * 100)
          );
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

const contactLinks = [
  { icon: Mail,     label: "Email",    href: `mailto:${personalInfo.email}`,  display: personalInfo.email },
  { icon: Phone,    label: "Phone",    href: "tel:+919621715394",             display: "+91-9621715394" },
  { icon: Github,   label: "GitHub",   href: personalInfo.github,             display: "github.com/Nikhil00789" },
  { icon: Linkedin, label: "LinkedIn", href: personalInfo.linkedin,           display: "linkedin.com/in/nikhilmaurya23" },
];

const inputClass = (hasError) =>
  `w-full bg-surface border rounded-lg px-4 py-3 font-body text-sm text-white placeholder-txt-muted/50 focus:outline-none focus:ring-1 transition-all duration-200 resize-none ${
    hasError
      ? "border-red-400/60 focus:ring-red-400/30"
      : "border-border focus:border-accent/50 focus:ring-accent/20"
  }`;

export default function Contact() {
  const sectionRef = useReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Enter a valid email";
    if (!form.message.trim()) errs.message = "Message is required";
    else if (form.message.trim().length < 10)
      errs.message = "Message too short (min 10 chars)";
    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          access_key: "9cb87bbc-eb30-4148-846e-47d8d8dd0ad0",
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `New Portfolio Message from ${form.name}`,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(null), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus(null), 4000);
      }
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus(null), 4000);
    }
  };

  return (
    <section
      id="contact"
      className="py-28 px-6 relative"
      style={{ backgroundColor: "rgba(13,19,33,0.4)" }}
      ref={sectionRef}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #1e2d45, transparent)" }}
      />

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="reveal mb-16 text-center">
          <p className="section-subline">// Let's Connect</p>
          <h2 className="section-heading">Get In Touch</h2>
          <div className="gradient-line w-24 mt-4 mx-auto" />
          <p className="font-body text-txt-muted text-base mt-6 max-w-xl mx-auto leading-relaxed">
            Whether you have a project in mind, a job opportunity, or just want
            to say hello — my inbox is always open.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left — Contact Info + Terminal */}
          <div className="flex flex-col gap-6">
            <div className="reveal">
              <h3 className="font-display text-lg font-bold text-white mb-5">
                Contact Details
              </h3>
              <div className="flex flex-col gap-3">
                {contactLinks.map(({ icon: Icon, label, href, display }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-0.5 group"
                  >
                    <div className="w-10 h-10 rounded-lg border border-border bg-surface flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:border-accent/40">
                      <Icon size={16} style={{ color: "#00d4ff" }} />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-txt-muted mb-0.5">{label}</p>
                      <p
                        className="font-body text-sm text-white transition-colors duration-200"
                        onMouseEnter={e => e.currentTarget.style.color = "#00d4ff"}
                        onMouseLeave={e => e.currentTarget.style.color = ""}
                      >
                        {display}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Terminal */}
            <div className="reveal border border-border bg-bg rounded-xl p-5 font-mono text-xs">
              <div className="flex items-center gap-1.5 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <span className="ml-2 text-txt-muted">nikhil.sh</span>
              </div>
              <div className="space-y-1.5">
                <p className="text-txt-muted">
                  <span style={{ color: "#00d4ff" }}>$</span> whoami
                </p>
                <p className="text-white">nikhil_maurya</p>
                <p className="text-txt-muted">
                  <span style={{ color: "#00d4ff" }}>$</span> status
                </p>
                <p className="text-green-400">● Available for work</p>
                <p className="text-txt-muted">
                  <span style={{ color: "#00d4ff" }}>$</span> location
                </p>
                <p className="text-white">Lucknow, India 🇮🇳</p>
                <p className="text-txt-muted">
                  <span style={{ color: "#00d4ff" }}>$</span>{" "}
                  <span className="animate-blink">_</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="reveal">
            <div className="border border-border bg-card rounded-2xl p-6">
              <h3 className="font-display text-lg font-bold text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>

                {/* Name */}
                <div>
                  <label className="font-mono text-xs text-txt-muted mb-1.5 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={inputClass(errors.name)}
                  />
                  {errors.name && (
                    <p className="font-mono text-xs text-red-400 mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="font-mono text-xs text-txt-muted mb-1.5 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={inputClass(errors.email)}
                  />
                  {errors.email && (
                    <p className="font-mono text-xs text-red-400 mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="font-mono text-xs text-txt-muted mb-1.5 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className={inputClass(errors.message)}
                  />
                  {errors.message && (
                    <p className="font-mono text-xs text-red-400 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className={`btn-primary flex items-center justify-center gap-2 mt-2 disabled:opacity-60 disabled:cursor-not-allowed ${
                    status === "loading" ? "animate-pulse" : ""
                  }`}
                >
                  {status === "loading" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-bg/30 border-t-bg rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : status === "success" ? (
                    <>
                      <CheckCircle size={16} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>

                {/* Success */}
                {status === "success" && (
                  <div
                    className="flex items-center gap-2 p-3 rounded-lg"
                    style={{
                      backgroundColor: "rgba(74,222,128,0.1)",
                      border: "1px solid rgba(74,222,128,0.3)",
                    }}
                  >
                    <CheckCircle size={14} className="text-green-400 flex-shrink-0" />
                    <p className="font-mono text-xs text-green-400">
                      Thanks! I'll get back to you soon. ✓
                    </p>
                  </div>
                )}

                {/* Error */}
                {status === "error" && (
                  <div
                    className="flex items-center gap-2 p-3 rounded-lg"
                    style={{
                      backgroundColor: "rgba(248,113,113,0.1)",
                      border: "1px solid rgba(248,113,113,0.3)",
                    }}
                  >
                    <AlertCircle size={14} className="text-red-400 flex-shrink-0" />
                    <p className="font-mono text-xs text-red-400">
                      Something went wrong. Please email me directly at ecnikhilmaurya007@gmail.com
                    </p>
                  </div>
                )}

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
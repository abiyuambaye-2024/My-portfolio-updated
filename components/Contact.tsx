"use client";
import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const copy = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(label);
      setTimeout(() => setCopied(""), 2000);
    });
  };

  const contacts = [
    {
      label: "Email",
      value: "abiyuanbaye21@gmail.com",
      display: "abiyuanbaye21@gmail.com",
      href: "mailto:abiyuanbaye21@gmail.com",
      icon: "✉",
    },
    {
      label: "Phone",
      value: "+251919037184",
      display: "+251 919 037 184",
      href: "tel:+251919037184",
      icon: "📞",
    },
    {
      label: "Location",
      value: "Addis Ababa, Ethiopia",
      display: "Addis Ababa, Ethiopia",
      href: "#",
      icon: "📍",
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-32 relative bg-surface/30">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="max-w-4xl mx-auto px-6 relative text-center">
        {/* Section label */}
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-accent text-sm">06.</span>
          <h2 className="font-display text-3xl font-700 text-text">
            Get In Touch
          </h2>
          <div className="flex-1 accent-line" />
        </div>

        {/* Heading */}
        <div className="reveal space-y-4 mb-12" style={{ transitionDelay: "0.1s" }}>
          <h3 className="font-display text-4xl lg:text-5xl font-800 text-text">
            Let's Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent2">
              Together
            </span>
          </h3>
          <p className="text-muted max-w-xl mx-auto leading-relaxed">
            I'm currently open to new opportunities in solution architecture,
            banking systems, and software development. Whether you have a
            project or just want to connect — my inbox is open.
          </p>
        </div>

        {/* Contact cards */}
        <div className="reveal grid sm:grid-cols-3 gap-4 mb-12" style={{ transitionDelay: "0.2s" }}>
          {contacts.map((c) => (
            <div
              key={c.label}
              className="tech-card p-6 group cursor-pointer"
              onClick={() => c.label !== "Location" && copy(c.value, c.label)}
            >
              <div className="text-3xl mb-3">{c.icon}</div>
              <p className="font-mono text-xs text-accent/70 uppercase tracking-wider mb-1">
                {c.label}
              </p>
              <p className="text-text text-sm break-all">{c.display}</p>
              {c.label !== "Location" && (
                <p className="font-mono text-xs text-muted mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {copied === c.label ? "✓ Copied!" : "Click to copy"}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal" style={{ transitionDelay: "0.3s" }}>
          <a
            href="mailto:abiyuanbaye21@gmail.com"
            className="inline-block font-mono text-sm text-bg bg-accent px-10 py-4 hover:bg-accent/90 transition-all duration-200 glow-accent"
          >
            Send Message ↗
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useEffect, useRef, useState } from "react";

const contacts = [
  {
    label: "Email",
    value: "abiyuanbaye21@gmail.com",
    display: "abiyuanbaye21@gmail.com",
    href: "mailto:abiyuanbaye21@gmail.com",
    copyable: true,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+251919037184",
    display: "+251 919 037 184",
    href: "tel:+251919037184",
    copyable: true,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Addis Ababa, Ethiopia",
    display: "Addis Ababa, Ethiopia",
    href: "#",
    copyable: false,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
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

  return (
    <section id="contact" ref={ref} className="py-32 relative bg-surface/30">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="max-w-4xl mx-auto px-6 relative">
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-accent text-sm">06.</span>
          <h2 className="font-display text-3xl font-700 text-text">Get In Touch</h2>
          <div className="flex-1 accent-line" />
        </div>

        <div className="reveal space-y-4 mb-12" style={{ transitionDelay: "0.1s" }}>
          <h3 className="font-display text-4xl lg:text-5xl font-800 text-text">
            Let's Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent2">
              Together
            </span>
          </h3>
          <p className="text-muted max-w-xl leading-relaxed">
            Open to new opportunities in solution architecture, banking systems, and software development.
            Whether you have a project or just want to connect — my inbox is always open.
          </p>
        </div>

        {/* Contact cards — SVG icons, no emojis */}
        <div className="reveal grid sm:grid-cols-3 gap-4 mb-10" style={{ transitionDelay: "0.2s" }}>
          {contacts.map((c) => (
            <div
              key={c.label}
              className={`tech-card p-6 group flex flex-col gap-3 ${c.copyable ? "cursor-pointer" : ""}`}
              onClick={() => c.copyable && copy(c.value, c.label)}
            >
              {/* Icon — clean SVG */}
              <div className="text-accent/70 group-hover:text-accent transition-colors">
                {c.icon}
              </div>
              <div>
                <p className="font-mono text-xs text-accent/60 uppercase tracking-wider mb-1">{c.label}</p>
                <p className="text-text text-sm break-all font-sans">{c.display}</p>
              </div>
              {c.copyable && (
                <p className="font-mono text-xs text-muted opacity-0 group-hover:opacity-100 transition-opacity">
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
            className="inline-flex items-center gap-2 font-mono text-sm text-bg bg-accent px-10 py-4 hover:bg-accent/90 transition-all duration-200"
          >
            Send Message
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

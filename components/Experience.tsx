"use client";
import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    id: 0,
    period: "May 2025 — Present",
    role: "Solution Architect & QA Officer",
    company: "Bunna Bank",
    shortCompany: "Bunna Bank",
    current: true,
    responsibilities: [
      "System customization and development for core banking platforms",
      "Internal system integrations across banking channels",
      "Software implementation, maintenance, and lifecycle management",
      "Requirement analysis and SRS (Software Requirements Specification) development",
      "Solution design and test strategy development for new features",
      "Cross-functional collaboration with vendors, business, and security teams",
      "Standards and compliance assurance for banking regulations",
      "Defect management and continuous improvement initiatives",
      "Software development in DevOps environment",
    ],
  },
  {
    id: 1,
    period: "July 2024 — May 2025",
    role: "Application Development Officer I",
    company: "Tsedey Bank",
    shortCompany: "Tsedey Bank",
    current: false,
    responsibilities: [
      "Alternate channel service development: Mobile, Internet, Agency, and USSD banking",
      "Designed and developed new banking applications to enhance operational efficiency",
      "API integration for seamless third-party service connections",
      "Requirement gathering sessions to align software with business objectives",
      "Technical support and participation in system updates and optimizations",
      "Managed channel services across various platforms",
      "Software maintenance and updates for smooth business operations",
      "Application testing to verify compliance with business requirements",
      "Stakeholder collaboration with vendors, business, network, security teams and end-users",
    ],
  },
  {
    id: 2,
    period: "July 2022 — June 2023",
    role: "Junior System Administrator",
    company: "Tsedey Bank",
    shortCompany: "Tsedey Bank",
    current: false,
    responsibilities: [
      "Managed and maintained banking systems ensuring seamless transaction processing",
      "Installed and configured system software and hardware to optimize performance",
      "Worked closely with IT security teams to implement cybersecurity measures",
      "Core banking system customization and system enhancement projects",
      "Database management and Crystal Reports generation",
    ],
  },
  {
    id: 3,
    period: "July 2021 — June 2022",
    role: "Junior Information System Officer",
    company: "Tsedey Bank",
    shortCompany: "Tsedey Bank",
    current: false,
    responsibilities: [
      "Support for core banking applications and routine system maintenance",
      "Database operations: backups, restoration, and maintenance",
      "COB (Close of Business) tasks and system administration duties",
      "Smooth operation of banking applications and EOD (End-of-Day) processes",
    ],
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.05 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const exp = experiences[active];

  return (
    <section id="experience" ref={ref} className="py-32 relative bg-surface/30">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section header */}
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-accent text-sm">02.</span>
          <h2 className="font-display text-3xl font-700 text-text">Experience</h2>
          <div className="flex-1 accent-line" />
          <span className="font-mono text-xs text-muted border border-border px-3 py-1">
            5+ Years
          </span>
        </div>

        {/* Timeline overview — always visible */}
        <div className="reveal mb-10 overflow-x-auto" style={{ transitionDelay: "0.05s" }}>
          <div className="flex items-center gap-0 min-w-max">
            {experiences.map((e, i) => (
              <div key={e.id} className="flex items-center">
                <button
                  onClick={() => setActive(i)}
                  className={`relative flex flex-col items-center gap-1.5 px-5 py-3 transition-all duration-200 group ${
                    active === i ? "opacity-100" : "opacity-50 hover:opacity-80"
                  }`}
                >
                  {/* Dot */}
                  <div className={`w-3 h-3 rounded-full border-2 transition-all duration-200 ${
                    active === i
                      ? "border-accent bg-accent shadow-[0_0_8px_rgba(0,212,255,0.6)]"
                      : e.current
                      ? "border-green-400 bg-green-400/30"
                      : "border-muted bg-transparent group-hover:border-accent/50"
                  }`} />
                  <span className={`font-mono text-xs whitespace-nowrap ${active === i ? "text-accent" : "text-muted"}`}>
                    {e.shortCompany}
                  </span>
                  <span className="font-mono text-[10px] text-muted/60 whitespace-nowrap">{e.period}</span>
                </button>
                {i < experiences.length - 1 && (
                  <div className={`h-px w-12 transition-all duration-300 ${i < active ? "bg-accent/40" : "bg-border"}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main tab layout */}
        <div className="reveal grid lg:grid-cols-[260px_1fr] gap-0" style={{ transitionDelay: "0.1s" }}>
          {/* Sidebar tabs */}
          <div className="border border-border border-r-0 hidden lg:block">
            {experiences.map((e, i) => (
              <button
                key={e.id}
                onClick={() => setActive(i)}
                className={`w-full text-left px-5 py-5 border-l-2 border-b border-border/50 last:border-b-0 transition-all duration-200 group ${
                  active === i
                    ? "border-l-accent bg-accent/5"
                    : "border-l-transparent hover:bg-surface/80 hover:border-l-accent/30"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`font-sans font-600 text-sm ${active === i ? "text-text" : "text-muted group-hover:text-text"}`}>
                    {e.company}
                  </span>
                  {e.current && (
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span className="font-mono text-[10px] text-green-400">Now</span>
                    </span>
                  )}
                </div>
                <p className={`font-sans text-xs leading-snug ${active === i ? "text-accent/80" : "text-muted/60"}`}>
                  {e.role}
                </p>
                <p className="font-mono text-[10px] text-muted/40 mt-1">{e.period}</p>
              </button>
            ))}
          </div>

          {/* Content panel */}
          <div className="border border-border bg-surface/30 p-8 min-h-[420px]">
            <div key={active} className="space-y-5 animate-[fadeIn_0.3s_ease_forwards]">
              {/* Header */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="font-display text-xl font-700 text-text">{exp.role}</h3>
                  {exp.current && (
                    <span className="flex items-center gap-1.5 font-mono text-xs text-green-400 border border-green-400/30 px-3 py-1 bg-green-400/5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      Current Position
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-accent font-mono text-sm font-500">@ {exp.company}</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span className="font-mono text-xs text-muted">{exp.period}</span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-accent/40 to-transparent" />

              {/* Responsibilities */}
              <ul className="space-y-3">
                {exp.responsibilities.map((r, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted text-sm leading-relaxed">
                    <span className="text-accent mt-1 shrink-0 text-xs">▸</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile: stacked cards (visible on small screens) */}
        <div className="lg:hidden mt-6 space-y-4">
          {experiences.map((e, i) => (
            <div
              key={e.id}
              className={`reveal border border-border p-5 transition-all duration-200 ${
                active === i ? "border-accent/40 bg-accent/3" : "bg-surface/20"
              }`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <button className="w-full text-left" onClick={() => setActive(active === i ? -1 : i)}>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-sans font-600 text-sm text-text">{e.company}</span>
                    <p className="font-sans text-xs text-muted mt-0.5">{e.role}</p>
                    <p className="font-mono text-[10px] text-muted/50 mt-1">{e.period}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {e.current && <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />}
                    <span className="text-muted text-xs">{active === i ? "▲" : "▼"}</span>
                  </div>
                </div>
              </button>
              {active === i && (
                <ul className="mt-4 space-y-2 border-t border-border pt-4">
                  {e.responsibilities.map((r, ri) => (
                    <li key={ri} className="flex items-start gap-2 text-muted text-xs leading-relaxed">
                      <span className="text-accent shrink-0">▸</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

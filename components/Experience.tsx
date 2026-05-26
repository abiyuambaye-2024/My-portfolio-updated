"use client";
import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    id: 0,
    period: "May 2025 — Present",
    role: "Solution Architect & QA Officer",
    company: "Bunna Bank",
    type: "Full-time",
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
    type: "Full-time",
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
      "Stakeholder collaboration (vendors, business teams, network teams, security, end-users)",
    ],
  },
  {
    id: 2,
    period: "July 2022 — June 2023",
    role: "Junior System Administrator",
    company: "Tsedey Bank",
    type: "Full-time",
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
    type: "Full-time",
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
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const exp = experiences[active];

  return (
    <section id="experience" ref={ref} className="py-32 relative bg-surface/30">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section label */}
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-accent text-sm">02.</span>
          <h2 className="font-display text-3xl font-700 text-text">
            Experience
          </h2>
          <div className="flex-1 accent-line" />
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-0 min-h-[400px]">
          {/* Tab list */}
          <div className="reveal border-l border-border" style={{ transitionDelay: "0.1s" }}>
            {experiences.map((e, i) => (
              <button
                key={e.id}
                onClick={() => setActive(i)}
                className={`w-full text-left px-6 py-4 border-l-2 transition-all duration-200 group ${
                  active === i
                    ? "border-accent bg-accent/5 text-text"
                    : "border-transparent text-muted hover:text-text hover:bg-surface/50"
                }`}
              >
                <div
                  className={`font-display text-sm font-600 ${active === i ? "text-text" : ""}`}
                >
                  {e.company}
                </div>
                <div className="font-mono text-xs text-muted/70 mt-0.5">
                  {e.current && (
                    <span className="inline-flex items-center gap-1 text-green-400 mr-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      Current
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div
            className="reveal bg-surface/50 border border-border p-8"
            key={active}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="space-y-4">
              <div>
                <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                  <h3 className="font-display text-xl font-700 text-text">
                    {exp.role}
                  </h3>
                  {exp.current && (
                    <span className="font-mono text-xs text-green-400 border border-green-400/30 px-3 py-1">
                      Current
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent font-mono text-sm">
                    @ {exp.company}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-muted" />
                  <span className="font-mono text-xs text-muted">
                    {exp.period}
                  </span>
                </div>
              </div>

              <div className="accent-line w-24" />

              <ul className="space-y-3 mt-2">
                {exp.responsibilities.map((r, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted text-sm">
                    <span className="text-accent mt-1 shrink-0">▸</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

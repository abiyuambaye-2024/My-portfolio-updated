"use client";
import { useEffect, useRef } from "react";

const skillGroups = [
  {
    category: "Core Expertise",
    skills: [
      { name: "Solution Architecture", level: 90 },
      { name: "Quality Assurance", level: 92 },
      { name: "System Integration", level: 88 },
      { name: "Requirement Analysis", level: 85 },
    ],
  },
  {
    category: "Banking Systems",
    skills: [
      { name: "Mobile Banking", level: 88 },
      { name: "Internet Banking", level: 85 },
      { name: "Agency Banking", level: 82 },
      { name: "Core Banking", level: 80 },
    ],
  },
  {
    category: "Technical Skills",
    skills: [
      { name: "API Integration", level: 87 },
      { name: "Database Management", level: 82 },
      { name: "DevOps", level: 72 },
      { name: "Responsive Web Design", level: 78 },
    ],
  },
];

const techTags = [
  "POS Systems", "E-POS", "ATM Management", "USSD Banking",
  "Crystal Reports", "SQL", "REST APIs", "DevOps",
  "System Administration", "Cybersecurity", "SRS Development",
  "Test Strategy", "Defect Management", "CI/CD",
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            e.target.querySelectorAll(".progress-fill").forEach((bar) => {
              const el = bar as HTMLElement;
              const target = el.dataset.level || "0";
              setTimeout(() => { el.style.width = target + "%"; }, 200);
            });
          }
        }),
      { threshold: 0.2 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-accent text-sm">03.</span>
          <h2 className="font-display text-3xl font-700 text-text">Skills</h2>
          <div className="flex-1 accent-line" />
        </div>

        <div className="reveal grid md:grid-cols-3 gap-6 mb-12" style={{ transitionDelay: "0.1s" }}>
          {skillGroups.map((group, gi) => (
            <div key={group.category} className="tech-card p-6 space-y-5">
              {/* Category label — clean text, no emoji */}
              <div className="pb-3 border-b border-border">
                <h3 className="font-display font-700 text-text text-base uppercase tracking-widest">
                  {group.category}
                </h3>
              </div>
              <div className="space-y-4">
                {group.skills.map((skill, si) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="font-sans text-sm text-muted">{skill.name}</span>
                      <span className="font-mono text-xs text-accent">{skill.level}%</span>
                    </div>
                    <div className="h-px bg-border relative overflow-hidden">
                      <div
                        className="progress-fill absolute top-0 left-0 h-full bg-gradient-to-r from-accent to-cyan-300 transition-all duration-1000 ease-out"
                        data-level={skill.level}
                        style={{ width: "0%", transitionDelay: `${gi * 0.1 + si * 0.05}s` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech tags */}
        <div className="reveal" style={{ transitionDelay: "0.4s" }}>
          <p className="font-mono text-xs text-muted uppercase tracking-wider mb-6">
            Technologies &amp; Tools
          </p>
          <div className="flex flex-wrap gap-2">
            {techTags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs text-accent/70 border border-accent/20 px-3 py-1.5 hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-200 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="reveal mt-12 grid sm:grid-cols-2 gap-4 max-w-md" style={{ transitionDelay: "0.5s" }}>
          <p className="sm:col-span-2 font-mono text-xs text-muted uppercase tracking-wider mb-2">Languages</p>
          {[
            { lang: "English", level: "Fluent", pct: 85 },
            { lang: "Amharic", level: "Native", pct: 100 },
          ].map((l) => (
            <div key={l.lang} className="tech-card p-4">
              <div className="flex justify-between mb-2">
                <span className="font-sans text-sm text-text">{l.lang}</span>
                <span className="font-mono text-xs text-accent">{l.level}</span>
              </div>
              <div className="h-px bg-border relative overflow-hidden">
                <div
                  className="progress-fill absolute top-0 left-0 h-full bg-gradient-to-r from-accent2 to-accent transition-all duration-1000 ease-out"
                  data-level={l.pct}
                  style={{ width: "0%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

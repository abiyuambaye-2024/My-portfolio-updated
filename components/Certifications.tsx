"use client";
import { useEffect, useRef } from "react";

const certs = [
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "March 2025",
    meta: "~300 hours",
    color: "#00D4FF",
    verify: "https://freecodecamp.org/certification/fcca3778726-be49-4068-95bb-adaca918c10f/responsive-web-design",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "Udacity — Part of Accenture",
    date: "February 2025",
    meta: "Nanodegree",
    color: "#7C3AED",
    verify: "https://www.udacity.com/certificate/e/5b9fafe-e870-11ef-bb37-b7c66ab7b980",
  },
  {
    title: "Data Analysis Fundamentals",
    issuer: "Udacity — Part of Accenture",
    date: "November 2024",
    meta: "Nanodegree",
    color: "#F59E0B",
    verify: "https://www.udacity.com/certificate/e/8a865ae-a8c0-11ef-8e6b-0f89ea7cb455",
  },
  {
    title: "Database Security for Cyber Professionals",
    issuer: "Alison — CPD Certified",
    date: "2024",
    meta: "CPD Certified",
    color: "#10B981",
    verify: null,
  },
  {
    title: "IT Support Service Levels 1 & 2",
    issuer: "Professional Training",
    date: "2023",
    meta: "Professional",
    color: "#F97316",
    verify: null,
  },
  {
    title: "Fundamentals of Digital Marketing",
    issuer: "Google Digital Garage",
    date: "2023",
    meta: "40 hours",
    color: "#EC4899",
    verify: null,
  },
  {
    title: "Project Management 101: PMP Training",
    issuer: "Simplilearn SkillUp",
    date: "March 2025",
    meta: "Cert #8032797",
    color: "#6366F1",
    verify: null,
  },
];

export default function Certifications() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="certifications" ref={ref} className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-accent text-sm">05.</span>
          <h2 className="font-display text-3xl font-700 text-text">Certifications</h2>
          <div className="flex-1 accent-line" />
          <span className="font-mono text-xs text-muted border border-border px-3 py-1">
            {certs.length} Earned
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((cert, i) => (
            <div
              key={cert.title}
              className="reveal tech-card p-5 group relative overflow-hidden flex flex-col justify-between"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              {/* Left color accent bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-300"
                style={{ background: cert.color }}
              />

              <div className="pl-4 space-y-2 flex-1">
                {/* Title */}
                <h3 className="font-display text-sm font-700 text-text leading-snug">
                  {cert.title}
                </h3>
                {/* Issuer */}
                <p className="font-mono text-xs text-muted/70">{cert.issuer}</p>

                {/* Date + meta row */}
                <div className="flex items-center justify-between pt-2">
                  <span className="font-mono text-xs" style={{ color: cert.color + "99" }}>
                    {cert.date}
                  </span>
                  <span className="font-mono text-xs text-muted/40 border border-border/40 px-2 py-0.5">
                    {cert.meta}
                  </span>
                </div>

                {/* Verify link — appears on hover */}
                {cert.verify && (
                  <a
                    href={cert.verify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ color: cert.color }}
                  >
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Verify Certificate
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

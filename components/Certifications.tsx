"use client";
import { useEffect, useRef } from "react";

const certs = [
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "March 3, 2025",
    hours: "~300 hours",
    color: "#00D4FF",
    icon: "🌐",
    verify: "https://freecodecamp.org/certification/fcca3778726-be49-4068-95bb-adaca918c10f/responsive-web-design",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "Udacity (Part of Accenture)",
    date: "February 13, 2025",
    hours: "Nanodegree",
    color: "#7C3AED",
    icon: "🤖",
    verify: "https://www.udacity.com/certificate/e/5b9fafe-e870-11ef-bb37-b7c66ab7b980",
  },
  {
    title: "Data Analysis Fundamentals",
    issuer: "Udacity (Part of Accenture)",
    date: "November 22, 2024",
    hours: "Nanodegree",
    color: "#F59E0B",
    icon: "📊",
    verify: "https://www.udacity.com/certificate/e/8a865ae-a8c0-11ef-8e6b-0f89ea7cb455",
  },
  {
    title: "Database Security for Cyber Professionals",
    issuer: "Alison (CPD Certified)",
    date: "2024",
    hours: "CPD Certified",
    color: "#10B981",
    icon: "🔐",
    verify: "#",
  },
  {
    title: "IT Support Service Levels 1 & 2",
    issuer: "Professional Training",
    date: "2023",
    hours: "Professional",
    color: "#F97316",
    icon: "🛠️",
    verify: "#",
  },
  {
    title: "Fundamentals of Digital Marketing",
    issuer: "Google Digital Garage",
    date: "2023",
    hours: "40 hours",
    color: "#EC4899",
    icon: "📈",
    verify: "#",
  },
  {
    title: "Project Management 101: PMP Training",
    issuer: "Simplilearn SkillUp",
    date: "March 12, 2025",
    hours: "Certificate #8032797",
    color: "#6366F1",
    icon: "📋",
    verify: "#",
  },
];

export default function Certifications() {
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

  return (
    <section id="certifications" ref={ref} className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-accent text-sm">05.</span>
          <h2 className="font-display text-3xl font-700 text-text">
            Certifications
          </h2>
          <div className="flex-1 accent-line" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((cert, i) => (
            <div
              key={cert.title}
              className="reveal tech-card p-5 group relative overflow-hidden"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Left color bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-0.5 transition-all duration-300 group-hover:w-1"
                style={{ background: cert.color }}
              />

              <div className="flex items-start gap-4">
                <span className="text-2xl shrink-0 mt-0.5">{cert.icon}</span>
                <div className="flex-1 min-w-0">
                  <h3
                    className="font-display text-sm font-600 text-text leading-snug group-hover:transition-colors"
                    style={{ "--hover-color": cert.color } as React.CSSProperties}
                  >
                    {cert.title}
                  </h3>
                  <p className="font-mono text-xs text-muted mt-1">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="font-mono text-xs" style={{ color: cert.color + "99" }}>
                      {cert.date}
                    </span>
                    <span className="font-mono text-xs text-muted/60">
                      {cert.hours}
                    </span>
                  </div>
                  {cert.verify !== "#" && (
                    <a
                      href={cert.verify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs mt-2 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: cert.color }}
                    >
                      Verify ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

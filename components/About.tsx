"use client";
import { useEffect, useRef } from "react";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "3", label: "Banks Served" },
  { value: "3.65", label: "CGPA" },
  { value: "7+", label: "Certifications" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-accent text-sm">01.</span>
          <h2 className="font-display text-3xl font-700 text-text">About Me</h2>
          <div className="flex-1 accent-line" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio */}
          <div className="space-y-6">
            <p className="reveal text-muted leading-relaxed text-base" style={{ transitionDelay: "0.1s" }}>
              I'm a dedicated IT professional with over{" "}
              <span className="text-text">5 years of experience</span> in the
              Ethiopian banking sector. My journey spans from system
              administration to solution architecture, giving me a holistic view
              of enterprise software ecosystems.
            </p>
            <p className="reveal text-muted leading-relaxed text-base" style={{ transitionDelay: "0.2s" }}>
              At <span className="text-accent">Bunna Bank</span>, I architect and
              implement banking solutions covering{" "}
              <span className="text-text">
                mobile banking, internet banking, agency banking, USSD banking
              </span>
              , and more. I bridge the gap between business needs and technical
              execution through robust API integrations and quality assurance
              processes.
            </p>
            <p className="reveal text-muted leading-relaxed text-base" style={{ transitionDelay: "0.3s" }}>
              With a BSc in Information Technology from{" "}
              <span className="text-text">Axum University (CGPA 3.65)</span> and
              continuous learning through certifications in AI, data analysis, and
              cybersecurity, I stay at the forefront of evolving tech.
            </p>

            {/* Quick info */}
            <div className="reveal grid grid-cols-2 gap-4 pt-4" style={{ transitionDelay: "0.4s" }}>
              {[
                { label: "Phone", value: "+251 919037184" },
                { label: "Email", value: "abiyuanbaye21@gmail.com" },
                { label: "Location", value: "Addis Ababa, Ethiopia" },
                { label: "Available", value: "Open to opportunities" },
              ].map((item) => (
                <div key={item.label} className="space-y-1">
                  <span className="font-mono text-xs text-accent/70 uppercase tracking-wider">
                    {item.label}
                  </span>
                  <p className="text-text text-sm break-all">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats grid */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="reveal tech-card p-6 relative overflow-hidden"
                  style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent to-transparent" />
                  <div className="font-display text-4xl font-800 text-accent glow-accent">
                    {stat.value}
                  </div>
                  <div className="font-mono text-xs text-muted mt-2 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Education card */}
            <div className="reveal tech-card p-6" style={{ transitionDelay: "0.5s" }}>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-mono text-xs text-accent tracking-wider uppercase">
                    Education
                  </p>
                  <h3 className="font-display text-lg font-600 text-text mt-1">
                    BSc in Information Technology
                  </h3>
                  <p className="text-muted text-sm mt-0.5">Axum University</p>
                </div>
                <div className="font-mono text-right">
                  <div className="text-accent text-sm">3.65</div>
                  <div className="text-muted text-xs">CGPA</div>
                </div>
              </div>
              <div className="accent-line" />
              <p className="font-mono text-xs text-muted mt-3">2017 — 2021</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

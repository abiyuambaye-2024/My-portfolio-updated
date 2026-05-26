"use client";
import { useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    title: "Online Library System",
    description:
      "A comprehensive digital library management system enabling users to browse, borrow, and manage books online. Features include user authentication, book catalog management, and borrowing history tracking.",
    tags: ["Web Development", "Database", "System Design"],
    color: "#00D4FF",
    number: "01",
  },
  {
    id: 2,
    title: "Online Learning System",
    description:
      "An e-learning platform that facilitates course management, student enrollment, and content delivery. Supports instructor dashboards, progress tracking, and interactive learning modules.",
    tags: ["E-Learning", "Web App", "User Management"],
    color: "#7C3AED",
    number: "02",
  },
  {
    id: 3,
    title: "House Rental System",
    description:
      "A property management and rental platform connecting landlords with tenants. Includes property listings, booking management, payment tracking, and tenant communication features.",
    tags: ["Property Tech", "Full Stack", "CRUD"],
    color: "#10B981",
    number: "03",
  },
];

export default function Projects() {
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
    <section id="projects" ref={ref} className="py-32 relative bg-surface/30">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-accent text-sm">04.</span>
          <h2 className="font-display text-3xl font-700 text-text">Projects</h2>
          <div className="flex-1 accent-line" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="reveal tech-card p-7 flex flex-col group relative overflow-hidden"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Top accent line on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
              />

              {/* Project number */}
              <div
                className="font-mono text-5xl font-700 leading-none mb-6 transition-all duration-300"
                style={{ color: project.color + "18" }}
              >
                {project.number}
              </div>

              <div className="space-y-3 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3
                    className="font-display text-lg font-700 text-text group-hover:transition-colors duration-200"
                    style={{ "--tw-text-opacity": "1" } as React.CSSProperties}
                  >
                    {project.title}
                  </h3>
                  <svg
                    className="w-4 h-4 shrink-0 text-muted group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-200 mt-1"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
                <p className="text-muted text-sm leading-relaxed">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-border">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-2 py-0.5 border border-border/60"
                    style={{ color: project.color + "90" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="reveal text-center text-muted/50 font-mono text-xs mt-12" style={{ transitionDelay: "0.5s" }}>
          // More banking and enterprise projects available upon request
        </p>
      </div>
    </section>
  );
}

"use client";
import { useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    title: "Online Library System",
    description:
      "A comprehensive digital library management system enabling users to browse, borrow, and manage books online. Features include user authentication, book catalog management, and borrowing history tracking.",
    tags: ["Web Development", "Database", "System Design"],
    icon: "📚",
    accent: "#00D4FF",
  },
  {
    id: 2,
    title: "Online Learning System",
    description:
      "An e-learning platform that facilitates course management, student enrollment, and content delivery. Supports instructor dashboards, progress tracking, and interactive learning modules.",
    tags: ["E-Learning", "Web App", "User Management"],
    icon: "🎓",
    accent: "#7C3AED",
  },
  {
    id: 3,
    title: "House Rental System",
    description:
      "A property management and rental platform connecting landlords with tenants. Includes property listings, booking management, payment tracking, and tenant communication features.",
    tags: ["Property Tech", "Full Stack", "CRUD"],
    icon: "🏠",
    accent: "#10B981",
  },
];

export default function Projects() {
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
    <section id="projects" ref={ref} className="py-32 relative bg-surface/30">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section label */}
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-accent text-sm">04.</span>
          <h2 className="font-display text-3xl font-700 text-text">Projects</h2>
          <div className="flex-1 accent-line" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="reveal tech-card p-6 flex flex-col group relative overflow-hidden"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
              />

              {/* Icon */}
              <div className="text-4xl mb-6 animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
                {project.icon}
              </div>

              {/* Content */}
              <div className="space-y-3 flex-1">
                <div className="flex items-start justify-between">
                  <h3 className="font-display text-lg font-600 text-text group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-muted group-hover:text-accent transition-colors ml-2 shrink-0">
                    ↗
                  </span>
                </div>
                <p className="text-muted text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-border">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-muted/70 px-2 py-0.5"
                    style={{ color: project.accent + "99" }}
                  >
                    #{tag.toLowerCase().replace(/\s/g, "")}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="reveal text-center text-muted font-mono text-xs mt-12" style={{ transitionDelay: "0.5s" }}>
          // More banking and enterprise projects available upon request
        </p>
      </div>
    </section>
  );
}

"use client";
import { useEffect, useState } from "react";

const roles = [
  "Solution Architect",
  "QA Officer",
  "Banking Systems Expert",
  "API Integration Specialist",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const role = roles[roleIndex];
    if (typing) {
      if (charIndex < role.length) {
        const t = setTimeout(() => {
          setDisplayed(role.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, 70);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (charIndex > 0) {
        const t = setTimeout(() => {
          setDisplayed(role.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        }, 40);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [charIndex, typing, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grid-bg hex-pattern">
      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-accent2/5 blur-[100px] pointer-events-none" />

      {/* Scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent animate-scan-line" />
      </div>

      {/* Corner decorations */}
      <div className="absolute top-24 left-6 w-8 h-8 border-l border-t border-accent/30" />
      <div className="absolute top-24 right-6 w-8 h-8 border-r border-t border-accent/30" />
      <div className="absolute bottom-12 left-6 w-8 h-8 border-l border-b border-accent/30" />
      <div className="absolute bottom-12 right-6 w-8 h-8 border-r border-b border-accent/30" />

      <div className="max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-8">
            {/* Terminal prompt */}
            <div className="font-mono text-xs text-muted flex items-center gap-2">
              <span className="text-accent font-bold">~</span>
              <span>/portfolio</span>
              <span className="text-accent">$</span>
              <span className="text-text">whoami</span>
            </div>

            {/* Name */}
            <div>
              <p className="font-mono text-accent text-sm tracking-[0.3em] uppercase mb-3">
                Hello, I'm
              </p>
              <h1 className="font-display text-5xl lg:text-7xl font-800 text-text leading-[1.05] tracking-tight">
                Abiyu
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent2">
                  Ambaye
                </span>
              </h1>
            </div>

            {/* Typed role */}
            <div className="h-8 flex items-center">
              <span className="font-mono text-xl text-muted">
                {displayed}
                <span className="animate-[blink_1s_step-end_infinite] text-accent">|</span>
              </span>
            </div>

            {/* Summary */}
            <p className="text-muted leading-relaxed max-w-lg font-body text-base">
              Specialized in{" "}
              <span className="text-text">banking systems</span>,{" "}
              <span className="text-text">API integration</span>, and{" "}
              <span className="text-text">solution architecture</span>. Currently
              at Bunna Bank, building secure and efficient digital financial
              infrastructure.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#experience"
                className="group relative font-mono text-sm text-bg bg-accent px-6 py-3 hover:bg-accent/90 transition-all duration-200 overflow-hidden"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="#contact"
                className="font-mono text-sm text-accent border border-accent/40 px-6 py-3 hover:bg-accent/10 hover:border-accent transition-all duration-200"
              >
                Get In Touch
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 font-mono text-xs text-muted">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Addis Ababa, Ethiopia
            </div>
          </div>

          {/* Right: Terminal window */}
          <div className="hidden lg:block">
            <div className="tech-card rounded-sm overflow-hidden glow-border">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-surface border-b border-border">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="font-mono text-xs text-muted ml-2">
                  abiyu@bunnabank:~$
                </span>
              </div>
              {/* Terminal body */}
              <div className="p-6 font-mono text-sm space-y-3 bg-[#0A0E14]">
                <div>
                  <span className="text-accent">const</span>{" "}
                  <span className="text-cyan-300">profile</span>{" "}
                  <span className="text-muted">= {"{"}</span>
                </div>
                <div className="pl-6 space-y-1.5">
                  <div>
                    <span className="text-orange-300">name</span>
                    <span className="text-muted">: </span>
                    <span className="text-green-300">"Abiyu Ambaye"</span>
                    <span className="text-muted">,</span>
                  </div>
                  <div>
                    <span className="text-orange-300">role</span>
                    <span className="text-muted">: </span>
                    <span className="text-green-300">"Solution Architect"</span>
                    <span className="text-muted">,</span>
                  </div>
                  <div>
                    <span className="text-orange-300">company</span>
                    <span className="text-muted">: </span>
                    <span className="text-green-300">"Bunna Bank"</span>
                    <span className="text-muted">,</span>
                  </div>
                  <div>
                    <span className="text-orange-300">location</span>
                    <span className="text-muted">: </span>
                    <span className="text-green-300">"Addis Ababa, ET"</span>
                    <span className="text-muted">,</span>
                  </div>
                  <div>
                    <span className="text-orange-300">education</span>
                    <span className="text-muted">: </span>
                    <span className="text-green-300">"BSc IT, CGPA 3.65"</span>
                    <span className="text-muted">,</span>
                  </div>
                  <div>
                    <span className="text-orange-300">experience</span>
                    <span className="text-muted">: </span>
                    <span className="text-cyan-300">5</span>
                    <span className="text-muted">, </span>
                    <span className="text-muted">// years</span>
                  </div>
                  <div>
                    <span className="text-orange-300">available</span>
                    <span className="text-muted">: </span>
                    <span className="text-cyan-300">true</span>
                  </div>
                </div>
                <div className="text-muted">{"}"}</div>
                <div className="mt-4 pt-4 border-t border-border/50">
                  <span className="text-muted">// </span>
                  <span className="text-accent/70">
                    Open to new opportunities
                  </span>
                </div>
                <div className="flex items-center gap-2 text-muted">
                  <span className="text-accent font-mono text-xs">$</span>
                  <span className="animate-[blink_1s_step-end_infinite] text-accent font-mono">|</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="font-mono text-xs text-muted tracking-widest">
            SCROLL
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-muted to-transparent" />
        </div>
      </div>
    </section>
  );
}

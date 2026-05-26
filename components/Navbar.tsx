"use client";
import { useState, useEffect, useRef } from "react";

const navItems = [
  { label: "Home", href: "#" },
  { label: "About Me", href: "#about" },
  {
    label: "My Work",
    dropdown: [
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
    ],
  },
  {
    label: "More",
    dropdown: [
      { label: "Skills", href: "#skills" },
      { label: "Certifications", href: "#certifications" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [active, setActive] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["about", "experience", "skills", "projects", "certifications", "contact"];
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(section);
          break;
        }
      }
      if (window.scrollY < 100) setActive("");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isDropdownActive = (item: typeof navItems[0]) => {
    if (!item.dropdown) return false;
    return item.dropdown.some((d) => d.href.replace("#", "") === active);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#080C10]/95 backdrop-blur-md border-b border-[#1C2333]" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between" ref={dropdownRef}>
        {/* Logo */}
        <a href="#" className="font-mono text-[#00D4FF] text-sm tracking-widest hover:opacity-80 transition-all">
          <span className="text-[#8B949E]">{"<"}</span>AA<span className="text-[#8B949E]">{"/>"}</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const hasDropdown = !!item.dropdown;
            const isActive = item.href
              ? (item.href === "#" ? active === "" : active === item.href.replace("#", ""))
              : isDropdownActive(item);

            return (
              <li key={item.label} className="relative">
                {hasDropdown ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      className={`flex items-center gap-1.5 px-4 py-2 font-sans text-sm font-medium tracking-wide transition-all duration-200 rounded-sm ${
                        isActive || openDropdown === item.label
                          ? "text-[#00D4FF]"
                          : "text-[#8B949E] hover:text-[#E6EDF3]"
                      }`}
                    >
                      {item.label}
                      <svg
                        className={`w-3 h-3 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Dropdown menu */}
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-[#0D1117] border border-[#1C2333] shadow-xl shadow-black/50 overflow-hidden">
                        {/* Top accent */}
                        <div className="h-px bg-gradient-to-r from-[#00D4FF] to-transparent" />
                        {item.dropdown!.map((d) => (
                          <a
                            key={d.label}
                            href={d.href}
                            onClick={() => setOpenDropdown(null)}
                            className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all duration-150 group ${
                              active === d.href.replace("#", "")
                                ? "text-[#00D4FF] bg-[#00D4FF]/5"
                                : "text-[#8B949E] hover:text-[#E6EDF3] hover:bg-[#1C2333]/50"
                            }`}
                          >
                            <span className={`w-1 h-1 rounded-full transition-all ${
                              active === d.href.replace("#", "") ? "bg-[#00D4FF]" : "bg-[#1C2333] group-hover:bg-[#00D4FF]/50"
                            }`} />
                            {d.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className={`px-4 py-2 font-sans text-sm font-medium tracking-wide transition-all duration-200 block ${
                      isActive ? "text-[#00D4FF]" : "text-[#8B949E] hover:text-[#E6EDF3]"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="block h-px bg-[#00D4FF] mt-0.5 rounded-full" />
                    )}
                  </a>
                )}
              </li>
            );
          })}
        </ul>

        {/* Hire Me button */}
        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 font-mono text-xs text-[#00D4FF] border border-[#00D4FF]/40 px-5 py-2 hover:bg-[#00D4FF]/10 hover:border-[#00D4FF] transition-all duration-200"
        >
          Hire Me
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#8B949E] hover:text-[#00D4FF] transition-colors p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block h-px w-6 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
            <span className={`block h-px w-6 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96" : "max-h-0"}`}>
        <div className="bg-[#0D1117]/98 border-b border-[#1C2333] px-6 py-4 space-y-1">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.label}>
                <p className="font-mono text-xs text-[#00D4FF]/60 uppercase tracking-widest px-2 pt-3 pb-1">
                  {item.label}
                </p>
                {item.dropdown.map((d) => (
                  <a
                    key={d.label}
                    href={d.href}
                    className="block px-4 py-2 text-sm text-[#8B949E] hover:text-[#E6EDF3] transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    ▸ {d.label}
                  </a>
                ))}
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="block px-2 py-2 text-sm font-medium text-[#8B949E] hover:text-[#00D4FF] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            )
          )}
          <div className="pt-3 border-t border-[#1C2333]">
            <a href="#contact" className="block text-center font-mono text-xs text-[#00D4FF] border border-[#00D4FF]/40 px-4 py-2 mt-2" onClick={() => setMenuOpen(false)}>
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

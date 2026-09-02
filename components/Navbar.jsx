"use client";
import { useState, useEffect } from "react";

const links = ["About", "Services", "Projects", "Experience", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <nav
        className={`flex items-center justify-between gap-8 bg-white rounded-full px-5 py-2.5 transition-all duration-300 ${
          scrolled
            ? "shadow-[0_4px_24px_rgba(0,0,0,0.10)] w-full max-w-2xl"
            : "shadow-[0_2px_12px_rgba(0,0,0,0.07)] w-full max-w-xl"
        }`}
      >
        <span className="font-bold text-base tracking-tight text-[#111] shrink-0">
          M<span style={{ color: "var(--accent)" }}>D</span>
        </span>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm text-[#555] hover:text-[#111] transition-colors duration-200 relative group"
            >
              {l}
              <span
                className="absolute -bottom-0.5 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                style={{ background: "var(--accent)" }}
              />
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="btn-primary text-xs px-4 py-1.5 shrink-0"
        >
          Hire Me
        </a>
      </nav>
    </div>
  );
}

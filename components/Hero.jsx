"use client";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const ArrowIcon = () => (
  <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs leading-none">↓</span>
);

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center px-6 md:px-20 max-w-6xl mx-auto pt-28 pb-16 relative"
    >
      {/* Coral-peach radial glow — hero only */}
      <div
        aria-hidden
        className="absolute -top-32 -left-24 w-[700px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 30% 40%, rgba(239,77,35,0.10) 0%, rgba(251,146,60,0.07) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="mb-6 relative">
        <span
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase rounded-full px-4 py-1.5 border"
          style={{ color: "var(--accent)", borderColor: "rgba(239,77,35,0.25)", background: "rgba(239,77,35,0.05)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--accent)" }} />
          Available for opportunities
        </span>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold text-[#111] mb-5 leading-[1.06] tracking-tight relative">
        MacDickson<br />
        <span className="serif-em text-5xl md:text-7xl" style={{ color: "var(--accent)" }}>Dziedorm</span>
      </h1>

      <p className="text-lg md:text-xl text-[#444] max-w-2xl mb-3 leading-relaxed font-light">
        Frontend-Focused <span className="serif-em">Full Stack</span> Software Engineer
      </p>
      <p className="text-sm text-[#777] max-w-xl mb-10 leading-relaxed">
        Building intelligent, production-grade software — from custom GNN-powered AML platforms to
        163M-parameter transformer models. Previously at{" "}
        <span className="text-[#111] font-medium">Republic Bank Ghana</span> and{" "}
        <span className="text-[#111] font-medium">National Insurance Commission</span>.
      </p>

      <div className="flex flex-wrap items-center gap-3 mb-14 relative">
        <a href="#projects" className="btn-primary">
          View Projects <ArrowIcon />
        </a>
        <a href="/cv.pdf" download className="btn-secondary">
          Download CV
        </a>
        <a
          href="https://github.com/Dickwson-sys"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          <GithubIcon /> GitHub
        </a>
        <a
          href="https://linkedin.com/in/mac-dickson82aab4359"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          <LinkedinIcon /> LinkedIn
        </a>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap gap-10 relative">
        {[
          { n: "150K+", label: "Transactions scored / pass" },
          { n: "163M", label: "Parameter transformer model" },
          { n: "2", label: "Industry internships" },
          { n: "6+", label: "Shipped projects" },
        ].map((s) => (
          <div key={s.label}>
            <p className="text-2xl font-bold text-[#111]">{s.n}</p>
            <p className="text-xs text-[#999] mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

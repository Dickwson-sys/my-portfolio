"use client";

import { useState } from "react";
import ContactForm from "@/components/ContactForm";

export default function Page() {
  const [activeSection, setActiveSection] = useState("About");

  const navLinks = ["About", "Experience", "Skills", "Projects", "Contact"];

  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/Dickwson-sys",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/mac-dickson82aab4359",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://instagram.com/your_handle",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
        </svg>
      ),
    },
  ];

  const skills = [
    {
      icon: "</>",
      title: "Frontend",
      tags: ["JavaScript", "React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
      level: 85,
    },
    {
      icon: "📱",
      title: "Mobile",
      tags: ["React Native", "iOS", "Android"],
      level: 70,
    },
    {
      icon: "☁️",
      title: "Cloud & AI",
      tags: ["Firebase", "Appwrite", "Cloud Functions", "LLM APIs", "AI Integration"],
      level: 75,
    },
    {
      icon: "⚙️",
      title: "Backend & Tools",
      tags: ["Java", "RESTful API", "Git", "GitHub", "Linux CLI", "VMware"],
      level: 80,
    },
  ];

  const projects = [
    {
      title: "Nexa Incorporation",
      description:
        "A full company website I designed and built from scratch, showcasing services and brand identity.",
      tags: ["Next.js", "React.js", "Tailwind CSS"],
      link: "https://nexaincoporation.vercel.app",
    },
    {
      title: "Insurance Portal Tools",
      description:
        "Internal web utilities built during my internship to help staff manage records faster and reduce manual paperwork.",
      tags: ["React.js", "RESTful API", "Tailwind CSS"],
      link: "https://github.com/Dickwson-sys",
    },
    {
      title: "Expense Tracker App",
      description:
        "A clean mobile app for tracking daily spending with categories, budgets, and a simple, friendly interface.",
      tags: ["React Native", "Firebase"],
      link: "https://github.com/Dickwson-sys",
    },
    {
      title: "Campus Events Board",
      description:
        "A web app where students discover and post university events, with auth and real-time updates.",
      tags: ["React.js", "Appwrite", "CSS3"],
      link: "https://github.com/Dickwson-sys",
    },
    {
      title: "Personal Notes API",
      description:
        "A lightweight RESTful API for storing and organizing notes, built to sharpen my backend fundamentals.",
      tags: ["Java", "RESTful API"],
      link: "https://github.com/Dickwson-sys",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white relative overflow-x-hidden">
      {/* Background glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-500/12 rounded-full blur-[120px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-[#0a0a1a]/80 backdrop-blur-md border-b border-white/5">
        <span className="text-cyan-400 font-bold text-xl tracking-tight">MD</span>

        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setActiveSection(link)}
              className={`relative text-sm pb-1 transition-colors duration-300 group ${
                activeSection === link ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              {link}
              <span
                className={`absolute bottom-0 left-0 h-px bg-cyan-400 transition-all duration-300 ${
                  activeSection === link ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}
        </div>

        <a
          href="#contact"
          onClick={() => setActiveSection("Contact")}
          className="bg-cyan-400 hover:bg-cyan-300 text-black font-semibold text-sm px-5 py-2 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:scale-105"
        >
          Hire Me
        </a>
      </nav>

      {/* Main content */}
      <main className="relative z-10 pt-20">
        {/* ── Hero ── */}
        <section
          id="about"
          className="min-h-screen flex flex-col justify-center px-8 md:px-24 max-w-6xl mx-auto"
        >
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 text-sm text-cyan-400 border border-cyan-400/30 bg-cyan-400/5 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              Available for opportunities
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 leading-tight">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              MacDickson
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mb-10 leading-relaxed">
            Front-End Developer &amp; Cloud AI Engineer based in Greater Accra, Ghana.
            I build thoughtful web and mobile experiences powered by modern AI.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="#projects"
              onClick={() => setActiveSection("Projects")}
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 hover:opacity-90 text-black font-semibold px-7 py-3 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:scale-105"
            >
              View My Work ↓
            </a>
            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 border border-white/20 hover:border-cyan-400/50 hover:text-cyan-400 text-white px-7 py-3 rounded-full transition-all duration-300"
            >
              ↓ Download CV
            </a>
          </div>

          {/* Social icons — left side */}
          <div className="flex flex-col gap-3 absolute left-4 top-1/2 -translate-y-1/2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-white transition-colors duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </section>

        {/* ── About Me ── */}
        <section id="experience" className="px-8 md:px-24 max-w-6xl mx-auto py-24">
          <h2 className="text-cyan-400 text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="text-gray-600 text-sm font-normal">01.</span> About Me
            <span className="flex-1 h-px bg-white/10 ml-4" />
          </h2>
          <div className="flex flex-col gap-6 max-w-2xl">
            <p className="text-gray-300 leading-relaxed">
              I&apos;m MacDickson, a Software Engineering student with a soft
              spot for clean interfaces and reliable systems. My journey
              started with curiosity about how the apps I used every day
              actually worked — and that curiosity never really stopped.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I work across frontend development, mobile apps, and cloud AI engineering —
              building intelligent, user-friendly products that solve real problems.
              I believe good software should never make someone feel stupid.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400 flex-wrap">
              <span className="flex items-center gap-2">📍 Greater Accra, Ghana</span>
              <span className="flex items-center gap-2">✉️ haeldick@gmail.com</span>
            </div>

            {/* Quick links */}
            <div className="flex items-center gap-3 flex-wrap">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 border border-white/10 rounded-full px-4 py-1.5 hover:text-cyan-400 hover:border-cyan-400/40 transition-all duration-200"
                >
                  {s.icon}
                  {s.label}
                </a>
              ))}
              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 text-sm text-gray-400 border border-white/10 rounded-full px-4 py-1.5 hover:text-cyan-400 hover:border-cyan-400/40 transition-all duration-200"
              >
                ↓ Download CV
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              {[
                { number: "2+", label: "Years Learning" },
                { number: "5+", label: "Projects" },
                { number: "1", label: "Internship" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:border-cyan-500/30 transition-colors duration-300"
                >
                  <p className="text-cyan-400 text-2xl font-bold">{stat.number}</p>
                  <p className="text-gray-400 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Experience ── */}
        <section className="px-8 md:px-24 max-w-6xl mx-auto py-12">
          <h2 className="text-cyan-400 text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="text-gray-600 text-sm font-normal">02.</span> Experience
            <span className="flex-1 h-px bg-white/10 ml-4" />
          </h2>
          <div className="relative pl-8 border-l-2 border-white/10">
            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-cyan-400 border-4 border-[#0a0a1a]" />
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 max-w-3xl hover:border-cyan-500/30 transition-colors duration-300">
              <div className="flex items-start justify-between flex-wrap gap-2 mb-4">
                <div>
                  <h3 className="text-white font-semibold text-lg">Front-End Developer & Cloud AI Intern</h3>
                  <p className="text-cyan-400 text-sm mt-0.5">
                    National Insurance Commission · Accra, Ghana
                  </p>
                </div>
                <span className="text-xs text-gray-500 border border-white/10 px-3 py-1 rounded-full">
                  March 2025 — May 2025
                </span>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                {[
                  "Built and maintained internal web tools with React.js and Next.js, improving staff productivity.",
                  "Integrated AI APIs and cloud services to add intelligent features to business applications.",
                  "Bound complex data structures to front-end components via RESTful APIs and Firebase.",
                  "Collaborated with engineers and business owners, presenting demos and iterating on feedback.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Skills ── */}
        <section id="skills" className="px-8 md:px-24 max-w-6xl mx-auto py-24">
          <h2 className="text-cyan-400 text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="text-gray-600 text-sm font-normal">03.</span> Skills
            <span className="flex-1 h-px bg-white/10 ml-4" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-500/30 hover:bg-white/[0.07] transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 text-sm font-bold">
                    {skill.icon}
                  </div>
                  <h3 className="text-white font-semibold text-lg">{skill.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-gray-300 border border-white/15 rounded-full px-3 py-1 hover:border-cyan-400/40 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Projects ── */}
        <section id="projects" className="px-8 md:px-24 max-w-6xl mx-auto py-12">
          <h2 className="text-cyan-400 text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="text-gray-600 text-sm font-normal">04.</span> Projects
            <span className="flex-1 h-px bg-white/10 ml-4" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-500/30 hover:bg-white/[0.07] transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 text-sm font-bold group-hover:bg-cyan-400/20 transition-colors duration-300">
                    &lt;/&gt;
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-cyan-400 transition-colors duration-200"
                    title="View project"
                  >
                    ↗
                  </a>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-gray-300 border border-white/15 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="px-8 md:px-24 max-w-6xl mx-auto py-24">
          <h2 className="text-cyan-400 text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="text-gray-600 text-sm font-normal">05.</span> Contact
            <span className="flex-1 h-px bg-white/10 ml-4" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left */}
            <div>
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
                Let&apos;s Work Together
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                I&apos;m always open to chatting about new projects,
                opportunities, or just trading ideas. Drop me a message and
                I&apos;ll get back to you.
              </p>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center gap-3 hover:text-white transition-colors duration-200">
                  <span>✉️</span> haeldick@gmail.com
                </div>
                <div className="flex items-center gap-3 hover:text-white transition-colors duration-200">
                  <span>📞</span> +233 0592985844
                </div>
                <div className="flex items-center gap-3 hover:text-white transition-colors duration-200">
                  <span>📍</span> Greater Accra, Ghana
                </div>
              </div>
              <div className="flex items-center gap-3 mt-6 flex-wrap">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all duration-300"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Right – ContactForm component */}
            <ContactForm />
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="border-t border-white/10 px-8 md:px-24 py-6 flex items-center justify-between text-sm text-gray-500 flex-wrap gap-4">
          <span className="text-cyan-400 font-medium">MacDickson Dziedorm</span>
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:text-cyan-400 hover:border-cyan-400/40 transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
          <span>© 2026 · Accra, Ghana</span>
        </footer>
      </main>
    </div>
  );
}
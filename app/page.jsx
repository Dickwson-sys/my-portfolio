import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import Projects from "@/components/Projects";
import TechAndExperience from "@/components/TechAndExperience";
import ContactForm from "@/components/ContactForm";

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

const Divider = () => (
  <div className="max-w-6xl mx-auto px-6 md:px-20">
    <div className="h-px bg-[#e5e5e5]" />
  </div>
);

export default function Page() {
  return (
    <div className="min-h-screen bg-[#faf9f7] text-[#111] relative overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <Divider />
        <Capabilities />
        <Divider />
        <Projects />
        <Divider />
        <TechAndExperience />
        <Divider />

        {/* Contact */}
        <section id="contact" className="px-6 md:px-20 max-w-6xl mx-auto py-24">
          <p className="section-label mb-3">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111] mb-2">
            Let&apos;s Work <span className="serif-em">Together</span>
          </h2>
          <p className="text-sm text-[#777] mb-12 max-w-lg">
            Open to full-time roles, freelance projects, and interesting collaborations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-4 text-sm text-[#555] mb-8">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-white border border-[#e5e5e5] flex items-center justify-center text-base shadow-sm">✉️</span>
                  haeldick@gmail.com
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-white border border-[#e5e5e5] flex items-center justify-center text-base shadow-sm">📞</span>
                  +233 0592985844
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-white border border-[#e5e5e5] flex items-center justify-center text-base shadow-sm">📍</span>
                  Greater Accra, Ghana
                </div>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Dickwson-sys"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs px-4 py-2"
                >
                  <GithubIcon /> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/mac-dickson82aab4359"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs px-4 py-2"
                >
                  <LinkedinIcon /> LinkedIn
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#e5e5e5] bg-white px-6 md:px-20 py-6">
          <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-4 text-xs text-[#999]">
            <span className="text-[#111] font-semibold">MacDickson Dziedorm</span>
            <span>© 2025 · Accra, Ghana · Built with Next.js</span>
          </div>
        </footer>
      </main>
    </div>
  );
}

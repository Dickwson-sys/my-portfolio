import Image from "next/image";
import { projects } from "@/lib/data";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-20 max-w-6xl mx-auto py-24">
      <p className="section-label mb-3">Featured Work</p>
      <h2 className="text-3xl md:text-4xl font-bold text-[#111] mb-2">
        Selected <span className="serif-em">Projects</span>
      </h2>
      <p className="text-sm text-[#777] mb-12 max-w-lg">
        From AML intelligence platforms to transformer models — built with real engineering depth.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((p) => (
          <div key={p.title} className="soft-card flex flex-col group overflow-hidden">

            {/* Screenshot — only when image exists */}
            {p.image && (
              <div className="relative w-full aspect-video bg-[#f0efed] overflow-hidden">
                <Image
                  src={p.image}
                  alt={`${p.title} screenshot`}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            )}

            {/* Card body */}
            <div className="p-6 flex flex-col flex-1">
              <div className="mb-4">
                <span className="tag mb-2 inline-block">{p.type}</span>
                <h3 className="font-semibold text-lg leading-tight text-[#111] group-hover:text-[#ef4d23] transition-colors duration-200">
                  {p.title}
                </h3>
                <p className="text-[#999] text-xs mt-0.5">{p.subtitle}</p>
              </div>

              <p className="text-[#666] text-sm leading-relaxed mb-5 flex-1">{p.description}</p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>

              {/* Link buttons — only rendered when the URL exists */}
              {(p.liveUrl || p.githubUrl) && (
                <div className="flex items-center gap-2 pt-4 border-t border-[#f0f0f0]">
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-xs px-4 py-2 gap-1.5"
                    >
                      <ExternalIcon /> Live Site
                    </a>
                  )}
                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-xs px-4 py-2 gap-1.5"
                    >
                      <GithubIcon /> GitHub
                    </a>
                  )}
                </div>
              )}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

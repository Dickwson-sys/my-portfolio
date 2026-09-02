import { stack, experience } from "@/lib/data";

export default function TechAndExperience() {
  return (
    <section id="experience" className="px-6 md:px-20 max-w-6xl mx-auto py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* Experience */}
        <div>
          <p className="section-label mb-3">Background</p>
          <h2 className="text-3xl font-bold text-[#111] mb-10">
            Work <span className="serif-em">Experience</span>
          </h2>
          <div className="space-y-5">
            {experience.map((e) => (
              <div key={e.company} className="soft-card p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-[#111] font-semibold text-sm">{e.role}</h3>
                    <p className="text-xs mt-0.5 font-medium" style={{ color: "var(--accent)" }}>
                      {e.company}
                    </p>
                  </div>
                  <span className="text-xs text-[#999] border border-[#e5e5e5] bg-[#f5f5f4] px-3 py-1 rounded-full shrink-0">
                    {e.period}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-[#666] text-xs leading-relaxed">
                      <span className="mt-0.5 shrink-0 font-bold" style={{ color: "var(--accent)" }}>→</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack + Education */}
        <div>
          <p className="section-label mb-3">Tools & Technologies</p>
          <h2 className="text-3xl font-bold text-[#111] mb-10">
            Tech <span className="serif-em">Stack</span>
          </h2>
          <div className="flex flex-wrap gap-2 mb-10">
            {stack.map((t) => (
              <span
                key={t}
                className="text-sm text-[#444] border border-[#e5e5e5] bg-white rounded-xl px-4 py-2 cursor-default transition-all duration-200 hover:border-[#ef4d23] hover:text-[#ef4d23]"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="soft-card p-6">
            <p className="section-label mb-3">Education</p>
            <h3 className="text-[#111] font-semibold text-sm">BSc. Software Engineering</h3>
            <p className="text-xs mt-0.5 mb-3 font-medium" style={{ color: "var(--accent)" }}>
              University of Ghana · In Progress
            </p>
            <p className="text-[#777] text-xs leading-relaxed">
              Studying software engineering fundamentals, algorithms, systems design, and AI — while
              shipping real-world projects alongside coursework.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

import { capabilities } from "@/lib/data";

export default function Capabilities() {
  return (
    <section id="services" className="px-6 md:px-20 max-w-6xl mx-auto py-24">
      <p className="section-label mb-3">What I Do</p>
      <h2 className="text-3xl md:text-4xl font-bold text-[#111] mb-2">
        Core <span className="serif-em">Capabilities</span>
      </h2>
      <p className="text-sm text-[#777] mb-12 max-w-lg">
        End-to-end engineering across frontend, mobile, backend, and AI — built for production.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {capabilities.map((cap) => (
          <div key={cap.title} className="soft-card p-6 group cursor-default">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-4 transition-colors duration-300"
              style={{ background: "rgba(239,77,35,0.07)", border: "1px solid rgba(239,77,35,0.15)", color: "var(--accent)" }}
            >
              {cap.icon}
            </div>
            <h3 className="text-[#111] font-semibold text-base mb-2">{cap.title}</h3>
            <p className="text-[#777] text-sm leading-relaxed mb-4">{cap.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {cap.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { experiences } from '../data/portfolioData'

function TimelineItem({ exp, index }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`relative pl-10 pb-12 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Dot */}
      <div className="absolute left-[-0.45rem] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#C9A84C] bg-[#080E1C]"
        style={{ boxShadow: '0 0 12px rgba(201,168,76,0.4)' }} />

      <p className="font-mono text-xs text-[#C9A84C]/60 tracking-widest mb-1.5 uppercase">{exp.date}</p>
      <h3 className="font-display text-lg font-semibold text-[#E8E4D9] mb-1">{exp.role}</h3>
      <p className="text-sm mb-5">
        <span className="text-[#C9A84C]">{exp.company}</span>
        <span className="text-[#7A8099]"> · {exp.location}</span>
      </p>

      <div className="bg-[#0D1526] border border-[#C9A84C]/10 rounded-xl p-6 hover:border-[#C9A84C]/25 transition-colors duration-300">
        <ul className="flex flex-col gap-2.5">
          {exp.bullets.map((b, i) => (
            <li key={i} className="text-sm text-[#7A8099] leading-relaxed pl-4 relative">
              <span className="absolute left-0 text-[#C9A84C]/60">›</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 py-28 px-8 md:px-16 max-w-6xl mx-auto">
      <div className="mb-14">
        <p className="font-mono text-xs text-[#C9A84C]/60 tracking-[0.3em] uppercase mb-3">03 — Work History</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-[#E8E4D9]">My <span className="text-[#C9A84C]">Experience</span></h2>
        <div className="w-16 h-px bg-gradient-to-r from-[#C9A84C] to-transparent mt-5" />
      </div>

      <div className="relative pl-6 border-l border-[#C9A84C]/15">
        {experiences.map((exp, i) => (
          <TimelineItem key={i} exp={exp} index={i} />
        ))}
      </div>
    </section>
  )
}
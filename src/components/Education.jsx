import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { education } from '../data/portfolioData'

function EduCard({ edu, index }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`relative bg-[#0D1526] border border-[#C9A84C]/10 rounded-2xl p-10 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A84C]/35 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.4), 0 0 30px rgba(201,168,76,0.06)'}
      onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent" />

      <div className="w-10 h-10 rounded-lg border border-[#C9A84C]/30 flex items-center justify-center mb-6 text-[#C9A84C] text-lg">
        🎓
      </div>

      <p className="font-mono text-xs text-[#C9A84C]/60 tracking-[0.2em] uppercase mb-3">{edu.degree}</p>
      <h3 className="font-display text-lg font-semibold text-[#E8E4D9] mb-3 leading-snug">{edu.title}</h3>
      <p className="text-[#C9A84C]/80 text-sm mb-1">{edu.uni}</p>
      <p className="text-[#7A8099] text-sm">{edu.location}</p>
    </div>
  )
}

export default function Education() {
  return (
    <section id="education" className="relative z-10 py-28 px-8 md:px-16 max-w-6xl mx-auto">
      <div className="mb-14">
        <p className="font-mono text-xs text-[#C9A84C]/60 tracking-[0.3em] uppercase mb-3">05 — Academic Background</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-[#E8E4D9]">My <span className="text-[#C9A84C]">Education</span></h2>
        <div className="w-16 h-px bg-gradient-to-r from-[#C9A84C] to-transparent mt-5" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((edu, i) => (
          <EduCard key={i} edu={edu} index={i} />
        ))}
      </div>
    </section>
  )
}
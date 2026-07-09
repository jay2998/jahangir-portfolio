import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { education } from '../data/portfolioData'

function EduCard({ edu, index, darkMode }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`relative border rounded-2xl p-10 overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
        darkMode 
          ? 'bg-[#0D1526] border-[#C9A84C]/10 hover:border-[#C9A84C]/35' 
          : 'bg-white border-[#C9A84C]/15 hover:border-[#C9A84C]/40 shadow-sm hover:shadow-md'
      } ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: `${index * 150}ms`,
        boxShadow: isVisible && darkMode ? '0 15px 40px rgba(0,0,0,0.4), 0 0 30px rgba(201,168,76,0.06)' : 'none',
      }}
    >
      <div className={`absolute top-0 left-0 right-0 h-px ${darkMode ? 'bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent' : 'bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent'}`} />

      <div className={`w-10 h-10 rounded-lg border flex items-center justify-center mb-6 text-lg ${darkMode ? 'border-[#C9A84C]/30 text-[#C9A84C]' : 'border-[#C9A84C]/30 text-[#C9A84C]'}`}>
        🎓
      </div>

      <p className="font-mono text-xs text-[#C9A84C]/60 tracking-[0.2em] uppercase mb-3">{edu.degree}</p>
      <h3 className={`font-display text-lg font-semibold mb-3 leading-snug ${darkMode ? 'text-[#E8E4D9]' : 'text-[#1a1208]'}`}>{edu.title}</h3>
      <p className={`text-sm mb-1 ${darkMode ? 'text-[#C9A84C]/80' : 'text-[#555]'}`}>{edu.uni}</p>
      <p className={`text-sm ${darkMode ? 'text-[#7A8099]' : 'text-[#666]'}`}>{edu.location}</p>
    </div>
  )
}

export default function Education({ darkMode = true }) {
  return (
    <section id="education" className="relative z-10 py-28 px-8 md:px-16 max-w-6xl mx-auto">
      <div className="mb-14">
        <p className="font-mono text-xs text-[#C9A84C]/60 tracking-[0.3em] uppercase mb-3">05 — Academic Background</p>
        <h2 className={`font-display text-4xl md:text-5xl font-bold ${darkMode ? 'text-[#E8E4D9]' : 'text-[#1a1208]'}`}>My <span className="text-[#C9A84C]">Education</span></h2>
        <div className="w-16 h-px bg-gradient-to-r from-[#C9A84C] to-transparent mt-5" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((edu, i) => (
          <EduCard key={i} edu={edu} index={i} darkMode={darkMode} />
        ))}
      </div>
    </section>
  )
}
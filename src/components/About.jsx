import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { personalInfo } from '../data/portfolioData'

const infoRows = [
  { label: 'Location', value: personalInfo.location },
  { label: 'Company',  value: personalInfo.company },
  { label: 'Email',    value: personalInfo.email },
  { label: 'Phone',    value: personalInfo.phone },
  { label: 'Languages', value: personalInfo.languages },
]

const specialties = [
  { icon: '🌐', label: 'Networking' },
  { icon: '💻', label: 'Full Stack Dev' },
  { icon: '🔒', label: 'IT Security' },
  { icon: '☁️', label: 'Cloud & M365' },
]

export default function About({ darkMode = true }) {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation()
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation()

  return (
    <section id="about" className={`relative z-10 py-28 scroll-mt-24 ${darkMode ? '' : 'bg-[#F9F7F3]'}`}>
      <div className="px-8 md:px-16 max-w-6xl mx-auto">
      <div className="mb-14">
        <p className={`font-mono text-xs tracking-[0.3em] uppercase mb-3 ${darkMode ? 'text-[#C9A84C]/60' : 'text-[#C9A84C]/80'}`}>01 — About Me</p>
        <h2 className={`font-display text-4xl md:text-5xl font-bold ${darkMode ? 'text-[#E8E4D9]' : 'text-[#1a1208]'}`}>Who I <span className="text-[#C9A84C]">Am</span></h2>
        <div className="w-16 h-px bg-gradient-to-r from-[#C9A84C] to-transparent mt-5" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div
          ref={leftRef}
          className={`transition-all duration-700 ${leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
        >
          <p className={`leading-relaxed mb-4 text-sm ${darkMode ? 'text-[#7A8099]' : 'text-[#444]'}`}>
            I’m a results-driven <span className="text-[#C9A84C] font-medium">Full Stack Developer & Network Administrator</span> who blends reliable infrastructure delivery with practical product development.
          </p>
          <p className={`leading-relaxed mb-4 text-sm ${darkMode ? 'text-[#7A8099]' : 'text-[#444]'}`}>
            With hands-on experience across <span className="text-[#C9A84C] font-medium">Pakistan, Canada, and the United Kingdom</span>, I’ve built secure networks, supported high-availability systems, and shipped web applications that solve real business needs.
          </p>
          <p className={`leading-relaxed mb-6 text-sm ${darkMode ? 'text-[#7A8099]' : 'text-[#444]'}`}>
            My work is grounded in <span className="text-[#C9A84C] font-medium">stability, clarity, and execution</span> — whether that means resolving incidents quickly or designing polished user experiences.
          </p>

          <div className="grid gap-2.5 mb-8">
            {personalInfo.highlights.map((item) => (
              <div key={item} className={`flex items-start gap-3 rounded-lg border px-4 py-3 text-sm ${darkMode ? 'bg-[#0D1526]/70 border-[#C9A84C]/10 text-[#E8E4D9]' : 'bg-[#F9F7F3] border-[#C9A84C]/20 text-[#333]'}`}>
                <span className="mt-0.5 text-[#C9A84C]">•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2.5">
            {infoRows.map((row) => (
              <div key={row.label} className={`flex items-center gap-4 px-5 py-3.5 border rounded-lg text-sm transition-colors duration-300 ${darkMode ? 'bg-[#0D1526] border-[#C9A84C]/10 hover:border-[#C9A84C]/30' : 'bg-white border-[#C9A84C]/20 hover:border-[#C9A84C]/40 hover:bg-[#F9F7F3]'}`}>
                <span className={`font-mono text-xs w-20 shrink-0 tracking-wider ${darkMode ? 'text-[#C9A84C]/70' : 'text-[#555]'}`}>{row.label}</span>
                <span className="w-px h-4 bg-[#C9A84C]/20 shrink-0" />
                <span className={`text-xs ${darkMode ? 'text-[#E8E4D9]' : 'text-[#1a1208]'}`}>{row.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div
          ref={rightRef}
          className={`transition-all duration-700 delay-150 ${rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
        >
          <div className={`border rounded-2xl p-8 relative overflow-hidden ${darkMode ? 'bg-[#0D1526] border-[#C9A84C]/15' : 'bg-white border-[#C9A84C]/20 shadow-sm'}`}>
            <div className={`absolute top-0 left-0 right-0 h-px ${darkMode ? 'bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent' : 'bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent'}`} />
            <div className={`absolute bottom-0 left-0 right-0 h-px ${darkMode ? 'bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent' : 'bg-gradient-to-r from-transparent via-[#C9A84C]/15 to-transparent'}`} />

            <p className={`font-mono text-xs mb-6 tracking-wider ${darkMode ? 'text-[#7A8099]/60' : 'text-[#555]/70'}`}>// expertise</p>
            <div className="grid grid-cols-2 gap-3">
              {specialties.map((s) => (
                <div
                  key={s.label}
                  className={`flex flex-col items-center gap-3 py-7 px-3 border rounded-xl text-center transition-all duration-300 hover:-translate-y-1 cursor-default ${
                    darkMode 
                      ? 'bg-[#111D33] border-[#C9A84C]/8 hover:border-[#C9A84C]/40 hover:bg-[#C9A84C]/5' 
                      : 'bg-[#F9F7F3] border-[#C9A84C]/15 hover:border-[#C9A84C]/40 hover:bg-[#F0EDE8]'
                  }`}
                >
                  <span className="text-3xl">{s.icon}</span>
                  <span className={`text-xs tracking-wide ${darkMode ? 'text-[#7A8099]' : 'text-[#333]'}`}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
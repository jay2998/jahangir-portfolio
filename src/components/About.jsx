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

export default function About() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation()
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation()

  return (
    <section id="about" className="relative z-10 py-28 px-8 md:px-16 max-w-6xl mx-auto">
      <div className="mb-14">
        <p className="font-mono text-xs text-[#C9A84C]/60 tracking-[0.3em] uppercase mb-3">01 — About Me</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-[#E8E4D9]">Who I <span className="text-[#C9A84C]">Am</span></h2>
        <div className="w-16 h-px bg-gradient-to-r from-[#C9A84C] to-transparent mt-5" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div
          ref={leftRef}
          className={`transition-all duration-700 ${leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
        >
          <p className="text-[#7A8099] leading-relaxed mb-4 text-sm">
            I'm a results-driven <span className="text-[#C9A84C] font-medium">Computer Networking Analyst & Full Stack Developer</span> with strong experience across IT operations, network infrastructure, and modern web development.
          </p>
          <p className="text-[#7A8099] leading-relaxed mb-4 text-sm">
            With hands-on expertise across <span className="text-[#C9A84C] font-medium">Pakistan, Canada, and the United Kingdom</span>, I've built and secured networks, led enterprise IT support, and developed real-world applications.
          </p>
          <p className="text-[#7A8099] leading-relaxed mb-10 text-sm">
            Currently based in <span className="text-[#C9A84C] font-medium">Lahore</span>, working at <span className="text-[#C9A84C] font-medium">Infinity Byte</span>, contributing to both networking infrastructure and full-stack software development.
          </p>

          <div className="flex flex-col gap-2.5">
            {infoRows.map((row) => (
              <div key={row.label} className="flex items-center gap-4 px-5 py-3.5 bg-[#0D1526] border border-[#C9A84C]/10 rounded-lg text-sm hover:border-[#C9A84C]/30 transition-colors duration-300">
                <span className="font-mono text-[#C9A84C]/70 text-xs w-20 shrink-0 tracking-wider">{row.label}</span>
                <span className="w-px h-4 bg-[#C9A84C]/20 shrink-0" />
                <span className="text-[#E8E4D9] text-xs">{row.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div
          ref={rightRef}
          className={`transition-all duration-700 delay-150 ${rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
        >
          <div className="bg-[#0D1526] border border-[#C9A84C]/15 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />

            <p className="font-mono text-xs text-[#7A8099]/60 mb-6 tracking-wider">// expertise</p>
            <div className="grid grid-cols-2 gap-3">
              {specialties.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center gap-3 py-7 px-3 bg-[#111D33] border border-[#C9A84C]/8 rounded-xl text-center hover:border-[#C9A84C]/40 hover:bg-[#C9A84C]/5 transition-all duration-300 hover:-translate-y-1 cursor-default"
                >
                  <span className="text-3xl">{s.icon}</span>
                  <span className="text-xs text-[#7A8099] tracking-wide">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
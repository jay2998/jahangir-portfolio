import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { skillGroups } from '../data/portfolioData'

function SkillBar({ name, pct, visible, delay, darkMode }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between text-sm mb-2">
        <span className={`text-xs tracking-wide ${darkMode ? 'text-[#E8E4D9]' : 'text-[#1a1208] font-medium'}`}>{name}</span>
        <span className="font-mono text-[#C9A84C] text-xs">{pct}%</span>
      </div>
      <div className={`h-1.5 rounded-full overflow-hidden relative ${darkMode ? 'bg-[#111D33]' : 'bg-[#e0dbd3]'}`}>
        <div className={`absolute inset-0 ${darkMode ? 'bg-[#111D33]' : 'bg-[#e0dbd3]'}`} />
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out relative"
          style={{
            width: visible ? `${pct}%` : '0%',
            transitionDelay: `${delay}ms`,
            background: 'linear-gradient(90deg, #C9A84C, #E8C96A)',
          }}
        />
      </div>
    </div>
  )
}

function SkillGroup({ group, index, darkMode }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`border rounded-2xl p-8 hover:border-[#C9A84C]/30 transition-all duration-500 ${
        darkMode ? 'bg-[#0D1526] border-[#C9A84C]/10' : 'bg-white border-[#C9A84C]/20 shadow-sm'
      } ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center gap-3 mb-7">
        <span className={`font-mono text-xs tracking-[0.2em] uppercase ${darkMode ? 'text-[#C9A84C]/70' : 'text-[#555]/70'}`}>{group.title}</span>
        <div className={`flex-1 h-px ${darkMode ? 'bg-[#C9A84C]/10' : 'bg-[#C9A84C]/15'}`} />
      </div>

      {group.type === 'bars' ? (
        group.items.map((item, i) => (
          <SkillBar key={item.name} name={item.name} pct={item.pct} visible={isVisible} delay={i * 120} darkMode={darkMode} />
        ))
      ) : (
        <div className="flex flex-wrap gap-2 mt-2">
          {group.items.map((tag) => (
            <span
              key={tag}
              className={`font-mono text-xs px-3 py-1.5 border rounded tracking-wide transition-all duration-300 cursor-default ${
                darkMode 
                  ? 'bg-[#111D33] border-[#C9A84C]/10 text-[#7A8099] hover:border-[#C9A84C]/40 hover:text-[#C9A84C]' 
                  : 'bg-[#F9F7F3] border-[#C9A84C]/20 text-[#333] hover:border-[#C9A84C]/50 hover:bg-[#f0ede8]'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Skills({ darkMode = true }) {
  return (
    <section id="skills" className="relative z-10 py-28 px-8 md:px-16 max-w-6xl mx-auto scroll-mt-24">
      <div className="mb-14">
        <p className={`font-mono text-xs tracking-[0.3em] uppercase mb-3 ${darkMode ? 'text-[#C9A84C]/60' : 'text-[#C9A84C]/80'}`}>02 — Tech Stack</p>
        <h2 className={`font-display text-4xl md:text-5xl font-bold ${darkMode ? 'text-[#E8E4D9]' : 'text-[#1a1208]'}`}>Skills & <span className="text-[#C9A84C]">Tools</span></h2>
        <div className="w-16 h-px bg-gradient-to-r from-[#C9A84C] to-transparent mt-5" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillGroups.map((group, i) => (
          <SkillGroup key={group.title} group={group} index={i} darkMode={darkMode} />
        ))}
      </div>
    </section>
  )
}
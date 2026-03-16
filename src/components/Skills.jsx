import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { skillGroups } from '../data/portfolioData'

function SkillBar({ name, pct, visible, delay }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between text-sm mb-2">
        <span className="text-[#E8E4D9] text-xs tracking-wide">{name}</span>
        <span className="font-mono text-[#C9A84C] text-xs">{pct}%</span>
      </div>
      <div className="h-px bg-[#111D33] rounded-full overflow-hidden relative">
        <div className="absolute inset-0 bg-[#111D33]" />
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

function SkillGroup({ group, index }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`bg-[#0D1526] border border-[#C9A84C]/10 rounded-2xl p-8 hover:border-[#C9A84C]/30 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center gap-3 mb-7">
        <span className="font-mono text-[#C9A84C]/70 text-xs tracking-[0.2em] uppercase">{group.title}</span>
        <div className="flex-1 h-px bg-[#C9A84C]/10" />
      </div>

      {group.type === 'bars' ? (
        group.items.map((item, i) => (
          <SkillBar key={item.name} name={item.name} pct={item.pct} visible={isVisible} delay={i * 120} />
        ))
      ) : (
        <div className="flex flex-wrap gap-2 mt-2">
          {group.items.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-3 py-1.5 bg-[#111D33] border border-[#C9A84C]/10 rounded text-[#7A8099] hover:border-[#C9A84C]/40 hover:text-[#C9A84C] transition-all duration-300 cursor-default tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 py-28 px-8 md:px-16 max-w-6xl mx-auto">
      <div className="mb-14">
        <p className="font-mono text-xs text-[#C9A84C]/60 tracking-[0.3em] uppercase mb-3">02 — Tech Stack</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-[#E8E4D9]">Skills & <span className="text-[#C9A84C]">Tools</span></h2>
        <div className="w-16 h-px bg-gradient-to-r from-[#C9A84C] to-transparent mt-5" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillGroups.map((group, i) => (
          <SkillGroup key={group.title} group={group} index={i} />
        ))}
      </div>
    </section>
  )
}
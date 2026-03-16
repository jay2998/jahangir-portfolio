import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { projects } from '../data/portfolioData'

function ProjectCard({ project, index }) {
  const { ref, isVisible } = useScrollAnimation()
  const hasLinks = project.github || project.live || project.publication

  return (
    <div
      ref={ref}
      className={`relative bg-[#0D1526] border border-[#C9A84C]/10 rounded-2xl p-8 overflow-hidden cursor-default group transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A84C]/40 flex flex-col ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(201,168,76,0.08)'}
      onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
    >
      {/* Top accent on hover */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Publication badge */}
      {project.publication && (
        <div className="absolute top-4 left-4">
          <span className="font-mono text-[10px] px-2 py-0.5 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded text-[#C9A84C]/80 tracking-widest uppercase">
            Published
          </span>
        </div>
      )}

      {/* Big number */}
      <span className="absolute top-5 right-6 font-display text-5xl font-bold text-[#C9A84C]/6 group-hover:text-[#C9A84C]/12 transition-colors duration-300 select-none">
        {project.num}
      </span>

      <div className={`text-3xl mb-5 ${project.publication ? 'mt-6' : ''}`}>{project.icon}</div>
      <h3 className="font-display text-lg font-semibold text-[#E8E4D9] mb-3">{project.title}</h3>
      <p className="text-sm text-[#7A8099] leading-relaxed mb-6 flex-1">{project.desc}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs px-2.5 py-1 border border-[#C9A84C]/20 rounded text-[#C9A84C]/70 bg-[#C9A84C]/5 tracking-wide"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      {hasLinks && (
        <div className="flex flex-wrap items-center gap-4 pt-5 border-t border-[#C9A84C]/10">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono text-[#7A8099] hover:text-[#C9A84C] transition-colors duration-300"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
          )}
          {project.publication && (
            <a
              href={project.publication}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono text-[#7A8099] hover:text-[#C9A84C] transition-colors duration-300"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
              Publication
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono text-[#7A8099] hover:text-[#C9A84C] transition-colors duration-300 ml-auto"
            >
              Live Demo
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          )}
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  const webProjects = projects.filter(p => p.github !== null || p.live !== null)
  const hardwareProjects = projects.filter(p => p.github === null && p.live === null)

  return (
    <section id="projects" className="relative z-10 py-28 px-8 md:px-16 max-w-6xl mx-auto">
      <div className="mb-14">
        <p className="font-mono text-xs text-[#C9A84C]/60 tracking-[0.3em] uppercase mb-3">04 — Featured Work</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-[#E8E4D9]">My <span className="text-[#C9A84C]">Projects</span></h2>
        <div className="w-16 h-px bg-gradient-to-r from-[#C9A84C] to-transparent mt-5" />
      </div>

      {/* Full Stack / Web */}
      <p className="font-mono text-xs text-[#C9A84C]/50 tracking-[0.2em] uppercase mb-5">// Full Stack & Web</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
        {webProjects.map((p, i) => (
          <ProjectCard key={p.num} project={p} index={i} />
        ))}
      </div>

      {/* Hardware / IoT */}
      <p className="font-mono text-xs text-[#C9A84C]/50 tracking-[0.2em] uppercase mb-5">// Hardware & IoT</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {hardwareProjects.map((p, i) => (
          <ProjectCard key={p.num} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}
import { useTypewriter } from '../hooks/useTypewriter'
import { personalInfo, stats } from '../data/portfolioData'


const PROFILE_IMAGE = '/images/profile.jpg'

export default function Hero() {
  const typed = useTypewriter(personalInfo.titles, 70, 40, 2000)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-8 md:px-16 pt-24 max-w-6xl mx-auto"
    >
      {/* Subtle grid */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(201,168,76,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow orbs */}
      <div
        className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="fixed bottom-1/4 right-0 w-96 h-96 rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Main hero layout — text left, image right */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-16">

        {/* LEFT — Text content */}
        <div className="flex-1 min-w-0">
          {/* Tag */}
          <div
            className="flex items-center gap-3 font-mono text-[#C9A84C]/70 text-xs mb-8 animate-fade-up opacity-0 tracking-widest uppercase"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            <span className="block w-10 h-px bg-[#C9A84C]/50" />
            Available for opportunities
          </div>

          {/* Name */}
          <h1
            className="font-display text-5xl md:text-7xl font-bold leading-none mb-6 animate-fade-up opacity-0"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            <span className="block text-[#E8E4D9]">Jahangir</span>
            <span
              className="block"
              style={{
                background: 'linear-gradient(90deg, #C9A84C, #E8C96A, #C9A84C)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'shimmer 3s linear infinite',
              }}
            >
              Ali
            </span>
          </h1>

          {/* Typewriter */}
          <div
            className="font-mono text-sm md:text-lg text-[#C9A84C]/80 mb-6 h-7 animate-fade-up opacity-0 tracking-wide"
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
          >
            {typed}
            <span className="inline-block w-0.5 h-4 bg-[#C9A84C] ml-1 align-middle animate-blink" />
          </div>

          {/* Divider */}
          <div
            className="w-20 h-px bg-gradient-to-r from-[#C9A84C] to-transparent mb-6 animate-fade-up opacity-0"
            style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
          />

          {/* Description */}
          <p
            className="text-[#7A8099] text-sm md:text-base max-w-lg leading-relaxed mb-10 animate-fade-up opacity-0"
            style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
          >
            Based in <span className="text-[#C9A84C]">Lahore, Pakistan</span>. Building robust
            network infrastructure and scalable web solutions with 7+ years of experience across
            Pakistan, Canada, and the UK.
          </p>

          {/* Buttons */}
          <div
            className="flex gap-4 flex-wrap animate-fade-up opacity-0"
            style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
          >
            <a
              href="#projects"
              className="px-7 py-3.5 font-sans text-sm font-medium tracking-wide rounded transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #C9A84C, #E8C96A)',
                color: '#080E1C',
                boxShadow: '0 4px 20px rgba(201,168,76,0.25)',
              }}
              onMouseEnter={e => (e.target.style.boxShadow = '0 8px 30px rgba(201,168,76,0.45)')}
              onMouseLeave={e => (e.target.style.boxShadow = '0 4px 20px rgba(201,168,76,0.25)')}
            >
              View Projects →
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 border border-[#C9A84C]/50 text-[#C9A84C] font-sans text-sm font-medium tracking-wide rounded hover:bg-[#C9A84C]/8 hover:border-[#C9A84C] transition-all duration-300"
            >
              Get In Touch
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3.5 border border-[#E8E4D9]/10 text-[#7A8099] font-sans text-sm font-medium tracking-wide rounded hover:border-[#E8E4D9]/30 hover:text-[#E8E4D9] transition-all duration-300 flex items-center gap-2"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>

          {/* Stats */}
          <div
            className="flex flex-wrap gap-8 mt-12 pt-10 border-t border-[#C9A84C]/10 animate-fade-up opacity-0"
            style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-bold text-[#C9A84C]">{s.num}</div>
                <div className="text-xs text-[#7A8099] mt-1 tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Profile image */}
        <div
          className="shrink-0 animate-fade-up opacity-0"
          style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Outer glow ring */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, #C9A84C, #E8C96A, transparent, #C9A84C)',
                padding: '2px',
                borderRadius: '9999px',
                animation: 'spin 8s linear infinite',
              }}
            />

            {/* Gold border ring */}
            <div
              className="absolute inset-0 rounded-full border-2 border-[#C9A84C]/30"
              style={{ boxShadow: '0 0 40px rgba(201,168,76,0.15), inset 0 0 40px rgba(201,168,76,0.05)' }}
            />

            {/* Corner accent dots */}
            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#C9A84C]" style={{ boxShadow: '0 0 10px rgba(201,168,76,0.8)' }} />
            <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-[#C9A84C]/60" style={{ boxShadow: '0 0 8px rgba(201,168,76,0.6)' }} />

            {/* Image container */}
            <div className="absolute inset-2 rounded-full overflow-hidden bg-[#0D1526] border border-[#C9A84C]/20">
              <img
                src={PROFILE_IMAGE}
                alt="Jahangir Ali"
                className="w-full h-full object-cover object-top"
                onError={e => {
                  // Fallback initials avatar if image not found
                  e.target.style.display = 'none'
                  e.target.parentNode.innerHTML = `
                    <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#0D1526,#111D33);">
                      <span style="font-family:'Playfair Display',serif;font-size:4rem;font-weight:700;background:linear-gradient(135deg,#C9A84C,#E8C96A);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">JA</span>
                    </div>
                  `
                }}
              />
            </div>

            {/* Floating status badge */}
            <div
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 bg-[#0D1526] border border-[#C9A84C]/30 rounded-full text-xs font-mono text-[#C9A84C] whitespace-nowrap"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.4)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
              Available for hire
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-xs text-[#7A8099]/60 animate-fade-up opacity-0 tracking-widest"
        style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}
      >
        <span>scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#C9A84C] to-transparent animate-scroll-line" />
      </div>
    </section>
  )
}
import { useState, useEffect } from 'react'
import { personalInfo } from '../data/portfolioData'

const links = ['about', 'skills', 'experience', 'projects', 'education', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = links.map(l => document.getElementById(l))
      sections.forEach(sec => {
        if (sec && window.scrollY >= sec.offsetTop - 200) setActive(sec.id)
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 transition-all duration-300 ${
      scrolled
        ? 'py-3 border-b border-[#C9A84C]/20 bg-[#080E1C]/95 backdrop-blur-xl'
        : 'py-5 border-b border-[#C9A84C]/10 bg-[#080E1C]/80 backdrop-blur-lg'
    }`}>
      {/* Logo */}
      <a href="#hero" className="font-display text-[#C9A84C] text-xl font-semibold tracking-wide">
        JA<span className="text-[#E8E4D9]/40">.</span>
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-8">
        {links.map(link => (
          <li key={link}>
            <a
              href={`#${link}`}
              className={`font-mono text-xs tracking-widest uppercase transition-all duration-300 hover:text-[#C9A84C] ${
                active === link ? 'text-[#C9A84C]' : 'text-[#7A8099]'
              }`}
            >
              {link}
              {active === link && (
                <span className="block h-px bg-[#C9A84C] mt-0.5 w-full" />
              )}
            </a>
          </li>
        ))}

        {/* Social icons */}
        <li className="flex items-center gap-3 ml-2 pl-4 border-l border-[#C9A84C]/15">
          {/* LinkedIn */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-[#7A8099] hover:text-[#C9A84C] transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          {/* GitHub */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="text-[#7A8099] hover:text-[#C9A84C] transition-colors duration-300"
            aria-label="GitHub"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className="px-5 py-2 border border-[#C9A84C]/60 text-[#C9A84C] font-mono text-xs tracking-widest uppercase rounded hover:bg-[#C9A84C] hover:text-[#080E1C] transition-all duration-300"
          >
            Hire Me
          </a>
        </li>
      </ul>

      {/* Mobile hamburger */}
      <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)}>
        <span className={`block w-6 h-px bg-[#C9A84C] transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
        <span className={`block w-6 h-px bg-[#C9A84C] transition-all ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-px bg-[#C9A84C] transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0D1526] border-b border-[#C9A84C]/20 flex flex-col py-4 md:hidden">
          {links.map(link => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-xs text-[#7A8099] hover:text-[#C9A84C] px-8 py-3 tracking-widest uppercase transition-colors"
            >
              {link}
            </a>
          ))}
          <div className="flex items-center gap-4 px-8 pt-4 mt-2 border-t border-[#C9A84C]/10">
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-[#7A8099] hover:text-[#C9A84C] transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-[#7A8099] hover:text-[#C9A84C] transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
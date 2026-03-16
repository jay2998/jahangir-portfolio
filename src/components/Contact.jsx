import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { personalInfo } from '../data/portfolioData'
import GitHubStats from './Githubstats'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID  = 'service_88j2rla'
const EMAILJS_TEMPLATE_ID = 'template_39aw1na'
const EMAILJS_PUBLIC_KEY  = 'hluUCWcT40j9AxtxV'
// ──────────────────────────────────────────────────────────────────────────────

const contactLinks = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`,
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.38 2 2 0 0 1 3.55 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.85-.85a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16.92z"/>
      </svg>
    ),
    label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}`,
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    label: 'LinkedIn', value: 'jahangir-ali-0352451b5', href: personalInfo.linkedin,
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
    label: 'GitHub', value: 'github.com/jay2998', href: personalInfo.github,
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Location', value: personalInfo.location, href: null,
  },
]

export default function Contact() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation()
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation()
  const formRef = useRef(null)

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    setStatus('sending')
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="contact" className="relative z-10 py-28 px-8 md:px-16 max-w-6xl mx-auto">
      <div className="mb-14">
        <p className="font-mono text-xs text-[#C9A84C]/60 tracking-[0.3em] uppercase mb-3">06 — Get In Touch</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-[#E8E4D9]">Contact <span className="text-[#C9A84C]">Me</span></h2>
        <div className="w-16 h-px bg-gradient-to-r from-[#C9A84C] to-transparent mt-5" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left */}
        <div ref={leftRef} className={`transition-all duration-700 ${leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
          <p className="text-[#7A8099] text-sm leading-relaxed mb-8">
            Open to freelance projects, full-time roles, and collaborations. Whether it's a networking challenge or a full-stack build — let's talk.
          </p>
          <div className="flex flex-col gap-3">
            {contactLinks.map((link) => {
              const Tag = link.href ? 'a' : 'div'
              return (
                <Tag
                  key={link.label}
                  href={link.href || undefined}
                  target={link.href?.startsWith('http') ? '_blank' : undefined}
                  rel={link.href?.startsWith('http') ? 'noreferrer' : undefined}
                  className={`flex items-center gap-5 px-6 py-4 bg-[#0D1526] border border-[#C9A84C]/10 rounded-xl transition-all duration-300 no-underline group ${
                    link.href ? 'hover:border-[#C9A84C]/40 hover:translate-x-1 cursor-pointer' : 'cursor-default'
                  }`}
                >
                  <span className={`shrink-0 transition-colors duration-300 ${link.href ? 'text-[#C9A84C]/50 group-hover:text-[#C9A84C]' : 'text-[#C9A84C]/30'}`}>
                    {link.icon}
                  </span>
                  <div>
                    <p className="font-mono text-xs text-[#7A8099]/60 tracking-widest uppercase mb-0.5">{link.label}</p>
                    <p className="text-sm text-[#E8E4D9]">{link.value}</p>
                  </div>
                  {link.href && (
                    <svg className="ml-auto shrink-0 text-[#C9A84C]/0 group-hover:text-[#C9A84C]/60 transition-colors duration-300" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M17 7H7M17 7v10"/>
                    </svg>
                  )}
                </Tag>
              )
            })}
          </div>

          {/* GitHub live stats */}
          <GitHubStats />
        </div>

        {/* Right — form */}
        <div ref={rightRef} className={`transition-all duration-700 delay-150 ${rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
          <form ref={formRef} className="flex flex-col gap-5" onSubmit={handleSubmit}>
            {[
              { id: 'name',    label: 'Your Name',  type: 'text',  placeholder: 'Enter your name' },
              { id: 'email',   label: 'Your Email', type: 'email', placeholder: 'Enter your email' },
              { id: 'subject', label: 'Subject',    type: 'text',  placeholder: "What's this about?" },
            ].map((f) => (
              <div key={f.id} className="flex flex-col gap-2">
                <label htmlFor={f.id} className="font-mono text-xs text-[#C9A84C]/60 tracking-widest uppercase">{f.label}</label>
                <input
                  id={f.id}
                  name={f.id}
                  type={f.type}
                  placeholder={f.placeholder}
                  value={formData[f.id]}
                  onChange={handleChange}
                  required={f.id !== 'subject'}
                  className="bg-[#0D1526] border border-[#C9A84C]/10 rounded-lg px-5 py-3.5 text-sm text-[#E8E4D9] outline-none focus:border-[#C9A84C]/50 transition-all duration-300 placeholder:text-[#7A8099]/30 font-sans"
                />
              </div>
            ))}

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-mono text-xs text-[#C9A84C]/60 tracking-widest uppercase">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-[#0D1526] border border-[#C9A84C]/10 rounded-lg px-5 py-3.5 text-sm text-[#E8E4D9] outline-none focus:border-[#C9A84C]/50 transition-all duration-300 placeholder:text-[#7A8099]/30 resize-y font-sans"
              />
            </div>

            {/* Status message */}
            {status === 'success' && (
              <div className="flex items-center gap-2 px-4 py-3 bg-[#4ade80]/10 border border-[#4ade80]/20 rounded-lg">
                <span className="text-[#4ade80] text-lg">✓</span>
                <p className="text-sm text-[#4ade80] font-mono">Message sent successfully!</p>
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-2 px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                <span className="text-red-400 text-lg">✗</span>
                <p className="text-sm text-red-400 font-mono">Failed to send. Try emailing directly.</p>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-4 font-sans text-sm font-medium tracking-wide rounded-lg mt-2 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                background: 'linear-gradient(135deg, #C9A84C, #E8C96A)',
                color: '#080E1C',
                boxShadow: '0 4px 20px rgba(201,168,76,0.2)',
              }}
              onMouseEnter={e => { if (status !== 'sending') e.currentTarget.style.boxShadow = '0 8px 30px rgba(201,168,76,0.4)' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(201,168,76,0.2)' }}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
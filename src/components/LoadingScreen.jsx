import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Start fade after 1.6s, remove from DOM after transition (500ms)
    const fadeTimer = setTimeout(() => setFadeOut(true), 1600)
    const removeTimer = setTimeout(() => setVisible(false), 2100)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#080E1C] transition-opacity duration-500"
      style={{ opacity: fadeOut ? 0 : 1, pointerEvents: fadeOut ? 'none' : 'all' }}
    >
      {/* Animated logo */}
      <div className="relative flex items-center justify-center mb-8">
        {/* Outer spinning ring */}
        <div
          className="absolute w-24 h-24 rounded-full border border-[#C9A84C]/20"
          style={{ animation: 'spin 3s linear infinite' }}
        />
        <div
          className="absolute w-20 h-20 rounded-full border border-[#C9A84C]/10"
          style={{ animation: 'spin 2s linear infinite reverse' }}
        />
        {/* Center initials */}
        <div className="w-16 h-16 rounded-full border border-[#C9A84C]/40 flex items-center justify-center bg-[#0D1526]">
          <span
            className="font-display text-2xl font-bold"
            style={{
              background: 'linear-gradient(135deg, #C9A84C, #E8C96A)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            JA
          </span>
        </div>
      </div>

      {/* Loading bar */}
      <div className="w-32 h-px bg-[#C9A84C]/15 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] rounded-full"
          style={{ animation: 'loadBar 1.4s ease-out forwards' }}
        />
      </div>

      <p className="font-mono text-xs text-[#7A8099]/60 tracking-[0.3em] uppercase mt-5">
        Loading
      </p>

      <style>{`
        @keyframes loadBar {
          0%   { width: 0% }
          100% { width: 100% }
        }
      `}</style>
    </div>
  )
}
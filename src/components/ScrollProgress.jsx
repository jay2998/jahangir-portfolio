import { useState, useEffect } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-[2px] pointer-events-none">
      <div
        className="h-full transition-all duration-150 ease-out"
        style={{
          width: `${progress * 100}%`,
          background: 'linear-gradient(90deg, #C9A84C, #E8C96A)',
          boxShadow: '0 0 10px rgba(201,168,76,0.4)',
        }}
      />
    </div>
  )
}

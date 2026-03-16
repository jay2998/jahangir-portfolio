import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollToTop'
import LoadingScreen from './components/LoadingScreen'
import CursorGlow from './components/CursorGlow'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  const bg   = darkMode ? 'bg-[#080E1C] text-[#E8E4D9]' : 'bg-[#F5F0E8] text-[#1a1208]'
  const foot = darkMode ? 'border-[#C9A84C]/15 text-[#7A8099]' : 'border-[#C9A84C]/25 text-[#888]'

  return (
    <>
      <LoadingScreen />
      <CursorGlow />
      <div className={`min-h-screen overflow-x-hidden transition-colors duration-500 ${bg}`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Education darkMode={darkMode} />
        <Contact darkMode={darkMode} />
        <footer className={`text-center py-8 border-t font-mono text-xs relative z-10 ${foot}`}>
          © 2026 <span className="text-[#C9A84C]">Jahangir Ali</span> · Computer Networking Analyst & Full Stack Developer · Lahore, Pakistan
        </footer>
        <ScrollToTop />
      </div>
    </>
  )
}

export default App
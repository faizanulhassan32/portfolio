import { useState, useEffect } from 'react'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { setLenis } from './lib/lenis'

gsap.registerPlugin(ScrollTrigger)
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Contact from './sections/Contact'
import ProjectDetail from './pages/ProjectDetail'

const pageVariants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.22, ease: 'easeIn' } },
}

function Portfolio({ dark, setDark }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <div className="min-h-screen">
        <Navbar dark={dark} setDark={setDark} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>
        <footer
          className="border-t py-8 text-center"
          style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
        >
          <p className="font-mono text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Faizan Ul Hassan. All rights reserved.
          </p>
        </footer>
      </div>
    </motion.div>
  )
}

function AppRoutes({ dark, setDark }) {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Portfolio dark={dark} setDark={setDark} />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    // Expose to other components for programmatic smooth scroll
    setLenis(lenis)
    // Keep GSAP ScrollTrigger in sync with Lenis virtual scroll position
    lenis.on('scroll', () => ScrollTrigger.update())

    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return (
    <HashRouter>
      <AppRoutes dark={dark} setDark={setDark} />
    </HashRouter>
  )
}

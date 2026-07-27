import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { lenisScrollTo } from '../lib/lenis'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    lenisScrollTo(href)
    setMobileOpen(false)
  }

  const navStyle = {
    borderColor: scrolled ? 'var(--border)' : 'transparent',
    backgroundColor: scrolled ? 'color-mix(in srgb, var(--bg) 85%, transparent)' : 'transparent',
  }

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md transition-all duration-300"
      style={navStyle}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={e => handleNavClick(e, '#hero')}
          className="font-mono text-sm font-medium tracking-wider transition-colors"
          style={{ color: 'var(--accent)' }}
        >
          faizan<span style={{ color: 'var(--text-muted)' }}>.dev</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={e => handleNavClick(e, href)}
              className="text-sm font-medium transition-colors duration-200 cursor-pointer"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={e => (e.target.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.target.style.color = 'var(--text-muted)')}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark(d => !d)}
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200"
            style={{ color: 'var(--text-muted)', backgroundColor: 'var(--surface-2)' }}
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(o => !o)}
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ color: 'var(--text-muted)', backgroundColor: 'var(--surface-2)' }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t overflow-hidden"
            style={{
              borderColor: 'var(--border)',
              backgroundColor: 'color-mix(in srgb, var(--bg) 95%, transparent)',
            }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={e => handleNavClick(e, href)}
                  className="text-sm font-medium cursor-pointer"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
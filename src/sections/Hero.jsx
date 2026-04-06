import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import gsap from 'gsap'
import ParticleField from '../components/ParticleField'
import { lenisScrollTo } from '../lib/lenis'

// Pre-split name into chars for individual animation
const NAME_LINE1 = 'Faizan'.split('')
const NAME_LINE2 = 'Ul Hassan'.split('')

// Pre-compute tagline words with color + delay
const TAGLINE_SEGMENTS = [
  { words: ['I', 'build', 'the', 'infrastructure', 'that', 'makes', 'AI', 'work', 'in', 'production:'], muted: true },
  { words: ['multi-agent', 'systems,', 'RAG', 'pipelines,', 'and', 'LLM', 'backends'], muted: false },
  { words: ['that', 'actually', 'ship.'], muted: true },
]

let _wordDelay = 1.05
const TAGLINE_WORDS = TAGLINE_SEGMENTS.flatMap(seg =>
  seg.words.map(word => {
    const delay = _wordDelay
    _wordDelay += 0.055
    return { word, muted: seg.muted, delay }
  })
)

function CharReveal({ char, delay, prefersReducedMotion }) {
  return (
    <motion.span
      initial={prefersReducedMotion ? false : { y: 56, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { type: 'spring', stiffness: 260, damping: 20, delay }
      }
      style={{ display: 'inline-block' }}
    >
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  )
}

// Magnetic CTA button — GSAP hover attraction
function MagneticButton({ children, className, style, href, download, onMouseEnter, onMouseLeave, onClick }) {
  const ref = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  const handleMouseMove = e => {
    if (prefersReducedMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * 0.25
    const y = (e.clientY - rect.top - rect.height / 2) * 0.25
    gsap.to(ref.current, { x, y, duration: 0.3, ease: 'power2.out' })
  }

  const handleMouseLeave = e => {
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)' })
    if (onMouseLeave) onMouseLeave(e)
  }

  const handleMouseEnter = e => {
    if (onMouseEnter) onMouseEnter(e)
  }

  const props = {
    ref,
    className,
    style,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onMouseEnter: handleMouseEnter,
    onClick,
  }

  if (href) {
    return <a href={href} download={download} {...props}>{children}</a>
  }
  return <div {...props}>{children}</div>
}

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, -120])
  const opacity = useTransform(scrollY, [0, 380], [1, 0])
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center grid-bg overflow-hidden"
    >
      {/* Canvas particle field */}
      <ParticleField />

      {/* Floating radial glow with subtle pulse */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full pointer-events-none"
        animate={
          prefersReducedMotion
            ? {}
            : { scale: [1, 1.07, 1], opacity: [0.65, 1, 0.65] }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          repeatType: 'mirror',
        }}
        style={{
          background: 'radial-gradient(ellipse at center, var(--accent-glow) 0%, transparent 68%)',
        }}
      />

      {/* Corner brackets */}
      <div className="absolute top-20 left-6 w-14 h-14 border-l border-t opacity-25" style={{ borderColor: 'var(--accent)' }} />
      <div className="absolute bottom-24 right-6 w-14 h-14 border-r border-b opacity-25" style={{ borderColor: 'var(--accent)' }} />

      {/* Parallax content wrapper */}
      <motion.div
        style={prefersReducedMotion ? {} : { y, opacity }}
        className="relative z-10 w-full"
      >
        <div className="max-w-5xl mx-auto px-6 text-center">

          {/* Availability pill */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mb-7"
          >
            <span
              className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase px-3 py-1.5 rounded-full border"
              style={{ color: 'var(--accent)', borderColor: 'var(--border)', backgroundColor: 'var(--surface)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: '#4ade80' }} />
              Available for work
            </span>
          </motion.div>

          {/* Name — char by char */}
          <h1
            className="font-display font-extrabold tracking-tight leading-[0.88]"
            style={{ fontSize: 'clamp(3.2rem, 10vw, 7.5rem)', color: 'var(--text)' }}
          >
            <span className="block" style={{ overflow: 'hidden' }}>
              {NAME_LINE1.map((char, i) => (
                <CharReveal
                  key={i}
                  char={char}
                  delay={0.1 + i * 0.05}
                  prefersReducedMotion={prefersReducedMotion}
                />
              ))}
            </span>
            <span className="block" style={{ color: 'var(--accent)', overflow: 'hidden' }}>
              {NAME_LINE2.map((char, i) => (
                <CharReveal
                  key={i}
                  char={char}
                  delay={0.45 + i * 0.05}
                  prefersReducedMotion={prefersReducedMotion}
                />
              ))}
            </span>
          </h1>

          {/* Role tag */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.9 }}
            className="mt-7 mb-4"
          >
            <code className="font-mono text-sm" style={{ color: 'var(--text-muted)' }}>
              <span style={{ color: 'var(--accent)' }}>const</span>{' '}
              role{' '}
              <span style={{ color: 'var(--text-muted)' }}>=</span>{' '}
              <span style={{ color: 'var(--text)' }}>&quot;AI Backend Engineer&quot;</span>
              <span className="animate-blink ml-0.5" style={{ color: 'var(--accent)' }}>▌</span>
            </code>
          </motion.div>

          {/* Tagline — word by word */}
          <p
            className="mt-4 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10"
            style={{ minHeight: '3.5rem' }}
          >
            {TAGLINE_WORDS.map(({ word, muted, delay }, i) => (
              <motion.span
                key={i}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay }}
                style={{
                  display: 'inline',
                  color: muted ? 'var(--text-muted)' : 'var(--text)',
                }}
              >
                {word}{' '}
              </motion.span>
            ))}
          </p>

          {/* CTAs */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 320, damping: 22, delay: 1.9 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <MagneticButton
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200 hover:opacity-88 hover:scale-[1.03] active:scale-[0.98]"
              style={{ backgroundColor: 'var(--accent)', color: '#07070a' }}
              onClick={e => { e.preventDefault(); lenisScrollTo('#projects') }}
            >
              View My Work
            </MagneticButton>

            <MagneticButton
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm border transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
              style={{ borderColor: 'var(--border)', color: 'var(--text)', backgroundColor: 'var(--surface)' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
              onClick={e => { e.preventDefault(); lenisScrollTo('#contact') }}
            >
              Get In Touch
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: 'var(--text-muted)' }}
      >
        <span className="font-mono text-xs tracking-widest uppercase">scroll</span>
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  )
}

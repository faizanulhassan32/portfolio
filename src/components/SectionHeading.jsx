import { useRef, useEffect } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SectionHeading({ number, children, sub, icon: Icon }) {
  const ref = useRef(null)
  const lineRef = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px 0px' })
  const prefersReducedMotion = useReducedMotion()

  // GSAP: draw the divider line left-to-right on scroll
  useEffect(() => {
    if (prefersReducedMotion || !lineRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: lineRef.current,
            start: 'top 88%',
          },
        }
      )
    })
    return () => ctx.revert()
  }, [prefersReducedMotion])

  return (
    <div ref={ref} className="mb-12">
      {/* Number label row */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="flex items-center gap-3 mb-5"
      >
        <span className="section-label">{number}</span>
        <div
          ref={lineRef}
          className="flex-1 h-px"
          style={{ backgroundColor: 'var(--border)', transformOrigin: 'left' }}
        />
      </motion.div>

      {/* Main heading — icon + curtain-lift text */}
      <div className="flex items-start gap-4">
        {Icon && (
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.4, rotate: -10 }}
            animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '0.15em' }}
          >
            <Icon size={34} />
          </motion.div>
        )}
        <div style={{ overflow: 'hidden', paddingBottom: '0.08em' }}>
          <motion.h2
            initial={prefersReducedMotion ? false : { y: '105%' }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            className="font-display font-bold text-3xl md:text-4xl"
            style={{ color: 'var(--text)' }}
          >
            {children}
          </motion.h2>
        </div>
      </div>

      {sub && (
        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="mt-2 text-sm"
          style={{ color: 'var(--text-muted)', paddingLeft: Icon ? '50px' : '0' }}
        >
          {sub}
        </motion.p>
      )}
    </div>
  )
}

import { useRef, useEffect } from 'react'
import { useReducedMotion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionHeading from '../components/SectionHeading'

gsap.registerPlugin(ScrollTrigger)

export default function Education() {
  const cardRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (!cardRef.current) return
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(cardRef.current, { opacity: 1 })
        return
      }

      // Card surfaces from below with a scale + blur reveal
      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          y: 70,
          scale: 0.93,
          filter: 'blur(6px)',
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 1.0,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 82%',
          },
        }
      )

      // Subtle shimmer line across the card on entrance
      const shimmer = cardRef.current.querySelector('.edu-shimmer')
      if (shimmer) {
        gsap.fromTo(
          shimmer,
          { x: '-110%', opacity: 0.6 },
          {
            x: '110%',
            opacity: 0,
            duration: 1.1,
            ease: 'power2.inOut',
            delay: 0.3,
            scrollTrigger: {
              trigger: cardRef.current,
              start: 'top 82%',
            },
          }
        )
      }
    })
    return () => ctx.revert()
  }, [prefersReducedMotion])

  return (
    <section id="education" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading number="05 / Education" icon={GraduationCap}>
          Academic background
        </SectionHeading>

        <div
          ref={cardRef}
          className="relative p-6 rounded-xl border overflow-hidden"
          style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface)', opacity: 0 }}
        >
          {/* Shimmer sweep on entrance */}
          <div
            className="edu-shimmer absolute inset-y-0 w-20 pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, transparent, color-mix(in srgb, var(--accent) 15%, transparent), transparent)',
              zIndex: 1,
            }}
          />

          <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
            <div>
              <h3 className="font-display font-bold text-lg" style={{ color: 'var(--text)' }}>
                Bachelor of Science in Computer Science
              </h3>
              <p className="font-medium text-sm mt-0.5" style={{ color: 'var(--accent)' }}>
                FAST-NUCES, Islamabad, Pakistan
              </p>
            </div>
            <span
              className="font-mono text-xs px-3 py-1 rounded-full border shrink-0"
              style={{ color: 'var(--text-muted)', borderColor: 'var(--border)', backgroundColor: 'var(--surface-2)' }}
            >
              2019 – 2023
            </span>
          </div>

          <div className="flex items-start gap-3 mt-4 pt-4 border-t text-sm" style={{ borderColor: 'var(--border)' }}>
            <span className="shrink-0 mt-[7px] w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
            <span style={{ color: 'var(--text-muted)' }}>
              Teaching Assistant for Computer Networks: held office hours, graded assignments,
              and ran lab sessions for undergraduate students.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

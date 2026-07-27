import { useRef, useEffect } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { Briefcase, Building2 } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionHeading from '../components/SectionHeading'

gsap.registerPlugin(ScrollTrigger)

const jobs = [
  {
    role: 'AI Full Stack Developer',
    org: 'Xperion',
    period: 'Jan 2026 – Present',
    bullets: [
      'Lead full-stack web development and backend architecture, driving software features from initial concept through production deployment.',
      'Manage CI/CD pipelines, cloud deployment workflows, and automated releases to maintain continuous delivery standards.',
      'Lead technical client meetings, present live platform demonstrations, and translate business requirements into technical execution.',
      'Architect web interfaces and database schemas using React and Supabase, setting up LLM observability and monitoring to ensure production stability.',
    ],
  },
  {
    role: 'AI Backend Engineer',
    org: 'Quest',
    period: 'Jul 2024 – Dec 2025',
    bullets: [
      'Architected asynchronous backend services and RESTful APIs to handle concurrent workloads and real-time data streaming.',
      'Developed production-grade LLM workflows, retrieval-augmented generation (RAG) pipelines, and multi-agent graph architectures.',
      'Implemented automated testing, tracing, and evaluation frameworks to monitor service health and ensure low-latency API responses.',
      'Optimized database indexing and vector search performance to ensure fast, reliable retrieval across backend services.',
    ],
  },
  {
    role: 'Python Backend Developer',
    org: 'Codeaza Technologies',
    period: 'Jul 2023 – Jun 2024',
    bullets: [
      'Designed, built, and maintained scalable RESTful APIs and backend services using Python web frameworks.',
      'Engineered automated data pipelines, background worker tasks, and server-side business logic for enterprise clients.',
      'Modeled relational database schemas, optimized complex SQL queries, and managed third-party API integrations.',
      'Participated in system design reviews, technical planning, and CI/CD deployment pipelines across the development lifecycle.',
    ],
  },
]

function JobCard({ job, index }) {
  const cardRef = useRef(null)
  const dotRef = useRef(null)
  const dotInView = useInView(dotRef, { once: true })
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (!cardRef.current) return
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(cardRef.current, { opacity: 1 })
        return
      }
      // Cards rotate in from alternating sides — like pages turning
      const fromX = index % 2 === 0 ? 140 : -140
      const fromRotateY = index % 2 === 0 ? 14 : -14
      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          x: fromX,
          rotateY: fromRotateY,
          transformPerspective: 1000,
          scale: 0.9,
        },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          scale: 1,
          duration: 0.9,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
          },
        }
      )
    })
    return () => ctx.revert()
  }, [index, prefersReducedMotion])

  return (
    <div className="relative pl-8 pb-10 last:pb-0">
      {/* Dot with bounce */}
      <div ref={dotRef} className="absolute left-0 top-1.5 w-3 h-3">
        <motion.div
          initial={prefersReducedMotion ? false : { scale: 0 }}
          animate={dotInView ? { scale: [0, 1.5, 1] } : {}}
          transition={{ type: 'spring', stiffness: 420, damping: 14, delay: index * 0.15 }}
          className="w-3 h-3 rounded-full border-2"
          style={{ borderColor: 'var(--accent)', backgroundColor: 'var(--accent)' }}
        />
      </div>

      {/* Card — animated by GSAP */}
      <div
        ref={cardRef}
        className="p-5 rounded-xl border"
        style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface)', opacity: 0 }}
      >
        <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
          <div>
            <h3 className="font-display font-bold text-lg" style={{ color: 'var(--text)' }}>
              {job.role}
            </h3>
              <p className="font-medium text-sm mt-0.5 flex items-center gap-1.5" style={{ color: 'var(--accent)' }}>
                <Building2 size={14} className="shrink-0" />
                <span>{job.org}</span>
              </p>
          </div>
          <span
            className="font-mono text-xs px-3 py-1 rounded-full border shrink-0"
            style={{ color: 'var(--text-muted)', borderColor: 'var(--border)', backgroundColor: 'var(--surface-2)' }}
          >
            {job.period}
          </span>
        </div>

        <ul className="space-y-2">
          {job.bullets.map((b, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed">
              <span className="shrink-0 mt-[7px] w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
              <span style={{ color: 'var(--text-muted)' }}>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Experience() {
  const lineRef = useRef(null)
  const containerRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  // GSAP scroll-scrubbed timeline line draw
  useEffect(() => {
    if (prefersReducedMotion || !lineRef.current || !containerRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
            scrub: 0.6,
          },
        }
      )
    })
    return () => ctx.revert()
  }, [prefersReducedMotion])

  return (
    <section id="experience" className="py-28 px-6" style={{ backgroundColor: 'var(--surface-2)' }}>
      <div className="max-w-5xl mx-auto">
        <SectionHeading number="04 / Experience" icon={Briefcase}>
          Where I've worked
        </SectionHeading>

        <div ref={containerRef} className="relative">
          {/* Scroll-scrubbed vertical line */}
          <div
            className="absolute w-px"
            style={{
              left: 5,
              top: 6,
              bottom: 0,
              backgroundColor: 'transparent',
            }}
          >
            <div
              ref={lineRef}
              className="absolute inset-0"
              style={{
                backgroundColor: 'var(--accent)',
                transformOrigin: 'top',
                opacity: 0.4,
              }}
            />
          </div>

          {jobs.map((job, i) => (
            <JobCard key={job.org} job={job} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

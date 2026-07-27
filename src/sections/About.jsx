import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { User } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const stats = [
  { value: '3+', label: 'Years in production AI' },
  { value: '8+', label: 'AI systems shipped' },
]

export default function About() {
  const statsRef = useRef(null)
  const inView = useInView(statsRef, { once: true, margin: '-60px 0px' })

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading number="01 / About" icon={User}>
          Building AI systems that work in production
        </SectionHeading>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px 0px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-3 space-y-5"
          >
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Most of my work lives at the intersection of backend engineering, full-stack web development, and production LLM applications. I design and ship high-throughput APIs, multi-agent systems with LangGraph, agentic RAG pipelines, and full-stack enterprise platforms built for scale.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              I have strong opinions about retrieval architecture, agentic multi-hop reasoning, and system observability. I care about software that is maintainable, cost-effective, and actually solves complex operational problems—not just systems that look good in a demo.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              I work best when the problem is hard, the architecture needs depth, and the goal is to build something that actually ships to production.
            </p>
          </motion.div>

          {/* Sidebar */}
          <div ref={statsRef} className="md:col-span-2 grid grid-cols-1 gap-4">
            {/* Two stat cards */}
            {stats.map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="p-6 rounded-xl border"
                style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface)' }}
              >
                <div className="font-display font-extrabold text-4xl mb-1" style={{ color: 'var(--accent)' }}>
                  {value}
                </div>
                <div className="font-mono text-xs uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                  {label}
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}

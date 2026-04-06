import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'



const links = [
  { icon: Mail,     label: 'Email',    display: 'faizanulhassan043@gmail.com',       href: 'mailto:faizanulhassan043@gmail.com' },
  { icon: Github,   label: 'GitHub',   display: 'github.com/faizanulhassan32',        href: 'https://github.com/faizanulhassan32' },
  { icon: Linkedin, label: 'LinkedIn', display: 'linkedin.com/in/faizan-ul-hassan',  href: 'https://linkedin.com/in/faizan-ul-hassan' },
]

// Wiggle keyframes for icon hover
const wiggle = {
  rotate: [-10, 10, -6, 6, 0],
  transition: { duration: 0.38, ease: 'easeInOut' },
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px 0px' })
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="contact" className="py-28 px-6" style={{ backgroundColor: 'var(--surface-2)' }}>
      <div className="max-w-5xl mx-auto">
        <SectionHeading number="06 / Contact" icon={Mail}>
          Let's build something worth shipping.
        </SectionHeading>

        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
          {/* Intro text */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Open to backend and AI engineering roles, contract work, or a conversation about
              retrieval architecture and agent design. Pick the channel that works for you and
              reach out directly.
            </p>
          </motion.div>

          {/* Contact links — spring stagger from below */}
          <div className="space-y-3">
            {links.map(({ icon: Icon, label, display, href }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  type: 'spring',
                  stiffness: 220,
                  damping: 18,
                  delay: i * 0.12,
                }}
                className="contact-link flex items-center gap-4 p-4 rounded-xl border"
                style={{
                  borderColor: 'var(--border)',
                  backgroundColor: 'var(--surface)',
                  textDecoration: 'none',
                }}
              >
                {/* Icon with wiggle on hover */}
                <motion.div
                  whileHover={prefersReducedMotion ? {} : wiggle}
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'var(--surface-2)', color: 'var(--accent)' }}
                >
                  <Icon size={18} />
                </motion.div>

                <div>
                  <p className="font-mono text-xs uppercase tracking-wider mb-0.5" style={{ color: 'var(--text-muted)' }}>
                    {label}
                  </p>
                  <p className="text-sm font-medium" style={{ color: 'var(--text)' }}>
                    {display}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Availability */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-16 pt-8 border-t flex flex-wrap items-center gap-3"
          style={{ borderColor: 'var(--border)' }}
        >
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#4ade80' }} />
          <span className="font-mono text-xs tracking-wider uppercase" style={{ color: 'var(--text-muted)' }}>
            Currently open to new opportunities
          </span>
        </motion.div>
      </div>
    </section>
  )
}

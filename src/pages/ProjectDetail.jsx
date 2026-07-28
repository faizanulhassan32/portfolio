import { useState } from 'react'
import { useParams, Link, Navigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, PlayCircle, CheckCircle2, Lightbulb, Layers, Zap, Lock, AlertTriangle } from 'lucide-react'
import { projects } from '../data/projects'

const pageVariants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.22, ease: 'easeIn' } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function ProjectDetail() {
  const { id } = useParams()
  const location = useLocation()
  const project = projects.find(p => p.id === id)

  if (!project) return <Navigate to="/" replace />

  // Navigate back to the exact project card that was clicked
  const backHash = location.state?.projectId
    ? `#project-${location.state.projectId}`
    : '#projects'

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      {/* Header — logo LEFT, back button RIGHT */}
      <header
        className="sticky top-0 z-50 border-b backdrop-blur-md"
        style={{
          borderColor: 'var(--border)',
          backgroundColor: 'color-mix(in srgb, var(--bg) 85%, transparent)',
        }}
      >
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="font-mono text-sm font-medium tracking-wider"
            style={{ color: 'var(--accent)' }}
          >
            faizan<span style={{ color: 'var(--text-muted)' }}>.dev</span>
          </Link>
          <Link
            to={{ pathname: '/', hash: backHash }}
            state={location.state}
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            <ArrowLeft size={14} />
            Back to portfolio
          </Link>
        </div>
      </header>

      {/* Page content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-12">

          {/* Title block */}
          <motion.div variants={fadeUp}>
            <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>
              {project.tagline}
            </p>
            <h1
              className="font-display font-extrabold text-4xl md:text-5xl leading-tight"
              style={{ color: 'var(--text)' }}
            >
              {project.name}
            </h1>
            <p
              className="mt-4 text-base leading-relaxed"
              style={{ color: 'var(--text-muted)' }}
            >
              {project.description}
            </p>
          </motion.div>

          {/* Problem Solved */}
          {project.problemSolved && (
            <motion.div
              variants={fadeUp}
              className="flex gap-4 p-5 rounded-xl border"
              style={{
                borderColor: 'color-mix(in srgb, var(--accent) 35%, transparent)',
                backgroundColor: 'var(--accent-glow)',
              }}
            >
              <Lightbulb size={18} className="shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} />
              <div>
                <p className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--accent)' }}>
                  Problem Solved
                </p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text)' }}>
                  {project.problemSolved}
                </p>
              </div>
            </motion.div>
          )}

          {/* Tech stack */}
          <motion.div variants={fadeUp}>
            <div className="flex items-center gap-2.5 mb-4">
              <Layers size={16} style={{ color: 'var(--accent)' }} />
              <p className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
                Tech Stack
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map(tech => (
                <span
                  key={tech}
                  className="font-mono text-sm px-3 py-1.5 rounded-md border"
                  style={{
                    borderColor: 'var(--border)',
                    backgroundColor: 'var(--surface)',
                    color: 'var(--text)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="h-px" style={{ backgroundColor: 'var(--border)' }} />

          {/* Highlights + Challenges */}
          <motion.div
            variants={fadeUp}
            className={project.challenges?.length ? 'grid md:grid-cols-2 gap-8 items-start' : ''}
          >
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <CheckCircle2 size={16} style={{ color: 'var(--accent)' }} />
                <p className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
                  Key Highlights
                </p>
              </div>

              {!project.challenges?.length ? (
                /* Two-column layout when no challenges (1-3 left, 4-6 right) */
                (() => {
                  const mid = Math.ceil(project.highlights.length / 2)
                  const leftHighlights = project.highlights.slice(0, mid)
                  const rightHighlights = project.highlights.slice(mid)

                  return (
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 items-start">
                      <div className="space-y-4">
                        {leftHighlights.map((h, i) => (
                          <div key={i} className="flex gap-3 text-sm leading-relaxed">
                            <span
                              className="font-mono text-xs font-bold shrink-0 mt-0.5"
                              style={{ color: 'var(--accent)' }}
                            >
                              {String(i + 1).padStart(2, '0')}.
                            </span>
                            <span style={{ color: 'var(--text-muted)' }}>{h}</span>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-4">
                        {rightHighlights.map((h, i) => (
                          <div key={i} className="flex gap-3 text-sm leading-relaxed">
                            <span
                              className="font-mono text-xs font-bold shrink-0 mt-0.5"
                              style={{ color: 'var(--accent)' }}
                            >
                              {String(mid + i + 1).padStart(2, '0')}.
                            </span>
                            <span style={{ color: 'var(--text-muted)' }}>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })()
              ) : (
                /* Single column layout when challenges exist on the right */
                <div className="space-y-4">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex gap-3 text-sm leading-relaxed">
                      <span
                        className="font-mono text-xs font-bold shrink-0 mt-0.5"
                        style={{ color: 'var(--accent)' }}
                      >
                        {String(i + 1).padStart(2, '0')}.
                      </span>
                      <span style={{ color: 'var(--text-muted)' }}>{h}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {project.challenges?.length > 0 && (
              <div>
                <div className="flex items-center gap-2.5 mb-5">
                  <Zap size={16} style={{ color: 'var(--accent)' }} />
                  <p className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
                    Challenges
                  </p>
                </div>
                <ul className="space-y-4">
                  {project.challenges.map((c, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
                      className="p-4 rounded-lg border text-sm leading-relaxed"
                      style={{
                        borderColor: 'var(--border)',
                        backgroundColor: 'var(--surface)',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {c}
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>

          <motion.div variants={fadeUp} className="h-px" style={{ backgroundColor: 'var(--border)' }} />

          {/* Demo */}
          <motion.div variants={fadeUp}>
            <div className="flex items-center gap-2.5 mb-5">
              <PlayCircle size={16} style={{ color: 'var(--accent)' }} />
              <p className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
                Demo
              </p>
            </div>

            {project.caution && (
              <div
                className="flex gap-3 p-4 mb-4 rounded-lg border text-sm leading-relaxed"
                style={{
                  borderColor: 'var(--border)',
                  backgroundColor: 'var(--surface)',
                  color: 'var(--text-muted)',
                }}
              >
                <AlertTriangle size={16} className="shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} />
                <span>{project.caution}</span>
              </div>
            )}

            {project.videoUrl ? (
              <ConfidentialVideo src={project.videoUrl} />
            ) : (
              <ConfidentialPlaceholder />
            )}
          </motion.div>

        </motion.div>
      </main>
    </motion.div>
  )
}

function ConfidentialVideo({ src }) {
  const [failed, setFailed] = useState(false)

  return failed ? (
    <ConfidentialPlaceholder />
  ) : (
    <div className="rounded-xl overflow-hidden border" style={{ borderColor: 'var(--border)' }}>
      <video
        src={src}
        controls
        className="w-full"
        style={{ display: 'block' }}
        onError={() => setFailed(true)}
      />
    </div>
  )
}

function ConfidentialPlaceholder() {
  return (
    <div
      className="aspect-video rounded-xl border flex flex-col items-center justify-center gap-5"
      style={{
        borderColor: 'color-mix(in srgb, var(--accent) 20%, var(--border))',
        background: `radial-gradient(ellipse at center, var(--accent-glow) 0%, var(--surface) 65%)`,
      }}
    >
      <div
        className="w-16 h-16 rounded-full border-2 flex items-center justify-center"
        style={{
          borderColor: 'color-mix(in srgb, var(--accent) 40%, transparent)',
          backgroundColor: 'var(--accent-glow)',
        }}
      >
        <Lock size={22} style={{ color: 'var(--accent)' }} />
      </div>
      <div className="text-center px-8 max-w-sm">
        <p className="font-mono text-sm font-semibold mb-2" style={{ color: 'var(--text)' }}>
          Demo Restricted
        </p>
        <p className="font-mono text-xs leading-relaxed" style={{ color: 'var(--text-muted)', opacity: 0.75 }}>
          This project was developed under a client confidentiality agreement. A live or recorded
          demo cannot be shared.
        </p>
      </div>
    </div>
  )
}


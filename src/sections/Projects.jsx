import { useRef, useState, useEffect } from 'react'
import { useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, Layers } from 'lucide-react'
import { projects } from '../data/projects'
import SectionHeading from '../components/SectionHeading'

gsap.registerPlugin(ScrollTrigger)

// Generates a deterministic gradient placeholder from the project name
function ImagePlaceholder({ name }) {
  const h1 = (name.charCodeAt(0) * 37) % 360
  const h2 = (h1 + 60) % 360

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-2 select-none"
      style={{
        background: `linear-gradient(135deg,
          hsl(${h1} 30% 18%) 0%,
          hsl(${h2} 25% 12%) 100%)`,
      }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <span
        className="relative font-display font-extrabold text-3xl tracking-tight"
        style={{ color: `hsl(${h1} 70% 70%)`, opacity: 0.7 }}
      >
        {name.split(' ').map(w => w[0]).join('').slice(0, 3)}
      </span>
      <span
        className="relative font-mono text-xs uppercase tracking-widest"
        style={{ color: `hsl(${h1} 50% 60%)`, opacity: 0.5 }}
      >
        preview unavailable
      </span>
    </div>
  )
}

function CardImage({ project }) {
  const [errored, setErrored] = useState(false)

  return (
    <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
      {project.imageUrl && !errored ? (
        <img
          src={project.imageUrl}
          alt={project.name}
          loading="lazy"
          onError={() => setErrored(true)}
          className="w-full h-full object-cover"
          style={{ display: 'block' }}
        />
      ) : (
        <ImagePlaceholder name={project.name} />
      )}
    </div>
  )
}

function ProjectCard({ project, prefersReducedMotion }) {
  const cardRef = useRef(null)

  const handleMouseMove = e => {
    if (prefersReducedMotion || !cardRef.current) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    gsap.to(cardRef.current, {
      rotateX: y * -8,
      rotateY: x * 8,
      scale: 1.02,
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.6,
      ease: 'elastic.out(1, 0.6)',
    })
  }

  return (
    <div
      id={`project-${project.id}`}
      className="project-card-wrapper"
      style={{ perspective: 1000, opacity: 0 }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="project-card flex flex-col rounded-xl border overflow-hidden h-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Thumbnail */}
        <CardImage project={project} />

        {/* Body */}
        <div className="p-5 flex-1">
          <h3 className="font-display font-bold text-base leading-tight mb-1" style={{ color: 'var(--text)' }}>
            {project.name}
          </h3>
          <p className="font-mono text-xs mb-3" style={{ color: 'var(--accent)' }}>
            {project.tagline}
          </p>
          <p className="text-sm leading-relaxed line-clamp-3" style={{ color: 'var(--text-muted)' }}>
            {project.description}
          </p>
        </div>

        {/* Footer */}
        <div className="px-5 py-4 border-t flex items-center justify-between gap-3" style={{ borderColor: 'var(--border)' }}>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 3).map(tech => (
              <span key={tech} className="font-mono text-xs px-2 py-0.5 rounded" style={{ backgroundColor: 'var(--surface-2)', color: 'var(--text-muted)' }}>
                {tech}
              </span>
            ))}
            {project.stack.length > 3 && (
              <span className="font-mono text-xs px-2 py-0.5 rounded" style={{ backgroundColor: 'var(--surface-2)', color: 'var(--text-muted)' }}>
                +{project.stack.length - 3}
              </span>
            )}
          </div>
          <Link
            to={`/projects/${project.id}`}
            state={{ projectId: project.id }}
            className="shrink-0 inline-flex items-center gap-1.5 text-xs font-mono font-medium"
            style={{ color: 'var(--accent)' }}
          >
            Details <ArrowUpRight size={12} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const gridRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (!gridRef.current) return
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set('.project-card-wrapper', { opacity: 1 })
        return
      }
      // Cards fall into place from above with perspective tilt
      gsap.fromTo(
        '.project-card-wrapper',
        {
          opacity: 0,
          y: 90,
          rotateX: -28,
          scale: 0.85,
          transformPerspective: 1200,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 0.9,
          ease: 'expo.out',
          stagger: { each: 0.1, from: 'start' },
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 78%',
          },
        }
      )
    }, gridRef)
    return () => ctx.revert()
  }, [prefersReducedMotion])

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading number="03 / Projects" icon={Layers}>
          Things I've built
        </SectionHeading>

        <div
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} prefersReducedMotion={prefersReducedMotion} />
          ))}
        </div>
      </div>
    </section>
  )
}

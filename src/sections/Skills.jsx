import { useRef, useEffect } from 'react'
import { useReducedMotion } from 'framer-motion'
import { Code2 } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionHeading from '../components/SectionHeading'

gsap.registerPlugin(ScrollTrigger)

const SKILL_MAP = {

  LangChain:          { img: 'https://avatars.githubusercontent.com/u/126733545?s=44&v=4' },
  LangGraph:          { img: 'https://avatars.githubusercontent.com/u/126733545?s=44&v=4' },
  OpenAI:             { img: 'https://www.svgrepo.com/show/306500/openai.svg', invertDark: true },
  'Anthropic Claude': { img: 'https://cdn.simpleicons.org/anthropic', invertDark: true },
  'Google Gemini':    { img: 'https://cdn.simpleicons.org/googlegemini' },
  'AWS Bedrock':      { img: 'https://raw.githubusercontent.com/github/explore/main/topics/aws/aws.png' },
  Ollama:             { img: 'https://avatars.githubusercontent.com/u/151674099?s=44&v=4' },
  Deepgram:           { img: 'https://cdn.simpleicons.org/deepgram/000000', invertDark: true },
  'RAG Systems':  { text: 'RAG' },
  Docling: { img: 'https://raw.githubusercontent.com/docling-project/docling/main/docs/assets/logo.svg' },
  LangSmith:          { img: 'https://avatars.githubusercontent.com/u/126733545?s=44&v=4' },
  'Arize Phoenix': { img: 'https://raw.githubusercontent.com/Arize-ai/phoenix/main/docs/favicon.png' },
  AgentEval:      { text: 'AE' },
  n8n:                { img: 'https://avatars.githubusercontent.com/u/45487711?s=44&v=4' },

  Python:            { devicon: 'devicon-python-plain colored' },
  FastAPI:           { devicon: 'devicon-fastapi-plain colored' },
  Flask:             { devicon: 'devicon-flask-original', invertDark: true },
  JavaScript:        { devicon: 'devicon-javascript-plain colored' },
  'Node.js':         { devicon: 'devicon-nodejs-plain colored' },
  React:             { devicon: 'devicon-react-original colored' },

  PostgreSQL:        { devicon: 'devicon-postgresql-plain colored' },
  MySQL:             { devicon: 'devicon-mysql-plain colored' },
  MongoDB:           { devicon: 'devicon-mongodb-plain colored' },
  Supabase:          { devicon: 'devicon-supabase-plain colored' },
  Elasticsearch:     { devicon: 'devicon-elasticsearch-plain colored' },
  ChromaDB: { img: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/chroma.svg' },
  Pinecone: { img: 'https://cdn.jsdelivr.net/gh/callback-io/allogo@main/public/logos/pinecone/icon.svg' },

  AWS:               { devicon: 'devicon-amazonwebservices-plain-wordmark colored' },
  'Google Cloud':    { devicon: 'devicon-googlecloud-plain colored' },
  DigitalOcean:      { devicon: 'devicon-digitalocean-plain colored' },
  Dokploy: { img: 'https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/svg/dokploy.svg' },
  Docker:            { devicon: 'devicon-docker-plain colored' },
  'Git & GitHub':    { devicon: 'devicon-github-original', invertDark: true },
  'CI/CD':        { text: 'CD' },
  RabbitMQ:          { devicon: 'devicon-rabbitmq-plain colored' },  
}

const rows = [
  {
    label: 'AI & LLM',
    skills: ['LangChain','LangGraph','OpenAI','Anthropic Claude','Google Gemini','AWS Bedrock','Ollama','Deepgram','RAG Systems','Docling','LangSmith','Arize Phoenix','AgentEval','n8n'],
  },
  {
    label: 'Full Stack',
    skills: ['Python','FastAPI','Flask','JavaScript','Node.js','React'],
  },
  {
    label: 'Databases',
    skills: ['PostgreSQL','MySQL','MongoDB','Supabase','Elasticsearch','ChromaDB','Pinecone'],
  },
  {
    label: 'Cloud & DevOps',
    skills: ['AWS','Google Cloud','DigitalOcean','Dokploy','Docker','Git & GitHub','CI/CD','RabbitMQ'],
  },
]

function SkillIcon({ name }) {
  const entry = SKILL_MAP[name] || { text: name.slice(0, 3).toUpperCase() }

  if (entry.devicon) {
    return (
      <i
        className={`${entry.devicon}${entry.invertDark ? ' icon-invert-dark' : ''}`}
        style={{ fontSize: '2.5rem', lineHeight: 1, display: 'block' }}
        aria-label={name}
      />
    )
  }

  if (entry.img) {
    return (
      <img
        src={entry.img}
        alt={name}
        loading="lazy"
        draggable={false}
        className={`rounded-lg object-cover${entry.invertDark ? ' icon-invert-dark' : ''}`}
        style={{ width: 44, height: 44 }}
      />
    )
  }

  return (
    <div
      className="w-11 h-11 rounded-lg border flex items-center justify-center font-mono font-semibold"
      style={{
        borderColor: 'color-mix(in srgb, var(--accent) 50%, transparent)',
        color: 'var(--accent)',
        backgroundColor: 'var(--accent-glow)',
        fontSize: entry.text.length > 3 ? '8px' : entry.text.length > 2 ? '10px' : '12px',
        letterSpacing: '0.02em',
      }}
    >
      {entry.text}
    </div>
  )
}

function SkillItem({ name }) {
  return (
    <div
      className="skill-item flex flex-col items-center gap-2"
      style={{ width: 72, opacity: 0 }}
    >
      <div className="w-11 h-11 flex items-center justify-center">
        <SkillIcon name={name} />
      </div>
      <span
        className="font-mono text-xs text-center leading-tight"
        style={{ color: 'var(--text-muted)', wordBreak: 'break-word' }}
      >
        {name}
      </span>
    </div>
  )
}

export default function Skills() {
  const sectionRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set('.skill-item', { opacity: 1 })
        return
      }

      // Bounce pop-in with stagger
      gsap.fromTo(
        '.skill-item',
        { opacity: 0, scale: 0, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.55,
          ease: 'back.out(2)',
          stagger: { each: 0.04, from: 'start' },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 72%',
          },
          onComplete: () => {
            // After entrance, start a continuous random-phase float
            gsap.to('.skill-item', {
              y: -7,
              duration: 1.6,
              ease: 'sine.inOut',
              yoyo: true,
              repeat: -1,
              stagger: { each: 0.14, from: 'random' },
            })
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [prefersReducedMotion])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-28 px-6"
      style={{ backgroundColor: 'var(--surface-2)' }}
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading number="02 / Skills" icon={Code2}>
          The stack I reach for
        </SectionHeading>

        <div className="space-y-12">
          {rows.map(row => (
            <div key={row.label}>
              {/* Category label */}
              <div className="flex items-center gap-3 mb-6">
                <span style={{ color: 'var(--accent)', fontSize: '0.45rem' }}>◆</span>
                <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
                  {row.label}
                </span>
                <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }} />
              </div>

              {/* Icons */}
              <div className="flex flex-wrap gap-x-6 gap-y-6">
                {row.skills.map(skill => (
                  <SkillItem key={skill} name={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

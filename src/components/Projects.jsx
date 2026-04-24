import { useState } from 'react'
import { PROJECTS } from '../data/constants'
import { Reveal, SectionLabel } from './Shared'

function ProjectCard({ p }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      className="project-card"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ background: hov ? 'rgba(201,168,76,0.03)' : 'var(--navy-mid)' }}
    >
      <div className="project-card__ghost">{p.year.slice(0, 4)}</div>
      <div className="project-card__client">{p.client}</div>
      <div className="project-card__title">{p.title}</div>
      <p className="project-card__desc">{p.desc}</p>
      <span className="tag">{p.tag}</span>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section section--mid">
      <Reveal><SectionLabel text="Signature Projects" /></Reveal>
      <Reveal delay={80}>
        <h2>Work that defines <em>our standard.</em></h2>
      </Reveal>
      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <Reveal key={i} delay={i * 55}>
            <ProjectCard p={p} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

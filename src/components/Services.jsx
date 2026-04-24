import { useState } from 'react'
import { SERVICES } from '../data/constants'
import { Reveal, SectionLabel } from './Shared'

function ServiceCard({ s }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      className="service-card"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ background: hov ? 'rgba(201,168,76,0.025)' : 'transparent' }}
    >
      <div className="service-card__num">{s.num}</div>
      <h3 className="service-card__title">{s.title}</h3>
      <p className="service-card__desc">{s.desc}</p>
      <div className="service-card__tags">
        {s.tags.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="section section--mid">
      <Reveal><SectionLabel text="Core Specializations" /></Reveal>
      <Reveal delay={80}>
        <h2>We do what <em>others cannot.</em></h2>
      </Reveal>
      <div className="services-grid">
        {SERVICES.map((s, i) => (
          <Reveal key={s.num} delay={i * 60}>
            <ServiceCard s={s} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

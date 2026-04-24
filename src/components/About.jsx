import { STATS, CREDENTIALS, CLIENTS } from '../data/constants'
import { Reveal, SectionLabel } from './Shared'

export default function About() {
  return (
    <section id="about" className="section section--dark">
      <div className="two-col">
        {/* Left — story + credentials */}
        <div>
          <Reveal><SectionLabel text="About Us" /></Reveal>
          <Reveal delay={80}><h2>Eight years of <em>earned trust.</em></h2></Reveal>
          <Reveal delay={140}>
            <p style={{ marginTop:'1.2rem' }}>
              Founded in 2017, Shree Radhey Relocation Services was built on a single conviction:
              India's most critical relocations deserve more than generic movers. We specialise where
              precision is irreplaceable — heritage artifacts, industrial machinery, government
              institutions, and international exports.
            </p>
            <p style={{ marginTop:'0.8rem' }}>
              From packing rare sculptures for Rashtrapati Bhawan to maintaining unbroken trust with
              WHO South-East Asia for 8 consecutive years — our work speaks through the institutions
              that keep calling us back.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="cred-list mt-4">
              {CREDENTIALS.map((c, i) => (
                <div key={i} className="cred-item">
                  <div className="cred-item__line" />
                  <div>
                    <div className="cred-item__org">{c.org}</div>
                    <div className="cred-item__desc">{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right — stats + clients */}
        <div>
          <Reveal delay={100}>
            <div className="stats-grid">
              {STATS.map(s => (
                <div
                  key={s.l}
                  className="stat-cell"
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--navy-light)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'var(--navy-mid)'}
                >
                  <div className="stat-cell__n">{s.n}</div>
                  <div className="stat-cell__l">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="clients-box">
              <div className="clients-box__label">Trusted Clients</div>
              <div className="clients-box__tags">
                {CLIENTS.map(c => (
                  <span key={c} className="client-chip">{c}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

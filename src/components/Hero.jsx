import { TRUST_ITEMS } from '../data/constants'

export default function Hero() {
  return (
    <>
      <section id="home" className="hero">
        <div className="hero__bg"   aria-hidden="true" />
        <div className="hero__grid" aria-hidden="true" />
        <div className="hero__vline" aria-hidden="true" />
        <div className="hero__rotated" aria-hidden="true">New Delhi · India · 2017</div>

        <div className="hero__content">
          <div className="hero__eyebrow">
            <div style={{ width:36, height:1, background:'var(--gold)', flexShrink:0 }} />
            <span style={{ fontSize:'0.58rem', letterSpacing:'0.3em', textTransform:'uppercase', color:'var(--gold)' }}>
              Trusted by Governments · MNCs · International Organizations
            </span>
          </div>

          <h1 className="hero__h1">
            When precision is<br />
            <em>non-negotiable</em>
          </h1>

          <div className="hero__h1--large">
            We Relocate<br />the Irreplaceable.
          </div>

          <p className="hero__sub">
            From presidential artifacts and luxury train interiors to industrial plant relocations
            and global exports — trusted by the institutions that can't afford mistakes since 2017.
          </p>

          <div className="hero__ctas">
            <a href="#contact" className="btn btn--gold">Discuss Your Project</a>
            <a href="#estimate" className="btn btn--ghost">Get Instant Estimate</a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="trust-bar">
        <div className="trust-bar__inner">
          {TRUST_ITEMS.map((item, i) => (
            <div key={i} className="trust-item">
              <div className="trust-item__dot" />
              <span className="trust-item__text">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

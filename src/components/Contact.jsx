import { useState } from 'react'
import { CONTACT_INFO, SERVICE_TYPES } from '../data/constants'
import { buildContactWaUrl } from '../utils/whatsapp'
import { Reveal, SectionLabel, WaIcon } from './Shared'

export default function Contact() {
  const [form, setForm] = useState({
    name:'', org:'', phone:'', email:'',
    service:'', from:'', to:'', date:'', notes:''
  })
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const inp = (placeholder, key, type = 'text') => (
    <input
      className="field"
      type={type}
      placeholder={placeholder}
      value={form[key]}
      onChange={e => set(key, e.target.value)}
    />
  )

  const waUrl = buildContactWaUrl(form)

  return (
    <section id="contact" className="section section--light">
      <div className="contact-grid">
        {/* Info column */}
        <div>
          <Reveal><SectionLabel text="Contact Us" /></Reveal>
          <Reveal delay={80}>
            <h2>Let's discuss your <em>relocation.</em></h2>
          </Reveal>
          <Reveal delay={140}>
            <p style={{ marginTop:'1rem', maxWidth:340 }}>
              We handle industrial, government, corporate, and export relocations.
              Fill in your details and we'll respond promptly.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div style={{ marginTop:'2rem' }}>
              {CONTACT_INFO.map((r, i) => (
                <div key={i} className="contact-info-row">
                  <span className="contact-info-row__label">{r.label}</span>
                  <span className="contact-info-row__val">{r.value}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Form column */}
        <Reveal delay={160}>
          <div className="field-group">
            <div className="field-row">
              {inp('Full Name *',   'name')}
              {inp('Organisation', 'org')}
            </div>
            <div className="field-row">
              {inp('Phone *', 'phone', 'tel')}
              {inp('Email',   'email', 'email')}
            </div>

            <select
              className="field"
              value={form.service}
              onChange={e => set('service', e.target.value)}
              style={{ color: form.service ? 'var(--white)' : 'var(--muted)' }}
            >
              <option value="">Service Type</option>
              {SERVICE_TYPES.map(o => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>

            <div className="field-row">
              {inp('Moving From', 'from')}
              {inp('Moving To',   'to')}
            </div>

            {inp('Preferred Date', 'date', 'date')}

            <textarea
              className="field"
              rows={4}
              placeholder="Project details — scale, special requirements, timeline..."
              value={form.notes}
              onChange={e => set('notes', e.target.value)}
            />

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--wa"
            >
              <WaIcon /> Send via WhatsApp
            </a>

            <p style={{ fontSize:'0.65rem', textAlign:'center', color:'var(--muted)', opacity:0.5, marginTop:'-0.3rem' }}>
              Your details will be sent directly to our WhatsApp. We respond within the hour.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

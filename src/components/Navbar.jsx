import { useState, useEffect } from 'react'
import { NAV_LINKS } from '../data/constants'
import { WaIcon } from './Shared'
import { YOUR_WA_NUMBER } from '../data/constants'

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [activeSection, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      // Highlight active nav link
      const ids = NAV_LINKS.map(l => l.toLowerCase())
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(ids[i]); break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (link) => {
    setMenuOpen(false)
    const el = document.getElementById(link.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
        {/* Logo */}
        <div>
          <div className="nav__logo-main">Shree Radhey</div>
          <div className="nav__logo-sub">Relocation Services · Est. 2017</div>
        </div>

        {/* Desktop links */}
        <ul className="nav__links">
          {NAV_LINKS.map(link => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={activeSection === link.toLowerCase() ? 'active' : ''}
                onClick={e => { e.preventDefault(); handleNavClick(link) }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          className="nav__cta btn btn--sm btn--gold"
          href={`https://wa.me/${YOUR_WA_NUMBER}?text=${encodeURIComponent('Hello! I would like a quote for my relocation.')}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Quote
        </a>

        {/* Hamburger */}
        <button
          className={`nav__hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile fullscreen menu */}
      {menuOpen && (
        <div className="nav__mobile-menu">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={e => { e.preventDefault(); handleNavClick(link) }}
              style={{ animationDelay: `${i * 60}ms`, animation: 'fadeUp 0.4s ease both' }}
            >
              {link}
            </a>
          ))}
          <a
            href={`https://wa.me/${YOUR_WA_NUMBER}?text=${encodeURIComponent('Hello! I would like a quote for my relocation.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--gold mt-3"
            onClick={() => setMenuOpen(false)}
            style={{ fontSize:'0.72rem' }}
          >
            <WaIcon /> WhatsApp Us
          </a>
        </div>
      )}
    </>
  )
}

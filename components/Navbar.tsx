'use client'

import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'The Estate', href: '#villa' },
  { label: 'Experiences', href: '#experience' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Location', href: '#location' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const textColor = scrolled ? 'var(--color-obsidian)' : 'rgba(255,255,255,0.85)'

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        padding: '0 clamp(1.5rem, 4vw, 3.5rem)',
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(250,250,248,0.95)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(200,169,110,0.15)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(18px)' : 'none',
        transition: 'background 0.55s var(--ease-luxury), border-color 0.55s var(--ease-luxury), backdrop-filter 0.55s',
      }}>
        <a href="#home" style={{
          fontFamily: 'var(--font-cormorant)',
          fontWeight: 400,
          fontSize: '1.1rem',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: textColor,
          textDecoration: 'none',
          transition: 'color 0.4s ease',
          lineHeight: 1,
          flexShrink: 0,
        }}>
          Ylang Ylang
        </a>

        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="yl-desktop-nav">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 300,
                fontSize: '0.58rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: textColor,
                textDecoration: 'none',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-gold)')}
              onMouseLeave={e => (e.currentTarget.style.color = textColor)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <a
            href="#booking"
            className="yl-desktop-nav"
            style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 400,
              fontSize: '0.55rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: textColor,
              textDecoration: 'none',
              border: `1px solid ${scrolled ? 'rgba(26,26,26,0.4)' : 'rgba(255,255,255,0.4)'}`,
              padding: '0.65rem 1.5rem',
              transition: 'all 0.35s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--color-gold)'
              e.currentTarget.style.borderColor = 'var(--color-gold)'
              e.currentTarget.style.color = '#fff'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = scrolled ? 'rgba(26,26,26,0.4)' : 'rgba(255,255,255,0.4)'
              e.currentTarget.style.color = textColor
            }}
          >
            Reserve
          </a>

          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            style={{
              background: 'none',
              border: 'none',
              padding: '4px 0',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              alignItems: 'flex-end',
              width: '26px',
              cursor: 'pointer',
            }}
            className="yl-hamburger"
          >
            {[0, 1, 2].map(i => (
              <span
                key={i}
                style={{
                  display: 'block',
                  height: '1px',
                  background: textColor,
                  transition: 'all 0.4s var(--ease-luxury)',
                  width: i === 1 ? (menuOpen ? '100%' : '65%') : '100%',
                  opacity: i === 1 && menuOpen ? 0 : 1,
                  transform: i === 0 && menuOpen
                    ? 'translateY(6px) rotate(45deg)'
                    : i === 2 && menuOpen
                    ? 'translateY(-6px) rotate(-45deg)'
                    : 'none',
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999,
        background: 'var(--color-ink)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
        opacity: menuOpen ? 1 : 0,
        visibility: menuOpen ? 'visible' : 'hidden',
        transition: 'opacity 0.5s var(--ease-luxury), visibility 0.5s',
        pointerEvents: menuOpen ? 'all' : 'none',
      }}>
        <div className="label-caps" style={{ color: 'var(--color-gold)', marginBottom: '0.5rem' }}>
          Villa Ylang Ylang
        </div>

        {[...NAV_LINKS, { label: 'Book a Stay', href: '#booking' }, { label: 'Contact', href: '#contact' }].map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 300,
              fontSize: 'clamp(2rem, 8vw, 3.5rem)',
              color: '#fff',
              textDecoration: 'none',
              letterSpacing: '0.04em',
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(18px)',
              transition: `opacity 0.55s ease ${0.08 + i * 0.07}s, transform 0.55s var(--ease-reveal) ${0.08 + i * 0.07}s, color 0.25s ease`,
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-gold)')}
            onMouseLeave={e => (e.currentTarget.style.color = '#fff')}
          >
            {link.label}
          </a>
        ))}

        <div style={{ height: '1px', width: '40px', background: 'rgba(200,169,110,0.35)', marginTop: '1rem' }} />
        <div className="label-caps" style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.48rem' }}>
          Bali · Indonesia
        </div>
      </div>

      <style>{`
        @media (min-width: 769px) {
          .yl-hamburger { display: none !important; }
        }
        @media (max-width: 768px) {
          .yl-desktop-nav { display: none !important; }
        }
      `}</style>
    </>
  )
}

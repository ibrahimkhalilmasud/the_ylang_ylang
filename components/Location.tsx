'use client'

import { useEffect, useRef, useState } from 'react'

const IconTemple = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 22h18M6 18V9M18 18V9M12 18V9M12 3l9 6H3l9-6z"/>
  </svg>
)
const IconShop = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>
)
const IconDrink = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 22h8M12 11v11M3 3h18l-3 9H6L3 3z"/>
  </svg>
)
const IconPlane = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 19.5 2.5S18 2 16.5 3.5L13 7 4.8 5.2A.9.9 0 0 0 4 7l6 5.3-1.7 3.5a.9.9 0 0 0 1.3 1.2L13 14l5.3 6a.9.9 0 0 0 1.5-.2l.1-.2a.9.9 0 0 0-.1-.6z"/>
  </svg>
)
const IconNature = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8C8 10 5.9 16.17 3.82 19.92L3 21"/>
    <path d="M9.06 11.9C8.03 14.65 8 17.3 9 19"/>
    <path d="M20 4C17.29 4.05 15 6 14 8c-3.44 4-1.3 8.03 0 10.35"/>
    <path d="M14 10C10.34 8.32 8.17 11.56 8 14"/>
  </svg>
)
const IconSurf = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 20c2-4 6-4 10 0s8 4 10 0"/>
    <path d="M2 15c2-4 6-4 10 0s8 4 10 0"/>
    <circle cx="16" cy="6" r="2"/>
    <path d="M12 8 9 20"/>
  </svg>
)

const nearbyAttractions = [
  { name: 'Tanah Lot Temple', distance: '25 min drive', icon: <IconTemple /> },
  { name: 'Seminyak Village', distance: '15 min drive', icon: <IconShop /> },
  { name: 'Potato Head Beach Club', distance: '10 min drive', icon: <IconDrink /> },
  { name: 'Ngurah Rai Airport', distance: '35 min drive', icon: <IconPlane /> },
  { name: 'Ubud Cultural District', distance: '1 hr drive', icon: <IconNature /> },
  { name: 'Private Surf Breaks', distance: 'Beachfront', icon: <IconSurf /> },
]

export default function Location() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="location" ref={ref} style={{ background: 'var(--color-sand)', padding: '8rem 2rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

        <div style={{
          marginBottom: '5rem',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(36px)',
          transition: 'opacity 0.9s var(--ease-reveal), transform 0.9s var(--ease-reveal)',
        }}>
          <div className="label-caps" style={{ color: 'var(--color-gold)', marginBottom: '1.25rem' }}>Location</div>
          <h2 className="heading-display" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', color: 'var(--color-obsidian)', maxWidth: '600px' }}>
            Bali&apos;s Most<br />Coveted Shore
          </h2>
          <div style={{ height: '1px', width: '40px', background: 'var(--color-gold)', margin: '2rem 0' }} />
          <p className="body-light" style={{ color: '#666', fontSize: '0.9rem', maxWidth: '460px' }}>
            Positioned on a quiet stretch of Bali&apos;s west coast, Villa Ylang Ylang offers the seclusion of a private island with the convenience of a world-class destination.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(360px, 100%), 1fr))',
          gap: '2.5rem',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.9s var(--ease-luxury) 0.25s',
        }}>

          <div style={{
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid rgba(200,169,110,0.2)',
            minHeight: '440px',
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15768.55174540855!2d115.0803!3d-8.6843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2433da0e97eaf%3A0xb8d6a2c9a8f97e45!2sCanggu%2C%20Bali!5e0!3m2!1sen!2sid!4v1701234567890!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '440px', display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Villa Ylang Ylang Location"
            />
            <div style={{
              position: 'absolute',
              bottom: '1.5rem',
              left: '1.5rem',
              background: 'rgba(13,13,13,0.88)',
              backdropFilter: 'blur(12px)',
              padding: '1rem 1.5rem',
              border: '1px solid rgba(200,169,110,0.3)',
            }}>
              <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1rem', color: '#fff', marginBottom: '4px', fontWeight: 400 }}>
                Villa Ylang Ylang
              </div>
              <div className="label-caps" style={{ color: 'var(--color-gold)', fontSize: '0.5rem' }}>
                Bali · Indonesia · Beachfront
              </div>
            </div>
          </div>

          <div>
            <div className="label-caps" style={{ color: 'var(--color-gold)', marginBottom: '2rem' }}>Nearby</div>

            {nearbyAttractions.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1.1rem 0',
                  borderBottom: '1px solid rgba(200,169,110,0.15)',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateX(0)' : 'translateX(-16px)',
                  transition: `opacity 0.7s var(--ease-reveal) ${0.3 + i * 0.06}s, transform 0.7s var(--ease-reveal) ${0.3 + i * 0.06}s`,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ color: 'var(--color-gold)', display: 'flex', alignItems: 'center' }}>{item.icon}</span>
                  <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.85rem', color: 'var(--color-obsidian)' }}>
                    {item.name}
                  </span>
                </div>
                <span className="label-caps" style={{ color: '#aaa', fontSize: '0.5rem', whiteSpace: 'nowrap' }}>
                  {item.distance}
                </span>
              </div>
            ))}

            <div style={{
              marginTop: '2.5rem',
              background: 'var(--color-obsidian)',
              padding: '2rem',
              border: '1px solid rgba(200,169,110,0.15)',
            }}>
              <div className="label-caps" style={{ color: 'var(--color-gold)', marginBottom: '1rem' }}>Getting Here</div>
              <p className="body-light" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.85 }}>
                Bali&apos;s Ngurah Rai International Airport (DPS) is served by major international carriers from Singapore, Hong Kong, Sydney, Tokyo, Dubai, and London. Private airport transfers available upon request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

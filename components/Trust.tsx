'use client'

import { useEffect, useRef, useState } from 'react'

const reviews = [
  {
    quote: 'The most extraordinary villa we have ever stayed in. Waking to the sound of waves with no one else around — absolute perfection.',
    author: 'Charlotte M.',
    origin: 'London, UK',
  },
  {
    quote: 'Every detail was considered. The staff were impeccable, the food exceptional, and the views took our breath away each morning.',
    author: 'Jean-Pierre L.',
    origin: 'Paris, France',
  },
  {
    quote: 'We celebrated our anniversary here and it exceeded every expectation. Private, peaceful, and utterly luxurious. We will return.',
    author: 'Priya & Arjun S.',
    origin: 'Singapore',
  },
]

const press = [
  'Condé Nast Traveller',
  'Forbes Travel',
  'Airbnb Luxe',
  'Tatler',
  'Vogue Living',
]

const trustPillars = [
  {
    label: 'Entire Villa',
    sub: 'No shared spaces',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5L12 3l9 6.5V21H3V9.5z"/>
        <rect x="9" y="14" width="6" height="7" rx="0.5"/>
      </svg>
    ),
  },
  {
    label: 'Beachfront',
    sub: 'Direct ocean access',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 18c2-4 6-4 10 0s8 4 10 0"/>
        <path d="M2 13c2-4 6-4 10 0s8 4 10 0"/>
      </svg>
    ),
  },
  {
    label: 'Fully Exclusive',
    sub: 'Maximum 8 guests',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="3"/>
        <path d="M3 21v-2a5 5 0 0 1 5-5h2"/>
        <circle cx="17" cy="11" r="3"/>
        <path d="M21 21v-2a5 5 0 0 0-4-4.9"/>
      </svg>
    ),
  },
  {
    label: '5-Star Rated',
    sub: '47 verified reviews',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    label: 'Discreet Booking',
    sub: 'Privacy guaranteed',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
  },
]

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.08 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return { ref, visible }
}

export default function Trust() {
  const { ref, visible } = useReveal()

  return (
    <section ref={ref} style={{ background: 'var(--color-obsidian)', padding: '8rem 2rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

        {/* Press strip */}
        <div style={{
          textAlign: 'center',
          marginBottom: '6rem',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(32px)',
          transition: 'opacity 0.9s var(--ease-reveal), transform 0.9s var(--ease-reveal)',
        }}>
          <div className="label-caps" style={{ color: 'rgba(255,255,255,0.3)', marginBottom: '2.5rem' }}>
            As featured in
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 'clamp(2rem, 5vw, 4.5rem)',
          }}>
            {press.map((name, i) => (
              <div
                key={i}
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  fontSize: 'clamp(1rem, 2vw, 1.4rem)',
                  color: 'rgba(255,255,255,0.22)',
                  letterSpacing: '0.04em',
                  transition: 'color 0.4s ease',
                  cursor: 'default',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(200,169,110,0.65)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.22)')}
              >
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* Featured quote */}
        <div style={{
          background: 'rgba(200,169,110,0.06)',
          border: '1px solid rgba(200,169,110,0.14)',
          padding: 'clamp(3rem, 6vw, 5rem)',
          textAlign: 'center',
          marginBottom: '6rem',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.9s var(--ease-reveal) 0.15s',
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '4px',
            marginBottom: '2.5rem',
          }}>
            {[...Array(5)].map((_, s) => (
              <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="var(--color-gold)" stroke="none">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            ))}
          </div>
          <blockquote style={{
            fontFamily: 'var(--font-cormorant)',
            fontWeight: 300,
            fontStyle: 'italic',
            fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
            color: '#fff',
            lineHeight: 1.45,
            marginBottom: '2rem',
          }}>
            &ldquo;There are places that meet expectation, and then there is Villa Ylang Ylang — a rare world apart, where every detail whispers of the extraordinary.&rdquo;
          </blockquote>
          <div style={{ height: '1px', width: '40px', background: 'var(--color-gold)', margin: '0 auto 1.25rem' }} />
          <div style={{
            fontFamily: 'var(--font-inter)',
            fontWeight: 400,
            fontSize: '0.75rem',
            color: 'rgba(255,255,255,0.5)',
            letterSpacing: '0.08em',
          }}>
            — Condé Nast Traveller, 2024
          </div>
        </div>

        {/* Review Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginBottom: '6rem',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.9s var(--ease-reveal) 0.25s',
        }}>
          {reviews.map((r, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(255,255,255,0.03)',
                padding: '2.5rem 2rem',
                borderTop: '1px solid rgba(200,169,110,0.35)',
                border: '1px solid rgba(200,169,110,0.1)',
                borderTopColor: 'rgba(200,169,110,0.35)',
              }}
            >
              <div style={{ display: 'flex', gap: '4px', marginBottom: '1.5rem' }}>
                {[...Array(5)].map((_, s) => (
                  <svg key={s} width="12" height="12" viewBox="0 0 24 24" fill="var(--color-gold)" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
              <blockquote style={{
                fontFamily: 'var(--font-cormorant)',
                fontWeight: 300,
                fontStyle: 'italic',
                fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                color: '#fff',
                lineHeight: 1.6,
                marginBottom: '1.5rem',
              }}>
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <div style={{ height: '1px', width: '24px', background: 'var(--color-gold)', marginBottom: '1rem' }} />
              <div style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '0.78rem', color: 'rgba(255,255,255,0.7)' }}>
                {r.author}
              </div>
              <div className="label-caps" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.5rem', marginTop: '3px' }}>
                {r.origin}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Pillars */}
        <div style={{
          borderTop: '1px solid rgba(200,169,110,0.12)',
          paddingTop: '4rem',
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 'clamp(2.5rem, 6vw, 5rem)',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.9s var(--ease-reveal) 0.35s',
        }}>
          {trustPillars.map((p, i) => (
            <div key={i} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.75rem',
              minWidth: '100px',
            }}>
              <div style={{ color: 'var(--color-gold)' }}>{p.icon}</div>
              <div style={{
                fontFamily: 'var(--font-cormorant)',
                fontWeight: 300,
                fontSize: '0.95rem',
                color: '#fff',
                textAlign: 'center',
              }}>
                {p.label}
              </div>
              <div className="label-caps" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.48rem', textAlign: 'center' }}>
                {p.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

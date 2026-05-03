'use client'

import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [phase, setPhase] = useState<'visible' | 'fading' | 'gone'>('visible')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('fading'), 2400)
    const t2 = setTimeout(() => setPhase('gone'), 3200)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (phase === 'gone') return null

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        background: 'var(--color-ink)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.75rem',
        opacity: phase === 'fading' ? 0 : 1,
        transition: 'opacity 0.85s cubic-bezier(0.25, 0.1, 0.25, 1)',
        pointerEvents: phase === 'fading' ? 'none' : 'all',
      }}
    >
      {/* Location label */}
      <div style={{
        fontFamily: 'var(--font-inter)',
        fontWeight: 300,
        fontSize: '0.5rem',
        letterSpacing: '0.55em',
        textTransform: 'uppercase',
        color: 'var(--color-gold-dim)',
        animation: 'loadReveal 0.9s var(--ease-reveal) 0.3s both',
      }}>
        Bali · Indonesia
      </div>

      {/* Villa name */}
      <div style={{
        fontFamily: 'var(--font-cormorant)',
        fontWeight: 300,
        fontSize: 'clamp(2.2rem, 5.5vw, 4rem)',
        color: '#fff',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        textAlign: 'center',
        animation: 'loadReveal 1.1s var(--ease-reveal) 0.55s both',
      }}>
        Villa Ylang Ylang
      </div>

      {/* Gold line */}
      <div style={{
        height: '1px',
        background: 'var(--color-gold)',
        animation: 'loadLine 1.2s var(--ease-reveal) 1.1s both',
      }} />

      {/* Tagline */}
      <div style={{
        fontFamily: 'var(--font-inter)',
        fontWeight: 300,
        fontSize: '0.55rem',
        letterSpacing: '0.35em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.3)',
        animation: 'loadReveal 1s var(--ease-luxury) 1.5s both',
      }}>
        Private Beachfront Sanctuary
      </div>
    </div>
  )
}

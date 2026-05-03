'use client'

import { useState, useEffect } from 'react'

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href="https://wa.me/6281234567890?text=Hello%2C%20I'm%20interested%20in%20reserving%20Villa%20Ylang%20Ylang."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact via WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 9000,
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        background: 'rgba(13,13,13,0.92)',
        border: '1px solid rgba(200,169,110,0.35)',
        padding: '0.85rem 1.1rem',
        transition: 'all 0.45s var(--ease-luxury)',
        textDecoration: 'none',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        boxShadow: hovered ? '0 8px 40px rgba(0,0,0,0.4)' : '0 4px 20px rgba(0,0,0,0.25)',
        backdropFilter: 'blur(14px)',
      }}
    >
      <svg
        width="18" height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
      <span style={{
        fontFamily: 'var(--font-inter)',
        fontWeight: 300,
        fontSize: '0.58rem',
        letterSpacing: '0.25em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.7)',
        whiteSpace: 'nowrap',
        maxWidth: hovered ? '100px' : '0',
        overflow: 'hidden',
        opacity: hovered ? 1 : 0,
        transition: 'max-width 0.4s var(--ease-luxury), opacity 0.3s ease',
      }}>
        Concierge
      </span>
    </a>
  )
}

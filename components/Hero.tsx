'use client'

import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (videoRef.current) {
        videoRef.current.style.transform = `translateY(${y * 0.35}px)`
      }
      if (contentRef.current) {
        contentRef.current.style.transform = `translateY(${y * 0.18}px)`
        contentRef.current.style.opacity = `${1 - y / 600}`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        height: '100dvh',
        minHeight: '700px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <video
        ref={videoRef}
        src="/hero.mp4"
        autoPlay muted loop playsInline
        onCanPlay={() => setVideoLoaded(true)}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '115%',
          objectFit: 'cover',
          objectPosition: 'center',
          opacity: videoLoaded ? 1 : 0,
          transition: 'opacity 1.8s ease',
          willChange: 'transform',
        }}
      />

      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/images/beach-sunset.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: videoLoaded ? 0 : 1,
        transition: 'opacity 1.8s ease',
      }} />

      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(13,13,13,0.25) 0%, rgba(13,13,13,0.08) 45%, rgba(13,13,13,0.7) 100%)',
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to right, rgba(13,13,13,0.55) 0%, rgba(13,13,13,0.2) 55%, transparent 100%)',
      }} />

      <div
        ref={contentRef}
        style={{
          position: 'relative',
          zIndex: 2,
          padding: '0 clamp(1.75rem, 6vw, 7rem)',
          maxWidth: '780px',
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(28px)',
          transition: 'opacity 1.4s var(--ease-reveal) 0.4s, transform 1.4s var(--ease-reveal) 0.4s',
          willChange: 'transform, opacity',
        }}
      >
        <div
          className="label-caps"
          style={{
            color: 'var(--color-gold)',
            marginBottom: '2rem',
            opacity: mounted ? 1 : 0,
            animation: mounted ? 'fadeUp 1s var(--ease-reveal) 0.6s both' : 'none',
          }}
        >
          Bali · Indonesia · Beachfront
        </div>

        <h1
          className="heading-display"
          style={{
            fontSize: 'clamp(2.4rem, 10vw, 7.5rem)',
            color: '#fff',
            marginBottom: '1.75rem',
            textShadow: '0 4px 60px rgba(0,0,0,0.2)',
            animation: mounted ? 'fadeUp 1.2s var(--ease-reveal) 0.8s both' : 'none',
          }}
        >
          Where the Ocean<br />
          <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.9)' }}>Belongs to You</em>
        </h1>

        <div style={{
          height: '1px',
          background: 'var(--color-gold)',
          marginBottom: '1.75rem',
          animation: mounted ? 'lineGrow 1.2s var(--ease-reveal) 1.1s both' : 'none',
          transformOrigin: 'left',
        }} />

        <p
          className="body-light"
          style={{
            color: 'rgba(255,255,255,0.72)',
            fontSize: 'clamp(0.85rem, 1.6vw, 1rem)',
            maxWidth: '440px',
            marginBottom: '3rem',
            animation: mounted ? 'fadeUp 1s var(--ease-reveal) 1.2s both' : 'none',
          }}
        >
          Four bedrooms. Direct ocean access. Entirely private.
          A sanctuary crafted for those who demand the extraordinary.
        </p>

        <div style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          animation: mounted ? 'fadeUp 1s var(--ease-reveal) 1.4s both' : 'none',
        }}>
          <a href="#booking" className="btn-gold">Reserve a Stay</a>
          <a href="#villa" className="btn-ghost-white">Explore the Villa</a>
        </div>
      </div>

      <div style={{
        position: 'absolute',
        right: 'clamp(1.5rem, 3vw, 3rem)',
        bottom: '3rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.75rem',
        opacity: mounted ? 0.55 : 0,
        transition: 'opacity 1s ease 2s',
      }}>
        <div style={{
          writingMode: 'vertical-rl',
          fontFamily: 'var(--font-inter)',
          fontWeight: 300,
          fontSize: '0.48rem',
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color: '#fff',
        }}>
          Scroll
        </div>
        <div style={{
          width: '1px',
          height: '60px',
          background: 'linear-gradient(to bottom, rgba(200,169,110,0.8), transparent)',
          animation: 'bounceDown 2.2s ease infinite',
        }} />
      </div>

      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'rgba(13,13,13,0.72)',
        backdropFilter: 'blur(16px)',
        borderTop: '1px solid rgba(200,169,110,0.18)',
        padding: '1.5rem 2rem',
        zIndex: 2,
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          gap: 'clamp(1rem, 5vw, 6rem)',
          flexWrap: 'wrap',
        }}>
          {[
            { num: '4', label: 'Bedrooms' },
            { num: '4', label: 'Bathrooms' },
            { num: '8', label: 'Guests Max' },
            { num: '∞', label: 'Ocean Views' },
            { num: '100%', label: 'Private' },
          ].map(stat => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'var(--font-cormorant)',
                fontWeight: 300,
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                color: 'var(--color-gold)',
                lineHeight: 1,
              }}>
                {stat.num}
              </div>
              <div className="label-caps" style={{ color: 'rgba(255,255,255,0.45)', marginTop: '5px', fontSize: '0.5rem' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

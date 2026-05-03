'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'

const galleryImages = [
  { src: '/images/facade.jpg',           alt: 'Villa facade — queenly beachfront presence',  span: 2 },
  { src: '/images/living-area.jpg',      alt: 'Open-plan living area' },
  { src: '/images/pool-deck.jpg',        alt: 'Infinity pool decks' },
  { src: '/images/master-suite.jpg',     alt: 'Master suite' },
  { src: '/images/outdoor-layout.jpg',   alt: 'Outdoor layout and terrace',                  span: 2 },
  { src: '/images/dining.jpg',           alt: 'Private dining' },
  { src: '/images/sunken-bathtub.jpg',   alt: 'Sunken bathtub' },
  { src: '/images/beach-deck.jpg',       alt: 'Beach deck' },
  { src: '/images/kitchen.jpg',          alt: 'Equipped kitchen' },
  { src: '/images/villa-lawn.jpg',       alt: 'Villa from the lawn',                         span: 2 },
  { src: '/images/master-suite-night.jpg', alt: 'Master suite at night' },
  { src: '/images/media-room.jpg',       alt: 'Media room' },
  { src: '/images/master-turndown.jpg',  alt: 'Master suite at turndown' },
  { src: '/images/twin-guestroom.jpg',   alt: 'Twin guest room' },
  { src: '/images/beach-sunset.jpg',     alt: 'Sunset from the beach deck',                  span: 2 },
]

function GalleryItem({
  img,
  index,
  onClick,
}: {
  img: (typeof galleryImages)[0]
  index: number
  onClick: (i: number) => void
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onClick={() => onClick(index)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        height: '240px',
        overflow: 'hidden',
        cursor: 'zoom-in',
        gridColumn: img.span === 2 ? 'span 2' : 'span 1',
        background: '#e5dfd7',
      }}
    >
      {/* Image with scale on hover */}
      <Image
        src={img.src}
        alt={img.alt}
        fill
        style={{
          objectFit: 'cover',
          transition: 'transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          transform: hovered ? 'scale(1.07)' : 'scale(1)',
        }}
        sizes="(max-width: 640px) 50vw, (max-width: 1200px) 25vw, 350px"
      />

      {/* Dark overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: hovered ? 'rgba(26,26,26,0.3)' : 'rgba(26,26,26,0)',
        transition: 'background 0.4s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* Expand icon */}
        <div style={{
          width: '40px',
          height: '40px',
          border: '1px solid rgba(255,255,255,0.8)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'scale(1)' : 'scale(0.7)',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
        }}>
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="white" strokeWidth="1.5">
            <path d="M1 1h4M1 1v4M12 1h-4M12 1v4M1 12h4M1 12v-4M12 12h-4M12 12v-4" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [lightbox, setLightbox] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const closeLightbox = useCallback(() => setLightbox(null), [])
  const prev = useCallback(() => {
    setLightbox(l => l !== null ? (l - 1 + galleryImages.length) % galleryImages.length : null)
  }, [])
  const next = useCallback(() => {
    setLightbox(l => l !== null ? (l + 1) % galleryImages.length : null)
  }, [])

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox, closeLightbox, prev, next])

  return (
    <>
      <section id="gallery" ref={ref} style={{ background: 'var(--color-sand)', padding: '7rem 2rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

          {/* Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: '4rem',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}>
            <div className="label-caps" style={{ color: 'var(--color-gold)', marginBottom: '1rem' }}>Gallery</div>
            <h2 className="heading-display" style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: 'var(--color-obsidian)',
            }}>
              See the Villa
            </h2>
            <p className="body-light" style={{ color: '#777', fontSize: '0.85rem', marginTop: '1rem' }}>
              Click any image to explore in full
            </p>
          </div>

          {/* Grid */}
          <div
            className="gallery-grid-main"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '6px',
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.8s ease 0.2s',
            }}
          >
            {galleryImages.map((img, i) => (
              <GalleryItem key={i} img={img} index={i} onClick={setLightbox} />
            ))}
          </div>
          <style>{`
            @media (max-width: 768px) {
              .gallery-grid-main { grid-template-columns: repeat(2, 1fr) !important; }
            }
            @media (max-width: 480px) {
              .gallery-grid-main { grid-template-columns: repeat(2, 1fr) !important; }
              .gallery-grid-main [style*="span 2"] { grid-column: span 2 !important; }
            }
          `}</style>

          {/* View all link */}
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href="#booking" className="btn-ghost-dark" style={{ fontSize: '0.6rem' }}>
              Reserve a Private Viewing
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          onClick={closeLightbox}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(0,0,0,0.96)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Image container */}
          <div
            onClick={e => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '90vw',
              height: '85vh',
              maxWidth: '1200px',
            }}
          >
            <Image
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].alt}
              fill
              style={{ objectFit: 'contain' }}
              sizes="90vw"
              priority
            />
          </div>

          {/* Close button */}
          <button
            onClick={closeLightbox}
            aria-label="Close lightbox"
            style={{
              position: 'fixed', top: '1.5rem', right: '1.5rem',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.25)',
              color: '#fff', width: '44px', height: '44px',
              cursor: 'pointer', fontSize: '1.4rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderRadius: '50%', lineHeight: 1,
            }}
          >
            ×
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label="Previous image"
            style={{
              position: 'fixed', left: '1.25rem', top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff', width: '48px', height: '48px',
              cursor: 'pointer', fontSize: '1.5rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            ‹
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="Next image"
            style={{
              position: 'fixed', right: '1.25rem', top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff', width: '48px', height: '48px',
              cursor: 'pointer', fontSize: '1.5rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            ›
          </button>

          {/* Caption */}
          <div style={{
            position: 'fixed', bottom: '2.5rem', left: '50%',
            transform: 'translateX(-50%)',
            textAlign: 'center',
          }}>
            <div style={{
              fontFamily: 'var(--font-cormorant)',
              fontStyle: 'italic',
              fontSize: '0.95rem',
              color: 'rgba(255,255,255,0.55)',
              marginBottom: '0.4rem',
            }}>
              {galleryImages[lightbox].alt}
            </div>
            <div style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 300,
              fontSize: '0.65rem',
              color: 'rgba(255,255,255,0.3)',
              letterSpacing: '0.15em',
            }}>
              {lightbox + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          section#gallery div[style*="repeat(4"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          section#gallery div[style*="repeat(4"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}

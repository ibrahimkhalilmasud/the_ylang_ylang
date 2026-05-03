'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const IconBed = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"/>
    <path d="M2 14h20"/><path d="M7 14v-3a1 1 0 0 1 1-1h3v4"/><path d="M2 20h20"/>
  </svg>
)
const IconBath = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/>
    <line x1="4" y1="13" x2="20" y2="13"/>
  </svg>
)
const IconGuests = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="7" r="3"/><path d="M3 21v-2a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v2"/>
    <circle cx="17" cy="7" r="3"/><path d="M23 21v-2a5 5 0 0 0-3-4.6"/>
  </svg>
)
const IconPool = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 16c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0"/>
    <path d="M2 12c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0"/>
    <path d="M6 8a3 3 0 0 1 4.24-2.76L14 7"/><line x1="14" y1="4" x2="14" y2="8"/>
  </svg>
)
const IconOcean = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 18c2-4 6-4 10 0s8 4 10 0"/>
    <path d="M2 13c2-4 6-4 10 0s8 4 10 0"/>
    <path d="M2 8c2-4 6-4 10 0s8 4 10 0"/>
  </svg>
)
const IconKitchen = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/>
    <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/>
  </svg>
)
const IconCinema = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="13" rx="2"/>
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
    <line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
  </svg>
)
const IconSpa = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>
  </svg>
)

const highlights = [
  { icon: <IconBed />, label: '4 Bedrooms', sub: 'Master suite + 3 guest rooms' },
  { icon: <IconBath />, label: '4 Bathrooms', sub: 'Ensuite + outdoor showers' },
  { icon: <IconGuests />, label: 'Up to 8 Guests', sub: 'Exclusive private occupancy' },
  { icon: <IconPool />, label: 'Dual Pool Decks', sub: 'Infinity pools, ocean-facing' },
  { icon: <IconOcean />, label: 'Beachfront', sub: 'Direct access, private shore' },
  { icon: <IconKitchen />, label: 'Full Kitchen', sub: 'Professional-grade, fully equipped' },
  { icon: <IconCinema />, label: 'Media Room', sub: 'Cinema system, surround sound' },
  { icon: <IconSpa />, label: 'Wellness', sub: 'Spa treatments on request' },
]

const amenities = [
  'Private chef & daily breakfast',
  'Butler & housekeeping service',
  'High-speed WiFi throughout',
  'Air conditioning in all rooms',
  'Outdoor BBQ & beach dining',
  'Kayaks & snorkelling gear',
  'Airport transfer on request',
  'Concierge & activity planning',
  'Baby grand piano',
  'Yoga deck & meditation space',
  'Secure car parking',
  '24-hour security',
]

const rooms = [
  {
    name: 'Master Suite',
    desc: 'Oceanfront king bed, private balcony, sunken bathtub, walk-in wardrobe.',
    image: '/images/master-suite.jpg',
  },
  {
    name: 'Poolside Twin',
    desc: 'Two single beds, direct pool access, garden views, ensuite bathroom.',
    image: '/images/twin-room.jpg',
  },
  {
    name: 'Garden Guest Suite',
    desc: 'Queen bed, indoor/outdoor bathroom, tropical garden outlook.',
    image: '/images/twin-guestroom.jpg',
  },
]

export default function VillaDetails() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="villa" ref={ref} style={{ background: 'var(--color-ivory)', padding: '8rem 2rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

        <div style={{
          marginBottom: '5.5rem',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(36px)',
          transition: 'opacity 0.9s var(--ease-reveal), transform 0.9s var(--ease-reveal)',
        }}>
          <div className="label-caps" style={{ color: 'var(--color-gold)', marginBottom: '1.25rem' }}>The Villa</div>
          <h2 className="heading-display" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', color: 'var(--color-obsidian)', maxWidth: '640px' }}>
            Crafted for the Few
          </h2>
          <div style={{ height: '1px', width: '40px', background: 'var(--color-gold)', margin: '2rem 0' }} />
          <p className="body-light" style={{ color: '#666', fontSize: '0.9rem', maxWidth: '480px', lineHeight: 1.85 }}>
            Villa Ylang Ylang is a masterfully designed four-bedroom estate where Balinese artistry meets contemporary luxury — a residence that exists entirely for your private pleasure.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
          gap: '1px',
          background: 'rgba(200,169,110,0.12)',
          border: '1px solid rgba(200,169,110,0.12)',
          marginBottom: '6rem',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.9s var(--ease-luxury) 0.2s',
        }}>
          {highlights.map((h, i) => (
            <div
              key={i}
              style={{
                background: 'var(--color-ivory)',
                padding: '2.25rem 1.5rem',
                textAlign: 'center',
                transition: 'background 0.4s var(--ease-luxury)',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-sand)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-ivory)')}
            >
              <div style={{ color: 'var(--color-gold)', marginBottom: '0.9rem', display: 'flex', justifyContent: 'center' }}>
                {h.icon}
              </div>
              <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 500, fontSize: '1.05rem', color: 'var(--color-obsidian)', marginBottom: '5px' }}>
                {h.label}
              </div>
              <div className="body-light" style={{ fontSize: '0.7rem', color: '#999' }}>{h.sub}</div>
            </div>
          ))}
        </div>

        <div style={{
          marginBottom: '6rem',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.9s var(--ease-luxury) 0.3s',
        }}>
          <div className="label-caps" style={{ color: 'var(--color-gold)', marginBottom: '2.5rem' }}>
            Accommodations
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5px',
            background: 'rgba(200,169,110,0.1)',
          }}>
            {rooms.map((room, i) => (
              <div key={i} style={{ overflow: 'hidden', background: 'var(--color-ivory)' }}>
                <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    style={{ objectFit: 'cover', transition: 'transform 0.9s var(--ease-luxury)' }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: 0, left: 0, right: 0,
                    height: '40%',
                    background: 'linear-gradient(to top, rgba(26,26,26,0.5), transparent)',
                  }} />
                  <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.5rem' }}>
                    <div style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: '1.15rem',
                      color: '#fff',
                      fontWeight: 400,
                      letterSpacing: '0.04em',
                    }}>
                      {room.name}
                    </div>
                  </div>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <p className="body-light" style={{ color: '#888', fontSize: '0.8rem', lineHeight: 1.8 }}>
                    {room.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.9s var(--ease-luxury) 0.4s',
        }}>
          <div>
            <div className="label-caps" style={{ color: 'var(--color-gold)', marginBottom: '2.5rem' }}>
              Amenities & Services
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem 1.5rem' }}>
              {amenities.map((a, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" style={{ flexShrink: 0, marginTop: '4px' }}>
                    <circle cx="5" cy="5" r="3" fill="var(--color-gold)" fillOpacity="0.7"/>
                  </svg>
                  <span className="body-light" style={{ fontSize: '0.78rem', color: '#666', lineHeight: 1.6 }}>
                    {a}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="label-caps" style={{ color: 'var(--color-gold)', marginBottom: '2.5rem' }}>
              Pricing
            </div>
            <div style={{
              background: 'var(--color-obsidian)',
              padding: '2.5rem',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: '-30px', right: '-30px',
                width: '160px', height: '160px', borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(200,169,110,0.12) 0%, transparent 70%)',
              }} />
              <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                Starting from
              </div>
              <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--color-gold)', lineHeight: 1, marginBottom: '0.5rem' }}>
                $1,200
              </div>
              <div className="label-caps" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.5rem', marginBottom: '2rem' }}>
                per night · entire villa
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                {['All-inclusive service', 'Private chef & butler', 'Airport transfers available', 'Minimum 3 night stay'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span className="body-light" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)' }}>{item}</span>
                  </div>
                ))}
              </div>
              <a href="#booking" className="btn-gold" style={{ display: 'block', textAlign: 'center' }}>
                Check Availability
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

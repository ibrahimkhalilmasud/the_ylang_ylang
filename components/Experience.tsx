'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const experiences = [
  {
    index: '01',
    tag: 'Living',
    title: 'Life at the\nWater\'s Edge',
    body: 'Step from your private terrace onto soft white sand. The Indian Ocean stretches endlessly before you — a view that never grows ordinary. Ylang Ylang is not a hotel room. It is your home, reimagined at the edge of paradise.',
    image: '/images/beach-sunset.jpg',
    imageAlt: 'Sunset view from the beach deck',
    reverse: false,
    bg: 'var(--color-ivory)',
  },
  {
    index: '02',
    tag: 'Dining',
    title: 'Private Chef,\nUnforgettable Flavours',
    body: 'Your dedicated private chef crafts each meal to your preference — from Balinese ceremonial feasts to globally inspired menus. Dine on the beach deck at sunset, or in the candlelit dining room. Every meal is an event.',
    image: '/images/dining.jpg',
    imageAlt: 'Private dining experience at Villa Ylang Ylang',
    reverse: true,
    bg: 'var(--color-sand)',
  },
  {
    index: '03',
    tag: 'Wellness',
    title: 'Bathe, Rest,\nRestore',
    body: 'A hand-carved sunken bathtub. Outdoor rain showers with garden views. Bespoke spa treatments available upon request, delivered to your suite. Wellness here is not a facility — it is a philosophy woven into every detail.',
    image: '/images/sunken-bathtub.jpg',
    imageAlt: 'Sunken bathtub at Villa Ylang Ylang',
    reverse: false,
    bg: 'var(--color-ivory)',
  },
  {
    index: '04',
    tag: 'Leisure',
    title: 'Infinity, Cinema\n& Beyond',
    body: 'Two infinity pool decks cascade toward the ocean. A state-of-the-art media room for cinema nights. A fully equipped kitchen for those who prefer to cook. Every space designed for pleasure, privacy, and effortless comfort.',
    image: '/images/pool-deck.jpg',
    imageAlt: 'Pool deck at Villa Ylang Ylang',
    reverse: true,
    bg: 'var(--color-sand)',
  },
]

function ExperienceBlock({ exp }: { exp: typeof experiences[0] }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.12 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '620px' }}
      className="exp-block"
    >
      <div style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '520px',
        order: exp.reverse ? 2 : 1,
      }}>
        <Image
          src={exp.image}
          alt={exp.imageAlt}
          fill
          style={{
            objectFit: 'cover',
            transition: 'transform 1.2s var(--ease-luxury)',
            transform: visible ? 'scale(1.04)' : 'scale(1.1)',
          }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: exp.reverse
            ? 'linear-gradient(to left, rgba(26,26,26,0.06) 0%, transparent 60%)'
            : 'linear-gradient(to right, rgba(26,26,26,0.06) 0%, transparent 60%)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '1.5rem',
          left: exp.reverse ? 'auto' : '1.75rem',
          right: exp.reverse ? '1.75rem' : 'auto',
          fontFamily: 'var(--font-cormorant)',
          fontWeight: 300,
          fontSize: '6rem',
          color: 'rgba(255,255,255,0.08)',
          lineHeight: 1,
          letterSpacing: '-0.04em',
          userSelect: 'none',
        }}>
          {exp.index}
        </div>
      </div>

      <div style={{
        background: exp.bg,
        padding: 'clamp(3rem, 8vw, 7rem)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        order: exp.reverse ? 1 : 2,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : `translateX(${exp.reverse ? '-36px' : '36px'})`,
        transition: 'opacity 1s var(--ease-reveal) 0.2s, transform 1s var(--ease-reveal) 0.2s',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '2rem' }}>
          <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: '0.85rem', color: 'var(--color-gold)', opacity: 0.6 }}>
            {exp.index}
          </div>
          <div style={{ height: '1px', width: '24px', background: 'var(--color-gold)', opacity: 0.5 }} />
          <div className="label-caps" style={{ color: 'var(--color-gold)', fontSize: '0.55rem' }}>
            {exp.tag}
          </div>
        </div>

        <h2 className="heading-display" style={{
          fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
          color: 'var(--color-obsidian)',
          marginBottom: '2rem',
          whiteSpace: 'pre-line',
        }}>
          {exp.title}
        </h2>

        <div style={{ height: '1px', width: '40px', background: 'var(--color-gold)', marginBottom: '2rem' }} />

        <p className="body-light" style={{ color: '#666', fontSize: '0.88rem', maxWidth: '400px', lineHeight: 1.95 }}>
          {exp.body}
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .exp-block { grid-template-columns: 1fr !important; }
          .exp-block > div { order: unset !important; }
        }
      `}</style>
    </div>
  )
}

export default function Experience() {
  const headerRef = useRef<HTMLDivElement>(null)
  const [headerVisible, setHeaderVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true) },
      { threshold: 0.1 }
    )
    if (headerRef.current) observer.observe(headerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" style={{ background: 'var(--color-ivory)' }}>
      <div
        ref={headerRef}
        style={{
          textAlign: 'center',
          padding: '8rem 2rem 5rem',
          background: 'var(--color-obsidian)',
          opacity: headerVisible ? 1 : 0,
          transform: headerVisible ? 'translateY(0)' : 'translateY(36px)',
          transition: 'opacity 0.9s var(--ease-reveal), transform 0.9s var(--ease-reveal)',
        }}
      >
        <div className="label-caps" style={{ color: 'var(--color-gold)', marginBottom: '1.5rem' }}>The Experience</div>
        <h2 className="heading-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#fff', marginBottom: '2rem' }}>
          Every Moment, Curated
        </h2>
        <div style={{ height: '1px', width: '40px', background: 'rgba(200,169,110,0.5)', margin: '0 auto 2rem' }} />
        <p className="body-light" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.88rem', maxWidth: '460px', margin: '0 auto' }}>
          From your first morning to your last sunset, every detail at Villa Ylang Ylang is designed to transcend expectation.
        </p>
      </div>

      {experiences.map((exp, i) => (
        <ExperienceBlock key={i} exp={exp} />
      ))}
    </section>
  )
}

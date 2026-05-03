'use client'

import { useState, useEffect, useRef } from 'react'

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, type: 'general' }),
      })
      setSent(true)
    } catch {
      setSent(true) // Optimistic — still confirm to user
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(200,169,110,0.3)',
    outline: 'none',
    padding: '0.75rem 0',
    fontFamily: 'var(--font-inter)',
    fontWeight: 300,
    fontSize: '0.9rem',
    color: '#fff',
    transition: 'border-color 0.3s ease',
  } as React.CSSProperties

  return (
    <section id="contact" ref={ref} style={{ background: 'var(--color-sand)', padding: '7rem 2rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(360px, 100%), 1fr))',
          gap: 'clamp(2.5rem, 6vw, 5rem)',
          alignItems: 'start',
        }}>

          {/* Left: info */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(-30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}>
            <div className="label-caps" style={{ color: 'var(--color-gold)', marginBottom: '1rem' }}>Get in Touch</div>
            <h2 className="heading-display" style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              color: 'var(--color-obsidian)',
              marginBottom: '1.75rem',
            }}>
              We'd Love to<br />Welcome You
            </h2>
            <div className="gold-rule" style={{ marginBottom: '1.75rem' }} />
            <p className="body-light" style={{ color: '#666', fontSize: '0.9rem', maxWidth: '380px', marginBottom: '3rem' }}>
              Whether you have questions about the villa, want to discuss a special occasion, or are ready to reserve your dates — we're here to help.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { icon: '📧', label: 'Email', value: 'info@theylangylang.com', href: 'mailto:info@theylangylang.com' },
                { icon: '📱', label: 'WhatsApp', value: '+62 812 3456 7890', href: 'https://wa.me/6281234567890' },
                { icon: '📍', label: 'Location', value: 'Bali, Indonesia', href: null },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1.1rem', marginTop: '1px' }}>{item.icon}</span>
                  <div>
                    <div className="label-caps" style={{ color: 'var(--color-gold)', fontSize: '0.55rem', marginBottom: '4px' }}>{item.label}</div>
                    {item.href ? (
                      <a href={item.href} style={{
                        fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.85rem',
                        color: 'var(--color-obsidian)', textDecoration: 'none',
                      }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-gold)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-obsidian)')}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.85rem', color: 'var(--color-obsidian)' }}>
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div style={{
            background: 'var(--color-obsidian)',
            padding: 'clamp(1.5rem, 5vw, 3rem)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(30px)',
            transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
          }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>✓</div>
                <h3 className="heading-serif" style={{ color: 'var(--color-gold)', fontSize: '1.8rem', marginBottom: '0.75rem' }}>
                  Message Received
                </h3>
                <p className="body-light" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
                  Thank you for reaching out. We'll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div className="label-caps" style={{ color: 'var(--color-gold)', fontSize: '0.6rem' }}>Send a Message</div>

                <div>
                  <label className="label-caps" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.55rem', display: 'block', marginBottom: '0.5rem' }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    required
                    style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderBottomColor = 'var(--color-gold)')}
                    onBlur={e => (e.currentTarget.style.borderBottomColor = 'rgba(200,169,110,0.3)')}
                  />
                </div>

                <div>
                  <label className="label-caps" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.55rem', display: 'block', marginBottom: '0.5rem' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    required
                    style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderBottomColor = 'var(--color-gold)')}
                    onBlur={e => (e.currentTarget.style.borderBottomColor = 'rgba(200,169,110,0.3)')}
                  />
                </div>

                <div>
                  <label className="label-caps" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.55rem', display: 'block', marginBottom: '0.5rem' }}>
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 234 567 8900"
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderBottomColor = 'var(--color-gold)')}
                    onBlur={e => (e.currentTarget.style.borderBottomColor = 'rgba(200,169,110,0.3)')}
                  />
                </div>

                <div>
                  <label className="label-caps" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.55rem', display: 'block', marginBottom: '0.5rem' }}>
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your trip, dates you have in mind, or any questions..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    required
                    style={{ ...inputStyle, resize: 'none' }}
                    onFocus={e => (e.currentTarget.style.borderBottomColor = 'var(--color-gold)')}
                    onBlur={e => (e.currentTarget.style.borderBottomColor = 'rgba(200,169,110,0.3)')}
                  />
                </div>

                <button type="submit" disabled={loading} className="btn-gold" style={{ width: '100%', textAlign: 'center' }}>
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <style>{`input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.2); }`}</style>
    </section>
  )
}

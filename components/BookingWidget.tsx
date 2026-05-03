'use client'

import { useState } from 'react'

const PRICE_PER_NIGHT = 1500
const MIN_NIGHTS = 3

const BLOCKED_DATES = [
  '2025-12-24','2025-12-25','2025-12-26','2025-12-27','2025-12-28',
  '2025-12-29','2025-12-30','2025-12-31','2026-01-01','2026-01-02',
  '2026-01-03','2026-01-04','2026-01-05',
  '2026-02-14','2026-02-15','2026-02-16',
]

const ADD_ONS = [
  { id: 'chef', label: 'Private Chef Dinner', sub: 'Curated 5-course tasting menu for your party', price: 350, unit: 'per evening' },
  { id: 'spa', label: 'In-Villa Spa Day', sub: 'Full-day treatments for 2 guests, in your suite', price: 480, unit: 'per session' },
  { id: 'transfer', label: 'Private Airport Transfer', sub: 'Luxury vehicle, both ways, with meet & greet', price: 120, unit: 'return' },
  { id: 'cruise', label: 'Sunset Yacht Cruise', sub: 'Private 3-hour cruise with drinks & canapes', price: 680, unit: 'per vessel' },
]

function diffDays(a: Date, b: Date) {
  return Math.round((b.getTime() - a.getTime()) / 86400000)
}

function isBlocked(date: Date) {
  const s = date.toISOString().split('T')[0]
  return BLOCKED_DATES.includes(s)
}

function StepDot({ n, current, done }: { n: number; current: number; done: boolean }) {
  const active = n === current
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
      <div style={{
        width: '28px', height: '28px', borderRadius: '50%',
        border: `1px solid ${done || active ? 'var(--color-gold)' : 'rgba(200,169,110,0.25)'}`,
        background: done ? 'var(--color-gold)' : active ? 'rgba(200,169,110,0.12)' : 'transparent',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all 0.4s var(--ease-luxury)',
      }}>
        {done ? (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        ) : (
          <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '0.85rem', color: active ? 'var(--color-gold)' : 'rgba(200,169,110,0.4)' }}>
            {n}
          </span>
        )}
      </div>
    </div>
  )
}

export default function BookingWidget() {
  const [step, setStep] = useState(1)
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(2)
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const nights = checkIn && checkOut ? diffDays(new Date(checkIn), new Date(checkOut)) : 0
  const validDates = nights >= MIN_NIGHTS &&
    !isBlocked(new Date(checkIn)) &&
    !isBlocked(new Date(checkOut))
  const step1Valid = validDates

  const subtotal = nights >= MIN_NIGHTS ? nights * PRICE_PER_NIGHT : 0
  const addOnTotal = selectedAddOns.reduce((sum, id) => {
    const a = ADD_ONS.find(x => x.id === id)
    return sum + (a ? a.price : 0)
  }, 0)
  const taxes = Math.round((subtotal + addOnTotal) * 0.1)
  const total = subtotal + addOnTotal + taxes

  const toggleAddOn = (id: string) => {
    setSelectedAddOns(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  }

  const handleSubmit = () => {
    if (!name || !email) return
    setSubmitted(true)
  }

  const labelStyle = {
    fontFamily: 'var(--font-inter)',
    fontWeight: 300,
    fontSize: '0.58rem',
    letterSpacing: '0.22em',
    textTransform: 'uppercase' as const,
    color: 'rgba(255,255,255,0.4)',
    marginBottom: '0.5rem',
    display: 'block',
  }

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(200,169,110,0.2)',
    color: '#fff',
    fontFamily: 'var(--font-inter)',
    fontWeight: 300,
    fontSize: '0.85rem',
    padding: '0.85rem 1rem',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    boxSizing: 'border-box' as const,
  }

  return (
    <section id="booking" style={{ background: 'var(--color-obsidian)', padding: '8rem 2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="label-caps" style={{ color: 'var(--color-gold)', marginBottom: '1.25rem' }}>
            Reservations
          </div>
          <h2 className="heading-display" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', color: '#fff', marginBottom: '1.5rem' }}>
            Begin Your Stay
          </h2>
          <div style={{ height: '1px', width: '40px', background: 'rgba(200,169,110,0.4)', margin: '0 auto' }} />
        </div>

        {/* Step indicator */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0', marginBottom: '3rem' }}>
          {[1, 2, 3].map((n, i) => (
            <div key={n} style={{ display: 'flex', alignItems: 'center' }}>
              <StepDot n={n} current={step} done={step > n} />
              {i < 2 && (
                <div style={{
                  width: 'clamp(40px, 10vw, 80px)', height: '1px',
                  background: step > n + 1 ? 'var(--color-gold)' : 'rgba(200,169,110,0.2)',
                  transition: 'background 0.4s ease',
                  margin: '0 0.5rem',
                }} />
              )}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(0.75rem, 5vw, 5.5rem)', marginBottom: '3rem' }}>
          {['Dates & Guests', 'Curated Additions', 'Your Details'].map((label, i) => (
            <div key={label} className="label-caps" style={{
              fontSize: 'clamp(0.4rem, 1.5vw, 0.48rem)',
              color: step === i + 1 ? 'var(--color-gold)' : 'rgba(255,255,255,0.25)',
              transition: 'color 0.4s ease',
              textAlign: 'center',
            }}>
              {label}
            </div>
          ))}
        </div>

        {/* Widget card */}
        <div style={{
          background: 'rgba(255,255,255,0.025)',
          border: '1px solid rgba(200,169,110,0.15)',
          backdropFilter: 'blur(20px)',
        }}>

          {/* ─── STEP 1 ─── */}
          {step === 1 && (
            <div>
              <div style={{ padding: '2.5rem', borderBottom: '1px solid rgba(200,169,110,0.1)' }}>
                <div className="label-caps" style={{ color: 'var(--color-gold)', marginBottom: '0.5rem', fontSize: '0.55rem' }}>
                  Select Your Dates
                </div>
                <p className="body-light" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem' }}>
                  Minimum {MIN_NIGHTS} nights. All rates are in USD.
                </p>
              </div>

              <div style={{ padding: '2.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
                <div>
                  <label style={labelStyle}>Check In</label>
                  <input
                    type="date"
                    value={checkIn}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={e => setCheckIn(e.target.value)}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Check Out</label>
                  <input
                    type="date"
                    value={checkOut}
                    min={checkIn || new Date().toISOString().split('T')[0]}
                    onChange={e => setCheckOut(e.target.value)}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Guests</label>
                  <div style={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(200,169,110,0.2)', background: 'rgba(255,255,255,0.04)' }}>
                    <button
                      onClick={() => setGuests(g => Math.max(1, g - 1))}
                      style={{ width: '44px', height: '44px', background: 'none', border: 'none', color: 'var(--color-gold)', fontSize: '1.2rem', cursor: 'pointer' }}
                    >
                      −
                    </button>
                    <span style={{ flex: 1, textAlign: 'center', color: '#fff', fontFamily: 'var(--font-cormorant)', fontSize: '1.1rem' }}>
                      {guests}
                    </span>
                    <button
                      onClick={() => setGuests(g => Math.min(8, g + 1))}
                      style={{ width: '44px', height: '44px', background: 'none', border: 'none', color: 'var(--color-gold)', fontSize: '1.2rem', cursor: 'pointer' }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {nights >= MIN_NIGHTS && (
                <div style={{ margin: '0 2.5rem', padding: '1.25rem', background: 'rgba(200,169,110,0.06)', border: '1px solid rgba(200,169,110,0.15)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="body-light" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem' }}>
                      {nights} nights × ${PRICE_PER_NIGHT.toLocaleString()}
                    </span>
                    <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.2rem', color: 'var(--color-gold)' }}>
                      ${subtotal.toLocaleString()}
                    </span>
                  </div>
                </div>
              )}

              {checkIn && checkOut && !validDates && nights > 0 && nights < MIN_NIGHTS && (
                <p style={{ margin: '0 2.5rem', color: 'rgba(200,169,110,0.7)', fontSize: '0.75rem', fontFamily: 'var(--font-inter)' }}>
                  Minimum stay is {MIN_NIGHTS} nights.
                </p>
              )}

              <div style={{ padding: '2rem 2.5rem', display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  disabled={!step1Valid}
                  className="btn-gold"
                  style={{ opacity: step1Valid ? 1 : 0.4, cursor: step1Valid ? 'pointer' : 'not-allowed' }}
                  onClick={() => step1Valid && setStep(2)}
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* ─── STEP 2 ─── */}
          {step === 2 && (
            <div>
              <div style={{ padding: '2rem 2.5rem', borderBottom: '1px solid rgba(200,169,110,0.12)' }}>
                <div className="label-caps" style={{ color: 'var(--color-gold)', marginBottom: '0.5rem', fontSize: '0.55rem' }}>
                  Curated Additions
                </div>
                <p className="body-light" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem' }}>
                  Select any experiences you&apos;d like pre-arranged. All can be discussed with your concierge on arrival.
                </p>
              </div>

              <div style={{ padding: '2rem 2.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                {ADD_ONS.map(addon => {
                  const selected = selectedAddOns.includes(addon.id)
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddOn(addon.id)}
                      style={{
                        padding: '1.5rem',
                        border: `1px solid ${selected ? 'var(--color-gold)' : 'rgba(200,169,110,0.18)'}`,
                        background: selected ? 'rgba(200,169,110,0.06)' : 'transparent',
                        cursor: 'pointer',
                        transition: 'all 0.35s var(--ease-luxury)',
                        display: 'flex',
                        gap: '1rem',
                        alignItems: 'flex-start',
                      }}
                    >
                      <div style={{
                        width: '18px', height: '18px', flexShrink: 0, marginTop: '2px',
                        border: `1px solid ${selected ? 'var(--color-gold)' : 'rgba(200,169,110,0.3)'}`,
                        background: selected ? 'var(--color-gold)' : 'transparent',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'all 0.3s ease',
                      }}>
                        {selected && (
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                        )}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400, fontSize: '1rem', color: '#fff', marginBottom: '4px' }}>
                          {addon.label}
                        </div>
                        <div className="body-light" style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.75rem' }}>
                          {addon.sub}
                        </div>
                        <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '0.95rem', color: 'var(--color-gold)' }}>
                          +${addon.price} <span className="body-light" style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)' }}>{addon.unit}</span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div style={{ padding: '1.5rem 2.5rem', borderTop: '1px solid rgba(200,169,110,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <button onClick={() => setStep(1)} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-inter)', fontSize: '0.72rem', cursor: 'pointer', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  ← Back
                </button>
                <button className="btn-gold" onClick={() => setStep(3)}>
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* ─── STEP 3 ─── */}
          {step === 3 && !submitted && (
            <div>
              <div style={{ padding: '2rem 2.5rem', borderBottom: '1px solid rgba(200,169,110,0.12)' }}>
                <div className="label-caps" style={{ color: 'var(--color-gold)', marginBottom: '0.5rem', fontSize: '0.55rem' }}>
                  Your Details
                </div>
                <p className="body-light" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem' }}>
                  Your information is handled with absolute discretion.
                </p>
              </div>

              <div style={{ padding: '2rem 2.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                <div>
                  <label style={labelStyle}>Full Name *</label>
                  <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your name" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Email Address *</label>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Phone (optional)</label>
                  <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+1 234 567 8900" style={inputStyle} />
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={labelStyle}>Special Requests</label>
                  <textarea
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Dietary requirements, occasion details, special arrangements..."
                    rows={3}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '80px' }}
                  />
                </div>
              </div>

              {/* Booking summary */}
              <div style={{ margin: '0 2.5rem 2rem', padding: '1.5rem', background: 'rgba(200,169,110,0.04)', border: '1px solid rgba(200,169,110,0.12)' }}>
                <div className="label-caps" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.48rem', marginBottom: '1rem' }}>
                  Booking Summary
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className="body-light" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem' }}>{nights} nights accommodation</span>
                    <span style={{ fontFamily: 'var(--font-cormorant)', color: '#fff', fontSize: '0.95rem' }}>${subtotal.toLocaleString()}</span>
                  </div>
                  {selectedAddOns.map(id => {
                    const a = ADD_ONS.find(x => x.id === id)
                    return a ? (
                      <div key={id} style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span className="body-light" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem' }}>{a.label}</span>
                        <span style={{ fontFamily: 'var(--font-cormorant)', color: '#fff', fontSize: '0.95rem' }}>+${a.price}</span>
                      </div>
                    ) : null
                  })}
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className="body-light" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem' }}>Taxes & fees (10%)</span>
                    <span style={{ fontFamily: 'var(--font-cormorant)', color: '#fff', fontSize: '0.95rem' }}>${taxes.toLocaleString()}</span>
                  </div>
                  <div style={{ height: '1px', background: 'rgba(200,169,110,0.18)', margin: '0.5rem 0' }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-cormorant)', color: '#fff', fontSize: '1rem' }}>Total</span>
                    <span style={{ fontFamily: 'var(--font-cormorant)', color: 'var(--color-gold)', fontSize: '1.4rem' }}>${total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div style={{ padding: '1.5rem 2.5rem', borderTop: '1px solid rgba(200,169,110,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <button onClick={() => setStep(2)} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-inter)', fontSize: '0.72rem', cursor: 'pointer', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  ← Back
                </button>
                <button
                  className="btn-gold"
                  onClick={handleSubmit}
                  disabled={!name || !email}
                  style={{ opacity: name && email ? 1 : 0.4, cursor: name && email ? 'pointer' : 'not-allowed' }}
                >
                  Send Enquiry
                </button>
              </div>
            </div>
          )}

          {/* ─── SUCCESS ─── */}
          {submitted && (
            <div style={{ padding: '5rem 2.5rem', textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                <svg width="56" height="56" viewBox="0 0 56 56">
                  <circle cx="28" cy="28" r="27" fill="none" stroke="var(--color-gold)" strokeWidth="1"/>
                  <polyline points="18,28 25,35 38,22" fill="none" stroke="var(--color-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="label-caps" style={{ color: 'var(--color-gold)', marginBottom: '1rem' }}>
                Enquiry Received
              </div>
              <h3 className="heading-display" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: '#fff', marginBottom: '1.25rem' }}>
                Thank you, {name.split(' ')[0]}.
              </h3>
              <p className="body-light" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', maxWidth: '420px', margin: '0 auto', lineHeight: 1.85 }}>
                Our concierge team will review your enquiry and respond within 24 hours with a personalised proposal.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

'use client'

const FOOTER_LINKS = {
  Estate: ['The Villa', 'Accommodations', 'Amenities', 'Gallery'],
  Experience: ['Private Dining', 'Wellness & Spa', 'Excursions', 'Concierge'],
  Plan: ['Check Availability', 'House Rules', 'FAQs', 'Contact'],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      background: 'var(--color-ink)',
      color: 'rgba(255,255,255,0.45)',
      padding: '6rem 2rem 3rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ height: '1px', background: 'rgba(200,169,110,0.2)', marginBottom: '5rem' }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          marginBottom: '5rem',
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 400,
              fontSize: '1.5rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#fff',
              marginBottom: '1rem',
            }}>
              Ylang Ylang
            </div>
            <div style={{ height: '1px', width: '36px', background: 'var(--color-gold)', marginBottom: '1.25rem' }} />
            <p className="body-light" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.38)', lineHeight: 1.85, maxWidth: '240px' }}>
              A private beachfront sanctuary in Bali, reserved exclusively for those who seek the extraordinary.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              {[
                {
                  label: 'Instagram',
                  href: 'https://instagram.com',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5"/>
                      <circle cx="12" cy="12" r="4"/>
                      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                    </svg>
                  ),
                },
                {
                  label: 'WhatsApp',
                  href: 'https://wa.me/6281234567890',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                    </svg>
                  ),
                },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '36px', height: '36px',
                    border: '1px solid rgba(200,169,110,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(255,255,255,0.4)',
                    textDecoration: 'none',
                    transition: 'all 0.35s var(--ease-luxury)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--color-gold)'
                    e.currentTarget.style.color = 'var(--color-gold)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(200,169,110,0.2)'
                    e.currentTarget.style.color = 'rgba(255,255,255,0.4)'
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <div className="label-caps" style={{ color: 'var(--color-gold)', marginBottom: '1.5rem', fontSize: '0.52rem' }}>
                {title}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {links.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontWeight: 300,
                        fontSize: '0.78rem',
                        color: 'rgba(255,255,255,0.4)',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <div className="label-caps" style={{ color: 'var(--color-gold)', marginBottom: '1.5rem', fontSize: '0.52rem' }}>
              Contact
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                {
                  label: 'Location',
                  value: 'Canggu, Bali\nIndonesia',
                  icon: (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  ),
                },
                {
                  label: 'Reservations',
                  value: 'reservations@\ntheylangylang.com',
                  icon: (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  ),
                },
                {
                  label: 'WhatsApp',
                  value: '+62 812 3456 7890',
                  icon: (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                    </svg>
                  ),
                },
              ].map(({ label, value, icon }) => (
                <div key={label} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--color-gold)', marginTop: '1px', flexShrink: 0 }}>{icon}</span>
                  <div>
                    <div className="label-caps" style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.48rem', marginBottom: '3px' }}>
                      {label}
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-inter)',
                      fontWeight: 300,
                      fontSize: '0.78rem',
                      color: 'rgba(255,255,255,0.5)',
                      whiteSpace: 'pre-line',
                      lineHeight: 1.6,
                    }}>
                      {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(200,169,110,0.1)',
          paddingTop: '2.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <div style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '0.7rem', color: 'rgba(255,255,255,0.22)' }}>
            © {year} Villa Ylang Ylang. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map(item => (
              <a
                key={item}
                href="#"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 300,
                  fontSize: '0.65rem',
                  color: 'rgba(255,255,255,0.22)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.22)')}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

import { NextRequest, NextResponse } from 'next/server'

// Input sanitizer
function sanitize(str: string): string {
  return str
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/&/g, '&amp;')
    .trim()
    .slice(0, 2000)
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const {
      name,
      email,
      phone = '',
      message = '',
      checkIn = '',
      checkOut = '',
      guests = 0,
      nights = 0,
      total = 0,
      type = 'booking',
    } = body

    // Validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 })
    }
    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 })
    }

    // Sanitize all inputs
    const safeData = {
      name: sanitize(name),
      email: sanitize(email),
      phone: sanitize(phone),
      message: sanitize(message),
      checkIn: sanitize(checkIn),
      checkOut: sanitize(checkOut),
      guests: Number(guests),
      nights: Number(nights),
      total: Number(total),
      type: sanitize(type),
      receivedAt: new Date().toISOString(),
    }

    // In production: send email via Resend/SendGrid or save to Supabase
    // Example (uncomment and add your API key):
    //
    // await fetch('https://api.resend.com/emails', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     from: 'bookings@theylangylang.com',
    //     to: 'info@theylangylang.com',
    //     subject: `New ${safeData.type} enquiry from ${safeData.name}`,
    //     html: `
    //       <h2>New Enquiry — Villa Ylang Ylang</h2>
    //       <p><strong>Name:</strong> ${safeData.name}</p>
    //       <p><strong>Email:</strong> ${safeData.email}</p>
    //       <p><strong>Phone:</strong> ${safeData.phone || 'Not provided'}</p>
    //       ${safeData.checkIn ? `<p><strong>Check-in:</strong> ${safeData.checkIn}</p>` : ''}
    //       ${safeData.checkOut ? `<p><strong>Check-out:</strong> ${safeData.checkOut}</p>` : ''}
    //       ${safeData.nights ? `<p><strong>Nights:</strong> ${safeData.nights}</p>` : ''}
    //       ${safeData.guests ? `<p><strong>Guests:</strong> ${safeData.guests}</p>` : ''}
    //       ${safeData.total ? `<p><strong>Estimated Total:</strong> $${safeData.total.toLocaleString()}</p>` : ''}
    //       <p><strong>Message:</strong> ${safeData.message || 'None'}</p>
    //       <p><strong>Received:</strong> ${safeData.receivedAt}</p>
    //     `,
    //   }),
    // })

    // Log for development
    console.log('[INQUIRY]', safeData)

    return NextResponse.json({ success: true, message: 'Enquiry received' })
  } catch (err) {
    console.error('[INQUIRY ERROR]', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

# Villa Ylang Ylang — Setup & Deployment Guide

---

## Project Overview

A premium luxury villa booking website built with:
- **Next.js 16** (App Router)
- **Tailwind CSS v4**
- **Framer Motion** (animations)
- **Next.js API Routes** (inquiry backend)

All villa photos are in `/public/images/`. The hero video is `/public/hero.mp4`.

---

## File Structure

```
ylang-ylang/
├── app/
│   ├── layout.tsx          ← Root layout + SEO metadata + Google Fonts
│   ├── page.tsx            ← Main page (assembles all sections)
│   ├── globals.css         ← Design tokens, utility classes, typography
│   ├── sitemap.ts          ← Auto-generated sitemap.xml
│   ├── robots.ts           ← robots.txt
│   └── api/
│       └── inquiry/
│           └── route.ts    ← POST endpoint for booking/contact forms
├── components/
│   ├── Navbar.tsx          ← Fixed top nav, scroll-aware, mobile menu
│   ├── Hero.tsx            ← Fullscreen video/image hero + stats strip
│   ├── Trust.tsx           ← Reviews, ratings, trust badges
│   ├── Experience.tsx      ← 4 lifestyle storytelling sections
│   ├── VillaDetails.tsx    ← Highlights grid, rooms, amenities, pricing
│   ├── Gallery.tsx         ← Masonry grid + keyboard-accessible lightbox
│   ├── BookingWidget.tsx   ← Date picker, guest selector, price calc, form
│   ├── Location.tsx        ← Embedded map + nearby attractions
│   ├── Contact.tsx         ← Contact form with dark card layout
│   ├── Footer.tsx          ← Links, contact, reserve CTA
│   ├── WhatsAppButton.tsx  ← Floating WhatsApp CTA (bottom-right)
│   └── StructuredData.tsx  ← JSON-LD schema for rich Google results
├── lib/
│   └── constants.ts        ← Centralised villa config, pricing, gallery data
├── public/
│   ├── hero.mp4            ← Hero background video
│   └── images/             ← 16 villa photographs (renamed, URL-safe)
├── .env.example            ← Environment variable reference
├── next.config.ts          ← Image optimisation + security headers
├── tailwind.config.ts      ← Custom colour tokens, typography scale
└── package.json
```

---

## Step 1 — Local Development

### Prerequisites
- Node.js 18+ (https://nodejs.org)
- npm or pnpm

### Install & Run

```bash
# 1. Navigate into the project
cd "Website builder/ylang-ylang"

# 2. Install dependencies
npm install

# 3. Create your environment file
cp .env.example .env.local

# 4. Start the dev server
npm run dev
```

Open **http://localhost:3000** — you should see the full website.

---

## Step 2 — Configuration

### Update villa details
Edit `lib/constants.ts` to change:
- WhatsApp number
- Email address
- Pricing (base rate, service fee %)
- Minimum nights
- Blocked dates (booked periods)
- Gallery image order

### Enable email notifications (recommended)
1. Sign up at https://resend.com (free tier: 3,000 emails/month)
2. Get your API key
3. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx
   INQUIRY_EMAIL=info@theylangylang.com
   ```
4. Uncomment the Resend block in `app/api/inquiry/route.ts`

### Add blocked/booked dates
In `lib/constants.ts`, add dates to `BLOCKED_DATES` array:
```ts
export const BLOCKED_DATES: string[] = [
  '2026-03-15', '2026-03-16', '2026-03-17', // Example booking
]
```

---

## Step 3 — Production Build

```bash
# Build for production
npm run build

# Test the production build locally
npm run start
```

Check the output — Next.js will show you each page's size and any warnings.

---

## Step 4 — Deploy to Vercel (Recommended)

Vercel is the fastest and most reliable deployment for Next.js.

### Option A: Via Vercel Dashboard (easiest)

1. Push this folder to a GitHub repository
2. Go to https://vercel.com → **New Project**
3. Import your repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Add environment variables under **Project Settings → Environment Variables**:
   - `RESEND_API_KEY` (if using email)
   - `NEXT_PUBLIC_SITE_URL` = `https://www.theylangylang.com`

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login
vercel login

# Deploy (first time — follow prompts)
vercel

# Deploy to production
vercel --prod
```

### Custom Domain
1. In Vercel dashboard → **Project → Settings → Domains**
2. Add `theylangylang.com` and `www.theylangylang.com`
3. Update your DNS registrar with Vercel's nameservers or A/CNAME records
4. SSL is automatic

---

## Step 5 — Post-Deployment Checklist

- [ ] Hero video plays on mobile (test on iPhone + Android)
- [ ] All gallery images load correctly
- [ ] Booking form submits and you receive the email
- [ ] WhatsApp button opens chat with correct phone number
- [ ] Google Maps renders in Location section
- [ ] Check SEO: https://search.google.com/test/rich-results (paste your URL)
- [ ] Check OpenGraph: https://www.opengraph.xyz
- [ ] Check performance: https://pagespeed.web.dev

---

## Optional Upgrades

### A. Connect Supabase (store bookings in a database)
```bash
npm install @supabase/supabase-js
```
Add to `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
```
Then in `app/api/inquiry/route.ts`, add a Supabase insert after the validation block.

### B. Add Stripe (collect deposit on booking)
```bash
npm install stripe @stripe/stripe-js @stripe/react-stripe-js
```
Create `app/api/payment/route.ts` to create a Stripe PaymentIntent.
Add the Stripe Elements component to `BookingWidget.tsx`.

### C. Update Blocked Dates Dynamically
Connect to a Google Calendar or Supabase table to pull booked dates in real time via an API route.

### D. Add Analytics
```bash
npm install @vercel/analytics
```
Add `<Analytics />` to `app/layout.tsx`. Zero config on Vercel.

---

## WhatsApp Number

Update the phone number in two places:
1. `components/WhatsAppButton.tsx` — `href="https://wa.me/YOURNUMBER"`
2. `components/Contact.tsx` — the WhatsApp link
3. `components/Footer.tsx` — the phone number
4. `lib/constants.ts` — `VILLA.whatsapp` and `VILLA.phone`

Format: country code + number, no `+` or spaces. Example: `6281234567890`

---

## Support

For questions or customisation, contact the development team.
Built to perform like a $10,000+ luxury hospitality website.

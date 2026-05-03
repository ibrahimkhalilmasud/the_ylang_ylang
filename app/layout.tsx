import type { Metadata } from 'next'
import './globals.css'
import StructuredData from '@/components/StructuredData'
import LoadingScreen from '@/components/LoadingScreen'
import CursorEffect from '@/components/CursorEffect'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.theylangylang.com'),
  title: 'Villa Ylang Ylang — Private Beachfront Sanctuary in Bali',
  description:
    'Experience ultra-luxury at Villa Ylang Ylang — an exclusive private beachfront villa in Bali offering 4 bedrooms, private pool, chef dining, and unrivalled ocean views.',
  keywords: [
    'Bali luxury villa',
    'private beachfront villa Bali',
    'Villa Ylang Ylang',
    'Bali villa rental',
    'luxury villa Bali',
  ],
  openGraph: {
    title: 'Villa Ylang Ylang — Private Beachfront Sanctuary in Bali',
    description:
      'An exclusive private beachfront villa in Bali — 4 bedrooms, ocean views, private chef, and world-class amenities.',
    url: 'https://www.theylangylang.com',
    siteName: 'Villa Ylang Ylang',
    images: [
      {
        url: '/images/facade.jpg',
        width: 1200,
        height: 630,
        alt: 'Villa Ylang Ylang — Beachfront Luxury Villa Bali',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Villa Ylang Ylang — Private Beachfront Sanctuary in Bali',
    description: 'An exclusive private beachfront villa in Bali.',
    images: ['/images/facade.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <StructuredData />
      </head>
      <body suppressHydrationWarning>
        <LoadingScreen />
        <CursorEffect />
        {children}
      </body>
    </html>
  )
}

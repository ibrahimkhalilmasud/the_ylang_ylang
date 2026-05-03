// Villa configuration — update these values as needed

export const VILLA = {
  name: 'Villa Ylang Ylang',
  tagline: 'A Private Beachfront Sanctuary in Bali',
  location: 'Bali, Indonesia',
  email: 'info@theylangylang.com',
  phone: '+62 812 3456 7890',
  whatsapp: '6281234567890',
  whatsappMessage: "Hello, I'm interested in booking Villa Ylang Ylang.",
  website: 'https://www.theylangylang.com',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15768.55174540855!2d115.0803!3d-8.6843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2433da0e97eaf%3A0xb8d6a2c9a8f97e45!2sVilla%20Ylang%20Ylang!5e0!3m2!1sen!2sid!4v1701234567890!5m2!1sen!2sid',
}

export const PRICING = {
  basePerNight: 1500,       // USD
  minNights: 3,
  maxGuests: 8,
  serviceFeePercent: 0.10,  // 10% service charge
  currency: 'USD',
  currencySymbol: '$',
}

// Dates that are NOT available for booking (YYYY-MM-DD)
export const BLOCKED_DATES: string[] = [
  '2025-12-24', '2025-12-25', '2025-12-26', '2025-12-27',
  '2025-12-28', '2025-12-29', '2025-12-30', '2025-12-31',
  '2026-01-01', '2026-01-02', '2026-01-03', '2026-01-04', '2026-01-05',
  '2026-02-14', '2026-02-15', '2026-02-16',
]

export const GALLERY_IMAGES = [
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

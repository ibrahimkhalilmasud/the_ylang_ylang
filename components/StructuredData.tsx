// JSON-LD Structured Data for rich Google search results
// Renders schema.org markup for the villa as a LodgingBusiness

export default function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: 'Villa Ylang Ylang',
    description:
      'An ultra-luxury private beachfront villa in Bali offering 4 bedrooms, private pool, private chef, and direct ocean access. Exclusively available for private stays of up to 8 guests.',
    url: 'https://www.theylangylang.com',
    telephone: '+62-812-3456-7890',
    email: 'info@theylangylang.com',
    image: [
      'https://www.theylangylang.com/images/facade.jpg',
      'https://www.theylangylang.com/images/beach-sunset.jpg',
      'https://www.theylangylang.com/images/pool-deck.jpg',
      'https://www.theylangylang.com/images/master-suite.jpg',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ID',
      addressRegion: 'Bali',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -8.6843,
      longitude: 115.0803,
    },
    priceRange: '$$$$$',
    starRating: {
      '@type': 'Rating',
      ratingValue: 5,
      bestRating: 5,
    },
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Private pool', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Beachfront', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Private chef', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Air conditioning', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Free WiFi', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Media room', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Airport transfer', value: true },
    ],
    numberOfRooms: 4,
    checkinTime: '14:00',
    checkoutTime: '12:00',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: 5.0,
      reviewCount: 47,
      bestRating: 5,
      worstRating: 1,
    },
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Charlotte M.' },
        reviewRating: { '@type': 'Rating', ratingValue: 5 },
        reviewBody:
          'The most extraordinary villa we have ever stayed in. Waking up to the sound of waves with no one else around — absolute perfection.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Jean-Pierre L.' },
        reviewRating: { '@type': 'Rating', ratingValue: 5 },
        reviewBody:
          'Every detail was considered. The staff were impeccable, the food exceptional, and the views took our breath away every single morning.',
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

import Script from 'next/script'

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "鍼灸HANE",
    "alternateName": "ハネ鍼灸院",
    "description": "福岡市中央区六本松の鍼灸院。お一人おひとりの症状に合わせたオーダーメイドの施術で、自然治癒力を高める。",
    "url": "https://acupuncture-clinic-site.vercel.app",
    "telephone": "+81-90-4181-7937",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "六本松4丁目5-39 ピア21 401号室",
      "postalCode": "810-0044",
      "addressLocality": "中央区",
      "addressRegion": "福岡県",
      "addressCountry": "JP"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.574537",
      "longitude": "130.375311"
    },
    "openingHours": [
      "Mo-Sa 10:00-20:00"
    ],
    "priceRange": "$$",
    "paymentAccepted": "Cash, Credit Card",
    "currenciesAccepted": "JPY",
    "founder": {
      "@type": "Person",
      "name": "羽田野 裕稀",
      "jobTitle": "鍼灸師・理学療法士"
    },
    "medicalSpecialty": [
      "Acupuncture",
      "Traditional Chinese Medicine",
      "Physical Therapy"
    ],
    "areaServed": {
      "@type": "City",
      "name": "福岡市"
    }
  }

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  )
}
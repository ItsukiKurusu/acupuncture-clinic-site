import Script from 'next/script'

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "鍼灸HANE",
    "alternateName": "ハネ鍼灸院",
    "description": "福岡市中央区六本松の鍼灸院。お一人おひとりの症状に合わせたオーダーメイドの施術で、自然治癒力を高める。",
    "url": "https://acupuncture-clinic-site.vercel.app",
    "telephone": "+81-XX-XXXX-XXXX", // 実際の電話番号に変更してください
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "六本松", // 実際の住所に変更してください
      "addressLocality": "中央区",
      "addressRegion": "福岡県",
      "addressCountry": "JP"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.574537", // 実際の緯度に変更してください
      "longitude": "130.375311" // 実際の経度に変更してください
    },
    "openingHours": [
      "Mo-Fr 09:00-18:00", // 実際の営業時間に変更してください
      "Sa 09:00-16:00"
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
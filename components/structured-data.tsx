import { CLINIC_NODE_ID, GBP_CANONICAL_URL, SITE_URL, TEL_E164 } from '@/lib/site-config'

// Googleビジネスプロフィールと同一事業者であることを伝えるための外部プロフィール。
// GBPを先頭に置く（Googleにとって最も重要な紐付け先のため）。
const SAME_AS = [
  GBP_CANONICAL_URL,
  "https://www.instagram.com/shinkyu.hane",
  "https://www.shinq-compass.jp/salon/review/37835",
]

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": CLINIC_NODE_ID,
    "name": "鍼灸HANE",
    "alternateName": "ハネ鍼灸院",
    "description": "福岡市中央区六本松の鍼灸院。お一人おひとりの症状に合わせたオーダーメイドの施術で、自然治癒力を高める。",
    "url": SITE_URL,
    "sameAs": SAME_AS,
    "telephone": TEL_E164,
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
      "latitude": "33.574620",
      "longitude": "130.379116"
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
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  )
}
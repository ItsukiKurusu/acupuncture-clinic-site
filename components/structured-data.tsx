import Script from 'next/script'
import { SITE_URL } from '@/lib/site-config'

// GBPのURLを取得し次第、下記 sameAs 配列に追加してください（例: "https://g.page/r/xxxxx"）。
// GBPと紐付けることで、Googleに「同一事業者」であることをより明確に伝えられます。
const SAME_AS = [
  "https://www.instagram.com/shinkyu.hane",
  "https://www.shinq-compass.jp/salon/review/37835",
]

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "鍼灸HANE",
    "alternateName": "ハネ鍼灸院",
    "description": "福岡市中央区六本松の鍼灸院。お一人おひとりの症状に合わせたオーダーメイドの施術で、自然治癒力を高める。",
    "url": SITE_URL,
    "sameAs": SAME_AS,
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
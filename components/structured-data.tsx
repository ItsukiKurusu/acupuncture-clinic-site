import { CLINIC_NODE_ID, GBP_CANONICAL_URL, GBP_URL, SITE_URL, TEL_E164 } from '@/lib/site-config'
import { DIRECTOR } from '@/lib/director'

// Googleビジネスプロフィールと同一事業者であることを伝えるための外部プロフィール。
// GBPを先頭に置く（Googleにとって最も重要な紐付け先のため）。
const SAME_AS = [
  GBP_CANONICAL_URL,
  "https://www.instagram.com/shinkyu.hane",
  "https://www.shinq-compass.jp/salon/review/37835",
]

// LocalBusiness 系のリッチリザルトは image が必須項目。
// 以前は欠けていたため「必須フィールドがありません」になり得た。
// 1200x630 の実ファイル（public/og/）を複数の比率で評価されるよう3枚渡す。
const IMAGES = [
  `${SITE_URL}/og/clinic.jpg`,
  `${SITE_URL}/og/treatment1.jpg`,
  `${SITE_URL}/og/director.jpg`,
]

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": CLINIC_NODE_ID,
    "name": "鍼灸HANE",
    "alternateName": "ハネ鍼灸院",
    "description": "福岡市中央区六本松の鍼灸院。理学療法士でもある鍼灸師が、お一人おひとりの症状に合わせたオーダーメイドの施術で、自然治癒力を高める。",
    "url": SITE_URL,
    "image": IMAGES,
    "logo": `${SITE_URL}/logo-feather.png`,
    "sameAs": SAME_AS,
    "hasMap": GBP_URL,
    "telephone": TEL_E164,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "六本松4丁目5-39 ピア21 401号室",
      "postalCode": "810-0044",
      "addressLocality": "福岡市中央区",
      "addressRegion": "福岡県",
      "addressCountry": "JP"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.574620,
      "longitude": 130.379116
    },
    // 文字列の openingHours より、Googleが推奨する openingHoursSpecification を使う
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "20:00"
      }
    ],
    "priceRange": "¥1,500〜¥9,000",
    "paymentAccepted": "Cash, Credit Card",
    "currenciesAccepted": "JPY",
    "founder": {
      "@type": "Person",
      "@id": DIRECTOR.id,
      "name": DIRECTOR.name,
      "jobTitle": DIRECTOR.jobTitle,
      "image": `${SITE_URL}${DIRECTOR.image}`,
      "url": DIRECTOR.url,
      "worksFor": { "@id": CLINIC_NODE_ID }
    },
    "medicalSpecialty": [
      "Acupuncture",
      "Traditional Chinese Medicine",
      "Physical Therapy"
    ],
    "areaServed": [
      { "@type": "City", "name": "福岡市" },
      { "@type": "Place", "name": "福岡市中央区六本松" }
    ]
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

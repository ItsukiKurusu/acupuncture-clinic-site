import { CLINIC_NODE_ID } from '@/lib/site-config'

// レビュー内容は components/sections/TestimonialsSection.tsx に実際に掲載している
// お客様の声と一致させています。表示内容と食い違わせないよう、変更する際は両方を揃えること。
//
// aggregateRating は意図的に持たせていない。自社サイト上の自社レビュー
// （self-serving review）はGoogleのリッチリザルト対象外であり、
// 件数の少ない評価値を出しても効果がないうえ、ガイドライン違反のリスクがある。
// 星評価の獲得はGoogleビジネスプロフィール側に寄せる。
export default function ReviewStructuredData() {
  const reviewData = {
    "@context": "https://schema.org",
    // トップページの事業者ノードと同一の@id・@typeを使い、1事業者に集約する。
    "@type": "MedicalBusiness",
    "@id": CLINIC_NODE_ID,
    "name": "鍼灸HANE",
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "かおる様"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "痛みも少なく、終わったあとはおでこから頭のあたりがスッキリ感じました。口角が上がったり、ほうれい線も薄くなったように思えました。1回試しただけでも効果があったと思います。また定期的に通いたいと思います！"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "butabarakarubi様"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "ほぼ全身が不調で、かかりつけの先生に相談したら羽多野先生をご紹介いただき本日初めて伺いました。細かい症状まで聞いてくださり、その原因や症状の改善の仕方をとても丁寧に説明してくださいました。施術後は動きも軽く可動域も広がりました。"
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(reviewData)
      }}
    />
  )
}

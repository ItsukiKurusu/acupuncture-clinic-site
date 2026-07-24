import Script from 'next/script'

// レビュー内容は components/sections/TestimonialsSection.tsx に実際に掲載している
// お客様の声と一致させています。表示内容と食い違わせないよう、変更する際は両方を揃えること。
export default function ReviewStructuredData() {
  const reviewData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
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
    <Script
      id="review-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(reviewData)
      }}
    />
  )
}

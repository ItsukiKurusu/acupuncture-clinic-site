import Script from 'next/script'

export default function ReviewStructuredData() {
  const reviewData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "鍼灸HANE",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8", // 実際の評価に変更してください
      "reviewCount": "25", // 実際のレビュー数に変更してください
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "A.S様" // 実際のレビューがあれば追加
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "丁寧な施術で症状が改善されました。先生の説明もわかりやすく安心できます。"
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
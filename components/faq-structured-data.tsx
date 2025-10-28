export default function FAQStructuredData() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "初回の診察料金はいくらですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "初回診察料は6,000円（税込）です。2回目以降は5,000円（税込）となります。各種保険も取り扱っております。"
        }
      },
      {
        "@type": "Question",
        "name": "予約は必要ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、完全予約制となっております。お電話またはオンラインでご予約をお取りください。当日予約も可能です。"
        }
      },
      {
        "@type": "Question",
        "name": "駐車場はありますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、専用駐車場を2台分ご用意しております。満車の場合は近隣のコインパーキングをご利用ください。"
        }
      },
      {
        "@type": "Question",
        "name": "どのような症状に効果がありますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "肩こり、腰痛、頭痛、自律神経失調症、不眠症、美容鍼、不妊治療など幅広い症状に対応しております。お気軽にご相談ください。"
        }
      },
      {
        "@type": "Question",
        "name": "営業時間を教えてください",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "平日：9:00-19:00、土曜日：9:00-17:00です。日曜日・祝日は休診となります。最終受付は終了時間の30分前までです。"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </>
  );
}
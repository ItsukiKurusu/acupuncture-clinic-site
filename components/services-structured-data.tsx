export default function ServicesStructuredData() {
  const servicesData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "鍼灸HANE",
    "url": "https://acupuncture-clinic-site.vercel.app",
    "logo": "https://acupuncture-clinic-site.vercel.app/logo-feather.png",
    "image": "https://acupuncture-clinic-site.vercel.app/acupuncture-clinic-interior.png",
    "description": "福岡市中央区六本松の鍼灸院。整体、鍼、電気、カッピング、美容鍼、EMSトレーニングなど多彩な施術メニューを提供。",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "六本松4丁目5-39 ピア21 401号室",
      "postalCode": "810-0044",
      "addressLocality": "中央区",
      "addressRegion": "福岡県",
      "addressCountry": "JP"
    },
    "telephone": "090-4181-7937",
    "openingHours": [
      "Mo-Sa 10:00-20:00"
    ],
    "priceRange": "¥¥",
    "acceptsReservations": true,
    "medicalSpecialty": [
      "鍼灸治療",
      "整体",
      "理学療法",
      "美容鍼",
      "電気治療",
      "カッピング"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "施術メニュー",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "施術（整体・鍼・電気・カッピング）",
            "description": "全身の筋肉の緊張を和らげ、血行を促進する総合的な施術"
          },
          "price": "6000",
          "priceCurrency": "JPY",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "施術（整体・鍼・電気・カッピング）局所",
            "description": "気になる部位に集中した施術"
          },
          "price": "4000",
          "priceCurrency": "JPY",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "眼精疲労改善",
            "description": "デスクワークやスマートフォンによる目の疲れを和らげる専門施術"
          },
          "price": "2000",
          "priceCurrency": "JPY",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "EMSトレーニング",
            "description": "電気刺激により筋肉を効率的に鍛える最新のトレーニング"
          },
          "price": "3000",
          "priceCurrency": "JPY",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "EMS×パーソナル",
            "description": "EMSトレーニングと個別指導を組み合わせた贅沢なコース"
          },
          "price": "8000",
          "priceCurrency": "JPY",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "美容鍼",
            "description": "お肌のハリや血色を改善し、自然な美しさを引き出す美容専門の鍼治療"
          },
          "price": "5000",
          "priceCurrency": "JPY",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "小顔矯正",
            "description": "フェイスラインを整え、リフトアップ効果を期待できる施術"
          },
          "price": "3000",
          "priceCurrency": "JPY",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "マトリクス式電界施術",
            "description": "最新の電界技術を活用した革新的な治療法"
          },
          "price": "1500",
          "priceCurrency": "JPY",
          "availability": "https://schema.org/InStock"
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesData) }}
      />
    </>
  );
}
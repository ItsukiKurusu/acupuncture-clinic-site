import { services, parseOffers } from "@/lib/services-data"
import { SITE_URL } from "@/lib/site-config"

// 料金は lib/services-data.ts（表示ページと共有）から自動生成している。
// 個別に金額を書き換えないこと（表示ページとズレる原因になる）。
export default function ServicesStructuredData() {
  const itemListElement = services.flatMap((service) => {
    const offers = parseOffers(service.price)
    return offers.map((offer) => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": offer.label ? `${service.name}（${offer.label}）` : service.name,
        "description": service.description
      },
      "price": String(offer.price),
      "priceCurrency": "JPY",
      "availability": "https://schema.org/InStock"
    }))
  })

  const servicesData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "鍼灸HANE",
    "url": SITE_URL,
    "logo": `${SITE_URL}/logo-feather.png`,
    "image": `${SITE_URL}/acupuncture-clinic-interior.png`,
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
      "itemListElement": itemListElement
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

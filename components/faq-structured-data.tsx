import { faqs } from "@/lib/faq-data"

// 画面に表示しているFAQ（components/sections/FaqSection.tsx）と
// 同じ内容を lib/faq-data.ts から取得して出力する。表示内容と食い違わせないこと。
export default function FAQStructuredData() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
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

import { CLINIC_NODE_ID, SITE_URL } from '@/lib/site-config'
import type { Symptom } from '@/lib/symptoms-data'

interface SymptomStructuredDataProps {
  symptom: Symptom
}

/**
 * 症状別ページの構造化データ。
 * MedicalWebPage（このページが何についてのページか）と、
 * FAQPage（ページ内のよくあるご質問）を出力する。
 * provider は トップページの事業者ノードを @id で参照し、別事業者と誤認されないようにする。
 */
export default function SymptomStructuredData({ symptom }: SymptomStructuredDataProps) {
  const pageUrl = `${SITE_URL}/symptoms/${symptom.slug}`

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: symptom.metaTitle,
        description: symptom.metaDescription,
        inLanguage: 'ja',
        about: {
          '@type': 'MedicalCondition',
          name: symptom.name,
        },
        provider: { '@id': CLINIC_NODE_ID },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `${SITE_URL}${symptom.ogImage}`,
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: symptom.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

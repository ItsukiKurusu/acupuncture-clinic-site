import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageBreadcrumb } from '@/components/page-breadcrumb'
import { SITE_URL } from '@/lib/site-config'
import { symptoms } from '@/lib/symptoms-data'

export const metadata: Metadata = {
  title: '症状別のご案内',
  description:
    '福岡市中央区六本松の鍼灸院「鍼灸HANE」の症状別ご案内。肩こり・腰痛・自律神経の乱れ・美容鍼について、原因の考え方から施術の流れ、料金までご紹介します。七隈線六本松駅から徒歩8分。',
  keywords: ['六本松 鍼灸院', '六本松 肩こり', '六本松 腰痛', '六本松 自律神経', '六本松 美容鍼', '福岡市中央区', '鍼灸HANE'],
  alternates: { canonical: `${SITE_URL}/symptoms` },
  openGraph: {
    title: '症状別のご案内｜鍼灸HANE - 中央区六本松の鍼灸院',
    description: '肩こり・腰痛・自律神経の乱れ・美容鍼について、原因の考え方から施術の流れ、料金までご紹介します。',
    url: `${SITE_URL}/symptoms`,
    siteName: '鍼灸HANE',
    images: [{ url: '/og/clinic.jpg', width: 1200, height: 630, alt: '鍼灸HANE 施術室内' }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '症状別のご案内｜鍼灸HANE',
    description: '肩こり・腰痛・自律神経の乱れ・美容鍼について、原因から施術の流れまでご紹介します。',
  },
}

export default function SymptomsIndexPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-14 max-w-5xl flex-1">
        <PageBreadcrumb
          className="mb-8"
          items={[{ name: 'ホーム', path: '/' }, { name: '症状別のご案内' }]}
        />

        <div className="text-center mb-12">
          <div
            className="inline-block rounded-full px-4 py-1 text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ backgroundColor: 'rgba(212,175,55,0.15)', color: '#b8960a' }}
          >
            Symptoms
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1c1917' }}>
            症状別のご案内
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            お悩みごとに、原因の考え方から施術の流れ、料金までご紹介しています。
            当てはまるものが分からない場合も、まずはご相談ください。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {symptoms.map((symptom) => (
            <Link
              key={symptom.slug}
              href={`/symptoms/${symptom.slug}`}
              className="group bg-white rounded-lg p-7 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ border: '1px solid #e8e0cc', borderTop: '3px solid #d4af37' }}
            >
              <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#b8960a] transition-colors">
                {symptom.name}
              </h2>
              <p className="text-gray-600 mb-5 leading-relaxed">{symptom.summary}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: '#b8960a' }}>
                詳しく見る
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

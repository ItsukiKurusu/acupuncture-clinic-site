import { Metadata } from 'next'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: '治療内容｜施術風景ギャラリー',
  description: '福岡市中央区六本松の鍼灸院「鍼灸HANE」の施術風景。電気治療・マッサージ・鍼施術・ストレッチケアなど、実際の治療の様子をご覧いただけます。',
  keywords: ['鍼灸HANE', '治療内容', '施術風景', '電気治療', '鍼施術', '六本松', '福岡市中央区'],
  alternates: {
    canonical: `${SITE_URL}/treatment`,
  },
  openGraph: {
    title: '治療内容｜鍼灸HANE - 中央区六本松の鍼灸院',
    description: '電気治療・マッサージ・鍼施術・ストレッチケアなど、実際の治療風景をご紹介します。',
    url: `${SITE_URL}/treatment`,
    siteName: '鍼灸HANE',
    images: [
      {
        url: '/treatment1.jpg',
        width: 1200,
        height: 630,
        alt: '鍼灸HANE 施術風景',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '治療内容｜鍼灸HANE',
    description: '福岡市中央区六本松の鍼灸院の施術風景をご紹介します。',
  },
}

export default function TreatmentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

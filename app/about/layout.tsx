import { Metadata } from 'next'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: '当院について｜院長紹介',
  description: '福岡市中央区六本松の鍼灸院「鍼灸HANE」院長・羽田野裕稀（鍼灸師/理学療法士）のご紹介。運動・筋肉・骨格の知識を活かした、無理のない心地よい施術を大切にしています。',
  keywords: ['鍼灸HANE', '院長', '羽田野裕稀', '鍼灸師', '理学療法士', '六本松', '福岡市中央区'],
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: '当院について｜鍼灸HANE - 中央区六本松の鍼灸院',
    description: '院長・羽田野裕稀（鍼灸師/理学療法士）のご紹介。お一人おひとりの状態に合わせた、無理のない心地よい施術を大切にしています。',
    url: `${SITE_URL}/about`,
    siteName: '鍼灸HANE',
    images: [
      {
        url: '/director-portrait1.jpg',
        width: 450,
        height: 560,
        alt: '院長 羽田野 裕稀',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '当院について｜鍼灸HANE',
    description: '院長・羽田野裕稀（鍼灸師/理学療法士）のご紹介。福岡市中央区六本松の鍼灸院。',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

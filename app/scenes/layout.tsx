import { Metadata } from 'next'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: '院内風景｜施術の様子',
  description: '福岡市中央区六本松の鍼灸院「鍼灸HANE」の院内風景。清潔で落ち着いた空間での施術の様子を写真でご紹介します。',
  keywords: ['鍼灸HANE', '院内風景', '施術風景', '六本松', '福岡市中央区', '鍼灸院'],
  alternates: {
    canonical: `${SITE_URL}/scenes`,
  },
  openGraph: {
    title: '院内風景｜鍼灸HANE - 中央区六本松の鍼灸院',
    description: '清潔で落ち着いた院内での施術の様子を写真でご紹介します。',
    url: `${SITE_URL}/scenes`,
    siteName: '鍼灸HANE',
    images: [
      {
        url: '/treatment1.jpg',
        width: 1200,
        height: 630,
        alt: '鍼灸HANE 院内風景',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '院内風景｜鍼灸HANE',
    description: '福岡市中央区六本松の鍼灸院の院内風景をご紹介します。',
  },
}

export default function ScenesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

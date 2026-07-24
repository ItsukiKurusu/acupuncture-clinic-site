import { Metadata } from 'next'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'MATRIX WAVE｜業界唯一の電界施術',
  description: '鍼灸HANE（福岡市中央区六本松）が提供する次世代トリートメント「MATRIX WAVE」。生体電流に近い直流電流でイオンバランスを整え、細胞レベルから活性化する業界唯一の電界施術です。',
  keywords: ['MATRIX WAVE', 'マトリクスウェーブ', '電界施術', '鍼灸HANE', '六本松', '福岡市中央区', 'Bio-Field Treatment'],
  alternates: {
    canonical: `${SITE_URL}/matrix-wave`,
  },
  openGraph: {
    title: 'MATRIX WAVE｜鍼灸HANE - 業界唯一の電界施術',
    description: '生体電流に近い直流電流でイオンバランスを整え、細胞レベルから活性化する次世代トリートメント。',
    url: `${SITE_URL}/matrix-wave`,
    siteName: '鍼灸HANE',
    images: [
      {
        url: '/matrix-wave.png',
        width: 1200,
        height: 630,
        alt: 'MATRIX WAVE',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MATRIX WAVE｜鍼灸HANE',
    description: '業界唯一の電界施術。福岡市中央区六本松の鍼灸HANEが提供する次世代トリートメント。',
  },
}

export default function MatrixWaveLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

import { Metadata } from 'next'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'いるか新聞｜六本松いきいきコラム',
  description: '地域情報誌「いるか」に掲載している鍼灸HANEのセルフケアコラム。福岡市中央区六本松エリアの皆様へ、毎月役立つ健康情報をお届けしています。',
  keywords: ['いるか新聞', '六本松', '福岡市中央区', 'セルフケア', '鍼灸HANE', '地域情報誌'],
  alternates: {
    canonical: `${SITE_URL}/iruka`,
  },
  openGraph: {
    title: 'いるか新聞｜鍼灸HANE - 六本松いきいきコラム',
    description: '地域情報誌「いるか」に掲載している鍼灸HANEのセルフケアコラム・アーカイブ。',
    url: `${SITE_URL}/iruka`,
    siteName: '鍼灸HANE',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'いるか新聞｜鍼灸HANE',
    description: '六本松いきいきコラム。毎月役立つ健康情報をお届けしています。',
  },
}

export default function IrukaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

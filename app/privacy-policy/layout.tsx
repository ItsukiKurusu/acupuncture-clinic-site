import { Metadata } from 'next'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: '鍼灸HANE（福岡市中央区六本松）のプライバシーポリシー。当サイトで取得する情報の種類、利用目的、Cookieの利用状況についてご案内します。',
  alternates: {
    canonical: `${SITE_URL}/privacy-policy`,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

import { Metadata } from 'next'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: '鍼灸HANE（福岡市中央区六本松）のプライバシーポリシー。当サイトで取得する情報の種類、利用目的、Cookieの利用状況についてご案内します。',
  alternates: {
    canonical: `${SITE_URL}/privacy-policy`,
  },
  // 最上位の流入クエリが intitle:"プライバシーポリシー" "090" or "080" or "070" ——
  // 営業リスト業者が携帯番号を機械収集する検索構文だった（全クリックの38%を占有）。
  // 掲示義務はページを残せば満たせるため、検索結果からは外す。
  robots: {
    index: false,
    follow: true,
  },
}

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

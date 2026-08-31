import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { BOOKING_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'ページが見つかりません',
  description: 'お探しのページは見つかりませんでした。鍼灸HANE（福岡市中央区六本松）のトップページから、症状別のご案内や施術内容をご覧いただけます。',
  // 存在しないURLを検索結果に載せない。
  robots: { index: false, follow: true },
}

// 迷い込んだ方をそのまま帰らせないための導線。予約・症状ページへ直接つなぐ。
const destinations = [
  { href: '/symptoms', label: '症状別のご案内', description: '肩こり・腰痛・自律神経の乱れ・美容鍼' },
  { href: '/services', label: '施術内容・料金', description: '施術メニューと料金の一覧' },
  { href: '/about', label: '当院について', description: '院長・羽田野裕稀のご紹介' },
  { href: '/blog', label: 'ブログ', description: 'セルフケアのツボと院からのお知らせ' },
]

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-20 max-w-3xl flex-1">
        <div className="text-center mb-12">
          <p
            className="text-sm font-semibold tracking-[0.35em] uppercase mb-4"
            style={{ color: '#b8960a' }}
          >
            404
          </p>
          <h1
            className="text-3xl md:text-4xl font-bold mb-5"
            style={{ color: '#1c1917', fontFamily: 'var(--font-serif)' }}
          >
            お探しのページが見つかりませんでした
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            アドレスが変更されたか、削除された可能性があります。
            <br className="hidden sm:block" />
            下記からお探しの内容へお進みください。
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 mb-12">
          {destinations.map(({ href, label, description }) => (
            <Link
              key={href}
              href={href}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ border: '1px solid #e8e0cc', borderTop: '3px solid #d4af37' }}
            >
              <span className="block font-bold mb-1.5" style={{ color: '#1c1917' }}>
                {label}
              </span>
              <span className="block text-sm text-muted-foreground">{description}</span>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full text-sm font-bold transition-all hover:scale-105"
            style={{ backgroundColor: '#06C755', color: '#fff', boxShadow: '0 4px 18px rgba(6,199,85,0.32)' }}
          >
            LINEでご予約はこちら
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}

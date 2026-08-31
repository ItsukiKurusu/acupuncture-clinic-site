import { Metadata } from 'next'
import { getAllPosts } from '@/lib/blog'
import { BlogFilterableList } from '@/components/blog-filterable-list'
import { SITE_URL } from '@/lib/site-config'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import BreadcrumbStructuredData from '@/components/breadcrumb-structured-data'

export const metadata: Metadata = {
  title: 'ブログ｜健康情報・お知らせ',
  description: '福岡市中央区六本松の鍼灸院「鍼灸HANE」のブログ。症状別のツボ・セルフケアなどの「健康情報」と、トレーナー活動報告などの「お知らせ」をカテゴリー別にお届けします。',
  keywords: ['鍼灸HANE', 'ブログ', '健康情報', 'お知らせ', '活動報告', 'ツボ', 'セルフケア', '六本松', '福岡市中央区', '肩こり', '腰痛', '冷え性'],
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: 'ブログ｜鍼灸HANE - 中央区六本松の鍼灸院',
    description: '症状別のツボ・セルフケアなどの健康情報と、院からのお知らせ・活動報告をお届けします。',
    url: `${SITE_URL}/blog`,
    siteName: '鍼灸HANE',
    images: [{ url: '/og/clinic.jpg', width: 1200, height: 630, alt: '鍼灸HANE 施術室内' }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ブログ｜鍼灸HANE',
    description: '福岡市中央区六本松の鍼灸院が発信する健康情報と、院からのお知らせ・活動報告。',
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <BreadcrumbStructuredData items={[{ name: 'ホーム', path: '/' }, { name: 'ブログ' }]} />
      <Header />
      <div className="container mx-auto px-4 py-16 max-w-6xl flex-1">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <div className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--gold-strong)" }}>
            Blog
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#1c1917" }}>
            ブログ
          </h1>
          <p className="text-lg text-muted-foreground">
            ツボ・セルフケアの「健康情報」と、活動報告などの「お知らせ」をお届けします
          </p>
        </div>

        {/* 記事一覧 */}
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">記事がまだありません。</p>
          </div>
        ) : (
          <BlogFilterableList posts={posts} />
        )}
      </div>
      <Footer />
    </div>
  )
}

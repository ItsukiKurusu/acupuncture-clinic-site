import { Metadata } from 'next'
import { getAllPosts } from '@/lib/blog'
import { BlogFilterableList } from '@/components/blog-filterable-list'
import { SITE_URL } from '@/lib/site-config'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'ブログ｜ツボ・セルフケア情報',
  description: '福岡市中央区六本松の鍼灸院「鍼灸HANE」が発信する、症状別のツボ・セルフケア情報。肩こり・腰痛・冷え・自律神経の乱れなど、日常で役立つ健康情報をお届けします。',
  keywords: ['鍼灸HANE', 'ブログ', 'ツボ', 'セルフケア', '六本松', '福岡市中央区', '肩こり', '腰痛', '冷え性'],
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: 'ブログ｜鍼灸HANE - 中央区六本松の鍼灸院',
    description: '症状別のツボ・セルフケア情報をお届けします。',
    url: `${SITE_URL}/blog`,
    siteName: '鍼灸HANE',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ブログ｜鍼灸HANE',
    description: '福岡市中央区六本松の鍼灸院が発信する、症状別のツボ・セルフケア情報。',
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-16 max-w-6xl flex-1">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <div className="inline-block rounded-full px-4 py-1 text-xs font-semibold tracking-widest uppercase mb-4" style={{ backgroundColor: "rgba(212,175,55,0.15)", color: "#b8960a" }}>
            Blog
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#1c1917" }}>
            ブログ
          </h1>
          <p className="text-lg text-muted-foreground">
            鍼灸、健康、治療に関する最新情報をお届けします
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

import { Metadata } from 'next'
import { getAllPosts } from '@/lib/blog'
import { BlogFilterableList } from '@/components/blog-filterable-list'

export const metadata: Metadata = {
  title: 'ブログ | 鍼灸院',
  description: '鍼灸、健康、治療に関する最新情報をお届けします。',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
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
    </div>
  )
}

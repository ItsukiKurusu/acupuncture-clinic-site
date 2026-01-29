import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import { Calendar, Tag, ArrowLeft } from 'lucide-react'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return {
      title: '記事が見つかりません',
    }
  }

  return {
    title: `${post.title} | 鍼灸院ブログ`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <article className="container mx-auto px-4 py-16 max-w-4xl">
        {/* 戻るリンク */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#d4af37] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>ブログ一覧に戻る</span>
        </Link>

        {/* タイトル */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          {post.title}
        </h1>

        {/* メタ情報 */}
        <div className="flex flex-wrap gap-4 text-gray-600 mb-8 pb-8 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span>{post.date}</span>
          </div>

          {post.author && (
            <div className="flex items-center gap-2">
              <span>{post.author}</span>
            </div>
          )}

          {post.tags && post.tags.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-5 h-5" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-[#d4af37]/10 text-[#d4af37] rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* 記事本文 */}
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* 記事末尾のCTA */}
        <div className="mt-16 p-8 bg-gradient-to-r from-[#d4af37]/10 to-[#d4af37]/5 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ご予約・お問い合わせ
          </h3>
          <p className="text-gray-700 mb-6">
            お体の不調やご相談がございましたら、お気軽にご連絡ください。
          </p>
          <Link
            href="/#contact"
            className="standout-button"
            style={{ backgroundColor: '#d4af37' }}
          >
            お問い合わせはこちら
          </Link>
        </div>

        {/* 戻るリンク（下部） */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#d4af37] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>ブログ一覧に戻る</span>
          </Link>
        </div>
      </article>
    </div>
  )
}

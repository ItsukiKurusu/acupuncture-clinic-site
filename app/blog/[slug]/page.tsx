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
          className="prose prose-lg max-w-none
            prose-headings:text-gray-900 
            prose-headings:font-bold
            prose-h1:text-3xl prose-h1:mt-0 prose-h1:mb-6
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-[#d4af37] prose-a:no-underline hover:prose-a:underline
            prose-strong:text-gray-900 prose-strong:font-bold
            prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
            prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
            prose-li:text-gray-700 prose-li:mb-2
            prose-blockquote:border-l-4 prose-blockquote:border-[#d4af37] 
            prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600
            prose-code:text-[#d4af37] prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded
            prose-pre:bg-gray-900 prose-pre:text-gray-100
            prose-img:rounded-lg prose-img:shadow-lg
            prose-video:rounded-lg prose-video:shadow-lg"
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

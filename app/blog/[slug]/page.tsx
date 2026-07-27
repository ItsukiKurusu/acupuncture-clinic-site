import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug, getRelatedPosts, resolvePostImage } from '@/lib/blog'
import { Calendar, Tag, ArrowLeft } from 'lucide-react'
import { SITE_URL } from '@/lib/site-config'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import BlogPostingStructuredData from '@/components/blog-posting-structured-data'
import { PageBreadcrumb } from '@/components/page-breadcrumb'

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

  const ogImage = resolvePostImage(post.coverImage)

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `${SITE_URL}/blog/${slug}`,
    },
    openGraph: {
      title: `${post.title}｜鍼灸HANE`,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${slug}`,
      siteName: '鍼灸HANE',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: 'ja_JP',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [ogImage],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(slug, post.tags)

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <BlogPostingStructuredData post={post} slug={slug} />
      <Header />
      <article className="container mx-auto px-4 py-16 max-w-4xl flex-1">
        {/* パンくずリスト */}
        <PageBreadcrumb
          className="mb-6"
          items={[
            { name: 'ホーム', path: '/' },
            { name: 'ブログ', path: '/blog' },
            { name: post.title },
          ]}
        />

        {/* 戻るリンク */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#D4561C] mb-8 transition-colors"
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
                  className="px-3 py-1 bg-[#D4561C]/10 text-[#D4561C] rounded-full text-sm font-medium"
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

        {/* 関連記事 */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">関連記事</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="block p-5 bg-white border border-gray-200 rounded-lg hover:border-[#D4561C] hover:shadow-md transition-all"
                >
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {relatedPost.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* 記事末尾のCTA */}
        <div className="mt-16 p-8 bg-gradient-to-r from-[#D4561C]/10 to-[#D4561C]/5 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ご予約・お問い合わせ
          </h3>
          <p className="text-gray-700 mb-6">
            お体の不調やご相談がございましたら、お気軽にご連絡ください。
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/services"
              className="standout-button"
              style={{ backgroundColor: '#472808' }}
            >
              施術内容・料金を見る
            </Link>
            <Link
              href="/#contact"
              className="standout-button"
              style={{ backgroundColor: '#D4561C' }}
            >
              お問い合わせはこちら
            </Link>
          </div>
        </div>

        {/* 戻るリンク（下部） */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#D4561C] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>ブログ一覧に戻る</span>
          </Link>
        </div>
      </article>
      <Footer />
    </div>
  )
}

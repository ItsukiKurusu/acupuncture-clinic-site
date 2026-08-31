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
import { CategoryBadge } from '@/components/category-badge'
import { getSymptomsForPost } from '@/lib/symptoms-data'

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

  const relatedPosts = getRelatedPosts(slug, post.tags, post.category)
  // セルフケア記事から症状別ページへ内部リンクを通し、検索流入を主力ページへ流す。
  const relatedSymptoms = getSymptomsForPost(slug, post.tags)

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
            { name: post.category, path: `/blog?category=${encodeURIComponent(post.category)}` },
            { name: post.title },
          ]}
        />

        {/* 戻るリンク */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#d4af37] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>ブログ一覧に戻る</span>
        </Link>

        {/* カテゴリー */}
        <CategoryBadge category={post.category} className="mb-4" />

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

        {/* 関連記事 */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              関連記事（{post.category}）
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="block p-5 bg-white border border-gray-200 rounded-lg hover:border-[#d4af37] hover:shadow-md transition-all"
                >
                  <CategoryBadge category={relatedPost.category} className="mb-2" />
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

        {/* 関連する症状ページ。タグから該当が引けない記事でも一覧へは必ず導線を通す。 */}
        <aside className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            このお悩みの施術について
          </h2>
          {relatedSymptoms.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 mb-6">
              {relatedSymptoms.map((symptom) => (
                <Link
                  key={symptom.slug}
                  href={`/symptoms/${symptom.slug}`}
                  className="block bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  style={{ border: '1px solid #e8e0cc', borderTop: '3px solid #d4af37' }}
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {symptom.name}の施術について
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{symptom.summary}</p>
                </Link>
              ))}
            </div>
          )}
          <Link
            href="/symptoms"
            className="inline-flex items-center gap-1.5 text-sm font-semibold hover:underline"
            style={{ color: '#b8960a' }}
          >
            症状別のご案内をすべて見る
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </aside>

        {/* 記事末尾のCTA */}
        <div className="mt-16 p-8 bg-gradient-to-r from-[#d4af37]/10 to-[#d4af37]/5 rounded-lg text-center">
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
              style={{ backgroundColor: '#1c1917' }}
            >
              施術内容・料金を見る
            </Link>
            <Link
              href="/#contact"
              className="standout-button"
              style={{ backgroundColor: '#d4af37' }}
            >
              お問い合わせはこちら
            </Link>
          </div>
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
      <Footer />
    </div>
  )
}

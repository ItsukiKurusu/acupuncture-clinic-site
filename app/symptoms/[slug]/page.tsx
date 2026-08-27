import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageBreadcrumb } from '@/components/page-breadcrumb'
import { SymptomContent } from '@/components/symptom-content'
import SymptomStructuredData from '@/components/symptom-structured-data'
import { SITE_URL } from '@/lib/site-config'
import { getSymptomBySlug, symptoms } from '@/lib/symptoms-data'
import { getAllPosts } from '@/lib/blog'

interface SymptomPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return symptoms.map((symptom) => ({ slug: symptom.slug }))
}

export async function generateMetadata({ params }: SymptomPageProps): Promise<Metadata> {
  const { slug } = await params
  const symptom = getSymptomBySlug(slug)

  if (!symptom) {
    return { title: 'ページが見つかりません' }
  }

  const url = `${SITE_URL}/symptoms/${symptom.slug}`

  return {
    // metaTitleに院名が含まれるため、layout.tsxのテンプレート付与を打ち消す
    title: { absolute: symptom.metaTitle },
    description: symptom.metaDescription,
    keywords: symptom.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: symptom.metaTitle,
      description: symptom.metaDescription,
      url,
      siteName: '鍼灸HANE',
      images: [{ url: symptom.ogImage, width: 1200, height: 630, alt: symptom.heading }],
      locale: 'ja_JP',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: symptom.metaTitle,
      description: symptom.metaDescription,
      images: [symptom.ogImage],
    },
  }
}

export default async function SymptomPage({ params }: SymptomPageProps) {
  const { slug } = await params
  const symptom = getSymptomBySlug(slug)

  if (!symptom) {
    notFound()
  }

  // 記事は存在するものだけを表示する（記事名の変更でページが壊れないように）
  const allPosts = getAllPosts()
  const relatedPosts = symptom.relatedPostSlugs
    .map((postSlug) => allPosts.find((post) => post.slug === postSlug))
    .filter((post): post is NonNullable<typeof post> => Boolean(post))

  const otherSymptoms = symptoms.filter((other) => other.slug !== symptom.slug)

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SymptomStructuredData symptom={symptom} />
      <Header />
      <main className="container mx-auto px-4 py-14 max-w-4xl flex-1">
        <PageBreadcrumb
          className="mb-8"
          items={[
            { name: 'ホーム', path: '/' },
            { name: '症状別のご案内', path: '/symptoms' },
            { name: symptom.name },
          ]}
        />
        <SymptomContent symptom={symptom} relatedPosts={relatedPosts} otherSymptoms={otherSymptoms} />
      </main>
      <Footer />
    </div>
  )
}

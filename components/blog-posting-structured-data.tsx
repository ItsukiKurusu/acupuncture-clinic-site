import { CLINIC_NODE_ID, SITE_URL } from '@/lib/site-config'
import { DIRECTOR } from '@/lib/director'
import { getPostLastModified, resolvePostImage, type BlogPost } from '@/lib/blog'

interface BlogPostingStructuredDataProps {
  post: BlogPost
  slug: string
}

export default function BlogPostingStructuredData({ post, slug }: BlogPostingStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": `${SITE_URL}${resolvePostImage(post.coverImage)}`,
    "articleSection": post.category,
    "datePublished": post.date,
    "dateModified": getPostLastModified(post),
    "url": `${SITE_URL}/blog/${slug}`,
    "inLanguage": "ja",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${slug}`,
    },
    // 全記事を院長が執筆・監修している。トップページの MedicalBusiness.founder と
    // 同じ @id を使い、Googleに「同一人物（国家資格保持者）」として認識させる。
    "author": {
      "@type": "Person",
      "@id": DIRECTOR.id,
      "name": DIRECTOR.name,
      "jobTitle": DIRECTOR.jobTitle,
      "url": DIRECTOR.url,
      "image": `${SITE_URL}${DIRECTOR.image}`,
      "worksFor": { "@id": CLINIC_NODE_ID },
    },
    "publisher": {
      "@type": "Organization",
      "@id": CLINIC_NODE_ID,
      "name": "鍼灸HANE",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/logo-feather.png`,
      },
    },
    ...(post.tags && post.tags.length > 0 ? { "keywords": post.tags.join(', ') } : {}),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

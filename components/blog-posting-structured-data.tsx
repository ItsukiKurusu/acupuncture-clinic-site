import { SITE_URL } from '@/lib/site-config'
import { resolvePostImage, type BlogPost } from '@/lib/blog'

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
    "datePublished": post.date,
    "dateModified": post.date,
    "url": `${SITE_URL}/blog/${slug}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${slug}`,
    },
    "author": {
      "@type": "Person",
      "name": post.author || "鍼灸HANE",
    },
    "publisher": {
      "@type": "Organization",
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

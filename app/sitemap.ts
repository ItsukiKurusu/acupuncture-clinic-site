import { MetadataRoute } from 'next'
import fs from 'node:fs'
import path from 'node:path'
import { getAllPosts } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://acupuncture-clinic-site.vercel.app').replace(/\/$/, '')

  const getFileLastModified = (relativeFilePath: string): Date => {
    const fullPath = path.join(process.cwd(), relativeFilePath)
    if (!fs.existsSync(fullPath)) {
      return new Date()
    }

    return fs.statSync(fullPath).mtime
  }

  const parseDate = (dateString?: string): Date | null => {
    if (!dateString) {
      return null
    }

    const parsed = new Date(dateString)
    return Number.isNaN(parsed.getTime()) ? null : parsed
  }

  const blogPosts = getAllPosts()
  const latestBlogDate = parseDate(blogPosts[0]?.date)

  const staticPageDefinitions = [
    { route: '', sourceFile: 'app/page.tsx', changeFrequency: 'monthly' as const, priority: 1 },
    { route: '/about', sourceFile: 'app/about/page.tsx', changeFrequency: 'monthly' as const, priority: 0.8 },
    { route: '/treatment', sourceFile: 'app/treatment/page.tsx', changeFrequency: 'monthly' as const, priority: 0.8 },
    { route: '/services', sourceFile: 'app/services/page.tsx', changeFrequency: 'monthly' as const, priority: 0.9 },
    { route: '/scenes', sourceFile: 'app/scenes/page.tsx', changeFrequency: 'monthly' as const, priority: 0.6 },
    { route: '/matrix-wave', sourceFile: 'app/matrix-wave/page.tsx', changeFrequency: 'monthly' as const, priority: 0.9 },
    { route: '/blog', sourceFile: 'app/blog/page.tsx', changeFrequency: 'weekly' as const, priority: 0.8 },
  ]

  const staticPages: MetadataRoute.Sitemap = staticPageDefinitions.map((page) => {
    const pageLastModified =
      page.route === '/blog' ? (latestBlogDate ?? getFileLastModified(page.sourceFile)) : getFileLastModified(page.sourceFile)

    return {
      url: `${baseUrl}${page.route}`,
      lastModified: pageLastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    }
  })

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: parseDate(post.date) ?? getFileLastModified(`posts/${post.slug}.md`),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...blogPages]
}
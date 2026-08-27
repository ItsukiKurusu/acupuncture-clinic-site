import { MetadataRoute } from 'next'
import fs from 'node:fs'
import path from 'node:path'
import { execSync } from 'node:child_process'
import { getAllPosts } from '@/lib/blog'
import { symptoms } from '@/lib/symptoms-data'
import { SITE_URL } from '@/lib/site-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL

  // ビルド環境のファイルmtimeはgit checkout時刻にリセットされることが
  // 多く実際の更新日と無関係になりがちなため、gitの最終コミット日時を
  // 優先し、取得できない場合のみmtimeにフォールバックする。
  const getGitLastModified = (relativeFilePath: string): Date | null => {
    try {
      const output = execSync(`git log -1 --format=%cI -- "${relativeFilePath}"`, {
        cwd: process.cwd(),
        stdio: ['ignore', 'pipe', 'ignore'],
      }).toString().trim()

      if (!output) {
        return null
      }

      const date = new Date(output)
      return Number.isNaN(date.getTime()) ? null : date
    } catch {
      return null
    }
  }

  const getFileLastModified = (relativeFilePath: string): Date => {
    const gitDate = getGitLastModified(relativeFilePath)
    if (gitDate) {
      return gitDate
    }

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

  // /privacy-policy はnoindex（番号収集クエリ対策）のため、
  // 矛盾したシグナルを送らないようサイトマップには含めない。
  const staticPageDefinitions = [
    { route: '', sourceFile: 'app/page.tsx', changeFrequency: 'monthly' as const, priority: 1 },
    { route: '/about', sourceFile: 'app/about/page.tsx', changeFrequency: 'monthly' as const, priority: 0.8 },
    { route: '/services', sourceFile: 'app/services/page.tsx', changeFrequency: 'monthly' as const, priority: 0.9 },
    { route: '/scenes', sourceFile: 'app/scenes/page.tsx', changeFrequency: 'monthly' as const, priority: 0.6 },
    { route: '/iruka', sourceFile: 'app/iruka/page.tsx', changeFrequency: 'monthly' as const, priority: 0.6 },
    { route: '/matrix-wave', sourceFile: 'app/matrix-wave/page.tsx', changeFrequency: 'monthly' as const, priority: 0.9 },
    { route: '/blog', sourceFile: 'app/blog/page.tsx', changeFrequency: 'weekly' as const, priority: 0.8 },
    { route: '/symptoms', sourceFile: 'app/symptoms/page.tsx', changeFrequency: 'monthly' as const, priority: 0.9 },
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

  // 症状別ページは集客の主力ページのため、記事より高い優先度を設定する
  const symptomPages: MetadataRoute.Sitemap = symptoms.map((symptom) => ({
    url: `${baseUrl}/symptoms/${symptom.slug}`,
    lastModified: getFileLastModified('lib/symptoms-data.ts'),
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  return [...staticPages, ...symptomPages, ...blogPages]
}
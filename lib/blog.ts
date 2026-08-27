import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import {
  DEFAULT_BLOG_CATEGORY,
  normalizeCategory,
  type BlogCategory,
} from '@/lib/blog-categories'

// カテゴリー定義は '@/lib/blog-categories' が正、利便性のため型を再エクスポートする
export type { BlogCategory } from '@/lib/blog-categories'

const postsDirectory = path.join(process.cwd(), 'posts')

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  category: BlogCategory
  coverImage?: string
  author?: string
  tags?: string[]
}

export interface BlogPostMeta {
  slug: string
  title: string
  date: string
  excerpt: string
  category: BlogCategory
  coverImage?: string
  author?: string
  tags?: string[]
}

/**
 * 全ての記事のメタデータを取得（日付順にソート）
 */
export function getAllPosts(): BlogPostMeta[] {
  // postsディレクトリが存在しない場合は空配列を返す
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      return {
        slug,
        title: data.title || '',
        date: data.date || '',
        excerpt: data.excerpt || '',
        category: normalizeCategory(data.category),
        coverImage: data.coverImage,
        author: data.author,
        tags: data.tags,
      }
    })

  // 日付順にソート（新しい順）
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

/**
 * スラッグから記事の詳細を取得
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // MarkdownをHTMLに変換
    const contentHtml = await marked(content)

    return {
      slug,
      title: data.title || '',
      date: data.date || '',
      excerpt: data.excerpt || '',
      content: contentHtml,
      category: normalizeCategory(data.category),
      coverImage: data.coverImage,
      author: data.author,
      tags: data.tags,
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

/**
 * 最新のN件の記事を取得
 */
export function getRecentPosts(count: number = 3): BlogPostMeta[] {
  const allPosts = getAllPosts()
  return allPosts.slice(0, count)
}

/**
 * タグで記事をフィルタリング
 */
export function getPostsByTag(tag: string): BlogPostMeta[] {
  const allPosts = getAllPosts()
  return allPosts.filter((post) => post.tags?.includes(tag))
}

/**
 * カテゴリーで記事をフィルタリング
 */
export function getPostsByCategory(category: BlogCategory): BlogPostMeta[] {
  const allPosts = getAllPosts()
  return allPosts.filter((post) => post.category === category)
}

const FALLBACK_POST_IMAGE = '/acupuncture-clinic-interior.png'

/**
 * OGP/構造化データ用の画像URLを解決する（動画や未設定時はフォールバック画像を返す）
 */
export function resolvePostImage(coverImage?: string): string {
  if (coverImage && /\.(png|jpe?g|webp|gif)$/i.test(coverImage)) {
    return coverImage
  }
  return FALLBACK_POST_IMAGE
}

/**
 * 現在の記事と同じカテゴリー内で、タグを共有する関連記事を取得（共有タグ数→新しい順）
 * タグが一致する記事がない場合は同カテゴリーの新着記事で補完する
 */
export function getRelatedPosts(
  currentSlug: string,
  tags: string[] | undefined,
  category: BlogCategory = DEFAULT_BLOG_CATEGORY,
  count: number = 3,
): BlogPostMeta[] {
  const sameCategoryPosts = getAllPosts().filter(
    (post) => post.slug !== currentSlug && post.category === category,
  )

  const scored = sameCategoryPosts
    .map((post) => ({
      post,
      sharedTagCount: post.tags?.filter((tag) => tags?.includes(tag)).length ?? 0,
    }))
    .filter((entry) => entry.sharedTagCount > 0)

  scored.sort((a, b) => {
    if (a.sharedTagCount !== b.sharedTagCount) {
      return b.sharedTagCount - a.sharedTagCount
    }
    return a.post.date < b.post.date ? 1 : -1
  })

  const related = scored.slice(0, count).map((entry) => entry.post)

  // タグ一致が足りない場合は同カテゴリーの新着記事で補完
  if (related.length < count) {
    const relatedSlugs = new Set(related.map((post) => post.slug))
    for (const post of sameCategoryPosts) {
      if (related.length >= count) break
      if (!relatedSlugs.has(post.slug)) {
        related.push(post)
        relatedSlugs.add(post.slug)
      }
    }
  }

  return related
}

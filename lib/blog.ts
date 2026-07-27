import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const postsDirectory = path.join(process.cwd(), 'posts')

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  coverImage?: string
  author?: string
  tags?: string[]
}

export interface BlogPostMeta {
  slug: string
  title: string
  date: string
  excerpt: string
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
 * 現在の記事とタグを共有する関連記事を取得（共有タグ数→新しい順）
 */
export function getRelatedPosts(currentSlug: string, tags: string[] | undefined, count: number = 3): BlogPostMeta[] {
  if (!tags || tags.length === 0) {
    return []
  }

  const allPosts = getAllPosts().filter((post) => post.slug !== currentSlug)

  const scored = allPosts
    .map((post) => ({
      post,
      sharedTagCount: post.tags?.filter((tag) => tags.includes(tag)).length ?? 0,
    }))
    .filter((entry) => entry.sharedTagCount > 0)

  scored.sort((a, b) => {
    if (a.sharedTagCount !== b.sharedTagCount) {
      return b.sharedTagCount - a.sharedTagCount
    }
    return a.post.date < b.post.date ? 1 : -1
  })

  return scored.slice(0, count).map((entry) => entry.post)
}

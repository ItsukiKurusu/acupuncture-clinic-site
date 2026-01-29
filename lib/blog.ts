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

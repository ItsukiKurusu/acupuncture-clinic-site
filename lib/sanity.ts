import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
})

// 画像URL生成用のビルダー
const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// ブログ記事の型定義
export interface SanityBlogPost {
  _id: string
  _createdAt: string
  title: string
  slug: {
    current: string
  }
  author?: string
  coverImage?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  excerpt: string
  content: any[] // Portable Text
  tags?: string[]
  publishedAt: string
}

// 全記事を取得（公開日順）
export async function getAllPosts(): Promise<SanityBlogPost[]> {
  try {
    const query = `*[_type == "post"] | order(publishedAt desc) {
      _id,
      _createdAt,
      title,
      slug,
      author,
      coverImage,
      excerpt,
      tags,
      publishedAt
    }`
    
    return await client.fetch(query)
  } catch (error) {
    console.error('Failed to fetch posts from Sanity:', error)
    return []
  }
}

// スラッグから記事を取得
export async function getPostBySlug(slug: string): Promise<SanityBlogPost | null> {
  try {
    const query = `*[_type == "post" && slug.current == $slug][0] {
      _id,
      _createdAt,
      title,
      slug,
      author,
      coverImage,
      excerpt,
      content,
      tags,
      publishedAt
    }`
    
    return await client.fetch(query, { slug })
  } catch (error) {
    console.error('Failed to fetch post from Sanity:', error)
    return null
  }
}

// 最新N件の記事を取得
export async function getRecentPosts(limit: number = 3): Promise<SanityBlogPost[]> {
  try {
    const query = `*[_type == "post"] | order(publishedAt desc) [0...${limit}] {
      _id,
      _createdAt,
      title,
      slug,
      author,
      coverImage,
      excerpt,
      tags,
      publishedAt
    }`
    
    return await client.fetch(query)
  } catch (error) {
    console.error('Failed to fetch recent posts from Sanity:', error)
    return []
  }
}

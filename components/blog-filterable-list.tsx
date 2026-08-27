'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { Calendar, Tag } from 'lucide-react'
import type { BlogPostMeta } from '@/lib/blog'
import { BLOG_CATEGORIES, isBlogCategory, type BlogCategory } from '@/lib/blog-categories'
import { CategoryBadge } from '@/components/category-badge'

interface BlogFilterableListProps {
  posts: BlogPostMeta[]
}

type CategoryFilter = BlogCategory | 'all'

/** ?category=お知らせ のようなクエリを検証してカテゴリー絞り込みに変換する */
function parseCategoryParam(value: string | null): CategoryFilter {
  return isBlogCategory(value) ? value : 'all'
}

export function BlogFilterableList({ posts }: BlogFilterableListProps) {
  // 初期値は必ず 'all'。Nextのルーター製クエリ取得フックを使うと静的プリレンダリング時に
  // Suspenseのfallbackへ退避してしまい、記事一覧がHTMLに出力されず（クライアント描画のみになり）
  // クローラーが記事リンクを辿れなくなるため、クエリはハイドレーション後にwindowから読む。
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all')
  const [selectedTag, setSelectedTag] = useState<string>('all')

  // /blog?category=お知らせ の直リンクに対応する（マウント後・ブラウザの戻る進むにも追従）
  useEffect(() => {
    const applyCategoryFromUrl = () => {
      const param = new URLSearchParams(window.location.search).get('category')
      setSelectedCategory(parseCategoryParam(param))
      setSelectedTag('all')
    }

    applyCategoryFromUrl()
    window.addEventListener('popstate', applyCategoryFromUrl)
    return () => window.removeEventListener('popstate', applyCategoryFromUrl)
  }, [])

  // カテゴリータブは記事が存在するカテゴリーのみ表示
  const availableCategories = useMemo(
    () => BLOG_CATEGORIES.filter((category) => posts.some((post) => post.category === category)),
    [posts],
  )

  const categoryPosts = useMemo(() => {
    if (selectedCategory === 'all') {
      return posts
    }
    return posts.filter((post) => post.category === selectedCategory)
  }, [posts, selectedCategory])

  // タグはカテゴリー絞り込み後の記事から算出
  const allTags = useMemo(() => {
    const tags = categoryPosts.flatMap((post) => post.tags ?? [])
    return [...new Set(tags)].sort((a, b) => a.localeCompare(b, 'ja'))
  }, [categoryPosts])

  const filteredPosts = useMemo(() => {
    if (selectedTag === 'all') {
      return categoryPosts
    }
    return categoryPosts.filter((post) => post.tags?.includes(selectedTag))
  }, [categoryPosts, selectedTag])

  // カテゴリーを切り替えたらタグ絞り込みはリセットし、URLにも反映する
  const handleCategoryChange = (category: CategoryFilter) => {
    setSelectedCategory(category)
    setSelectedTag('all')

    // 履歴を汚さず、リロードや共有でも同じ絞り込みが再現できるようにする
    const url = new URL(window.location.href)
    if (category === 'all') {
      url.searchParams.delete('category')
    } else {
      url.searchParams.set('category', category)
    }
    window.history.replaceState(null, '', url)
  }

  const categoryCount = (category: CategoryFilter) =>
    category === 'all' ? posts.length : posts.filter((post) => post.category === category).length

  return (
    <>
      {/* カテゴリー切り替え */}
      {availableCategories.length > 1 && (
        <div className="mb-6 flex flex-wrap justify-center gap-2 sm:gap-3">
          {(['all', ...availableCategories] as CategoryFilter[]).map((category) => {
            const isActive = selectedCategory === category
            return (
              <button
                key={category}
                type="button"
                onClick={() => handleCategoryChange(category)}
                aria-pressed={isActive}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition-colors ${
                  isActive
                    ? 'bg-[#1c1917] text-white border-[#1c1917]'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-[#1c1917] hover:text-[#1c1917]'
                }`}
              >
                {category === 'all' ? 'すべて' : category}
                <span className={`ml-2 text-xs ${isActive ? 'text-white/70' : 'text-gray-400'}`}>
                  {categoryCount(category)}
                </span>
              </button>
            )
          })}
        </div>
      )}

      {/* タグ絞り込み */}
      {allTags.length > 0 && (
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setSelectedTag('all')}
              className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
                selectedTag === 'all'
                  ? 'bg-[#d4af37] text-white border-[#d4af37]'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-[#d4af37] hover:text-[#d4af37]'
              }`}
            >
              すべて
            </button>

            {allTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
                  selectedTag === tag
                    ? 'bg-[#d4af37] text-white border-[#d4af37]'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-[#d4af37] hover:text-[#d4af37]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}

      {filteredPosts.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">該当する記事がありません。</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-6">
                <CategoryBadge category={post.category} className="mb-3" />

                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#d4af37] transition-colors line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                <div className="flex flex-col gap-2 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>

                  {post.tags && post.tags.length > 0 && (
                    <div className="flex items-center gap-2 flex-wrap">
                      <Tag className="w-4 h-4" />
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  )
}

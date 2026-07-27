'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Calendar, Tag } from 'lucide-react'
import type { BlogPostMeta } from '@/lib/blog'

interface BlogFilterableListProps {
  posts: BlogPostMeta[]
}

export function BlogFilterableList({ posts }: BlogFilterableListProps) {
  const [selectedTag, setSelectedTag] = useState<string>('all')

  const allTags = useMemo(() => {
    const tags = posts.flatMap((post) => post.tags ?? [])
    return [...new Set(tags)].sort((a, b) => a.localeCompare(b, 'ja'))
  }, [posts])

  const filteredPosts = useMemo(() => {
    if (selectedTag === 'all') {
      return posts
    }
    return posts.filter((post) => post.tags?.includes(selectedTag))
  }, [posts, selectedTag])

  return (
    <>
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

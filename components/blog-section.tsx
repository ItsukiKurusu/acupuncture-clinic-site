import Link from 'next/link'
import Image from 'next/image'
import { getRecentPosts } from '@/lib/blog'
import { Calendar, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export function BlogSection() {
  const recentPosts = getRecentPosts(3)

  if (recentPosts.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">記事がまだありません</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recentPosts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="group block"
        >
          <Card className="h-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            {/* カバー画像 */}
            {post.coverImage && (
              <div className="relative w-full h-48 bg-muted overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}

            <CardContent className="p-6">
              {/* タイトル */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>

              {/* 抜粋 */}
              <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">
                {post.excerpt}
              </p>

              {/* 日付と続きを読むリンク */}
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1 text-primary group-hover:gap-2 transition-all">
                  <span className="font-semibold">続きを読む</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

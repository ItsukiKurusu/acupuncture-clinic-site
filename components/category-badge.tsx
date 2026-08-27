import type { BlogCategory } from '@/lib/blog-categories'

/** カテゴリーごとの配色（お知らせは目に留まりやすいテラコッタ系） */
const CATEGORY_STYLES: Record<BlogCategory, { backgroundColor: string; color: string }> = {
  健康情報: { backgroundColor: 'rgba(212,175,55,0.15)', color: '#b8960a' },
  お知らせ: { backgroundColor: 'rgba(180,83,9,0.12)', color: '#b45309' },
}

interface CategoryBadgeProps {
  category: BlogCategory
  className?: string
}

export function CategoryBadge({ category, className = '' }: CategoryBadgeProps) {
  const style = CATEGORY_STYLES[category] ?? CATEGORY_STYLES.健康情報

  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${className}`}
      style={style}
    >
      {category}
    </span>
  )
}

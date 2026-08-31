import type { BlogCategory } from '@/lib/blog-categories'

/**
 * カテゴリーごとの配色。
 * 塗りつぶしをやめ、細い枠線と文字色だけで区別する（サイト全体の方針に合わせた）。
 * お知らせは目に留まりやすいテラコッタ系。
 */
const CATEGORY_STYLES: Record<BlogCategory, { borderColor: string; color: string }> = {
  健康情報: { borderColor: 'var(--gold)', color: 'var(--gold-strong)' },
  お知らせ: { borderColor: '#d8a06a', color: '#b45309' },
}

interface CategoryBadgeProps {
  category: BlogCategory
  className?: string
}

export function CategoryBadge({ category, className = '' }: CategoryBadgeProps) {
  const style = CATEGORY_STYLES[category] ?? CATEGORY_STYLES.健康情報

  return (
    <span
      className={`inline-block rounded border px-2.5 py-0.5 text-xs font-semibold tracking-wide ${className}`}
      style={style}
    >
      {category}
    </span>
  )
}

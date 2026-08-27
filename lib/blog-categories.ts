/**
 * 記事カテゴリーの定義
 * クライアントコンポーネントからも読み込むため、Node.js依存（fs等）を持たない独立モジュールにしている
 *
 * 健康情報: ツボ・セルフケアなどの健康情報
 * お知らせ: 活動報告・院からのお知らせ
 */
export const BLOG_CATEGORIES = ['健康情報', 'お知らせ'] as const

export type BlogCategory = (typeof BLOG_CATEGORIES)[number]

export const DEFAULT_BLOG_CATEGORY: BlogCategory = '健康情報'

export function isBlogCategory(value: unknown): value is BlogCategory {
  return BLOG_CATEGORIES.includes(value as BlogCategory)
}

/**
 * frontmatterのcategoryを正規化する（未設定・不正値は健康情報として扱う）
 */
export function normalizeCategory(value: unknown): BlogCategory {
  return isBlogCategory(value) ? value : DEFAULT_BLOG_CATEGORY
}

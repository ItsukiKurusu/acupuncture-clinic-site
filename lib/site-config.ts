export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://acupuncture-clinic-site.vercel.app').replace(/\/$/, '')

/** LINE公式アカウントの予約URL */
export const BOOKING_URL = 'https://line.me/R/ti/p/@241gbrkw'

/** Googleビジネスプロフィール（ユーザーに見せる共有用の短縮URL） */
export const GBP_URL = 'https://maps.app.goo.gl/AoAStfaCX3oLbch5A'

/**
 * Googleビジネスプロフィールの正規URL（CID形式）。
 * 構造化データの sameAs にはこちらを使う（計測パラメータを含まないため）。
 */
export const GBP_CANONICAL_URL = 'https://maps.google.com/?cid=13278184447172770349'

/**
 * 構造化データ上の事業者ノードの識別子。
 * 各ページの構造化データからこのIDを参照することで、
 * Googleに「すべて同一の事業者である」と伝えられる。
 */
export const CLINIC_NODE_ID = `${SITE_URL}/#clinic`

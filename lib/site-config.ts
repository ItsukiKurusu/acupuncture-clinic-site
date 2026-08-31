export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://acupuncture-clinic-site.vercel.app').replace(/\/$/, '')

/** LINE公式アカウントの予約URL */
export const BOOKING_URL = 'https://line.me/R/ti/p/@241gbrkw'

/** Instagram公式アカウント */
export const INSTAGRAM_URL = 'https://www.instagram.com/shinkyu.hane'

/**
 * 電話番号。表示用・tel:リンク用・構造化データ用で表記が異なるため、
 * ここを唯一の情報源とする（各コンポーネントに直接書かないこと）。
 * 以前 tel: リンクだけ1桁欠けており、全ての電話CTAが不通だった。
 */
export const TEL_DISPLAY = '090-4181-7937'
export const TEL_HREF = `tel:${TEL_DISPLAY.replace(/-/g, '')}`
/** 構造化データ用のE.164形式 */
export const TEL_E164 = '+81-90-4181-7937'

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

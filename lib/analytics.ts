type AnalyticsParams = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    fbq?: ((...args: unknown[]) => void) & { queue?: unknown[]; loaded?: boolean; version?: string }
    _fbq?: Window['fbq']
  }
}

/** Meta Pixel ID。未設定ならPixelは読み込まない（Vercelの環境変数で設定する） */
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? ''

/**
 * 予約につながる行動。GA4ではこの名前のイベントをキーイベントにし、
 * Meta には標準イベント Contact として送る。
 */
export type ContactEventName = 'line_click' | 'tel_click' | 'reserve_click'

/** リンク先URLから予約行動の種類を判定する。予約行動でなければ null */
export function classifyContactHref(href: string): ContactEventName | null {
  if (href.startsWith('tel:')) return 'tel_click'
  if (/^https?:\/\/(line\.me|lin\.ee)\//.test(href)) return 'line_click'
  if (href.includes('shinq-compass.jp/salon/reserve/')) return 'reserve_click'
  return null
}

// GA4にイベントを送る。GA4の管理画面でイベント名をキーイベントとしてマークすること。
export function trackEvent(name: string, params?: AnalyticsParams) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', name, params)
}

/**
 * 予約行動を GA4（キーイベント用）と Meta Pixel（Contact）の両方に送る。
 *
 * ⚠ Meta には追加情報（params）を付けない。イベント名だけを送る。
 *   以前は押したページのパス（/symptoms/katakori など症状名を含む）とボタンの位置を
 *   付けていたが、2026-11 に Meta がこのデータセットの Contact を制限イベントにして
 *   届かなくなった（健康に関わる情報と判断された可能性がある）。
 *   どのページ・どのボタンかは GA4 側（params）で見る。Meta に症状名を送らないこと。
 */
export function trackContact(name: ContactEventName, params: AnalyticsParams) {
  trackEvent(name, params)
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'Contact')
  }
}

type AnalyticsParams = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

// 予約行動（LINEクリック・電話タップ）をGA4のイベントとして記録する。
// GA4の管理画面でこのイベント名をコンバージョンとしてマークすること。
export function trackEvent(name: string, params?: AnalyticsParams) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return
  window.gtag("event", name, params)
}

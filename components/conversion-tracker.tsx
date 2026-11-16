'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { META_PIXEL_ID, classifyContactHref, trackContact } from '@/lib/analytics'

/**
 * サイト全体の計測を1か所で行う。
 *
 * 1. 予約行動の計測：LINE・電話・しんきゅうコンパス予約へのリンクのクリックを
 *    ページ全体で拾い、GA4（line_click / tel_click / reserve_click）と Meta Pixel（Contact）に送る。
 *    ボタンごとに onClick を書かなくてよいので、新しいボタンを置いても計測漏れが起きない。
 *    どのボタンかは、リンク自身か祖先要素の data-cta 属性で示す（無ければ "other"）。
 *
 * 2. Meta Pixel：NEXT_PUBLIC_META_PIXEL_ID が設定されているときだけ読み込み、
 *    ページ遷移ごとに PageView を送る（App Router はページ遷移でHTMLを再読込しないため）。
 */
export function ConversionTracker() {
  const pathname = usePathname()

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target
      if (!(target instanceof Element)) return
      const link = target.closest('a')
      if (!link) return
      const href = link.getAttribute('href') ?? ''
      const name = classifyContactHref(href)
      if (!name) return
      const location = link.closest<HTMLElement>('[data-cta]')?.dataset.cta ?? 'other'
      trackContact(name, { location, page_path: window.location.pathname })
    }
    // キャプチャ段階で拾う（onClick で stopPropagation されても計測できるように）
    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [])

  useEffect(() => {
    if (!META_PIXEL_ID) return
    loadMetaPixel(META_PIXEL_ID)
    window.fbq?.('track', 'PageView')
  }, [pathname])

  return null
}

/** Meta 公式のベースコードを型付きで書き直したもの。2回目以降の呼び出しでは何もしない */
function loadMetaPixel(pixelId: string) {
  if (window.fbq) return
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const n: any = function (...args: unknown[]) {
    if (n.callMethod) n.callMethod(...args)
    else n.queue.push(args)
  }
  n.push = n
  n.loaded = true
  n.version = '2.0'
  n.queue = []
  window.fbq = n
  if (!window._fbq) window._fbq = n
  const script = document.createElement('script')
  script.async = true
  script.src = 'https://connect.facebook.net/en_US/fbevents.js'
  document.head.appendChild(script)
  n('init', pixelId)
}

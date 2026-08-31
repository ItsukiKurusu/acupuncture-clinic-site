"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { trackEvent } from "@/lib/analytics"
import { BOOKING_URL } from "@/lib/site-config"

// グローバルナビは主要導線の6項目に絞る。
// 以前は11項目あり粒度も揃っていなかったため、選択の負荷が高かった。
// ここから外した「施術風景」「お客様の声」「いるか新聞」「Instagram」
// 「よくある質問」はフッターのサイトマップから辿れる。
const navLinks = [
  { href: "/about", label: "当院について" },
  { href: "/symptoms", label: "症状別のご案内" },
  { href: "/services", label: "施術内容・料金" },
  { href: "/matrix-wave", label: "MATRIX WAVE" },
  { href: "/blog", label: "ブログ" },
  { href: "/#contact", label: "アクセス" },
]

/**
 * overlay: トップページ用。ヒーロー動画に重ねるため、スクロールするまでは
 *          背景を透明にして白文字で表示する。ナビゲーションを出す。
 * compact: 下層ページ用。背景は最初から白で固定し、ナビゲーションは出さない
 *          （代わりに各ページがパンくずを表示する）。ロゴと予約ボタンは残す。
 *
 * 以前は全ページが overlay だったため、明るい背景の下層ページでは
 * 白文字・白ロゴが背景に溶けて、スクロールするまでヘッダーが
 * 消えたように見えていた。
 */
type HeaderVariant = "overlay" | "compact"

export function Header({ variant = "compact" }: { variant?: HeaderVariant }) {
  const isOverlay = variant === "overlay"
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (!isOverlay) return
    const update = () => setScrolled(window.scrollY > 48)
    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [isOverlay])

  // compact では常に「スクロール後」と同じ濃い配色を使う
  const solid = !isOverlay || scrolled

  return (
    <header
      className="w-full sticky top-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: solid ? "#ffffff" : "transparent",
        borderBottom: solid
          ? "1px solid var(--hairline)"
          : "1px solid rgba(255,255,255,0.15)",
      }}
    >
      <div className="container mx-auto flex items-center h-16 px-4 lg:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5" prefetch={false}>
          <Image
            src="/logo-feather.png"
            alt="鍼灸HANE ロゴ"
            width={26}
            height={26}
            className="object-contain transition-all duration-500"
            style={{ filter: solid ? "none" : "brightness(0) invert(1)" }}
          />
          <span
            className="heading-mincho text-xl transition-colors duration-500"
            style={{ color: solid ? "#1c1917" : "rgba(255,255,255,0.95)" }}
          >
            鍼灸HANE
          </span>
        </Link>

        {/* Desktop nav（トップページのみ） */}
        {isOverlay && (
          <nav className="ml-auto hidden lg:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="relative px-3 py-1.5 text-sm font-medium transition-colors duration-300 group"
                style={{ color: solid ? "rgba(28,25,23,0.75)" : "rgba(255,255,255,0.85)" }}
                prefetch={false}
              >
                {label}
                <span
                  className="absolute bottom-0.5 left-3 right-3 h-px scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"
                  style={{ backgroundColor: "var(--gold)" }}
                />
              </Link>
            ))}
          </nav>
        )}

        {/* CTA button */}
        <div className={`hidden lg:block ${isOverlay ? "ml-4" : "ml-auto"}`}>
          <Link
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("line_click", { location: "header_desktop" })}
            className="inline-flex items-center justify-center px-5 py-2 rounded text-[13px] font-semibold transition-colors duration-300"
            style={{
              backgroundColor: solid ? "var(--gold-strong)" : "transparent",
              color: "#fff",
              border: solid ? "1px solid var(--gold-strong)" : "1px solid rgba(255,255,255,0.5)",
              letterSpacing: "0.03em",
            }}
          >
            ご予約・お問い合わせ
          </Link>
        </div>

        {/* モバイル：トップページはハンバーガー、下層ページは予約ボタンを直接置く */}
        {isOverlay ? (
          <div className="lg:hidden ml-auto">
            <button
              aria-label={open ? "メニューを閉じる" : "メニューを開く"}
              className="p-2 transition-colors duration-300"
              style={{ color: solid ? "rgba(28,25,23,0.7)" : "rgba(255,255,255,0.9)" }}
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="4" y1="4" x2="18" y2="18" /><line x1="18" y1="4" x2="4" y2="18" />
                </svg>
              ) : (
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="3" y1="7" x2="19" y2="7" /><line x1="3" y1="12" x2="19" y2="12" /><line x1="3" y1="17" x2="19" y2="17" />
                </svg>
              )}
            </button>
          </div>
        ) : (
          <Link
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("line_click", { location: "header_mobile_compact" })}
            className="lg:hidden ml-auto inline-flex items-center justify-center px-3.5 py-1.5 rounded text-xs font-semibold"
            style={{
              backgroundColor: "var(--gold-strong)",
              color: "#fff",
              letterSpacing: "0.03em",
            }}
          >
            ご予約
          </Link>
        )}
      </div>

      {/* Mobile menu（トップページのみ） */}
      {isOverlay && (
        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden bg-white px-4 py-3 space-y-0.5"
              style={{ borderTop: "1px solid var(--hairline)" }}
            >
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="block text-sm py-2.5 px-2 font-medium rounded transition-colors hover:bg-[color:var(--gold-wash)]"
                  style={{ color: "rgba(28,25,23,0.8)" }}
                  onClick={() => setOpen(false)}
                  prefetch={false}
                >
                  {label}
                </Link>
              ))}
              <div className="pt-3 pb-1">
                <Link
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-2.5 rounded text-sm font-bold transition-opacity hover:opacity-85"
                  style={{ backgroundColor: "var(--gold-strong)", color: "#fff" }}
                  onClick={() => {
                    trackEvent("line_click", { location: "header_mobile" })
                    setOpen(false)
                  }}
                >
                  ご予約・お問い合わせ
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </header>
  )
}

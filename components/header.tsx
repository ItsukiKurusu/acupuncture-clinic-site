"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"

const navLinks = [
  { href: "/about", label: "当院について" },
  { href: "/scenes", label: "施術風景" },
  { href: "/services", label: "施術内容" },
  { href: "/matrix-wave", label: "MATRIX WAVE" },
  { href: "/#testimonials", label: "お客様の声" },
  { href: "/blog", label: "ブログ" },
  { href: "/#instagram", label: "Instagram" },
  { href: "/#faq", label: "よくある質問" },
  { href: "/#contact", label: "アクセス" },
]

export function Header() {
  const bookingUrl = "https://line.me/R/ti/p/@241gbrkw"
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 48)
    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [])

  return (
    <header
      className="w-full sticky top-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled
          ? "1.5px solid rgba(212,175,55,0.3)"
          : "1.5px solid rgba(255,255,255,0.1)",
        boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.06)" : "none",
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
            style={{ filter: scrolled ? "none" : "brightness(0) invert(1)" }}
          />
          <span
            className="text-xl font-semibold tracking-wide transition-colors duration-500"
            style={{
              fontFamily: "'游明朝','Yu Mincho',YuMincho,'Hiragino Mincho Pro',serif",
              color: scrolled ? "#1c1917" : "rgba(255,255,255,0.95)",
            }}
          >
            鍼灸HANE
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="ml-auto hidden lg:flex items-center gap-0.5">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="relative px-2.5 py-1.5 text-[13px] font-medium transition-colors duration-300 group"
              style={{ color: scrolled ? "rgba(28,25,23,0.75)" : "rgba(255,255,255,0.85)" }}
              prefetch={false}
            >
              {label}
              <span
                className="absolute bottom-0.5 left-2.5 right-2.5 h-px scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"
                style={{ backgroundColor: "#d4af37" }}
              />
            </Link>
          ))}
        </nav>

        {/* CTA button */}
        <div className="ml-4 hidden lg:block">
          <Link
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2 rounded-full text-[13px] font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              backgroundColor: scrolled ? "#d4af37" : "rgba(255,255,255,0.15)",
              color: scrolled ? "#1c1917" : "#fff",
              border: scrolled ? "none" : "1px solid rgba(255,255,255,0.4)",
              backdropFilter: scrolled ? "none" : "blur(6px)",
              boxShadow: scrolled ? "0 2px 12px rgba(212,175,55,0.3)" : "none",
              letterSpacing: "0.03em",
            }}
          >
            ご予約・お問い合わせ
          </Link>
        </div>

        {/* Mobile hamburger */}
        <div className="lg:hidden ml-auto">
          <button
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            className="p-2 transition-colors duration-300"
            style={{ color: scrolled ? "rgba(28,25,23,0.7)" : "rgba(255,255,255,0.9)" }}
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
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-white/98 px-4 py-3 space-y-0.5"
            style={{
              backdropFilter: "blur(14px)",
              borderTop: "1px solid rgba(212,175,55,0.2)",
            }}
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block text-sm py-2.5 px-2 font-medium rounded-lg transition-colors hover:bg-[#d4af37]/8"
                style={{ color: "rgba(28,25,23,0.8)" }}
                onClick={() => setOpen(false)}
                prefetch={false}
              >
                {label}
              </Link>
            ))}
            <div className="pt-3 pb-1">
              <Link
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2.5 rounded-full text-sm font-bold transition-all"
                style={{ backgroundColor: "#d4af37", color: "#1c1917" }}
                onClick={() => setOpen(false)}
              >
                ご予約・お問い合わせ
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
  const bookingUrl = "https://www.shinq-compass.jp/salon/reserve/37835"

  const [open, setOpen] = React.useState(false);
  return (
    <header className="w-full sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto flex items-center h-16 px-4 lg:px-6">
        <Link href="/" className="flex items-center justify-center" prefetch={false}>
          <Image src="/logo-feather.png" alt="鍼灸HANE ロゴ" width={28} height={28} className="object-contain" />
          <span className="ml-2 text-xl font-semibold" style={{ fontFamily: "'游明朝','Yu Mincho',YuMincho,'Hiragino Mincho Pro',serif" }}>鍼灸HANE</span>
        </Link>
        <nav className="ml-auto hidden lg:flex gap-4 sm:gap-6">
          <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            当院について
          </Link>
          <Link href="/#services" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            施術内容
          </Link>
          <Link href="/#testimonials" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            お客様の声
          </Link>
          <Link href="/#instagram" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Instagram
          </Link>
          <Link href="#faq" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            よくある質問
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            アクセス
          </Link>
        </nav>
        <div className="ml-4 hidden lg:block">
          <Button asChild>
            <Link href={bookingUrl} target="_blank" rel="noopener noreferrer">
              ご予約・お問い合わせ
            </Link>
          </Button>
        </div>
        {/* モバイル用メニューアイコン */}
        <div className="lg:hidden ml-auto">
          <button aria-label="メニュー" className="p-2" onClick={() => setOpen(!open)}>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
          </button>
        </div>
      </div>
      {/* モバイルメニュー */}
      {open && (
        <div className="lg:hidden bg-background border-b px-4 py-4 space-y-2 animate-fade-in-down">
          <Link href="/about" className="block text-base py-2 font-medium" onClick={() => setOpen(false)} prefetch={false}>当院について</Link>
          <Link href="/#services" className="block text-base py-2 font-medium" onClick={() => setOpen(false)} prefetch={false}>施術内容</Link>
          <Link href="/#testimonials" className="block text-base py-2 font-medium" onClick={() => setOpen(false)} prefetch={false}>お客様の声</Link>
          <Link href="/#instagram" className="block text-base py-2 font-medium" onClick={() => setOpen(false)} prefetch={false}>Instagram</Link>
          <Link href="#faq" className="block text-base py-2 font-medium" onClick={() => setOpen(false)} prefetch={false}>よくある質問</Link>
          <Link href="#contact" className="block text-base py-2 font-medium" onClick={() => setOpen(false)} prefetch={false}>アクセス</Link>
          <Button asChild className="w-full mt-2">
            <Link href={bookingUrl} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
              ご予約・お問い合わせ
            </Link>
          </Button>
        </div>
      )}
    </header>
  )
}

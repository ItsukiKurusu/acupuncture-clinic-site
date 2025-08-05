import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
  const bookingUrl = "https://www.shinq-compass.jp/salon/reserve/37835"

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <Link href="/" className="flex items-center justify-center" prefetch={false}>
        <Image src="/logo-feather.png" alt="鍼灸HANE ロゴ" width={28} height={28} className="object-contain" />
        <span className="ml-2 text-xl font-semibold">鍼灸HANE</span>
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
      <div className="ml-4">
        <Button asChild>
          <Link href={bookingUrl} target="_blank" rel="noopener noreferrer">
            ご予約・お問い合わせ
          </Link>
        </Button>
      </div>
    </header>
  )
}

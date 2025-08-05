import Link from "next/link"
import { Twitter, Instagram, Facebook } from "lucide-react"

export function Footer() {
  const instagramUrl =
    "https://www.instagram.com/shinkyu.hane?utm_source=ig_web_button_share_sheet&igsh=MTZvODR2N3RjNm4yYQ=="

  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-background">
      <p className="text-xs text-muted-foreground">&copy; 2025 鍼灸HANE. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
          プライバシーポリシー
        </Link>
        <div className="flex gap-2">
          <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-foreground">
            <Twitter className="h-4 w-4" />
          </Link>
          <Link
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-muted-foreground hover:text-foreground"
          >
            <Instagram className="h-4 w-4" />
          </Link>
          <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-foreground">
            <Facebook className="h-4 w-4" />
          </Link>
        </div>
      </nav>
    </footer>
  )
}

import Link from "next/link"
import Image from "next/image"
import { Instagram, MapPin, Phone, Clock } from "lucide-react"

export function Footer() {
  const instagramUrl =
    "https://www.instagram.com/shinkyu.hane?utm_source=ig_web_button_share_sheet&igsh=MTZvODR2N3RjNm4yYQ=="
  const bookingUrl = "https://line.me/R/ti/p/@241gbrkw"

  return (
    <footer className="w-full" style={{ backgroundColor: "#1c1917", color: "rgba(255,255,255,0.75)" }}>
      <div className="container mx-auto px-4 md:px-6 pt-12 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/logo-feather.png"
                alt="鍼灸HANE ロゴ"
                width={24}
                height={24}
                className="object-contain opacity-85"
              />
              <span
                className="text-xl font-semibold text-white"
                style={{ fontFamily: "'游明朝','Yu Mincho',YuMincho,'Hiragino Mincho Pro',serif" }}
              >
                鍼灸HANE
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              心と身体を癒す、<br />伝統の鍼灸治療
            </p>
            <div className="flex gap-3 mt-5">
              <Link
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-colors hover:opacity-100"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Access */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#d4af37" }}>
              アクセス
            </h4>
            <address className="not-italic text-sm leading-relaxed space-y-1" style={{ color: "rgba(255,255,255,0.65)" }}>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" style={{ color: "#d4af37" }} />
                <span>
                  〒810-0044<br />
                  福岡市中央区六本松4丁目5-39<br />
                  ピア21 401号室<br />
                  <span className="text-xs mt-1 block" style={{ color: "rgba(255,255,255,0.45)" }}>
                    地下鉄七隈線六本松駅 徒歩8分
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Phone className="h-4 w-4 shrink-0" style={{ color: "#d4af37" }} />
                <span>090-4181-7937</span>
              </div>
            </address>
          </div>

          {/* Hours & Booking */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#d4af37" }}>
              営業時間
            </h4>
            <div className="flex items-start gap-2 text-sm mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
              <Clock className="h-4 w-4 mt-0.5 shrink-0" style={{ color: "#d4af37" }} />
              <div className="space-y-0.5">
                <p>月〜土：10:00 – 20:00</p>
                <p>日・祝：定休日</p>
                <p className="text-xs pt-1" style={{ color: "rgba(255,255,255,0.40)" }}>完全予約制</p>
              </div>
            </div>
            <Link
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-md transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#06C755", color: "#fff" }}
            >
              LINEで予約する
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
            &copy; 2025 鍼灸HANE. All rights reserved.
          </p>
          <nav className="flex gap-6">
            <Link
              href="#"
              className="text-xs transition-colors hover:opacity-80"
              style={{ color: "rgba(255,255,255,0.40)" }}
            >
              プライバシーポリシー
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

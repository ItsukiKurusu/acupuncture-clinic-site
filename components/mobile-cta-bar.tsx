"use client"
import { Phone, MessageCircle } from "lucide-react"
import { trackEvent } from "@/lib/analytics"

const BOOKING_URL = "https://line.me/R/ti/p/@241gbrkw"

// スマートフォンでは常時表示。PC（lg以上）では既にヘッダーに予約ボタンがあるため非表示。
export function MobileCtaBar() {
  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 grid grid-cols-2"
      style={{
        paddingBottom: "env(safe-area-inset-bottom)",
        boxShadow: "0 -2px 16px rgba(0,0,0,0.12)",
      }}
    >
      <a
        href="tel:0904181937"
        onClick={() => trackEvent("tel_click", { location: "mobile_cta_bar" })}
        className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold"
        style={{ backgroundColor: "#1c1917", color: "#fff" }}
      >
        <Phone className="h-4 w-4" />
        電話をかける
      </a>
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("line_click", { location: "mobile_cta_bar" })}
        className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold"
        style={{ backgroundColor: "#06C755", color: "#fff" }}
      >
        <MessageCircle className="h-4 w-4" />
        LINEで予約
      </a>
    </div>
  )
}

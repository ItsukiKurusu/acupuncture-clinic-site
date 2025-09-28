import type React from "react"
import type { Metadata } from "next"
import { Noto_Serif_JP } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const notoSerifJp = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-serif-jp",
})

export const metadata: Metadata = {
  title: "鍼灸HANE - 心と身体を癒す伝統の鍼灸治療",
  description: "お一人おひとりの症状に合わせたオーダーメイドの施術で、自然治癒力を高め、健やかな毎日をサポートします。",
  generator: 'v0.dev',
  verification: {
    google: '442cf3c64d24a393'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={cn("font-serif", notoSerifJp.variable)} style={{ fontFamily: '"游ゴシック","MS Pゴシック","ヒラギノ角ゴ ProN",sans-serif' }}>{children}</body>
    </html>
  )
}

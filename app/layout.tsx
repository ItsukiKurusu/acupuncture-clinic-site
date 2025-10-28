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
  title: {
    default: "鍼灸HANE｜中央区六本松の鍼灸院",
    template: "%s｜鍼灸HANE - 中央区六本松の鍼灸院"
  },
  description: "福岡市中央区六本松の鍼灸院「鍼灸HANE」。お一人おひとりの症状に合わせたオーダーメイドの施術で、自然治癒力を高め、健やかな毎日をサポートします。",
  keywords: ["鍼灸", "鍼灸院", "六本松", "中央区", "福岡市", "HANE", "鍼", "お灸", "治療", "理学療法士", "肩こり", "腰痛", "頭痛", "自律神経", "美容鍼", "不妊治療", "スポーツ鍼灸", "リハビリ", "マッサージ", "ツボ"],
  generator: 'v0.dev',
  verification: {
    google: '442cf3c64d24a393',
    // Bing Webmaster Toolsから取得したコードに置き換えてください
    other: {
      'msvalidate.01': 'your-bing-verification-code-here'
    }
  },
  openGraph: {
    title: "鍼灸HANE｜中央区六本松の鍼灸院",
    description: "福岡市中央区六本松の鍼灸院「鍼灸HANE」。お一人おひとりの症状に合わせたオーダーメイドの施術で、自然治癒力を高め、健やかな毎日をサポートします。",
    url: "https://acupuncture-clinic-site.vercel.app",
    siteName: "鍼灸HANE",
    locale: "ja_JP",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "鍼灸HANE｜中央区六本松の鍼灸院",
    description: "福岡市中央区六本松の鍼灸院「鍼灸HANE」。お一人おひとりの症状に合わせたオーダーメイドの施術。"
  },
  // 検索エンジン向けの追加設定
  alternates: {
    canonical: "https://acupuncture-clinic-site.vercel.app"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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

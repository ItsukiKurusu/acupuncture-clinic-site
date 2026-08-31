import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"
import { SITE_URL } from "@/lib/site-config"
import { MobileCtaBar } from "@/components/mobile-cta-bar"
import { ReducedMotionProvider } from "@/components/reduced-motion-provider"

// Webフォントは読み込まない。以前 Noto Serif JP を subsets:["latin"]（＝日本語グリフを
// 含まない）で読み込んだうえ <body> のインラインstyleで上書きしていたため、
// ダウンロードした分がまるごと無駄になっていた。
// 書体は app/globals.css の --font-sans / --font-serif（OS標準フォント）で指定する。

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "鍼灸HANE｜中央区六本松の鍼灸院",
    template: "%s｜鍼灸HANE - 中央区六本松の鍼灸院"
  },
  description: "福岡市中央区六本松の鍼灸院「鍼灸HANE」。お一人おひとりの症状に合わせたオーダーメイドの施術で、自然治癒力を高め、健やかな毎日をサポートします。",
  keywords: ["鍼灸", "鍼灸院", "六本松", "中央区", "福岡市", "HANE", "鍼", "お灸", "治療", "理学療法士", "肩こり", "腰痛", "頭痛", "自律神経", "美容鍼", "不妊治療", "スポーツ鍼灸", "リハビリ", "マッサージ", "ツボ"],
  generator: 'v0.dev',
  verification: {
    google: '442cf3c64d24a393',
  },
  openGraph: {
    title: "鍼灸HANE｜中央区六本松の鍼灸院",
    description: "福岡市中央区六本松の鍼灸院「鍼灸HANE」。お一人おひとりの症状に合わせたオーダーメイドの施術で、自然治癒力を高め、健やかな毎日をサポートします。",
    url: SITE_URL,
    siteName: "鍼灸HANE",
    images: [
      {
        url: '/og/clinic.jpg',
        width: 1200,
        height: 630,
        alt: '鍼灸HANE 施術室内',
      },
    ],
    locale: "ja_JP",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "鍼灸HANE｜中央区六本松の鍼灸院",
    description: "福岡市中央区六本松の鍼灸院「鍼灸HANE」。お一人おひとりの症状に合わせたオーダーメイドの施術。",
    images: ['/og/clinic.jpg'],
  },
  // 検索エンジン向けの追加設定
  alternates: {
    canonical: SITE_URL
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-524375RWWM"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-524375RWWM');
          `}
        </Script>
      </head>
      <body className="pb-16 lg:pb-0">
        <ReducedMotionProvider>
          {children}
          <MobileCtaBar />
        </ReducedMotionProvider>
        <Analytics />
      </body>
    </html>
  )
}

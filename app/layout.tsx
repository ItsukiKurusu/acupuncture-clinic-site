import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"
import { SITE_URL } from "@/lib/site-config"
import { MobileCtaBar } from "@/components/mobile-cta-bar"
import { ReducedMotionProvider } from "@/components/reduced-motion-provider"

// 見出し用にオールド明朝体「Zen Old Mincho」を読み込む。
//
// next/font/google は使えない。next/font のフォントデータ上、日本語の明朝体には
// japanese サブセットが登録されておらず、subsets:["latin"] しか指定できないため、
// 日本語グリフが一切含まれない（以前 Noto Serif JP がこの状態で読み込まれ、
// ダウンロードが丸ごと無駄になっていた）。
// Google Fonts のCSSを直接読めば unicode-range で分割されたチャンクが配信され、
// ブラウザはページに実際に出てくる文字の分だけを取得する。
//
// ウェイトは400のみ。細さを保つためで、見出しにも font-bold を使わないこと。
// （400しか無い書体に太字を指定すると、ブラウザが機械的に太らせて字形が崩れる）
// 本文はOS標準のゴシック体のままで、Webフォントは使わない。

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Old+Mincho&display=swap"
          rel="stylesheet"
        />
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

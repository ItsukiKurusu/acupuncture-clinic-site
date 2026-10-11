import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import Script from 'next/script'
import { Clock, ExternalLink, MapPin, Phone, Train } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageBreadcrumb } from '@/components/page-breadcrumb'
import StructuredData from '@/components/structured-data'
import { BOOKING_URL, GBP_URL, SITE_URL, TEL_DISPLAY, TEL_HREF } from '@/lib/site-config'

const TITLE = 'アクセス｜六本松駅 徒歩8分'
const DESCRIPTION =
  '福岡市中央区六本松の鍼灸院「鍼灸HANE」へのアクセス。住所は福岡市中央区六本松4丁目5-39 ピア21 401号室、地下鉄七隈線 六本松駅から徒歩8分。営業時間は月〜土 10:00〜20:00、日・祝定休、完全予約制。地図と道順動画でご案内します。'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/access` },
  openGraph: {
    title: `${TITLE}｜鍼灸HANE - 中央区六本松の鍼灸院`,
    description: DESCRIPTION,
    url: `${SITE_URL}/access`,
    siteName: '鍼灸HANE',
    images: [{ url: '/og/clinic.jpg', width: 1200, height: 630, alt: '鍼灸HANE 施術室内' }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TITLE}｜鍼灸HANE`,
    description: DESCRIPTION,
    images: ['/og/clinic.jpg'],
  },
}

const INK = '#1c1917'
const GOLD = 'var(--gold)'

// トップページの InstagramSection と同じリール（六本松駅から院までの道順）
const ROUTE_REEL_URL = 'https://www.instagram.com/reel/DMt3qGJydmv/'
const routeReelEmbed = {
  __html: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="${ROUTE_REEL_URL}?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><a href="${ROUTE_REEL_URL}" target="_blank" rel="noopener noreferrer">六本松駅から院までの道順（Instagram）</a></blockquote>`,
}

const MAP_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26593.45708033658!2d130.3410070743164!3d33.574619999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3541937dbe2ca4c9%3A0xb845966763d97a2d!2z6Y2854G4SEFORQ!5e0!3m2!1sja!2sjp!4v1769165064198!5m2!1sja!2sjp'

// 六本松に隣接する地名。地域クエリ（「薬院 鍼灸」等）での関連付けを狙うのではなく、
// 「このあたりから通える」ことを読者に伝えるための事実情報として載せる。
const nearbyAreas = ['草香江', '鳥飼', '桜坂', '薬院', '大濠公園', '赤坂', '別府', '城南区・早良区方面']

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2
      className="text-2xl font-bold mb-6 pb-2 border-b-2"
      style={{ color: INK, borderColor: 'rgba(212,175,55,0.3)' }}
    >
      {children}
    </h2>
  )
}

export default function AccessPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* 事業者の構造化データはトップと同じ @id で出し、所在地ページとしても認識させる */}
      <StructuredData />
      <Header />
      <main className="container mx-auto px-4 py-14 max-w-4xl flex-1">
        <PageBreadcrumb className="mb-8" items={[{ name: 'ホーム', path: '/' }, { name: 'アクセス' }]} />

        <header className="mb-12">
          <div
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ color: 'var(--gold-strong)' }}
          >
            アクセス
          </div>
          <h1 className="heading-mincho text-3xl md:text-4xl mb-5 leading-relaxed" style={{ color: INK }}>
            六本松駅から徒歩8分
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            鍼灸HANEは、福岡市中央区六本松のビル「ピア21」の4階にあります。地下鉄七隈線 六本松駅から徒歩8分です。
            完全予約制ですので、ご来院前にLINEまたはお電話でご予約ください。
          </p>
        </header>

        <section className="mb-14 grid gap-6 md:grid-cols-2">
          <div className="bg-white border border-gray-200 rounded p-6">
            <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-4">
              <MapPin className="w-5 h-5" style={{ color: GOLD }} aria-hidden="true" />
              所在地
            </h2>
            <address className="not-italic text-gray-700 leading-relaxed">
              〒810-0044<br />
              福岡県福岡市中央区六本松4丁目5-39<br />
              ピア21 401号室（4階）
            </address>
            <p className="text-sm text-gray-600 mt-3 flex items-center gap-1.5">
              <Train className="w-4 h-4" style={{ color: GOLD }} aria-hidden="true" />
              地下鉄七隈線 六本松駅 徒歩8分
            </p>
            <Link
              href={GBP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-underline inline-flex items-center gap-1.5 text-sm font-semibold mt-4"
              style={{ color: 'var(--gold-strong)' }}
            >
              Googleマップで開く
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="bg-white border border-gray-200 rounded p-6">
            <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-4">
              <Clock className="w-5 h-5" style={{ color: GOLD }} aria-hidden="true" />
              営業時間
            </h2>
            <table className="w-full text-sm text-gray-700">
              <tbody>
                <tr className="border-b border-gray-100">
                  <th scope="row" className="text-left font-medium py-2 pr-4">月〜土</th>
                  <td className="py-2">10:00 – 20:00</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th scope="row" className="text-left font-medium py-2 pr-4">日・祝</th>
                  <td className="py-2">定休日</td>
                </tr>
                <tr>
                  <th scope="row" className="text-left font-medium py-2 pr-4">ご予約</th>
                  <td className="py-2">完全予約制</td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm text-gray-600 mt-3 flex items-center gap-1.5">
              <Phone className="w-4 h-4" style={{ color: GOLD }} aria-hidden="true" />
              <a href={TEL_HREF} className="hover:underline">
                {TEL_DISPLAY}
              </a>
            </p>
          </div>
        </section>

        <section className="mb-14">
          <SectionHeading>地図</SectionHeading>
          <div className="relative h-[320px] sm:h-[420px] rounded overflow-hidden" style={{ border: '1px solid var(--hairline)' }}>
            <iframe
              src={MAP_EMBED_SRC}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="鍼灸HANE 地図"
            />
          </div>
        </section>

        <section className="mb-14">
          <SectionHeading>六本松駅からの道順</SectionHeading>
          <p className="text-gray-700 leading-relaxed mb-6">
            駅から院までの道のりを動画でご案内しています。初めての方は、ご来院前に一度ご覧いただくと迷いにくくなります。
          </p>
          <div className="mx-auto max-w-[540px]" dangerouslySetInnerHTML={routeReelEmbed} />
        </section>

        <section className="mb-14">
          <SectionHeading>お車・自転車でお越しの方</SectionHeading>
          <p className="text-gray-700 leading-relaxed">
            お車でお越しの場合は、駐車場についてご予約時にお問い合わせください。周辺の状況をご案内します。
          </p>
        </section>

        <section className="mb-14">
          <SectionHeading>六本松周辺のエリアから</SectionHeading>
          <p className="text-gray-700 leading-relaxed mb-4">
            六本松は中央区の南西側、城南区との境に近い場所にあります。次のようなエリアの方にも通いやすい立地です。
          </p>
          <ul className="flex flex-wrap gap-2">
            {nearbyAreas.map((area) => (
              <li
                key={area}
                className="rounded border px-3 py-1.5 text-sm text-gray-700 bg-white"
                style={{ borderColor: 'var(--hairline)' }}
              >
                {area}
              </li>
            ))}
          </ul>
        </section>

        <div
          className="p-8 rounded text-center"
          style={{ backgroundColor: 'var(--gold-wash)', border: '1px solid var(--hairline)' }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-3">ご予約・お問い合わせ</h2>
          <p className="text-gray-700 mb-6">完全予約制です。LINEまたはお電話でご予約ください。</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="standout-button"
              style={{ backgroundColor: '#06C755' }}
            >
              LINEで予約する
            </Link>
            <a href={TEL_HREF} className="standout-button inline-flex items-center gap-2" style={{ backgroundColor: INK }}>
              <Phone className="w-4 h-4" />
              {TEL_DISPLAY}
            </a>
          </div>
          <p className="text-sm text-gray-600 mt-5">
            <Link href="/first-visit" className="hover-underline font-medium" style={{ color: 'var(--gold-strong)' }}>
              初めての方へ：施術の流れ・料金・服装
            </Link>
          </p>
        </div>
      </main>
      <Footer />
      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
    </div>
  )
}

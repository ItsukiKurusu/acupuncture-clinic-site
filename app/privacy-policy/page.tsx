import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageBreadcrumb } from "@/components/page-breadcrumb"
import { META_PIXEL_ID } from "@/lib/analytics"

const externalTransmissions = [
  {
    service: 'Google アナリティクス（GA4）',
    recipient: 'Google LLC',
    data: '閲覧したページのURL、参照元、閲覧日時、ブラウザ・端末の種類、IPアドレス、Cookie識別子、予約ボタンのクリック',
    purpose: '当サイトの利用状況の分析と改善',
    optOut: { label: 'Google アナリティクス オプトアウト アドオン', url: 'https://tools.google.com/dlpage/gaoptout' },
  },
  {
    service: 'Vercel Analytics',
    recipient: 'Vercel Inc.',
    data: '閲覧したページのURL、参照元、ブラウザ・端末の種類（Cookieは使用しません）',
    purpose: '当サイトの表示速度と利用状況の把握',
    optOut: { label: 'ブラウザのトラッキング防止機能をご利用ください', url: '' },
  },
  // Meta Pixel は ID が設定されているときだけ読み込むので、公表も同じ条件で出す
  ...(META_PIXEL_ID
    ? [
        {
          service: 'Meta Pixel',
          recipient: 'Meta Platforms, Inc.',
          data: '閲覧したページのURL、参照元、閲覧日時、ブラウザ・端末の種類、IPアドレス、Cookie識別子、予約ボタンのクリック',
          purpose: 'Facebook・Instagram 広告の効果測定と配信の最適化',
          optOut: { label: 'Meta の広告設定', url: 'https://www.facebook.com/adpreferences/ad_settings' },
        },
      ]
    : []),
]

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-foreground w-full">
      <Header />
      <main className="flex-1">
        <section className="w-full pt-6 pb-12 md:pb-24">
          <div className="container mx-auto w-full px-4 md:px-6 max-w-3xl">
            <PageBreadcrumb
              className="mb-10"
              items={[{ name: 'ホーム', path: '/' }, { name: 'プライバシーポリシー' }]}
            />
            <h1 className="heading-mincho text-3xl sm:text-4xl mb-10">
              プライバシーポリシー
            </h1>

            <div className="space-y-10 text-muted-foreground leading-relaxed">
              <p>
                鍼灸HANE（以下「当院」といいます）は、当ウェブサイト（以下「当サイト」といいます）における
                個人情報の取り扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます）を定めます。
              </p>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">1. 事業者情報</h2>
                <p>
                  名称：鍼灸HANE<br />
                  所在地：〒810-0044 福岡県福岡市中央区六本松4丁目5-39 ピア21 401号室<br />
                  運営者：羽田野 裕稀（鍼灸師・理学療法士）
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">2. 当サイトが取得する情報</h2>
                <p className="mb-4">
                  当サイトでは、お問い合わせフォームによる個人情報の直接収集は行っておりません。
                  ご予約・お問い合わせは、外部サービスであるLINE公式アカウントまたはお電話にて承っております。
                  これらのやり取りにおいて取得する氏名・電話番号等の情報は、LINE株式会社および各通信キャリアが
                  定めるプライバシーポリシーに基づき、当該サービス上で管理されます。
                </p>
                <p className="mb-4">
                  当サイトでは、以下の外部サービスを利用しており、閲覧時にお使いの端末から各事業者へ情報が送信されます
                  （電気通信事業法に基づく外部送信の公表）。
                </p>
                <div className="space-y-4 mb-4">
                  {externalTransmissions.map((item) => (
                    <div key={item.service} className="rounded border border-border p-4 text-sm">
                      <p className="font-bold text-foreground mb-2">{item.service}</p>
                      <dl className="grid grid-cols-[6.5em_1fr] gap-x-3 gap-y-1.5">
                        <dt>送信先</dt>
                        <dd>{item.recipient}</dd>
                        <dt>送信される情報</dt>
                        <dd>{item.data}</dd>
                        <dt>利用目的</dt>
                        <dd>{item.purpose}</dd>
                        <dt>停止の方法</dt>
                        <dd>
                          {item.optOut.url ? (
                            <a href={item.optOut.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                              {item.optOut.label}
                            </a>
                          ) : (
                            item.optOut.label
                          )}
                        </dd>
                      </dl>
                    </div>
                  ))}
                </div>
                <p>
                  これらの情報は、氏名・電話番号など直接個人を特定する情報を含まない形で送信されます。
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">3. Googleマップ・Instagramの埋め込み</h2>
                <p>
                  当サイトのアクセスページではGoogleマップを、トップページとアクセスページではInstagramの投稿を埋め込み表示しています。
                  表示にあたり、Google LLC および Meta Platforms, Inc. のプライバシーポリシーに基づき、閲覧情報が各社に送信される場合があります。
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">4. Cookieの利用について</h2>
                <p>
                  上記の外部サービスはCookie等を使用します。Cookieの取得を望まれない場合は、ブラウザの設定により
                  Cookieを無効にすることができます。ただし、その場合、当サイトの一部機能が正しく動作しない
                  可能性があります。
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">5. 個人情報の第三者提供について</h2>
                <p>
                  当院は、法令に基づく場合を除き、取得した情報をご本人の同意なく第三者に提供することはありません。
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">6. 本ポリシーの変更について</h2>
                <p>
                  本ポリシーの内容は、法令の変更やサービス内容の変更等に応じて、予告なく変更する場合があります。
                  変更後のプライバシーポリシーは、本ページに掲載した時点から効力を生じるものとします。
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">7. お問い合わせ窓口</h2>
                <p>
                  本ポリシーに関するお問い合わせは、下記までご連絡ください。<br />
                  鍼灸HANE<br />
                  ご連絡はLINE公式アカウント、または当サイト各ページに記載の電話番号よりお願いいたします。
                </p>
              </div>

              <p className="text-sm">制定日：2026年7月27日／改定日：2026年11月16日</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

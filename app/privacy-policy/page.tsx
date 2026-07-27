import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-foreground w-full" style={{ fontFamily: '"游ゴシック","MS Pゴシック","ヒラギノ角ゴ ProN",sans-serif' }}>
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24">
          <div className="container mx-auto w-full px-4 md:px-6 max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-10">
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
                  当サイト閲覧時には、以下のアクセス解析ツールにより、Cookie等を用いた利用状況データ
                  （閲覧ページ、滞在時間、デバイス情報など）を取得する場合があります。
                </p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Google アナリティクス（GA4）：Google LLCが提供するアクセス解析サービス</li>
                  <li>Vercel Analytics：Vercel Inc.が提供するアクセス解析サービス</li>
                </ul>
                <p>
                  これらのデータは個人を特定する情報を含まない形で収集・分析され、当サイトの改善や
                  コンテンツの品質向上を目的として利用します。
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">3. Googleマップの利用</h2>
                <p>
                  当サイトのアクセスページでは、Googleマップの埋め込み機能を利用しています。
                  地図の表示にあたり、Google社のプライバシーポリシーに基づき情報が取得される場合があります。
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">4. Cookieの利用について</h2>
                <p>
                  上記解析ツールはCookieを使用します。Cookieの取得を望まれない場合は、ブラウザの設定により
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
                  電話：<a href="tel:0904181937" className="hover:underline">090-4181-7937</a>
                </p>
              </div>

              <p className="text-sm">制定日：2026年7月27日</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

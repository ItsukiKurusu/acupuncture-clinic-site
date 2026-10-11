import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import { Check, Clock, MapPin, Phone } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageBreadcrumb } from '@/components/page-breadcrumb'
import { AuthorBox } from '@/components/author-box'
import { BOOKING_URL, SITE_URL, TEL_DISPLAY, TEL_HREF } from '@/lib/site-config'
import { services } from '@/lib/services-data'

const TITLE = '初めての方へ｜施術の流れ・料金・服装'
const DESCRIPTION =
  '福岡市中央区六本松の鍼灸院「鍼灸HANE」に初めてお越しになる方へ。ご予約から施術、施術後の過ごし方までの流れ、所要時間と料金、鍼の痛み、当日の服装、事前にご相談いただきたい方についてご案内します。七隈線六本松駅から徒歩8分、完全予約制。'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/first-visit` },
  openGraph: {
    title: `${TITLE}｜鍼灸HANE - 中央区六本松の鍼灸院`,
    description: DESCRIPTION,
    url: `${SITE_URL}/first-visit`,
    siteName: '鍼灸HANE',
    images: [{ url: '/og/treatment1.jpg', width: 1200, height: 630, alt: '鍼灸HANE 施術の様子' }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TITLE}｜鍼灸HANE`,
    description: DESCRIPTION,
    images: ['/og/treatment1.jpg'],
  },
}

const INK = '#1c1917'
const GOLD = 'var(--gold)'

const steps = [
  {
    title: 'ご予約',
    body: 'LINEまたはお電話でご予約ください。ご希望の日時と、気になる症状を一言添えていただくと、当日の進行がスムーズです。完全予約制のため、飛び込みでのご来院には対応できないことがあります。',
  },
  {
    title: 'カウンセリング',
    body: 'いつから、どんな時につらいか、お仕事や生活での姿勢、これまでに受けた治療などを伺います。服用中のお薬や持病があればお伝えください。',
  },
  {
    title: '評価（動きの確認）',
    body: '可動域や左右差、姿勢を確認し、痛む場所そのものが原因か、別の場所の硬さや動きの不足が関わっているかを切り分けます。理学療法士としての評価の視点を使う工程です。',
  },
  {
    title: '施術',
    body: '鍼・整体・カッピング・電気などを状態に合わせて組み合わせます。鍼は髪の毛ほどの細さで、刺激の強さは調整できます。苦手な場合は手技や運動療法を中心に組み立てます。',
  },
  {
    title: 'セルフケアと次回の目安',
    body: 'ご自宅でできるツボ押しやストレッチ、生活での工夫をお伝えします。あわせて、通院間隔の目安をご相談します。',
  },
]

const clothingTips = [
  '動きやすい服装でお越しください。ひざ上・ひじ上まで出せる服だと施術がスムーズです。',
  'お着替えをご用意していますので、お仕事帰りにそのままお越しいただけます。',
  '美容鍼をご希望の方は、クレンジングをご用意していますのでメイクをしたままで大丈夫です。',
  '施術の直前は、満腹や空腹を避けていただくと体が楽です。',
]

const aftercareTips = [
  '当日は激しい運動、長時間の入浴、飲酒を控えてください。',
  '水分を多めに摂り、早めに休んでいただくと回復が進みやすくなります。',
  '緊張が緩んだ反動で、当日から翌日にかけて眠気やだるさが出ることがあります。多くは1日程度で落ち着きます。',
  '毛細血管に当たると、まれに小さな内出血が出ることがあります。1〜2週間で自然に消えます。',
]

const consultFirst = [
  '妊娠中の方、妊娠の可能性がある方',
  'ペースメーカーを使用している方',
  '血液疾患のある方、血液をさらさらにするお薬を服用中の方',
  '重度の心臓疾患がある方',
  '発熱や、突然の激しい痛み・しびれがある方（まず医療機関の受診をおすすめすることがあります）',
]

const faqs = [
  {
    q: '鍼は本当に痛くないですか？',
    a: '使用する鍼は0.12〜0.20mmほどで、注射針（0.4〜0.9mm）よりはるかに細いものです。皮膚を通る瞬間にわずかにチクッとすることはありますが、入っている間はほとんど感じません。筋肉の緊張が強い部分では「ズーン」と響く感覚が出ることがあり、これは痛みとは異なる反応です。苦手な場合は刺激を弱めますので、遠慮なくお伝えください。',
  },
  {
    q: '鍼は使い捨てですか？',
    a: 'はい。すべて滅菌済みの使い捨て鍼を使用し、一度使った鍼は再利用しません。',
  },
  {
    q: '何回くらい通えば変化を感じられますか？',
    a: '症状の程度や続いている期間によって異なりますが、初めは週1回程度を3〜5回受けていただくと変化を実感される方が多いです。落ち着いてきたら2週間から1か月に1回のメンテナンスに移行していきます。',
  },
  {
    q: '保険は使えますか？',
    a: '当院は自費診療のみで、保険診療は行っておりません。お支払いは現金とクレジットカードに対応しています。',
  },
  {
    q: '病院に通いながら受けてもよいですか？',
    a: 'はい。医療機関での治療を続けながら受けていただけます。服用中のお薬や診断名があればお伝えください。当院の施術は医療の代わりではなく、体を整えて回復しやすい状態をつくるためのものです。',
  },
  {
    q: '鍼が苦手でも受けられますか？',
    a: '鍼を使わず、整体や運動療法、カッピングを中心に組み立てることもできます。カウンセリングの際にお伝えください。',
  },
]

// 初回の方に関係する料金だけを料金マスタから引く
const firstVisitServiceNames = ['施術（整体・鍼・電気・カッピング）', '美容鍼', '眼精疲労改善']

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

export default function FirstVisitPage() {
  const relevantServices = services.filter((service) => firstVisitServiceNames.includes(service.name))

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-14 max-w-4xl flex-1">
        <PageBreadcrumb
          className="mb-8"
          items={[{ name: 'ホーム', path: '/' }, { name: '初めての方へ' }]}
        />

        <header className="mb-14">
          <div
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ color: 'var(--gold-strong)' }}
          >
            初めての方へ
          </div>
          <h1 className="heading-mincho text-3xl md:text-4xl mb-5 leading-relaxed" style={{ color: INK }}>
            はじめて鍼灸を受ける方へ
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            「鍼は痛そう」「何をされるのか分からない」。初めての方が不安に感じる点は、ほとんどが流れを知らないことから来ています。
            鍼灸HANEでは、理学療法士でもある鍼灸師が、評価から施術まで一つずつ説明しながら進めます。
            このページでは、ご予約から施術後の過ごし方までをまとめました。
          </p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-600">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-4 h-4" style={{ color: GOLD }} />
              地下鉄七隈線 六本松駅 徒歩8分
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4" style={{ color: GOLD }} />
              初回は60〜70分（カウンセリング・評価を含む）
            </span>
          </div>
        </header>

        <section className="mb-14">
          <SectionHeading>ご来院から施術後までの流れ</SectionHeading>
          <ol className="flex flex-col gap-5">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span
                  className="flex-none w-8 h-8 rounded grid place-items-center text-sm font-bold"
                  style={{ color: 'var(--gold-strong)', border: '1px solid var(--gold)' }}
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1.5">{step.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-14">
          <SectionHeading>所要時間と料金</SectionHeading>
          <p className="text-gray-700 leading-relaxed mb-5">
            初回は60〜70分、2回目以降は40〜60分が目安です。初回はカウンセリングと評価に時間をかけるため、少し長めにお時間をいただきます。
          </p>
          <div className="overflow-x-auto border border-gray-200 rounded bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th scope="col" className="text-left font-semibold text-gray-700 px-4 py-3">施術</th>
                  <th scope="col" className="text-right font-semibold text-gray-700 px-4 py-3 whitespace-nowrap">料金</th>
                </tr>
              </thead>
              <tbody>
                {relevantServices.map((service) => (
                  <tr key={service.name} className="border-b border-gray-100 last:border-0">
                    <td className="px-4 py-3">
                      <span className="font-medium text-gray-900">{service.name}</span>
                      {service.description && (
                        <span className="block text-xs text-gray-500 mt-0.5">{service.description}</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-right whitespace-nowrap text-gray-900">{service.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-3">
            当院は自費診療のみで、保険診療は行っておりません。お支払いは現金・クレジットカードに対応しています。
            <Link href="/services" className="ml-1 font-medium hover:underline" style={{ color: 'var(--gold-strong)' }}>
              全メニューと料金を見る
            </Link>
          </p>
        </section>

        <section className="mb-14">
          <SectionHeading>当日の服装・持ち物</SectionHeading>
          <ul className="grid gap-3">
            {clothingTips.map((tip) => (
              <li key={tip} className="flex items-start gap-3 bg-white border border-gray-200 rounded p-4">
                <Check className="w-5 h-5 mt-0.5 flex-none" style={{ color: GOLD }} aria-hidden="true" />
                <span className="text-gray-700">{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-14">
          <SectionHeading>施術後の過ごし方</SectionHeading>
          <ul className="grid gap-3">
            {aftercareTips.map((tip) => (
              <li key={tip} className="flex items-start gap-3 bg-white border border-gray-200 rounded p-4">
                <Check className="w-5 h-5 mt-0.5 flex-none" style={{ color: GOLD }} aria-hidden="true" />
                <span className="text-gray-700">{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-14">
          <SectionHeading>事前にご相談いただきたい方</SectionHeading>
          <p className="text-gray-700 leading-relaxed mb-4">
            次に当てはまる方は、施術の内容を調整したり、先に医療機関の受診をおすすめしたりすることがあります。ご予約の際にお知らせください。
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {consultFirst.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-14">
          <SectionHeading>よくあるご質問</SectionHeading>
          <dl className="flex flex-col gap-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white border border-gray-200 rounded p-5">
                <dt className="font-bold text-gray-900 mb-2">Q. {faq.q}</dt>
                <dd className="text-gray-700 leading-relaxed">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mb-14">
          <SectionHeading>お悩み別のご案内</SectionHeading>
          <p className="text-gray-700 leading-relaxed">
            肩こり・腰痛・自律神経の乱れ・美容鍼について、原因の考え方から施術の流れまでを症状ごとにまとめています。
            <Link href="/symptoms" className="hover-underline ml-1 font-semibold" style={{ color: 'var(--gold-strong)' }}>
              症状別のご案内を見る
            </Link>
          </p>
        </section>

        <AuthorBox />

        <div
          className="mt-14 p-8 rounded text-center"
          style={{ backgroundColor: 'var(--gold-wash)', border: '1px solid var(--hairline)' }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-3">ご予約・ご相談</h2>
          <p className="text-gray-700 mb-6">
            「自分の症状に合うか分からない」という段階でも構いません。LINEでお気軽にご相談ください。
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="standout-button"
              style={{ backgroundColor: '#06C755' }}
            >
              LINEで予約・相談する
            </Link>
            <a href={TEL_HREF} className="standout-button inline-flex items-center gap-2" style={{ backgroundColor: INK }}>
              <Phone className="w-4 h-4" />
              {TEL_DISPLAY}
            </a>
          </div>
          <p className="text-sm text-gray-600 mt-5">
            <Link href="/access" className="hover-underline font-medium" style={{ color: 'var(--gold-strong)' }}>
              アクセス・道順はこちら
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

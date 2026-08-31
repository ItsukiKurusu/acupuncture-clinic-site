import Link from 'next/link'
import { Check, Clock, ArrowRight, MapPin } from 'lucide-react'
import { BOOKING_URL, TEL_DISPLAY, TEL_HREF } from '@/lib/site-config'
import { services } from '@/lib/services-data'
import type { Symptom } from '@/lib/symptoms-data'
import type { BlogPostMeta } from '@/lib/blog'

interface SymptomContentProps {
  symptom: Symptom
  relatedPosts: BlogPostMeta[]
  otherSymptoms: Symptom[]
}

const GOLD = '#d4af37'
const INK = '#1c1917'

export function SymptomContent({ symptom, relatedPosts, otherSymptoms }: SymptomContentProps) {
  // 該当する施術メニューを料金マスタから引く（料金の二重管理を避ける）
  const relevantServices = services.filter((service) => symptom.serviceNames.includes(service.name))

  return (
    <>
      {/* 導入 */}
      <header className="mb-14">
        <div
          className="inline-block rounded-full px-4 py-1 text-xs font-semibold tracking-widest uppercase mb-4"
          style={{ backgroundColor: 'rgba(212,175,55,0.15)', color: '#b8960a' }}
        >
          症状別のご案内
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-5 leading-snug" style={{ color: INK }}>
          {symptom.heading}
        </h1>
        <p className="text-lg leading-relaxed text-gray-700">{symptom.lead}</p>

        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-600">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-4 h-4" style={{ color: GOLD }} />
            地下鉄七隈線 六本松駅 徒歩8分
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-4 h-4" style={{ color: GOLD }} />
            {symptom.duration}
          </span>
        </div>
      </header>

      {/* お悩みチェック */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2" style={{ color: INK, borderColor: 'rgba(212,175,55,0.3)' }}>
          こんなお悩みはありませんか
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {symptom.checklist.map((item) => (
            <li key={item} className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-4">
              <Check className="w-5 h-5 mt-0.5 flex-none" style={{ color: GOLD }} aria-hidden="true" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 原因 */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2" style={{ color: INK, borderColor: 'rgba(212,175,55,0.3)' }}>
          なぜ{symptom.name}が起きるのか
        </h2>
        <div className="flex flex-col gap-7">
          {symptom.causes.map((cause) => (
            <div key={cause.heading}>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{cause.heading}</h3>
              <p className="text-gray-700 leading-relaxed">{cause.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* アプローチ */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2" style={{ color: INK, borderColor: 'rgba(212,175,55,0.3)' }}>
          鍼灸HANEのアプローチ
        </h2>
        <ol className="flex flex-col gap-5">
          {symptom.approach.map((step, index) => (
            <li key={step.heading} className="flex gap-4">
              <span
                className="flex-none w-8 h-8 rounded-full grid place-items-center text-sm font-bold"
                style={{ backgroundColor: 'rgba(212,175,55,0.15)', color: '#b8960a' }}
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1.5">{step.heading}</h3>
                <p className="text-gray-700 leading-relaxed">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* 料金 */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2" style={{ color: INK, borderColor: 'rgba(212,175,55,0.3)' }}>
          料金の目安
        </h2>
        <div className="overflow-x-auto border border-gray-200 rounded-lg bg-white">
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
          当院は自費診療のみで、保険診療は行っておりません。
          <Link href="/services" className="ml-1 font-medium hover:underline" style={{ color: '#b8960a' }}>
            全メニューと料金を見る
          </Link>
        </p>
      </section>

      {/* よくあるご質問 */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2" style={{ color: INK, borderColor: 'rgba(212,175,55,0.3)' }}>
          {symptom.name}についてよくあるご質問
        </h2>
        <div className="flex flex-col gap-4">
          {symptom.faqs.map((faq) => (
            <details key={faq.q} className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer px-5 py-4 font-bold text-gray-900 marker:content-none [&::-webkit-details-marker]:hidden flex items-start gap-3">
                <span className="flex-none font-bold" style={{ color: GOLD }} aria-hidden="true">Q</span>
                <span>{faq.q}</span>
              </summary>
              <p className="px-5 pb-4 pl-11 text-gray-700 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* 関連セルフケア記事 */}
      {relatedPosts.length > 0 && (
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-2 pb-2 border-b-2" style={{ color: INK, borderColor: 'rgba(212,175,55,0.3)' }}>
            自宅でできるセルフケア
          </h2>
          <p className="text-gray-700 mb-6">
            施術で整えた状態を保つために、{symptom.name}に関わるツボのセルフケアをご紹介しています。
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block p-5 bg-white border border-gray-200 rounded-lg hover:border-[#d4af37] hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-3">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section
        className="rounded-lg p-8 text-center mb-14"
        style={{ background: 'linear-gradient(to right, rgba(212,175,55,0.12), rgba(212,175,55,0.05))' }}
      >
        <h2 className="text-2xl font-bold mb-3" style={{ color: INK }}>
          {symptom.name}のご相談・ご予約
        </h2>
        <p className="text-gray-700 mb-2">
          当院は完全予約制です。LINEまたはお電話にてご予約ください。
        </p>
        <p className="text-sm text-gray-600 mb-6">受付時間 10:00〜20:00（日・祝日を除く）</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="standout-button" style={{ backgroundColor: '#06C755' }}>
            LINEで予約する
          </a>
          <a href={TEL_HREF} className="standout-button" style={{ backgroundColor: INK }}>
            {TEL_DISPLAY} に電話する
          </a>
        </div>
      </section>

      {/* 他の症状へ */}
      {otherSymptoms.length > 0 && (
        <nav aria-label="他の症状" className="border-t border-gray-200 pt-8">
          <h2 className="text-lg font-bold mb-4" style={{ color: INK }}>他のお悩みもご相談いただけます</h2>
          <ul className="flex flex-col gap-2">
            {otherSymptoms.map((other) => (
              <li key={other.slug}>
                <Link
                  href={`/symptoms/${other.slug}`}
                  className="inline-flex items-center gap-2 text-gray-700 hover:text-[#b8960a] transition-colors"
                >
                  <ArrowRight className="w-4 h-4" style={{ color: GOLD }} />
                  <span>六本松で{other.name}にお悩みの方へ</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  )
}

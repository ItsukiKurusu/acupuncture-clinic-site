import Image from 'next/image'
import { CalendarCheck, Clock, JapaneseYen, MapPin, Star } from 'lucide-react'
import { BOOKING_URL, GBP_URL, SHINQ_REVIEW_URL } from '@/lib/site-config'

interface LpKeyFactsProps {
  image: { src: string; alt: string }
  /** 例：「全身 7,000円 / 局所 5,000円」 */
  price: string
  /** 例：「初回は60〜70分」 */
  duration: string
}

const INK = '#1c1917'

/**
 * 広告・検索から来た人が最初の画面で判断できるよう、
 * 「誰が（写真）・いくら・何分・どこ・予約方法」と予約ボタン、口コミへの導線を1か所にまとめる。
 * /first-visit と症状別ページの H1 直下で使う。
 * ボタンの計測は ConversionTracker が data-cta="lp_top" を見て行う。
 */
export function LpKeyFacts({ image, price, duration }: LpKeyFactsProps) {
  const facts = [
    { icon: JapaneseYen, label: '料金', value: price },
    { icon: Clock, label: '所要時間', value: duration },
    { icon: MapPin, label: 'アクセス', value: '七隈線 六本松駅 徒歩8分' },
    { icon: CalendarCheck, label: 'ご予約', value: '完全予約制（LINE・お電話）' },
  ]

  return (
    <div
      className="rounded p-4 md:p-6 mb-8"
      style={{ backgroundColor: 'var(--gold-wash)', border: '1px solid var(--hairline)' }}
    >
      <div className="grid grid-cols-[104px_1fr] md:grid-cols-[200px_1fr] gap-4 md:gap-6 items-start">
        <div className="relative aspect-[3/4] overflow-hidden rounded bg-gray-100">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="(min-width: 768px) 200px, 104px"
            className="object-cover"
          />
        </div>
        <dl className="flex flex-col gap-2.5 md:gap-3.5 text-sm md:text-base">
          {facts.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-2">
              <Icon className="w-4 h-4 mt-0.5 md:mt-1 flex-none" style={{ color: 'var(--gold-strong)' }} aria-hidden="true" />
              <div className="min-w-0">
                <dt className="sr-only">{label}</dt>
                <dd className="text-gray-900 leading-snug">{value}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>

      <div data-cta="lp_top" className="mt-4 md:mt-5">
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="standout-button w-full md:w-auto"
          style={{ backgroundColor: '#06C755' }}
        >
          LINEで予約・相談する
        </a>
      </div>

      <p className="mt-3 text-sm text-gray-700 flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="inline-flex items-center gap-1" style={{ color: INK }}>
          <Star className="w-4 h-4" style={{ fill: 'var(--gold)', color: 'var(--gold)' }} aria-hidden="true" />
          口コミを見る
        </span>
        <a href={GBP_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2" style={{ color: 'var(--gold-strong)' }}>
          Googleマップ
        </a>
        <a href={SHINQ_REVIEW_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2" style={{ color: 'var(--gold-strong)' }}>
          しんきゅうコンパス
        </a>
      </p>
    </div>
  )
}

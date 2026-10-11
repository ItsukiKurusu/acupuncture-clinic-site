import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { DIRECTOR } from '@/lib/director'

/**
 * 記事末尾の著者ボックス。
 * 医療・健康分野の記事は「誰が書いたか」が評価と信頼の両方に関わるため、
 * 顔写真・国家資格・プロフィールページへのリンクをすべての記事に出す。
 */
export function AuthorBox() {
  return (
    <aside
      aria-label="この記事の執筆者"
      className="mt-16 flex flex-col sm:flex-row gap-6 bg-white rounded p-6 sm:p-7"
      style={{ border: '1px solid var(--hairline)' }}
    >
      <Link href="/about" className="shrink-0 self-start" prefetch={false}>
        <Image
          src={DIRECTOR.image}
          alt={`${DIRECTOR.name}（${DIRECTOR.jobTitle}）`}
          width={96}
          height={120}
          className="rounded object-cover object-top w-24 h-30"
          style={{ aspectRatio: '4 / 5' }}
        />
      </Link>
      <div className="min-w-0">
        <p
          className="text-xs font-semibold tracking-[0.2em] uppercase mb-2"
          style={{ color: 'var(--gold-strong)' }}
        >
          この記事を書いた人
        </p>
        <p className="heading-mincho text-xl text-gray-900 leading-snug">
          {DIRECTOR.name}
          <span className="ml-2 text-sm text-gray-500 font-sans">{DIRECTOR.kana}</span>
        </p>
        <p className="text-sm font-semibold text-gray-700 mt-0.5 mb-3">
          鍼灸HANE 院長／{DIRECTOR.jobTitle}
        </p>
        <p className="text-sm text-gray-600 leading-relaxed">{DIRECTOR.bio}</p>
        <Link
          href="/about"
          className="hover-underline inline-flex items-center gap-1.5 text-sm font-semibold mt-4"
          style={{ color: 'var(--gold-strong)' }}
          prefetch={false}
        >
          院長の紹介を見る
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </aside>
  )
}

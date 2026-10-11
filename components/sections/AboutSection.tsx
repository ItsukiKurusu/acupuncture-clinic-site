"use client"
import Link from "next/link"
import Image from "next/image"
import { motion, type Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Award, Stethoscope, Trophy } from "lucide-react"
import { DIRECTOR } from "@/lib/director"

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

// 以前は「豊富な経験と確かな技術」といった汎用文とアイコン3つだけで、
// 他院との違い（理学療法士でもあること）も院長の顔も伝わらなかった。
// 医療系サイトでは「誰が施術するか」が予約の決め手になるため、
// 院長の顔写真・資格・根拠のある実績を前面に出す。
const credentials = [
  {
    icon: Award,
    label: "国家資格を2つ保有",
    body: "鍼灸師（はり師・きゅう師）と理学療法士。東洋医学と運動器の両方の視点で体を見ます。",
  },
  {
    icon: Stethoscope,
    label: "病院・クリニックでの理学療法経験",
    body: "運動・筋肉・骨格の評価を積み重ねてきたため、痛む場所だけでなく原因となる動きの癖まで探ります。",
  },
  {
    icon: Trophy,
    label: "競技スポーツのトレーナー活動",
    body: "国民スポーツ大会 九州ブロック大会に、ラグビー大分県代表のトレーナーとして帯同しています。",
    href: "/blog/kokumin-sports-kyushu-block-trainer",
  },
]

export function AboutSection({ bookingUrl }: { bookingUrl: string }) {
  return (
    <section id="about" className="w-full py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:items-center">
          {/* 院長写真 */}
          <motion.div
            className="mx-auto w-full max-w-[360px] lg:max-w-none"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="hover-zoom rounded overflow-hidden" style={{ border: "1px solid var(--hairline)" }}>
              <Image
                src={DIRECTOR.image}
                alt={`院長 ${DIRECTOR.name}（${DIRECTOR.jobTitle}）`}
                width={820}
                height={1025}
                sizes="(min-width: 1024px) 420px, 360px"
                className="w-full h-auto object-cover object-top"
                style={{ aspectRatio: "4 / 5" }}
              />
            </div>
          </motion.div>

          {/* テキスト */}
          <motion.div
            className="space-y-6"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={item}>
              <span
                className="inline-block text-xs font-semibold tracking-[0.2em] uppercase"
                style={{ color: "var(--gold-strong)" }}
              >
                院長紹介
              </span>
            </motion.div>
            <motion.h2 variants={item} className="heading-mincho text-3xl sm:text-4xl md:text-[2.6rem] leading-snug">
              鍼灸師であり、<br className="sm:hidden" />理学療法士でもある院長が施術します
            </motion.h2>
            <motion.p variants={item} className="text-foreground">
              <span className="heading-mincho text-2xl">{DIRECTOR.name}</span>
              <span className="ml-2 text-sm text-muted-foreground">{DIRECTOR.kana}</span>
              <span className="block text-sm font-semibold mt-1" style={{ color: "var(--gold-strong)" }}>
                {DIRECTOR.jobTitle}
              </span>
            </motion.p>
            <motion.p variants={item} className="max-w-xl text-muted-foreground md:text-lg leading-relaxed">
              マッサージで一時的に軽くなっても、数日で戻ってしまう。そうした不調の多くは、痛む場所だけが原因ではありません。
              理学療法士として培った評価の視点で原因を探り、鍼灸と整体を組み合わせて、戻りにくい体づくりまでお手伝いします。
            </motion.p>

            <motion.ul variants={item} className="space-y-4">
              {credentials.map(({ icon: Icon, label, body, href }) => (
                <li key={label} className="flex items-start gap-3">
                  <Icon className="h-5 w-5 mt-0.5 shrink-0" style={{ color: "var(--gold-strong)" }} aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-foreground">{label}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {body}
                      {href && (
                        <Link
                          href={href}
                          className="hover-underline ml-1 font-medium"
                          style={{ color: "var(--gold-strong)" }}
                          prefetch={false}
                        >
                          活動報告を読む
                        </Link>
                      )}
                    </p>
                  </div>
                </li>
              ))}
            </motion.ul>

            <motion.div variants={item} className="flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/about">院長について詳しく</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href={bookingUrl} target="_blank" rel="noopener noreferrer">
                  ご予約・お問い合わせ
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

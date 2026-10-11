"use client"
import Link from "next/link"
import { motion, type Variants } from "framer-motion"
import { ArrowRight, Clock, Shirt, Wallet } from "lucide-react"

// 「初めての方へ」ページの要約。
// 予約直前の人が確かめる「流れ・時間・料金・服装」だけをトップに置き、
// 詳細は /first-visit に任せる。
const steps = [
  { title: "ご予約", body: "LINEまたはお電話で。ご希望の日時と、気になる症状を一言添えてください。" },
  { title: "カウンセリングと評価", body: "いつから・どんな時につらいかを伺い、動きや左右差を確認して原因を切り分けます。" },
  { title: "施術", body: "鍼・整体・カッピングなどを状態に合わせて組み合わせます。刺激の強さは調整できます。" },
  { title: "セルフケアと次回の目安", body: "ご自宅でできるケアと、通院間隔の目安をお伝えします。" },
]

const facts = [
  { icon: Clock, label: "所要時間", value: "初回 60〜70分／2回目以降 40〜60分" },
  { icon: Wallet, label: "料金", value: "施術 全身 7,000円・局所 5,000円（自費診療）" },
  { icon: Shirt, label: "服装", value: "動きやすい服装で。お着替えもご用意しています" },
]

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export function FirstVisitSection() {
  return (
    <section id="first-visit" className="w-full py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div
          className="text-center space-y-4 mb-12"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <span
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase"
            style={{ color: "var(--gold-strong)" }}
          >
            初めての方へ
          </span>
          <h2 className="heading-mincho text-3xl md:text-4xl">はじめてでも、流れが分かれば安心です</h2>
          <p className="max-w-xl mx-auto text-muted-foreground md:text-lg">
            鍼が初めての方、痛みが不安な方にも、ひとつずつ説明しながら進めます。
          </p>
        </motion.div>

        <motion.ol
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {steps.map((step, index) => (
            <motion.li
              key={step.title}
              variants={item}
              className="bg-white rounded p-6"
              style={{ border: "1px solid var(--hairline)" }}
            >
              <span
                className="inline-grid w-8 h-8 place-items-center rounded text-sm font-bold mb-4"
                style={{ color: "var(--gold-strong)", border: "1px solid var(--gold)" }}
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
            </motion.li>
          ))}
        </motion.ol>

        <motion.dl
          className="mt-8 grid gap-4 sm:grid-cols-3 bg-white rounded p-6"
          style={{ border: "1px solid var(--hairline)" }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-40px" }}
        >
          {facts.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-3">
              <Icon className="h-5 w-5 mt-0.5 shrink-0" style={{ color: "var(--gold-strong)" }} aria-hidden="true" />
              <div>
                <dt className="text-xs font-semibold tracking-wider text-muted-foreground">{label}</dt>
                <dd className="text-sm text-foreground mt-0.5">{value}</dd>
              </div>
            </div>
          ))}
        </motion.dl>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link href="/first-visit" className="outline-button" prefetch={false}>
            初めての方へのご案内を読む
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

"use client"
import Link from "next/link"
import { motion, type Variants } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { symptoms } from "@/lib/symptoms-data"

// 検索から来た人が最初に探すのは「自分の症状に対応しているか」なので、
// ヒーロー直下に置く。GSCでも「六本松 肩こり」「六本松 腰痛」など
// 症状＋地域のクエリが地域クエリの大半を占めている。
const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export function SymptomsSection() {
  return (
    <section id="symptoms" className="w-full py-20 md:py-28 bg-background">
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
            症状から選ぶ
          </span>
          <h2 className="heading-mincho text-3xl md:text-4xl">こんなお悩みでお越しいただいています</h2>
          <p className="max-w-xl mx-auto text-muted-foreground md:text-lg">
            お悩みごとに、原因の考え方・施術の流れ・料金をまとめています。
          </p>
        </motion.div>

        <motion.ul
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {symptoms.map((symptom) => (
            <motion.li key={symptom.slug} variants={item}>
              <Link
                href={`/symptoms/${symptom.slug}`}
                className="hover-card group flex h-full flex-col bg-white rounded p-6"
                style={{ border: "1px solid var(--hairline)" }}
                prefetch={false}
              >
                <h3 className="heading-mincho text-2xl mb-3" style={{ color: "#1c1917" }}>
                  {symptom.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{symptom.summary}</p>
                <span
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold"
                  style={{ color: "var(--gold-strong)" }}
                >
                  施術の流れと料金
                  <ArrowRight className="hover-arrow w-4 h-4" />
                </span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        <motion.p
          className="text-center text-sm text-muted-foreground mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          眼精疲労・頭痛、膝や股関節の痛み、スポーツ後のケアなど、上記以外のお悩みもご相談ください。
          <Link
            href="/symptoms"
            className="hover-underline ml-2 font-semibold"
            style={{ color: "var(--gold-strong)" }}
            prefetch={false}
          >
            症状別のご案内を見る
          </Link>
        </motion.p>
      </div>
    </section>
  )
}

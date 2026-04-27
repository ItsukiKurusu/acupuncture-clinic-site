"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Leaf, Sparkles, Stethoscope } from "lucide-react"

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
}

const item = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const features = [
  { icon: Leaf, label: "国家資格を持つ鍼灸師による施術" },
  { icon: Sparkles, label: "清潔で落ち着いた院内環境" },
  { icon: Stethoscope, label: "豊富な施術メニュー" },
]

export function AboutSection({ bookingUrl }: { bookingUrl: string }) {
  return (
    <section id="about" className="w-full py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          {/* Left */}
          <motion.div
            className="space-y-6"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={item}>
              <span
                className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase"
                style={{ backgroundColor: "rgba(212,175,55,0.12)", color: "#b8960a" }}
              >
                当院について
              </span>
            </motion.div>
            <motion.h2
              variants={item}
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl leading-tight"
              style={{ fontFamily: "'游明朝','Yu Mincho',YuMincho,'Hiragino Mincho Pro',serif" }}
            >
              一人ひとりに寄り添った<br />丁寧な治療
            </motion.h2>
            <motion.p variants={item} className="max-w-lg text-muted-foreground md:text-lg leading-relaxed">
              患者様一人ひとりの症状や体質に合わせたオーダーメイドの治療を行っています。豊富な経験と確かな技術で、皆様の健康をサポートいたします。
            </motion.p>
            <motion.div variants={item} className="flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/about">当院について詳しく</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href={bookingUrl} target="_blank" rel="noopener noreferrer">
                  ご予約・お問い合わせ
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            className="rounded-2xl bg-white p-8 shadow-sm space-y-5"
            style={{ border: "1px solid #e8e0cc", borderLeft: "4px solid #d4af37" }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-80px" }}
          >
            {features.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              >
                <div
                  className="p-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: "rgba(212,175,55,0.12)" }}
                >
                  <Icon className="h-5 w-5" style={{ color: "#b8960a" }} />
                </div>
                <span className="font-medium text-foreground">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

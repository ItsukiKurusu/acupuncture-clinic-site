"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { HoverEffect } from "@/components/aceternity/card-hover-effect"
import { Leaf, Sparkles } from "lucide-react"

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

const services = [
  {
    icon: <Leaf className="h-7 w-7" style={{ color: "#b8960a" }} />,
    title: "施術",
    price: "全身　¥7,000\n局所　¥5,000",
    description: "慢性的な肩こり・腰痛や身体のだるさ、取りにくい疲れや痛みに対して体質改善を促します。",
  },
  {
    icon: <Sparkles className="h-7 w-7" style={{ color: "#b8960a" }} />,
    title: "美容鍼",
    price: "初回お試し　¥6,000\n2回目以降　¥9,000",
    description: "お顔のツボを刺激し、血行を促進。リフトアップ、しわ・たるみの改善、肌質の向上を目指します。",
  },
  {
    icon: <Sparkles className="h-7 w-7" style={{ color: "#b8960a" }} />,
    title: "トレーニング",
    price: "EMS×パーソナル　¥8,000\nEMSトレーニング　¥3,000",
    description: "直流電気を用いたEMSトレーニングとパーソナルトレーニングを組み合わせたオーダーメイドのプログラムです。",
  },
  {
    icon: <Sparkles className="h-7 w-7" style={{ color: "#b8960a" }} />,
    title: "眼精疲労",
    price: "1回　¥2,000",
    description: "パソコンやスマホによる目の疲れ・かすみ、頭痛や肩こりの原因となる眼精疲労にアプローチします。",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center text-center mb-14 space-y-4"
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
              施術内容
            </span>
          </motion.div>
          <motion.h2
            variants={item}
            className="text-3xl font-bold tracking-tight md:text-4xl"
            style={{ fontFamily: "'游明朝','Yu Mincho',YuMincho,'Hiragino Mincho Pro',serif" }}
          >
            多彩な施術メニュー
          </motion.h2>
          <motion.p variants={item} className="max-w-xl text-muted-foreground md:text-lg">
            様々なお悩みに対応できるよう、幅広い施術メニューをご用意しております。
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-60px" }}
        >
          <HoverEffect items={services} className="max-w-6xl mx-auto" />
        </motion.div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button asChild variant="outline" size="lg">
            <Link href="/services">施術内容を詳しく見る</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

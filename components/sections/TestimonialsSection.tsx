"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

const testimonials = [
  {
    title: "美容鍼の体験をしました。",
    body: "痛みも少なく、終わったあとはおでこから頭のあたりがスッキリ感じました。口角が上がったり、ほうれい線も薄くなったように思えました。1回試しただけでも効果があったと思います★また定期的に通いたいと思います！ありがとうございました(｡・‧̫・｡)v",
    name: "かおる様（女性）",
  },
  {
    title: "全身の不調が改善されました。",
    body: "ほぼ全身が不調で、かかりつけの先生に相談したら羽多野先生をご紹介いただき本日初めて伺いました。細かい症状まで聞いてくださり、その原因や症状の改善の仕方をとても丁寧に説明してくださいました。本日は首への鍼の施術もありましたが、施術後は動きも軽く可動域も広がりました。",
    name: "butabarakarubi様（女性）",
  },
]

export function TestimonialsSection({ reviewsUrl }: { reviewsUrl: string }) {
  return (
    <section id="testimonials" className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center space-y-4 mb-14"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <span
            className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase"
            style={{ backgroundColor: "rgba(212,175,55,0.12)", color: "#b8960a" }}
          >
            お客様の声
          </span>
          <h2
            className="text-3xl font-bold tracking-tight md:text-4xl"
            style={{ fontFamily: "'游明朝','Yu Mincho',YuMincho,'Hiragino Mincho Pro',serif" }}
          >
            ご来院されたお客様より
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-7 shadow-md"
              style={{
                border: "1px solid #e8e0cc",
                borderLeft: "4px solid #d4af37",
              }}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -5, transition: { duration: 0.22 } }}
            >
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4" style={{ fill: "#d4af37", color: "#d4af37" }} />
                ))}
              </div>
              <h3 className="font-bold text-lg mb-3 text-foreground">{t.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{t.body}</p>
              <p className="text-sm font-semibold text-right" style={{ color: "#b8960a" }}>{t.name}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button asChild variant="outline">
            <Link href={reviewsUrl} target="_blank" rel="noopener noreferrer">
              「しんきゅうコンパス」で他の口コミを見る
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

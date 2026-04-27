"use client"
import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "予約は必要ですか？",
    a: "はい、当院は完全予約制となっております。LINEまたはお電話にてご予約をお願いいたします。",
  },
  {
    q: "初めてでも大丈夫ですか？",
    a: "もちろん大丈夫です。初回はカウンセリングを行い、お体の状態を詳しくお伺いしてから施術いたします。不安なことがあればお気軽にご相談ください。",
  },
  {
    q: "どのくらいの頻度で通えばよいですか？",
    a: "症状の程度や種類によって異なりますが、初めは週1回程度、症状が改善してきたら2週間に1回程度をおすすめしています。",
  },
  {
    q: "鍼は痛くないですか？",
    a: "当院では髪の毛ほどの細さの鍼を使用しており、痛みはほとんどありません。個人差はありますが、多くの患者様が「思ったより痛くない」とおっしゃいます。",
  },
  {
    q: "保険は使えますか？",
    a: "申し訳ございませんが、当院では保険診療は行っておりません。自費診療のみとなります。",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="w-full py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
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
            よくある質問
          </span>
          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ fontFamily: "'游明朝','Yu Mincho',YuMincho,'Hiragino Mincho Pro',serif" }}
          >
            FAQ
          </h2>
          <p className="text-muted-foreground md:text-lg">患者様からよくいただく質問をまとめました。</p>
        </motion.div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-40px" }}
            >
              <AccordionItem
                value={`item-${i + 1}`}
                className="bg-white rounded-xl px-5 shadow-sm"
                style={{ border: "1px solid #e8e0cc" }}
              >
                <AccordionTrigger
                  className="text-left font-semibold hover:no-underline py-5"
                  style={{ color: "#1c1917" }}
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

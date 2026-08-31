"use client"
import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from "@/lib/faq-data"

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
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase"
            style={{ color: "var(--gold-strong)" }}
          >
            FAQ
          </span>
          <h2
            className="heading-mincho text-3xl sm:text-4xl"
          >
            よくある質問
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
                className="bg-white rounded px-5"
                style={{ border: "1px solid var(--hairline)" }}
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

"use client"
import Image from "next/image"
import { motion } from "framer-motion"

export function IrukaSection() {
  return (
    <motion.section
      className="w-full py-10 md:py-14 bg-background"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-60px" }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div
          className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-white shadow-sm"
          style={{ border: "1px solid #e8e0cc" }}
        >
          <div className="px-6 pt-8 text-center md:px-10 md:pt-10">
            <p
              className="text-2xl font-bold md:text-3xl"
              style={{
                fontFamily: "'游明朝','Yu Mincho',YuMincho,'Hiragino Mincho Pro',serif",
                color: "#1c1917",
              }}
            >
              「地域情報誌　いるか」に掲載されました！
            </p>
          </div>
          <div className="p-4 md:p-8">
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/いるかHP素材.png"
                width={1600}
                height={900}
                alt="地域情報誌いるか掲載のお知らせ"
                sizes="(min-width: 1024px) 896px, (min-width: 768px) 90vw, 100vw"
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

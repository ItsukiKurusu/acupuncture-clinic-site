"use client"
import Image from "next/image"
import { motion } from "framer-motion"

const issues = [
  {
    label: "5月号",
    src: "/iruka5.jpg",
    alt: "地域情報誌いるか 5月号",
  },
  {
    label: "4月号",
    src: "/いるかHP素材.png",
    alt: "地域情報誌いるか 4月号",
  },
]

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
            <p
              className="mt-2 text-sm md:text-base"
              style={{ color: "#78716c" }}
            >
              いるか新聞 - 六本松いきいきコラム アーカイブ
            </p>
          </div>

          <div className="p-4 md:p-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {issues.map((issue) => (
                <div key={issue.label} className="flex flex-col gap-2">
                  <span
                    className="text-center text-sm font-semibold tracking-widest"
                    style={{ color: "#a8926a" }}
                  >
                    {issue.label}
                  </span>
                  <div className="overflow-hidden rounded-xl" style={{ border: "1px solid #e8e0cc" }}>
                    <Image
                      src={issue.src}
                      width={800}
                      height={600}
                      alt={issue.alt}
                      sizes="(min-width: 1024px) 420px, (min-width: 640px) 45vw, 90vw"
                      className="h-auto w-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

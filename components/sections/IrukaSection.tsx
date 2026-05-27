"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { X } from "lucide-react"

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
  const [selected, setSelected] = useState<(typeof issues)[number] | null>(null)

  useEffect(() => {
    if (!selected) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null)
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [selected])

  return (
    <>
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
                    <button
                      onClick={() => setSelected(issue)}
                      className="overflow-hidden rounded-xl transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                      style={{ border: "1px solid #e8e0cc" }}
                      aria-label={`${issue.alt}を拡大表示`}
                    >
                      <Image
                        src={issue.src}
                        width={800}
                        height={600}
                        alt={issue.alt}
                        sizes="(min-width: 1024px) 420px, (min-width: 640px) 45vw, 90vw"
                        className="h-auto w-full object-contain"
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute -top-10 right-0 flex items-center gap-1 text-white/80 hover:text-white transition-colors"
              aria-label="閉じる"
            >
              <X size={20} />
              <span className="text-sm">閉じる</span>
            </button>
            <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
              <Image
                src={selected.src}
                width={1600}
                height={1200}
                alt={selected.alt}
                sizes="90vw"
                className="h-auto max-h-[85vh] w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

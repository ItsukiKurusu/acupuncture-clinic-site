"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { irukaIssues as issues } from "@/lib/iruka-issues"

export function IrukaArchive() {
  const [selected, setSelected] = useState<(typeof issues)[number] | null>(null)

  useEffect(() => {
    if (!selected) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null)
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [selected])

  return (
    <>
      {/* アーカイブグリッド */}
      <div className="mx-auto max-w-3xl grid grid-cols-1 gap-8 sm:grid-cols-2">
        {issues.map((issue) =>
          issue.type === "pdf" ? (
            <a
              key={issue.label}
              href={issue.src}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              aria-label={`${issue.alt}をPDFで開く`}
            >
              <div
                className="overflow-hidden rounded-2xl shadow-sm transition-shadow group-hover:shadow-md flex items-center justify-center"
                style={{ border: "1px solid #e8e0cc", backgroundColor: "#faf7f2", aspectRatio: "4/3" }}
              >
                <div className="flex flex-col items-center gap-3 text-center px-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#a8926a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="9" y1="15" x2="15" y2="15"/>
                    <line x1="9" y1="11" x2="15" y2="11"/>
                  </svg>
                  <span className="text-sm font-medium" style={{ color: "#78716c" }}>
                    クリックしてPDFを開く
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 px-1">
                <span
                  className="text-xs font-semibold tracking-widest px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: "#f5f0e8", color: "#a8926a" }}
                >
                  {issue.label}
                </span>
                <span className="text-xs" style={{ color: "#a09080" }}>{issue.date}</span>
              </div>
            </a>
          ) : (
            <button
              key={issue.label}
              onClick={() => setSelected(issue)}
              className="group flex flex-col gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              aria-label={`${issue.alt}を拡大表示`}
            >
              <div
                className="overflow-hidden rounded-2xl shadow-sm transition-shadow group-hover:shadow-md"
                style={{ border: "1px solid #e8e0cc" }}
              >
                <Image
                  src={issue.src}
                  width={800}
                  height={600}
                  alt={issue.alt}
                  sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 90vw"
                  className="h-auto w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex items-center gap-2 px-1">
                <span
                  className="text-xs font-semibold tracking-widest px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: "#f5f0e8", color: "#a8926a" }}
                >
                  {issue.label}
                </span>
                <span className="text-xs" style={{ color: "#a09080" }}>{issue.date}</span>
              </div>
            </button>
          )
        )}
      </div>

      {/* ライトボックス */}
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

"use client"
import { cn } from "@/lib/utils"

interface HoverItem {
  title: string
  description: string
  price?: string
  icon?: React.ReactNode
}

/**
 * 施術メニューのカード一覧。
 *
 * 以前はホバーで背景が膨らむ演出（Aceternity UI の HoverEffect）を使っていたが、
 * 参考にした鍼灸院サイトに倣い、枠線の色が変わるだけの静かな挙動に改めた。
 * 名前とファイルパスは、外部からの参照を壊さないためそのまま残している。
 */
export function HoverEffect({
  items,
  className,
}: {
  items: HoverItem[]
  className?: string
}) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", className)}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="hover-card h-full bg-white flex flex-col items-center text-center p-7 rounded"
          style={{ border: "1px solid var(--hairline)" }}
        >
          {item.icon && <div className="mb-4">{item.icon}</div>}
          <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
          {item.price && (
            <p className="text-sm text-muted-foreground mb-3 whitespace-pre-line leading-relaxed">
              {item.price}
            </p>
          )}
          <p className="text-sm text-muted-foreground leading-relaxed flex-1">{item.description}</p>
        </div>
      ))}
    </div>
  )
}

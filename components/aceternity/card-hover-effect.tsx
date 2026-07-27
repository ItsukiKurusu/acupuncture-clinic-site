"use client"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface HoverItem {
  title: string
  description: string
  price?: string
  icon?: React.ReactNode
}

export function HoverEffect({
  items,
  className,
}: {
  items: HoverItem[]
  className?: string
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3", className)}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-1.5 h-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-[#d4af37]/10 block rounded-2xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>
          <div
            className="relative z-20 rounded-2xl h-full bg-white flex flex-col items-center text-center p-6 transition-shadow duration-300 group-hover:shadow-xl"
            style={{
              border: "1px solid #e8e0cc",
              borderTop: "3px solid #d4af37",
            }}
          >
            {item.icon && (
              <div
                className="p-3.5 rounded-full mb-4"
                style={{ backgroundColor: "rgba(212,175,55,0.12)" }}
              >
                {item.icon}
              </div>
            )}
            <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
            {item.price && (
              <p className="text-sm text-muted-foreground mb-3 whitespace-pre-line leading-relaxed">
                {item.price}
              </p>
            )}
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

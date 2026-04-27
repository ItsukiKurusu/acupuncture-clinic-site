"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const banners = [
  {
    href: "https://www.shinq-compass.jp/salon/reserve/37835",
    src: "/campaign-banner.png",
    alt: "キャンペーン",
  },
  {
    href: "https://line.me/R/ti/p/@241gbrkw",
    src: "/line-banner.png",
    alt: "LINE追加バナー",
  },
]

export function BannerSection() {
  return (
    <section className="w-full py-8 md:py-12 bg-muted/50">
      <div className="w-full px-4 md:px-6 lg:px-8">
        <div className="flex flex-col gap-6 max-w-5xl mx-auto">
          {banners.map((banner, i) => (
            <motion.div
              key={banner.alt}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ scale: 1.015, transition: { duration: 0.25 } }}
            >
              <Link
                href={banner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Image
                  src={banner.src}
                  width={1920}
                  height={600}
                  alt={banner.alt}
                  className="w-full h-auto shadow-xl rounded-xl"
                  quality={100}
                  priority
                  unoptimized
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

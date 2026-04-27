"use client"
import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"

const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
}

const childVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
}

export function HeroSection({ bookingUrl }: { bookingUrl: string }) {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const textOpacity = useTransform(scrollYProgress, [0, 0.42], [1, 0])
  const textY = useTransform(scrollYProgress, [0, 0.42], [0, -72])
  const overlayOpacity = useTransform(scrollYProgress, [0.28, 0.88], [0, 1])
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.12])

  return (
    <section ref={sectionRef} className="w-full h-screen relative overflow-hidden">
      {/* Video background */}
      <motion.div className="absolute inset-0" style={{ scale: videoScale }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/40" />
      </motion.div>

      {/* White overlay on scroll */}
      <motion.div
        className="absolute inset-0 bg-white pointer-events-none"
        style={{ opacity: overlayOpacity }}
      />

      {/* Hero text */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10"
        style={{ opacity: textOpacity, y: textY }}
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={childVariants} className="mb-4">
          <span
            className="text-[10px] font-semibold tracking-[0.35em] uppercase px-4 py-1.5 rounded-full"
            style={{
              backgroundColor: "rgba(212,175,55,0.22)",
              color: "#f5d980",
              backdropFilter: "blur(6px)",
              border: "1px solid rgba(212,175,55,0.3)",
            }}
          >
            福岡市中央区六本松
          </span>
        </motion.div>

        <motion.h1
          variants={childVariants}
          className="text-3xl sm:text-4xl md:text-5xl xl:text-[3.2rem] font-bold tracking-tight text-white drop-shadow-lg leading-snug mb-5"
          style={{ fontFamily: "'游明朝','Yu Mincho',YuMincho,'Hiragino Mincho Pro',serif" }}
        >
          心と身体を癒す、<br />伝統の鍼灸治療
        </motion.h1>

        <motion.p
          variants={childVariants}
          className="text-white/80 max-w-[540px] md:text-lg leading-relaxed mb-9 drop-shadow"
        >
          お一人おひとりの症状に合わせたオーダーメイドの施術で、<br className="hidden sm:block" />
          自然治癒力を高め、健やかな毎日をサポートします。
        </motion.p>

        <motion.div variants={childVariants}>
          <Link
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-9 py-3.5 rounded-full text-sm font-bold tracking-wider transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "#06C755",
              color: "#fff",
              boxShadow: "0 6px 24px rgba(6,199,85,0.4)",
            }}
          >
            LINEでご予約はこちら
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 pointer-events-none"
        style={{ opacity: textOpacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <span className="text-white/40 text-[9px] tracking-[0.25em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 9, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-9 bg-gradient-to-b from-white/35 to-transparent"
        />
      </motion.div>
    </section>
  )
}

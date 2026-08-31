"use client"
import { useEffect, useRef } from "react"
import ReactDOM from "react-dom"
import Link from "next/link"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { trackEvent } from "@/lib/analytics"

// LCP要素は背景動画。2.6MBのmp4のデコードを待たせず、28KBの静止画を先に描画する。
// トップページでしか使わないため、layout.tsx のheadではなくここで宣言する。
const HERO_POSTER = "/hero-poster.webp"

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
  ReactDOM.preload(HERO_POSTER, { as: "image", fetchPriority: "high" })

  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  // 「視差効果を減らす」設定時はループ再生を止め、ポスター画像のまま見せる。
  // useReducedMotion は初回レンダー時点では false を返すため、autoPlay属性ではなく
  // マウント後に明示的に停止・巻き戻しする（属性を後から変えても再生は止まらない）。
  const prefersReducedMotion = useReducedMotion()
  useEffect(() => {
    const video = videoRef.current
    if (!video || !prefersReducedMotion) return
    video.pause()
    video.currentTime = 0
  }, [prefersReducedMotion])
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
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster={HERO_POSTER}
          preload="metadata"
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
            className="text-[10px] font-semibold tracking-[0.35em] uppercase px-4 py-1.5 rounded"
            style={{ color: "#fff", border: "1px solid rgba(255,255,255,0.45)" }}
          >
            福岡市中央区六本松
          </span>
        </motion.div>

        <motion.h1
          variants={childVariants}
          className="text-3xl sm:text-4xl md:text-5xl xl:text-[3.2rem] font-bold tracking-tight text-white drop-shadow-lg leading-snug mb-5"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          六本松の鍼灸院<br />心と身体を癒す、伝統の鍼灸
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
            onClick={() => trackEvent("line_click", { location: "hero" })}
            className="inline-flex items-center justify-center px-9 py-3.5 rounded text-sm font-bold tracking-wider transition-opacity duration-300 hover:opacity-90"
            style={{ backgroundColor: "#06C755", color: "#fff" }}
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

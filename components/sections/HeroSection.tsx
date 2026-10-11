"use client"
import { useEffect, useRef } from "react"
import ReactDOM from "react-dom"
import Link from "next/link"
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from "framer-motion"
import { trackEvent } from "@/lib/analytics"

// LCP要素は背景動画。2.6MBのmp4のデコードを待たせず、28KBの静止画を先に描画する。
// トップページでしか使わないため、layout.tsx のheadではなくここで宣言する。
const HERO_POSTER = "/hero-poster.webp"

const textVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
}

const childVariants: Variants = {
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
            福岡市中央区六本松｜六本松駅 徒歩8分
          </span>
        </motion.div>

        <motion.h1
          variants={childVariants}
          className="heading-mincho text-3xl sm:text-4xl md:text-5xl xl:text-[3.2rem] text-white drop-shadow-lg leading-relaxed mb-5"
        >
          六本松の鍼灸院<br />痛みの原因から、整える
        </motion.h1>

        <motion.p
          variants={childVariants}
          className="text-white/85 max-w-[700px] md:text-lg leading-relaxed mb-6 drop-shadow"
        >
          理学療法士でもある鍼灸師が、肩こり・腰痛・自律神経の乱れ・美容のお悩みを、<br className="hidden sm:block" />
          体の使い方まで含めて評価し、鍼灸と整体で施術します。
        </motion.p>

        {/* 検索から来た人が最初に確かめる3点（資格・予約制・立地）を1行で */}
        <motion.ul
          variants={childVariants}
          className="flex flex-wrap justify-center gap-x-5 gap-y-1.5 mb-9 text-[11px] sm:text-xs tracking-wider text-white/80"
          aria-label="当院の特徴"
        >
          {["国家資格：鍼灸師・理学療法士", "完全予約制", "初回60〜70分"].map((label) => (
            <li key={label} className="flex items-center gap-1.5">
              <span className="inline-block w-1 h-1 rounded-full" style={{ backgroundColor: "var(--gold)" }} aria-hidden="true" />
              {label}
            </li>
          ))}
        </motion.ul>

        <motion.div variants={childVariants} className="flex flex-col sm:flex-row items-center gap-3">
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
          <Link
            href="/symptoms"
            className="inline-flex items-center justify-center px-9 py-3.5 rounded text-sm font-semibold tracking-wider transition-colors duration-300 hover:bg-white/15"
            style={{ color: "#fff", border: "1px solid rgba(255,255,255,0.55)" }}
            prefetch={false}
          >
            症状から探す
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

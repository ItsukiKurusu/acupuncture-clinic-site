"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { MapPin, Phone, Clock } from "lucide-react"

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export function ContactSection({ bookingUrl }: { bookingUrl: string }) {
  return (
    <section id="contact" className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <motion.div
          className="text-center space-y-4 mb-14"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <span
            className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase"
            style={{ backgroundColor: "rgba(212,175,55,0.12)", color: "#b8960a" }}
          >
            アクセス
          </span>
          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ fontFamily: "'游明朝','Yu Mincho',YuMincho,'Hiragino Mincho Pro',serif" }}
          >
            ご予約・お問い合わせ
          </h2>
          <p className="text-muted-foreground md:text-lg">お気軽にご連絡ください</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <motion.div
            className="space-y-6"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.h3
              variants={item}
              className="text-2xl font-bold"
              style={{ fontFamily: "'游明朝','Yu Mincho',YuMincho,'Hiragino Mincho Pro',serif" }}
            >
              鍼灸HANE
            </motion.h3>

            <motion.div variants={item} className="flex items-start gap-3 text-muted-foreground">
              <MapPin className="h-5 w-5 mt-0.5 shrink-0" style={{ color: "#b8960a" }} />
              <span className="text-sm leading-relaxed">
                〒810-0044<br />
                福岡県福岡市中央区六本松4丁目5-39<br />
                ピア21 401号室<br />
                <span className="text-xs opacity-70 mt-1 block">地下鉄七隈線六本松駅 徒歩8分</span>
              </span>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-3 text-muted-foreground">
              <Phone className="h-5 w-5 shrink-0" style={{ color: "#b8960a" }} />
              <span className="text-sm">090-4181-7937</span>
            </motion.div>

            <motion.div variants={item} className="flex items-start gap-3 text-muted-foreground">
              <Clock className="h-5 w-5 mt-0.5 shrink-0" style={{ color: "#b8960a" }} />
              <div className="text-sm leading-relaxed">
                <p>月〜土：10:00 – 20:00</p>
                <p>日・祝：定休日</p>
                <p className="text-xs opacity-60 mt-1">完全予約制</p>
              </div>
            </motion.div>

            <motion.div variants={item}>
              <Link
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-sm font-bold transition-all hover:scale-105"
                style={{
                  backgroundColor: "#06C755",
                  color: "#fff",
                  boxShadow: "0 4px 18px rgba(6,199,85,0.32)",
                }}
              >
                LINEで予約する
              </Link>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            className="relative h-[300px] sm:h-[420px] rounded-2xl overflow-hidden shadow-lg"
            style={{ border: "1px solid #e8e0cc" }}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26593.45708033658!2d130.3410070743164!3d33.574619999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3541937dbe2ca4c9%3A0xb845966763d97a2d!2z6Y2854G4SEFORQ!5e0!3m2!1sja!2sjp!4v1769165064198!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="鍼灸HANE 地図"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

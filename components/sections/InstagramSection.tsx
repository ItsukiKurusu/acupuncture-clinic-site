"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Instagram } from "lucide-react"

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

const selfIntroEmbed = {
  __html: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/DIu9mvwSdSZ/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote>`,
}

const stationRouteEmbed = {
  __html: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DMt3qGJydmv/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote>`,
}

export function InstagramSection({ instagramUrl }: { instagramUrl: string }) {
  return (
    <section id="instagram" className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center text-center space-y-4 mb-14"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={item}>
            <span
              className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase"
              style={{ backgroundColor: "rgba(212,175,55,0.12)", color: "#b8960a" }}
            >
              Instagram
            </span>
          </motion.div>
          <motion.h2
            variants={item}
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ fontFamily: "'游明朝','Yu Mincho',YuMincho,'Hiragino Mincho Pro',serif" }}
          >
            日々の情報はこちらから
          </motion.h2>
          <motion.p variants={item} className="max-w-xl text-muted-foreground md:text-lg">
            院内の様子や健康に関する情報などを発信しています。ぜひフォローしてください。
          </motion.p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2">
          {[
            { title: "自己紹介", embed: selfIntroEmbed, delay: 0 },
            { title: "六本松駅から院まで", embed: stationRouteEmbed, delay: 0.15 },
          ].map(({ title, embed, delay }) => (
            <motion.div
              key={title}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-60px" }}
            >
              <h3 className="text-base font-semibold mb-4 text-foreground">{title}</h3>
              <div dangerouslySetInnerHTML={embed} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-2.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #f09433 0%, #dc2743 50%, #bc1888 100%)",
            }}
          >
            <Instagram className="h-4 w-4" />
            Instagramで見る
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

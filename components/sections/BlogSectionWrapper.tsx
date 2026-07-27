"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { BlogSection } from "@/components/blog-section"
import { BlogPostMeta } from "@/lib/blog"

export function BlogSectionWrapper({ posts }: { posts: BlogPostMeta[] }) {
  return (
    <section id="blog" className="w-full py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center text-center mb-14 space-y-4"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <span
            className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase"
            style={{ backgroundColor: "rgba(212,175,55,0.12)", color: "#b8960a" }}
          >
            Blog
          </span>
          <h2
            className="text-3xl font-bold tracking-tight sm:text-5xl"
            style={{ fontFamily: "'游明朝','Yu Mincho',YuMincho,'Hiragino Mincho Pro',serif" }}
          >
            ブログ
          </h2>
          <p className="max-w-xl text-muted-foreground md:text-lg">
            健康に関する情報や院の最新情報をお届けします
          </p>
        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-60px" }}
        >
          <BlogSection posts={posts} />
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button asChild size="lg" variant="outline">
            <Link href="/blog">すべての記事を見る</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, ArrowRight } from "lucide-react"
import { BlogPostMeta } from "@/lib/blog"

interface BlogSectionProps {
  posts: BlogPostMeta[]
}

export function BlogSection({ posts }: BlogSectionProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">記事がまだありません</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post, i) => (
        <motion.div
          key={post.slug}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-40px" }}
          whileHover={{ y: -6, transition: { duration: 0.22 } }}
        >
          <Link href={`/blog/${post.slug}`} className="group block h-full">
            <div
              className="h-full bg-white rounded-2xl overflow-hidden shadow-md transition-shadow duration-300 group-hover:shadow-xl"
              style={{ border: "1px solid #e8e0cc", borderTop: "3px solid #d4af37" }}
            >
              {post.coverImage && !post.coverImage.endsWith(".mp4") && (
                <div className="relative w-full h-44 overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}

              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2.5 line-clamp-2 group-hover:text-[#b8960a] transition-colors duration-200">
                  {post.title}
                </h3>

                <p className="text-muted-foreground mb-5 line-clamp-3 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="text-xs">{post.date}</span>
                  </div>
                  <div
                    className="flex items-center gap-1 font-semibold text-xs group-hover:gap-2 transition-all duration-200"
                    style={{ color: "#b8960a" }}
                  >
                    <span>続きを読む</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}

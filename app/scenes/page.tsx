"use client";

import { motion } from "framer-motion";

const gallery = [
  {
    src: "/treatment1.jpg",
    alt: "施術風景1",
    caption: "電気治療によるアプローチ",
  },
  {
    src: "/treatment2.jpg",
    alt: "施術風景2",
    caption: "丁寧なカウンセリング",
  },
  {
    src: "/treatment3.jpg",
    alt: "施術風景3",
    caption: "施術前の確認・説明",
  },
  {
    src: "/treatment4.jpg",
    alt: "施術風景4",
    caption: "鍼施術の様子",
  },
  {
    src: "/treatment5.jpg",
    alt: "施術風景5",
    caption: "ストレッチによるケア",
  },
  {
    src: "/treatment6.jpg",
    alt: "施術風景6",
    caption: "施術中のサポート",
  },
  {
    src: "/treatment7.jpg",
    alt: "施術風景7",
    caption: "電気治療の施術",
  },
];

export default function ScenesPage() {
  return (
    <div className="bg-[#f8f5f2] min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-[60vh] bg-white">
        <motion.video
          src="/treatment-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="rounded-xl shadow-lg object-cover w-full h-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-3xl md:text-4xl font-bold text-[#bfae9e] bg-white/70 px-6 py-2 rounded-xl shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          施術風景
        </motion.h1>
      </section>

      {/* Gallery Section */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="flex gap-8 justify-center flex-wrap">
          {gallery.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl shadow-md overflow-hidden w-72 flex flex-col items-center transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-48 object-cover duration-300"
              />
              <div className="p-4 text-[#bfae9e] text-center font-medium">
                {item.caption}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

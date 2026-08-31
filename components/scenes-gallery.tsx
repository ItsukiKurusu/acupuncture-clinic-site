"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const gallery = [
  {
    src: "/treatment1.webp",
    alt: "施術風景1",
    caption: "電気治療の施術",
  },
  {
    src: "/treatment2.webp",
    alt: "施術風景2",
    caption: "背部のマッサージ",
  },
  {
    src: "/treatment3.webp",
    alt: "施術風景3",
    caption: "頸部の手技",
  },
  {
    src: "/treatment4.webp",
    alt: "施術風景4",
    caption: "鍼施術の様子",
  },
  {
    src: "/treatment5.webp",
    alt: "施術風景5",
    caption: "ストレッチによるケア",
  },
  {
    src: "/treatment6.webp",
    alt: "施術風景6",
    caption: "脚の施術",
  },
  {
    src: "/treatment7.webp",
    alt: "施術風景7",
    caption: "電気治療の施術",
  },
  {
    src: "/treatment8.webp",
    alt: "施術風景8",
    caption: "姿勢改善の指導",
  },
];

export function ScenesGallery() {
  const [preview, setPreview] = useState<null | typeof gallery[0]>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-[60vh] bg-white">
        <motion.video
          src="/treatment-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="rounded object-cover w-full h-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="heading-mincho absolute bottom-8 left-1/2 -translate-x-1/2 text-3xl md:text-4xl text-[#8a7461] bg-white/80 px-6 py-2 rounded"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          施術風景
        </motion.h1>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {gallery.map((item, idx) => (
            <motion.div
              key={idx}
              className="cursor-pointer bg-white rounded overflow-hidden w-[420px] flex flex-col items-center transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              whileHover={{ scale: 1.07 }}
              onClick={() => setPreview(item)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={420}
                height={320}
                className="w-full h-[320px] object-cover duration-300"
              />
              <div className="p-5 text-[#bfae9e] text-lg text-center font-semibold">
                {item.caption}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* プレビュー用モーダル */}
      {preview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={() => setPreview(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative"
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={preview.src}
              alt={preview.alt}
              width={1477}
              height={1108}
              className="max-w-[90vw] max-h-[80vh] w-auto h-auto rounded"
            />
            <div className="text-center text-[#bfae9e] text-xl font-semibold mt-4">{preview.caption}</div>
            <button
              className="absolute top-2 right-2 text-white bg-[#bfae9e] rounded px-3 py-1 text-lg"
              onClick={() => setPreview(null)}
            >
              ×
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
}

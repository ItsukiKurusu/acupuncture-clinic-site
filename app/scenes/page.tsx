"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Image from "next/image";

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
  alt: "施術風景7",
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

      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto w-full px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">施術風景</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                当院の施術風景や院内の様子をご紹介します。初めての方も安心してご来院いただけるよう、清潔で落ち着いた空間づくりを心がけています。
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Image
                src="/acupuncture-clinic-interior.png"
                width={600}
                height={400}
                alt="院内の様子"
                className="rounded-xl w-full h-auto object-cover"
              />
              <Image
                src="/friendly-acupuncturist-portrait.png"
                width={600}
                height={400}
                alt="施術風景1"
                className="rounded-xl w-full h-auto object-cover"
              />
              <Image
                src="/director-portrait.jpg"
                width={600}
                height={400}
                alt="施術風景2"
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

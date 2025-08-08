"use client";
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-foreground w-full" style={{ fontFamily: '"游ゴシック","MS Pゴシック","ヒラギノ角ゴ ProN",sans-serif' }}>
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto w-full px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">当院について</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                私たちの理念と、施術へのこだわりをご紹介します。
              </p>
            </div>
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="flex justify-center">
                <Image
                  src="/director-portrait.jpg"
                  width={450}
                  height={450}
                  alt="院長 羽田野 裕稀"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center w-full h-auto sm:w-full max-w-[450px]"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4 text-left lg:text-left">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-secondary text-secondary-foreground px-3 py-1 text-sm mb-2">
                    院長紹介
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter">羽田野 裕稀 (はだの ひろき)</h2>
                  <p className="font-semibold text-primary">鍼灸師 / 理学療法士</p>
                  <div className="space-y-4 text-muted-foreground md:text-lg/relaxed">
                    <p>
                      鍼灸師としてだけでなく、理学療法士として病院やクリニックで「運動・筋肉・骨格」に関する知識と技術を培ってきました。
                    </p>
                    <p>
                      鍼が苦手な方には、手技や運動療法を中心とした施術もご提案しています。お一人おひとりの状態やお悩みに合わせて、無理のない、心地よい施術を大切にしています。
                    </p>
                    <p>はじめての方も、どうぞ安心してご相談ください。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

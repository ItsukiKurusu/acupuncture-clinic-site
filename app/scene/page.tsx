"use client";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function ScenePage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-foreground w-full" style={{ fontFamily: '"游ゴシック","MS Pゴシック","ヒラギノ角ゴ ProN",sans-serif' }}>
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto w-full px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">施術風景</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                当院で行われている施術の様子をご紹介します。
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center">
                <Image src="/scene1.jpg" alt="パーソナルトレーニングの様子" width={800} height={600} className="rounded-xl shadow-lg w-full h-auto object-cover" />
                <p className="mt-2 text-muted-foreground text-sm">パーソナルトレーニングの様子</p>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/scene2.jpg" alt="鍼施術の様子" width={800} height={600} className="rounded-xl shadow-lg w-full h-auto object-cover" />
                <p className="mt-2 text-muted-foreground text-sm">鍼施術の様子</p>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/scene3.jpg" alt="手技療法の様子" width={800} height={600} className="rounded-xl shadow-lg w-full h-auto object-cover" />
                <p className="mt-2 text-muted-foreground text-sm">手技療法の様子</p>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/scene4.jpg" alt="首まわりのケア" width={800} height={600} className="rounded-xl shadow-lg w-full h-auto object-cover" />
                <p className="mt-2 text-muted-foreground text-sm">首まわりのケア</p>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/scene5.jpg" alt="膝・下肢のトレーニング" width={800} height={600} className="rounded-xl shadow-lg w-full h-auto object-cover" />
                <p className="mt-2 text-muted-foreground text-sm">膝・下肢のトレーニング</p>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/scene6.jpg" alt="下肢のケアの様子" width={800} height={600} className="rounded-xl shadow-lg w-full h-auto object-cover" />
                <p className="mt-2 text-muted-foreground text-sm">下肢のケアの様子</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

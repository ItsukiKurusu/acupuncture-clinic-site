"use client";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function ScenesPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-foreground w-full" style={{ fontFamily: '"游ゴシック","MS Pゴシック","ヒラギノ角ゴ ProN",sans-serif' }}>
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

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left-10 duration-1000">
            <div className="inline-block px-4 py-1.5 bg-[#e6f3f7] text-[#333] text-xs font-bold tracking-wider uppercase rounded-full mb-4">
              Next Generation Bio-Field Treatment (BFT)
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight text-[#333]">
              MATRIX <br />
              <span className="text-[#d4af37]">WAVE</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
              業界唯一！
              <br />
              直流電流でトレーニング & <br />
              炎症抑制効果
            </p>

            <div className="pt-4">
              <Button size="lg" className="bg-[#333] hover:bg-black text-white rounded-full px-8 h-14 text-lg">
                詳しく見る
              </Button>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden bg-gray-100 animate-in fade-in slide-in-from-right-10 duration-1000 delay-200">
            <Image
              src="/new-high-end-beauty-machine-aesthetic-salon-clean-whit.jpg"
              alt="Matrix Wave Plus Machine"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-[#f8f9fa] rounded-l-[100px] hidden md:block" />
    </section>
  )
}

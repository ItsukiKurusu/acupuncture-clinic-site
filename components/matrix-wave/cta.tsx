import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="py-32 bg-[#333] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('/new-repeating-geometric-pattern.png')] bg-repeat" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-medium mb-8 leading-tight">
          深部から緩む
          <br />
          新感覚を体験してください
        </h2>

        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          初回限定の特別体験コースをご用意しております。
          <br />
          まずは一度、その効果をご自身のお肌と体で実感してください。
        </p>

        <Button className="bg-[#d4af37] hover:bg-[#b5952f] text-white rounded-full px-12 h-16 text-xl shadow-lg shadow-[#d4af37]/20">
          Online Reservation
        </Button>
      </div>
    </section>
  )
}

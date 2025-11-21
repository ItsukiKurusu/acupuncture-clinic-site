import Image from "next/image"

export function Mechanism() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/medical-aesthetic-technology-science-visualization.jpg"
              alt="Mechanism Visualization"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#333]">Non-contact Ion Technology</h2>
            <p className="text-lg text-gray-600">
              特許技術を用いた「非接触イオン導入」により、
              <br />
              皮膚を傷つけることなく、有効成分を深部まで届けます。
            </p>

            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#e6f3f7] flex items-center justify-center shrink-0 text-[#333] font-serif font-bold">
                  01
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">HEAD Care</h3>
                  <p className="text-gray-500 text-sm">頭皮の血行促進、眼精疲労の緩和、リフトアップ効果。</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#e6f3f7] flex items-center justify-center shrink-0 text-[#333] font-serif font-bold">
                  02
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">FACE Care</h3>
                  <p className="text-gray-500 text-sm">表情筋のコリをほぐし、ターンオーバーを正常化。</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#e6f3f7] flex items-center justify-center shrink-0 text-[#333] font-serif font-bold">
                  03
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">BODY Care</h3>
                  <p className="text-gray-500 text-sm">全身の生体電流を整え、自律神経のバランスを調整。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

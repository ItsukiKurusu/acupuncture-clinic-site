import { Sparkles, Activity, Zap, Scale } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "美肌・小顔",
    description: "シミ、シワ、たるみ、むくみの改善に。細胞の活性化により、肌本来の透明感とハリを取り戻します。",
  },
  {
    icon: Activity,
    title: "痛み改善",
    description: "肩こり、腰痛、関節痛など、慢性的な痛みにアプローチ。オリンピック選手も愛用する実力派。",
  },
  {
    icon: Zap,
    title: "筋膜リリース",
    description: "癒着した筋膜を電気の力で優しくリリース。物理的な負担をかけずに、全身の可動域を広げます。",
  },
  {
    icon: Scale,
    title: "ダイエット",
    description: "内臓脂肪の燃焼を促進し、代謝をアップ。細胞レベルでのリセットで、痩せやすい体質へ。",
  },
]

export function Features() {
  return (
    <section id="course" className="py-24 bg-[#f8f9fa]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#333] mb-4">Features</h2>
          <p className="text-gray-500">MATRIX WAVE Plusが選ばれる4つの理由</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 group"
            >
              <div className="w-14 h-14 bg-[#f8f9fa] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#d4af37] transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-[#d4af37] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-4 text-[#333]">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

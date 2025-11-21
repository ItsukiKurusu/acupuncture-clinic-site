import { Header } from "@/components/header"
import { Hero } from "@/components/matrix-wave/hero"
import { Concept } from "@/components/matrix-wave/concept"
import { Features } from "@/components/matrix-wave/features"
import { Mechanism } from "@/components/matrix-wave/mechanism"
import { CTA } from "@/components/matrix-wave/cta"
import { MatrixWaveFooter } from "@/components/matrix-wave/footer"

export default function MatrixWavePage() {
  return (
    <main className="min-h-screen bg-white text-[#333333]">
      <Header />
      <Hero />
      <Concept />
      <Features />
      <Mechanism />
      <CTA />
      <MatrixWaveFooter />
    </main>
  )
}

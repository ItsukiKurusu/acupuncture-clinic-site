import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import BreadcrumbStructuredData from "@/components/breadcrumb-structured-data"
import { IrukaArchive } from "@/components/iruka-archive"

export default function IrukaPage() {
  return (
    <div
      className="flex flex-col min-h-[100dvh] bg-background text-foreground w-full"
      style={{ fontFamily: '"游ゴシック","MS Pゴシック","ヒラギノ角ゴ ProN",sans-serif' }}
    >
      <BreadcrumbStructuredData items={[{ name: 'ホーム', path: '/' }, { name: 'いるか新聞' }]} />
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">

            {/* ページタイトル */}
            <div className="flex flex-col items-center text-center space-y-3 mb-12">
              <p
                className="text-xs font-semibold tracking-[0.2em] uppercase"
                style={{ color: "#a8926a" }}
              >
                Iruka Newspaper
              </p>
              <h1
                className="text-3xl font-bold md:text-4xl"
                style={{
                  fontFamily: "'游明朝','Yu Mincho',YuMincho,'Hiragino Mincho Pro',serif",
                  color: "#1c1917",
                }}
              >
                いるか新聞
              </h1>
              <p className="text-sm md:text-base" style={{ color: "#78716c" }}>
                六本松いきいきコラム アーカイブ
              </p>
              <div className="w-12 h-px mt-2" style={{ backgroundColor: "#d4af37" }} />
              <p className="max-w-lg text-sm md:text-base leading-relaxed" style={{ color: "#78716c" }}>
                地域情報誌「いるか」に掲載している、鍼灸HANEのセルフケアコラムです。
                毎月、日常で役立つ健康情報をお届けしています。
              </p>
            </div>

            <IrukaArchive />

          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

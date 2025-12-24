"use client";
import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Leaf, Sparkles, MapPin, Phone, Mail, Stethoscope, Star, Instagram } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogSection } from "@/components/blog-section"
import StructuredData from "@/components/structured-data";
import ReviewStructuredData from "@/components/review-structured-data";
import FAQStructuredData from "@/components/faq-structured-data";
import { BlogPostMeta } from "@/lib/blog";

interface AcupunctureClinicClientProps {
  recentPosts: BlogPostMeta[]
}

export default function AcupunctureClinicClient({ recentPosts }: AcupunctureClinicClientProps) {
  const bookingUrl = "https://line.me/R/ti/p/@241gbrkw"
  const reviewsUrl = "https://www.shinq-compass.jp/salon/review/37835"

  const selfIntroEmbed = {
    __html: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/DIu9mvwSdSZ/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote>`,
  }

  const stationRouteEmbed = {
    __html: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DMt3qGJydmv/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote>`,
  }

  const videoRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const instagramRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Hero video fade-in
    if (videoRef.current) {
      gsap.fromTo(
        videoRef.current,
        { opacity: 1, y: 0, scale: 1 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: videoRef.current,
            start: "top top",
            toggleActions: "play none none none",
          },
        }
      );
    }
    // Hero white fade overlay and text fade out on about overlap (fade to full white)
    const whiteFade = document.getElementById("hero-white-fade");
    if (whiteFade && aboutRef.current && heroTextRef.current) {
      const scrollText = document.getElementById("scroll-cue");
      gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 100%",
          end: "top 20%",
          scrub: true,
          onUpdate: self => {
            // Show/hide scroll cue based on overlay opacity
            if (scrollText) {
              scrollText.style.opacity = self.progress < 0.01 ? "1" : (self.progress > 0.99 ? "0" : "1");
              scrollText.style.pointerEvents = self.progress < 0.99 ? "auto" : "none";
            }
            // When scrolling back up, restore text opacity
            if (self.progress === 0 && heroTextRef.current) {
              heroTextRef.current.style.opacity = "1";
            }
          },
        },
      })
        .to(whiteFade, { opacity: 1, ease: "power1.out" }, 0)
        .to(heroTextRef.current, { opacity: 0, ease: "power1.out" }, 0);
    }
    // Hero text - show immediately
    if (heroTextRef.current) {
      gsap.fromTo(
        heroTextRef.current,
        { opacity: 1, y: 0 },
        {
          opacity: 1,
          y: 0,
          duration: 0.1,
          ease: "power3.out",
        }
      );
    }
    // About section
    if (aboutRef.current) {
      gsap.fromTo(
        aboutRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    // Services section
    if (servicesRef.current) {
      gsap.fromTo(
        servicesRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    // Testimonials section
    if (testimonialsRef.current) {
      gsap.fromTo(
        testimonialsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    // Instagram section
    if (instagramRef.current) {
      gsap.fromTo(
        instagramRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: instagramRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    // FAQ section
    if (faqRef.current) {
      gsap.fromTo(
        faqRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: faqRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    // Contact section
    if (contactRef.current) {
      gsap.fromTo(
        contactRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData />
      <ReviewStructuredData />
      <FAQStructuredData />
      <Header />
      <main className="flex-1">
        {/* Hero Section with Video */}
        <section className="relative w-full h-screen overflow-hidden">
          {/* Background video */}
          <div ref={videoRef} className="absolute inset-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>
          </div>
          {/* White fade-to-full overlay, controlled by scroll */}
          <div
            id="hero-white-fade"
            className="absolute inset-0 bg-white pointer-events-none"
            style={{ opacity: 0 }}
          />
          {/* Hero content */}
          <div ref={heroTextRef} className="relative z-10 flex h-full w-full items-center justify-center text-center px-4 md:px-6">
            <div className="space-y-4">
              <h1
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white"
                style={{
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                  fontFamily: "'游明朝','Yu Mincho',YuMincho,'Hiragino Mincho Pro',serif"
                }}
              >
                心と体を整える
                <br />
                本格鍼灸治療
              </h1>
              <p
                className="mx-auto max-w-[700px] text-white md:text-xl"
                style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
              >
                伝統的な東洋医学の知恵と最新の技術で<br />あなたの健康をサポートします
              </p>
              <div className="space-x-4">
                <Button asChild size="lg">
                  <Link href={bookingUrl} target="_blank" rel="noopener noreferrer">
                    ご予約はこちら
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          {/* Scroll indicator */}
          <div id="scroll-cue" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <div className="flex flex-col items-center gap-2 text-white animate-bounce" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
              <span className="text-sm">Scroll</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div ref={aboutRef} className="container mx-auto w-full px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                    当院について
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    一人ひとりに寄り添った<br />丁寧な治療
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    当院では、患者様一人ひとりの症状や体質に合わせたオーダーメイドの治療を行っています。豊富な経験と確かな技術で、皆様の健康をサポートいたします。
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-primary" />
                    <span>国家資格を持つ鍼灸師による施術</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <span>清潔で落ち着いた院内環境</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Stethoscope className="h-5 w-5 text-primary" />
                    <span>豊富な施術メニュー</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button asChild>
                    <Link href="/about">当院について</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href={bookingUrl} target="_blank" rel="noopener noreferrer">
                      ご予約・お問い合わせ
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] lg:h-full w-full overflow-hidden rounded-xl">
                <Image
                  src="/hero.jpg"
                  alt="院内の様子"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div ref={servicesRef} className="container mx-auto w-full grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                施術内容
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                多彩な施術メニュー
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                様々なお悩みに対応できるよう、幅広い施術メニューをご用意しております。
              </p>
            </div>
            <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 max-w-6xl mx-auto">
              <Card className="shadow-xl">
                <CardHeader className="flex flex-col items-center text-center">
                  <div className="p-4 bg-primary/10 rounded-full mb-4">
                    <Leaf className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">鍼灸治療</h3>
                  <div className="text-base font-medium mt-2">初回　¥5,000</div>
                  <div className="text-base font-medium">2回目以降　¥4,000</div>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                  <p>肩こり、腰痛、頭痛などの痛みから、自律神経の乱れまで幅広く対応いたします。</p>
                </CardContent>
              </Card>
              <Card className="shadow-xl">
                <CardHeader className="flex flex-col items-center text-center">
                  <div className="p-4 bg-primary/10 rounded-full mb-4">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">美容鍼</h3>
                  <div className="text-base font-medium mt-2">初回　¥7,000</div>
                  <div className="text-base font-medium">2回目以降　¥6,000</div>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                  <p>顔のたるみやしわ、くすみなど、美容面でのお悩みにアプローチします。</p>
                </CardContent>
              </Card>
              <Card className="shadow-xl">
                <CardHeader className="flex flex-col items-center text-center">
                  <div className="p-4 bg-primary/10 rounded-full mb-4">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">トレーニング</h3>
                  <div className="text-base font-medium mt-2">EMS×パーソナル　¥8,000</div>
                  <div className="text-base font-medium">EMSトレーニング　¥3,000</div>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                  <p>直流電気を用いたEMSトレーニングとパーソナルトレーニングを組み合わせたオーダーメイドのプログラムです。</p>
                </CardContent>
              </Card>
              {/* 眼精疲労カード追加 */}
              <Card className="shadow-xl">
                <CardHeader className="flex flex-col items-center text-center">
                  <div className="p-4 bg-primary/10 rounded-full mb-4">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">眼精疲労</h3>
                  <div className="text-base font-medium mt-2">1回　¥2,000</div>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                  <p>パソコンやスマホによる目の疲れ・かすみ、<br />頭痛や肩こりの原因となる眼精疲労にアプローチします。</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Banner Section */}
        <section className="w-full py-8 md:py-12 bg-background">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="flex flex-col gap-6 max-w-5xl mx-auto">
              <Link
                href="https://www.shinq-compass.jp/salon/reserve/37835"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-transform hover:scale-[1.02] duration-300"
              >
                <Image
                  src="/campaign-banner.png"
                  width={1920}
                  height={600}
                  alt="キャンペーン"
                  className="w-full h-auto shadow-xl"
                  quality={100}
                  priority
                  unoptimized
                />
              </Link>
              <Link
                href="https://line.me/R/ti/p/@241gbrkw"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-transform hover:scale-[1.02] duration-300"
              >
                <Image
                  src="/line-banner.png"
                  width={1920}
                  height={600}
                  alt="LINE追加バナー"
                  className="w-full h-auto shadow-xl"
                  quality={100}
                  priority
                  unoptimized
                />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div ref={testimonialsRef} className="container mx-auto w-full grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">お客様の声</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                当院をご利用いただいたお客様からの喜びの声をご紹介します。
              </p>
            </div>
            <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-8 pt-8 max-w-4xl mx-auto">
              <Card className="shadow-xl">
                <CardContent className="p-6 text-left">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center gap-0.5 text-primary">
                      <Star className="w-5 h-5 fill-primary" />
                      <Star className="w-5 h-5 fill-primary" />
                      <Star className="w-5 h-5 fill-primary" />
                      <Star className="w-5 h-5 fill-primary" />
                      <Star className="w-5 h-5 fill-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">美容鍼の体験をしました。</h3>
                  <p className="text-muted-foreground mb-4">
                    痛みも少なく、終わったあとはおでこから頭のあたりがスッキリ感じました。口角が上がったり、ほうれい線も薄くなったように思えました。1回試しただけでも効果があったと思います★また定期的に通いたいと思います！ありがとうございました(｡・‧̫・｡)v
                  </p>
                  <p className="font-semibold text-right">かおる様 (女性)</p>
                </CardContent>
              </Card>
              <Card className="shadow-xl">
                <CardContent className="p-6 text-left">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center gap-0.5 text-primary">
                      <Star className="w-5 h-5 fill-primary" />
                      <Star className="w-5 h-5 fill-primary" />
                      <Star className="w-5 h-5 fill-primary" />
                      <Star className="w-5 h-5 fill-primary" />
                      <Star className="w-5 h-5 fill-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">全身の不調が改善されました。</h3>
                  <p className="text-muted-foreground mb-4">
                    ほぼ全身が不調で、かかりつけの先生に相談したら羽多野先生をご紹介いただき本日初めて伺いました。細かい症状まで聞いてくださり、その原因や症状の改善の仕方をとても丁寧に説明してくださいました。本日は首への鍼の施術もありましたが、施術後は動きも軽く可動域も広がりました。今後は週1回でお世話になろうと思ってます。
                  </p>
                  <p className="font-semibold text-right">butabarakarubi様 (女性)</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8">
              <Button asChild>
                <Link href={reviewsUrl} target="_blank" rel="noopener noreferrer">
                  「しんきゅうコンパス」で他の口コミを見る
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto w-full px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 text-primary px-3 py-1 text-sm font-semibold">
                  Blog
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">ブログ</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  健康に関する情報や院の最新情報をお届けします
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-6xl">
              <BlogSection posts={recentPosts} />
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link href="/blog">すべての記事を見る</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Instagram Section */}
        <section id="instagram" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div ref={instagramRef} className="container mx-auto w-full px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary text-secondary-foreground px-3 py-1 text-sm">
                  Instagram
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">日々の情報はこちらから</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  院内の様子や健康に関する情報などを発信しています。ぜひフォローしてください。
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 mt-12">
              <div className="flex flex-col items-center">
                <h3 className="text-lg font-semibold mb-4">自己紹介</h3>
                <div dangerouslySetInnerHTML={selfIntroEmbed} />
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-lg font-semibold mb-4">六本松駅から院まで</h3>
                <div dangerouslySetInnerHTML={stationRouteEmbed} />
              </div>
            </div>
            <div className="text-center mt-12">
              <Link
                href="https://www.instagram.com/shinkyu.hane?utm_source=ig_web_button_share_sheet&igsh=MTZvODR2N3RjNm4yYQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] text-white hover:opacity-90"
              >
                <Instagram className="mr-2 h-4 w-4" />
                Instagramで見る
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div ref={faqRef} className="container mx-auto w-full px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-8">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                よくある質問
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">FAQ</h2>
              <p className="mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                患者様からよくいただく質問をまとめました。
              </p>
            </div>
            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>予約は必要ですか？</AccordionTrigger>
                  <AccordionContent>
                    はい、当院は完全予約制となっております。LINEまたはお電話にてご予約をお願いいたします。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>初めてでも大丈夫ですか？</AccordionTrigger>
                  <AccordionContent>
                    もちろん大丈夫です。初回はカウンセリングを行い、お体の状態を詳しくお伺いしてから施術いたします。不安なことがあればお気軽にご相談ください。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>どのくらいの頻度で通えばよいですか？</AccordionTrigger>
                  <AccordionContent>
                    症状の程度や種類によって異なりますが、初めは週1回程度、症状が改善してきたら2週間に1回程度をおすすめしています。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>鍼は痛くないですか？</AccordionTrigger>
                  <AccordionContent>
                    当院では髪の毛ほどの細さの鍼を使用しており、痛みはほとんどありません。個人差はありますが、多くの患者様が「思ったより痛くない」とおっしゃいます。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>保険は使えますか？</AccordionTrigger>
                  <AccordionContent>
                    申し訳ございませんが、当院では保険診療は行っておりません。自費診療のみとなります。
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div ref={contactRef} className="container mx-auto w-full px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  アクセス
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">ご予約・お問い合わせ</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  お気軽にご連絡ください
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">鍼灸HANE</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      <span>〒810-0044<br />福岡県福岡市中央区六本松2丁目12-8 チサンマンション六本松203</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-5 w-5 flex-shrink-0" />
                      <span>092-791-5846</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-5 w-5 flex-shrink-0" />
                      <span>info@acupuncture-hane.jp</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">営業時間</h4>
                  <p className="text-muted-foreground">
                    月〜土: 9:00 - 20:00<br />
                    日・祝: 定休日
                  </p>
                </div>
                <Button asChild className="w-full sm:w-auto">
                  <Link href={bookingUrl} target="_blank" rel="noopener noreferrer">
                    LINEで予約する
                  </Link>
                </Button>
              </div>
              <div className="relative h-[300px] sm:h-full min-h-[400px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.5234567890123!2d130.39012341521234!3d33.58912348073456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM1JzIwLjgiTiAxMzDCsDIzJzI1LjIiRQ!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="鍼灸HANE 地図"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
    </div>
  );
}

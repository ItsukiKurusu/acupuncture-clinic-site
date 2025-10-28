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
import StructuredData from "@/components/structured-data";
import ReviewStructuredData from "@/components/review-structured-data";
import FAQStructuredData from "@/components/faq-structured-data";

export default function AcupunctureClinicPage() {
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
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power2.out",
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
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power2.out",
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
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power2.out",
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
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power2.out",
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
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power2.out",
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
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power2.out",
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
  <>
    <StructuredData />
    <ReviewStructuredData />
    <FAQStructuredData />
    <div className="flex flex-col min-h-[100dvh] bg-background text-foreground w-full" style={{ fontFamily: '"游ゴシック","MS Pゴシック","ヒラギノ角ゴ ProN",sans-serif' }}>
        {/* Initial Scroll cue overlay - removed to fix white screen issue */}
        <Header />
        <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full pt-0 md:pt-0 lg:pt-0 relative">
          {/* Hero video full viewport height, next section overlaps on scroll */}
          <div ref={videoRef} className="w-full h-screen overflow-hidden absolute top-0 left-0 z-0" style={{ opacity: 1 }}>
            <video
              width="1920"
              height="1080"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-center block"
              style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}
            >
              <source src="/hero.mp4" type="video/mp4" />
              お使いのブラウザはビデオタグをサポートしていません。
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20 pointer-events-none" />
            {/* White fade overlay for hero video (fade to full white) */}
            <div id="hero-white-fade" className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center" style={{ background: "white", opacity: 0, transition: "opacity 0.3s" }}>
              {/* (Scroll cue removed from overlay) */}
            </div>
            <div ref={heroTextRef} className="absolute inset-0 flex flex-col justify-center items-center text-center space-y-4 w-full z-10" style={{ opacity: 1 }}>
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-white drop-shadow-lg">
                心と身体を癒す、<br />伝統の鍼灸治療
              </h1>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-xl drop-shadow">
                お一人おひとりの症状に合わせたオーダーメイドの施術で、自然治癒力を高め、健やかな毎日をサポートします。
              </p>
              <div className="space-x-4">
                <Button asChild size="lg" className="shadow-xl">
                  <Link
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-6 py-3 md:px-8 md:py-4 font-bold animate-pulse transition-all duration-200 bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] text-white hover:opacity-90 hover:-translate-y-1 hover:shadow-xl"
                  >
                    ご予約はこちら
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          {/* Spacer to create space for the fixed video */}
          <div className="h-screen"></div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div ref={aboutRef} className="container mx-auto w-full px-4 md:px-6 relative z-10">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex justify-center">
                <Image
                  src="director-portrait1.jpg"
                  width={550}
                  height={680}
                  alt="院長 羽田野 裕稀"
                  className="mx-auto aspect-[4/5] overflow-hidden rounded-xl object-cover object-top w-full h-auto sm:w-full max-w-[550px] shadow-xl"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-secondary text-secondary-foreground px-3 py-1 text-sm mb-2">
                    当院について
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter">羽田野 裕稀 (はだの ひろき)</h2>
                  <p className="font-semibold text-primary">鍼灸師 / 理学療法士</p>
                  <div className="space-y-4 text-muted-foreground md:text-lg/relaxed">
                    <p>
                      鍼灸師としてだけでなく、理学療法士として病院やクリニックで「運動・筋肉・骨格」に関する知識と技術を培ってきました。
                    </p>
                    <p>
                      鍼灸HANEでは、東洋医学の知恵と現代的なアプローチを融合させ、患者様一人ひとりの心と身体のバランスを整えることを目指しています。丁寧なカウンセリングを通じて、不調の根本原因を探り、最適な治療プランをご提案します。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div ref={servicesRef} className="container mx-auto w-full px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary text-secondary-foreground px-3 py-1 text-sm">
                  施術内容
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl whitespace-nowrap text-balance">お悩みに合わせた多様な施術</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  肩こりや腰痛などの慢性的な痛みから、自律神経の乱れ、美容のお悩みまで幅広く対応いたします。
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-4 lg:max-w-none mt-12">
              <Card className="shadow-xl">
                <CardHeader className="flex flex-col items-center text-center">
                  <div className="p-4 bg-primary/10 rounded-full mb-4">
                    <Stethoscope className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">施術</h3>
                  <div className="text-base font-medium mt-2">全身　¥6,000</div>
                  <div className="text-base font-medium">局所　¥4,000</div>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                  <p>慢性的な肩こり・腰痛や身体のだるさ、取りにくい疲れや痛みに対して体質改善を促します。</p>
                </CardContent>
              </Card>
              <Card className="shadow-xl">
                <CardHeader className="flex flex-col items-center text-center">
                  <div className="p-4 bg-primary/10 rounded-full mb-4">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">美容鍼</h3>
                  <div className="text-base font-medium mt-2">初回お試し　¥5,000</div>
                  <div className="text-base font-medium">2回目以降　¥8,000</div>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                  <p>お顔のツボを刺激し、血行を促進。リフトアップ、しわ・たるみの改善、肌質の向上を目指します。</p>
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

        {/* Instagram Section */}
        <section id="instagram" className="w-full py-12 md:py-24 lg:py-32">
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
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">よくあるご質問</h2>
              <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
                鍼灸治療に関するよくある質問にお答えします。
              </p>
            </div>
            <div className="mx-auto max-w-3xl mt-8">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg">鍼は痛いですか？</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    当院で使用する鍼は、髪の毛ほどの非常に細いものですので、ほとんど痛みを感じることはありません。チクッとした軽い刺激を感じる程度です。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg">どのくらいの頻度で通えば良いですか？</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    症状や体質によって異なりますが、初めは週に1〜2回のペースで通っていただき、症状が改善するにつれて間隔を空けていくのが一般的です。カウンセリング時に最適なプランをご提案します。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg">健康保険は使えますか？</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    特定の疾患（神経痛、リウマチ、五十肩、腰痛症など）については、医師の同意書があれば健康保険が適用される場合があります。詳しくはお問い合わせください。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg">着替えは必要ですか？</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    施術内容に応じて、こちらで患者着をご用意しておりますので、普段着のままお越しいただいて大丈夫です。
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div ref={contactRef} className="container mx-auto w-full grid items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">ご予約・お問い合わせ</h2>
              <p className="text-muted-foreground">
                お電話またはオンライン予約フォームにてご予約を承っております。
                <br />
                ご不明な点など、お気軽にお問い合わせください。
              </p>
              {/* 鍼灸コンパス 相互リンクバナー */}
              <div className="mt-6 flex justify-center">
                <a href="https://www.shinq-compass.jp/salon/detail/37835/" target="_blank" rel="noopener noreferrer">
                  <img src="https://www.shinq-compass.jp/common/img/bnr/link/bnr180_150.jpg" alt="鍼灸院・美容鍼サロンの口コミ・予約サイト | しんきゅうコンパス" />
                </a>
              </div>
              <div className="space-y-4 mt-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">お電話でのご予約</h3>
                    <p className="text-2xl font-bold text-primary">090-4181-7937</p>
                    <p className="text-sm text-muted-foreground">受付時間: 10:00 - 20:00 (日・祝日を除く)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">アクセス</h3>
                    <p className="text-muted-foreground">〒810-0044 福岡県福岡市中央区六本松4丁目5-39 ピア21 401号室</p>
                    <p className="text-sm text-muted-foreground">地下鉄七隈線六本松駅 徒歩8分</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">オンライン予約</h3>
                    <p className="text-muted-foreground">24時間受付可能なオンライン予約もご利用いただけます。</p>
                    <Button asChild className="shadow-xl">
                      <Link
                        href="https://www.shinq-compass.jp/salon/reserve/37835"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-6 py-3 md:px-8 md:py-4 font-bold animate-pulse transition-all duration-200 bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] text-white hover:opacity-90 hover:-translate-y-1 hover:shadow-xl"
                      >
                        オンラインで予約する
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-64 md:h-full rounded-lg overflow-hidden flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4437.25499778088!2d130.37531134980813!3d33.57453767350731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3541937dbe2ca4c9%3A0xb845966763d97a2d!2z6Y2854G4SEFORQ!5e0!3m2!1sja!2sjp!4v1754456205934!5m2!1sja!2sjp"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Script src="//www.instagram.com/embed.js" async />
    </div>
  </>
  )
}

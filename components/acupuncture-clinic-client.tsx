"use client"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { SymptomsSection } from "@/components/sections/SymptomsSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { FirstVisitSection } from "@/components/sections/FirstVisitSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { IrukaSection } from "@/components/sections/IrukaSection"
import { BannerSection } from "@/components/sections/BannerSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { BlogSectionWrapper } from "@/components/sections/BlogSectionWrapper"
import { InstagramSection } from "@/components/sections/InstagramSection"
import { FaqSection } from "@/components/sections/FaqSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { BlogPostMeta } from "@/lib/blog"
import { BOOKING_URL } from "@/lib/site-config"

const REVIEWS_URL = "https://www.shinq-compass.jp/salon/review/37835"
const INSTAGRAM_URL =
  "https://www.instagram.com/shinkyu.hane?utm_source=ig_web_button_share_sheet&igsh=MTZvODR2N3RjNm4yYQ=="

interface AcupunctureClinicClientProps {
  recentPosts: BlogPostMeta[]
}

export default function AcupunctureClinicClient({ recentPosts }: AcupunctureClinicClientProps) {
  return (
    <>
      <div className="flex flex-col min-h-[100dvh] bg-background text-foreground w-full">
        <Header variant="overlay" />
        <main className="flex-1">
          {/* 検索意図の順に並べる：症状 → 誰が施術するか → 初回の流れ → 料金 → 評判 → 読み物 */}
          <HeroSection bookingUrl={BOOKING_URL} />
          <SymptomsSection />
          <AboutSection bookingUrl={BOOKING_URL} />
          <FirstVisitSection />
          <ServicesSection />
          <BannerSection />
          <TestimonialsSection reviewsUrl={REVIEWS_URL} />
          <BlogSectionWrapper posts={recentPosts} />
          <IrukaSection />
          <InstagramSection instagramUrl={INSTAGRAM_URL} />
          <FaqSection />
          <ContactSection bookingUrl={BOOKING_URL} />
        </main>
        <Footer />
        <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
      </div>
    </>
  )
}

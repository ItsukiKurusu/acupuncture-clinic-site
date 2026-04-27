"use client"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { IrukaSection } from "@/components/sections/IrukaSection"
import { BannerSection } from "@/components/sections/BannerSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { BlogSectionWrapper } from "@/components/sections/BlogSectionWrapper"
import { InstagramSection } from "@/components/sections/InstagramSection"
import { FaqSection } from "@/components/sections/FaqSection"
import { ContactSection } from "@/components/sections/ContactSection"
import StructuredData from "@/components/structured-data"
import ReviewStructuredData from "@/components/review-structured-data"
import FAQStructuredData from "@/components/faq-structured-data"
import { BlogPostMeta } from "@/lib/blog"

const BOOKING_URL = "https://line.me/R/ti/p/@241gbrkw"
const REVIEWS_URL = "https://www.shinq-compass.jp/salon/review/37835"
const INSTAGRAM_URL =
  "https://www.instagram.com/shinkyu.hane?utm_source=ig_web_button_share_sheet&igsh=MTZvODR2N3RjNm4yYQ=="

interface AcupunctureClinicClientProps {
  recentPosts: BlogPostMeta[]
}

export default function AcupunctureClinicClient({ recentPosts }: AcupunctureClinicClientProps) {
  return (
    <>
      <StructuredData />
      <ReviewStructuredData />
      <FAQStructuredData />
      <div className="flex flex-col min-h-[100dvh] bg-background text-foreground w-full">
        <Header />
        <main className="flex-1">
          <HeroSection bookingUrl={BOOKING_URL} />
          <AboutSection bookingUrl={BOOKING_URL} />
          <IrukaSection />
          <ServicesSection />
          <BannerSection />
          <TestimonialsSection reviewsUrl={REVIEWS_URL} />
          <BlogSectionWrapper posts={recentPosts} />
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

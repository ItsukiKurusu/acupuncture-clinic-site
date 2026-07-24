'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import ServicesStructuredData from "@/components/services-structured-data";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { services, serviceCategories as categories } from "@/lib/services-data";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animation
      gsap.fromTo(heroRef.current, 
        { 
          opacity: 0, 
          y: 50 
        },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2, 
          ease: "power2.out" 
        }
      );

      // Cards animation
      gsap.fromTo(".service-card", 
        { 
          opacity: 0, 
          y: 60 
        },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Category headers animation
      gsap.fromTo(".category-header", 
        { 
          opacity: 0, 
          x: -30 
        },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.6, 
          stagger: 0.2, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const getServicesByCategory = (category: string) => {
    return services.filter(service => service.category === category);
  };

  return (
    <>
      <ServicesStructuredData />
      <div className="flex flex-col min-h-[100dvh] bg-background text-foreground" style={{ fontFamily: '"游ゴシック","MS Pゴシック","ヒラギノ角ゴ ProN",sans-serif' }}>
        <Header />
        <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-green-50 pt-20 pb-16">
        <div className="container mx-auto px-4 text-center" ref={heroRef}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            施術内容・料金
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            お一人お一人の症状や目的に合わせた、多彩な施術メニューをご用意しております。<br />
            どの施術も、経験豊富な理学療法士が丁寧に対応いたします。
          </p>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4" ref={cardsRef}>
          {categories.map((category, categoryIndex) => (
            <div key={category} className="mb-12">
              <h2 className="category-header text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
                {category}
              </h2>
              
              <div className="grid gap-6 md:gap-8 max-w-4xl mx-auto">
                {getServicesByCategory(category).map((service, index) => (
                  <Card key={`${category}-${index}`} className="service-card hover:shadow-xl transition-all duration-300 border-l-4 border-l-black">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                              {service.name}
                            </h3>
                            {service.isPopular && (
                              <Badge variant="secondary" className="bg-gray-100 text-gray-800 hover:bg-gray-200">
                                人気
                              </Badge>
                            )}
                          </div>
                          {service.description && (
                            <p className="text-gray-600 leading-relaxed">
                              {service.description}
                            </p>
                          )}
                        </div>
                        
                        <Separator orientation="vertical" className="hidden md:block h-16 mx-4" />
                        
                        <div className="text-right md:min-w-[200px]">
                          <div className="text-2xl md:text-3xl font-bold text-gray-800">
                            {service.price}
                          </div>
                          <div className="text-sm text-gray-500 mt-1">
                            （税込）
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {categoryIndex < categories.length - 1 && (
                <Separator className="mt-12 max-w-2xl mx-auto" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-800 to-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ご予約・お問い合わせ
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            症状やご希望に合わせて最適な施術をご提案いたします。<br />
            お気軽にお電話またはオンラインでご予約ください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-3 text-lg font-semibold">
              <span className="text-2xl">📞</span>
              <a href="tel:0904181937" className="hover:underline">090-4181-7937</a>
            </div>
            <div className="text-sm opacity-75">
              受付時間: 10:00 - 20:00 (日・祝日を除く)
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              施術について
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-bold text-gray-800 mb-3">
                  ⏰ 施術時間の目安
                </h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• 全身施術：60-90分</li>
                  <li>• 局所施術：30-45分</li>
                  <li>• 美容鍼：45-60分</li>
                  <li>• EMSトレーニング：30分</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-bold text-gray-800 mb-3">
                  💳 お支払い方法
                </h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• 現金</li>
                  <li>• 各種クレジットカード</li>
                  <li>• 電子マネー</li>
                </ul>
                <p className="text-xs text-gray-400 mt-3">※保険診療は行っておりません（自費診療のみ）</p>
              </div>
            </div>
            <div className="mt-8 bg-gray-100 p-6 rounded-lg">
              <p className="text-center text-gray-700">
                <span className="font-semibold">初回の方は</span>カウンセリング時間を含むため、お時間に余裕を持ってお越しください。<br />
                症状や体調により施術内容を調整いたしますので、事前にご相談ください。
              </p>
            </div>
          </div>
        </div>
      </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
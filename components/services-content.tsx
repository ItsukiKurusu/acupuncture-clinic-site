'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Clock, CreditCard, Phone } from 'lucide-react';
import { services, serviceCategories as categories } from '@/lib/services-data';
import { TEL_DISPLAY, TEL_HREF } from '@/lib/site-config';

gsap.registerPlugin(ScrollTrigger);

export function ServicesContent() {
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAPはframer-motionのMotionConfigの管理外なので、ここで個別に判定する。
    // 「視差効果を減らす」設定時はスクロール連動の動きを一切付けない。
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
      );

      const scrollTrigger = {
        trigger: cardsRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      } as const;

      gsap.fromTo(
        '.service-card',
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out', scrollTrigger }
      );

      gsap.fromTo(
        '.category-header',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out', scrollTrigger }
      );
    });

    return () => ctx.revert();
  }, []);

  const getServicesByCategory = (category: string) =>
    services.filter((service) => service.category === category);

  return (
    <>
      {/* 導入 */}
      <section className="bg-background pt-10 pb-14">
        <div className="container mx-auto px-4 text-center max-w-3xl" ref={heroRef}>
          <span
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ color: 'var(--gold-strong)' }}
          >
            Menu
          </span>
          <h1 className="heading-mincho text-3xl md:text-4xl mb-6">施術内容・料金</h1>
          <p className="text-muted-foreground leading-relaxed">
            お一人おひとりの症状や目的に合わせた施術メニューをご用意しています。
            <br className="hidden sm:block" />
            どの施術も、鍼灸師でもある理学療法士が丁寧に対応いたします。
          </p>
          <div className="w-12 h-px mx-auto mt-8" style={{ backgroundColor: 'var(--gold)' }} />
        </div>
      </section>

      {/* メニュー一覧 */}
      <section className="pb-16 bg-background">
        <div className="container mx-auto px-4" ref={cardsRef}>
          {categories.map((category) => (
            <div key={category} className="mb-14">
              <h2 className="category-header heading-mincho text-2xl md:text-3xl mb-8 text-center">
                {category}
              </h2>

              <div className="grid gap-4 max-w-4xl mx-auto">
                {getServicesByCategory(category).map((service, index) => (
                  <div
                    key={`${category}-${index}`}
                    className="service-card hover-card bg-white rounded p-6 md:p-7"
                    style={{ border: '1px solid var(--hairline)' }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <h3 className="text-lg md:text-xl font-bold text-foreground">
                            {service.name}
                          </h3>
                          {service.isPopular && (
                            <span
                              className="rounded border px-2 py-0.5 text-xs font-semibold"
                              style={{ borderColor: 'var(--gold)', color: 'var(--gold-strong)' }}
                            >
                              人気
                            </span>
                          )}
                        </div>
                        {service.description && (
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {service.description}
                          </p>
                        )}
                      </div>

                      <div
                        className="md:text-right md:min-w-[190px] md:pl-6 md:border-l"
                        style={{ borderColor: 'var(--hairline)' }}
                      >
                        <div className="heading-mincho text-xl md:text-2xl text-foreground">
                          {service.price}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">（税込）</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ご予約 */}
      <section className="text-white py-16" style={{ backgroundColor: 'var(--ink)' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-mincho text-2xl md:text-3xl mb-5">ご予約・お問い合わせ</h2>
          <p
            className="mb-8 max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.75)' }}
          >
            症状やご希望に合わせて最適な施術をご提案いたします。
            <br className="hidden sm:block" />
            お電話またはLINEでお気軽にご予約ください。
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a
              href={TEL_HREF}
              className="hover-underline inline-flex items-center gap-2.5 text-lg font-semibold"
            >
              <Phone className="h-5 w-5" style={{ color: 'var(--gold)' }} />
              {TEL_DISPLAY}
            </a>
            <div className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
              受付時間 10:00 – 20:00（日・祝日を除く）
            </div>
          </div>
        </div>
      </section>

      {/* 補足 */}
      <section className="bg-background py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-mincho text-2xl mb-8 text-center">施術について</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-white p-6 rounded" style={{ border: '1px solid var(--hairline)' }}>
                <h3 className="flex items-center gap-2.5 text-base font-bold text-foreground mb-3">
                  <Clock className="h-4 w-4 shrink-0" style={{ color: 'var(--gold)' }} />
                  施術時間の目安
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1.5">
                  <li>全身施術：60〜90分</li>
                  <li>局所施術：30〜45分</li>
                  <li>美容鍼：45〜60分</li>
                  <li>EMSトレーニング：30分</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded" style={{ border: '1px solid var(--hairline)' }}>
                <h3 className="flex items-center gap-2.5 text-base font-bold text-foreground mb-3">
                  <CreditCard className="h-4 w-4 shrink-0" style={{ color: 'var(--gold)' }} />
                  お支払い方法
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1.5">
                  <li>現金</li>
                  <li>各種クレジットカード</li>
                  <li>電子マネー</li>
                </ul>
                <p className="text-xs text-muted-foreground mt-3">
                  ※保険診療は行っておりません（自費診療のみ）
                </p>
              </div>
            </div>
            <div
              className="mt-5 p-6 rounded"
              style={{ backgroundColor: 'var(--gold-wash)', border: '1px solid var(--hairline)' }}
            >
              <p className="text-center text-sm text-foreground leading-relaxed">
                <span className="font-semibold">初回の方は</span>
                カウンセリングのお時間を含みますので、余裕を持ってお越しください。
                <br className="hidden sm:block" />
                症状や体調に合わせて施術内容を調整いたしますので、事前にご相談ください。
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

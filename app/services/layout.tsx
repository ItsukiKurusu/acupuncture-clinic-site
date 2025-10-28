import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '施術内容・料金 - 鍼灸HANE | 福岡市中央区六本松の鍼灸院',
  description: '鍼灸HANEの施術メニューと料金のご案内。整体・鍼・電気・カッピング、美容鍼、EMSトレーニングなど多彩な施術をご提供。福岡市中央区六本松の理学療法士による丁寧な治療。',
  keywords: ['施術内容', '料金', '鍼灸', '整体', '美容鍼', 'EMSトレーニング', '六本松', '福岡市', '中央区', 'HANE'],
  openGraph: {
    title: '施術内容・料金 - 鍼灸HANE',
    description: '鍼灸HANEの施術メニューと料金のご案内。整体・鍼・電気・カッピング、美容鍼、EMSトレーニングなど多彩な施術をご提供。',
    url: 'https://acupuncture-clinic-site.vercel.app/services',
    siteName: '鍼灸HANE',
    images: [
      {
        url: '/acupuncture-clinic-interior.png',
        width: 1200,
        height: 630,
        alt: '鍼灸HANE 施術室内',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '施術内容・料金 - 鍼灸HANE',
    description: '鍼灸HANEの施術メニューと料金のご案内。理学療法士による丁寧な治療をご提供。',
    images: ['/acupuncture-clinic-interior.png'],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
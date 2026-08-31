// 統合前の記事スラッグ → 統合後の記事スラッグ。
// 統合の内訳は各記事の本文を参照。
const CONSOLIDATED_BLOG_POSTS = {
  // 肩こり・首こり・腕の疲れ
  gouya: 'tsubo-katakori',
  gaikan: 'tsubo-katakori',
  tesanri: 'tsubo-katakori',
  youkei: 'tsubo-katakori',
  // 腰痛・膝の痛み・脚の張り
  yoryosen: 'tsubo-youtsu-hizatsu',
  konron: 'tsubo-youtsu-hizatsu',
  gaishitugan: 'tsubo-youtsu-hizatsu',
  ryoukyu: 'tsubo-youtsu-hizatsu',
  // 冷え・むくみ
  saninkou: 'tsubo-hie-mukumi',
  inryousen: 'tsubo-hie-mukumi',
  taikei: 'tsubo-hie-mukumi',
  hukuryu: 'tsubo-hie-mukumi',
  taihaku: 'tsubo-hie-mukumi',
  kekkai: 'tsubo-hie-mukumi',
  // 自律神経・ストレス・不眠
  naikan: 'tsubo-jiritsu-shinkei',
  taisyou: 'tsubo-jiritsu-shinkei',
  // スラッグは taihaku-selfcare だが、中身は照海（しょうかい）の記事だった
  'taihaku-selfcare': 'tsubo-jiritsu-shinkei',
  yuusen: 'tsubo-jiritsu-shinkei',
  // 胃腸の不調
  ashisanri: 'tsubo-icho',
  kouson: 'tsubo-icho',
  uranaitei: 'tsubo-icho',
  // 顔・鼻のツボは美容鍼の記事へ統合
  geikou: 'beauty-acupuncture',
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // public/ は静的アセットとしてCDN配信されるだけで、サーバー側から読み込むコードは無い。
  // 一方 app/sitemap.ts が execSync / process.cwd() を使うためファイルトレースが
  // 判断を諦めてプロジェクト全体（=261MBのpublic/）を関数バンドルに含めてしまい、
  // Vercelの関数サイズ上限250MBを超えてデプロイが失敗する。明示的に除外する。
  outputFileTracingExcludes: {
    '**/*': ['./public/**'],
  },
  // 逆に posts/ は sitemap.ts が実行時に読むため、確実にバンドルへ含める。
  outputFileTracingIncludes: {
    '/sitemap.xml': ['./posts/**'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/treatment',
        destination: '/services',
        permanent: true,
      },
      // 1ツボ1記事だった22本を症状軸の5記事へ統合した際のリダイレクト。
      // 旧URLに集まっていた評価と被リンクを統合先へ引き継ぐため、
      // 記事を消すだけにせず必ず301で受け止める。
      ...Object.entries(CONSOLIDATED_BLOG_POSTS).map(([from, to]) => ({
        source: `/blog/${from}`,
        destination: `/blog/${to}`,
        permanent: true,
      })),
    ]
  },
}

export default nextConfig

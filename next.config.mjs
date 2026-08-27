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
    ]
  },
}

export default nextConfig

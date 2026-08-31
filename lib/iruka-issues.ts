/**
 * 地域情報誌「いるか」に掲載したコラムのアーカイブ。新しい号を先頭に置く。
 * トップページの IrukaSection は、この配列の先頭2件を自動表示する。
 *
 * date は掲載年月。4〜7月号は2025年と記載されていたが、いずれも2026年の
 * 同月にアップロードされたもので、年の誤りだったため2026年に統一した。
 */
export const irukaIssues = [
  {
    label: "9月号",
    date: "2026年9月",
    src: "/iruka9.png",
    alt: "地域情報誌いるか 9月号",
    type: "image" as const,
  },
  {
    label: "8月号",
    date: "2026年8月",
    src: "/iruka8.jpg",
    alt: "地域情報誌いるか 8月号",
    type: "image" as const,
  },
  {
    label: "7月号",
    date: "2026年7月",
    src: "/iruka7.jpg",
    alt: "地域情報誌いるか 7月号",
    type: "image" as const,
  },
  {
    label: "6月号",
    date: "2026年6月",
    src: "/iruka6-1.png",
    alt: "地域情報誌いるか 6月号",
    type: "image" as const,
  },
  {
    label: "5月号",
    date: "2026年5月",
    src: "/iruka5.jpg",
    alt: "地域情報誌いるか 5月号",
    type: "image" as const,
  },
  {
    label: "4月号",
    date: "2026年4月",
    src: "/iruka4.png",
    alt: "地域情報誌いるか 4月号",
    type: "image" as const,
  },
]

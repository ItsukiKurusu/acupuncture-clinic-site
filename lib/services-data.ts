export interface ServiceItem {
  name: string
  description?: string
  price: string
  isPopular?: boolean
  category: string
}

// 表示ページ（app/services/page.tsx）と構造化データ（services-structured-data.tsx）の
// 唯一の情報源。料金はここだけを更新すれば両方に反映される。
export const services: ServiceItem[] = [
  {
    name: "施術（整体・鍼・電気・カッピング）",
    description: "全身の筋肉の緊張を和らげ、血行を促進する総合的な施術",
    price: "全身 7,000円 / 局所 5,000円",
    isPopular: true,
    category: "基本施術"
  },
  {
    name: "眼精疲労改善",
    description: "デスクワークやスマートフォンによる目の疲れを和らげる専門施術",
    price: "2,000円",
    category: "専門施術"
  },
  {
    name: "EMSトレーニング",
    description: "電気刺激により筋肉を効率的に鍛える最新のトレーニング",
    price: "3,000円",
    category: "トレーニング"
  },
  {
    name: "EMS×パーソナル",
    description: "EMSトレーニングと個別指導を組み合わせた贅沢なコース",
    price: "8,000円",
    category: "トレーニング"
  },
  {
    name: "美容鍼",
    description: "お肌のハリや血色を改善し、自然な美しさを引き出す美容専門の鍼治療",
    price: "初回 6,000円 / 2回目以降 9,000円",
    isPopular: true,
    category: "美容"
  },
  {
    name: "小顔矯正",
    description: "フェイスラインを整え、リフトアップ効果を期待できる施術",
    price: "3,000円",
    category: "美容"
  },
  {
    name: "マトリクス式電界施術",
    description: "最新の電界技術を活用した革新的な治療法",
    price: "1,500円",
    category: "専門施術"
  }
]

export const serviceCategories = ["基本施術", "専門施術", "トレーニング", "美容"]

export interface ParsedOffer {
  label: string
  price: number
}

// "全身 7,000円 / 局所 5,000円" のような表示用の価格文字列から、
// 構造化データ用の内訳（ラベルと数値）を抽出する。
export function parseOffers(priceLabel: string): ParsedOffer[] {
  return priceLabel
    .split("/")
    .map((part) => {
      const trimmed = part.trim()
      const priceMatch = trimmed.match(/([\d,]+)\s*円/)
      const price = priceMatch ? Number(priceMatch[1].replace(/,/g, "")) : 0
      const label = trimmed.replace(/[\d,]+\s*円/, "").trim()
      return { label, price }
    })
    .filter((offer) => offer.price > 0)
}

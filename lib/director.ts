import { SITE_URL } from '@/lib/site-config'

/**
 * 院長情報の唯一の情報源。
 * 記事の著者ボックス、BlogPosting の author、MedicalBusiness の founder が
 * すべてここを参照し、構造化データ上は同じ @id で「同一人物」として結び付ける。
 */
export const DIRECTOR = {
  /** 構造化データ上の Person ノードの識別子 */
  id: `${SITE_URL}/about#director`,
  name: '羽田野 裕稀',
  kana: 'はだの ひろき',
  jobTitle: '鍼灸師・理学療法士',
  /** 4:5 の院長写真。著者ボックスと Person.image で使う */
  image: '/director-portrait1.jpg',
  url: `${SITE_URL}/about`,
  bio: '理学療法士として病院・クリニックで運動・筋肉・骨格の評価と治療に携わったのち、鍼灸師として福岡市中央区六本松に鍼灸HANEを開院。国民スポーツ大会 九州ブロック大会ではラグビー大分県代表のトレーナーとして帯同。痛みのある場所だけでなく、体の使い方まで含めて原因を探る施術を大切にしています。',
} as const

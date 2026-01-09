# Sanity CMSセットアップガイド

このプロジェクトはSanity.ioをHeadless CMSとして使用しています。

## 初回セットアップ

### 1. Sanityアカウントの作成

1. [Sanity.io](https://www.sanity.io/)にアクセス
2. GitHubアカウントでサインアップ（無料）

### 2. Sanityプロジェクトの初期化

```bash
# Sanity CLIでログイン
pnpm sanity login

# 新規プロジェクトを作成
pnpm sanity init
```

以下の質問に答えてください:
- **Create new project**: Yes
- **Project name**: `acupuncture-clinic-blog` (任意の名前)
- **Use the default dataset configuration**: Yes
- **Project output path**: そのままEnter（プロジェクトルートを使用）
- **Select project template**: Clean project with no predefined schemas

### 3. 環境変数の設定

1. `.env.local`ファイルを作成（`.env.local.example`をコピー）
2. Sanity管理画面から取得したProject IDを設定:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id-here
NEXT_PUBLIC_SANITY_DATASET=production
```

Project IDの確認方法:
- [Sanity管理画面](https://www.sanity.io/manage)
- プロジェクトを選択 → Settings → API → Project ID

### 4. Sanityデータセットのデプロイ

```bash
# スキーマをSanityにデプロイ
pnpm sanity deploy
```

### 5. 開発サーバーの起動

```bash
# Next.js開発サーバー
pnpm dev
```

以下のURLにアクセスできます:
- **フロントページ**: http://localhost:3000
- **管理画面**: http://localhost:3000/studio
- **ブログ一覧**: http://localhost:3000/blog

## 管理画面の使い方

### ブログ記事の作成

1. http://localhost:3000/studio にアクセス
2. 左メニューから「ブログ記事」を選択
3. 右上の「Create」ボタンをクリック
4. 以下の項目を入力:
   - **タイトル**: 記事のタイトル
   - **スラッグ**: 自動生成ボタンをクリック（URLに使用）
   - **著者**: 執筆者名（任意）
   - **カバー画像**: トップ画像をアップロード（任意）
   - **抜粋**: 記事の要約（必須）
   - **本文**: リッチテキストエディタで本文を作成
   - **タグ**: カテゴリタグ（任意）
   - **公開日**: 公開日時（自動入力）
5. 右上の「Publish」ボタンで公開

### 複数の編集者を追加

1. [Sanity管理画面](https://www.sanity.io/manage)
2. プロジェクト選択 → Members
3. 「Invite members」でメールアドレスを入力
4. 役割を選択（Administrator / Editor / Viewer）

## 本番デプロイ（Vercel）

### Vercel環境変数の設定

1. Vercelダッシュボード → プロジェクト → Settings → Environment Variables
2. 以下の変数を追加:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`

### CORS設定（重要）

Sanity管理画面で本番環境のドメインを許可:

1. [Sanity管理画面](https://www.sanity.io/manage)
2. プロジェクト → API → CORS Origins
3. 「Add CORS origin」をクリック
4. 本番URL（例: `https://your-site.vercel.app`）を追加
5. Credentials: Include を選択
6. 保存

## トラブルシューティング

### エラー: "Project ID not found"
→ `.env.local`ファイルが正しく設定されているか確認

### 管理画面が表示されない
→ `pnpm sanity deploy`でスキーマをデプロイしたか確認

### 記事が表示されない
→ 管理画面で記事を「Publish」したか確認

### 画像が表示されない
→ CORS設定が正しいか確認

## コマンドリファレンス

```bash
# Sanity管理画面をローカルで起動（オプション）
pnpm sanity dev

# スキーマ変更をデプロイ
pnpm sanity deploy

# Sanityデータセットの内容をエクスポート
pnpm sanity dataset export production backup.tar.gz

# データをインポート
pnpm sanity dataset import backup.tar.gz production
```

## 参考リンク

- [Sanity公式ドキュメント](https://www.sanity.io/docs)
- [Next.js + Sanity統合ガイド](https://www.sanity.io/plugins/next-sanity)
- [GROQ クエリリファレンス](https://www.sanity.io/docs/groq)

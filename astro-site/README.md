# TIAM CLINIC 採用サイト - Astro版

既存の静的HTMLサイトをAstroに段階的に移行するプロジェクトです。

## セットアップ

```bash
cd astro-site
npm install
npm run dev
```

開発サーバーは http://localhost:4321/ で起動します。

## プロジェクト構造

```
astro-site/
├── public/          # 静的アセット（img, css, js は親ディレクトリから参照）
├── src/
│   ├── components/  # 共通コンポーネント（Header, Footer, Layout など）
│   ├── layouts/     # レイアウトコンポーネント
│   └── pages/       # ページ（index.astro など）
├── astro.config.mjs
└── package.json
```

## コンポーネント構成

- `src/layouts/BaseLayout.astro` - 採用サイト共通レイアウト（head、Header、Footer、スクリプト）
- `src/layouts/TellLayout.astro` - 法人向け福利厚生ページ用（Tailwind CDN、独自ヘッダー/フッター）
- `src/components/Header.astro` - ヘッダー・ナビゲーション
- `src/components/Footer.astro` - フッター

### Layout の使い方

```astro
<BaseLayout title="ページタイトル" stylesheets={['recruit.css']}>
  <!-- メインコンテンツ -->
</BaseLayout>
```

## 移行済みページ

- `/` - トップ（index）
- `/Dr` - 医師
- `/Nurse` - 看護師
- `/CS` - 受付/カウンセラー
- `/pr` - SNS広報
- `/Doctor-interview` - スタッフインタビュー
- `/Reasons` - 選ばれる理由
- `/faq` - よくある質問
- `/tell` - 法人向け福利厚生（美容医療サブスク、別デザイン・TellLayout使用）

## 次のステップ

1. **職種別ページのコンテンツコンポーネント化**

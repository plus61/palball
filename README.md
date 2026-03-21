# pal-ball Astro 移行プロジェクト

WordPress (pal-ball.com) → Astro + Vercel への移行雛形

## セットアップ

```bash
npm install
npm run dev
# → http://localhost:4321
```

## ディレクトリ構成

```
src/
├── layouts/
│   └── Layout.astro          # ヘッダー・フッター共通レイアウト
├── pages/
│   ├── index.astro           # トップページ ✅
│   ├── topics/
│   │   ├── index.astro       # お知らせ一覧 ✅
│   │   └── [slug].astro      # お知らせ詳細 ✅
│   ├── concept.astro         # 要実装
│   ├── guide.astro           # 要実装（料金ページ）
│   ├── fitness.astro         # 要実装
│   ├── personal.astro        # 要実装
│   ├── kids_swimming.astro   # 要実装
│   ├── kids_dance.astro      # 要実装
│   ├── facility.astro        # 要実装
│   ├── contact.astro         # 要実装
│   ├── company.astro         # 要実装
│   └── recruitment.astro     # 要実装
├── content/
│   └── news/                 # ← お知らせはここにMDで追加するだけ！
│       ├── papa-mama-pair.md
│       └── swimming-trial.md
└── styles/
    └── global.css            # デザイントークン・共通スタイル

public/
└── images/                   # WordPressから移行した画像をここに配置
    └── top/
        ├── fitness-img.webp
        ├── kids_swimming-img.webp
        └── ...
```

## お知らせの更新方法（WordPress管理画面不要）

```bash
# 新しいお知らせを追加する場合
# src/content/news/ に .md ファイルを作るだけ

---
title: イベントタイトル
date: "2026-04-01"
category: fitness  # fitness / kids / general
---

本文をMarkdownで書く

## 見出し

- リスト
```

## Vercel デプロイ

1. GitHubにpush
2. Vercelとリポジトリを連携（初回のみ）
3. 以降は `git push` → 自動デプロイ（約2分）

## 画像移行手順

1. METAMONでpal-ball.comをZIPダウンロード
2. `wp-content/themes/pal-ball/assets/images/` 以下を
3. `public/images/` にコピー

## 残タスク（Claude Codeで実装推奨）

- [ ] 各静的ページの実装（concept / guide / fitness 等）
- [ ] お問い合わせフォーム（Netlify Forms or Formspree）
- [ ] 画像の移行・最適化
- [ ] SEO meta設定（OGP等）
- [ ] SP対応ハンバーガーメニューのJS
- [ ] Vercel本番デプロイ

## デザイントークン（global.css）

| 変数 | 値 | 用途 |
|---|---|---|
| --color-navy | #1a2a4a | メインカラー |
| --color-accent | #e8a020 | アクセント（ゴールド）|
| --color-white | #ffffff | 背景 |
| --font-heading | Montserrat | 見出し・数字 |
| --font-body | Noto Sans JP | 本文 |

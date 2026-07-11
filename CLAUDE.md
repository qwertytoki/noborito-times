# 登戸タイムズ

登戸・向ヶ丘遊園（川崎市多摩区）に密着した地域情報サイト。Astro製の静的サイトで、GitHub Pagesにデプロイされる。

- 本番URL: https://qwertytoki.github.io/noborito-times/
- 記事はAIが草稿を書き、運営者がPRレビューで承認（マージ）して公開するワークフロー。

## コマンド

Node 20以上が必要（ローカルでは `~/.nvm/versions/node/v20.16.0/bin` を使用）。

```sh
npm install
npm run build    # dist/ に静的ビルド。記事追加後は必ず成功を確認する
npm run dev      # ローカルプレビュー
```

mainにpushすると `.github/workflows/deploy.yml` が自動でGitHub Pagesへデプロイする。

## 記事の追加方法

1. `docs/EDITORIAL.md` の執筆ルールを必ず読む
2. `data/coverage-log.json` と `src/content/posts/` を確認し、既報のネタを避ける
3. `src/content/posts/YYYY-MM-DD-slug.md` を作成（slugは英語ケバブケース）
4. frontmatter（スキーマは `src/content.config.ts` でzod検証される）:

```yaml
---
title: 記事タイトル（「登戸」または対象地名を含める）
description: 100文字前後の要約
pubDate: YYYY-MM-DD  # アーカイブ記事は出来事が起きた時期の過去日付でよい
category: gourmet | open-close | life | living | event | kosodate | machizukuri
tags: [タグ1, タグ2]
sources:
  - https://出典URL（必ず1件以上）
heroImage: /images/posts/xxx.jpg   # 任意。画像ポリシー（EDITORIAL.md）厳守
heroImageAlt: 画像の説明           # 任意
heroImageCredit: 画像の出典表記     # 転載画像には必須
---
```

本文にはX/Instagramの公式投稿をblockquote HTMLで埋め込める（書き方はEDITORIAL.md参照）。埋め込み用スクリプトは記事ページが自動で読み込む。

5. `data/coverage-log.json` に扱ったネタを追記する
6. `npm run build` が通ることを確認する

カテゴリの日本語名は `src/consts.ts` の `CATEGORIES` を参照（グルメ / 開店・閉店 / ライフ / 住まい / イベント / 子育て / 交通・街づくり）。

## 自動記事生成PRのルール

- ブランチ名: `article/YYYY-MM-DD-slug`
- PRは `.github/PULL_REQUEST_TEMPLATE.md` の形式に従い、出典と確認ポイントを必ず記載する
- 1PR＝1記事。サイトのコードには触れない

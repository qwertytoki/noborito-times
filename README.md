# 登戸タイムズ

登戸・向ヶ丘遊園（川崎市多摩区）に密着した地域情報サイト。

https://qwertytoki.github.io/noborito-times/

## 仕組み

- [Astro](https://astro.build/) 製の静的サイト。記事は `src/content/posts/` のMarkdown。
- 毎朝、AI（Claudeのスケジュールエージェント）が登戸の新着情報をWeb検索し、記事の草稿をPRとして作成する。
- 運営者がPRをレビューし、マージすると GitHub Actions が GitHub Pages へ自動デプロイして公開される。
- 執筆ルールは [docs/EDITORIAL.md](docs/EDITORIAL.md) を参照。

## 開発

```sh
npm install
npm run dev      # http://localhost:4321/noborito-times/
npm run build
```

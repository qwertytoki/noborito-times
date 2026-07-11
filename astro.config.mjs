// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages (project site) 用の設定。
// 独自ドメイン移行時は site を差し替え、base を削除する。
export default defineConfig({
  site: 'https://qwertytoki.github.io',
  base: '/noborito-times',
  integrations: [sitemap()],
});

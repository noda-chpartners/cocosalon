// @ts-check
import { defineConfig } from 'astro/config';

// 公開ドメインが決まったら SITE_URL を設定する。
// canonical、OGP、JSON-LD、sitemap が絶対URLになる。
const site = process.env.SITE_URL;

// https://astro.build/config
export default defineConfig({
	...(site ? { site } : {}),
});

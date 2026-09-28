// @ts-check
import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL ?? 'https://cocosalon.pages.dev';

// https://astro.build/config
export default defineConfig({
	site,
});

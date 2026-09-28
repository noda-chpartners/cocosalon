import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
	if (!site) {
		return new Response('Sitemap requires a site URL.', { status: 404 });
	}

	const loc = new URL('/', site).href;
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${loc}</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;

	return new Response(xml, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' },
	});
};

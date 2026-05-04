import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { ROUTES, SITE_URL } from "../src/seo/config.js";

const publicDir = join(process.cwd(), "public");
const today = new Date().toISOString().slice(0, 10);
const indexNowKey = "b9b6bfb2a5f04ea4a5b83abf3e597b9a";

function urlFor(path) {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}

const indexableRoutes = ROUTES.filter((route) => !route.hidden && !route.robots.includes("noindex"));

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexableRoutes.map((route) => `  <url>
    <loc>${urlFor(route.path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /
Disallow: /appointment
Disallow: /doctors

Sitemap: ${SITE_URL}/sitemap.xml
Host: ${SITE_URL.replace("https://", "")}
`;

const indexNow = JSON.stringify({
  host: SITE_URL.replace("https://", ""),
  key: indexNowKey,
  keyLocation: `${SITE_URL}/indexnow-key.txt`,
  urlList: indexableRoutes.map((route) => urlFor(route.path)),
}, null, 2);

await mkdir(publicDir, { recursive: true });
await writeFile(join(publicDir, "sitemap.xml"), sitemap);
await writeFile(join(publicDir, "robots.txt"), robots);
await writeFile(join(publicDir, "indexnow-key.txt"), indexNowKey);
await writeFile(join(publicDir, "indexnow.json"), indexNow);

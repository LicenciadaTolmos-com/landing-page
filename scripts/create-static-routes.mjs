import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { ROUTES, SITE_URL, canonicalUrl } from "../src/seo/config.js";

const distDir = join(process.cwd(), "dist");
const template = await readFile(join(distDir, "index.html"), "utf8");
const staticRoutes = ROUTES.filter((route) => !route.hidden && route.path !== "/");

function escapeAttribute(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;");
}

function replaceTag(html, pattern, replacement) {
  return html.replace(pattern, replacement);
}

function routeHtml(route) {
  const canonical = canonicalUrl(route.path);
  let html = template;

  html = replaceTag(html, /<title>.*?<\/title>/, `<title>${escapeAttribute(route.title)}</title>`);
  html = replaceTag(html, /<meta name="description" content=".*?" \/>/, `<meta name="description" content="${escapeAttribute(route.description)}" />`);
  html = replaceTag(html, /<meta name="keywords" content=".*?" \/>/, `<meta name="keywords" content="${escapeAttribute(route.keywords)}" />`);
  html = replaceTag(html, /<meta name="robots" content=".*?" \/>/, `<meta name="robots" content="${escapeAttribute(route.robots)}" />`);
  html = replaceTag(html, /<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${canonical}" />`);
  html = replaceTag(html, /<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${escapeAttribute(route.title)}" />`);
  html = replaceTag(html, /<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${escapeAttribute(route.description)}" />`);
  html = replaceTag(html, /<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${canonical}" />`);
  html = replaceTag(html, /<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${escapeAttribute(route.title)}" />`);
  html = replaceTag(html, /<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${escapeAttribute(route.description)}" />`);

  return html.replace(
    '<div id="root"></div>',
    `<div id="root"></div><script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","url":"${canonical}","name":"${escapeAttribute(route.title)}","isPartOf":{"@type":"WebSite","url":"${SITE_URL}","name":"LicenciadaTolmos"}}</script>`
  );
}

await Promise.all(staticRoutes.map(async (route) => {
  const file = join(distDir, route.path.replace(/^\//, ""), "index.html");
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, routeHtml(route));
}));

import { access, mkdir } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const publicDir = join(process.cwd(), "public");

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function optimizeHero() {
  const input = join(publicDir, "home3.png");
  if (!(await exists(input))) return;

  await sharp(input)
    .resize({ width: 1040, withoutEnlargement: true })
    .webp({ quality: 78, effort: 5 })
    .toFile(join(publicDir, "home3.webp"));

  await sharp(input)
    .resize(1200, 630, { fit: "cover", position: "top" })
    .webp({ quality: 80, effort: 5 })
    .toFile(join(publicDir, "home3-og.webp"));
}

async function optimizeIcons() {
  const input = join(publicDir, "icono3.png");
  if (!(await exists(input))) return;

  const sizes = [
    ["favicon-32.png", 32],
    ["favicon-192.png", 192],
    ["favicon-512.png", 512],
    ["apple-touch-icon.png", 180],
  ];

  await Promise.all(sizes.map(([name, size]) =>
    sharp(input)
      .resize(size, size, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png({ compressionLevel: 9, quality: 90 })
      .toFile(join(publicDir, name))
  ));
}

await mkdir(publicDir, { recursive: true });
await optimizeHero();
await optimizeIcons();

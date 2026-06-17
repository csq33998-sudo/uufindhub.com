import { copyFile, stat } from "node:fs/promises";
import { join } from "node:path";

const distDir = join(process.cwd(), "dist");
const sitemapIndex = join(distDir, "sitemap-index.xml");
const sitemapAlias = join(distDir, "sitemap.xml");

await stat(sitemapIndex);
await copyFile(sitemapIndex, sitemapAlias);

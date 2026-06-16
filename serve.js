import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, relative, resolve, sep } from "node:path";

const root = resolve("dist");
const port = Number(process.env.PORT || 4321);

const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
};

function resolveRequest(url = "/") {
  let cleanPath;

  try {
    cleanPath = decodeURIComponent(url.split("?")[0] || "/");
  } catch {
    return null;
  }

  const normalized = normalize(cleanPath).replace(/^([/\\])+/, "");
  let file = resolve(root, normalized);
  const rel = relative(root, file);

  if (rel.startsWith("..") || rel.split(sep).some((part) => part.startsWith("."))) {
    return null;
  }

  if (existsSync(file) && statSync(file).isDirectory()) {
    file = join(file, "index.html");
  }

  if (!existsSync(file) && !extname(file)) {
    file = join(file, "index.html");
  }

  return file;
}

createServer((req, res) => {
  const file = resolveRequest(req.url);

  if (!file || !existsSync(file) || !statSync(file).isFile()) {
    res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    res.end("Not found");
    return;
  }

  res.writeHead(200, {
    "content-type": types[extname(file)] || "application/octet-stream",
  });
  createReadStream(file).pipe(res);
}).listen(port, "127.0.0.1", () => {
  console.log(`Static preview running at http://127.0.0.1:${port}`);
});

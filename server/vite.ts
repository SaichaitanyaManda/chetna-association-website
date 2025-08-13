import type { Express } from "express";
import type { Server } from "http";
import { createServer as createViteServer, type ViteDevServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function setupVite(app: Express, server: Server) {
  const vite: ViteDevServer = await createViteServer({
    server: { middlewareMode: true },
    appType: "spa",
    root: path.resolve(__dirname, "..", "client"),
  });

  app.use(vite.ssrFixStacktrace);
  app.use(vite.middlewares);
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "..", "dist", "public");
  
  app.use(express.static(distPath));
  
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
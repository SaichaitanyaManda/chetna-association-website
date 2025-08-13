// Simple local development setup for Windows
import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createServer() {
  const app = express();

  // Create Vite server in middleware mode
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
    root: path.resolve(__dirname, 'client'),
    plugins: [
      (await import('@vitejs/plugin-react')).default({
        jsxRuntime: 'automatic'
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'client/src'),
        '@shared': path.resolve(__dirname, 'shared'),
      },
    },
    esbuild: {
      jsx: 'automatic',
    },
  });

  // Use vite's connect instance as middleware
  app.use(vite.middlewares);

  const port = 5000;
  app.listen(port, () => {
    console.log(`🚀 Local dev server running at http://localhost:${port}`);
    console.log(`📁 Serving from: ${path.resolve(__dirname, 'client')}`);
    console.log('✅ Vite middleware enabled for React/TypeScript');
  });
}

createServer().catch((err) => {
  console.error('Error starting server:', err);
  process.exit(1);
});
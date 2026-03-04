import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 3000;

const MIME = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

/* Route aliases for local dev preview */
const ROUTES = {
  '/': 'home-mockup.html',
  '/home': 'home-mockup.html',
  '/frame': 'frame.html',
  '/listing': 'listing-mockup.html',
  '/category': 'listing-mockup.html',
  '/product': 'product-mockup.html',
};

const server = http.createServer((req, res) => {
  const urlPath = req.url.split('?')[0]; // strip query string
  const mapped = ROUTES[urlPath];
  let filePath = mapped
    ? path.join(__dirname, mapped)
    : path.join(__dirname, req.url);
  const ext = path.extname(filePath);
  const contentType = MIME[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not Found');
      return;
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Serving on http://localhost:${PORT}`);
  console.log(`  /          → home-mockup.html`);
  console.log(`  /home      → home-mockup.html`);
  console.log(`  /frame     → frame.html`);
  console.log(`  /listing   → listing-mockup.html`);
  console.log(`  /product   → product-mockup.html`);
});

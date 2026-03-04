import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';
const viewportWidth = parseInt(process.argv[4], 10) || 1440;
const viewportHeight = process.argv[4] ? 900 : 900;
const dir = path.join(__dirname, 'screenshots');

if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

// Find next available number
const existing = fs.readdirSync(dir).filter(f => f.startsWith('screenshot-'));
let num = 1;
for (const f of existing) {
  const match = f.match(/^screenshot-(\d+)/);
  if (match) num = Math.max(num, parseInt(match[1], 10) + 1);
}

const filename = label
  ? `screenshot-${num}-${label}.png`
  : `screenshot-${num}.png`;

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: viewportWidth, height: viewportHeight });
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 15000 });
  const outPath = path.join(dir, filename);
  await page.screenshot({ path: outPath, fullPage: true });
  console.log(`Screenshot saved: ${outPath}`);
  await browser.close();
})();

import fs from "node:fs/promises";
import path from "node:path";
import { chromium, webkit } from "playwright";

const baseUrl = process.env.SCREENSHOT_URL || "http://localhost:3000";
const outDir = path.resolve("diagnostics-rendering");

await fs.mkdir(outDir, { recursive: true });

async function snap(browserType, label) {
  const browser = await browserType.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);
  const filePath = path.join(outDir, `${label}-gradient.png`);
  await page.screenshot({ path: filePath, fullPage: true });
  await browser.close();
  return filePath;
}

const chromiumPath = await snap(chromium, "chromium");
const webkitPath = await snap(webkit, "webkit");

console.log("Saved:", chromiumPath);
console.log("Saved:", webkitPath);

import fs from "node:fs/promises";
import path from "node:path";
import { chromium, webkit } from "playwright";

const baseUrl = process.env.SCREENSHOT_URL || "http://localhost:3000";
const outDir = path.resolve("diagnostics-rendering");
const viewport = { width: 1440, height: 900 };

await fs.mkdir(outDir, { recursive: true });

async function snap(browserType, label) {
  const browser = await browserType.launch();
  const page = await browser.newPage({ viewport });
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.waitForLoadState("networkidle");
  await page.waitForSelector(".page-shell", { state: "visible", timeout: 10000 });
  await page.evaluate(
    () =>
      new Promise((resolve) =>
        requestAnimationFrame(() => requestAnimationFrame(resolve))
      )
  );
  await page.waitForTimeout(500);
  const filePath = path.join(outDir, `f_final_${label}.png`);
  await page.screenshot({ path: filePath, fullPage: true });
  await browser.close();
  return filePath;
}

const chromiumPath = await snap(chromium, "chromium");
const webkitPath = await snap(webkit, "webkit");

console.log("Saved:", chromiumPath);
console.log("Saved:", webkitPath);

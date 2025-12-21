import fs from "node:fs/promises";
import path from "node:path";
import { chromium, webkit } from "playwright";

const baseUrl = process.env.SCREENSHOT_URL || "http://localhost:3000";
const outDir = path.resolve("diagnostics-rendering");
const viewport = { width: 1440, height: 900 };
const scrollSteps = [0, 1200, 3000, 6000, 9000];

await fs.mkdir(outDir, { recursive: true });

async function writeJson(fileName, data) {
  const filePath = path.join(outDir, fileName);
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
  return filePath;
}

async function captureScrollSamples(browserType, label) {
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
  await page.waitForTimeout(300);

  const results = [];

  for (const step of scrollSteps) {
    await page.evaluate((y) => window.scrollTo(0, y), step);
    await page.waitForTimeout(200);
    const shotPath = path.join(outDir, `h_scroll_${label}_${step}.png`);
    await page.screenshot({ path: shotPath, fullPage: false });
    const gradientVisible = await page.evaluate(() => {
      const gradientEl = document.querySelector(".global-gradient");
      if (!gradientEl) return false;
      const style = getComputedStyle(gradientEl);
      return style.backgroundImage && style.backgroundImage !== "none";
    });
    results.push({ scrollY: step, screenshot: shotPath, gradientVisible });
  }

  await browser.close();
  await writeJson(`h_scroll_${label}.json`, results);
  return results;
}

await captureScrollSamples(chromium, "chromium");
await captureScrollSamples(webkit, "webkit");

console.log("Saved scroll samples.");

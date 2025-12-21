import fs from "node:fs/promises";
import path from "node:path";
import { chromium, webkit } from "playwright";

const baseUrl = process.env.SCREENSHOT_URL || "http://localhost:3000";
const outDir = path.resolve("diagnostics-rendering");
const viewport = { width: 1440, height: 900 };

await fs.mkdir(outDir, { recursive: true });

async function writeJson(fileName, data) {
  const filePath = path.join(outDir, fileName);
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
  return filePath;
}

async function collectLargeBackgrounds(page) {
  return page.evaluate(() => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    function labelFor(el) {
      if (!el) return null;
      const id = el.id ? `#${el.id}` : "";
      const classList = el.classList && el.classList.length
        ? `.${Array.from(el.classList).slice(0, 4).join(".")}`
        : "";
      return `${el.tagName.toLowerCase()}${id}${classList}`;
    }

    function parseAlpha(color) {
      if (!color || color === "transparent") return 0;
      const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([0-9.]+))?\)/);
      if (!match) return 1;
      if (match[4] === undefined) return 1;
      return Number(match[4]);
    }

    const results = [];

    for (const el of Array.from(document.querySelectorAll("*"))) {
      const style = getComputedStyle(el);
      const rect = el.getBoundingClientRect();
      const area = rect.width * rect.height;
      const coversWidth = rect.width >= viewportWidth * 0.9;
      const coversHeight = rect.height >= viewportHeight * 0.5;
      const hasLargeArea = area >= viewportWidth * viewportHeight * 0.5;

      if (!coversWidth && !coversHeight && !hasLargeArea) continue;

      const alpha = parseAlpha(style.backgroundColor);
      const hasBgColor = alpha > 0.05;
      const hasBgImage = style.backgroundImage && style.backgroundImage !== "none";

      if (!hasBgColor && !hasBgImage) continue;

      results.push({
        label: labelFor(el),
        position: style.position,
        zIndex: style.zIndex,
        backgroundColor: style.backgroundColor,
        backgroundImage: style.backgroundImage,
        opacity: style.opacity,
        rect: {
          x: rect.x,
          y: rect.y,
          width: rect.width,
          height: rect.height,
        },
        area,
      });
    }

    const htmlStyle = getComputedStyle(document.documentElement);
    const bodyStyle = getComputedStyle(document.body);

    return {
      viewport: { width: viewportWidth, height: viewportHeight },
      html: {
        backgroundColor: htmlStyle.backgroundColor,
        backgroundImage: htmlStyle.backgroundImage,
      },
      body: {
        backgroundColor: bodyStyle.backgroundColor,
        backgroundImage: bodyStyle.backgroundImage,
      },
      results,
    };
  });
}

async function run(browserType, label) {
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

  const data = await collectLargeBackgrounds(page);
  await writeJson(`g_large_backgrounds_${label}.json`, data);

  await browser.close();
  return data;
}

await run(chromium, "chromium");
await run(webkit, "webkit");

console.log("Saved g_large_backgrounds_[browser].json");

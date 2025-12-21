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

async function writeText(fileName, text) {
  const filePath = path.join(outDir, fileName);
  await fs.writeFile(filePath, text);
  return filePath;
}

async function collectGradientDiagnostics(page) {
  return page.evaluate(() => {
    function labelFor(el) {
      if (!el) return null;
      const id = el.id ? `#${el.id}` : "";
      const classList = el.classList && el.classList.length
        ? `.${Array.from(el.classList).slice(0, 4).join(".")}`
        : "";
      return `${el.tagName.toLowerCase()}${id}${classList}`;
    }

    function stylePick(style) {
      if (!style) return null;
      return {
        backgroundColor: style.backgroundColor,
        backgroundImage: style.backgroundImage,
        opacity: style.opacity,
        visibility: style.visibility,
        display: style.display,
        transform: style.transform,
        filter: style.filter,
        mixBlendMode: style.mixBlendMode,
        zIndex: style.zIndex,
        position: style.position,
        pointerEvents: style.pointerEvents,
      };
    }

    function rectFor(el) {
      if (!el) return null;
      const rect = el.getBoundingClientRect();
      return {
        x: rect.x,
        y: rect.y,
        width: rect.width,
        height: rect.height,
      };
    }

    const gradientEl = document.querySelector(".global-gradient");
    const pageShell = document.querySelector(".page-shell");
    const htmlEl = document.documentElement;
    const bodyEl = document.body;

    const gradientStyle = gradientEl ? getComputedStyle(gradientEl) : null;
    const gradientBeforeStyle = gradientEl
      ? getComputedStyle(gradientEl, "::before")
      : null;
    const htmlBeforeStyle = getComputedStyle(htmlEl, "::before");

    const centerPoint = {
      x: Math.round(window.innerWidth / 2),
      y: Math.round(window.innerHeight / 2),
    };

    const topLeft = document.elementFromPoint(10, 10);
    const center = document.elementFromPoint(centerPoint.x, centerPoint.y);

    return {
      exists: {
        globalGradient: Boolean(gradientEl),
        pageShell: Boolean(pageShell),
      },
      elementFromPoint: {
        topLeft: labelFor(topLeft),
        center: labelFor(center),
      },
      computed: {
        globalGradient: stylePick(gradientStyle),
        globalGradientBefore: stylePick(gradientBeforeStyle),
        htmlBefore: stylePick(htmlBeforeStyle),
      },
      bounds: {
        html: rectFor(htmlEl),
        body: rectFor(bodyEl),
        globalGradient: rectFor(gradientEl),
        pageShell: rectFor(pageShell),
      },
      htmlBeforeBackgroundImage: htmlBeforeStyle
        ? htmlBeforeStyle.backgroundImage
        : null,
    };
  });
}

async function runPhaseE(browserType, label) {
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

  const gradientDump = await collectGradientDiagnostics(page);
  await writeJson(`f_style_dump_${label}.json`, gradientDump);

  const screenshotPath = path.join(outDir, `f_final_${label}.png`);
  await page.screenshot({ path: screenshotPath, fullPage: true });

  await browser.close();
  return { gradientDump, screenshotPath };
}

const chromiumResults = await runPhaseE(chromium, "chromium");
const webkitResults = await runPhaseE(webkit, "webkit");

const conclusion = [
  "Phase E complete.",
  `Chromium screenshot: ${chromiumResults.screenshotPath}`,
  `WebKit screenshot: ${webkitResults.screenshotPath}`,
].join("\n");

await writeText("f_conclusion.txt", conclusion);

console.log(conclusion);

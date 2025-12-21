import fs from "node:fs/promises";
import path from "node:path";
import { chromium, webkit } from "playwright";

const baseUrl = process.env.SCREENSHOT_URL || "http://localhost:3000";
const outDir = path.resolve("diagnostics-rendering");
const viewport = { width: 1440, height: 900 };

await fs.mkdir(outDir, { recursive: true });

function formatConsoleEntry(entry) {
  const location = entry.location ? ` (${entry.location})` : "";
  return `[${entry.type}] ${entry.text}${location}`;
}

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
        backgroundPosition: style.backgroundPosition,
        opacity: style.opacity,
        visibility: style.visibility,
        display: style.display,
        transform: style.transform,
        filter: style.filter,
        mixBlendMode: style.mixBlendMode,
        zIndex: style.zIndex,
        position: style.position,
        pointerEvents: style.pointerEvents,
        animationName: style.animationName,
        animationDuration: style.animationDuration,
        animationPlayState: style.animationPlayState,
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

async function sampleAnimationState(page) {
  return page.evaluate(async () => {
    const htmlBefore = getComputedStyle(document.documentElement, "::before");
    const first = {
      backgroundPosition: htmlBefore.backgroundPosition,
      transform: htmlBefore.transform,
    };

    await new Promise((resolve) => requestAnimationFrame(resolve));
    await new Promise((resolve) => setTimeout(resolve, 500));

    const htmlBeforeLater = getComputedStyle(document.documentElement, "::before");
    const second = {
      backgroundPosition: htmlBeforeLater.backgroundPosition,
      transform: htmlBeforeLater.transform,
    };

    return {
      first,
      second,
      changed:
        first.backgroundPosition !== second.backgroundPosition ||
        first.transform !== second.transform,
    };
  });
}

async function runPhaseD(browserType, label) {
  const browser = await browserType.launch();
  const page = await browser.newPage({ viewport });

  const consoleEntries = [];
  page.on("console", (msg) => {
    consoleEntries.push(
      formatConsoleEntry({
        type: msg.type(),
        text: msg.text(),
        location: msg.location()?.url
          ? `${msg.location().url}:${msg.location().lineNumber}`
          : null,
      })
    );
  });
  page.on("pageerror", (err) => {
    consoleEntries.push(`[pageerror] ${err.message}`);
  });

  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.waitForLoadState("networkidle");
  await page.waitForSelector(".page-shell", { state: "visible", timeout: 10000 });
  await page.evaluate(
    () =>
      new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)))
  );
  await page.waitForTimeout(500);

  const animationSample = await sampleAnimationState(page);
  const gradientDump = await collectGradientDiagnostics(page);

  await writeJson(`d_style_dump_${label}.json`, {
    animationSample,
    gradientDump,
  });

  await page.screenshot({
    path: path.join(outDir, `d_${label}.png`),
    fullPage: true,
  });

  await writeText(`d_console_${label}.txt`, consoleEntries.join("\n"));

  await browser.close();
  return { animationSample, gradientDump };
}

const chromiumResults = await runPhaseD(chromium, "chromium");
const webkitResults = await runPhaseD(webkit, "webkit");

const conclusion = [
  "Phase D complete.",
  `Chromium animation changed: ${chromiumResults.animationSample.changed}`,
  `WebKit animation changed: ${webkitResults.animationSample.changed}`,
  "Captured screenshots and animation samples after delay and reduced-motion override.",
].join("\n");

await writeText("d_conclusion.txt", conclusion);

console.log(conclusion);

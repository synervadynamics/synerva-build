import fs from "node:fs/promises";
import path from "node:path";
import { chromium, webkit } from "playwright";

const baseUrl = process.env.SCREENSHOT_URL || "http://localhost:3000";
const outDir = path.resolve("diagnostics-rendering");
const viewport = { width: 1440, height: 900 };

await fs.mkdir(outDir, { recursive: true });

const phaseLog = [];

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

async function collectLoadedStyles(page) {
  return page.evaluate(() => {
    const sheetEntries = Array.from(document.styleSheets).map((sheet) => {
      const href = sheet.href || "inline";
      let accessible = true;
      let ruleCount = 0;
      let error = null;
      try {
        ruleCount = sheet.cssRules ? sheet.cssRules.length : 0;
      } catch (err) {
        accessible = false;
        error = err ? String(err) : "cssRules access failed";
      }
      return {
        href,
        disabled: sheet.disabled,
        accessible,
        ruleCount,
        error,
      };
    });

    const hasGlobals = sheetEntries.some((entry) =>
      entry.href.includes("globals.css")
    );

    return {
      url: document.location.href,
      hasGlobals,
      stylesheets: sheetEntries,
    };
  });
}

function elementLabel(el) {
  if (!el) return null;
  const id = el.id ? `#${el.id}` : "";
  const classList = el.classList && el.classList.length
    ? `.${Array.from(el.classList).slice(0, 4).join(".")}`
    : "";
  return `${el.tagName.toLowerCase()}${id}${classList}`;
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

async function collectCoveringElements(page) {
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

    function isOpaqueBackground(color) {
      if (!color) return false;
      if (color === "transparent") return false;
      const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([0-9.]+))?\)/);
      if (!match) return true;
      const alpha = match[4] === undefined ? 1 : Number(match[4]);
      return alpha > 0.05;
    }

    const candidates = [];

    for (const el of Array.from(document.querySelectorAll("*"))) {
      const style = getComputedStyle(el);
      if (!["fixed", "absolute"].includes(style.position)) continue;
      const rect = el.getBoundingClientRect();
      const coversViewport =
        rect.width >= viewportWidth * 0.9 &&
        rect.height >= viewportHeight * 0.9 &&
        rect.x <= viewportWidth * 0.1 &&
        rect.y <= viewportHeight * 0.1;
      if (!coversViewport) continue;

      candidates.push({
        label: labelFor(el),
        position: style.position,
        zIndex: style.zIndex,
        backgroundColor: style.backgroundColor,
        backgroundImage: style.backgroundImage,
        opacity: style.opacity,
        filter: style.filter,
        backdropFilter: style.backdropFilter,
        pointerEvents: style.pointerEvents,
        rect: {
          x: rect.x,
          y: rect.y,
          width: rect.width,
          height: rect.height,
        },
        opaqueBackground: isOpaqueBackground(style.backgroundColor),
      });
    }

    const bodyStyle = getComputedStyle(document.body);
    const htmlStyle = getComputedStyle(document.documentElement);

    return {
      viewport: { width: viewportWidth, height: viewportHeight },
      body: {
        backgroundColor: bodyStyle.backgroundColor,
        backgroundImage: bodyStyle.backgroundImage,
        opacity: bodyStyle.opacity,
      },
      html: {
        backgroundColor: htmlStyle.backgroundColor,
        backgroundImage: htmlStyle.backgroundImage,
        opacity: htmlStyle.opacity,
      },
      candidates,
    };
  });
}

async function runPhase(browserType, label) {
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

  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.waitForLoadState("networkidle");
  await page.waitForSelector(".page-shell", { state: "visible", timeout: 10000 });
  await page.evaluate(
    () =>
      new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)))
  );

  const phaseData = { label };

  const stylesDump = await collectLoadedStyles(page);
  phaseData.loadedStyles = stylesDump;

  const aScreenshot = await page.screenshot({
    path: path.join(outDir, `a_${label}.png`),
    fullPage: true,
  });
  phaseData.aScreenshot = aScreenshot;

  const gradientDump = await collectGradientDiagnostics(page);
  phaseData.gradientDump = gradientDump;
  await writeJson(`b_style_dump_${label}.json`, gradientDump);

  await page.addStyleTag({
    content: `
      .global-gradient {
        position: fixed !important;
        inset: 0 !important;
        opacity: 1 !important;
        visibility: visible !important;
        display: block !important;
        background: linear-gradient(90deg, red, blue) !important;
        z-index: 0 !important;
      }
      html::before {
        content: "" !important;
        position: fixed !important;
        inset: 0 !important;
        opacity: 1 !important;
        visibility: visible !important;
        display: block !important;
        background: linear-gradient(90deg, red, blue) !important;
        z-index: 0 !important;
        pointer-events: none !important;
      }
      .page-shell {
        position: relative !important;
        z-index: 1 !important;
      }
    `,
  });

  const bProbeScreenshot = await page.screenshot({
    path: path.join(outDir, `b_probe_${label}.png`),
    fullPage: true,
  });
  phaseData.bProbeScreenshot = bProbeScreenshot;

  const coveringDump = await collectCoveringElements(page);
  phaseData.coveringDump = coveringDump;
  await writeJson(`c_covering_elements_${label}.json`, coveringDump);

  const cScreenshot = await page.screenshot({
    path: path.join(outDir, `c_${label}.png`),
    fullPage: true,
  });
  phaseData.cScreenshot = cScreenshot;

  await browser.close();
  return { ...phaseData, consoleEntries };
}

const chromiumResults = await runPhase(chromium, "chromium");
const webkitResults = await runPhase(webkit, "webkit");

await writeJson("a_loaded_styles.json", {
  chromium: chromiumResults.loadedStyles,
  webkit: webkitResults.loadedStyles,
});

const combinedConsole = [
  "Chromium console:",
  ...(chromiumResults.consoleEntries || []),
  "",
  "WebKit console:",
  ...(webkitResults.consoleEntries || []),
].join("\n");
await writeText("a_console.txt", combinedConsole);

await writeText(
  "a_conclusion.txt",
  "Phase A complete. Loaded stylesheet data and initial screenshots captured."
);
await writeText(
  "b_conclusion.txt",
  "Phase B complete. Gradient diagnostics and probe screenshots captured."
);
await writeText(
  "c_conclusion.txt",
  "Phase C complete. Covering element scan and screenshots captured."
);

phaseLog.push({ phase: "A", status: "completed" });
phaseLog.push({ phase: "B", status: "completed" });
phaseLog.push({ phase: "C", status: "completed" });

console.log("Phase results:", {
  chromium: {
    a: chromiumResults.aScreenshot,
    b: chromiumResults.bProbeScreenshot,
    c: chromiumResults.cScreenshot,
  },
  webkit: {
    a: webkitResults.aScreenshot,
    b: webkitResults.bProbeScreenshot,
    c: webkitResults.cScreenshot,
  },
});

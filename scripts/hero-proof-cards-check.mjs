import { chromium } from "playwright";

const baseUrl =
  process.env.SCREENSHOT_URL ||
  process.env.BASE_URL ||
  "http://localhost:3000";

const labels = ["Loop Coverage", "Core Systems", "Operating Posture"];

async function checkViewport({ width, height }, expectPresent) {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width, height } });

  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.waitForTimeout(200);

  const failures = [];
  for (const label of labels) {
    const count = await page.locator(`text=${label}`).count();
    const isPresent = count > 0;
    if (expectPresent && !isPresent) {
      failures.push(`Expected "${label}" to be present at ${width}px.`);
    }
    if (!expectPresent && isPresent) {
      failures.push(`Expected "${label}" to be absent at ${width}px.`);
    }
  }

  await browser.close();
  return failures;
}

const failures = [
  ...(await checkViewport({ width: 375, height: 812 }, false)),
  ...(await checkViewport({ width: 1200, height: 900 }, true)),
];

if (failures.length) {
  console.error("Hero proof card checks failed:");
  failures.forEach((line) => console.error(`- ${line}`));
  process.exitCode = 1;
} else {
  console.log("Hero proof card checks passed.");
}

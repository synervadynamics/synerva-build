# Expanded Chrome Rendering Diagnostic

## Phase Log
- Phase 1 (Stacking fix): Set `.global-gradient` z-index to 0, `.page-shell` z-index to 1, added `html { background: #02050b; }`. Result: Chromium screenshot still flat/near-white; WebKit also flat in automation.
- Phase 2 (Compositor stability): Disabled `.cursor-spotlight-layer` via `display: none !important;`. Result: Chromium screenshot still flat/near-white; no visible multi-layer gradients.
- Phase 3 (Painting guarantee): Moved gradient painting to `html::before` and removed it from `.global-gradient`. Result: Chromium screenshot still flat/near-white; no visible gradients in automation.

## CSS After Each Phase
### Phase 1
- `.global-gradient { z-index: 0; }`
- `.page-shell { position: relative; z-index: 1; }`
- `html { background: #02050b; }`

### Phase 2
- `.cursor-spotlight-layer { display: none !important; }`

### Phase 3
- `html::before` holds all gradient layers with `position: fixed; inset: 0; z-index: 0;`
- `.global-gradient` background removed, `::before` set to `content: none;`

## Playwright Screenshots
- Chromium: `diagnostics-rendering/chromium-gradient.png`
- WebKit: `diagnostics-rendering/webkit-gradient.png`

## Data Collection Commands
### A) chrome://gpu info (manual)
1) Open Chrome and navigate to `chrome://gpu`
2) Copy the full page content and paste it into this file under a new section titled `chrome://gpu`.

### B) Console logs filtered for rendering/compositing
Paste this in DevTools Console and then reload the page:
```js
const keywords = ["background", "composite", "gpu", "layer", "mask", "blend"];
const matches = [];
const orig = console.log;
console.log = (...args) => {
  const text = args.map(String).join(" ").toLowerCase();
  if (keywords.some((k) => text.includes(k))) {
    matches.push(args);
  }
  orig(...args);
};
window.__renderLogMatches = matches;
```
After reload, run:
```js
window.__renderLogMatches
```
Copy the output into this file under a new section titled `Console Logs`.

### C) Computed styles (DevTools Console)
Run this in the Console and paste the output into this file under `Computed Styles`:
```js
function dumpComputed(sel) {
  const el = document.querySelector(sel);
  if (!el) return { selector: sel, error: "not found" };
  const cs = getComputedStyle(el);
  return {
    selector: sel,
    position: cs.position,
    zIndex: cs.zIndex,
    isolation: cs.isolation,
    background: cs.background,
    backgroundImage: cs.backgroundImage,
    mixBlendMode: cs.mixBlendMode,
    opacity: cs.opacity,
    transform: cs.transform,
    willChange: cs.willChange,
  };
}
[
  dumpComputed(".global-gradient"),
  dumpComputed(".global-gradient::before"),
  dumpComputed(".cursor-spotlight-layer"),
  dumpComputed("html"),
  dumpComputed("body"),
]
```

## Minimal Reproduction Snippet
```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root {
        --g1: rgba(88, 229, 255, 0.24);
        --g2: rgba(255, 170, 120, 0.2);
        --g3: rgba(170, 255, 210, 0.18);
        --g4: rgba(255, 214, 120, 0.14);
      }

      html {
        background: #02050b;
      }

      html::before {
        content: "";
        position: fixed;
        inset: 0;
        z-index: 0;
        pointer-events: none;
        background:
          radial-gradient(circle at 20% 15%, rgba(120, 210, 255, 0.072), transparent 42%),
          radial-gradient(circle at 85% 70%, rgba(255, 190, 140, 0.072), transparent 48%),
          linear-gradient(120deg, rgba(3, 6, 13, 0.828), rgba(2, 4, 9, 0.882)),
          radial-gradient(circle at 50% 50%, var(--g1), transparent 32%),
          radial-gradient(circle at 18% 30%, var(--g2), transparent 38%),
          radial-gradient(circle at 82% 51%, var(--g3), transparent 38%),
          radial-gradient(circle at 45% 85%, var(--g4), transparent 45%),
          linear-gradient(135deg, #02050b, #050910 40%, #04070f);
        background-size: 240% 240%;
        animation: global-flow 48s ease-in-out infinite alternate;
      }

      @keyframes global-flow {
        0% {
          background-position: 0% 0%;
        }
        50% {
          background-position: 60% 50%;
        }
        100% {
          background-position: 100% 80%;
        }
      }

      body {
        margin: 0;
        min-height: 200vh;
        color: #f4fbff;
        background: transparent;
      }

      .page-shell {
        position: relative;
        z-index: 1;
        padding: 40px;
      }

      .card {
        width: 280px;
        height: 180px;
        background: rgba(255, 255, 255, 0.06);
        border-radius: 16px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
      }
    </style>
  </head>
  <body>
    <div class="page-shell">
      <h1>Gradient Diagnostic</h1>
      <div class="card"></div>
    </div>
  </body>
</html>
```

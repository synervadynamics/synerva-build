# Chrome Rendering Diagnostic Report

Status: Chrome still renders a flat gray background after Phase 1-4 fixes. Escalation required.

## Environment
- Safari version: [REQUIRED] (from Safari About)
- Chrome version: [REQUIRED] (from chrome://version)
- OS + version: [REQUIRED]
- GPU / rendering backend (Chrome): [REQUIRED] (from chrome://gpu, Graphics Feature Status + ANGLE backend)
- GPU / rendering backend (Safari): [REQUIRED] (from Safari Develop > Experimental Features / system info)

## Failure Summary
- Symptom: layered, scroll-responsive gradient background collapses to flat gray with a single light artifact in Chrome.
- Safari: renders expected multi-layer gradients and scroll evolution.
- Chrome: no gradient layering; gray fallback.

## Relevant DOM Structure
From `src/app/layout.tsx`:
- `body`
  - `.global-gradient` (fixed overlay root)
    - `.cursor-spotlight-layer` (blend/blur layer)
  - `BackgroundDynamics` (JS updates CSS vars)
  - `CursorLayer`
  - `.page-shell` (content)

## CSS: html / body / gradient layers
From `src/styles/globals.css`:

```css
html,
body {
  height: 100%;
  background: transparent;
}

body {
  color: var(--ink);
  font-family: "Space Grotesk Variable","Inter",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
  position: relative;
  isolation: isolate;
  background: transparent;
}

.global-gradient {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  isolation: isolate;
  background:
    radial-gradient(circle at 20% 15%, rgba(120, 210, 255, 0.072), transparent 42%),
    radial-gradient(circle at 85% 70%, rgba(255, 190, 140, 0.072), transparent 48%),
    linear-gradient(120deg, rgba(3, 6, 13, 0.828), rgba(2, 4, 9, 0.882));
}

.global-gradient::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(circle at var(--grad-x, 50%) var(--grad-y, 50%), rgba(120, 160, 255, 0.35), transparent 60%),
    radial-gradient(circle at var(--grad-x, 50%) var(--grad-y, 50%), var(--g1, rgba(88, 229, 255, 0.22)), transparent 32%),
    radial-gradient(circle at 18% 30%, var(--g2, rgba(255, 126, 189, 0.14)), transparent 38%),
    radial-gradient(circle at 82% 51%, var(--g3, rgba(122, 255, 190, 0.16)), transparent 38%),
    radial-gradient(circle at 45% 85%, var(--g4, rgba(255, 214, 102, 0.12)), transparent 45%),
    radial-gradient(circle at 60% 25%, var(--g5, rgba(175, 144, 255, 0.12)), transparent 40%),
    radial-gradient(circle at 30% 78%, var(--g6, rgba(255, 132, 180, 0.1)), transparent 42%),
    radial-gradient(circle at 72% 58%, var(--g7, rgba(120, 210, 255, 0.1)), transparent 40%),
    radial-gradient(circle at 22% 62%, var(--g8, rgba(255, 210, 160, 0.1)), transparent 44%),
    linear-gradient(135deg, #02050b, #050910 40%, #04070f);
  background-size: 240% 240%;
  animation: global-flow 48s ease-in-out infinite alternate;
  mix-blend-mode: normal;
  opacity: var(--bg-opacity, 1);
  transform: translate3d(0, var(--bg-shift, 0px), 0) scale(1.02);
  will-change: transform, opacity, filter, background-position;
  backface-visibility: hidden;
}

.cursor-spotlight-layer {
  position: absolute;
  inset: -20%;
  pointer-events: none;
  mix-blend-mode: screen;
  opacity: calc(0.32 + (var(--cursor-speed, 0) * 0.4));
  transition: opacity 80ms ease;
  transform: translateZ(0);
  will-change: transform, opacity;
  backface-visibility: hidden;
}

.cursor-spotlight-layer::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(
    circle at var(--cursor-x, 50%) var(--cursor-y, 50%),
    rgba(255, 255, 255, 0.3) 0%,
    rgba(120, 210, 255, 0.28) 10%,
    rgba(6, 10, 20, 0) 26%
  );
  filter: blur(1px);
  transform: translateZ(0);
  will-change: transform, filter, background-position;
  backface-visibility: hidden;
}
```

## Computed Styles Comparison (Safari vs Chrome)
[REQUIRED] Provide computed values for:
- `.global-gradient` (position, z-index, background, transform, isolation)
- `.global-gradient::before` (background image list, opacity, transform, animation, will-change)
- `.cursor-spotlight-layer` (blend mode, opacity)
- `body` (isolation, background)

## JS-Driven Variables (Scroll / Pointer)
From `src/components/BackgroundDynamics.tsx`:
- CSS vars updated: `--grad-x`, `--grad-y`, `--cursor-x`, `--cursor-y`, `--cursor-speed`, `--bg-shift`, `--bg-opacity`, `--g1..--g8`.
- Scroll uses stepped thresholds (5% increments) to update `--bg-shift` and `--bg-opacity`.

## Console Warnings / Errors
[REQUIRED] Paste any warnings or errors from Chrome console related to rendering, masks, filters, or compositing.

## Screenshots (Descriptions)
[REQUIRED]
- Safari: describe expected gradient layering and scroll evolution.
- Chrome: describe flat gray state and any light artifacts.

## Attempted Strategies (Phase Log)
1) Phase 1 Audit: Identified fixed overlays, blend/blur, masks; no `background-attachment: fixed`.
2) Phase 2 Isolation: Merged backdrop + gradients + cursor into a single fixed overlay root; removed extra fixed overlays.
3) Phase 3 Mask/Filter Pass: Added `-webkit-mask-image` where used; split blur and blend into separate layer.
4) Phase 4 Scroll Replacement: Removed CSS scroll-based gradient positioning; replaced with JS-driven transform/opacity on fixed gradients using scroll thresholds.

## Why Chrome Might Behave Differently
- Chrome’s compositor is more sensitive to large, layered gradients combined with fixed positioning and blend/blur effects, which can trigger fallback rendering.
- Chrome sometimes collapses complex background layers into a single fallback color when it fails to allocate a composited layer or hits GPU limits.

## Next Steps for Human Escalation
- Capture the required environment and computed-style details.
- Test with Chrome flags:
  - Disable GPU compositing to confirm if it is a GPU fallback issue.
  - Toggle `chrome://flags/#enable-experimental-web-platform-features`.
- Consider reducing gradient layer count or moving to Canvas/WebGL if Chrome GPU path is unstable.


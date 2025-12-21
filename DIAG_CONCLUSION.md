# Rendering Diagnostics Conclusion

## Root cause
- The global gradient was not on `.global-gradient`; it lived on `html::before`. Any tooling or expectations aimed at `.global-gradient` saw `background-image: none` even though the gradient was active elsewhere.
- Playwright headless runs show Chromium and WebKit behave the same: gradient layer exists, animates, and is visible in probes, so this is not an engine-only failure.

## Fix
- Moved the full gradient stack from `html::before` to the fixed `.global-gradient` layer in `src/styles/globals.css` and removed the `html::before` gradient.
- Ensured the gradient layer paints without negative z-index and `.page-shell` stays above it.

## Why Safari differed
- Safari screenshots were taken with the gradient active on `html::before`, while automation/harness checks were effectively looking at `.global-gradient`. This created a mismatch in what appeared “present” depending on how the layer was inspected.

## Verification
- Phase A-C: CSS loaded, route correct, no covering elements, probe renders (see `diagnostics-rendering/a_loaded_styles.json`, `diagnostics-rendering/b_style_dump_chromium.json`, `diagnostics-rendering/b_style_dump_webkit.json`, `diagnostics-rendering/c_covering_elements_chromium.json`, `diagnostics-rendering/c_covering_elements_webkit.json`).
- Phase D: Animation active in both engines, timing not the issue (`diagnostics-rendering/d_style_dump_chromium.json`, `diagnostics-rendering/d_style_dump_webkit.json`).
- Phase E: Gradient is now on `.global-gradient` in both engines (`diagnostics-rendering/f_style_dump_chromium.json`, `diagnostics-rendering/f_style_dump_webkit.json`); final screenshots saved to `diagnostics-rendering/f_final_chromium.png` and `diagnostics-rendering/f_final_webkit.png`.

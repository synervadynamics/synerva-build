# Synerva Build Operator Document

Use this document as the governing brief for any browser-based GPT, AI design assistant, or implementation agent working on the Synerva Dynamics website. This is not a brainstorming prompt. This is an operating manual.

## 1. Purpose

This document exists to solve one problem:

The Synerva website can no longer be treated as a loose collection of pages, experiments, and visually interesting ideas. It must now be treated as a system.

The goal is not to make the site perfect before growth. The goal is to establish enough structural, visual, and operational discipline that new work can be added without making the repo harder to understand, harder to maintain, or easier to break.

This document defines:

- what the current repo state is
- what is already stable enough to build on
- what is still too risky
- what rules must govern all future work
- what browser GPT is allowed to do
- what browser GPT must not do
- how new work should be judged before it is accepted

This is the control layer for future AI-assisted work.

## 2. Core Decision

### Current status

**The build is almost ready, but still needs a targeted baseline pass before major expansion.**

That means:

- the repo is not chaotic
- the repo is understandable
- there are several strong patterns already in place
- but inconsistency is still high enough that unchecked expansion would likely create drift and future cleanup debt

### What this means operationally

The site is not in rewrite territory.

The site is in "govern tightly before expanding" territory.

Future work should therefore follow this order:

1. stabilize baseline patterns
2. normalize key architecture and design rules
3. only then add major new public-facing feature areas

## 3. High-Level Audit Summary

Across the audit series, the repo showed the following:

### What is working

- route structure is readable
- the app is navigable
- homepage section structure is relatively strong
- product-page reuse is good
- the `dimensions` area proves multi-page subsections can work
- visual direction is broadly coherent
- several shared primitives already exist

### What is not yet safe

- duplicated mobile shell systems
- overlapping asset folder structures
- broad content ownership in giant shared copy buckets
- mixed styling ownership between globals, modules, and inline classes
- large one-file pages in key areas
- an overly engineered homepage relative to the maturity of the rest of the system
- repeated behavior-rich gallery logic
- uneven UI consistency across routes

### Bottom line

The build is usable and real.  
It is not yet disciplined enough for casual expansion.

## 4. Repo Reality: What Browser GPT Must Understand

Browser GPT must assume the following about this project:

- This is a live Synerva Dynamics website build.
- The repo is partially organized, not fully normalized.
- Some parts of the site already feel stable.
- Some parts still behave like evolving experiments.
- The biggest risk is not bad code.
- The biggest risk is drift:
  - structural drift
  - style drift
  - asset drift
  - interaction complexity drift
  - duplication drift

Browser GPT must therefore optimize for:

- predictability
- clear ownership
- repeatability
- low ambiguity
- minimum necessary complexity

Browser GPT must not optimize for:

- novelty for its own sake
- more interactivity unless clearly justified
- visual tricks that increase maintenance burden
- abstract best-practice refactors detached from repo evidence

## 5. Current Structural Baseline

### Top-level repo status

The repo is understandable enough to work in. The main application lives in `src`, assets live in `public`, and there are clear support/quarantine folders. This is acceptable.

However, the repo still contains clutter and side-structures that reduce confidence:

- quarantine/support/archive folders at the top level
- stray `.DS_Store` files
- suspicious non-app leftovers like `synerva-build-official` and `push-marker.txt`

These are not fatal problems. But they are signs that the repo is not yet fully settled.

### Route baseline

The route tree is readable. A person can look at `src/app` and understand the site map quickly.

Strong route areas:

- homepage
- merch
- contact
- product pages
- dimensions subsection

Weaker route areas:

- systems as a full cross-device pattern
- cases as a real scalable case-study system
- dimensions index page as a polished destination
- placeholder slug routes

### Ownership baseline

Ownership is mostly understandable by route, which is good.

The main weakness is inconsistency:

- some areas are decomposed into clear sections
- some areas are just very large single files
- some shared systems are actually repeated copies

That means the repo is understandable, but not yet consistently governable.

## 6. Current Design System Baseline

### What is already coherent

The site does have a real visual language.

Current recurring design signals:

- dark atmospheric backgrounds
- layered overlays
- blur and glass-like treatment
- rounded bordered panels
- centralized max-width containers
- uppercase eyebrow plus large headline plus softer body copy
- rounded CTA pills
- framed image presentation
- subpage full-background treatment

This is enough to say the site has a baseline design direction.

### What is not yet standardized

The issue is not absence of design language.  
The issue is uneven enforcement.

The homepage behaves like a stronger system than many subpages.  
Typography roles exist, but are not consistently used.  
CTA behavior exists, but is not consistently shared.  
Spacing rhythm exists, but is not evenly governed.  
Some routes feel like mature members of the same site.  
Others feel like adjacent one-off implementations.

Conclusion:

The UI system is **partially coherent, still inconsistent**.

## 7. Expansion Readiness Summary

The current architecture can support growth, but only if growth happens under tighter rules.

### New standalone pages

Possible now, but current page-assembly patterns are not standardized enough.

### Blog

Feasible, but should wait until content ownership rules are normalized.

### Case studies / portfolio system

Feasible, but risky right now because the current cases area is not yet a real content architecture.

### Multi-page sub-sites

Possible, because `dimensions` proves the concept. But future sub-sites should not be allowed to invent their own patterns.

### Main expansion risk

The repo is currently at a point where new work could either:

- extend the system
- or create a second system

That fork is the entire issue.

## 8. Complexity and Stability Summary

### Main complexity concentration

The homepage is the main risk concentration.

It contains:

- multiple motion systems
- scroll orchestration
- section glow logic
- interactive section behavior
- heavy visual logic
- many client-side dependencies

This is survivable now, but it is ahead of the maturity level of the rest of the codebase.

### Cross-cutting complexity risks

Browser GPT must treat these as high-risk areas:

- global background and visual systems
- typography compression behavior
- custom cursor system
- view mode toggles
- duplicated gallery/lightbox systems
- repeated mobile shell logic

These are not automatically bad.  
But they are exactly the kind of things that become roadblocks for a solo operator when future work piles on.

## 9. Stable Standards: What Is Good Enough to Treat as Baseline

These are current patterns/components that should be treated as acceptable baseline standards unless there is a strong reason to replace them:

### Structural standards

- readable route-based organization under `src/app`
- homepage section decomposition model
- shared metadata helper
- shared product page model
- route-local page folders for major areas
- subsection grouping for domain clusters like `dimensions`

### UI standards

- dark atmospheric base
- rounded framed panel treatment
- max-width centered content layout
- eyebrow/headline/body text hierarchy
- restrained pill-style CTA treatment
- framed editorial/portrait image presentation
- subpage static background treatment

### Component standards

- `CtaPill`
- `ProductPage`
- `SubpageStaticBackground`
- `Footer`
- homepage section pattern

These are the strongest candidates for "this is part of the system."

## 10. Unsafe Areas: What Is Still Too Risky to Treat as Stable

These are not baseline-safe yet and should not be copied forward casually.

### 1. Duplicated mobile shell system

Problem:

- Multiple near-identical mobile shell components and duplicated shell CSS.

Risk:

- repeated fixes
- inconsistent behavior
- future drift

### 2. Overlapping asset taxonomies

Problem:

- Same domains split across parallel asset folders.

Risk:

- stale assets
- wrong file reuse
- confusion about what is current

### 3. Giant shared content ownership

Problem:

- `copy.ts` is too broad.

Risk:

- future content systems become tangled
- AI edits become riskier
- content architecture weakens as scale increases

### 4. Mixed styling ownership

Problem:

- styles currently live across globals, route modules, and inline utility-heavy JSX.

Risk:

- hard-to-trace changes
- inconsistency
- page-specific exceptions multiplying

### 5. Large route-local one-off files

Problem:

- some important pages are very large and only loosely modular.

Risk:

- bottlenecks
- harder iteration
- more brittle future changes

### 6. Overbuilt homepage interaction layer

Problem:

- homepage contains too much technical choreography relative to broader system maturity.

Risk:

- maintenance burden
- harder debugging
- future visual changes become expensive

### 7. Repeated gallery and modal interaction logic

Problem:

- similar but non-centralized interaction logic across visual areas.

Risk:

- bugs repeated across copies
- hard to maintain consistently

## 11. Minimum Baseline Actions Required Before Major Growth

This is the minimum required action list. These are not nice-to-haves. These are the smallest moves that materially reduce future chaos.

### Action 1: Unify the mobile shell pattern

**Area**

- homepage mobile shell
- systems mobile shell
- merch mobile shell
- dimensions mobile shell
- shell CSS files

**Why it matters**

This is the most obvious avoidable duplication in the repo.

**Risk removed**

- inconsistent mobile behavior
- repeated fixes
- architectural drift in new routes

**Priority**

Critical

### Action 2: Normalize asset taxonomy by domain

**Area**

- offerings-related folders
- merch-related folders
- systems-related folders
- subpage backgrounds
- future content/media folders

**Why it matters**

Asset sprawl will scale faster than code sprawl.

**Risk removed**

- wrong file usage
- stale version confusion
- "where does this belong?" decisions on every new page

**Priority**

Critical

### Action 3: Split content ownership into domain-specific files

**Area**

- `src/data/copy.ts`
- related page content structures

**Why it matters**

A single broad content bucket is not sustainable for blog, portfolio, and sub-site growth.

**Risk removed**

- unclear ownership
- risky edits
- tangled content systems

**Priority**

Critical

### Action 4: Standardize page assembly rules

**Area**

- all route folders under `src/app`
- page-specific component placement
- route-local style placement
- metadata/layout conventions

**Why it matters**

The repo currently allows too many acceptable patterns.

**Risk removed**

- inconsistent route creation
- harder AI-assisted work
- weaker expansion governance

**Priority**

Important

### Action 5: Normalize styling ownership boundaries

**Area**

- `globals.css`
- route-level CSS modules
- inline-heavy route files

**Why it matters**

Styling is readable now, but not governed tightly enough to scale.

**Risk removed**

- style drift
- hard-to-find behavior
- inconsistent page-level design implementation

**Priority**

Important

### Action 6: Consolidate repeated gallery/lightbox behavior

**Area**

- merch catalog
- dimensions gallery systems
- any future media-heavy page systems

**Why it matters**

These are rich interaction systems and currently repeat similar logic.

**Risk removed**

- repeated bug surfaces
- inconsistent behavior
- duplicated maintenance burden

**Priority**

Important

### Action 7: Trim low-value global complexity before adding more major areas

**Area**

- homepage glow system
- typography compression controller
- custom cursor
- view mode toggle
- any globally active visual behavior not clearly tied to business value

**Why it matters**

These systems increase maintenance burden faster than they increase strategic value.

**Risk removed**

- hidden fragility
- global side effects
- complexity load for future expansion

**Priority**

Important

## 12. Work That Must Wait Until After Baseline Stabilization

The following should not proceed before the baseline pass is complete:

- blog/content infrastructure
- major portfolio/case-study system expansion
- fictional brand sub-sites
- large case-study sub-sites
- major new animation systems
- broad visual redesigns
- aesthetic experimentation unrelated to baseline stabilization
- performance micro-optimizations and polish passes

Reason:

These will magnify the current inconsistencies instead of solving them.

## 13. Browser GPT Operating Rules

When using this document as a control prompt, browser GPT must obey the following rules.

### Rule 1: Respect the current system

Do not invent a new architecture if the repo already has a reasonable pattern for the same type of work.

### Rule 2: Prefer normalization over invention

When a pattern is duplicated or inconsistent, align with the strongest existing baseline instead of creating a third version.

### Rule 3: Do not add major new feature areas until baseline issues are resolved

If asked to build blog systems, case-study systems, or mini sub-sites before baseline stabilization, browser GPT should say so and recommend baseline work first.

### Rule 4: Avoid low-value complexity

Do not introduce:

- new custom motion systems
- new global interaction systems
- new heavy animation frameworks
- new decorative complexity

unless explicitly justified by business need

### Rule 5: Minimize duplicated patterns

Before creating:

- new shells
- new gallery systems
- new content structures
- new route assembly patterns

browser GPT must first check whether a shared or stronger pattern already exists.

### Rule 6: Treat assets as part of architecture

Do not casually create new asset folder patterns. Every new asset set must belong to a clearly named domain folder.

### Rule 7: Keep styling ownership legible

Do not solve style problems by scattering fixes across globals, modules, and inline styles at the same time. Prefer the simplest ownership model that matches the route.

### Rule 8: Honor the baseline visual language

All new work should preserve the current stable visual signals:

- dark atmospheric base
- framed rounded panels
- centered content widths
- restrained CTA style
- structured editorial hierarchy
- consistent image presentation

### Rule 9: Flag drift explicitly

If proposed work would:

- create another page assembly pattern
- create another mobile shell pattern
- introduce another asset taxonomy
- bypass existing reusable patterns

browser GPT must explicitly say so

### Rule 10: No rewrite recommendations without hard evidence

The correct frame for this repo is targeted stabilization, not replacement.

## 14. How Browser GPT Should Judge Future Work

Any proposed change should be evaluated against five questions:

1. Does this extend the current system, or create a second system?
2. Does this reduce ambiguity, or increase it?
3. Does this improve repeatability for future pages?
4. Does this add meaningful business value relative to its complexity?
5. Would a solo operator be more in control after this change, or less?

If the answer pattern is unclear or mixed, the work is probably not baseline-safe.

## 15. Definition of "Baseline Safe"

A change is baseline-safe if it does at least one of the following:

- clarifies ownership
- reduces duplication
- standardizes a repeatable pattern
- makes future route creation more predictable
- makes style behavior easier to understand
- makes assets easier to organize and reuse
- reduces fragile global behavior

A change is not baseline-safe if it mainly does one of the following:

- adds visual complexity without structural benefit
- adds a new route pattern when one already exists
- adds a new interaction system without necessity
- creates one more exception to an already inconsistent system
- makes the site more impressive but less governable

## 16. Safe Next Step

If browser GPT is asked what to do first, the answer should be:

**Standardize the shared page shell pattern first, beginning with mobile shells and route-level page assembly conventions.**

Why this is the best next move:

- it removes obvious duplication
- it creates a standard for future routes
- it improves solo maintainability immediately
- it reduces drift before blog, portfolio, or sub-site work begins

## 17. Scorecard Summary

Current repo scorecard:

- Route organization: Yellow
- File ownership clarity: Yellow
- Asset organization: Red
- Styling organization: Yellow
- Expansion readiness: Yellow
- UI/design consistency: Yellow
- Technical complexity: Yellow
- Solo-maintainability: Yellow

Interpretation:

This is not a repo in collapse.  
This is a repo at a governance threshold.

## 18. Final Decision Statement

**This build is almost ready, but it needs one targeted baseline pass before major expansion.**

If that baseline pass is completed successfully, this repo becomes a credible foundation for:

- new public-facing pages
- a blog/content layer
- portfolio/case-study infrastructure
- controlled sub-sites inside the main repo

If that baseline pass is skipped, future growth will likely harden inconsistency into the architecture and make the project feel progressively less controllable.

## 19. Direct Instruction for Browser GPT

Use the following behavior model:

> Treat the Synerva website as a partially stabilized system that must now be normalized before major expansion. Preserve existing strong patterns. Reduce duplication. Improve predictability. Do not add decorative complexity. Do not introduce new architectural patterns unless required. Prioritize changes that improve control, consistency, and future maintainability for a solo operator.

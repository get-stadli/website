# Astro Baseline
A boring, production-ready Astro starter.

Astro Baseline is an HTML-first starter designed for developers who want a clean foundation, not a framework demo.

No UI kit.<br>
No runtime JavaScript by default.<br>
No magic.

Just solid structure, senior defaults, and a clear separation of concerns.

## Philosophy

Astro Baseline follows a simple rule:

**HTML is the source of truth.**

- Structure lives in `.astro` files
- Content lives in data (`site.ts`, Markdown, YAML, etc.)
- Behavior is opt-in and explicit
- CSS is boring, predictable, and layered

This starter is meant to disappear once you start building.

## What you get

### Structure

- Clean layout system (`Base.astro`)
- Header / Footer components
- Skip link for accessibility
- 404 page included
- Predictable file organization

### SEO (done properly)

- Centralized SEO.astro component
- Canonical URLs
- Open Graph & Twitter cards
- JSON-LD support (opt-in, per page)
- Robots meta handling
- Theme color

### Accessibility basics

- Skip link (SkipLink.astro)
- Semantic HTML
- Focusable main content
- No JS-only interactions

### CSS architecture

No framework. No Tailwind by default.

Layered CSS structure:

```
src/styles/
├─ global.css
├─ partials/
│  ├─ tokens.css      // design tokens (colors, spacing, fonts)
│  ├─ reset.css       // minimal reset
│  ├─ fonts.css       // @font-face declarations
│  ├─ behaviors.css   // behavior-related CSS (x-dialog, etc.)
│  └─ structure.css   // layout & base styles
```

- BEM-friendly
- Easy to delete or replace
- Easy to extend

### Stadli design layer

The visual style follows the Stadli marketing site: black page, white rounded
"sheets" that lap over dark bands, Instrument Sans with tight display tracking.

- Tokens live in `tokens.css` (`--d-*` for fixed values, `--dc-*` for values that
  flip on black; add `.on-black` to a wrapper to switch).
- Primitives in `structure.css`: `.d-wrap`, `.d-sheet` (+ `--lap`, `--narrow`, `--last`),
  `.d-band`, `.d-display`, `.d-heading`, `.d-quote`, `.d-lede`, `.d-text`, `.d-btn`
  (+ `--light`), `.d-arrow`, `.d-badge`, `.d-field`.
- Sections in `src/components/sections/`: `Hero`, `FeatureScroll`, `CardGrid`,
  `LogoStrip`, `DemoCta`. Inner pages use `PageTop` followed by a lapping sheet.
- JS is small and opt-in: the header turns solid on scroll and the feature list pins
  on wide screens. Without JS the header is solid and panels stack.

### Fonts

- Instrument Sans (OFL) served from `/public/fonts/InstrumentSans.woff2`
- Explicit @font-face, preloaded in `Base.astro`
- No external font dependency

### Configuration as data

All site metadata lives in one place:

```
// src/content/site.ts
export const site = {
  name,
  tagline,
  description,
  url,
  locale,
  author,
  nav,
  seo
};
```

Used consistently across:

- Header
- Footer
- SEO
- Pages
- JSON-LD

No duplication.

## Marketing pages

- `/` homepage, `/platform/<slug>` (Ticketing & Commerce, Fan CRM, Marketing Tools,
  Intelligence & AI) and `/solutions/<slug>` (Sport Teams, Live Events).
- Copy lives in data: `src/content/platform.ts` and `src/content/solutions.ts`; the
  homepage reuses their summaries. Each page is a stack of sections from
  `src/components/sections/` (`Hero`, `FeatureScroll`, `FeatureChecklist`,
  `FeatureOverview`, `CardGrid`, `Testimonial`, `LogoStrip`, `Faq`, `DemoCta`).
- Header links can have a dropdown: add `children` to an item in `site.nav`.

## Articles (blog)

Articles, case studies and news live in `src/content/articles/` as Markdown, one file
per entry, using an Astro content collection (`src/content.config.ts`). The file name
becomes the URL: `src/content/articles/my-post.md` → `/articles/my-post`.

```
---
title: How the Lakeshore Mariners filled the third homestand
excerpt: One or two sentences, shown on cards and under the title.
type: case-study          # article | case-study | news
date: 2026-06-15
image: /images/articles/lakeshore-mariners-third-homestand.webp
kicker: Lakeshore Mariners · Baseball, summer league   # optional grey line
minutes: 9                # optional, articles only
client:                   # optional, case studies: side panel
  name: Lakeshore Mariners
  results:
    - { figure: "+38%", label: Season tickets renewed }
  products: [Ticketing, Fan CRM]
---
```

- `/articles` lists everything with search, type filters (`?type=news`) and pages of 6,
  all client-side; without JS every entry shows.
- Article pages have a photo hero, the body, the client panel for case studies and a
  "Keep reading" row with the three latest other entries.
- Set `draft: true` to hide an entry.

## Layout API

The layout is explicit and declarative.

Example:

```
<Base
  title="Contact"
  description="Get in touch"
  canonicalPath="/contact"
  mainCentered
>
  ...
</Base>
```

Supported layout flags:

- `mainCentered` (example)
- Easy to extend (`mainWide`, `mainNarrow`, etc.)

The layout never guesses.
Pages declare intent.

## JSON-LD (opt-in)

JSON-LD is rendered only if provided.

Example:

```
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url
};
```

Passed directly to the layout:

`<Base jsonLd={jsonLd}>`

No JSON-LD pollution by default.

## Environment

Astro Baseline expects the following environment variable:

`SITE_URL=https://example.com`

Create a `.env` file:

`cp .env.example .env`

Update `SITE_URL` with your domain.

Used for:
- Canonical URLs
- JSON-LD
- SEO consistency

Documented, explicit, predictable.

## Who this is for

This starter is for developers who:

- Prefer HTML over abstractions
- Care about SEO and accessibility
- Want a clean base, not opinions forced on them
- Are tired of over-engineered starters

If you want a UI kit or heavy interactivity out of the box, this is not for you.

## Who this is not for

- Page builders
- No-code tools
- “Install and ship in 5 minutes” demos
- Framework-centric mental models

## Extending Astro Baseline

Astro Baseline is designed to pair naturally with:

- **Astro Content Collections**
- **Build-time tools** (e.g. Frontmatter Core)
- **HTML-first behavior layers** (e.g. Web Components, Alpine.js)
- **Progressive enhancement**

You add complexity only when you need it.

## License

MIT

Do whatever you want.
Build good websites.

## Final note

Astro Baseline is intentionally boring.

That’s the point.

If you never think about this starter again once your project starts, it did its job.

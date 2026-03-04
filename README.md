# Lovin' Bowl — Shift4Shop Theme

Custom Shift4Shop storefront theme for **Lovin' Bowl**, a fresh dog food company.

## Quick Start

```bash
npm install
npm run generate   # generates nav-snippet.html from menu-config.json
npm run serve      # starts local dev server on http://localhost:3000
npm run lint       # runs htmlhint on frame.html
```

## File Structure

```
├── frame.html            # Main Shift4Shop template (the frame)
├── styles/
│   └── lovinbowl.css     # Modern theme stylesheet (CSS Grid, custom properties)
├── scripts/
│   └── lovinbowl.js      # Vanilla JS (mobile menu, search dialog, scroll-to-top, reveal-on-scroll)
├── menu-config.json      # Navigation menu configuration
├── generate-nav.js       # Generates nav-snippet.html from menu-config.json
├── nav-snippet.html      # Generated navigation HTML
├── serve.mjs             # Local development server
├── screenshot.mjs        # Puppeteer screenshot utility
└── screenshots/          # Auto-saved screenshots
```

## Modernization

### What Changed

The original `frame.html` was built on **Bootstrap 3 grid**, **jQuery spaghetti**, and **Fontello icons**. This modernization rewrites the presentation layer while preserving full Shift4Shop template engine compatibility.

| Area | Before | After |
|------|--------|-------|
| **Layout** | Bootstrap 3 grid (`col-md-4`, `row`, `container`) | CSS Grid + Flexbox via `.lb-*` classes |
| **Icons** | Fontello icon font (`icon-menu`, `icon-search`, etc.) | Inline SVGs (Lucide-style, 24×24, stroke-based) |
| **Search Modal** | Bootstrap modal (`#searchModal`) | Native `<dialog>` element |
| **Mobile Menu** | jQuery slide toggle | CSS `transform: translateX()` + vanilla JS class toggle |
| **Scroll Animations** | jQuery scroll listener (`revealOnScroll`) | `IntersectionObserver` API |
| **Scroll-to-top** | jQuery scroll handler | Vanilla JS with `requestAnimationFrame` |
| **Design Tokens** | Hardcoded values scattered across CSS | CSS custom properties (`:root` variables) |
| **Accessibility** | Minimal | Skip link, `aria-label`, `aria-expanded`, `aria-hidden`, `role="navigation"` |
| **Sticky Nav** | None | `position: sticky` category bar with `z-index: 100` |
| **Footer** | Bootstrap grid | CSS Grid (3-column desktop, stacking mobile) |

### What's Still Loaded (Backwards Compatibility)

These libraries are **intentionally kept** in the template because Shift4Shop's internal pages (checkout, account management, etc.) depend on them:

- **Bootstrap 3 CSS & JS** — `bootstrap.css`, `bootstrap.js`
- **core.css / core.js** — Shift4Shop system styles and scripts
- **jQuery 3.3.1 + Migrate** — Required by `core.js`, `main.js`, and quicksearch
- **Fontello CSS** — Icon font used by other Shift4Shop template pages
- **animate.css** — Scroll animation library (classes applied by our `IntersectionObserver`)

Our `.lb-*` prefixed styles override Bootstrap for the frame layout without breaking system pages.

### Shift4Shop Template Variables

All original template variables (`[TITLE]`, `[META]`, `[page_content]`, etc.) and block comment pairs (`<!--START: BLOCK-->...<!--END: BLOCK-->`) are preserved exactly — including the intentional typo `<!--END: SUB_CATEGORIEST-->`. The Shift4Shop engine requires these tokens at exact positions; removing or altering them breaks rendering.

### CSS Architecture

All new styles use the `.lb-` prefix to avoid collisions:
- `.lb-header`, `.lb-nav-bar`, `.lb-footer` — Layout components
- `.lb-container` — Max-width wrapper (replaces Bootstrap `.container`)
- `.lb-icon` — Inline SVG icon wrapper
- `.lb-sr-only` — Screen reader only text
- `.lb-hidden` — Display none utility

Design tokens are defined as CSS custom properties in `:root`:
```css
--lb-color-primary: #b5651d;    /* warm brown */
--lb-color-bg-warm: #faf4ed;    /* cream background */
--lb-max-width: 1200px;
--lb-spacing-md: 1rem;
/* ... etc */
```

### JavaScript Architecture

`scripts/lovinbowl.js` is a self-executing vanilla JS module with:
- `initMobileMenu()` — Off-canvas sidebar with overlay
- `initSearchDialog()` — Native `<dialog>` open/close
- `initScrollToTop()` — `requestAnimationFrame`-based visibility toggle
- `initRevealOnScroll()` — `IntersectionObserver` with `data-animation` / `data-timeout` support
- `initFooterLinksToggle()` — Mobile footer link accordion

All functions run on `DOMContentLoaded`. Zero jQuery dependency.

## Development

### Screenshots

```bash
# Start the server first
npm run serve

# Take a screenshot
node screenshot.mjs http://localhost:3000
node screenshot.mjs http://localhost:3000 homepage-desktop
```

### Nav Generation

Edit `menu-config.json`, then:
```bash
npm run generate
```

This outputs `nav-snippet.html` which can be used as a static nav reference. The actual Shift4Shop navigation uses `FRAME_CATEGORY` / `FRAME_MENU` server-side blocks.

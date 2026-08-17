# Hecuba Style (هکوبا استایل) — Project Context

This file is read automatically by Claude Code at the start of every session in this repo. It exists so you don't have to re-explain the project each time.

**Full original brief:** `docs/brief.md` (in this repo). That 78-section document is the source of truth for business rules, page-by-page content requirements, and every decision behind this build. This file is a *working summary* — architecture, conventions, and guardrails — not a replacement for it. If you're about to write new copy, add a page, or make a judgment call this file doesn't cover, check `docs/brief.md` first.

## What this is
A **Persian-language women's intimate apparel / loungewear e-commerce site**. This repo is a **static HTML/CSS/JS prototype** — not the final site. The end goal is a production build on **WordPress + WooCommerce + Elementor Pro + XPRO Theme Builder**. The prototype's architecture is deliberately kept simple/flat so it maps cleanly onto that stack later (see "WordPress mapping" below).

**Live site:** https://hamidzoghii.github.io/Hecuba-Style/ (GitHub Pages, auto-deploys on push to `main`)

## Hard constraints — do not violate these
- **Mobile-first, not desktop-responsive-from-desktop.** Base CSS = mobile. `@media (min-width: 768px)` and `@media (min-width: 1024px)` add tablet/desktop.
- **Fully RTL.** `<html lang="fa" dir="rtl">` on every page. Use logical CSS properties (`inset-inline-start/end`, not `left/right`) wherever direction matters.
- **One shared stylesheet (`css/style.css`) and one shared script (`js/main.js`) for the whole site.** Do not split into per-page CSS/JS files — this was an explicit requirement, not an oversight.
- **Placeholder images only** (`.ph-image` — gradient blocks with a text label), never real/hotlinked photos. This is a deliberate content-safety and brand-consistency decision, not a shortcut. Real product photography gets swapped in during the WordPress build.
- Every page shares identical `<header>`/`<footer>` markup (duplicated per page, not templated — there's no build step). If you edit the header or footer, **you must propagate the change to all 17 HTML files**, not just one.

## Brand voice & content guardrails (from the brief — easy to drift from without noticing)
- **Never let the site read as Adult/Explicit/Sexual.** Positioning is Fashion + Beauty + Confidence + Comfort, not a lingerie-shock-value store. This applies to copy, imagery choices, and layout equally — a rule for *content decisions*, not just the placeholder-image policy above.
- **Brand personality:** زنانه، جذاب، متنوع، صمیمی، مدرن (feminine, appealing, varied, warm/approachable, modern).
- **Content tone for any new copy:** intimate/warm, feminine, confident, modern, short, informal-but-professional. Avoid clichés like "بهترین کیفیت با ارزان‌ترین قیمت."
- **Color discipline:** Sage/olive is the dominant brand family; burgundy (`--color-cta`) is a *conversion accent only* — cap it around 3–5% of any given screen (CTAs, sale badges, discount emphasis). If a section is turning burgundy-heavy, that's a signal to pull back, not a valid design choice.
- **Avoid over-design.** No new card variants, button variants, or font weights unless something in the existing design system genuinely can't do the job. No decorative gradients/shadows/animation without a functional reason. Target: "Sophisticated Simplicity," not novelty.
- **When beauty and conversion conflict, conversion wins.** This is an explicit brief rule, not just a tiebreaker — e.g. prioritize a clear CTA over a cleaner-looking layout.
- **Instagram is a traffic source, not the destination.** The primary CTA everywhere is "خرید / افزودن به سبد," never "دنبال کردن." The homepage Instagram section is a light teaser, intentionally not competitive with the shop CTAs.

## ⚠️ Known bug class — check for this whenever you touch drawer/slide-in CSS
We already hit this once (mobile menu + cart drawer silently never opened for weeks): a rule like `html[dir="rtl"] .drawer { transform: translateX(-100%); }` has **higher CSS specificity** than `.drawer.is-open { transform: translateX(0); }` (the attribute selector `[dir="rtl"]` plus the `html` element selector outweigh two plain classes). Result: the "closed" RTL rule always won, even after JS added `.is-open`. `classList.contains('is-open')` tests didn't catch it because the class *was* being added correctly — only the computed style was wrong.

**Fix pattern in use:** the `.is-open` transform rules for `.drawer` carry `!important`. If you add any new slide-in/toggle component with an RTL-mirrored transform, either give the open-state rule `!important` too, or verify with `getComputedStyle(el).transform` (not just `classList.contains`) that toggling the class actually changes the computed value.

## File structure
```
index.html, shop.html, category.html, product.html,     ← Home, Browse, Category (?cat=), Product (?id=)
cart.html, checkout.html, order-success.html, wishlist.html,
about.html, contact.html, faq.html, blog.html,
returns.html, shipping.html, size-guide.html, privacy.html, terms.html
css/style.css     ← single shared stylesheet (design tokens → components → per-page sections, in that order)
js/main.js        ← single shared script (product data, Store, catalog/product/cart/checkout engines)
fonts/            ← Peyda (Persian) + Manrope (numerals/Latin), local WOFF2, 4 weights each
docs/brief.md     ← original 78-section client brief (source of truth for content/business rules)
```

`category.html` and `product.html` are **single templates** driven by query string (`?cat=bra`, `?id=hb-001`) — don't create per-category or per-product HTML files.

## Design tokens (already defined in `:root` in style.css — reuse, don't redefine)
- Primary (sage olive): `--color-primary` `#737C54` / brand core `#9CA286`
- Secondary (warm beige): `--color-secondary` `#E8DFD2`
- Background: `--color-bg` `#F8F6F2`, surfaces: `--color-surface` `#FFFFFF`
- Text: `--color-text` `#202020`, muted: `--color-text-muted`
- CTA/conversion accent (burgundy): `--color-cta` `#8E3045` — see color discipline rule above, use sparingly
- Fonts: `var(--font-fa)` = Peyda (default), `var(--font-en)` = Manrope (numerals/Latin — apply via `.num` class or `lang="en"`)
- Approximate screen-level color distribution the brief asks for: off-white bg ~55–65%, white surfaces ~10–15%, beige ~10–15%, sage/olive ~10–15%, text ~5%, burgundy ≤3–5%

## JS architecture (`js/main.js`, all under `window.HECUBA`)
- `PRODUCTS` — 24 sample products across 9 categories, each with `category`, `categorySlug`, `price`, `comparePrice`, `colors[]`, `sizes[]`, `material`, `model`, `usage`, `brand`, `description`, `rating`, `reviews`, `tags[]`, `inStock`. Extend this array (not a new file) when adding products. Brief target for the real store is 100–150 products — this structure is meant to scale to that.
- `Store` — localStorage-backed cart/wishlist/recently-viewed. Cart lines carry `{id, color, size, qty}`. Has `addToCart`, `removeFromCart`, `updateCartQty`, `clearCart`, `applyDiscountCode`, `cartLines()`, `cartSubtotal()`. Fires a `hecuba:store-updated` CustomEvent on every mutation — pages listen to this to re-render (see `initCartPage`, `initWishlistPage`).
- `initCatalogPage(config)` — shared filter/sort engine used by both `shop.html` and `category.html` (category page passes `lockCategory` to hide the category filter group).
- `initProductPage()` — gallery, color/size selection with simulated per-variant stock (`stockForVariant`), size guide modal, size finder quiz, reviews, related products.
- `initCartPage()`, `initCheckoutPage()`, `initWishlistPage()`, `initOrderSuccessPage()`, `initContactPage()` — one per page, called from that page's inline `<script>` at the bottom.
- `renderCartDrawer()` — populates the header's mini-cart drawer (present on all 17 pages); called automatically after every `Store` mutation.

## WordPress mapping (keep this in mind when changing structure)
- `.product-card` → WooCommerce Product Loop Item (flat structure: image → name → price → swatches → CTA)
- Header/Footer → **XPRO Theme Builder** (used *only* for header/footer theme parts per the brief — page content itself uses Elementor Pro widgets, not XPRO)
- Color swatches (`data-attribute="color"`) → Variation Swatches for WooCommerce (Brainstorm Force)
- Wishlist buttons (`data-product-id`) → TI WooCommerce Wishlist
- Filter checkboxes/sliders → Filter Everything
- Checkout OTP field → SMS OTP plugin (currently a UI placeholder, not wired to anything real)
- Contact form → WPForms Lite (currently UI-only)
- Full WP plugin list for reference: WooCommerce + ووکامرس فارسی + shipping plugin + payment gateway + SMS plugin, Variation Swatches, Filter Everything, TI Wishlist, Elementor Pro + XPRO Addons, WPForms Lite, Rank Math SEO, Site Kit by Google, image optimization/WebP, Novamira (site management connector)
- **Do not build anything that would require a custom HTML widget or "Atomic Elements" to reproduce in Elementor** — the brief explicitly rules those out. Keep markup container-based and reconstructable with native Elementor Pro widgets.

## Testing convention
Before considering any change done, sanity-check with a headless run (jsdom) if the change touches JS logic, and — critically, given the bug above — **verify computed styles in a real browser for anything involving CSS toggling/transforms**, not just DOM class assertions.

## Deploy
Static site on GitHub Pages, branch `main`, root. Push to `main` = live in ~30–60s. No build step.

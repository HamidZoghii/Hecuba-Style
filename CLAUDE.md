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
- **All raster images are WebP.** The library was converted from PNG/JPG to WebP at quality 85 (15.1 MB -> 2.8 MB, -81%). None of the source PNGs carried transparency — they were photographs saved as PNG, which is why the saving was so large. Add new images as `.webp`; do not reintroduce `.png`/`.jpg` photo assets.
- **Real images only — no placeholders, no exceptions.** Every image slot on every page (Hero, Product Card, Product Page, Category Cards, New Arrivals, Best Sellers, Promotional Banners, Curated Collections, Bundle Sections, Instagram/Editorial, Related Products, and any other image area) must show a real, high-quality, relevant photo sourced from Free/Open-Use/Royalty-Free/Creative Commons/Stock providers. `.ph-image` gradient blocks, empty boxes, abstract art, broken image icons, or skipping an image slot are **not allowed under any circumstance**, including content caution. This is a Premium Fashion & Lingerie e-commerce prototype: images of women modeling bras, underwear, sets, bodysuits, and other intimate-apparel products are a **normal, required, non-optional part of the visual identity** — not something to minimize, work around, or substitute. Do not default to "safe" generic fashion photos (e.g., outerwear, faces only, product-alone flat lays) when the section actually calls for a model wearing the product. Do not blur, crop out, downscale, or otherwise soften these images out of caution. Real Hecuba Style product photography will replace these stock images later during the WordPress build, but the prototype itself must be built with real, well-chosen images from the very first pass.
- Every page shares identical `<header>`/`<footer>` markup (duplicated per page, not templated — there's no build step). If you edit the header or footer, **you must propagate the change to all 19 HTML files**, not just one.

## Brand voice & content guardrails (from the brief — easy to drift from without noticing)
- **This is a lingerie brand, and it should look like one — confidently, not apologetically.** The line to hold is narrow and specific: professional, editorial Fashion & Lingerie Art Direction (think the visual standard of established lingerie/fashion e-commerce brands) — not amateur, not softcore, not overtly sexual/provocative. Concretely: use natural studio/editorial lighting, tasteful full-body or half-body compositions, confident-but-natural posing, and product-focused framing. Avoid close-up crops isolating body parts in a sexualized way, overtly suggestive poses/expressions, or copy that reads as innuendo. **This restriction is about photographic style and framing — it is explicitly NOT a reason to avoid, hide, minimize, reduce the frequency of, or replace images of models wearing lingerie/intimates with more "modest" alternatives.** If in doubt between two real, sourced images for the same slot — one editorial/tasteful showing the product being worn, one generic/safe that dodges showing the product — always choose the one that actually shows the product being worn well. Brand personality: زنانه، جذاب، متنوع، صمیمی، مدرن (feminine, appealing, varied, warm/approachable, modern) — "جذاب" (appealing/alluring) is an explicit, intended part of the brand, not a risk to manage down.
- **Content tone for any new copy:** intimate/warm, feminine, confident, modern, short, informal-but-professional. Avoid clichés like "بهترین کیفیت با ارزان‌ترین قیمت."
- **Color discipline:** Sage/olive is the dominant brand family; burgundy (`--color-cta`) is a *conversion accent only* — cap it around 3–5% of any given screen (CTAs, sale badges, discount emphasis). If a section is turning burgundy-heavy, that's a signal to pull back, not a valid design choice.
- **Avoid over-design.** No new card variants, button variants, or font weights unless something in the existing design system genuinely can't do the job. No decorative gradients/shadows/animation without a functional reason. Target: "Sophisticated Simplicity," not novelty.
- **When beauty and conversion conflict, conversion wins.** This is an explicit brief rule, not just a tiebreaker — e.g. prioritize a clear CTA over a cleaner-looking layout.
- **Instagram is a traffic source, not the destination.** The primary CTA everywhere is "خرید / افزودن به سبد," never "دنبال کردن." The homepage Instagram section is a light teaser, intentionally not competitive with the shop CTAs.

## ⚠️ Known bug class — check for this whenever you touch drawer/slide-in CSS
We already hit this once (mobile menu + cart drawer silently never opened for weeks): a rule like `html[dir="rtl"] .drawer { transform: translateX(-100%); }` has **higher CSS specificity** than `.drawer.is-open { transform: translateX(0); }` (the attribute selector `[dir="rtl"]` plus the `html` element selector outweigh two plain classes). Result: the "closed" RTL rule always won, even after JS added `.is-open`. `classList.contains('is-open')` tests didn't catch it because the class *was* being added correctly — only the computed style was wrong.

**This bit us a second time.** `.drawer.sheet` (0,2,0) sets `transform: translateY(100%)` for the bottom-sheet variant, but `html[dir="rtl"] .drawer` (0,2,1) outranks it — so on every RTL page the closed sheet was sitting at `translateX(-100%)` and sliding in sideways instead of up from the bottom. Fixed by adding an equally-RTL-scoped rule: `html[dir="rtl"] .drawer.sheet { transform: translateY(100%); }` (0,3,1).

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
- `--color-primary-aa` `#6F7850` — use this, not `--color-primary`, for any surface that carries **white text**. White on `--color-primary` is only 4.43:1 (fails AA); this shade is 4.69:1 and visually indistinguishable. Currently on `.btn-secondary`, `.skip-link`, `.size-btn[aria-pressed="true"]`.
- `--color-link` `#555D3D` — use this, not `--color-primary`, for **text/link colour**. `--color-primary` as text is 4.10:1 on `--color-bg`. (`--color-primary` remains correct for icons, borders, fills and other non-text use, where the bar is 3:1.)
- CTA/conversion accent (burgundy): `--color-cta` `#8E3045` — see color discipline rule above, use sparingly
- Fonts: `var(--font-fa)` = Peyda (default), `var(--font-en)` = Manrope (numerals/Latin — apply via `.num` class or `lang="en"`)
- Approximate screen-level color distribution the brief asks for: off-white bg ~55–65%, white surfaces ~10–15%, beige ~10–15%, sage/olive ~10–15%, text ~5%, burgundy ≤3–5%

## JS architecture (`js/main.js`, all under `window.HECUBA`)
- `PRODUCTS` — 24 sample products across 9 categories, each with `category`, `categorySlug`, `price`, `comparePrice`, `colors[]`, `sizes[]`, `material`, `model`, `usage`, `brand`, `description`, `rating`, `reviews`, `tags[]`, `inStock`. Extend this array (not a new file) when adding products. Brief target for the real store is 100–150 products — this structure is meant to scale to that.
- `Store` — localStorage-backed cart/wishlist/recently-viewed. Cart lines carry `{id, color, size, qty}`. Has `addToCart`, `removeFromCart`, `updateCartQty`, `clearCart`, `applyDiscountCode`, `cartLines()`, `cartSubtotal()`. Fires a `hecuba:store-updated` CustomEvent on every mutation — pages listen to this to re-render (see `initCartPage`, `initWishlistPage`).
- `initCatalogPage(config)` — shared filter/sort engine used by both `shop.html` and `category.html` (category page passes `lockCategory` to hide the category filter group).
- `initProductPage()` — gallery, color/size selection with simulated per-variant stock (`stockForVariant`), size guide modal, size finder quiz, reviews, related products.
- `initCartPage()`, `initCheckoutPage()`, `initWishlistPage()`, `initOrderSuccessPage()`, `initContactPage()` — one per page, called from that page's inline `<script>` at the bottom.
- `renderCartDrawer()` — populates the header's mini-cart drawer (present on all 19 pages); called automatically after every `Store` mutation.

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

## Image attribute convention
Static `<img>` tags in HTML carry real `width`/`height` (taken from the file), plus `loading="lazy"` and `decoding="async"` — except the homepage hero and the product-page gallery main image, which are the LCP elements and get `fetchpriority="high"` instead.

**Do not hardcode dimensions into the `js/main.js` image templates.** Every JS-rendered `.ph-photo` sits inside a `.ph-image` wrapper that already carries a CSS `aspect-ratio`, so the box is reserved before the image loads and there is no CLS to fix. A hardcoded ratio that goes stale when someone swaps an image is *worse* than none — that is exactly what the hero tag did (it declared 1672x941 for a 2043x770 file, costing ~283px of layout shift).

## Testing convention
Before considering any change done, sanity-check with a headless run (jsdom) if the change touches JS logic, and — critically, given the bug above — **verify computed styles in a real browser for anything involving CSS toggling/transforms**, not just DOM class assertions.

## Deploy
Static site on GitHub Pages, branch `main`, root. Push to `main` = live in ~30–60s. No build step.

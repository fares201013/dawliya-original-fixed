# 3a-International — Conversion-Focused Multilingual Rebuild

A premium, multipage B2B site for African Francophone markets (Côte d'Ivoire, Sénégal, Cameroun, Mauritius, etc.), styled with the density and clarity of leading Chinese B2B sites (Alibaba/JD/Made-in-China) but wrapped in an "Emerald Prestige" luxury-produce aesthetic. Default language: French. Also: English, Arabic (RTL).

## Goals

- Drive WhatsApp + phone conversions on every page (sticky bottom bar on mobile, floating button on desktop).
- Communicate scale, trust, and export capability to African importers/hotels/retailers.
- Look unmistakably premium — not a generic supplier template.

## Pages

```
/              Home — hero, trust bar, product categories, capabilities, target markets, CTA
/produits      Catalog grid (dense, Tmall-style cards with specs, MOQ, packaging)
/produits/$id  Product detail — gallery, specs table, MOQ, packaging, shipping, RFQ + WhatsApp
/services      Sourcing, cold chain, export logistics, private label, QC
/marches       Target markets (CI, SN, CM, RDC, Maroc, Maurice…) with shipping lanes from Egypt
/a-propos      About, certifications, facilities, team
/contact       Form + WhatsApp + phone + offices map
```

Each route has its own `head()` with FR/EN/AR title, description, og:title, og:description, og:image.

## Languages

- **Default: French.** Toggle for English + Arabic.
- i18n via `react-i18next` with locale prefix routes: `/`, `/en/...`, `/ar/...` (FR is unprefixed default).
- `<html lang>` + `dir="rtl"` switches automatically for Arabic; layout mirrors via Tailwind logical properties.
- Persisted in localStorage + cookie for SSR hint.

## Design Direction

- **Palette (Emerald Prestige):** deep emerald `#064e3b`, emerald `#0d7a5f`, gold `#c9a84c`, cream `#f5f0e0`. Tokens defined in `src/styles.css` as oklch.
- **Typography:** display = "Cormorant Garamond" (luxury serif), body = "DM Sans" (clean modern). Arabic = "IBM Plex Sans Arabic". Self-hosted via Google Fonts CDN link in root head.
- **Layout density:** Chinese B2B inspiration — multi-column product grids, spec chips, badges (MOQ, Halal, Origin: Egypt), comparison-friendly cards. Balanced with editorial whitespace from Emerald Prestige.
- **Motion:** framer-motion — subtle fades, hero parallax, hover lifts on product cards.

## Conversion System

- **Floating WhatsApp button** (bottom-right) on every page, with prefilled message in active language.
- **Sticky mobile CTA bar:** "WhatsApp" + "Appeler" — always visible.
- **Inline CTAs** under each product: "Demander un devis WhatsApp" passing product name into message.
- **Trust bar** under hero: years in business, countries served, tons exported, certifications.

## Components

```
components/
  layout/Header.tsx          (logo, nav, language switcher)
  layout/Footer.tsx          (offices, languages, contact, legal)
  layout/StickyContactBar.tsx (mobile)
  ui/WhatsAppFAB.tsx
  ui/LanguageSwitcher.tsx
  home/Hero.tsx
  home/TrustBar.tsx
  home/CategoryGrid.tsx
  home/CapabilitiesStrip.tsx
  home/MarketsMap.tsx
  home/Testimonials.tsx
  products/ProductCard.tsx   (dense Tmall-style)
  products/ProductGrid.tsx
  products/SpecTable.tsx
  products/RFQInline.tsx
  i18n/index.ts              (config + resources)
  i18n/locales/{fr,en,ar}.json
```

## Technical Details

- **Stack:** existing TanStack Start + Tailwind v4 + shadcn — no framework change.
- **Routing:** file-based; locale handled via i18next, not URL params, to keep route tree simple. (Locale prefix is a thin redirect layer — can defer until v2 if scope grows.)
- **Images:** AI-generated hero + category images (premium produce, hotel/retail context, African market hints). Stored in `src/assets/`.
- **Forms:** Contact form posts to a server function that forwards via email; for v1 we wire WhatsApp deep links as primary, form as secondary.
- **No backend** required for v1 (no Lovable Cloud) — purely marketing site. Add Cloud later if RFQ persistence/admin is needed.
- **SEO:** unique head() per route, JSON-LD `Organization` + `Product` schema, sitemap.xml route, hreflang tags for FR/EN/AR.

## Build Order

1. Install deps (`react-i18next`, `i18next`, `framer-motion`), set up i18n + language switcher.
2. Define design tokens in `src/styles.css`, add font links, build Header/Footer/StickyContactBar/WhatsAppFAB.
3. Generate hero + 6 category/lifestyle images.
4. Build Home with all sections in FR + EN + AR strings.
5. Build Produits list + detail (seed ~12 products across Fruits / Légumes / Épicerie / Surgelés / Conserves).
6. Build Services, Marchés, À propos, Contact pages with full translations.
7. SEO pass: per-route head(), sitemap, JSON-LD, hreflang.
8. QA: desktop + mobile + RTL Arabic, WhatsApp links, all CTAs.

## Out of Scope (v1)

- Real product database / admin / pricing.
- Online ordering / checkout.
- Customer accounts.

These can be added later by enabling Lovable Cloud.

## Open question

Do you have the actual WhatsApp number and phone number to wire into CTAs? If not, I'll use a placeholder (`+20 ...`) you can swap in one config file.

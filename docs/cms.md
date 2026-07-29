# CMS — Contratto v0.17.0

## Export

- `PAGE_REGISTRY`, `PAGE_KEYS`, `isPageKey`, `getM1PageKeys`
- `cmsPageDocumentSchema`, `cmsSectionSchema`
- `sectionContentByType`, `parseSectionContent`
- `CATEGORY_SHOWCASE_DEFAULT_SLUGS`
- `zodToFieldMeta` (kind `image` | `video`, `localeScope: shared | i18n`)

## FieldMeta.localeScope (v0.9.0)

- `i18n` — stringhe editabili per lingua (default)
- `shared` — image, video, boolean, number, enum, `to`, `href`, `categorySlug`, `iubendaPolicyId`, oggetti/array strutturali

## Pagine M1

Solo `home` — tipi ammessi: `hero`, `categoryShowcase`, `features`, `featuredCollection`, `cta`.

Defaults ordine: hero → categoryShowcase → featuredCollection → features → cta.

## Pagine M2 — Chi siamo (v0.14.0)

`chi-siamo`: `hero`, `imageSlideshow`, `split`, `team`, `stats`, `cta`, `faq`.

Defaults: hero → slideshow → split×3 → team → stats → cta → faq (IT|EN).

- `imageSlideshow`: 2–8 slide (`mediaId?`, `imageAlt?`, `caption?`), `autoplayMs?` — full-viewport, **non** riusa `categoryShowcase`
- `split`: `mediaId?`, `button?` (CTA); `hero.subtitle` max 600
- Immagini shared (`mediaId`) su slideshow / split / team; upload folder `cms/chi-siamo/`

Pagine M2 stub: `property-finder`, `virtual-tours`, `sell-with-us` (`pageHeader`, placeholder in costruzione); policy con body «in costruzione».

## Layout header (v0.8.1)

- `headerCta` — Contattaci
- `headerSecondaryCta` — Vendi con noi (`/vendi-con-noi`); sul sito pubblico va nel footer (non nell’header)

## `categoryShowcase` (v0.17.0)

- `title` obbligatorio
- `items` length 4: `label`, `mediaId` (uuid), `imageAlt?`, `categorySlug` (shared), `ctaLabel?`
- `href` rimosso — destinazione = `/properties?category={categorySlug}`
- Preprocess: `href?category=` legacy → `categorySlug`; fallback indice → `masseria` / `rustici` / `trulli` / `centro-storico`
- Sezioni `hero` / `split` / `team`: campo `mediaId` (uuid) al posto di `image`
- `split` / `team`: `mediaId` opzionale (v0.13.0)
- `collectPageMediaIds(document)` — UUID referenziati nelle sezioni

## Hero video (v0.16.0)

- `hero.videoMediaId?` (uuid shared) — sfondo full-bleed homepage
- Sezione `videoShowcase` **rimossa** (v0.15 → v0.16); migrare `videoMediaId` sull’hero in backoffice

## `featuredCollection`

- `collectionKey`: solo `immobili`

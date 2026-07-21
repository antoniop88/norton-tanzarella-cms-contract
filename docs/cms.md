# CMS — Contratto v0.15.0

## Export

- `PAGE_REGISTRY`, `PAGE_KEYS`, `isPageKey`, `getM1PageKeys`
- `cmsPageDocumentSchema`, `cmsSectionSchema`
- `sectionContentByType`, `parseSectionContent`
- `zodToFieldMeta` (kind `image` | `video`, `localeScope: shared | i18n`)

## FieldMeta.localeScope (v0.9.0)

- `i18n` — stringhe editabili per lingua (default)
- `shared` — image, video, boolean, number, enum, `to`, `href`, `iubendaPolicyId`, oggetti/array strutturali

## Pagine M1

Solo `home` — tipi ammessi: `hero`, `categoryShowcase`, `features`, `featuredCollection`, `videoShowcase`, `cta`.

## Pagine M2 — Chi siamo (v0.14.0)

`chi-siamo`: `hero`, `imageSlideshow`, `split`, `team`, `stats`, `cta`, `faq`.

Defaults: hero → slideshow → split×3 → team → stats → cta → faq (IT|EN).

- `imageSlideshow`: 2–8 slide (`mediaId?`, `imageAlt?`, `caption?`), `autoplayMs?` — full-viewport, **non** riusa `categoryShowcase`
- `split`: `mediaId?`, `button?` (CTA); `hero.subtitle` max 600
- Immagini shared (`mediaId`) su slideshow / split / team; upload folder `cms/chi-siamo/`

Pagine M2 stub: `property-finder`, `virtual-tours`, `sell-with-us` (`pageHeader`, placeholder in costruzione); policy con body «in costruzione».

## Layout header (v0.8.1)

- `headerCta` — Contattaci
- `headerSecondaryCta` — Vendi con noi (`/vendi-con-noi`)

## `categoryShowcase` (v0.12.0)

- `title` obbligatorio
- `items` length 4: `label`, `mediaId` (uuid), `imageAlt?`, `href`, `ctaLabel?`
- Sezioni `hero` / `split` / `team`: campo `mediaId` (uuid) al posto di `image`
- `split` / `team`: `mediaId` opzionale (v0.13.0)
- `collectPageMediaIds(document)` — UUID referenziati nelle sezioni

## `videoShowcase` (v0.15.0)

- Dopo `featuredCollection` nei defaults home
- `videoMediaId?` (uuid shared), `hideWhenEmpty` default true
- Nessun titolo/CTA; full-bleed autoplay lato web
- `collectPageMediaIds` include chiavi `*MediaId`

## `featuredCollection`

- `collectionKey`: solo `immobili`

# CMS — Contratto v0.28.0

## Export

- `PAGE_REGISTRY`, `PAGE_KEYS`, `isPageKey`, `getM1PageKeys`
- `cmsPageDocumentSchema`, `cmsSectionSchema`
- `sectionContentByType`, `parseSectionContent`
- `zodToFieldMeta` (kind `image` | `video` | `icon`, `localeScope: shared | i18n`, string `format: markdown`)
- `siteMenuSettingsSchema`, `collectMenuMediaIds`, `DEFAULT_SITE_MENU_SETTINGS_IT|EN`

## FieldMeta.localeScope (v0.9.0)

- `i18n` — stringhe editabili per lingua (default)
- `shared` — image, video, icon, boolean, number, enum, `to`, `href`, `categorySlug`, `iubendaPolicyId`, oggetti/array strutturali

## Pagine M1

Solo `home` — tipi ammessi: `hero`, `statement`, `categoryGrid`, `features`, `featuredCollection`, `googleReviews`, `cta`.

Defaults ordine (v0.27.0): hero → statement → categoryGrid → featuredCollection → features → googleReviews → cta.

## `googleReviews` (v0.27.0)

- `title?` (max 80, i18n) — es. «GOOGLE REVIEWS»
- `maxItems` (1–5, default 5, shared)
- `hideWhenEmpty` (default true, shared)
- `showSummary` (default true, shared) — rating + totale + link Maps
- Dati review da Places API (settings admin: Place ID + API key); non nel documento CMS
- Limite Google Place Details: tipicamente ~5 review

## `features` (v0.23.0)

- `eyebrow?` (max 40, i18n) — sopratitolo uppercase
- `title?`, `lead?`, `outro?`
- `items[]` (1–12): `title`, `description`, `iconKey?` (shared, Iconify `mdi:` / `tabler:`)
- Web: layout bento Expertise quando ci sono esattamente 4 item (01 scuro wide)

## `statement` (v0.19.0)

- `title` (max 80) — titolo serif
- `body` (max 600) — paragrafo
- `tagline?` (max 120) — riga uppercase spaced
- Sostituisce le immagini "pietra" del vecchio `categoryShowcase` sulla homepage

## `categoryGrid` (v0.20.0)

- `title?` (max 80) — eyebrow opzionale sopra la griglia
- `items[4]` (lunghezza fissa): `label` (max 60, i18n), `mediaId?` (shared), `imageAlt?` (max 160, i18n), `categorySlug` (max 80, shared), `ctaLabel?` (max 60, i18n)
- Ripristina la navigazione per categoria rimossa per errore con `categoryShowcase`; estetica sobria (griglia rettangolare, no maschere a pietra)

## Branding / tipografia (v0.19.0)

- `fontSans`: Minion Pro (default, self-hosted), Montserrat, Nunito Sans, Inter, DM Sans
- `fontHeading`: Cormorant Garamond (default), Playfair Display, Libre Baskerville, Source Serif 4
- CSS vars `--font-sans` / `--font-display` da `scalarsToCssVars`

## Pagine M2 — Chi siamo (v0.14.0)

`chi-siamo`: `hero`, `imageSlideshow`, `split`, `team`, `stats`, `cta`, `faq`.

Defaults: hero → slideshow → split×3 → team → stats → cta → faq (IT|EN).

- `imageSlideshow`: 2–8 slide (`mediaId?`, `imageAlt?`, `caption?`), `autoplayMs?` — full-viewport
- `split`: `mediaId?`, `button?` (CTA); `hero.subtitle` max 600
- Immagini shared (`mediaId`) su slideshow / split / team; upload folder `cms/chi-siamo/`

## `virtual-tours` (v0.26.0)

- `pageHeader` + `youtubeGallery` (`playlistId`, `pageSize`, `columns`, `subscribeChannelUrl`, `subscribeLabel`)
- Defaults: playlist Norton Tanzarella `UU2weLZdp6gU82cmEb2URPvA`, 15/pagina, 3 colonne

## `property-finder` (v0.25.0)

`pageHeader` + `richText` (servizio ricerca immobili). Defaults IT|EN con copy completo (non stub).

- `richText.body` max 10000, `format: 'markdown'` (TipTap BO → Markdown string → `marked` sul web)
- Stub restanti: `sell-with-us` (`pageHeader`, placeholder in costruzione); policy con body «in costruzione»

`immobili-index` (v0.24.0): `pageHeader` + `cta` (reorderable); CTA defaults verso `/sell-with-us` (frase / didascalia / immagine / pulsante).

## Layout header (v0.8.1)

- `headerCta` — Contattaci
- `headerSecondaryCta` — Vendi con noi (`/vendi-con-noi`); sul sito pubblico va nel footer (non nell’header)

## Menu overlay (v0.22.0)

- `menu.mediaId?` (shared) — immagine pannello fullscreen; upload `brand/`
- `menu.quote` (max 240, i18n) — frase sull’immagine
- `menu.attribution?` (max 80, i18n)
- `collectMenuMediaIds(menu)` — UUID referenziati
- Non duplica `headerNav` / loghi / `organization`

## `cta` (v0.21.0)

- `title`, `description?`, `button`
- `mediaId?` (shared) — immagine sfondo full-bleed
- `imageAlt?` (max 160, i18n) — testo alternativo

## Media sezioni

- Sezioni `hero` / `split` / `team` / `cta`: campo `mediaId` (uuid)
- `split` / `team` / `cta`: `mediaId` opzionale
- `collectPageMediaIds(document)` — UUID referenziati nelle sezioni

## Branding scalars — `propertyWatermark` (v0.28.0)

- `propertyWatermark.enabled` (boolean, default `false`)
- `propertyWatermark.mediaId?` (uuid → `media_assets` in `brand/`) — obbligatorio se `enabled=true`
- `collectBrandingMediaIds(scalars)` — loghi + filigrana
- Backend applica filigrana al caricamento immagini `context=immobili` (non retroattivo)

## Hero video (v0.16.0)

- `hero.videoMediaId?` (uuid shared) — sfondo full-bleed homepage
- Sezione `videoShowcase` **rimossa** (v0.15 → v0.16); migrare `videoMediaId` sull’hero in backoffice

## `featuredCollection`

- `collectionKey`: solo `immobili`

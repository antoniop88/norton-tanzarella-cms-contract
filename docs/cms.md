# CMS — Contratto v0.30.5

## Export

- `PAGE_REGISTRY`, `PAGE_KEYS`, `isPageKey`, `getM1PageKeys`
- `cmsPageDocumentSchema`, `cmsSectionSchema`
- `sectionContentByType`, `parseSectionContent`
- `zodToFieldMeta` (kind `image` | `video` | `icon`, `localeScope: shared | i18n`, string `format: markdown`)
- `siteMenuSettingsSchema`, `collectMenuMediaIds`, `DEFAULT_SITE_MENU_SETTINGS_IT|EN`

## FieldMeta.localeScope (v0.9.0)

- `i18n` — stringhe editabili per lingua (default)
- `shared` — image, video, icon, boolean, number, enum, `to`, `href`, `categorySlug`, `iubendaPolicyId`, oggetti/array strutturali

## `pageHeader` (v0.30.0 / v0.30.1 / v0.30.2)

- `title` (max 80, i18n), `lead?` (max 200, i18n)
- `mediaId?` (shared) — immagine sfondo; hero full-bleed su **Immobili**, **Contatti** e **Trova immobile**; altre pagine ignorano
- `imageAlt?` (max 160, i18n)
- Defaults `immobili-index`: IT «Trova il posto che chiamerai casa.» / EN «Find your place to call home.» (`mediaId` vuoto finché caricato dal BO)
- Defaults `contatti` (v0.30.1): IT «Contattaci» + lead valutazioni/visite; EN «Contact us» + lead equivalente; `richText` off di default; upload hero in `cms/contatti/`
- `property-finder` (v0.30.2): stesso hero Contatti; copy titolo/lead già in defaults v0.25; upload in `cms/property-finder/`

## Pagine M1

Solo `home` — tipi ammessi: `hero`, `statement`, `categoryGrid`, `features`, `featuredCollection`, `googleReviews`, `aboutTeaser`, `cta`.

Defaults ordine (v0.29.1): hero → statement → categoryGrid → featuredCollection → features → aboutTeaser → googleReviews → cta.

## `aboutTeaser` (v0.29.0)

- `title` (max 80, i18n), `body` (max 600, i18n), `button` (i18n label; `to` default `/about`)
- `backgroundMediaId?`, `backgroundImageAlt?` (i18n alt)
- `carouselItems[1–3]`: `mediaId?` (shared), `imageAlt?` (i18n)
- `autoplayMs?` (0–12000, shared; default 5000)
- Media upload: cartella `home/`

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

## `categoryGrid` (v0.20.0, header v0.29.2)

- `eyebrow?` (max 60, i18n) — sopratitolo uppercase spaced
- `title?` (max 80, i18n) — titolo principale serif
- `tagline?` (max 160, i18n) — sottotitolo corsivo sotto il titolo
- `items[4]` (lunghezza fissa): `label` (max 60, i18n), `mediaId?` (shared), `imageAlt?` (max 160, i18n), `categorySlug` (max 80, shared), `ctaLabel?` (max 60, i18n)
- Ripristina la navigazione per categoria rimossa per errore con `categoryShowcase`; estetica sobria (intestazione editoriale + griglia rettangolare, no maschere a pietra)

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

## `property-finder` (v0.25.0, hero v0.30.2)

`pageHeader` + `richText` (servizio ricerca immobili). Defaults IT|EN con copy completo (non stub). Hero full-bleed come Contatti (`mediaId?`).

- `richText.body` max 10000, `format: 'markdown'` (TipTap BO → Markdown string → `marked` sul web)

## `sell-with-us` (v0.30.4)

`hero` + `richText` (intro) + `split` ×7 + `richText` (chiusura) + `cta`. Ordine locked. Defaults IT|EN (copy servizio vendita). Upload immagini split in `cms/sell-with-us/`.

- `split.lead?` (max 200) — sottotitolo corsivo sotto il titolo (Chi siamo lo lascia vuoto)
- Web: view dedicata sticky 01–07 (come Chi siamo); CTA Contattaci apre modale form

`immobili-index` (v0.24.0): `pageHeader` + `cta` (reorderable); CTA defaults verso `/sell-with-us` (frase / didascalia / immagine / pulsante).

## Layout header (v0.8.1 / nav v0.30.4)

- `headerCta` — Contattaci
- `headerNav` include «Vendi con noi» (`/sell-with-us`)
- `headerSecondaryCta` — stesso path, usato nel footer (dedupe); `mergeHeaderNav` esclude solo `headerCta`

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

## Branding scalars — `propertyWatermark` (v0.28.0, persistenza logo v0.30.3)

- `propertyWatermark.enabled` (boolean, default `false`)
- `propertyWatermark.mediaId?` (uuid → `media_assets` in `brand/`) — persistito anche se `enabled=false`; obbligatorio se `enabled=true`
- `collectBrandingMediaIds(scalars)` — loghi + filigrana
- Backend applica filigrana al caricamento immagini `context=immobili` (non retroattivo)
- v0.30.3: `normalizeSettingsScalars` non elimina `mediaId` quando lo switch è spento

## Hero video (v0.16.0)

- `hero.videoMediaId?` (uuid shared) — sfondo full-bleed homepage
- Sezione `videoShowcase` **rimossa** (v0.15 → v0.16); migrare `videoMediaId` sull’hero in backoffice

## `featuredCollection`

- `collectionKey`: solo `immobili`

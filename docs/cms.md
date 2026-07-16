# CMS — Contratto v0.9.0

## Export

- `PAGE_REGISTRY`, `PAGE_KEYS`, `isPageKey`, `getM1PageKeys`
- `cmsPageDocumentSchema`, `cmsSectionSchema`
- `sectionContentByType`, `parseSectionContent`
- `zodToFieldMeta` (kind `image`, `localeScope: shared | i18n`)

## FieldMeta.localeScope (v0.9.0)

- `i18n` — stringhe editabili per lingua (default)
- `shared` — image, boolean, number, enum, `to`, `href`, `iubendaPolicyId`, oggetti/array strutturali

## Pagine M1

Solo `home` — tipi ammessi: `hero`, `categoryShowcase`, `features`, `featuredCollection`, `cta`.

Pagine M2 aggiuntive: `property-finder`, `virtual-tours`, `sell-with-us` (`pageHeader`, placeholder in costruzione).

## Layout header (v0.8.1)

- `headerCta` — Contattaci
- `headerSecondaryCta` — Vendi con noi (`/vendi-con-noi`)

## `categoryShowcase` (v0.7.0)

- `title` obbligatorio
- `items` length 4: `label`, `image`, `imageAlt?`, `href`, `ctaLabel?`

## `featuredCollection`

- `collectionKey`: solo `immobili`
- `mode`: `featured` | `manual`
- `hideWhenEmpty`: default `true` — sezione nascosta se 0 item
- Validazione publish: warning se >50% itemIds morti; errore se manual e tutti morti

## Dipendenze consumer

```json
"@norton-tanzarella/cms-contract": "file:../norton-tanzarella-cms-contract"
```

`prepare: tsup` obbligatorio — senza `dist/` gli import falliscono.

## Orari apertura (v0.5.0)

- `openingHoursSchema`, `groupOpeningHoursByDay`, `flattenDaySchedules`, `validateOpeningHours`
- `organization.openingHours[]`: flat, max 14 righe (2 fasce × 7 giorni + festivi)
- Chiusura totale: giorno assente dall'array

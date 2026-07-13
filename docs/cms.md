# CMS — Contratto v0.1.0 (M1)

## Export

- `PAGE_REGISTRY`, `PAGE_KEYS`, `isPageKey`, `getM1PageKeys`
- `cmsPageDocumentSchema`, `cmsSectionSchema`
- `sectionContentByType`, `parseSectionContent`
- `zodToFieldMeta`

## Pagine M1

Solo `home` — tipi ammessi: `hero`, `features`, `featuredCollection`, `cta`.

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

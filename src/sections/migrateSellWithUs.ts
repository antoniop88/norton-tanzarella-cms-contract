import type { CmsPageDocument } from '../pages/document.js'

const LEGACY_SELL_SEO_DESCRIPTIONS = new Set([
  'Vendi il tuo immobile con Norton Tanzarella: valutazione, marketing internazionale e accompagnamento fino alla conclusione.',
  'Sell your property with Norton Tanzarella: valuation, international marketing and guidance through to completion.',
])

const LEGACY_SELL_SECTION_TYPES = new Set(['hero', 'richText', 'stickySplits', 'split', 'cta'])

function migrateSellWithUsSeo(
  seo: CmsPageDocument['seo'],
  defaults: CmsPageDocument,
): CmsPageDocument['seo'] {
  const next = { ...(seo ?? {}) }
  const defaultSeo = defaults.seo ?? {}
  const description = typeof next.description === 'string' ? next.description.trim() : ''
  if (!description || LEGACY_SELL_SEO_DESCRIPTIONS.has(description)) {
    if (typeof defaultSeo.description === 'string') next.description = defaultSeo.description
  }
  const title = typeof next.title === 'string' ? next.title.trim() : ''
  if (!title || title === 'Vendi con noi' || title === 'Sell with us') {
    if (typeof defaultSeo.title === 'string') next.title = defaultSeo.title
  }
  return next
}

/** True when the document still uses the pre-v0.33 stickySplits layout. */
export function isLegacySellWithUsDocument(document: CmsPageDocument): boolean {
  const hasNew = document.sections.some(
    (section) =>
      section.type === 'sellHero' ||
      section.type === 'sellMethod' ||
      section.type === 'valuationLead' ||
      section.type === 'socialReach',
  )
  if (hasNew) return false
  return document.sections.some((section) => LEGACY_SELL_SECTION_TYPES.has(section.type))
}

/**
 * Replace pre-v0.33 sell-with-us documents with registry defaults (SEO refreshed).
 * New-structure documents only get SEO backfill when still on legacy copy.
 * Run **before** filtering by `allowedTypes`.
 */
export function migrateSellWithUsPage(
  document: CmsPageDocument,
  defaults: CmsPageDocument,
): CmsPageDocument {
  if (isLegacySellWithUsDocument(document)) {
    return structuredClone(defaults)
  }
  return {
    ...document,
    seo: migrateSellWithUsSeo(document.seo, defaults),
  }
}

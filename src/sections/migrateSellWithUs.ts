import type { CmsPageDocument, CmsSection } from '../pages/document.js'

const LEGACY_SELL_SEO_DESCRIPTIONS = new Set([
  'Vendi il tuo immobile con Norton Tanzarella: valutazione, marketing internazionale e accompagnamento fino alla conclusione.',
  'Sell your property with Norton Tanzarella: valuation, international marketing and guidance through to completion.',
  'Vuoi vendere casa più velocemente e al miglior prezzo? Scopri il metodo Norton Tanzarella: video, social e valutazione professionale.',
  'Want to sell your home faster and at the best price? Discover the Norton Tanzarella method: video, social media and a professional valuation.',
])

/** Hero titles from sell-with-us defaults before v0.33.1 (performance / speed copy). */
export const PERFORMANCE_SELL_HERO_TITLES = new Set([
  'Vuoi vendere casa più velocemente',
  'Want to sell your home faster',
])

const LEGACY_SELL_SECTION_TYPES = new Set(['hero', 'richText', 'stickySplits', 'split', 'cta'])

const PRESERVE_KEYS = new Set(['mediaId', 'imageAlt', 'youtubeUrl'])

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

function findSellHeroTitle(sections: CmsSection[]): string {
  const hero = sections.find((section) => section.type === 'sellHero')
  if (!hero) return ''
  const content = hero.content as Record<string, unknown>
  return typeof content.title === 'string' ? content.title.trim() : ''
}

/**
 * Replace performance-era section copy with registry defaults while preserving
 * uploaded media and the YouTube URL. No-op when the hero title is custom.
 */
export function migrateSellWithUsPerformanceCopy(
  sections: CmsSection[],
  defaults: CmsPageDocument,
): CmsSection[] {
  if (!PERFORMANCE_SELL_HERO_TITLES.has(findSellHeroTitle(sections))) {
    return sections
  }

  const defaultsByType = new Map(
    defaults.sections
      .filter((section) =>
        ['sellHero', 'sellMethod', 'valuationLead', 'socialReach'].includes(section.type),
      )
      .map((section) => [section.type, section] as const),
  )

  return sections.map((section) => {
    const fallback = defaultsByType.get(section.type)
    if (!fallback) return section

    const current = { ...(section.content as Record<string, unknown>) }
    const next = { ...(fallback.content as Record<string, unknown>) }

    for (const key of PRESERVE_KEYS) {
      if (current[key] !== undefined && current[key] !== null && current[key] !== '') {
        next[key] = current[key]
      }
    }

    return { ...section, content: next }
  })
}

/**
 * Replace pre-v0.33 sell-with-us documents with registry defaults (SEO refreshed).
 * v0.33 performance copy is swapped for luxury defaults when the hero title matches.
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
    sections: migrateSellWithUsPerformanceCopy(document.sections, defaults),
  }
}

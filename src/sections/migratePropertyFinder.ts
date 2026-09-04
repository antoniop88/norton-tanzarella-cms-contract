import type { CmsPageDocument, CmsSection } from '../pages/document.js'

/** Titles from property-finder defaults before v0.30.6 (brochure hero). */
export const LEGACY_PROPERTY_FINDER_TITLES = new Set([
  'Il nostro servizio completo di ricerca immobili',
  'Our Comprehensive Property Finder Service',
])

const LEGACY_PROPERTY_FINDER_SEO_DESCRIPTIONS = new Set([
  'Servizio completo di ricerca immobili in Italia: profilo su misura, visite, negoziazione e gestione legale e fiscale.',
  'Full property finder service in Italy: tailored search, viewings, negotiation, legal and tax support.',
])

function migratePropertyFinderSeo(
  seo: CmsPageDocument['seo'],
  defaults: CmsPageDocument,
): CmsPageDocument['seo'] {
  const next = { ...(seo ?? {}) }
  const defaultSeo = defaults.seo ?? {}
  const description = typeof next.description === 'string' ? next.description.trim() : ''
  if (!description || LEGACY_PROPERTY_FINDER_SEO_DESCRIPTIONS.has(description)) {
    if (typeof defaultSeo.description === 'string') next.description = defaultSeo.description
  }
  if (!next.title && typeof defaultSeo.title === 'string') next.title = defaultSeo.title
  return next
}

/**
 * Backfill `pageHeader.eyebrow` and replace brochure title/lead when still on
 * pre-v0.30.6 defaults. Preserves `mediaId` / `imageAlt` already uploaded.
 * Run on `property-finder` **before** filtering by `allowedTypes` (legacy
 * `richText` is dropped by that filter; new sections come from registry insert).
 */
export function migratePropertyFinderBriefing(
  sections: CmsSection[],
  defaults: CmsPageDocument,
): CmsSection[] {
  const defaultHeader = defaults.sections.find((section) => section.type === 'pageHeader')
  if (!defaultHeader) return sections

  const defaultContent = defaultHeader.content as Record<string, unknown>

  return sections.map((section) => {
    if (section.type !== 'pageHeader') return section
    const content = { ...(section.content as Record<string, unknown>) }
    const title = typeof content.title === 'string' ? content.title.trim() : ''

    if (LEGACY_PROPERTY_FINDER_TITLES.has(title)) {
      if (typeof defaultContent.title === 'string') content.title = defaultContent.title
      if (typeof defaultContent.lead === 'string') content.lead = defaultContent.lead
    }

    if (!content.eyebrow && typeof defaultContent.eyebrow === 'string') {
      content.eyebrow = defaultContent.eyebrow
    }

    return { ...section, content }
  })
}

export function migratePropertyFinderPage(
  document: CmsPageDocument,
  defaults: CmsPageDocument,
): CmsPageDocument {
  return {
    ...document,
    seo: migratePropertyFinderSeo(document.seo, defaults),
    sections: migratePropertyFinderBriefing(document.sections, defaults),
  }
}

import type { CmsPageDocument, CmsSection } from '../pages/document.js'
import type { StickySplitItem } from './m2.js'

/**
 * Collapse legacy top-level `split` sections into one `stickySplits` (Chi siamo / Vendi con noi).
 * Run **before** filtering by `allowedTypes`, or split content is dropped.
 */
export function migrateSplitsToStickySplits(
  sections: CmsSection[],
  defaults: CmsPageDocument,
): CmsSection[] {
  const defaultSticky = defaults.sections.find((section) => section.type === 'stickySplits')
  if (!defaultSticky) return sections

  if (sections.some((section) => section.type === 'stickySplits')) {
    return sections.filter((section) => section.type !== 'split')
  }

  const splits = [...sections]
    .filter((section) => section.type === 'split')
    .sort((a, b) => a.order - b.order)

  if (splits.length === 0) return sections

  const items: StickySplitItem[] = splits.map((section) => {
    const content = section.content as Record<string, unknown>
    return {
      title: typeof content.title === 'string' ? content.title : '',
      lead: typeof content.lead === 'string' ? content.lead : undefined,
      body: typeof content.body === 'string' ? content.body : '',
      mediaId: typeof content.mediaId === 'string' ? content.mediaId : undefined,
      imageAlt: typeof content.imageAlt === 'string' ? content.imageAlt : undefined,
    }
  })

  const sticky: CmsSection = {
    id: defaultSticky.id,
    type: 'stickySplits',
    enabled: splits.some((section) => section.enabled),
    order: Math.min(...splits.map((section) => section.order)),
    content: { items },
  }

  return [...sections.filter((section) => section.type !== 'split'), sticky].sort(
    (a, b) => a.order - b.order,
  )
}

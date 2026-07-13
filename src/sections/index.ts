import {
  ctaContentSchema,
  featuredCollectionContentSchema,
  featuresContentSchema,
  heroContentSchema,
} from './m1.js'
import {
  faqContentSchema,
  legalPolicyContentSchema,
  pageHeaderContentSchema,
  richTextContentSchema,
  splitContentSchema,
  statsContentSchema,
  teamContentSchema,
  testimonialsContentSchema,
} from './m2.js'

export const sectionContentByType = {
  hero: heroContentSchema,
  features: featuresContentSchema,
  cta: ctaContentSchema,
  featuredCollection: featuredCollectionContentSchema,
  pageHeader: pageHeaderContentSchema,
  richText: richTextContentSchema,
  legalPolicy: legalPolicyContentSchema,
  split: splitContentSchema,
  team: teamContentSchema,
  stats: statsContentSchema,
  faq: faqContentSchema,
  testimonials: testimonialsContentSchema,
} as const

export type SectionType = keyof typeof sectionContentByType

export function parseSectionContent(type: string, content: unknown) {
  const schema = sectionContentByType[type as SectionType]
  if (!schema) return { success: false as const, error: `Unknown section type: ${type}` }
  const result = schema.safeParse(content)
  if (!result.success) {
    return { success: false as const, error: result.error.message }
  }
  return { success: true as const, data: result.data }
}

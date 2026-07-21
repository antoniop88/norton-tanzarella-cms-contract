import {
  categoryShowcaseContentSchema,
  ctaContentSchema,
  featuredCollectionContentSchema,
  featuresContentSchema,
  heroContentSchema,
  videoShowcaseContentSchema,
} from './m1.js'
import {
  faqContentSchema,
  imageSlideshowContentSchema,
  legalPolicyContentSchema,
  pageHeaderContentSchema,
  richTextContentSchema,
  splitContentSchema,
  statsContentSchema,
  teamContentSchema,
  testimonialsContentSchema,
} from './m2.js'

export { collectPageMediaIds } from './collectPageMediaIds.js'

export const sectionContentByType = {
  hero: heroContentSchema,
  features: featuresContentSchema,
  cta: ctaContentSchema,
  featuredCollection: featuredCollectionContentSchema,
  categoryShowcase: categoryShowcaseContentSchema,
  videoShowcase: videoShowcaseContentSchema,
  pageHeader: pageHeaderContentSchema,
  richText: richTextContentSchema,
  legalPolicy: legalPolicyContentSchema,
  split: splitContentSchema,
  imageSlideshow: imageSlideshowContentSchema,
  team: teamContentSchema,
  stats: statsContentSchema,
  faq: faqContentSchema,
  testimonials: testimonialsContentSchema,
} as const

export type SectionType = keyof typeof sectionContentByType

export const SECTION_TYPE_LABELS_IT: Record<SectionType, string> = {
  hero: 'Hero',
  features: 'Caratteristiche',
  cta: 'Call to action',
  featuredCollection: 'Collezione in evidenza',
  categoryShowcase: 'Showcase categorie',
  videoShowcase: 'Showcase video',
  pageHeader: 'Intestazione pagina',
  richText: 'Testo libero',
  legalPolicy: 'Policy legale',
  split: 'Sezione split',
  imageSlideshow: 'Slideshow immagini',
  team: 'Team',
  stats: 'Statistiche',
  faq: 'FAQ',
  testimonials: 'Testimonianze',
}

export function parseSectionContent(type: string, content: unknown) {
  const schema = sectionContentByType[type as SectionType]
  if (!schema) return { success: false as const, error: `Unknown section type: ${type}` }
  const result = schema.safeParse(content)
  if (!result.success) {
    return { success: false as const, error: result.error.message }
  }
  return { success: true as const, data: result.data }
}

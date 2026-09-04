import {
  aboutTeaserContentSchema,
  categoryGridContentSchema,
  ctaContentSchema,
  featuredCollectionContentSchema,
  featuresContentSchema,
  heroContentSchema,
  statementContentSchema,
} from './m1.js'
import {
  faqContentSchema,
  imageSlideshowContentSchema,
  legalPolicyContentSchema,
  pageHeaderContentSchema,
  richTextContentSchema,
  splitContentSchema,
  stickySplitsContentSchema,
  statsContentSchema,
  teamContentSchema,
  testimonialsContentSchema,
  youtubeGalleryContentSchema,
  googleReviewsContentSchema,
} from './m2.js'

export { collectPageMediaIds } from './collectPageMediaIds.js'
export { migrateSplitsToStickySplits } from './migrateStickySplits.js'

export const sectionContentByType = {
  hero: heroContentSchema,
  features: featuresContentSchema,
  cta: ctaContentSchema,
  featuredCollection: featuredCollectionContentSchema,
  statement: statementContentSchema,
  categoryGrid: categoryGridContentSchema,
  pageHeader: pageHeaderContentSchema,
  richText: richTextContentSchema,
  legalPolicy: legalPolicyContentSchema,
  split: splitContentSchema,
  stickySplits: stickySplitsContentSchema,
  imageSlideshow: imageSlideshowContentSchema,
  team: teamContentSchema,
  stats: statsContentSchema,
  faq: faqContentSchema,
  testimonials: testimonialsContentSchema,
  youtubeGallery: youtubeGalleryContentSchema,
  googleReviews: googleReviewsContentSchema,
  aboutTeaser: aboutTeaserContentSchema,
} as const

export type SectionType = keyof typeof sectionContentByType

export const SECTION_TYPE_LABELS_IT: Record<SectionType, string> = {
  hero: 'Hero',
  features: 'Caratteristiche',
  cta: 'Call to action',
  featuredCollection: 'Collezione in evidenza',
  statement: 'Dichiarazione',
  categoryGrid: 'Griglia categorie',
  pageHeader: 'Intestazione pagina',
  richText: 'Testo libero',
  legalPolicy: 'Policy legale',
  split: 'Sezione split',
  stickySplits: 'Blocchi numerati',
  imageSlideshow: 'Slideshow immagini',
  team: 'Team',
  stats: 'Statistiche',
  faq: 'FAQ',
  testimonials: 'Testimonianze',
  youtubeGallery: 'Gallery YouTube',
  googleReviews: 'Google Reviews',
  aboutTeaser: 'About teaser',
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

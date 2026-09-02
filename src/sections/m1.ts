import { z } from 'zod'
import { ctaLinkSchema, featureItemSchema, optionalCtaLinkSchema, optionalMediaIdSchema } from './common.js'

export const heroContentSchema = z.object({
  title: z.string().max(80).describe('Titolo'),
  subtitle: z.string().max(600).optional().describe('Sottotitolo'),
  cta: optionalCtaLinkSchema.describe('CTA'),
  videoMediaId: optionalMediaIdSchema.describe('Video sfondo'),
})

export const featuresContentSchema = z.object({
  eyebrow: z.string().max(40).optional().describe('Sopratitolo'),
  title: z.string().max(80).optional().describe('Titolo'),
  lead: z.string().max(200).optional().describe('Introduzione'),
  outro: z.string().max(200).optional().describe('Chiusura'),
  items: z.array(featureItemSchema).min(1).max(12).describe('Elementi'),
})

export const ctaContentSchema = z.object({
  title: z.string().max(80).describe('Frase principale'),
  description: z.string().max(200).optional().describe('Didascalia'),
  button: ctaLinkSchema.describe('Pulsante'),
  mediaId: optionalMediaIdSchema.describe('Immagine sfondo'),
  imageAlt: z.string().max(160).optional().describe('Alt immagine'),
})

export const featuredCollectionContentSchema = z.object({
  collectionKey: z.literal('immobili').describe('Collezione'),
  mode: z.enum(['featured', 'manual']).describe('Modalità'),
  itemIds: z.array(z.string().uuid()).max(6).optional().describe('Elementi manuali'),
  limit: z.number().int().min(1).max(6).default(6).describe('Limite'),
  title: z.string().max(80).optional().describe('Titolo sezione'),
  viewAllLabel: z.string().max(40).optional().describe('Etichetta «Vedi tutti»'),
  hideWhenEmpty: z.boolean().default(true).describe('Nascondi se vuota'),
})

export const statementContentSchema = z.object({
  title: z.string().max(80).describe('Titolo'),
  body: z.string().max(600).describe('Testo'),
  tagline: z.string().max(120).optional().describe('Tagline'),
})

export type StatementContent = z.infer<typeof statementContentSchema>

export const categoryGridItemSchema = z.object({
  label: z.string().max(60).describe('Etichetta categoria'),
  mediaId: optionalMediaIdSchema.describe('Immagine'),
  imageAlt: z.string().max(160).optional().describe('Testo alternativo'),
  categorySlug: z.string().min(1).max(80).describe('Slug categoria immobili'),
  ctaLabel: z.string().max(60).optional().describe('Etichetta link (lettori schermo)'),
})

export const categoryGridContentSchema = z.object({
  eyebrow: z.string().max(60).optional().describe('Sopratitolo (maiuscolo)'),
  title: z.string().max(80).optional().describe('Titolo principale'),
  tagline: z.string().max(160).optional().describe('Sottotitolo (corsivo)'),
  items: z.array(categoryGridItemSchema).length(4).describe('Categorie'),
})

export type CategoryGridItem = z.infer<typeof categoryGridItemSchema>
export type CategoryGridContent = z.infer<typeof categoryGridContentSchema>

export const aboutTeaserCarouselItemSchema = z.object({
  mediaId: optionalMediaIdSchema.describe('Immagine'),
  imageAlt: z.string().max(160).optional().describe('Testo alternativo'),
})

export const aboutTeaserContentSchema = z.object({
  title: z.string().max(80).describe('Titolo'),
  body: z.string().max(600).describe('Testo'),
  button: ctaLinkSchema.describe('Pulsante'),
  backgroundMediaId: optionalMediaIdSchema.describe('Immagine sfondo'),
  backgroundImageAlt: z.string().max(160).optional().describe('Alt sfondo'),
  carouselItems: z
    .array(aboutTeaserCarouselItemSchema)
    .min(1)
    .max(3)
    .describe('Slide carousel'),
  autoplayMs: z.number().int().min(0).max(12000).optional().describe('Autoplay (ms, 0 = off)'),
})

export type AboutTeaserCarouselItem = z.infer<typeof aboutTeaserCarouselItemSchema>
export type AboutTeaserContent = z.infer<typeof aboutTeaserContentSchema>

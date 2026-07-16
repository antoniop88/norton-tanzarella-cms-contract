import { z } from 'zod'
import { ctaLinkSchema, featureItemSchema } from './common.js'

export const heroContentSchema = z.object({
  title: z.string().max(80).describe('Titolo'),
  subtitle: z.string().max(160).optional().describe('Sottotitolo'),
  cta: ctaLinkSchema.optional().describe('CTA'),
  image: z.string().optional().describe('Immagine'),
})

export const featuresContentSchema = z.object({
  title: z.string().max(80).optional().describe('Titolo'),
  lead: z.string().max(200).optional().describe('Introduzione'),
  outro: z.string().max(200).optional().describe('Chiusura'),
  items: z.array(featureItemSchema).min(1).max(12).describe('Elementi'),
})

export const ctaContentSchema = z.object({
  title: z.string().max(80).describe('Titolo'),
  description: z.string().max(200).optional().describe('Descrizione'),
  button: ctaLinkSchema.describe('Pulsante'),
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

export const categoryShowcaseItemSchema = z.object({
  label: z.string().max(80).describe('Titolo categoria'),
  image: z.string().min(1).describe('Immagine'),
  imageAlt: z.string().max(160).optional().describe('Testo alternativo'),
  href: z.string().max(200).describe('Link destinazione'),
  ctaLabel: z.string().max(60).optional().describe('Etichetta CTA'),
})

export const categoryShowcaseContentSchema = z.object({
  title: z.string().max(80).describe('Titolo sezione'),
  items: z.array(categoryShowcaseItemSchema).length(4).describe('Categorie'),
})

export type CategoryShowcaseItem = z.infer<typeof categoryShowcaseItemSchema>
export type CategoryShowcaseContent = z.infer<typeof categoryShowcaseContentSchema>

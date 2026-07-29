import { z } from 'zod'
import { ctaLinkSchema, featureItemSchema, optionalCtaLinkSchema, optionalMediaIdSchema } from './common.js'

export const heroContentSchema = z.object({
  title: z.string().max(80).describe('Titolo'),
  subtitle: z.string().max(600).optional().describe('Sottotitolo'),
  cta: optionalCtaLinkSchema.describe('CTA'),
  videoMediaId: optionalMediaIdSchema.describe('Video sfondo'),
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

const DEFAULT_CATEGORY_SLUGS = ['masseria', 'rustici', 'trulli', 'centro-storico'] as const

/** Extract `category` query from a legacy `/properties?category=…` href. */
function categorySlugFromHref(href: unknown): string | undefined {
  if (typeof href !== 'string' || !href.trim()) return undefined
  try {
    const url = new URL(href, 'https://norton.local')
    const slug = url.searchParams.get('category')?.trim()
    return slug || undefined
  } catch {
    const match = href.match(/[?&]category=([^&]+)/)
    return match?.[1] ? decodeURIComponent(match[1]) : undefined
  }
}

export const categoryShowcaseItemSchema = z.preprocess((raw) => {
  if (raw == null || typeof raw !== 'object' || Array.isArray(raw)) return raw
  const item = raw as Record<string, unknown>
  const existing =
    typeof item.categorySlug === 'string' && item.categorySlug.trim()
      ? item.categorySlug.trim()
      : undefined
  const fromHref = categorySlugFromHref(item.href)
  const { href: _href, ...rest } = item
  return {
    ...rest,
    categorySlug: existing ?? fromHref,
  }
}, z.object({
  label: z.string().max(80).describe('Titolo categoria'),
  mediaId: optionalMediaIdSchema.describe('Immagine'),
  imageAlt: z.string().max(160).optional().describe('Testo alternativo'),
  categorySlug: z.string().min(1).max(80).describe('Slug categoria immobili'),
  ctaLabel: z.string().max(60).optional().describe('Etichetta CTA'),
}))

export const categoryShowcaseContentSchema = z.preprocess((raw) => {
  if (raw == null || typeof raw !== 'object' || Array.isArray(raw)) return raw
  const content = raw as { items?: unknown[] }
  if (!Array.isArray(content.items)) return raw
  return {
    ...content,
    items: content.items.map((item, index) => {
      if (item == null || typeof item !== 'object' || Array.isArray(item)) return item
      const row = item as Record<string, unknown>
      const hasSlug =
        typeof row.categorySlug === 'string' && row.categorySlug.trim().length > 0
      const fromHref = categorySlugFromHref(row.href)
      if (hasSlug || fromHref) return item
      const fallback = DEFAULT_CATEGORY_SLUGS[index]
      if (!fallback) return item
      return { ...row, categorySlug: fallback }
    }),
  }
}, z.object({
  title: z.string().max(80).describe('Titolo sezione'),
  items: z.array(categoryShowcaseItemSchema).length(4).describe('Categorie'),
}))

/** Default showcase slugs by tile index (home migration fallback). */
export const CATEGORY_SHOWCASE_DEFAULT_SLUGS = DEFAULT_CATEGORY_SLUGS

export type CategoryShowcaseItem = z.infer<typeof categoryShowcaseItemSchema>
export type CategoryShowcaseContent = z.infer<typeof categoryShowcaseContentSchema>

import { z } from 'zod'
import { ctaLinkSchema, featureItemSchema } from './common.js'

export const heroContentSchema = z.object({
  title: z.string().max(80),
  subtitle: z.string().max(160).optional(),
  cta: ctaLinkSchema.optional(),
  image: z.string().optional(),
})

export const featuresContentSchema = z.object({
  title: z.string().max(80).optional(),
  lead: z.string().max(200).optional(),
  outro: z.string().max(200).optional(),
  items: z.array(featureItemSchema).min(1).max(12),
})

export const ctaContentSchema = z.object({
  title: z.string().max(80),
  description: z.string().max(200).optional(),
  button: ctaLinkSchema,
})

export const featuredCollectionContentSchema = z.object({
  collectionKey: z.literal('immobili'),
  mode: z.enum(['featured', 'manual']),
  itemIds: z.array(z.string().uuid()).max(6).optional(),
  limit: z.number().int().min(1).max(6).default(6),
  title: z.string().max(80).optional(),
  viewAllLabel: z.string().max(40).optional(),
  hideWhenEmpty: z.boolean().default(true),
})

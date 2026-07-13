import { z } from 'zod'

export const cmsSeoSchema = z.object({
  title: z.string().max(120).optional(),
  description: z.string().max(320).optional(),
})

export const cmsSectionSchema = z.object({
  id: z.string().uuid(),
  type: z.string(),
  enabled: z.boolean(),
  order: z.number().int().min(0),
  content: z.record(z.unknown()),
})

export const cmsPageDocumentSchema = z.object({
  seo: cmsSeoSchema.optional(),
  sections: z.array(cmsSectionSchema),
})

export type CmsPageDocument = z.infer<typeof cmsPageDocumentSchema>
export type CmsSection = z.infer<typeof cmsSectionSchema>

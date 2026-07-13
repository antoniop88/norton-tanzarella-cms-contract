import { z } from 'zod'

export const ctaLinkSchema = z.object({
  label: z.string().max(40),
  to: z.string().max(200),
})

export const featureItemSchema = z.object({
  title: z.string().max(80),
  description: z.string().max(300),
})

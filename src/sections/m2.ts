import { z } from 'zod'
import { ctaLinkSchema, featureItemSchema } from './common.js'

export const pageHeaderContentSchema = z.object({
  title: z.string().max(80),
  lead: z.string().max(200).optional(),
})

export const richTextContentSchema = z.object({
  body: z.string().max(3000),
})

export const legalPolicyContentSchema = z.object({
  source: z.enum(['manual', 'iubenda']),
  iubendaPolicyId: z.string().max(40).optional(),
  body: z.string().max(50000).optional(),
})

export const splitContentSchema = z.object({
  title: z.string().max(80),
  body: z.string().max(2000),
  image: z.string(),
  imageAlt: z.string().max(120).optional(),
  reverse: z.boolean().optional(),
})

export const teamContentSchema = z.object({
  title: z.string().max(80).optional(),
  name: z.string().max(80),
  role: z.string().max(80),
  bio: z.string().max(500),
  image: z.string(),
})

export const statsContentSchema = z.object({
  items: z
    .array(
      z.object({
        value: z.number(),
        suffix: z.string().max(10).optional(),
        label: z.string().max(40),
      }),
    )
    .min(1)
    .max(6),
})

export const faqContentSchema = z.object({
  title: z.string().max(80).optional(),
  items: z
    .array(
      z.object({
        question: z.string().max(200),
        answer: z.string().max(1000),
      }),
    )
    .min(1)
    .max(20),
})

export const testimonialsContentSchema = z.object({
  title: z.string().max(80).optional(),
  items: z
    .array(
      z.object({
        quote: z.string().max(500),
        author: z.string().max(80),
        role: z.string().max(80).optional(),
      }),
    )
    .min(1)
    .max(10),
})

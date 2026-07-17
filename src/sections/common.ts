import { z } from 'zod'

/** Empty string / null from forms → omitted; otherwise must be a UUID. */
export const optionalMediaIdSchema = z.preprocess(
  (val) => (val === '' || val === null ? undefined : val),
  z.string().uuid().optional(),
)

export const ctaLinkSchema = z
  .object({
    label: z.string().max(40).describe('Etichetta'),
    to: z.string().max(200).describe('Destinazione'),
  })
  .describe('Link CTA')

/**
 * Optional CTA from backoffice forms: empty object / blank label+to → omitted.
 * Prevents `cta: {}` (JSON drops undefined keys) from failing Required.
 */
export const optionalCtaLinkSchema = z.preprocess((val) => {
  if (val == null || val === '') return undefined
  if (typeof val !== 'object' || Array.isArray(val)) return val
  const o = val as { label?: unknown; to?: unknown }
  const label = typeof o.label === 'string' ? o.label.trim() : ''
  const to = typeof o.to === 'string' ? o.to.trim() : ''
  if (!label && !to) return undefined
  return { label, to }
}, ctaLinkSchema.optional())

export const featureItemSchema = z
  .object({
    title: z.string().max(80).describe('Titolo'),
    description: z.string().max(300).describe('Descrizione'),
  })
  .describe('Elemento')

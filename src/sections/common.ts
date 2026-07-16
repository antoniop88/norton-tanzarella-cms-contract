import { z } from 'zod'

export const ctaLinkSchema = z
  .object({
    label: z.string().max(40).describe('Etichetta'),
    to: z.string().max(200).describe('Destinazione'),
  })
  .describe('Link CTA')

export const featureItemSchema = z
  .object({
    title: z.string().max(80).describe('Titolo'),
    description: z.string().max(300).describe('Descrizione'),
  })
  .describe('Elemento')

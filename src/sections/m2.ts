import { z } from 'zod'
import { optionalCtaLinkSchema, optionalMediaIdSchema } from './common.js'

export const pageHeaderContentSchema = z.object({
  title: z.string().max(80).describe('Titolo'),
  lead: z.string().max(200).optional().describe('Introduzione'),
  mediaId: optionalMediaIdSchema.describe(
    'Immagine sfondo hero (listing Immobili, Contatti, Trova immobile, …)',
  ),
  imageAlt: z.string().max(160).optional().describe('Alt immagine'),
})

export const richTextContentSchema = z.object({
  body: z.string().max(10000).describe('Contenuto'),
})

export const legalPolicyContentSchema = z.object({
  source: z.enum(['manual', 'iubenda']).describe('Fonte'),
  iubendaPolicyId: z.string().max(40).optional().describe('ID policy Iubenda'),
  body: z.string().max(50000).optional().describe('Testo'),
})

export const splitContentSchema = z.object({
  title: z.string().max(80).describe('Titolo'),
  lead: z.string().max(200).optional().describe('Sottotitolo'),
  body: z.string().max(2000).describe('Testo'),
  mediaId: optionalMediaIdSchema.describe('Immagine'),
  imageAlt: z.string().max(120).optional().describe('Testo alternativo'),
  reverse: z.boolean().optional().describe('Layout invertito'),
  button: optionalCtaLinkSchema.describe('CTA'),
})

/** One numbered sticky block (Chi siamo / Vendi con noi). Numbers come from array index. */
export const stickySplitItemSchema = z.object({
  title: z.string().max(80).describe('Titolo'),
  lead: z.string().max(200).optional().describe('Sottotitolo'),
  body: z.string().max(2000).describe('Testo'),
  mediaId: optionalMediaIdSchema.describe('Immagine'),
  imageAlt: z.string().max(120).optional().describe('Testo alternativo'),
})

export const stickySplitsContentSchema = z.object({
  items: z.array(stickySplitItemSchema).min(1).max(12).describe('Blocchi'),
})

export type StickySplitItem = z.infer<typeof stickySplitItemSchema>
export type StickySplitsContent = z.infer<typeof stickySplitsContentSchema>

export const imageSlideshowItemSchema = z.object({
  mediaId: optionalMediaIdSchema.describe('Immagine'),
  imageAlt: z.string().max(160).optional().describe('Testo alternativo'),
  caption: z.string().max(120).optional().describe('Didascalia'),
})

export const imageSlideshowContentSchema = z.object({
  items: z.array(imageSlideshowItemSchema).min(2).max(8).describe('Slide'),
  autoplayMs: z.number().int().min(0).max(12000).optional().describe('Autoplay (ms, 0 = off)'),
})

export type ImageSlideshowItem = z.infer<typeof imageSlideshowItemSchema>
export type ImageSlideshowContent = z.infer<typeof imageSlideshowContentSchema>

export const teamContentSchema = z.object({
  title: z.string().max(80).optional().describe('Titolo sezione'),
  name: z.string().max(80).describe('Nome'),
  role: z.string().max(80).describe('Ruolo'),
  bio: z.string().max(500).describe('Biografia'),
  mediaId: optionalMediaIdSchema.describe('Foto'),
})

export const statsContentSchema = z.object({
  items: z
    .array(
      z.object({
        value: z.number().describe('Valore'),
        suffix: z.string().max(10).optional().describe('Suffisso'),
        label: z.string().max(40).describe('Etichetta'),
      }),
    )
    .min(1)
    .max(6)
    .describe('Statistiche'),
})

export const faqContentSchema = z.object({
  title: z.string().max(80).optional().describe('Titolo sezione'),
  items: z
    .array(
      z.object({
        question: z.string().max(200).describe('Domanda'),
        answer: z.string().max(1000).describe('Risposta'),
      }),
    )
    .min(1)
    .max(20)
    .describe('Domande'),
})

export const testimonialsContentSchema = z.object({
  title: z.string().max(80).optional().describe('Titolo sezione'),
  items: z
    .array(
      z.object({
        quote: z.string().max(500).describe('Citazione'),
        author: z.string().max(80).describe('Autore'),
        role: z.string().max(80).optional().describe('Ruolo'),
      }),
    )
    .min(1)
    .max(10)
    .describe('Testimonianze'),
})

const youtubePlaylistIdSchema = z
  .string()
  .min(10)
  .max(64)
  .regex(/^UU[\w-]+$/, 'ID playlist uploads YouTube (prefisso UU)')

export const youtubeGalleryContentSchema = z.object({
  playlistId: youtubePlaylistIdSchema.describe('ID playlist YouTube'),
  pageSize: z.number().int().min(1).max(50).default(15).describe('Video per pagina'),
  columns: z.number().int().min(1).max(4).default(3).describe('Colonne griglia'),
  subscribeChannelUrl: z.string().url().max(500).describe('URL canale YouTube'),
  subscribeLabel: z.string().max(80).describe('Testo pulsante subscribe'),
})

export type YoutubeGalleryContent = z.infer<typeof youtubeGalleryContentSchema>

export const googleReviewsContentSchema = z.object({
  title: z.string().max(80).optional().describe('Titolo sezione'),
  maxItems: z.number().int().min(1).max(5).default(5).describe('Recensioni da mostrare (max 5)'),
  hideWhenEmpty: z.boolean().default(true).describe('Nascondi se nessuna recensione'),
  showSummary: z.boolean().default(true).describe('Mostra rating e totale Google'),
})

export type GoogleReviewsContent = z.infer<typeof googleReviewsContentSchema>

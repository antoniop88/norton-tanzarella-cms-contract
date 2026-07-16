import { z } from 'zod'

export const pageHeaderContentSchema = z.object({
  title: z.string().max(80).describe('Titolo'),
  lead: z.string().max(200).optional().describe('Introduzione'),
})

export const richTextContentSchema = z.object({
  body: z.string().max(3000).describe('Contenuto'),
})

export const legalPolicyContentSchema = z.object({
  source: z.enum(['manual', 'iubenda']).describe('Fonte'),
  iubendaPolicyId: z.string().max(40).optional().describe('ID policy Iubenda'),
  body: z.string().max(50000).optional().describe('Testo'),
})

export const splitContentSchema = z.object({
  title: z.string().max(80).describe('Titolo'),
  body: z.string().max(2000).describe('Testo'),
  image: z.string().describe('Immagine'),
  imageAlt: z.string().max(120).optional().describe('Testo alternativo'),
  reverse: z.boolean().optional().describe('Layout invertito'),
})

export const teamContentSchema = z.object({
  title: z.string().max(80).optional().describe('Titolo sezione'),
  name: z.string().max(80).describe('Nome'),
  role: z.string().max(80).describe('Ruolo'),
  bio: z.string().max(500).describe('Biografia'),
  image: z.string().describe('Foto'),
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

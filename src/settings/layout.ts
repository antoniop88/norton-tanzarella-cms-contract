import { z } from 'zod'

const internalPathSchema = z.enum([
  '/',
  '/chi-siamo',
  '/immobili',
  '/articoli',
  '/contatti',
  '/privacy-policy',
  '/cookie-policy',
])

export const cmsNavLinkSchema = z.object({
  label: z.string().max(40),
  to: z.union([internalPathSchema, z.string().url().max(500)]),
  external: z.boolean().optional(),
})

export type CmsNavLink = z.infer<typeof cmsNavLinkSchema>

export const brandSchema = z.object({
  name: z.string().max(60),
  shortName: z.string().max(20),
  tagline: z.string().max(120).optional(),
  description: z.string().max(200).optional(),
})

export const headerCtaSchema = z
  .object({
    label: z.string().max(30),
    to: internalPathSchema,
  })
  .optional()

export const footerColumnSchema = z.object({
  title: z.string().max(40),
  links: z.array(cmsNavLinkSchema).min(1).max(8),
})

export const footerSchema = z.object({
  columns: z.array(footerColumnSchema).min(1).max(4),
})

export const socialLinkSchema = z.object({
  platform: z.enum(['linkedin', 'instagram', 'facebook', 'x']),
  url: z.string().url().max(500),
})

export const layoutSettingsSchema = z.object({
  brand: brandSchema,
  headerNav: z.array(cmsNavLinkSchema).min(1).max(8),
  headerCta: headerCtaSchema,
  footer: footerSchema,
  legalLinks: z.array(cmsNavLinkSchema).min(1).max(6),
  social: z.array(socialLinkSchema).max(6).default([]),
})

export type LayoutSettings = z.infer<typeof layoutSettingsSchema>

export const DEFAULT_LAYOUT_SETTINGS_IT: LayoutSettings = {
  brand: {
    name: 'Norton Tanzarella',
    shortName: 'Norton',
    tagline: 'Agenzia immobiliare di prestigio a Roma.',
    description: 'Consulenza immobiliare, vendita e affitto di proprietà selezionate.',
  },
  headerNav: [
    { label: 'Home', to: '/' },
    { label: 'Chi siamo', to: '/chi-siamo' },
    { label: 'Immobili', to: '/immobili' },
    { label: 'Articoli', to: '/articoli' },
    { label: 'Contatti', to: '/contatti' },
  ],
  headerCta: { label: 'Contattaci', to: '/contatti' },
  footer: {
    columns: [
      {
        title: 'Navigazione',
        links: [
          { label: 'Home', to: '/' },
          { label: 'Chi siamo', to: '/chi-siamo' },
          { label: 'Immobili', to: '/immobili' },
          { label: 'Articoli', to: '/articoli' },
        ],
      },
      {
        title: 'Legale',
        links: [
          { label: 'Privacy policy', to: '/privacy-policy' },
          { label: 'Cookie policy', to: '/cookie-policy' },
        ],
      },
    ],
  },
  legalLinks: [
    { label: 'Privacy policy', to: '/privacy-policy' },
    { label: 'Cookie policy', to: '/cookie-policy' },
  ],
  social: [
    { platform: 'linkedin', url: 'https://linkedin.com/company/norton-tanzarella' },
    { platform: 'instagram', url: 'https://instagram.com/norton.tanzarella' },
  ],
}

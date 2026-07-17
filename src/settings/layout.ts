import { z } from 'zod'
import { SOCIAL_PLATFORM_IDS } from './socialPlatforms.js'

export const MAIN_NAV_PATHS = [
  '/',
  '/about',
  '/properties',
  '/property-finder',
  '/virtual-tours',
  '/sell-with-us',
  '/contact',
] as const

/** Old Italian segments → English-first public paths. */
export const LEGACY_NAV_PATH_MAP = {
  '/chi-siamo': '/about',
  '/immobili': '/properties',
  '/trova-immobile': '/property-finder',
  '/tour-virtuali': '/virtual-tours',
  '/vendi-con-noi': '/sell-with-us',
  '/contatti': '/contact',
} as const satisfies Record<string, (typeof MAIN_NAV_PATHS)[number]>

export function normalizeNavPath(to: string): string {
  return LEGACY_NAV_PATH_MAP[to as keyof typeof LEGACY_NAV_PATH_MAP] ?? to
}

export const LEGAL_LINK_PATHS = ['/privacy-policy', '/cookie-policy'] as const

export const FOOTER_NAV_PATHS = [...MAIN_NAV_PATHS, ...LEGAL_LINK_PATHS] as const

export type MainNavPath = (typeof MAIN_NAV_PATHS)[number]
export type LegalLinkPath = (typeof LEGAL_LINK_PATHS)[number]
export type FooterNavPath = (typeof FOOTER_NAV_PATHS)[number]

function normalizeNavPathInput(value: unknown): unknown {
  if (typeof value !== 'string') return value
  return normalizeNavPath(value)
}

const mainNavPathSchema = z.preprocess(normalizeNavPathInput, z.enum(MAIN_NAV_PATHS))
const legalLinkPathSchema = z.enum(LEGAL_LINK_PATHS)
const footerNavPathSchema = z.preprocess(normalizeNavPathInput, z.enum(FOOTER_NAV_PATHS))

const httpsUrlSchema = z
  .string()
  .url()
  .max(500)
  .refine((value) => value.startsWith('https://'), {
    message: 'URL deve usare HTTPS',
  })

export const cmsNavLinkSchema = z
  .object({
    label: z.string().max(40).describe('Etichetta'),
    to: z.union([footerNavPathSchema, httpsUrlSchema]).describe('Destinazione'),
    external: z.boolean().optional().describe('Link esterno'),
  })
  .describe('Link di navigazione')

export type CmsNavLink = z.infer<typeof cmsNavLinkSchema>

export const mainNavLinkSchema = z
  .object({
    label: z.string().max(40).describe('Etichetta'),
    to: z.union([mainNavPathSchema, httpsUrlSchema]).describe('Destinazione'),
    external: z.boolean().optional().describe('Link esterno'),
  })
  .describe('Link menu principale')

export type MainNavLink = z.infer<typeof mainNavLinkSchema>

export const legalNavLinkSchema = z
  .object({
    label: z.string().max(40).describe('Etichetta'),
    to: legalLinkPathSchema.describe('Destinazione'),
  })
  .describe('Link legale')

export type LegalNavLink = z.infer<typeof legalNavLinkSchema>

export const brandFooterVisibilitySchema = z
  .object({
    name: z.boolean().default(true).describe('Mostra nome nel footer'),
    tagline: z.boolean().default(true).describe('Mostra payoff nel footer'),
    description: z.boolean().default(false).describe('Mostra descrizione nel footer'),
  })
  .describe('Visibilità nel footer')

export type BrandFooterVisibility = z.infer<typeof brandFooterVisibilitySchema>

export const DEFAULT_BRAND_FOOTER_VISIBILITY: BrandFooterVisibility = {
  name: true,
  tagline: true,
  description: false,
}

export const brandSchema = z
  .object({
    name: z.string().max(60).describe('Nome'),
    tagline: z.string().max(120).optional().describe('Payoff'),
    description: z.string().max(200).optional().describe('Descrizione'),
    footerVisibility: brandFooterVisibilitySchema,
  })
  .describe('Brand')

const headerLinkSchema = z.object({
  label: z.string().max(30).describe('Etichetta'),
  to: mainNavPathSchema.describe('Destinazione'),
})

export const headerCtaSchema = headerLinkSchema.optional().describe('CTA header')

export const headerSecondaryCtaSchema = headerLinkSchema
  .optional()
  .describe('CTA secondaria header')

export const footerColumnSchema = z
  .object({
    title: z.string().max(40).describe('Titolo colonna'),
    links: z.array(cmsNavLinkSchema).min(1).max(8).describe('Link'),
  })
  .describe('Colonna footer')

export const footerSchema = z
  .object({
    columns: z.array(footerColumnSchema).min(1).max(4).describe('Colonne'),
  })
  .describe('Footer')

export const socialLinkSchema = z
  .object({
    platform: z.enum(SOCIAL_PLATFORM_IDS).describe('Piattaforma'),
    url: httpsUrlSchema.describe('URL'),
  })
  .describe('Link social')

export type SocialLink = z.infer<typeof socialLinkSchema>

export const layoutSettingsSchema = z.object({
  brand: brandSchema,
  headerNav: z.array(mainNavLinkSchema).min(1).max(8).describe('Menu principale'),
  headerCta: headerCtaSchema,
  headerSecondaryCta: headerSecondaryCtaSchema,
  footer: footerSchema,
  legalLinks: z.array(legalNavLinkSchema).min(1).max(6).describe('Link legali'),
  social: z.array(socialLinkSchema).max(6).default([]).describe('Social'),
})

export type LayoutSettings = z.infer<typeof layoutSettingsSchema>

export const DEFAULT_LAYOUT_SETTINGS_IT: LayoutSettings = {
  brand: {
    name: 'Norton Tanzarella',
    tagline: 'Agenzia immobiliare a Ostuni e in Valle d\'Itria.',
    description: 'Masserie, rustici e trulli: consulenza per acquisto e vendita in Valle d\'Itria.',
    footerVisibility: DEFAULT_BRAND_FOOTER_VISIBILITY,
  },
  headerNav: [
    { label: 'Home', to: '/' },
    { label: 'Chi siamo', to: '/about' },
    { label: 'Immobili', to: '/properties' },
    { label: 'Trova immobile', to: '/property-finder' },
    { label: 'Tour virtuali', to: '/virtual-tours' },
  ],
  headerCta: { label: 'Contattaci', to: '/contact' },
  headerSecondaryCta: { label: 'Vendi con noi', to: '/sell-with-us' },
  footer: {
    columns: [
      {
        title: 'Navigazione',
        links: [
          { label: 'Home', to: '/' },
          { label: 'Chi siamo', to: '/about' },
          { label: 'Immobili', to: '/properties' },
          { label: 'Trova immobile', to: '/property-finder' },
          { label: 'Tour virtuali', to: '/virtual-tours' },
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

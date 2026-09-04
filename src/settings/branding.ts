import { z } from 'zod'

export const hexColorSchema = z
  .string()
  .regex(/^#[0-9A-Fa-f]{6}$/, 'Must be a hex color (#RRGGBB)')

export const FONT_SANS_WHITELIST = [
  'Minion Pro',
  'Montserrat',
  'Nunito Sans',
  'Inter',
  'DM Sans',
] as const
export const FONT_HEADING_WHITELIST = [
  'Cormorant Garamond',
  'Playfair Display',
  'Libre Baskerville',
  'Source Serif 4',
] as const
export const FONT_WHITELIST = [
  ...FONT_SANS_WHITELIST,
  ...FONT_HEADING_WHITELIST,
] as const

export type FontSans = (typeof FONT_SANS_WHITELIST)[number]
export type FontHeading = (typeof FONT_HEADING_WHITELIST)[number]

export const LOGO_SLOTS = [
  'siteHeader',
  'siteFooter',
  'siteFavicon',
  'backofficeLogin',
  'backofficeSidebar',
  'backofficeSidebarCollapsed',
] as const

export type LogoSlot = (typeof LOGO_SLOTS)[number]

const mediaIdSchema = z.string().uuid()

export const logoAltSchema = z.object({
  it: z.string().max(120).optional(),
  en: z.string().max(120).optional(),
})

export const logoSlotSchema = z.object({
  mediaId: mediaIdSchema.optional(),
  mediaIdLight: mediaIdSchema.optional(),
  mediaIdDark: mediaIdSchema.optional(),
  alt: logoAltSchema.optional(),
})

export type LogoSlotConfig = z.infer<typeof logoSlotSchema>

export const brandingColorsSchema = z.object({
  primary: hexColorSchema.describe('Colore primario'),
  secondary: hexColorSchema.describe('Colore secondario'),
  accent: hexColorSchema.describe('Accento'),
  background: hexColorSchema.describe('Sfondo'),
  foreground: hexColorSchema.describe('Testo'),
  success: hexColorSchema.describe('Successo'),
  warning: hexColorSchema.describe('Avviso'),
  error: hexColorSchema.describe('Errore'),
})

export type BrandingColors = z.infer<typeof brandingColorsSchema>

export const brandingTypographySchema = z.object({
  fontSans: z.enum(FONT_SANS_WHITELIST).describe('Font corpo'),
  fontHeading: z.enum(FONT_HEADING_WHITELIST).describe('Font titoli'),
})

export type BrandingTypography = z.infer<typeof brandingTypographySchema>

export const brandingLogosSchema = z.object({
  siteHeader: logoSlotSchema.optional(),
  siteFooter: logoSlotSchema.optional(),
  siteFavicon: logoSlotSchema.optional(),
  backofficeLogin: logoSlotSchema.optional(),
  backofficeSidebar: logoSlotSchema.optional(),
  backofficeSidebarCollapsed: logoSlotSchema.optional(),
})

export type BrandingLogos = z.infer<typeof brandingLogosSchema>

export const propertyWatermarkSchema = z.object({
  enabled: z.boolean().default(false),
  mediaId: mediaIdSchema.optional(),
})

export type PropertyWatermark = z.infer<typeof propertyWatermarkSchema>

export const DEFAULT_PROPERTY_WATERMARK: PropertyWatermark = {
  enabled: false,
}

export const DEFAULT_BRANDING_COLORS: BrandingColors = {
  primary: '#0A2374',
  secondary: '#B2914F',
  accent: '#B2914F',
  background: '#FCFCFD',
  foreground: '#1C1C26',
  success: '#2F9E44',
  warning: '#E67700',
  error: '#C42B2B',
}

export const DEFAULT_BRANDING_TYPOGRAPHY: BrandingTypography = {
  fontSans: 'Minion Pro',
  fontHeading: 'Cormorant Garamond',
}

export const DEFAULT_BRANDING_SCALARS = {
  themeColor: DEFAULT_BRANDING_COLORS.primary,
  backgroundColor: DEFAULT_BRANDING_COLORS.background,
  colors: { ...DEFAULT_BRANDING_COLORS },
  typography: { ...DEFAULT_BRANDING_TYPOGRAPHY },
  logos: {} as BrandingLogos,
  propertyWatermark: { ...DEFAULT_PROPERTY_WATERMARK },
}

/**
 * Full branding scalars stored on cms_settings.scalars.
 * `themeColor` / `backgroundColor` stay for webmanifest / meta compat
 * and are kept in sync with colors.primary / colors.background on write.
 */
export const settingsScalarsSchema = z
  .object({
    themeColor: hexColorSchema,
    backgroundColor: hexColorSchema,
    colors: brandingColorsSchema,
    typography: brandingTypographySchema,
    logos: brandingLogosSchema.default({}),
    propertyWatermark: propertyWatermarkSchema.default({ enabled: false }),
  })
  .superRefine((data, ctx) => {
    if (data.propertyWatermark.enabled && !data.propertyWatermark.mediaId) {
      ctx.addIssue({
        code: 'custom',
        path: ['propertyWatermark', 'mediaId'],
        message: 'mediaId is required when property watermark is enabled',
      })
    }
    if (data.themeColor !== data.colors.primary) {
      ctx.addIssue({
        code: 'custom',
        path: ['themeColor'],
        message: 'themeColor must match colors.primary',
      })
    }
    if (data.backgroundColor !== data.colors.background) {
      ctx.addIssue({
        code: 'custom',
        path: ['backgroundColor'],
        message: 'backgroundColor must match colors.background',
      })
    }
  })

export type SettingsScalars = z.infer<typeof settingsScalarsSchema>

/** Deep-merge unknown/partial DB JSON into a valid SettingsScalars. */
export function normalizeSettingsScalars(raw: unknown): SettingsScalars {
  const base = structuredClone(DEFAULT_BRANDING_SCALARS)
  if (!raw || typeof raw !== 'object') {
    return settingsScalarsSchema.parse(base)
  }

  const input = raw as Record<string, unknown>
  const colorsIn =
    input.colors && typeof input.colors === 'object'
      ? (input.colors as Partial<BrandingColors>)
      : {}
  const typographyIn =
    input.typography && typeof input.typography === 'object'
      ? (input.typography as Partial<BrandingTypography>)
      : {}
  const logosIn =
    input.logos && typeof input.logos === 'object'
      ? (input.logos as BrandingLogos)
      : {}
  const propertyWatermarkIn =
    input.propertyWatermark && typeof input.propertyWatermark === 'object'
      ? (input.propertyWatermark as Partial<PropertyWatermark>)
      : {}

  const primary =
    (typeof colorsIn.primary === 'string' && colorsIn.primary) ||
    (typeof input.themeColor === 'string' && input.themeColor) ||
    base.colors.primary
  const background =
    (typeof colorsIn.background === 'string' && colorsIn.background) ||
    (typeof input.backgroundColor === 'string' && input.backgroundColor) ||
    base.colors.background

  const colors: BrandingColors = {
    ...base.colors,
    ...colorsIn,
    primary,
    background,
  }

  const typography: BrandingTypography = {
    ...base.typography,
    ...typographyIn,
  }

  const propertyWatermark: PropertyWatermark = {
    ...base.propertyWatermark,
    ...propertyWatermarkIn,
  }
  // Keep mediaId when the apply-switch is off: the logo is saved first, enabled later.

  const candidate = {
    themeColor: primary,
    backgroundColor: background,
    colors,
    typography,
    logos: { ...logosIn },
    propertyWatermark,
  }

  const parsed = settingsScalarsSchema.safeParse(candidate)
  if (parsed.success) return parsed.data
  return settingsScalarsSchema.parse(base)
}

const SERIF_BODY_FONTS = new Set<string>(['Minion Pro'])

export function fontSansCssValue(fontSans: string): string {
  const fallback = SERIF_BODY_FONTS.has(fontSans)
    ? 'ui-serif, Georgia, serif'
    : 'ui-sans-serif, system-ui, sans-serif'
  return `'${fontSans}', ${fallback}`
}

/** Map branding scalars to CSS custom properties for :root injection. */
export function scalarsToCssVars(scalars: SettingsScalars): Record<string, string> {
  const { colors, typography } = scalars
  return {
    '--brand-primary': colors.primary,
    '--brand-secondary': colors.secondary,
    '--brand-surface': colors.primary,
    '--brand-secondary-text': colors.secondary,
    '--color-primary': colors.primary,
    '--color-brand': colors.primary,
    '--color-brand-accent': colors.secondary,
    '--color-accent': colors.accent,
    '--color-background': colors.background,
    '--color-foreground': colors.foreground,
    '--color-success': colors.success,
    '--color-warning': colors.warning,
    '--color-error': colors.error,
    '--color-destructive': colors.error,
    '--font-sans': fontSansCssValue(typography.fontSans),
    '--font-display': `'${typography.fontHeading}', ui-serif, Georgia, serif`,
  }
}

export function cssVarsToStyleText(vars: Record<string, string>): string {
  const body = Object.entries(vars)
    .map(([key, value]) => `${key}:${value}`)
    .join(';')
  return `:root{${body}}`
}

/** Collect all media UUIDs referenced by logo slots. */
export function collectLogoMediaIds(logos: BrandingLogos | undefined): string[] {
  if (!logos) return []
  const ids = new Set<string>()
  for (const slot of LOGO_SLOTS) {
    const config = logos[slot]
    if (!config) continue
    if (config.mediaId) ids.add(config.mediaId)
    if (config.mediaIdLight) ids.add(config.mediaIdLight)
    if (config.mediaIdDark) ids.add(config.mediaIdDark)
  }
  return [...ids]
}

/** Collect media UUID referenced by the property watermark setting. */
export function collectPropertyWatermarkMediaIds(
  scalars: Pick<SettingsScalars, 'propertyWatermark'> | undefined,
): string[] {
  const mediaId = scalars?.propertyWatermark?.mediaId
  return mediaId ? [mediaId] : []
}

/** Collect all branding scalar media UUIDs (logos + property watermark). */
export function collectBrandingMediaIds(scalars: SettingsScalars | undefined): string[] {
  if (!scalars) return []
  return [...new Set([...collectLogoMediaIds(scalars.logos), ...collectPropertyWatermarkMediaIds(scalars)])]
}

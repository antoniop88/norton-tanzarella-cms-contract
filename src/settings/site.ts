import { z } from 'zod'
import { DEFAULT_CONTACT_SETTINGS_IT, contactSettingsSchema } from './contact.js'
import { DEFAULT_LAYOUT_SETTINGS_IT, layoutSettingsSchema } from './layout.js'

export const siteSettingsSchema = contactSettingsSchema.merge(layoutSettingsSchema)

export type SiteSettings = z.infer<typeof siteSettingsSchema>

export const DEFAULT_SITE_SETTINGS_IT: SiteSettings = {
  ...DEFAULT_CONTACT_SETTINGS_IT,
  ...DEFAULT_LAYOUT_SETTINGS_IT,
}

export function mergeSiteSettingsDefaults(document: unknown): SiteSettings {
  const partial = (document && typeof document === 'object' ? document : {}) as Record<string, unknown>
  return siteSettingsSchema.parse({
    ...DEFAULT_SITE_SETTINGS_IT,
    ...partial,
    organization: {
      ...DEFAULT_SITE_SETTINGS_IT.organization,
      ...(partial.organization as object | undefined),
    },
    contactForm: {
      ...DEFAULT_SITE_SETTINGS_IT.contactForm,
      ...(partial.contactForm as object | undefined),
    },
    brand: {
      ...DEFAULT_SITE_SETTINGS_IT.brand,
      ...(partial.brand as object | undefined),
    },
    headerNav: partial.headerNav ?? DEFAULT_SITE_SETTINGS_IT.headerNav,
    headerCta: partial.headerCta ?? DEFAULT_SITE_SETTINGS_IT.headerCta,
    footer: partial.footer ?? DEFAULT_SITE_SETTINGS_IT.footer,
    legalLinks: partial.legalLinks ?? DEFAULT_SITE_SETTINGS_IT.legalLinks,
    social: partial.social ?? DEFAULT_SITE_SETTINGS_IT.social,
  })
}

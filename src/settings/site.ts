import { z } from 'zod'
import { DEFAULT_CONTACT_SETTINGS_IT, contactSettingsSchema } from './contact.js'
import {
  DEFAULT_LAYOUT_SETTINGS_IT,
  layoutSettingsSchema,
  type MainNavLink,
} from './layout.js'

export const siteSettingsSchema = contactSettingsSchema.merge(layoutSettingsSchema)

export type SiteSettings = z.infer<typeof siteSettingsSchema>

export const DEFAULT_SITE_SETTINGS_IT: SiteSettings = {
  ...DEFAULT_CONTACT_SETTINGS_IT,
  ...DEFAULT_LAYOUT_SETTINGS_IT,
}

/** Keep stored labels; append any new default nav paths (e.g. after contract upgrades). */
function mergeHeaderNav(stored: unknown): MainNavLink[] {
  const defaults = DEFAULT_SITE_SETTINGS_IT.headerNav
  const excludeTo = new Set(
    [
      DEFAULT_SITE_SETTINGS_IT.headerCta?.to,
      DEFAULT_SITE_SETTINGS_IT.headerSecondaryCta?.to,
    ].filter(Boolean) as string[],
  )

  if (!Array.isArray(stored) || stored.length === 0) {
    return defaults.filter((link) => !excludeTo.has(link.to))
  }

  const byTo = new Map<string, MainNavLink>()
  for (const item of stored) {
    if (!item || typeof item !== 'object') continue
    const link = item as MainNavLink
    if (typeof link.to === 'string' && typeof link.label === 'string') {
      // Drop nav items that duplicate header CTA destinations
      if (excludeTo.has(link.to)) continue
      byTo.set(link.to, link)
    }
  }

  const merged: MainNavLink[] = []
  for (const def of defaults) {
    if (excludeTo.has(def.to)) continue
    merged.push(byTo.get(def.to) ?? def)
    byTo.delete(def.to)
  }
  for (const leftover of byTo.values()) {
    if (excludeTo.has(leftover.to)) continue
    merged.push(leftover)
  }
  return merged.slice(0, 8)
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
      // Deep-merge nested objects so upgrading stored settings (older shape)
      // keeps the newly added default labels (phone/subject) and messages.
      labels: {
        ...DEFAULT_SITE_SETTINGS_IT.contactForm.labels,
        ...((partial.contactForm as { labels?: object } | undefined)?.labels),
      },
      messages: {
        ...DEFAULT_SITE_SETTINGS_IT.contactForm.messages,
        ...((partial.contactForm as { messages?: object } | undefined)?.messages),
      },
    },
    brand: {
      ...DEFAULT_SITE_SETTINGS_IT.brand,
      ...(partial.brand as object | undefined),
      footerVisibility: {
        ...DEFAULT_SITE_SETTINGS_IT.brand.footerVisibility,
        ...((partial.brand as { footerVisibility?: object } | undefined)?.footerVisibility),
      },
    },
    headerNav: mergeHeaderNav(partial.headerNav),
    headerCta: partial.headerCta ?? DEFAULT_SITE_SETTINGS_IT.headerCta,
    headerSecondaryCta:
      partial.headerSecondaryCta ?? DEFAULT_SITE_SETTINGS_IT.headerSecondaryCta,
    footer: partial.footer ?? DEFAULT_SITE_SETTINGS_IT.footer,
    legalLinks: partial.legalLinks ?? DEFAULT_SITE_SETTINGS_IT.legalLinks,
    social: partial.social ?? DEFAULT_SITE_SETTINGS_IT.social,
  })
}

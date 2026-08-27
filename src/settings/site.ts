import { z } from 'zod'
import { DEFAULT_CONTACT_SETTINGS_IT, contactSettingsSchema } from './contact.js'
import {
  DEFAULT_LAYOUT_SETTINGS_IT,
  DEFAULT_SITE_MENU_SETTINGS_IT,
  layoutSettingsSchema,
  normalizeNavPath,
  siteMenuSettingsSchema,
  type MainNavLink,
  type MainNavPath,
  type SiteMenuSettings,
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
      const to = normalizeNavPath(link.to)
      // Drop nav items that duplicate header CTA destinations
      if (excludeTo.has(to)) continue
      byTo.set(to, { ...link, to: to as MainNavPath })
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

function normalizeHeaderCta(value: unknown): SiteSettings['headerCta'] | undefined {
  if (!value || typeof value !== 'object') return undefined
  const link = value as { label?: unknown; to?: unknown }
  if (typeof link.label !== 'string' || typeof link.to !== 'string') return undefined
  return { label: link.label, to: normalizeNavPath(link.to) as MainNavPath }
}

function normalizeFooter(value: unknown): SiteSettings['footer'] | undefined {
  if (!value || typeof value !== 'object') return undefined
  const footer = value as { columns?: unknown }
  if (!Array.isArray(footer.columns)) return undefined
  return {
    columns: footer.columns.map((col) => {
      const column = col as { title?: unknown; links?: unknown }
      const title = typeof column.title === 'string' ? column.title : ''
      const links = Array.isArray(column.links)
        ? column.links
            .map((item) => {
              if (!item || typeof item !== 'object') return null
              const link = item as { label?: unknown; to?: unknown; external?: unknown }
              if (typeof link.label !== 'string' || typeof link.to !== 'string') return null
              return {
                label: link.label,
                to: normalizeNavPath(link.to) as MainNavPath,
                ...(typeof link.external === 'boolean' ? { external: link.external } : {}),
              }
            })
            .filter((link): link is NonNullable<typeof link> => link != null)
        : []
      return { title, links }
    }),
  }
}

function normalizeMenu(value: unknown): SiteMenuSettings {
  const defaults = DEFAULT_SITE_MENU_SETTINGS_IT
  if (!value || typeof value !== 'object') return { ...defaults }
  const parsed = siteMenuSettingsSchema.safeParse({
    ...defaults,
    ...value,
    mediaId:
      (value as { mediaId?: unknown }).mediaId === '' ||
      (value as { mediaId?: unknown }).mediaId === null
        ? undefined
        : (value as { mediaId?: unknown }).mediaId,
  })
  if (!parsed.success) return { ...defaults }
  return parsed.data
}

export function mergeSiteSettingsDefaults(document: unknown): SiteSettings {
  const partial = (document && typeof document === 'object' ? document : {}) as Record<string, unknown>
  const partialOrg = (partial.organization as Record<string, unknown> | undefined) ?? {}
  const partialForm = (partial.contactForm as Record<string, unknown> | undefined) ?? {}

  // Optional email/url fields reject "" under Zod — coerce blanks to undefined.
  const blankToUndefined = (value: unknown) => (value === '' ? undefined : value)

  return siteSettingsSchema.parse({
    ...DEFAULT_SITE_SETTINGS_IT,
    ...partial,
    organization: {
      ...DEFAULT_SITE_SETTINGS_IT.organization,
      ...partialOrg,
      ...('mapUrl' in partialOrg ? { mapUrl: blankToUndefined(partialOrg.mapUrl) } : {}),
    },
    contactForm: {
      ...DEFAULT_SITE_SETTINGS_IT.contactForm,
      ...partialForm,
      ...('leadRecipientEmail' in partialForm
        ? { leadRecipientEmail: blankToUndefined(partialForm.leadRecipientEmail) }
        : {}),
      ...('privacyPolicyUrl' in partialForm
        ? { privacyPolicyUrl: blankToUndefined(partialForm.privacyPolicyUrl) }
        : {}),
      // Deep-merge nested objects so upgrading stored settings (older shape)
      // keeps the newly added default labels (phone/subject) and messages.
      labels: {
        ...DEFAULT_SITE_SETTINGS_IT.contactForm.labels,
        ...((partialForm.labels as object | undefined) ?? undefined),
      },
      messages: {
        ...DEFAULT_SITE_SETTINGS_IT.contactForm.messages,
        ...((partialForm.messages as object | undefined) ?? undefined),
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
    headerCta: normalizeHeaderCta(partial.headerCta) ?? DEFAULT_SITE_SETTINGS_IT.headerCta,
    headerSecondaryCta:
      normalizeHeaderCta(partial.headerSecondaryCta) ?? DEFAULT_SITE_SETTINGS_IT.headerSecondaryCta,
    footer: normalizeFooter(partial.footer) ?? DEFAULT_SITE_SETTINGS_IT.footer,
    legalLinks: partial.legalLinks ?? DEFAULT_SITE_SETTINGS_IT.legalLinks,
    social: partial.social ?? DEFAULT_SITE_SETTINGS_IT.social,
    menu: normalizeMenu(partial.menu),
  })
}

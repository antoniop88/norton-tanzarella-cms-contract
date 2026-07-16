import { describe, expect, it } from 'vitest'
import {
  DEFAULT_LAYOUT_SETTINGS_IT,
  FOOTER_NAV_PATHS,
  LEGAL_LINK_PATHS,
  MAIN_NAV_PATHS,
  layoutSettingsSchema,
  legalNavLinkSchema,
  socialLinkSchema,
} from '../src/index.js'

describe('layout path constants', () => {
  it('defines main nav paths without legal pages', () => {
    expect(MAIN_NAV_PATHS).not.toContain('/privacy-policy')
    expect(MAIN_NAV_PATHS).toContain('/contatti')
  })

  it('merges main and legal paths for footer nav', () => {
    for (const path of MAIN_NAV_PATHS) {
      expect(FOOTER_NAV_PATHS).toContain(path)
    }
    for (const path of LEGAL_LINK_PATHS) {
      expect(FOOTER_NAV_PATHS).toContain(path)
    }
  })
})

describe('legalNavLinkSchema', () => {
  it('accepts policy paths only', () => {
    expect(
      legalNavLinkSchema.safeParse({ label: 'Privacy', to: '/privacy-policy' }).success,
    ).toBe(true)
  })

  it('rejects non-policy internal paths', () => {
    expect(
      legalNavLinkSchema.safeParse({ label: 'Home', to: '/' }).success,
    ).toBe(false)
  })
})

describe('socialLinkSchema', () => {
  it('accepts https urls for supported platforms', () => {
    expect(
      socialLinkSchema.safeParse({
        platform: 'youtube',
        url: 'https://youtube.com/@norton',
      }).success,
    ).toBe(true)
  })

  it('rejects http urls', () => {
    expect(
      socialLinkSchema.safeParse({
        platform: 'linkedin',
        url: 'http://linkedin.com/company/test',
      }).success,
    ).toBe(false)
  })

  it('rejects unknown platforms', () => {
    expect(
      socialLinkSchema.safeParse({
        platform: 'github',
        url: 'https://github.com/test',
      }).success,
    ).toBe(false)
  })
})

describe('layoutSettingsSchema', () => {
  it('accepts default layout settings', () => {
    expect(layoutSettingsSchema.safeParse(DEFAULT_LAYOUT_SETTINGS_IT).success).toBe(true)
  })

  it('rejects header nav pointing to legal pages', () => {
    const invalid = {
      ...DEFAULT_LAYOUT_SETTINGS_IT,
      headerNav: [{ label: 'Privacy', to: '/privacy-policy' }],
    }
    expect(layoutSettingsSchema.safeParse(invalid).success).toBe(false)
  })

  it('rejects more than 6 social links', () => {
    const invalid = {
      ...DEFAULT_LAYOUT_SETTINGS_IT,
      social: Array.from({ length: 7 }, (_, index) => ({
        platform: 'linkedin' as const,
        url: `https://linkedin.com/company/test-${index}`,
      })),
    }
    expect(layoutSettingsSchema.safeParse(invalid).success).toBe(false)
  })

  it('rejects footer column with http external url', () => {
    const invalid = {
      ...DEFAULT_LAYOUT_SETTINGS_IT,
      footer: {
        columns: [
          {
            title: 'Esterni',
            links: [{ label: 'Partner', to: 'http://example.com', external: true }],
          },
        ],
      },
    }
    expect(layoutSettingsSchema.safeParse(invalid).success).toBe(false)
  })
})

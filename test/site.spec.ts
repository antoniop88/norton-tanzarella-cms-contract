import { describe, expect, it } from 'vitest'
import {
  DEFAULT_SITE_SETTINGS_IT,
  mergeSiteSettingsDefaults,
} from '../src/index.js'

describe('mergeSiteSettingsDefaults', () => {
  it('keeps default leadRecipientEmail when key is absent from partial', () => {
    const merged = mergeSiteSettingsDefaults({
      contactForm: { enabled: true },
    })
    expect(merged.contactForm.leadRecipientEmail).toBe(
      DEFAULT_SITE_SETTINGS_IT.contactForm.leadRecipientEmail,
    )
  })

  it('rejects blank leadRecipientEmail when contact form is enabled', () => {
    expect(() =>
      mergeSiteSettingsDefaults({
        contactForm: { enabled: true, leadRecipientEmail: '' },
      }),
    ).toThrow()
  })

  it('keeps default mapUrl and privacyPolicyUrl when keys are absent', () => {
    const merged = mergeSiteSettingsDefaults({
      organization: { legalName: 'Test Org' },
      contactForm: { enabled: true },
    })
    expect(merged.organization.mapUrl).toBe(DEFAULT_SITE_SETTINGS_IT.organization.mapUrl)
    expect(merged.contactForm.privacyPolicyUrl).toBe(
      DEFAULT_SITE_SETTINGS_IT.contactForm.privacyPolicyUrl,
    )
  })

  it('fills default menu panel when menu key is absent', () => {
    const merged = mergeSiteSettingsDefaults({})
    expect(merged.menu.quote).toBe(DEFAULT_SITE_SETTINGS_IT.menu.quote)
    expect(merged.menu.attribution).toBe(DEFAULT_SITE_SETTINGS_IT.menu.attribution)
    expect(merged.menu.mediaId).toBeUndefined()
  })

  it('keeps stored menu mediaId and quote', () => {
    const mediaId = '11111111-1111-4111-8111-111111111111'
    const merged = mergeSiteSettingsDefaults({
      menu: { mediaId, quote: 'Custom quote', attribution: '— Test' },
    })
    expect(merged.menu).toEqual({
      mediaId,
      quote: 'Custom quote',
      attribution: '— Test',
    })
  })

  it('appends sell-with-us to headerNav and excludes only headerCta', () => {
    const merged = mergeSiteSettingsDefaults({
      headerNav: [
        { label: 'Home', to: '/' },
        { label: 'Chi siamo', to: '/about' },
      ],
    })
    expect(merged.headerNav.map((link) => link.to)).toEqual([
      '/',
      '/about',
      '/properties',
      '/property-finder',
      '/virtual-tours',
      '/sell-with-us',
    ])
    expect(merged.headerNav.some((link) => link.to === '/contact')).toBe(false)
    expect(merged.headerSecondaryCta?.to).toBe('/sell-with-us')
  })
})

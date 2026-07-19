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
})

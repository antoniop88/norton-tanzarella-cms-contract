import { describe, expect, it } from 'vitest'
import {
  DEFAULT_BRANDING_SCALARS,
  cssVarsToStyleText,
  normalizeSettingsScalars,
  scalarsToCssVars,
  settingsScalarsSchema,
  collectBrandingMediaIds,
  collectPropertyWatermarkMediaIds,
} from '../src/index.js'

describe('branding scalars', () => {
  it('normalizes legacy themeColor/backgroundColor only', () => {
    const scalars = normalizeSettingsScalars({
      themeColor: '#112233',
      backgroundColor: '#abcdef',
    })
    expect(scalars.colors.primary).toBe('#112233')
    expect(scalars.colors.background).toBe('#abcdef')
    expect(scalars.themeColor).toBe('#112233')
    expect(scalars.typography.fontSans).toBe('Minion Pro')
    expect(scalars.typography.fontHeading).toBe('Cormorant Garamond')
  })

  it('parses full defaults', () => {
    const parsed = settingsScalarsSchema.safeParse(DEFAULT_BRANDING_SCALARS)
    expect(parsed.success).toBe(true)
  })

  it('builds css vars without FOUC-critical missing keys', () => {
    const vars = scalarsToCssVars(normalizeSettingsScalars(undefined))
    expect(vars['--brand-primary']).toMatch(/^#/)
    expect(vars['--font-sans']).toContain('Minion Pro')
    expect(vars['--font-sans']).toContain('ui-serif')
    expect(vars['--font-display']).toContain('Cormorant Garamond')
    const css = cssVarsToStyleText(vars)
    expect(css.startsWith(':root{')).toBe(true)
  })

  it('defaults property watermark to disabled', () => {
    const scalars = normalizeSettingsScalars(undefined)
    expect(scalars.propertyWatermark.enabled).toBe(false)
    expect(scalars.propertyWatermark.mediaId).toBeUndefined()
  })

  it('normalizes property watermark from partial input', () => {
    const mediaId = 'aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee'
    const scalars = normalizeSettingsScalars({
      propertyWatermark: { enabled: true, mediaId },
    })
    expect(scalars.propertyWatermark.enabled).toBe(true)
    expect(scalars.propertyWatermark.mediaId).toBe(mediaId)
  })

  it('keeps watermark mediaId when the apply switch is off', () => {
    const mediaId = 'aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee'
    const scalars = normalizeSettingsScalars({
      propertyWatermark: { enabled: false, mediaId },
    })
    expect(scalars.propertyWatermark.enabled).toBe(false)
    expect(scalars.propertyWatermark.mediaId).toBe(mediaId)
  })

  it('rejects enabled watermark without mediaId', () => {
    const parsed = settingsScalarsSchema.safeParse({
      ...DEFAULT_BRANDING_SCALARS,
      propertyWatermark: { enabled: true },
    })
    expect(parsed.success).toBe(false)
  })

  it('collects branding media ids including watermark', () => {
    const mediaId = 'aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee'
    const scalars = normalizeSettingsScalars({
      propertyWatermark: { enabled: true, mediaId },
      logos: {
        siteHeader: { mediaId: 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb' },
      },
    })
    expect(collectPropertyWatermarkMediaIds(scalars)).toEqual([mediaId])
    expect(collectBrandingMediaIds(scalars).sort()).toEqual(
      [mediaId, 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb'].sort(),
    )
  })
})

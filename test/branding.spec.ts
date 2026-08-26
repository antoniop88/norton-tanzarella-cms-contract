import { describe, expect, it } from 'vitest'
import {
  DEFAULT_BRANDING_SCALARS,
  cssVarsToStyleText,
  normalizeSettingsScalars,
  scalarsToCssVars,
  settingsScalarsSchema,
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
})

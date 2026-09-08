import { describe, expect, it } from 'vitest'
import {
  PAGE_REGISTRY,
  PERFORMANCE_SELL_HERO_TITLES,
  migrateSellWithUsPage,
  migrateSellWithUsPerformanceCopy,
  parseSectionContent,
} from '../src/index.js'

describe('sell-with-us registry', () => {
  it('allows landing sections in locked order', () => {
    expect(PAGE_REGISTRY['sell-with-us'].allowedTypes).toEqual([
      'sellHero',
      'sellMethod',
      'valuationLead',
      'socialReach',
    ])
  })

  it('seeds IT/EN documents that parse', () => {
    for (const locale of ['it', 'en'] as const) {
      const document = PAGE_REGISTRY['sell-with-us'].defaults(locale)
      expect(document.sections.map((section) => section.type)).toEqual([
        'sellHero',
        'sellMethod',
        'valuationLead',
        'socialReach',
      ])
      for (const section of document.sections) {
        const parsed = parseSectionContent(section.type, section.content)
        expect(parsed.success, `${locale}/${section.type}`).toBe(true)
      }
    }
  })

  it('uses luxury mandate copy, not performance speed copy', () => {
    const it = PAGE_REGISTRY['sell-with-us'].defaults('it')
    const hero = it.sections.find((section) => section.type === 'sellHero')!
    expect((hero.content as { title: string }).title).toBe(
      'La tua proprietà merita un pubblico scelto.',
    )
    expect(PERFORMANCE_SELL_HERO_TITLES.has((hero.content as { title: string }).title)).toBe(
      false,
    )
  })
})

describe('migrateSellWithUsPerformanceCopy', () => {
  const defaults = PAGE_REGISTRY['sell-with-us'].defaults('it')
  const defaultHero = defaults.sections.find((section) => section.type === 'sellHero')!
  const defaultMethod = defaults.sections.find((section) => section.type === 'sellMethod')!

  it('replaces performance copy and preserves media/youtube', () => {
    const mediaId = '11111111-1111-4111-8111-111111111111'
    const youtubeUrl = 'https://www.youtube.com/watch?v=customVideo'
    const migrated = migrateSellWithUsPerformanceCopy(
      [
        {
          id: defaultHero.id,
          type: 'sellHero',
          enabled: true,
          order: 0,
          content: {
            title: [...PERFORMANCE_SELL_HERO_TITLES][0],
            titleHighlight: 'e al miglior prezzo?',
            subtitle: 'Old subtitle',
            primaryCta: { label: 'Richiedi una valutazione' },
            mediaId,
            imageAlt: 'Villa',
          },
        },
        {
          id: defaultMethod.id,
          type: 'sellMethod',
          enabled: true,
          order: 1,
          content: {
            title: 'Selezioniamo solo immobili idonei',
            intro: 'Old intro',
            bullets: ['a', 'b', 'c'],
            closing: 'Old closing',
            youtubeUrl,
          },
        },
      ],
      defaults,
    )

    const hero = migrated[0]!.content as Record<string, unknown>
    const method = migrated[1]!.content as Record<string, unknown>
    expect(hero.title).toBe((defaultHero.content as { title: string }).title)
    expect(hero.mediaId).toBe(mediaId)
    expect(hero.imageAlt).toBe('Villa')
    expect(method.title).toBe((defaultMethod.content as { title: string }).title)
    expect(method.youtubeUrl).toBe(youtubeUrl)
  })

  it('keeps a custom hero title untouched', () => {
    const migrated = migrateSellWithUsPerformanceCopy(
      [
        {
          id: defaultHero.id,
          type: 'sellHero',
          enabled: true,
          order: 0,
          content: {
            title: 'Titolo custom proprietario',
            primaryCta: { label: 'CTA custom' },
          },
        },
      ],
      defaults,
    )

    const hero = migrated[0]!.content as Record<string, unknown>
    expect(hero.title).toBe('Titolo custom proprietario')
    expect(hero.primaryCta).toEqual({ label: 'CTA custom' })
  })

  it('replaces performance SEO description via migrateSellWithUsPage', () => {
    const migrated = migrateSellWithUsPage(
      {
        seo: {
          title: 'Vendi con noi',
          description:
            'Vuoi vendere casa più velocemente e al miglior prezzo? Scopri il metodo Norton Tanzarella: video, social e valutazione professionale.',
        },
        sections: [
          {
            id: defaultHero.id,
            type: 'sellHero',
            enabled: true,
            order: 0,
            content: {
              title: 'Titolo custom',
              primaryCta: { label: 'CTA' },
            },
          },
        ],
      },
      defaults,
    )

    expect(migrated.seo?.description).toBe(defaults.seo?.description)
  })
})

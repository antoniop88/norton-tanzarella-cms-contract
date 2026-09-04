import { describe, expect, it } from 'vitest'
import {
  LEGACY_PROPERTY_FINDER_TITLES,
  PAGE_REGISTRY,
  migratePropertyFinderBriefing,
  migratePropertyFinderPage,
  parseSectionContent,
} from '../src/index.js'

describe('property-finder registry', () => {
  it('allows briefing sections and not richText', () => {
    expect(PAGE_REGISTRY['property-finder'].allowedTypes).toEqual([
      'pageHeader',
      'itinerary',
      'statement',
      'destinations',
      'cta',
    ])
  })

  it('seeds IT/EN documents that parse', () => {
    for (const locale of ['it', 'en'] as const) {
      const document = PAGE_REGISTRY['property-finder'].defaults(locale)
      expect(document.sections.map((section) => section.type)).toEqual([
        'pageHeader',
        'itinerary',
        'statement',
        'destinations',
        'cta',
      ])
      for (const section of document.sections) {
        const parsed = parseSectionContent(section.type, section.content)
        expect(parsed.success, `${locale}/${section.type}`).toBe(true)
      }
    }
  })
})

describe('migratePropertyFinderBriefing', () => {
  const defaults = PAGE_REGISTRY['property-finder'].defaults('it')
  const defaultHeader = defaults.sections.find((section) => section.type === 'pageHeader')!

  it('replaces legacy brochure title/lead and backfills eyebrow', () => {
    const mediaId = '11111111-1111-4111-8111-111111111111'
    const migrated = migratePropertyFinderBriefing(
      [
        {
          id: defaultHeader.id,
          type: 'pageHeader',
          enabled: true,
          order: 0,
          content: {
            title: [...LEGACY_PROPERTY_FINDER_TITLES][0],
            lead: 'Dalla prima consulenza all’acquisto, ti accompagniamo in ogni fase.',
            mediaId,
            imageAlt: 'Masseria',
          },
        },
      ],
      defaults,
    )

    const content = migrated[0]!.content as Record<string, unknown>
    expect(content.title).toBe(defaultHeader.content.title)
    expect(content.lead).toBe(defaultHeader.content.lead)
    expect(content.eyebrow).toBe(defaultHeader.content.eyebrow)
    expect(content.mediaId).toBe(mediaId)
    expect(content.imageAlt).toBe('Masseria')
  })

  it('keeps a custom title and only backfills eyebrow', () => {
    const migrated = migratePropertyFinderBriefing(
      [
        {
          id: defaultHeader.id,
          type: 'pageHeader',
          enabled: true,
          order: 0,
          content: {
            title: 'Titolo custom',
            lead: 'Lead custom',
          },
        },
      ],
      defaults,
    )

    const content = migrated[0]!.content as Record<string, unknown>
    expect(content.title).toBe('Titolo custom')
    expect(content.lead).toBe('Lead custom')
    expect(content.eyebrow).toBe(defaultHeader.content.eyebrow)
  })

  it('replaces legacy SEO description', () => {
    const migrated = migratePropertyFinderPage(
      {
        seo: {
          title: 'Trova immobile',
          description:
            'Servizio completo di ricerca immobili in Italia: profilo su misura, visite, negoziazione e gestione legale e fiscale.',
        },
        sections: defaults.sections,
      },
      defaults,
    )
    expect(migrated.seo?.description).toBe(defaults.seo?.description)
  })
})

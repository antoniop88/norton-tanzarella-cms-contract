import type { CmsPageDocument } from './document.js'

export type PageKey =
  | 'home'
  | 'chi-siamo'
  | 'immobili-index'
  | 'contatti'
  | 'property-finder'
  | 'virtual-tours'
  | 'sell-with-us'
  | 'privacy-policy'
  | 'cookie-policy'

export type PageRegistryEntry = {
  allowedTypes: string[]
  reorderable: string[]
  defaults: (locale: 'it' | 'en') => CmsPageDocument
  milestone: 'M1' | 'M2' | 'M3'
}

const CATEGORY_SHOWCASE_ITEMS_IT = [
  {
    label: 'Attici e penthouse',
    image: '/full-logo.png',
    imageAlt: 'Attici e penthouse',
    href: '/immobili',
    ctaLabel: 'Vedi gli immobili',
  },
  {
    label: 'Ville e dimore',
    image: '/full-logo.png',
    imageAlt: 'Ville e dimore',
    href: '/immobili',
    ctaLabel: 'Vedi gli immobili',
  },
  {
    label: 'Appartamenti',
    image: '/full-logo.png',
    imageAlt: 'Appartamenti',
    href: '/immobili',
    ctaLabel: 'Vedi gli immobili',
  },
  {
    label: 'Investimenti',
    image: '/full-logo.png',
    imageAlt: 'Investimenti',
    href: '/immobili',
    ctaLabel: 'Vedi gli immobili',
  },
] as const

const HOME_DEFAULTS_IT: CmsPageDocument = {
  seo: {
    title: 'Norton Tanzarella',
    description: 'Agenzia immobiliare a Roma.',
  },
  sections: [
    {
      id: '00000000-0000-4000-8000-000000000001',
      type: 'hero',
      enabled: true,
      order: 0,
      content: {
        title: 'Trova la casa dei tuoi sogni a Roma',
        subtitle: 'Consulenza immobiliare personalizzata per acquisto e vendita.',
        cta: { label: 'Scopri gli immobili', to: '/immobili' },
      },
    },
    {
      id: '00000000-0000-4000-8000-000000000005',
      type: 'categoryShowcase',
      enabled: true,
      order: 1,
      content: {
        title: 'Proprietà di prestigio a Roma',
        items: [...CATEGORY_SHOWCASE_ITEMS_IT],
      },
    },
    {
      id: '00000000-0000-4000-8000-000000000002',
      type: 'features',
      enabled: true,
      order: 2,
      content: {
        title: 'Perché sceglierci',
        items: [
          { title: 'Esperienza locale', description: 'Conoscenza approfondita del mercato romano.' },
          { title: 'Assistenza completa', description: 'Dalla valutazione alla firma del rogito.' },
          { title: 'Trasparenza', description: 'Informazioni chiare in ogni fase della trattativa.' },
        ],
      },
    },
    {
      id: '00000000-0000-4000-8000-000000000003',
      type: 'featuredCollection',
      enabled: true,
      order: 3,
      content: {
        collectionKey: 'immobili',
        mode: 'featured',
        limit: 6,
        title: 'Immobili in evidenza',
        viewAllLabel: 'Vedi tutti',
        hideWhenEmpty: true,
      },
    },
    {
      id: '00000000-0000-4000-8000-000000000004',
      type: 'cta',
      enabled: true,
      order: 4,
      content: {
        title: 'Hai bisogno di una valutazione?',
        description: 'Contattaci per un appuntamento senza impegno.',
        button: { label: 'Contattaci', to: '/contatti' },
      },
    },
  ],
}

const HOME_DEFAULTS_EN: CmsPageDocument = {
  seo: {
    title: 'Norton Tanzarella',
    description: 'Real estate agency in Rome.',
  },
  sections: HOME_DEFAULTS_IT.sections.map((section) => ({ ...section })),
}

export const PAGE_REGISTRY: Record<PageKey, PageRegistryEntry> = {
  home: {
    allowedTypes: ['hero', 'categoryShowcase', 'features', 'featuredCollection', 'cta'],
    reorderable: ['categoryShowcase', 'features', 'featuredCollection', 'cta'],
    defaults: (locale) => (locale === 'en' ? HOME_DEFAULTS_EN : HOME_DEFAULTS_IT),
    milestone: 'M1',
  },
  'chi-siamo': {
    allowedTypes: ['hero', 'split', 'team', 'stats', 'cta'],
    reorderable: ['split', 'team', 'stats', 'cta'],
    defaults: (locale) =>
      locale === 'en'
        ? {
            seo: { title: 'About us', description: 'Norton Tanzarella real estate agency.' },
            sections: [
              {
                id: '00000000-0000-4000-8000-000000000010',
                type: 'hero',
                enabled: true,
                order: 0,
                content: {
                  title: 'Your trusted partner in Rome',
                  subtitle: 'Experience, transparency and local knowledge.',
                },
              },
            ],
          }
        : {
            seo: { title: 'Chi siamo', description: 'Agenzia immobiliare Norton Tanzarella.' },
            sections: [
              {
                id: '00000000-0000-4000-8000-000000000010',
                type: 'hero',
                enabled: true,
                order: 0,
                content: {
                  title: 'Il tuo partner di fiducia a Roma',
                  subtitle: 'Esperienza, trasparenza e conoscenza del territorio.',
                },
              },
            ],
          },
    milestone: 'M2',
  },
  'immobili-index': {
    allowedTypes: ['pageHeader'],
    reorderable: [],
    defaults: (locale) =>
      locale === 'en'
        ? {
            seo: { title: 'Properties', description: 'Browse our property listings in Rome.' },
            sections: [
              {
                id: '00000000-0000-4000-8000-000000000050',
                type: 'pageHeader',
                enabled: true,
                order: 0,
                content: {
                  title: 'Properties',
                  lead: 'Find the right home in Rome with Norton Tanzarella.',
                },
              },
            ],
          }
        : {
            seo: { title: 'Immobili', description: 'Sfoglia gli immobili in vendita a Roma.' },
            sections: [
              {
                id: '00000000-0000-4000-8000-000000000050',
                type: 'pageHeader',
                enabled: true,
                order: 0,
                content: {
                  title: 'Immobili',
                  lead: 'Trova la casa giusta a Roma con Norton Tanzarella.',
                },
              },
            ],
          },
    milestone: 'M3',
  },
  contatti: {
    allowedTypes: ['pageHeader', 'richText'],
    reorderable: [],
    defaults: (locale) =>
      locale === 'en'
        ? {
            seo: { title: 'Contact', description: 'Get in touch with Norton Tanzarella.' },
            sections: [
              {
                id: '00000000-0000-4000-8000-000000000020',
                type: 'pageHeader',
                enabled: true,
                order: 0,
                content: { title: 'Contact us', lead: 'We are here to help with your property needs.' },
              },
              {
                id: '00000000-0000-4000-8000-000000000021',
                type: 'richText',
                enabled: true,
                order: 1,
                content: { body: 'Write to us for valuations, viewings or general information.' },
              },
            ],
          }
        : {
            seo: { title: 'Contatti', description: 'Contatta Norton Tanzarella.' },
            sections: [
              {
                id: '00000000-0000-4000-8000-000000000020',
                type: 'pageHeader',
                enabled: true,
                order: 0,
                content: { title: 'Contattaci', lead: 'Siamo a disposizione per ogni esigenza immobiliare.' },
              },
              {
                id: '00000000-0000-4000-8000-000000000021',
                type: 'richText',
                enabled: true,
                order: 1,
                content: {
                  body: 'Scrivici per valutazioni, appuntamenti di visita o informazioni generali.',
                },
              },
            ],
          },
    milestone: 'M2',
  },
  'property-finder': {
    allowedTypes: ['pageHeader'],
    reorderable: [],
    defaults: (locale) =>
      locale === 'en'
        ? {
            seo: {
              title: 'Property Finder',
              description: 'Find your next property with Norton Tanzarella.',
            },
            sections: [
              {
                id: '00000000-0000-4000-8000-000000000060',
                type: 'pageHeader',
                enabled: true,
                order: 0,
                content: {
                  title: 'Property Finder',
                  lead: 'Page under construction.',
                },
              },
            ],
          }
        : {
            seo: {
              title: 'Trova immobile',
              description: 'Trova il prossimo immobile con Norton Tanzarella.',
            },
            sections: [
              {
                id: '00000000-0000-4000-8000-000000000060',
                type: 'pageHeader',
                enabled: true,
                order: 0,
                content: {
                  title: 'Trova immobile',
                  lead: 'Pagina in costruzione.',
                },
              },
            ],
          },
    milestone: 'M2',
  },
  'virtual-tours': {
    allowedTypes: ['pageHeader'],
    reorderable: [],
    defaults: (locale) =>
      locale === 'en'
        ? {
            seo: {
              title: 'Virtual Tours',
              description: 'Explore selected properties with virtual tours.',
            },
            sections: [
              {
                id: '00000000-0000-4000-8000-000000000070',
                type: 'pageHeader',
                enabled: true,
                order: 0,
                content: {
                  title: 'Virtual Tours',
                  lead: 'Page under construction.',
                },
              },
            ],
          }
        : {
            seo: {
              title: 'Tour virtuali',
              description: 'Esplora immobili selezionati con tour virtuali.',
            },
            sections: [
              {
                id: '00000000-0000-4000-8000-000000000070',
                type: 'pageHeader',
                enabled: true,
                order: 0,
                content: {
                  title: 'Tour virtuali',
                  lead: 'Pagina in costruzione.',
                },
              },
            ],
          },
    milestone: 'M2',
  },
  'sell-with-us': {
    allowedTypes: ['pageHeader'],
    reorderable: [],
    defaults: (locale) =>
      locale === 'en'
        ? {
            seo: {
              title: 'Sell with us',
              description: 'Sell your property with Norton Tanzarella.',
            },
            sections: [
              {
                id: '00000000-0000-4000-8000-000000000080',
                type: 'pageHeader',
                enabled: true,
                order: 0,
                content: {
                  title: 'Sell with us',
                  lead: 'Page under construction.',
                },
              },
            ],
          }
        : {
            seo: {
              title: 'Vendi con noi',
              description: 'Vendi il tuo immobile con Norton Tanzarella.',
            },
            sections: [
              {
                id: '00000000-0000-4000-8000-000000000080',
                type: 'pageHeader',
                enabled: true,
                order: 0,
                content: {
                  title: 'Vendi con noi',
                  lead: 'Pagina in costruzione.',
                },
              },
            ],
          },
    milestone: 'M2',
  },
  'privacy-policy': {
    allowedTypes: ['legalPolicy'],
    reorderable: [],
    defaults: (locale) => ({
      seo: { title: locale === 'en' ? 'Privacy policy' : 'Privacy policy' },
      sections: [
        {
          id: '00000000-0000-4000-8000-000000000030',
          type: 'legalPolicy',
          enabled: true,
          order: 0,
          content: { source: 'manual', body: '' },
        },
      ],
    }),
    milestone: 'M2',
  },
  'cookie-policy': {
    allowedTypes: ['legalPolicy'],
    reorderable: [],
    defaults: (locale) => ({
      seo: { title: locale === 'en' ? 'Cookie policy' : 'Cookie policy' },
      sections: [
        {
          id: '00000000-0000-4000-8000-000000000040',
          type: 'legalPolicy',
          enabled: true,
          order: 0,
          content: { source: 'manual', body: '' },
        },
      ],
    }),
    milestone: 'M2',
  },
}

export const PAGE_KEYS = Object.keys(PAGE_REGISTRY) as PageKey[]

export function isPageKey(key: string): key is PageKey {
  return key in PAGE_REGISTRY
}

export function getM1PageKeys(): PageKey[] {
  return PAGE_KEYS.filter((key) => PAGE_REGISTRY[key].milestone === 'M1')
}

export function getM2PageKeys(): PageKey[] {
  return PAGE_KEYS.filter((key) => PAGE_REGISTRY[key].milestone === 'M2')
}

export function getM3PageKeys(): PageKey[] {
  return PAGE_KEYS.filter((key) => PAGE_REGISTRY[key].milestone === 'M3')
}

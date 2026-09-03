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

const HOME_STATEMENT_IT = {
  title: 'Investire in Italia',
  body: 'Investire in Italia, e in particolare in Valle d\'Itria, significa scegliere un patrimonio di luce, pietra e paesaggio: case che custodiscono storia e generano valore nel tempo.',
  tagline: 'ITALIA. VALLE D\'ITRIA. VALORE CHE DURA.',
} as const

const HOME_STATEMENT_EN = {
  title: 'Investing in Italy',
  body: 'Investing in Italy — and in the Valle d\'Itria — means choosing a heritage of light, stone and landscape: homes that hold history and build lasting value.',
  tagline: 'ITALY. VALLE D\'ITRIA. ENDURING VALUE.',
} as const

const HOME_CATEGORY_GRID_HEADER_IT = {
  eyebrow: 'SELEZIONI CURATE',
  title: 'Selezione di pregio',
  tagline: 'Scopri immobili dal carattere, dalla storia e dal valore duraturo.',
} as const

const HOME_CATEGORY_GRID_HEADER_EN = {
  eyebrow: 'CURATED HIGHLIGHTS',
  title: 'Signature Selection',
  tagline: 'Discover properties with character, history and lasting value.',
} as const

const HOME_CATEGORY_GRID_ITEMS_IT = [
  {
    label: 'Masserie',
    imageAlt: 'Masseria in Valle d\'Itria',
    categorySlug: 'masseria',
    ctaLabel: 'Vedi gli immobili',
  },
  {
    label: 'Rustici',
    imageAlt: 'Rustico in campagna',
    categorySlug: 'rustici',
    ctaLabel: 'Vedi gli immobili',
  },
  {
    label: 'Trulli',
    imageAlt: 'Trulli in Valle d\'Itria',
    categorySlug: 'trulli',
    ctaLabel: 'Vedi gli immobili',
  },
  {
    label: 'Centro storico Ostuni',
    imageAlt: 'Casa nel centro storico di Ostuni',
    categorySlug: 'centro-storico',
    ctaLabel: 'Vedi gli immobili',
  },
] as const

const HOME_CATEGORY_GRID_ITEMS_EN = [
  {
    label: 'Masserie',
    imageAlt: 'Masseria in the Valle d\'Itria',
    categorySlug: 'masseria',
    ctaLabel: 'View properties',
  },
  {
    label: 'Rustici',
    imageAlt: 'Country house (rustico)',
    categorySlug: 'rustici',
    ctaLabel: 'View properties',
  },
  {
    label: 'Trulli',
    imageAlt: 'Trulli in the Valle d\'Itria',
    categorySlug: 'trulli',
    ctaLabel: 'View properties',
  },
  {
    label: 'Ostuni historic centre',
    imageAlt: 'Home in Ostuni historic centre',
    categorySlug: 'centro-storico',
    ctaLabel: 'View properties',
  },
] as const

const HOME_ABOUT_TEASER_CAROUSEL_IT = [
  { imageAlt: 'Ostuni al tramonto' },
  { imageAlt: 'Masseria in Valle d\'Itria' },
  { imageAlt: 'Interior di prestigio' },
] as const

const HOME_ABOUT_TEASER_CAROUSEL_EN = [
  { imageAlt: 'Ostuni at sunset' },
  { imageAlt: 'Masseria in the Valle d\'Itria' },
  { imageAlt: 'Prestige interior' },
] as const

const HOME_DEFAULTS_IT: CmsPageDocument = {
  seo: {
    title: 'Norton Tanzarella',
    description: 'Agenzia immobiliare a Ostuni e in Valle d\'Itria — masserie, rustici e trulli.',
  },
  sections: [
    {
      id: '00000000-0000-4000-8000-000000000001',
      type: 'hero',
      enabled: true,
      order: 0,
      content: {
        title: 'La casa dei tuoi sogni in Valle d\'Itria',
        subtitle: 'Masserie, rustici e case a Ostuni: consulenza personalizzata per acquisto e vendita.',
        cta: { label: 'Scopri gli immobili', to: '/properties' },
      },
    },
    {
      id: '00000000-0000-4000-8000-000000000005',
      type: 'statement',
      enabled: true,
      order: 1,
      content: { ...HOME_STATEMENT_IT },
    },
    {
      id: '00000000-0000-4000-8000-000000000006',
      type: 'categoryGrid',
      enabled: true,
      order: 2,
      content: {
        ...HOME_CATEGORY_GRID_HEADER_IT,
        items: [...HOME_CATEGORY_GRID_ITEMS_IT],
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
      id: '00000000-0000-4000-8000-000000000002',
      type: 'features',
      enabled: true,
      order: 4,
      content: {
        eyebrow: 'PERCHÉ SCEGLIERCI',
        title: 'Perché sceglierci',
        items: [
          {
            title: 'Vendita di immobili di prestigio',
            description:
              'Masserie, trulli, ville tra gli ulivi, dimore fronte mare e residenze di carattere.',
            iconKey: 'mdi:crown-outline',
          },
          {
            title: 'Valutazioni immobiliari',
            description:
              'Stime esperte, con conoscenza profonda del mercato locale e delle tipologiche in pietra.',
            iconKey: 'mdi:file-document-outline',
          },
          {
            title: 'Territorio e tipologiche',
            description:
              'Conosciamo il territorio: masserie, rustici, trulli, lamie e case nei borghi bianchi.',
            iconKey: 'mdi:map-outline',
          },
          {
            title: 'Architetture in pietra',
            description:
              'Volte a stella, chianche, muretti a secco e calce bianca: il linguaggio della terra di pietra.',
            iconKey: 'mdi:home-city-outline',
          },
        ],
      },
    },
    {
      id: '00000000-0000-4000-8000-000000000008',
      type: 'aboutTeaser',
      enabled: true,
      order: 5,
      content: {
        title: 'Chi siamo',
        body:
          'Da Norton Tanzarella accompagniamo chi sceglie di investire e vivere in Valle d\'Itria — tra Ostuni, masserie e borghi bianchi. La soddisfazione di chi acquista è la nostra priorità: consulenza personalizzata dalla prima visita alla firma, per trovare la casa giusta tra rustici, trulli e dimore di carattere.',
        button: { label: 'Scopri chi siamo', to: '/about' },
        backgroundImageAlt: 'Paesaggio della Valle d\'Itria',
        carouselItems: [...HOME_ABOUT_TEASER_CAROUSEL_IT],
        autoplayMs: 5000,
      },
    },
    {
      id: '00000000-0000-4000-8000-000000000007',
      type: 'googleReviews',
      enabled: true,
      order: 6,
      content: {
        title: 'GOOGLE REVIEWS',
        maxItems: 5,
        hideWhenEmpty: true,
        showSummary: true,
      },
    },
    {
      id: '00000000-0000-4000-8000-000000000004',
      type: 'cta',
      enabled: true,
      order: 7,
      content: {
        title: 'Hai bisogno di una valutazione?',
        description: 'Contattaci per un appuntamento senza impegno a Ostuni.',
        button: { label: 'Contattaci', to: '/contact' },
      },
    },
  ],
}

const HOME_DEFAULTS_EN: CmsPageDocument = {
  seo: {
    title: 'Norton Tanzarella',
    description:
      'Real estate agency in Ostuni and the Valle d\'Itria — masserie, rustici and trulli.',
  },
  sections: [
    {
      id: '00000000-0000-4000-8000-000000000001',
      type: 'hero',
      enabled: true,
      order: 0,
      content: {
        title: 'Find your dream home in the Valle d\'Itria',
        subtitle:
          'Masserie, rustici and homes in Ostuni: personalised advice for buying and selling.',
        cta: { label: 'Browse properties', to: '/properties' },
      },
    },
    {
      id: '00000000-0000-4000-8000-000000000005',
      type: 'statement',
      enabled: true,
      order: 1,
      content: { ...HOME_STATEMENT_EN },
    },
    {
      id: '00000000-0000-4000-8000-000000000006',
      type: 'categoryGrid',
      enabled: true,
      order: 2,
      content: {
        ...HOME_CATEGORY_GRID_HEADER_EN,
        items: [...HOME_CATEGORY_GRID_ITEMS_EN],
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
        title: 'Featured properties',
        viewAllLabel: 'View all',
        hideWhenEmpty: true,
      },
    },
    {
      id: '00000000-0000-4000-8000-000000000002',
      type: 'features',
      enabled: true,
      order: 4,
      content: {
        eyebrow: 'WHY CHOOSE US',
        title: 'Why choose us',
        items: [
          {
            title: 'Prestige Property Sales',
            description:
              'Masserie, trulli, olive-grove villas, seafront homes and character residences.',
            iconKey: 'mdi:crown-outline',
          },
          {
            title: 'Property Valuations',
            description:
              'Expert valuations, with deep knowledge of the local market and stone property types.',
            iconKey: 'mdi:file-document-outline',
          },
          {
            title: 'Territory and Property Types',
            description:
              'We know the territory: masserie, rustici, trulli, lamie and homes in whitewashed towns.',
            iconKey: 'mdi:map-outline',
          },
          {
            title: 'Stone Architecture',
            description:
              'Star vaults, chianche floors, dry-stone walls and whitewashed lime: the language of stone country.',
            iconKey: 'mdi:home-city-outline',
          },
        ],
      },
    },
    {
      id: '00000000-0000-4000-8000-000000000008',
      type: 'aboutTeaser',
      enabled: true,
      order: 5,
      content: {
        title: 'About us',
        body:
          'At Norton Tanzarella we guide international buyers investing and living in the Valle d\'Itria — Ostuni, masserie and whitewashed hill towns. Client satisfaction comes first: tailored advice from first viewing to completion, to match each buyer with the right home among rustici, trulli and character properties.',
        button: { label: 'Read more', to: '/about' },
        backgroundImageAlt: 'Valle d\'Itria landscape',
        carouselItems: [...HOME_ABOUT_TEASER_CAROUSEL_EN],
        autoplayMs: 5000,
      },
    },
    {
      id: '00000000-0000-4000-8000-000000000007',
      type: 'googleReviews',
      enabled: true,
      order: 6,
      content: {
        title: 'GOOGLE REVIEWS',
        maxItems: 5,
        hideWhenEmpty: true,
        showSummary: true,
      },
    },
    {
      id: '00000000-0000-4000-8000-000000000004',
      type: 'cta',
      enabled: true,
      order: 7,
      content: {
        title: 'Need a valuation?',
        description: 'Contact us for a no-obligation meeting in Ostuni.',
        button: { label: 'Contact us', to: '/contact' },
      },
    },
  ],
}


const CHI_SIAMO_SLIDESHOW_ITEMS = [
  { imageAlt: 'Ostuni al tramonto' },
  { imageAlt: 'Masseria in Valle d\'Itria' },
  { imageAlt: 'Interior di prestigio' },
  { imageAlt: 'Paesaggio della campagna pugliese' },
] as const

const CHI_SIAMO_DEFAULTS_IT: CmsPageDocument = {
  seo: {
    title: 'Chi siamo',
    description:
      'Norton Tanzarella a Ostuni e in Valle d\'Itria — visione, territorio e immobiliare di prestigio.',
  },
  sections: [
    {
      id: '00000000-0000-4000-8000-000000000010',
      type: 'hero',
      enabled: true,
      order: 0,
      content: {
        title: 'Chi siamo',
        subtitle:
          'Uno sguardo su Ostuni, la Valle d\'Itria e l\'immobiliare di prestigio ancorato a un art de vivre.',
      },
    },
    {
      id: '00000000-0000-4000-8000-000000000017',
      type: 'imageSlideshow',
      enabled: true,
      order: 1,
      content: {
        items: [...CHI_SIAMO_SLIDESHOW_ITEMS],
        autoplayMs: 5000,
      },
    },
    {
      id: '00000000-0000-4000-8000-000000000011',
      type: 'split',
      enabled: true,
      order: 2,
      content: {
        title: 'La nostra visione',
        body: 'Offriamo un\'esperienza d\'acquisto eccezionale radicata a Ostuni e in Valle d\'Itria. Aiutiamo a realizzare il sogno di una masseria, un rustico o una casa distintiva, rendendo il percorso entusiasmante e senza stress.\n\nServizi personalizzati, conoscenza approfondita del mercato locale e relazioni di lungo periodo: possedere qui non è solo un investimento, è una scelta di vita.',
        imageAlt: 'Ostuni e la Valle d\'Itria',
      },
    },
    {
      id: '00000000-0000-4000-8000-000000000018',
      type: 'split',
      enabled: true,
      order: 3,
      content: {
        title: 'Una comunità impegnata',
        body: 'Da anni accompagniamo vendite e acquisizioni di prestigio in Valle d\'Itria. Un approccio esigente, una strategia di valorizzazione e una rete solida di acquirenti e prescrittori ci hanno reso un punto di riferimento.\n\nOggi Norton Tanzarella è una marca e una comunità riunita intorno all\'immobiliare di prestigio e all\'art de vivre che incarna.',
        imageAlt: 'Incontro e consulenza immobiliare',
        reverse: true,
      },
    },
    {
      id: '00000000-0000-4000-8000-000000000019',
      type: 'split',
      enabled: true,
      order: 4,
      content: {
        title: 'Il territorio',
        body: 'Condividiamo i luoghi che fanno la ricchezza della nostra regione: masserie, architetture notevoli, paesaggi ispiratori. Perché l\'immobiliare di prestigio è anche una questione di territorio e di stile di vita.\n\nDa Ostuni alla campagna, ogni indirizzo racconta un pezzo della Valle d\'Itria.',
        imageAlt: 'Masseria e paesaggio pugliese',
      },
    },
    {
      id: '00000000-0000-4000-8000-000000000013',
      type: 'team',
      enabled: true,
      order: 5,
      content: {
        title: 'Chi guida l\'agenzia',
        name: 'Norton Tanzarella',
        role: 'Fondatore',
        bio: 'Una visione esigente del mercato di prestigio in Valle d\'Itria, unita a una strategia di valorizzazione e a una rete solida di acquirenti e prescrittori. Al centro, le persone e i luoghi — da Ostuni alle masserie della campagna.',
      },
    },
    {
      id: '00000000-0000-4000-8000-000000000012',
      type: 'stats',
      enabled: false,
      order: 6,
      content: {
        items: [
          { value: 20, suffix: '+', label: 'Anni di esperienza' },
          { value: 500, suffix: '+', label: 'Clienti accompagnati' },
          { value: 150, suffix: '+', label: 'Immobili gestiti' },
          { value: 1, label: 'Rete di fiducia' },
        ],
      },
    },
    {
      id: '00000000-0000-4000-8000-000000000014',
      type: 'cta',
      enabled: true,
      order: 7,
      content: {
        title: 'Parliamone',
        description:
          'Accompagniamo acquisti e vendite di prestigio in Valle d\'Itria con discrezione e chiarezza.',
        button: { label: 'Contattaci', to: '/contact' },
      },
    },
    {
      id: '00000000-0000-4000-8000-000000000015',
      type: 'faq',
      enabled: true,
      order: 8,
      content: {
        title: 'Domande frequenti',
        items: [
          {
            question: 'Perché affidarsi a Norton Tanzarella a Ostuni e in Valle d\'Itria?',
            answer:
              'Conosciamo il territorio, le tipologiche (masserie, rustici, trulli, centro storico) e le dinamiche di prezzo. Uniamo discrezione, trasparenza e una rete di professionisti per accompagnarvi in ogni fase.',
          },
          {
            question: 'Cercate anche masserie, rustici e trulli?',
            answer:
              'Sì. La ricerca include masserie, rustici, trulli, casali e abitazioni nel centro storico di Ostuni, in base a esigenze e stile di vita.',
          },
          {
            question: 'Quali servizi offrite oltre alla ricerca immobiliare?',
            answer:
              'Consulenza legale e finanziaria, visite, negoziazioni, project management, gestione immobiliare e affitti turistici, assistenza post-vendita, relocation e rete di professionisti.',
          },
          {
            question: 'Aiutate anche dopo il rogito e per trasferirsi in Italia?',
            answer:
              'Sì. Offriamo assistenza post-vendita e servizi di trasferimento (visti, permessi di soggiorno, insediamento), oltre al collegamento con professionisti fidati.',
          },
          {
            question: 'Come avviene la valutazione di una proprietà?',
            answer:
              'Consideriamo ubicazione, qualità, stato, rarità tipologica e andamento del mercato locale in Valle d\'Itria. La stima è confidenziale e calibrata sul posizionamento specifico.',
          },
        ],
      },
    },
  ],
}

const CHI_SIAMO_DEFAULTS_EN: CmsPageDocument = {
  seo: {
    title: 'About us',
    description:
      'Norton Tanzarella in Ostuni and the Valle d\'Itria — vision, territory and prestige real estate.',
  },
  sections: [
    {
      id: '00000000-0000-4000-8000-000000000010',
      type: 'hero',
      enabled: true,
      order: 0,
      content: {
        title: 'About us',
        subtitle:
          'A gaze on Ostuni, the Valle d\'Itria and prestige real estate rooted in a way of living.',
      },
    },
    {
      id: '00000000-0000-4000-8000-000000000017',
      type: 'imageSlideshow',
      enabled: true,
      order: 1,
      content: {
        items: [
          { imageAlt: 'Ostuni at sunset' },
          { imageAlt: 'Masseria in the Valle d\'Itria' },
          { imageAlt: 'Prestige interior' },
          { imageAlt: 'Puglian countryside landscape' },
        ],
        autoplayMs: 5000,
      },
    },
    {
      id: '00000000-0000-4000-8000-000000000011',
      type: 'split',
      enabled: true,
      order: 2,
      content: {
        title: 'Our vision',
        body: 'We offer an exceptional buying experience rooted in Ostuni and the Valle d\'Itria. We help people achieve the dream of a masseria, rustico or distinctive home, making the journey exciting and stress-free.\n\nTailored services, deep local market knowledge and long-term relationships: owning here is not only an investment — it is a lifestyle choice.',
        imageAlt: 'Ostuni and the Valle d\'Itria',
      },
    },
    {
      id: '00000000-0000-4000-8000-000000000018',
      type: 'split',
      enabled: true,
      order: 3,
      content: {
        title: 'An engaged community',
        body: 'For years we have accompanied prestige sales and acquisitions in the Valle d\'Itria. A demanding approach, a valorisation strategy and a solid network of buyers and introducers have made us a market reference.\n\nToday Norton Tanzarella is a brand and a community gathered around prestige real estate and the art of living it embodies.',
        imageAlt: 'Property consultation meeting',
        reverse: true,
      },
    },
    {
      id: '00000000-0000-4000-8000-000000000019',
      type: 'split',
      enabled: true,
      order: 4,
      content: {
        title: 'The territory',
        body: 'We share the places that enrich our region: masserie, remarkable architecture, inspiring landscapes. Prestige real estate is also a matter of territory and lifestyle.\n\nFrom Ostuni to the countryside, every address tells a piece of the Valle d\'Itria.',
        imageAlt: 'Masseria and Puglian landscape',
      },
    },
    {
      id: '00000000-0000-4000-8000-000000000013',
      type: 'team',
      enabled: true,
      order: 5,
      content: {
        title: 'Who leads the agency',
        name: 'Norton Tanzarella',
        role: 'Founder',
        bio: 'A demanding vision of the prestige market in the Valle d\'Itria, combined with a valorisation strategy and a solid network of buyers and introducers. At the centre: people and places — from Ostuni to the masserie of the countryside.',
      },
    },
    {
      id: '00000000-0000-4000-8000-000000000012',
      type: 'stats',
      enabled: false,
      order: 6,
      content: {
        items: [
          { value: 20, suffix: '+', label: 'Years of experience' },
          { value: 500, suffix: '+', label: 'Clients guided' },
          { value: 150, suffix: '+', label: 'Properties managed' },
          { value: 1, label: 'Trusted network' },
        ],
      },
    },
    {
      id: '00000000-0000-4000-8000-000000000014',
      type: 'cta',
      enabled: true,
      order: 7,
      content: {
        title: 'Let\'s talk',
        description:
          'We accompany prestige purchases and sales in the Valle d\'Itria with discretion and clarity.',
        button: { label: 'Contact us', to: '/contact' },
      },
    },
    {
      id: '00000000-0000-4000-8000-000000000015',
      type: 'faq',
      enabled: true,
      order: 8,
      content: {
        title: 'Frequently asked questions',
        items: [
          {
            question: 'Why choose Norton Tanzarella in Ostuni and the Valle d\'Itria?',
            answer:
              'We know the territory, property types (masserie, rustici, trulli, historic centre) and pricing dynamics. We combine discretion, transparency and a network of professionals at every stage.',
          },
          {
            question: 'Do you search for masserie, rustici and trulli?',
            answer:
              'Yes. Our search covers masserie, rustici, trulli, farmhouses and homes in Ostuni historic centre, matched to your needs and lifestyle.',
          },
          {
            question: 'What services do you offer beyond property search?',
            answer:
              'Legal and financial advice, viewings, negotiations, project management, property and vacation-rental management, after-sales support, relocation and a network of professionals.',
          },
          {
            question: 'Do you help after completion and with relocating to Italy?',
            answer:
              'Yes. We provide after-sales support and relocation services (visas, residency permits, settling in), plus introductions to trusted professionals.',
          },
          {
            question: 'How is a property valued?',
            answer:
              'We consider location, quality, condition, typological rarity and local market trends in the Valle d\'Itria. Estimates are confidential and calibrated to each property.',
          },
        ],
      },
    },
  ],
}


export const PAGE_REGISTRY: Record<PageKey, PageRegistryEntry> = {
  home: {
    allowedTypes: [
      'hero',
      'statement',
      'categoryGrid',
      'features',
      'featuredCollection',
      'googleReviews',
      'aboutTeaser',
      'cta',
    ],
    reorderable: [
      'statement',
      'categoryGrid',
      'features',
      'featuredCollection',
      'aboutTeaser',
      'googleReviews',
      'cta',
    ],
    defaults: (locale) => (locale === 'en' ? HOME_DEFAULTS_EN : HOME_DEFAULTS_IT),
    milestone: 'M1',
  },
  'chi-siamo': {
    allowedTypes: ['hero', 'imageSlideshow', 'split', 'team', 'stats', 'cta', 'faq'],
    reorderable: ['imageSlideshow', 'split', 'team', 'stats', 'cta', 'faq'],
    defaults: (locale) => (locale === 'en' ? CHI_SIAMO_DEFAULTS_EN : CHI_SIAMO_DEFAULTS_IT),
    milestone: 'M2',
  },
  'immobili-index': {
    allowedTypes: ['pageHeader', 'cta'],
    reorderable: ['cta'],
    defaults: (locale) =>
      locale === 'en'
        ? {
            seo: {
              title: 'Properties',
              description: "Browse masserie, rustici and homes in Ostuni and the Valle d'Itria.",
            },
            sections: [
              {
                id: '00000000-0000-4000-8000-000000000050',
                type: 'pageHeader',
                enabled: true,
                order: 0,
                content: {
                  title: 'Find your place to call home.',
                  lead: 'Explore our collection of character properties across Ostuni and the Itria Valley.',
                },
              },
              {
                id: '00000000-0000-4000-8000-000000000051',
                type: 'cta',
                enabled: true,
                order: 1,
                content: {
                  title: 'Selling Distinction',
                  description: 'Let us tell the story of your property',
                  button: { label: 'Contact our agency', to: '/sell-with-us' },
                },
              },
            ],
          }
        : {
            seo: {
              title: 'Immobili',
              description: "Sfoglia masserie, rustici e case a Ostuni e in Valle d'Itria.",
            },
            sections: [
              {
                id: '00000000-0000-4000-8000-000000000050',
                type: 'pageHeader',
                enabled: true,
                order: 0,
                content: {
                  title: 'Trova il posto che chiamerai casa.',
                  lead: "Esplora masserie, trulli e dimore di carattere tra Ostuni e la Valle d'Itria.",
                },
              },
              {
                id: '00000000-0000-4000-8000-000000000051',
                type: 'cta',
                enabled: true,
                order: 1,
                content: {
                  title: 'Vendi con distinzione',
                  description: 'Raccontiamo insieme la storia del tuo immobile',
                  button: { label: 'Contatta la nostra agenzia', to: '/sell-with-us' },
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
                content: {
                  title: 'Contact us',
                  lead: 'Write to us for valuations, viewing appointments or general information.',
                },
              },
              {
                id: '00000000-0000-4000-8000-000000000021',
                type: 'richText',
                enabled: false,
                order: 1,
                content: { body: '' },
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
                content: {
                  title: 'Contattaci',
                  lead: 'Scrivici per valutazioni, appuntamenti di visita o informazioni generali.',
                },
              },
              {
                id: '00000000-0000-4000-8000-000000000021',
                type: 'richText',
                enabled: false,
                order: 1,
                content: { body: '' },
              },
            ],
          },
    milestone: 'M2',
  },
  'property-finder': {
    // pageHeader: hero full-bleed (title, lead, mediaId?) — come contatti
    allowedTypes: ['pageHeader', 'richText'],
    reorderable: [],
    defaults: (locale) =>
      locale === 'en'
        ? {
            seo: {
              title: 'Property Finder',
              description:
                'Full property finder service in Italy: tailored search, viewings, negotiation, legal and tax support.',
            },
            sections: [
              {
                id: '00000000-0000-4000-8000-000000000060',
                type: 'pageHeader',
                enabled: true,
                order: 0,
                content: {
                  title: 'Our Comprehensive Property Finder Service',
                  lead: 'From the first consultation to the final purchase, we guide you every step of the way.',
                },
              },
              {
                id: '00000000-0000-4000-8000-000000000061',
                type: 'richText',
                enabled: true,
                order: 1,
                content: {
                  body: `At our estate agency, we understand that **purchasing a property in a foreign country** can be a daunting and complex process, which is why we are committed to taking care of everything for our clients. From the *initial consultation* to the *final purchase*, we will be there every step of the way to guide you through the process and ensure that everything runs smoothly. Our team of experts will help you to **identify the right properties**, arrange viewings, **negotiate the best possible price** and manage all aspects of the purchase process, including legal and financial matters. We work with a network of trusted legal and financial advisors to ensure that all aspects of the purchase process are fully taken care of, including *title searches*, *property registration*, *tax matters* and more.

> Our goal is to provide our clients with a **stress-free and seamless experience**, allowing them to relax and enjoy the excitement of owning a property in Italy.

---

### A tailored search

To begin the process, we will craft a **customized profile** based on your specific requirements. With this information in hand, we will conduct an extensive search of all available properties in your desired areas, carefully filtering out those that do not meet your criteria and presenting only the finest options for your consideration.

### Viewings, handled for you

Once we have identified a selection of potential properties, we will work with various agencies to create a **comprehensive itinerary for viewing**. You can rest assured that we will handle all communication and coordination with these agencies, sparing you any unnecessary hassle.

During the viewing process, we will be at your side every step of the way, providing invaluable **translation services** and *expert advice* on each property that you see.

---

## Large Coverage

At our estate agency, we take pride in our **large coverage**, which extends to some of the most desirable locations throughout **Italy**. Our extensive network of local agents and partners allows us to offer our clients a wide selection of properties in popular destinations such as **Tuscany**, the **Amalfi Coast**, the **Italian Lakes**, and more. We are dedicated to providing our clients with an exceptional level of service, no matter where they are looking to buy a property in Italy. Whether you are seeking a *rustic countryside retreat* or a *chic urban apartment*, we have the expertise and resources to help you find the perfect property in the location that best suits your needs and lifestyle.`,
                },
              },
            ],
          }
        : {
            seo: {
              title: 'Trova immobile',
              description:
                'Servizio completo di ricerca immobili in Italia: profilo su misura, visite, negoziazione e gestione legale e fiscale.',
            },
            sections: [
              {
                id: '00000000-0000-4000-8000-000000000060',
                type: 'pageHeader',
                enabled: true,
                order: 0,
                content: {
                  title: 'Il nostro servizio completo di ricerca immobili',
                  lead: 'Dalla prima consulenza all’acquisto, ti accompagniamo in ogni fase.',
                },
              },
              {
                id: '00000000-0000-4000-8000-000000000061',
                type: 'richText',
                enabled: true,
                order: 1,
                content: {
                  body: `Nella nostra agenzia immobiliare sappiamo quanto possa risultare impegnativo e complesso **acquistare un immobile all’estero**: per questo ci impegnamo a occuparci di tutto per i nostri clienti. Dalla *prima consulenza* fino all’*acquisto finale*, saremo al vostro fianco in ogni fase per guidarvi nel percorso e garantire che tutto proceda senza intoppi. Il nostro team di esperti vi aiuterà a **individuare le proprietà giuste**, organizzare le visite, **negoziare il miglior prezzo possibile** e gestire tutti gli aspetti dell’acquisto, comprese le questioni legali e finanziarie. Collaboriamo con una rete di consulenti legali e finanziari di fiducia per assicurarci che ogni aspetto del processo sia pienamente curato, dalle *ricerche ipotecarie* alla *registrazione dell’immobile*, dalle *questioni fiscali* e oltre.

> Il nostro obiettivo è offrire un’**esperienza serena e senza stress**, così potrete godervi l’emozione di possedere un immobile in Italia.

---

### Una ricerca su misura

Per iniziare, costruiremo un **profilo personalizzato** basato sulle vostre esigenze specifiche. Con queste informazioni condurremo una ricerca approfondita di tutte le proprietà disponibili nelle zone di vostro interesse, filtrando con cura quelle che non corrispondono ai criteri e presentandovi solo le opzioni migliori da valutare.

### Visite, gestite per voi

Una volta individuata una selezione di immobili potenziali, collaboreremo con varie agenzie per creare un **itinerario completo di visite**. Potrete contare sul fatto che gestiamo noi tutta la comunicazione e il coordinamento con queste agenzie, evitandovi ogni inutile complicazione.

Durante le visite saremo al vostro fianco in ogni momento, offrendo **servizi di traduzione** e *consigli esperti* su ciascuna proprietà che vedrete.

---

## Ampia copertura

Nella nostra agenzia siamo orgogliosi della nostra **ampia copertura**, che si estende ad alcune delle località più desiderabili di tutta **Italia**. La nostra vasta rete di agenti e partner locali ci consente di offrire una vasta selezione di immobili in destinazioni come la **Toscana**, la **Costiera Amalfitana**, i **laghi italiani** e oltre. Siamo dedicati a fornire un livello di servizio eccezionale, ovunque stiate cercando di acquistare in Italia. Che cerchiate un *rifugio rustico in campagna* o un *appartamento urbano raffinato*, abbiamo l’esperienza e le risorse per aiutarvi a trovare la proprietà perfetta nella località più adatta alle vostre esigenze e al vostro stile di vita.`,
                },
              },
            ],
          },
    milestone: 'M2',
  },
  'virtual-tours': {
    allowedTypes: ['pageHeader', 'youtubeGallery'],
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
                  lead:
                    'Explore trulli, masserie and character homes across the Valle d\'Itria through our video tours — an authentic first glimpse of each property, before you travel.',
                },
              },
              {
                id: '00000000-0000-4000-8000-000000000071',
                type: 'youtubeGallery',
                enabled: true,
                order: 1,
                content: {
                  playlistId: 'UU2weLZdp6gU82cmEb2URPvA',
                  pageSize: 15,
                  columns: 3,
                  subscribeChannelUrl: 'https://www.youtube.com/@nortontanzarella98',
                  subscribeLabel: 'Subscribe to Our channel',
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
                  lead:
                    'Attraversate trulli, masserie e case di charme in Valle d\'Itria con i nostri tour video — un primo incontro autentico con ogni spazio, prima del vostro viaggio.',
                },
              },
              {
                id: '00000000-0000-4000-8000-000000000071',
                type: 'youtubeGallery',
                enabled: true,
                order: 1,
                content: {
                  playlistId: 'UU2weLZdp6gU82cmEb2URPvA',
                  pageSize: 15,
                  columns: 3,
                  subscribeChannelUrl: 'https://www.youtube.com/@nortontanzarella98',
                  subscribeLabel: 'Iscriviti al nostro canale',
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
          content: {
            source: 'manual',
            body:
              locale === 'en'
                ? 'Page under construction. The full privacy policy will be published here.'
                : 'Pagina in costruzione. La privacy policy completa sarà pubblicata qui.',
          },
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
          content: {
            source: 'manual',
            body:
              locale === 'en'
                ? 'Page under construction. The full cookie policy will be published here.'
                : 'Pagina in costruzione. La cookie policy completa sarà pubblicata qui.',
          },
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

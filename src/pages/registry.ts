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
    label: 'Masserie',
    imageAlt: 'Masseria in Valle d\'Itria',
    href: '/properties',
    ctaLabel: 'Vedi gli immobili',
  },
  {
    label: 'Rustici',
    imageAlt: 'Rustico in campagna',
    href: '/properties',
    ctaLabel: 'Vedi gli immobili',
  },
  {
    label: 'Trulli',
    imageAlt: 'Trulli in Valle d\'Itria',
    href: '/properties',
    ctaLabel: 'Vedi gli immobili',
  },
  {
    label: 'Centro storico Ostuni',
    imageAlt: 'Casa nel centro storico di Ostuni',
    href: '/properties',
    ctaLabel: 'Vedi gli immobili',
  },
] as const

const CATEGORY_SHOWCASE_ITEMS_EN = [
  {
    label: 'Masserie',
    imageAlt: 'Masseria in the Valle d\'Itria',
    href: '/properties',
    ctaLabel: 'View properties',
  },
  {
    label: 'Rustici',
    imageAlt: 'Country house (rustico)',
    href: '/properties',
    ctaLabel: 'View properties',
  },
  {
    label: 'Trulli',
    imageAlt: 'Trulli in the Valle d\'Itria',
    href: '/properties',
    ctaLabel: 'View properties',
  },
  {
    label: 'Ostuni historic centre',
    imageAlt: 'Home in Ostuni historic centre',
    href: '/properties',
    ctaLabel: 'View properties',
  },
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
      type: 'categoryShowcase',
      enabled: true,
      order: 1,
      content: {
        title: 'Masserie, rustici e trulli in Valle d\'Itria',
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
          {
            title: 'Territorio e tipologiche',
            description:
              'Conosciamo Ostuni e la Valle d\'Itria: masserie, rustici, trulli e case nel centro storico.',
          },
          {
            title: 'Assistenza completa',
            description: 'Dalla ricerca alla firma del rogito, con servizi su misura per ogni cliente.',
          },
          {
            title: 'Fiducia e relazioni',
            description: 'Trasparenza e relazioni di lungo periodo: la casa come scelta di vita.',
          },
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
      id: '00000000-0000-4000-8000-00000000000a',
      type: 'videoShowcase',
      enabled: true,
      order: 4,
      content: {
        hideWhenEmpty: true,
      },
    },
    {
      id: '00000000-0000-4000-8000-000000000004',
      type: 'cta',
      enabled: true,
      order: 5,
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
      type: 'categoryShowcase',
      enabled: true,
      order: 1,
      content: {
        title: 'Masserie, rustici and trulli in the Valle d\'Itria',
        items: [...CATEGORY_SHOWCASE_ITEMS_EN],
      },
    },
    {
      id: '00000000-0000-4000-8000-000000000002',
      type: 'features',
      enabled: true,
      order: 2,
      content: {
        title: 'Why choose us',
        items: [
          {
            title: 'Territory and property types',
            description:
              'We know Ostuni and the Valle d\'Itria: masserie, rustici, trulli and historic-centre homes.',
          },
          {
            title: 'End-to-end support',
            description: 'From search to completion, with tailored services for every client.',
          },
          {
            title: 'Trust and relationships',
            description: 'Transparency and long-term relationships: a home as a lifestyle choice.',
          },
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
        title: 'Featured properties',
        viewAllLabel: 'View all',
        hideWhenEmpty: true,
      },
    },
    {
      id: '00000000-0000-4000-8000-00000000000a',
      type: 'videoShowcase',
      enabled: true,
      order: 4,
      content: {
        hideWhenEmpty: true,
      },
    },
    {
      id: '00000000-0000-4000-8000-000000000004',
      type: 'cta',
      enabled: true,
      order: 5,
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
          'Norton Tanzarella non si limita alla presentazione di proprietà d\'eccezione. Attraverso incontri, luoghi e progetti si è costruita una visione dell\'immobiliare di prestigio: più sensibile, più umana, più ancorata a un art de vivre. Condividiamo ciò che fa l\'essenza del nostro lavoro — uno sguardo su Ostuni, la Valle d\'Itria e le esperienze che modellano un certo stile di vita in Puglia.',
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
        button: { label: 'Scopri le proprietà', to: '/properties' },
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
        button: { label: 'Contattaci', to: '/contact' },
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
        button: { label: 'Esplora le tipologiche', to: '/properties' },
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
      enabled: true,
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
        title: 'Pronto a trovare la proprietà dei tuoi sogni?',
        description:
          'Il nostro obiettivo è rendere l\'acquisto fluido, con tutto il supporto di cui avete bisogno.',
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
          'Norton Tanzarella is more than showcasing exceptional properties. Through encounters, places and projects, a vision of prestige real estate has taken shape: more sensitive, more human, more rooted in a way of living. We share what makes the essence of our work — a gaze on Ostuni, the Valle d\'Itria and the experiences that shape a certain art of living in Puglia.',
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
        button: { label: 'Explore properties', to: '/properties' },
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
        button: { label: 'Contact us', to: '/contact' },
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
        button: { label: 'Browse property types', to: '/properties' },
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
      enabled: true,
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
        title: 'Ready to find your dream property?',
        description:
          'We aim to make the buying process smooth, with all the support you need every step of the way.',
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
    allowedTypes: ['hero', 'categoryShowcase', 'features', 'featuredCollection', 'videoShowcase', 'cta'],
    reorderable: ['categoryShowcase', 'features', 'featuredCollection', 'videoShowcase', 'cta'],
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
    allowedTypes: ['pageHeader'],
    reorderable: [],
    defaults: (locale) =>
      locale === 'en'
        ? {
            seo: { title: 'Properties', description: 'Browse masserie, rustici and homes in Ostuni and the Valle d\'Itria.' },
            sections: [
              {
                id: '00000000-0000-4000-8000-000000000050',
                type: 'pageHeader',
                enabled: true,
                order: 0,
                content: {
                  title: 'Properties',
                  lead: 'Find a masseria, rustico or home in Ostuni and the Valle d\'Itria.',
                },
              },
            ],
          }
        : {
            seo: { title: 'Immobili', description: 'Sfoglia masserie, rustici e case a Ostuni e in Valle d\'Itria.' },
            sections: [
              {
                id: '00000000-0000-4000-8000-000000000050',
                type: 'pageHeader',
                enabled: true,
                order: 0,
                content: {
                  title: 'Immobili',
                  lead: 'Trova masseria, rustico o casa a Ostuni e in Valle d\'Itria.',
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

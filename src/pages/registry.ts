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
      type: 'stickySplits',
      enabled: true,
      order: 2,
      content: {
        items: [
          {
            title: 'La nostra visione',
            body: 'Offriamo un\'esperienza d\'acquisto eccezionale radicata a Ostuni e in Valle d\'Itria. Aiutiamo a realizzare il sogno di una masseria, un rustico o una casa distintiva, rendendo il percorso entusiasmante e senza stress.\n\nServizi personalizzati, conoscenza approfondita del mercato locale e relazioni di lungo periodo: possedere qui non è solo un investimento, è una scelta di vita.',
            imageAlt: 'Ostuni e la Valle d\'Itria',
          },
          {
            title: 'Una comunità impegnata',
            body: 'Da anni accompagniamo vendite e acquisizioni di prestigio in Valle d\'Itria. Un approccio esigente, una strategia di valorizzazione e una rete solida di acquirenti e prescrittori ci hanno reso un punto di riferimento.\n\nOggi Norton Tanzarella è una marca e una comunità riunita intorno all\'immobiliare di prestigio e all\'art de vivre che incarna.',
            imageAlt: 'Incontro e consulenza immobiliare',
          },
          {
            title: 'Il territorio',
            body: 'Condividiamo i luoghi che fanno la ricchezza della nostra regione: masserie, architetture notevoli, paesaggi ispiratori. Perché l\'immobiliare di prestigio è anche una questione di territorio e di stile di vita.\n\nDa Ostuni alla campagna, ogni indirizzo racconta un pezzo della Valle d\'Itria.',
            imageAlt: 'Masseria e paesaggio pugliese',
          },
        ],
      },
    },
    {
      id: '00000000-0000-4000-8000-000000000013',
      type: 'team',
      enabled: true,
      order: 3,
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
      order: 4,
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
      order: 5,
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
      order: 6,
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
      type: 'stickySplits',
      enabled: true,
      order: 2,
      content: {
        items: [
          {
            title: 'Our vision',
            body: 'We offer an exceptional buying experience rooted in Ostuni and the Valle d\'Itria. We help people achieve the dream of a masseria, rustico or distinctive home, making the journey exciting and stress-free.\n\nTailored services, deep local market knowledge and long-term relationships: owning here is not only an investment — it is a lifestyle choice.',
            imageAlt: 'Ostuni and the Valle d\'Itria',
          },
          {
            title: 'An engaged community',
            body: 'For years we have accompanied prestige sales and acquisitions in the Valle d\'Itria. A demanding approach, a valorisation strategy and a solid network of buyers and introducers have made us a market reference.\n\nToday Norton Tanzarella is a brand and a community gathered around prestige real estate and the art of living it embodies.',
            imageAlt: 'Property consultation meeting',
          },
          {
            title: 'The territory',
            body: 'We share the places that enrich our region: masserie, remarkable architecture, inspiring landscapes. Prestige real estate is also a matter of territory and lifestyle.\n\nFrom Ostuni to the countryside, every address tells a piece of the Valle d\'Itria.',
            imageAlt: 'Masseria and Puglian landscape',
          },
        ],
      },
    },
    {
      id: '00000000-0000-4000-8000-000000000013',
      type: 'team',
      enabled: true,
      order: 3,
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
      order: 4,
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
      order: 5,
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
      order: 6,
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

const SELL_WITH_US_DEFAULTS_IT: CmsPageDocument = {
  seo: {
    title: 'Vendi con noi',
    description:
      'Vendi il tuo immobile con Norton Tanzarella: valutazione, marketing internazionale e accompagnamento fino alla conclusione.',
  },
  sections: [
    {
      id: '00000000-0000-4000-8000-000000000080',
      type: 'hero',
      enabled: true,
      order: 0,
      content: {
        title: 'Vendi con noi',
        subtitle: 'Vendere un immobile richiede più di una semplice pubblicazione',
      },
    },
    {
      id: '00000000-0000-4000-8000-000000000081',
      type: 'richText',
      enabled: true,
      order: 1,
      content: {
        body: `Vendere una proprietà significa valorizzarne il potenziale, individuare i giusti acquirenti e gestire ogni fase del percorso con competenza, attenzione e discrezione.

Norton Tanzarella Real Estate affianca proprietari italiani e internazionali nella vendita di immobili in Italia, offrendo un servizio personalizzato che unisce conoscenza del mercato, strategia commerciale e una rete di relazioni qualificata.

Dalla prima valutazione alla conclusione della vendita, ci occupiamo di costruire il percorso più efficace per presentare la proprietà al mercato, raggiungere il pubblico giusto e accompagnare tutte le parti fino al completamento dell'operazione.

La nostra sede è a Ostuni, ma il nostro approccio e la nostra rete sono orientati a un mercato più ampio, con particolare attenzione alle proprietà di carattere, alle residenze di pregio e agli immobili che possono incontrare l'interesse di acquirenti italiani e internazionali.`,
      },
    },
    {
      id: '00000000-0000-4000-8000-000000000082',
      type: 'stickySplits',
      enabled: true,
      order: 2,
      content: {
        items: [
          {
            title: 'Valutazione e strategia di vendita',
            lead: 'Ogni proprietà ha una storia. La vendita parte dal comprenderne il valore.',
            body: `Una corretta valutazione immobiliare non riguarda soltanto la superficie, la posizione o le caratteristiche dell'immobile. Significa analizzare il mercato, il contesto, la domanda attuale e il potenziale della proprietà per definire un posizionamento realistico e competitivo.

Studiamo ogni immobile in modo approfondito per individuare il corretto prezzo di mercato e costruire una strategia di vendita coerente con le sue caratteristiche.

L'obiettivo non è semplicemente mettere una proprietà sul mercato, ma presentare nel modo giusto, al pubblico giusto e nel momento giusto.`,
          },
          {
            title: 'Presentazione e valorizzazione della proprietà',
            lead: 'La prima impressione può determinare il valore percepito di una casa.',
            body: `Una proprietà di qualità merita una comunicazione all'altezza.

Per ogni incarico curiamo la presentazione dell'immobile attraverso fotografie, contenuti editoriali, descrizioni professionali e materiali pensati per raccontarne non soltanto gli spazi, ma anche l'atmosfera, il carattere e il modo di vivere che può offrire.

Quando necessario, supportiamo il proprietario nell'individuazione degli interventi che possono migliorare la percezione della proprietà sul mercato, dalla preparazione degli ambienti alla valorizzazione degli elementi architettonici e paesaggistici.

La casa non viene semplicemente pubblicata: viene posizionata e raccontata.`,
          },
          {
            title: 'Marketing immobiliare e visibilità internazionale',
            lead: 'Raggiungere più persone non significa necessariamente raggiungere gli acquirenti giusti.',
            body: `La strategia di marketing viene costruita in funzione della proprietà e del suo potenziale acquirente.

Norton Tanzarella utilizza i propri canali digitali, il network professionale e una comunicazione orientata anche al pubblico internazionale per dare alle proprietà una presenza qualificata sul mercato.

La distribuzione dell'immobile viene accompagnata da una presentazione coerente su tutti i principali punti di contatto, con contenuti in più lingue quando necessario e una particolare attenzione alla domanda proveniente dall'estero.

Questo permette di ampliare il bacino di potenziali acquirenti senza perdere di vista ciò che conta davvero: la qualità delle opportunità di vendita.`,
          },
          {
            title: 'Ricerca e selezione degli acquirenti',
            lead: 'Non tutti i potenziali acquirenti sono realmente acquirenti.',
            body: `Una vendita efficace passa anche dalla capacità di distinguere l'interesse reale dalla semplice curiosità.

Gestiamo le richieste, organizziamo le visite e accompagniamo i potenziali acquirenti nella conoscenza della proprietà, cercando di comprendere esigenze, obiettivi e reale interesse all'acquisto.

Quando possibile, lavoriamo attraverso una rete di contatti e professionisti qualificati, creando connessioni con acquirenti che possono essere realmente in linea con il tipo di immobile proposto.

Il nostro obiettivo è tutelare il tempo del proprietario e concentrare il processo sulle opportunità concrete.`,
          },
          {
            title: 'Negoziazione e gestione della vendita',
            lead: 'Una buona trattativa non riguarda solo il prezzo.',
            body: `Quando arriva un'offerta, entrano in gioco molte variabili: condizioni economiche, tempistiche, modalità di pagamento, necessità dell'acquirente e aspetti tecnici o documentali.

Norton Tanzarella affianca il proprietario durante la fase di negoziazione, fornendo un supporto professionale nella valutazione delle proposte e nella gestione delle diverse fasi che portano alla conclusione dell'operazione.

Coordiniamo il dialogo tra le parti e, attraverso una rete di professionisti qualificati, contribuiamo a rendere il percorso più ordinato, trasparente e sicuro.`,
          },
          {
            title: 'Un network di professionisti per una vendita senza complicazioni',
            lead: 'La vendita di un immobile coinvolge molte competenze. Per questo non lavoriamo da soli.',
            body: `A seconda delle esigenze della proprietà, possiamo mettere in relazione il cliente con professionisti specializzati negli aspetti tecnici, urbanistici, catastali, legali, fiscali e finanziari dell'operazione.

Il nostro ruolo è anche quello di coordinare le diverse competenze coinvolte, facendo in modo che ogni fase venga affrontata con la giusta attenzione.

Per il proprietario significa avere un unico punto di riferimento durante il percorso, senza dover gestire autonomamente ogni singolo aspetto della vendita.`,
          },
          {
            title: "Dalla vendita alla nuova destinazione dell'immobile",
            lead: 'Per noi, una proprietà non termina il suo percorso con la firma.',
            body: `Ogni vendita può rappresentare l'inizio di una nuova opportunità.

Per questo il nostro rapporto con i proprietari non si limita alla commercializzazione dell'immobile. Grazie alla nostra conoscenza del mercato e alla rete di relazioni costruita negli anni, possiamo supportare anche chi desidera reinvestire, acquistare una nuova proprietà in Italia o individuare soluzioni più adatte alle proprie esigenze.

Il nostro lavoro nasce dalla vendita, ma il rapporto può continuare oltre.`,
          },
        ],
      },
    },
    {
      id: '00000000-0000-4000-8000-000000000089',
      type: 'richText',
      enabled: true,
      order: 3,
      content: {
        body: `## Perché vendere con Norton Tanzarella

Vendere una proprietà attraverso Norton Tanzarella significa affidarsi a un interlocutore che combina **conoscenza del mercato immobiliare italiano, attenzione personale e una visione internazionale**.

Ogni incarico viene seguito con un approccio su misura, perché non esistono due proprietà uguali e non esistono due percorsi di vendita identici.

Mettiamo insieme strategia, comunicazione, relazioni e competenze professionali per costruire un processo orientato a un obiettivo concreto: **vendere bene, con il giusto posizionamento e con la massima attenzione agli interessi del proprietario**.

Hai deciso di vendere una casa, una villa, una masseria o un'altra proprietà in Italia?

Raccontaci qualcosa del tuo immobile. Analizzeremo le sue caratteristiche e il contesto di mercato per capire come poterlo valorizzare e quale strategia di vendita possa essere più adatta.`,
      },
    },
    {
      id: '00000000-0000-4000-8000-000000000090',
      type: 'cta',
      enabled: true,
      order: 4,
      content: {
        title: 'Parliamo della tua proprietà',
        description:
          'La vendita di una proprietà importante merita più di una semplice vetrina. Merita una strategia.',
        button: { label: 'Contattaci', to: '/contact' },
      },
    },
  ],
}

const SELL_WITH_US_DEFAULTS_EN: CmsPageDocument = {
  seo: {
    title: 'Sell with us',
    description:
      'Sell your property with Norton Tanzarella: valuation, international marketing and guidance through to completion.',
  },
  sections: [
    {
      id: '00000000-0000-4000-8000-000000000080',
      type: 'hero',
      enabled: true,
      order: 0,
      content: {
        title: 'Sell with us',
        subtitle: 'Selling a property requires more than a simple listing',
      },
    },
    {
      id: '00000000-0000-4000-8000-000000000081',
      type: 'richText',
      enabled: true,
      order: 1,
      content: {
        body: `Selling a property means unlocking its potential, finding the right buyers and guiding every stage of the journey with expertise, care and discretion.

Norton Tanzarella Real Estate supports Italian and international owners selling property in Italy, offering a tailored service that combines market knowledge, commercial strategy and a qualified network of relationships.

From the first valuation to completion, we build the most effective path to present the property to the market, reach the right audience and accompany all parties through to the end of the transaction.

Our office is in Ostuni, yet our approach and network look to a wider market — with particular focus on character homes, prestige residences and properties that can attract Italian and international buyers.`,
      },
    },
    {
      id: '00000000-0000-4000-8000-000000000082',
      type: 'stickySplits',
      enabled: true,
      order: 2,
      content: {
        items: [
          {
            title: 'Valuation and sales strategy',
            lead: 'Every property has a story. A sale begins by understanding its value.',
            body: `A sound property valuation is not only about size, location or features. It means analysing the market, the context, current demand and the property's potential to define a realistic and competitive positioning.

We study every property in depth to identify the right market price and build a sales strategy aligned with its character.

The goal is not simply to put a property on the market, but to present it the right way, to the right audience, at the right time.`,
          },
          {
            title: 'Presentation and property staging',
            lead: 'First impressions can shape the perceived value of a home.',
            body: `A quality property deserves communication of equal quality.

For every instruction we craft the presentation through photography, editorial content, professional descriptions and materials designed to convey not only the spaces, but also the atmosphere, character and way of living it can offer.

When needed, we help owners identify improvements that can lift how the property is perceived — from preparing interiors to highlighting architectural and landscape features.

The home is not merely listed: it is positioned and told.`,
          },
          {
            title: 'Property marketing and international reach',
            lead: 'Reaching more people does not always mean reaching the right buyers.',
            body: `The marketing strategy is built around the property and its likely buyer.

Norton Tanzarella uses its digital channels, professional network and communication aimed also at an international audience to give properties a qualified presence on the market.

Distribution is paired with a coherent presentation across the main touchpoints, with multilingual content when needed and particular attention to demand from abroad.

This widens the pool of potential buyers without losing sight of what matters most: the quality of sales opportunities.`,
          },
          {
            title: 'Buyer research and selection',
            lead: 'Not every prospective buyer is a real buyer.',
            body: `An effective sale also depends on telling genuine interest from simple curiosity.

We manage enquiries, arrange viewings and accompany prospective buyers as they get to know the property, seeking to understand needs, goals and true intent to purchase.

Where possible we work through a network of contacts and qualified professionals, connecting with buyers who may genuinely match the type of property offered.

Our aim is to protect the owner's time and focus the process on concrete opportunities.`,
          },
          {
            title: 'Negotiation and sale management',
            lead: 'A good negotiation is not only about price.',
            body: `When an offer arrives, many variables come into play: financial terms, timing, payment methods, the buyer's needs and technical or documentary aspects.

Norton Tanzarella supports the owner through negotiation, providing professional guidance in assessing proposals and managing the stages that lead to completion.

We coordinate dialogue between the parties and, through a network of qualified professionals, help make the path more orderly, transparent and secure.`,
          },
          {
            title: 'A network of professionals for a smoother sale',
            lead: 'Selling a property involves many disciplines. That is why we do not work alone.',
            body: `Depending on the property's needs, we can introduce the client to specialists in technical, planning, cadastral, legal, tax and financial aspects of the transaction.

Our role is also to coordinate the skills involved, so each stage is handled with the right attention.

For the owner, that means a single point of contact throughout the journey — without having to manage every detail of the sale alone.`,
          },
          {
            title: "From sale to the property's next chapter",
            lead: "For us, a property's journey does not end at the signature.",
            body: `Every sale can be the start of a new opportunity.

That is why our relationship with owners is not limited to marketing the property. Thanks to our market knowledge and the network of relationships built over the years, we can also support those who wish to reinvest, buy another home in Italy or find solutions better suited to their needs.

Our work begins with the sale — but the relationship can continue beyond it.`,
          },
        ],
      },
    },
    {
      id: '00000000-0000-4000-8000-000000000089',
      type: 'richText',
      enabled: true,
      order: 3,
      content: {
        body: `## Why sell with Norton Tanzarella

Selling a property through Norton Tanzarella means trusting a partner who combines **knowledge of the Italian property market, personal attention and an international outlook**.

Every instruction is handled with a tailored approach, because no two properties are alike and no two sales paths are identical.

We bring together strategy, communication, relationships and professional expertise to build a process aimed at one concrete goal: **to sell well, with the right positioning and the greatest care for the owner's interests**.

Have you decided to sell a house, a villa, a masseria or another property in Italy?

Tell us about your property. We will review its features and the market context to understand how to enhance it and which sales strategy may suit it best.`,
      },
    },
    {
      id: '00000000-0000-4000-8000-000000000090',
      type: 'cta',
      enabled: true,
      order: 4,
      content: {
        title: "Let's talk about your property",
        description:
          'Selling an important property deserves more than a simple shop window. It deserves a strategy.',
        button: { label: 'Contact us', to: '/contact' },
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
    allowedTypes: ['hero', 'imageSlideshow', 'stickySplits', 'team', 'stats', 'cta', 'faq'],
    reorderable: ['imageSlideshow', 'stickySplits', 'team', 'stats', 'cta', 'faq'],
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
    allowedTypes: ['hero', 'richText', 'stickySplits', 'cta'],
    reorderable: [],
    defaults: (locale) =>
      locale === 'en' ? SELL_WITH_US_DEFAULTS_EN : SELL_WITH_US_DEFAULTS_IT,
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

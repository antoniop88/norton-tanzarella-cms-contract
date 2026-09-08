/** Fixed UUIDs shared across IT|EN so bilingual editor keeps field identity. */

const IDS = {
  step1: 'a1000000-0000-4000-8000-000000000001',
  step2: 'a1000000-0000-4000-8000-000000000002',
  step3: 'a1000000-0000-4000-8000-000000000003',
  step4: 'a1000000-0000-4000-8000-000000000004',
  step5: 'a1000000-0000-4000-8000-000000000005',
  firstName: 'a2000000-0000-4000-8000-000000000001',
  lastName: 'a2000000-0000-4000-8000-000000000002',
  email: 'a2000000-0000-4000-8000-000000000003',
  phone: 'a2000000-0000-4000-8000-000000000004',
  buyerOrSeller: 'a2000000-0000-4000-8000-000000000005',
  budget: 'a2000000-0000-4000-8000-000000000006',
  bedrooms: 'a2000000-0000-4000-8000-000000000007',
  bathrooms: 'a2000000-0000-4000-8000-000000000008',
  propertyType: 'a2000000-0000-4000-8000-000000000009',
  region: 'a2000000-0000-4000-8000-000000000010',
  size: 'a2000000-0000-4000-8000-000000000011',
  condition: 'a2000000-0000-4000-8000-000000000012',
  purchaseType: 'a2000000-0000-4000-8000-000000000013',
  currency: 'a2000000-0000-4000-8000-000000000014',
  swimmingPool: 'a2000000-0000-4000-8000-000000000015',
  reason: 'a2000000-0000-4000-8000-000000000016',
  tripPlanned: 'a2000000-0000-4000-8000-000000000017',
  tripDate: 'a2000000-0000-4000-8000-000000000018',
  message: 'a2000000-0000-4000-8000-000000000019',
} as const

const BUDGET_OPTS = [
  { value: '0-100000', labelIt: '€0–€100.000', labelEn: '€0-€100,000' },
  { value: '100000-200000', labelIt: '€100.000–€200.000', labelEn: '€100,000-€200,000' },
  { value: '200000-350000', labelIt: '€200.000–€350.000', labelEn: '€200,000-€350,000' },
  { value: '350000-500000', labelIt: '€350.000–€500.000', labelEn: '€350,000-€500,000' },
  { value: '500000-plus', labelIt: '€500.000+', labelEn: '€500,000+' },
] as const

const BED_BATH = ['1', '2', '3', '4', '5+'] as const

const PROPERTY_TYPES = [
  { value: 'country-house', labelIt: 'Casa di campagna', labelEn: 'Country House' },
  { value: 'town-house', labelIt: 'Casa in paese', labelEn: 'Town House' },
  { value: 'apartment', labelIt: 'Appartamento', labelEn: 'Apartment' },
  { value: 'sea-house', labelIt: 'Casa al mare', labelEn: 'Sea House' },
  { value: 'trullo', labelIt: 'Trullo', labelEn: 'Trullo' },
  { value: 'masseria', labelIt: 'Masseria', labelEn: 'Masseria' },
  { value: 'other', labelIt: 'Altro', labelEn: 'Other' },
] as const

const REGIONS = [
  'Abruzzo',
  'Basilicata',
  'Calabria',
  'Campania',
  'Emilia Romagna',
  'Friuli Venezia Giulia',
  'Lazio',
  'Liguria',
  'Lombardia',
  'Marche',
  'Molise',
  'Piemonte',
  'Puglia',
  'Sardegna',
  'Sicilia',
  'Toscana',
  'Trentino Alto Adige',
  'Umbria',
  "Val d'Aosta",
  'Veneto',
  'Provincia autonoma di Trento',
  'Provincia autonoma di Bolzano',
] as const

const SIZES = [
  { value: '0-50', labelIt: '0–50 mq', labelEn: '0sqm-50sqm' },
  { value: '51-100', labelIt: '51–100 mq', labelEn: '51sqm-100sqm' },
  { value: '101-150', labelIt: '101–150 mq', labelEn: '101sqm-150sqm' },
  { value: '151-200', labelIt: '151–200 mq', labelEn: '151sqm-200sqm' },
  { value: '201-250', labelIt: '201–250 mq', labelEn: '201sqm-250sqm' },
  { value: '251-300', labelIt: '251–300 mq', labelEn: '251sqm-300sqm' },
  { value: '301-350', labelIt: '301–350 mq', labelEn: '301sqm-350sqm' },
  { value: '351-plus', labelIt: '351 mq+', labelEn: '351sqm+' },
] as const

function opts(
  items: ReadonlyArray<{ value: string; labelIt: string; labelEn: string }>,
  locale: 'it' | 'en',
) {
  return items.map((item) => ({
    value: item.value,
    label: locale === 'en' ? item.labelEn : item.labelIt,
  }))
}

function yesNo(locale: 'it' | 'en') {
  return [
    { value: 'yes', label: locale === 'en' ? 'Yes' : 'Sì' },
    { value: 'no', label: locale === 'en' ? 'No' : 'No' },
  ]
}

export function buildHomeQuestionnaireDefaults(locale: 'it' | 'en') {
  const en = locale === 'en'

  return {
    enabled: true,
    buttonLabel: en ? 'Start your search' : 'Inizia la ricerca',
    modalTitle: en ? 'Property questionnaire' : 'Questionario immobile',
    submitLabel: en ? 'Send' : 'Invia',
    successMessage: en
      ? 'Thank you — we will get back to you shortly.'
      : 'Grazie — ti risponderemo al più presto.',
    steps: [
      {
        id: IDS.step1,
        title: en ? 'Contact' : 'Contatti',
        fields: [
          {
            id: IDS.firstName,
            key: 'firstName',
            type: 'text' as const,
            columns: '1' as const,
            required: true,
            label: en ? 'First name' : 'Nome',
            placeholder: en ? 'First' : 'Nome',
          },
          {
            id: IDS.lastName,
            key: 'lastName',
            type: 'text' as const,
            columns: '1' as const,
            required: true,
            label: en ? 'Last name' : 'Cognome',
            placeholder: en ? 'Last' : 'Cognome',
          },
          {
            id: IDS.email,
            key: 'email',
            type: 'email' as const,
            columns: '3' as const,
            required: true,
            label: 'Email',
            placeholder: 'Email',
          },
          {
            id: IDS.phone,
            key: 'phone',
            type: 'tel' as const,
            columns: '3' as const,
            required: false,
            label: en ? 'Phone' : 'Telefono',
            placeholder: en ? 'Enter phone number' : 'Inserisci il numero',
          },
        ],
      },
      {
        id: IDS.step2,
        title: en ? 'Preferences' : 'Preferenze',
        fields: [
          {
            id: IDS.buyerOrSeller,
            key: 'buyerOrSeller',
            type: 'select' as const,
            columns: '3' as const,
            required: true,
            label: en ? 'Buyer or seller?' : 'Acquirente o venditore?',
            options: [
              { value: 'buyer', label: en ? 'Buyer' : 'Acquirente' },
              { value: 'seller', label: en ? 'Seller' : 'Venditore' },
            ],
          },
          {
            id: IDS.budget,
            key: 'budget',
            type: 'select' as const,
            columns: '3' as const,
            required: true,
            label: en ? 'Budget' : 'Budget',
            options: opts(BUDGET_OPTS, locale),
          },
          {
            id: IDS.bedrooms,
            key: 'bedrooms',
            type: 'select' as const,
            columns: '1' as const,
            required: true,
            label: en ? 'Bedrooms' : 'Camere da letto',
            options: BED_BATH.map((value) => ({ value, label: value })),
          },
          {
            id: IDS.bathrooms,
            key: 'bathrooms',
            type: 'select' as const,
            columns: '1' as const,
            required: true,
            label: en ? 'Bathrooms' : 'Bagni',
            options: BED_BATH.map((value) => ({ value, label: value })),
          },
        ],
      },
      {
        id: IDS.step3,
        title: en ? 'Property' : 'Immobile',
        fields: [
          {
            id: IDS.propertyType,
            key: 'propertyType',
            type: 'select' as const,
            columns: '3' as const,
            required: true,
            label: en ? 'Property type' : 'Tipologia immobile',
            options: opts(PROPERTY_TYPES, locale),
          },
          {
            id: IDS.region,
            key: 'region',
            type: 'select' as const,
            columns: '3' as const,
            required: true,
            label: en ? 'Region of interest' : 'Regione di interesse',
            options: REGIONS.map((name) => ({ value: name, label: name })),
          },
          {
            id: IDS.size,
            key: 'size',
            type: 'select' as const,
            columns: '3' as const,
            required: true,
            label: en ? 'Size' : 'Dimensione',
            options: opts(SIZES, locale),
          },
          {
            id: IDS.condition,
            key: 'condition',
            type: 'select' as const,
            columns: '3' as const,
            required: true,
            label: en ? 'Condition' : 'Condizione',
            options: [
              {
                value: 'fully-finished',
                label: en ? 'Fully finished' : 'Completamente finito',
              },
              {
                value: 'slight-work',
                label: en ? 'Slight work needed' : 'Piccoli lavori',
              },
              {
                value: 'to-restore',
                label: en ? 'To be restored' : 'Da restaurare',
              },
            ],
          },
        ],
      },
      {
        id: IDS.step4,
        title: en ? 'Purchase' : 'Acquisto',
        fields: [
          {
            id: IDS.purchaseType,
            key: 'purchaseType',
            type: 'select' as const,
            columns: '3' as const,
            required: true,
            label: en ? 'Type of purchase' : 'Tipo di acquisto',
            options: [
              { value: 'cash-buyer', label: en ? 'Cash-buyer' : 'Acquisto in contanti' },
              { value: 'mortgage', label: en ? 'Mortgage' : 'Mutuo' },
            ],
          },
          {
            id: IDS.currency,
            key: 'currency',
            type: 'select' as const,
            columns: '3' as const,
            required: true,
            label: en ? 'Currency of purchase' : 'Valuta di acquisto',
            options: [
              { value: 'USD', label: 'USD' },
              { value: 'GBP', label: 'GBP' },
              { value: 'EUR', label: 'EUR' },
              { value: 'AUD', label: 'AUD' },
              { value: 'other', label: en ? 'Other' : 'Altro' },
            ],
          },
          {
            id: IDS.swimmingPool,
            key: 'swimmingPool',
            type: 'select' as const,
            columns: '3' as const,
            required: true,
            label: en ? 'Swimming pool' : 'Piscina',
            options: yesNo(locale),
          },
          {
            id: IDS.reason,
            key: 'reason',
            type: 'select' as const,
            columns: '3' as const,
            required: true,
            label: en ? 'Reason for purchase' : 'Motivo dell’acquisto',
            options: [
              { value: 'personal-use', label: en ? 'Personal use' : 'Uso personale' },
              { value: 'investment', label: en ? 'Investment' : 'Investimento' },
              { value: 'both', label: en ? 'Both' : 'Entrambi' },
            ],
          },
        ],
      },
      {
        id: IDS.step5,
        title: en ? 'Details' : 'Dettagli',
        fields: [
          {
            id: IDS.tripPlanned,
            key: 'tripPlanned',
            type: 'select' as const,
            columns: '3' as const,
            required: true,
            label: en ? 'Trip planned?' : 'Viaggio programmato?',
            options: yesNo(locale),
          },
          {
            id: IDS.tripDate,
            key: 'tripDate',
            type: 'date' as const,
            columns: '3' as const,
            required: false,
            label: en
              ? 'If yes — planned date (optional)'
              : 'Se sì — data prevista (facoltativo)',
          },
          {
            id: IDS.message,
            key: 'message',
            type: 'textarea' as const,
            columns: '3' as const,
            required: false,
            label: en ? 'Message' : 'Messaggio',
            placeholder: en ? 'Message' : 'Messaggio',
          },
        ],
      },
    ],
  }
}

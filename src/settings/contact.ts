import { z } from 'zod'
import {
  DEFAULT_OPENING_HOURS_IT,
  mergeOpeningHoursNotes,
  openingHoursSchema,
  validateOpeningHours,
} from './opening-hours.js'

export {
  dayOfWeekSchema,
  openingHoursSchema,
  DEFAULT_OPENING_HOURS_IT,
  EDITOR_DAY_ORDER,
  WEEKDAY_ORDER,
  flattenDaySchedules,
  groupConsecutiveSchedules,
  groupOpeningHoursByDay,
  mergeOpeningHoursNotes,
  validateOpeningHours,
} from './opening-hours.js'
export type {
  DayOfWeek,
  DaySchedule,
  DayScheduleGroup,
  OpeningHoursEntry,
  OpeningHoursValidationIssue,
  TimeSlot,
} from './opening-hours.js'

export const organizationSchema = z
  .object({
    legalName: z.string().max(120).describe('Ragione sociale'),
    vatNumber: z.string().max(20).optional().describe('Partita IVA'),
    email: z.string().email().max(320).describe('Email'),
    phone: z.string().max(30).describe('Telefono'),
    address: z
      .object({
        street: z.string().max(120).describe('Indirizzo'),
        city: z.string().max(80).describe('Città'),
        postalCode: z.string().max(12).describe('CAP'),
        country: z.string().length(2).describe('Paese (ISO)'),
      })
      .describe('Indirizzo'),
    geo: z
      .object({
        latitude: z.number().min(-90).max(90).describe('Latitudine'),
        longitude: z.number().min(-180).max(180).describe('Longitudine'),
      })
      .describe('Coordinate'),
    mapUrl: z
      .string()
      .url()
      .max(500)
      .optional()
      .describe('Link mappa (es. Google Maps). Se vuoto viene generato dalle coordinate.'),
    openingHours: z.array(openingHoursSchema).min(1).max(14).describe('Orari'),
  })
  .describe('Organizzazione')
  .superRefine((data, ctx) => {
    for (const issue of validateOpeningHours(data.openingHours)) {
      ctx.addIssue({
        code: 'custom',
        path: issue.path,
        message: issue.message,
      })
    }
  })

export const contactFormSchema = z
  .object({
    enabled: z.boolean().describe('Modulo attivo'),
    leadRecipientEmail: z.string().email().max(320).optional().describe('Email destinatario lead'),
    privacyConsentText: z.string().max(2000).optional().describe('Testo consenso privacy (obbligatorio)'),
    privacyPolicyUrl: z
      .string()
      .max(500)
      .optional()
      .describe('Link informativa privacy (es. /privacy-policy)'),
    marketingConsentEnabled: z.boolean().describe('Mostra consenso marketing (facoltativo)'),
    marketingConsentText: z.string().max(2000).optional().describe('Testo consenso marketing'),
    phoneFieldEnabled: z.boolean().describe('Mostra campo telefono'),
    phoneRequired: z.boolean().describe('Telefono obbligatorio'),
    subjectFieldEnabled: z.boolean().describe('Mostra campo oggetto'),
    subjectOptions: z
      .array(z.object({ value: z.string().max(60).describe('Opzione') }))
      .max(20)
      .optional()
      .describe('Opzioni oggetto (se vuoto è un campo di testo libero)'),
    labels: z
      .object({
        name: z.string().max(40).optional().describe('Etichetta nome'),
        email: z.string().max(40).optional().describe('Etichetta email'),
        phone: z.string().max(40).optional().describe('Etichetta telefono'),
        subject: z.string().max(40).optional().describe('Etichetta oggetto'),
        message: z.string().max(40).optional().describe('Etichetta messaggio'),
      })
      .optional()
      .describe('Etichette campi'),
    messages: z
      .object({
        success: z.string().max(200).optional().describe('Messaggio successo'),
        error: z.string().max(200).optional().describe('Messaggio errore'),
      })
      .optional()
      .describe('Messaggi di stato'),
    submitButtonLabel: z.string().max(30).optional().describe('Etichetta pulsante invio'),
  })
  .describe('Modulo contatti')
  .superRefine((data, ctx) => {
    if (!data.enabled) return
    const required: Array<keyof typeof data> = [
      'leadRecipientEmail',
      'privacyConsentText',
      'submitButtonLabel',
    ]
    for (const key of required) {
      if (!data[key]) {
        ctx.addIssue({ code: 'custom', path: [key], message: 'Required when contact form is enabled' })
      }
    }
    if (!data.labels?.name || !data.labels?.email || !data.labels?.message) {
      ctx.addIssue({ code: 'custom', path: ['labels'], message: 'All labels required when enabled' })
    }
    if (data.phoneFieldEnabled && !data.labels?.phone) {
      ctx.addIssue({ code: 'custom', path: ['labels', 'phone'], message: 'Phone label required' })
    }
    if (data.subjectFieldEnabled && !data.labels?.subject) {
      ctx.addIssue({ code: 'custom', path: ['labels', 'subject'], message: 'Subject label required' })
    }
    if (data.marketingConsentEnabled && !data.marketingConsentText) {
      ctx.addIssue({
        code: 'custom',
        path: ['marketingConsentText'],
        message: 'Marketing consent text required',
      })
    }
    if (!data.messages?.success || !data.messages?.error) {
      ctx.addIssue({ code: 'custom', path: ['messages'], message: 'All messages required when enabled' })
    }
  })

export const contactSettingsSchema = z.object({
  organization: organizationSchema,
  contactForm: contactFormSchema,
})

export type ContactSettings = z.infer<typeof contactSettingsSchema>

/**
 * Build a copy of `targetOrg` whose entire organization comes from `sourceOrg`
 * (the shared, language-independent source of truth), except each opening-hours
 * note (`description`), which is kept per-locale from `targetOrg`.
 * Used to fan the organization out across all locales while notes stay translatable.
 */
export function mergeSharedOrganization(
  targetOrg: ContactSettings['organization'],
  sourceOrg: ContactSettings['organization'],
): ContactSettings['organization'] {
  return {
    ...sourceOrg,
    openingHours: mergeOpeningHoursNotes(sourceOrg.openingHours, targetOrg.openingHours),
  }
}

export {
  hexColorSchema,
  FONT_SANS_WHITELIST,
  FONT_HEADING_WHITELIST,
  FONT_WHITELIST,
  LOGO_SLOTS,
  logoAltSchema,
  logoSlotSchema,
  brandingColorsSchema,
  brandingTypographySchema,
  brandingLogosSchema,
  DEFAULT_BRANDING_COLORS,
  DEFAULT_BRANDING_TYPOGRAPHY,
  DEFAULT_BRANDING_SCALARS,
  settingsScalarsSchema,
  normalizeSettingsScalars,
  scalarsToCssVars,
  cssVarsToStyleText,
  collectLogoMediaIds,
} from './branding.js'
export type {
  FontSans,
  FontHeading,
  LogoSlot,
  LogoSlotConfig,
  BrandingColors,
  BrandingTypography,
  BrandingLogos,
  SettingsScalars,
} from './branding.js'

export const DEFAULT_CONTACT_SETTINGS_IT: ContactSettings = {
  organization: {
    legalName: 'Norton Tanzarella S.r.l.',
    email: 'info@nortontanzarella.it',
    phone: '+39 0831 000000',
    address: {
      street: 'Corso Vittorio Emanuele 12',
      city: 'Ostuni',
      postalCode: '72017',
      country: 'IT',
    },
    geo: { latitude: 40.7297, longitude: 17.5778 },
    openingHours: DEFAULT_OPENING_HOURS_IT,
  },
  contactForm: {
    enabled: true,
    leadRecipientEmail: 'info@nortontanzarella.it',
    privacyConsentText:
      'Ho letto l\'informativa privacy e acconsento al trattamento dei dati.',
    privacyPolicyUrl: '/privacy-policy',
    marketingConsentEnabled: true,
    marketingConsentText:
      'Acconsento a ricevere comunicazioni commerciali e newsletter (facoltativo).',
    phoneFieldEnabled: true,
    phoneRequired: false,
    subjectFieldEnabled: true,
    subjectOptions: [],
    labels: {
      name: 'Nome',
      email: 'Email',
      phone: 'Telefono',
      subject: 'Oggetto',
      message: 'Messaggio',
    },
    messages: {
      success: 'Messaggio inviato. Ti risponderemo al più presto.',
      error: 'Invio non riuscito. Riprova più tardi.',
    },
    submitButtonLabel: 'Invia messaggio',
  },
}

import { z } from 'zod'

const dayOfWeekSchema = z.enum([
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
  'PublicHolidays',
])

export const openingHoursSchema = z.object({
  dayOfWeek: dayOfWeekSchema,
  opens: z.string().regex(/^\d{2}:\d{2}$/),
  closes: z.string().regex(/^\d{2}:\d{2}$/),
  description: z.string().max(80).optional(),
})

export const organizationSchema = z.object({
  legalName: z.string().max(120),
  vatNumber: z.string().max(20).optional(),
  email: z.string().email().max(320),
  phone: z.string().max(30),
  address: z.object({
    street: z.string().max(120),
    city: z.string().max(80),
    postalCode: z.string().max(12),
    country: z.string().length(2),
  }),
  geo: z.object({
    latitude: z.number().min(-90).max(90),
    longitude: z.number().min(-180).max(180),
  }),
  openingHours: z.array(openingHoursSchema).min(1).max(14),
})

export const contactFormSchema = z
  .object({
    enabled: z.boolean(),
    leadRecipientEmail: z.string().email().max(320).optional(),
    privacyConsentText: z.string().max(2000).optional(),
    labels: z
      .object({
        name: z.string().max(40).optional(),
        email: z.string().max(40).optional(),
        message: z.string().max(40).optional(),
      })
      .optional(),
    messages: z
      .object({
        success: z.string().max(200).optional(),
        error: z.string().max(200).optional(),
      })
      .optional(),
    submitButtonLabel: z.string().max(30).optional(),
  })
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
    if (!data.messages?.success || !data.messages?.error) {
      ctx.addIssue({ code: 'custom', path: ['messages'], message: 'All messages required when enabled' })
    }
  })

export const contactSettingsSchema = z.object({
  organization: organizationSchema,
  contactForm: contactFormSchema,
})

export type ContactSettings = z.infer<typeof contactSettingsSchema>

export const settingsScalarsSchema = z.object({
  themeColor: z.string().regex(/^#[0-9A-Fa-f]{6}$/),
  backgroundColor: z.string().regex(/^#[0-9A-Fa-f]{6}$/),
})

export type SettingsScalars = z.infer<typeof settingsScalarsSchema>

export const DEFAULT_CONTACT_SETTINGS_IT: ContactSettings = {
  organization: {
    legalName: 'Norton Tanzarella S.r.l.',
    email: 'info@nortontanzarella.it',
    phone: '+39 06 1234 5678',
    address: {
      street: 'Via Roma 1',
      city: 'Roma',
      postalCode: '00100',
      country: 'IT',
    },
    geo: { latitude: 41.9028, longitude: 12.4964 },
    openingHours: [
      { dayOfWeek: 'Monday', opens: '09:00', closes: '18:00' },
      { dayOfWeek: 'Tuesday', opens: '09:00', closes: '18:00' },
      { dayOfWeek: 'Wednesday', opens: '09:00', closes: '18:00' },
      { dayOfWeek: 'Thursday', opens: '09:00', closes: '18:00' },
      { dayOfWeek: 'Friday', opens: '09:00', closes: '18:00' },
    ],
  },
  contactForm: {
    enabled: true,
    leadRecipientEmail: 'info@nortontanzarella.it',
    privacyConsentText:
      'Ho letto l\'informativa privacy e acconsento al trattamento dei dati.',
    labels: { name: 'Nome', email: 'Email', message: 'Messaggio' },
    messages: {
      success: 'Messaggio inviato. Ti risponderemo al più presto.',
      error: 'Invio non riuscito. Riprova più tardi.',
    },
    submitButtonLabel: 'Invia messaggio',
  },
}

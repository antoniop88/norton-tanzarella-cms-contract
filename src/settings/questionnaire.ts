import { z } from 'zod'
import { buildHomeQuestionnaireDefaults } from './questionnaireDefaults.js'

export { buildHomeQuestionnaireDefaults } from './questionnaireDefaults.js'

export const questionnaireFieldOptionSchema = z.object({
  value: z.string().min(1).max(80).describe('Valore'),
  label: z.string().min(1).max(120).describe('Etichetta'),
})

export const questionnaireFieldSchema = z.object({
  id: z.string().uuid().describe('ID campo'),
  key: z
    .string()
    .min(1)
    .max(60)
    .regex(/^[a-zA-Z][a-zA-Z0-9_]*$/, 'Chiave alfanumerica')
    .describe('Chiave'),
  type: z.enum(['text', 'email', 'tel', 'select', 'textarea', 'date']).describe('Tipo'),
  columns: z.enum(['1', '2', '3']).describe('Colonne'),
  required: z.boolean().describe('Obbligatorio'),
  label: z.string().min(1).max(120).describe('Etichetta'),
  placeholder: z.string().max(120).optional().describe('Placeholder'),
  options: z.array(questionnaireFieldOptionSchema).max(40).optional().describe('Opzioni'),
})

export const questionnaireStepSchema = z.object({
  id: z.string().uuid().describe('ID step'),
  title: z.string().max(80).optional().describe('Titolo step'),
  fields: z.array(questionnaireFieldSchema).min(1).max(8).describe('Campi'),
})

export const questionnaireSchema = z.object({
  enabled: z.boolean().describe('Questionario attivo'),
  buttonLabel: z.string().min(1).max(60).describe('Etichetta pulsante'),
  modalTitle: z.string().max(80).optional().describe('Titolo modale'),
  submitLabel: z.string().min(1).max(40).describe('Etichetta invio'),
  successMessage: z.string().min(1).max(300).describe('Messaggio successo'),
  steps: z.array(questionnaireStepSchema).min(1).max(12).describe('Step'),
})

export type QuestionnaireFieldOption = z.infer<typeof questionnaireFieldOptionSchema>
export type QuestionnaireField = z.infer<typeof questionnaireFieldSchema>
export type QuestionnaireStep = z.infer<typeof questionnaireStepSchema>
export type QuestionnaireContent = z.infer<typeof questionnaireSchema>

export const DEFAULT_QUESTIONNAIRE_IT = buildHomeQuestionnaireDefaults('it')
export const DEFAULT_QUESTIONNAIRE_EN = buildHomeQuestionnaireDefaults('en')

/** Prefer stored questionnaire; seed locale defaults when missing/invalid. */
export function mergeQuestionnaireDefaults(
  partial: unknown,
  locale: 'it' | 'en' = 'it',
): QuestionnaireContent {
  const defaults = locale === 'en' ? DEFAULT_QUESTIONNAIRE_EN : DEFAULT_QUESTIONNAIRE_IT
  if (!partial || typeof partial !== 'object') {
    return structuredClone(defaults)
  }
  const parsed = questionnaireSchema.safeParse({
    ...defaults,
    ...partial,
    steps: Array.isArray((partial as { steps?: unknown }).steps)
      ? (partial as { steps: unknown }).steps
      : defaults.steps,
  })
  if (!parsed.success) return structuredClone(defaults)
  return parsed.data
}

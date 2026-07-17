import { z } from 'zod'
import type { ZodTypeAny } from 'zod'
import { enumLabelIt } from './enumLabelsIt.js'

export type LocaleScope = 'shared' | 'i18n'

export type FieldMeta =
  | {
      kind: 'string'
      key: string
      label: string
      required: boolean
      localeScope: LocaleScope
      maxLength?: number
      multiline?: boolean
      format?: 'url' | 'email' | 'time'
    }
  | {
      kind: 'image'
      key: string
      label: string
      required: boolean
      localeScope: LocaleScope
    }
  | {
      kind: 'number'
      key: string
      label: string
      required: boolean
      localeScope: LocaleScope
      min?: number
      max?: number
    }
  | {
      kind: 'boolean'
      key: string
      label: string
      required: boolean
      localeScope: LocaleScope
    }
  | {
      kind: 'enum'
      key: string
      label: string
      required: boolean
      localeScope: LocaleScope
      options: { value: string; label: string }[]
    }
  | {
      kind: 'object'
      key: string
      label: string
      required: boolean
      localeScope: LocaleScope
      fields: FieldMeta[]
    }
  | {
      kind: 'array'
      key: string
      label: string
      required: boolean
      localeScope: LocaleScope
      item: FieldMeta
      min?: number
      max?: number
    }

/** Keys that are structural / locale-agnostic even when typed as string. */
const SHARED_STRING_KEYS = new Set([
  'to',
  'href',
  'iubendaPolicyId',
  'collectionKey',
  'leadRecipientEmail',
  'privacyPolicyUrl',
  'mapUrl',
  'url',
  'platform',
])

function resolveLocaleScope(
  kind: FieldMeta['kind'],
  fieldKey: string,
  format?: 'url' | 'email' | 'time',
): LocaleScope {
  if (kind === 'image' || kind === 'boolean' || kind === 'number' || kind === 'enum') {
    return 'shared'
  }
  if (kind === 'string' && (SHARED_STRING_KEYS.has(fieldKey) || format === 'email' || format === 'url')) {
    return 'shared'
  }
  if (kind === 'object' || kind === 'array') {
    return 'shared'
  }
  return 'i18n'
}

function humanize(key: string): string {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (c) => c.toUpperCase())
    .trim()
}

function unwrap(schema: ZodTypeAny): ZodTypeAny {
  if (schema instanceof z.ZodOptional || schema instanceof z.ZodDefault) {
    return unwrap(schema._def.innerType as ZodTypeAny)
  }
  if (schema instanceof z.ZodEffects) {
    return unwrap(schema._def.schema as ZodTypeAny)
  }
  return schema
}

function getSchemaDescription(schema: ZodTypeAny): string | undefined {
  const direct = schema._def.description as string | undefined
  if (direct) return direct
  if (schema instanceof z.ZodOptional || schema instanceof z.ZodDefault) {
    return getSchemaDescription(schema._def.innerType as ZodTypeAny)
  }
  if (schema instanceof z.ZodEffects) {
    return getSchemaDescription(schema._def.schema as ZodTypeAny)
  }
  return undefined
}

function resolveLabel(schema: ZodTypeAny, fieldKey: string): string {
  return getSchemaDescription(schema) ?? humanize(fieldKey)
}

function getMaxLength(schema: ZodTypeAny): number | undefined {
  for (const check of (schema as z.ZodString)._def?.checks ?? []) {
    if (check.kind === 'max') return check.value
  }
  return undefined
}

function isEmailString(schema: ZodTypeAny): boolean {
  return (schema as z.ZodString)._def?.checks?.some((c) => c.kind === 'email') ?? false
}

function isTimeString(schema: ZodTypeAny): boolean {
  const inner = unwrap(schema)
  if (!(inner instanceof z.ZodString)) return false

  return (
    inner._def.checks?.some((check) => {
      if (check.kind !== 'regex') return false
      return check.regex.test('09:00') && check.regex.test('23:59') && !check.regex.test('9:00')
    }) ?? false
  )
}

function resolveStringFormat(schema: ZodTypeAny): 'url' | 'email' | 'time' | undefined {
  const inner = unwrap(schema)
  if (!(inner instanceof z.ZodString)) return undefined
  if (inner._def.checks?.some((check) => check.kind === 'url')) return 'url'
  if (isEmailString(inner)) return 'email'
  if (isTimeString(inner)) return 'time'
  return undefined
}

function resolveArrayItemMeta(itemSchema: ZodTypeAny, fieldKey: string): FieldMeta {
  const inner = unwrap(itemSchema)
  if (inner instanceof z.ZodObject) {
    return {
      kind: 'object',
      key: `${fieldKey}Item`,
      label: resolveLabel(itemSchema, `${fieldKey}Item`),
      required: true,
      localeScope: 'shared',
      fields: zodToFieldMeta(inner, `${fieldKey}Item`),
    }
  }

  return (
    zodToFieldMeta(itemSchema, `${fieldKey}Item`)[0] ?? {
      kind: 'string',
      key: 'value',
      label: 'Valore',
      required: true,
      localeScope: 'i18n',
    }
  )
}

export function zodToFieldMeta(schema: ZodTypeAny, key = 'root'): FieldMeta[] {
  const base = unwrap(schema)

  if (base instanceof z.ZodObject) {
    const shape = base.shape as Record<string, ZodTypeAny>
    const fields: FieldMeta[] = []
    for (const [fieldKey, fieldSchema] of Object.entries(shape)) {
      const required = !(fieldSchema instanceof z.ZodOptional || fieldSchema instanceof z.ZodDefault)
      const inner = unwrap(fieldSchema)

      if (inner instanceof z.ZodString) {
        const maxLength = getMaxLength(inner)
        const format = resolveStringFormat(fieldSchema)
        const isImageField =
          fieldKey === 'image' || fieldKey === 'mediaId' || fieldKey.endsWith('Image') || fieldKey.endsWith('image') || fieldKey.endsWith('MediaId')
        if (isImageField && format !== 'url' && format !== 'email' && format !== 'time') {
          fields.push({
            kind: 'image',
            key: fieldKey,
            label: resolveLabel(fieldSchema, fieldKey),
            required,
            localeScope: resolveLocaleScope('image', fieldKey),
          })
          continue
        }
        fields.push({
          kind: 'string',
          key: fieldKey,
          label: resolveLabel(fieldSchema, fieldKey),
          required,
          localeScope: resolveLocaleScope('string', fieldKey, format),
          maxLength,
          multiline: format === undefined && maxLength !== undefined && maxLength > 200,
          format,
        })
        continue
      }

      if (inner instanceof z.ZodNumber) {
        let min: number | undefined
        let max: number | undefined
        for (const check of inner._def.checks ?? []) {
          if (check.kind === 'min') min = check.value
          if (check.kind === 'max') max = check.value
        }
        fields.push({
          kind: 'number',
          key: fieldKey,
          label: resolveLabel(fieldSchema, fieldKey),
          required,
          localeScope: resolveLocaleScope('number', fieldKey),
          min,
          max,
        })
        continue
      }

      if (inner instanceof z.ZodBoolean) {
        fields.push({
          kind: 'boolean',
          key: fieldKey,
          label: resolveLabel(fieldSchema, fieldKey),
          required,
          localeScope: resolveLocaleScope('boolean', fieldKey),
        })
        continue
      }

      if (inner instanceof z.ZodEnum) {
        fields.push({
          kind: 'enum',
          key: fieldKey,
          label: resolveLabel(fieldSchema, fieldKey),
          required,
          localeScope: resolveLocaleScope('enum', fieldKey),
          options: inner.options.map((value: string) => ({
            value,
            label: enumLabelIt(fieldKey, value),
          })),
        })
        continue
      }

      if (inner instanceof z.ZodLiteral) {
        fields.push({
          kind: 'enum',
          key: fieldKey,
          label: resolveLabel(fieldSchema, fieldKey),
          required,
          localeScope: resolveLocaleScope('enum', fieldKey),
          options: [{ value: String(inner.value), label: String(inner.value) }],
        })
        continue
      }

      if (inner instanceof z.ZodObject) {
        fields.push({
          kind: 'object',
          key: fieldKey,
          label: resolveLabel(fieldSchema, fieldKey),
          required,
          localeScope: resolveLocaleScope('object', fieldKey),
          fields: zodToFieldMeta(inner, fieldKey),
        })
        continue
      }

      if (inner instanceof z.ZodArray) {
        const itemSchema = inner._def.type as ZodTypeAny
        const minLength = inner._def.minLength?.value as number | undefined
        const maxLength = inner._def.maxLength?.value as number | undefined
        fields.push({
          kind: 'array',
          key: fieldKey,
          label: resolveLabel(fieldSchema, fieldKey),
          required,
          localeScope: resolveLocaleScope('array', fieldKey),
          item: resolveArrayItemMeta(itemSchema, fieldKey),
          min: minLength,
          max: maxLength,
        })
      }
    }
    return fields
  }

  return []
}

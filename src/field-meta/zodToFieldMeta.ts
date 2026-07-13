import { z } from 'zod'
import type { ZodTypeAny } from 'zod'

export type FieldMeta =
  | {
      kind: 'string'
      key: string
      label: string
      required: boolean
      maxLength?: number
      multiline?: boolean
      format?: 'url' | 'email'
    }
  | {
      kind: 'number'
      key: string
      label: string
      required: boolean
      min?: number
      max?: number
    }
  | {
      kind: 'boolean'
      key: string
      label: string
      required: boolean
    }
  | {
      kind: 'enum'
      key: string
      label: string
      required: boolean
      options: { value: string; label: string }[]
    }
  | {
      kind: 'object'
      key: string
      label: string
      required: boolean
      fields: FieldMeta[]
    }
  | {
      kind: 'array'
      key: string
      label: string
      required: boolean
      item: FieldMeta
      min?: number
      max?: number
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
  return schema
}

function getMaxLength(schema: ZodTypeAny): number | undefined {
  for (const check of (schema as z.ZodString)._def?.checks ?? []) {
    if (check.kind === 'max') return check.value
  }
  return undefined
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
        const isUrl = inner._def.checks?.some((c) => c.kind === 'url')
        fields.push({
          kind: 'string',
          key: fieldKey,
          label: humanize(fieldKey),
          required,
          maxLength,
          multiline: maxLength !== undefined && maxLength > 200,
          format: isUrl ? 'url' : undefined,
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
        fields.push({ kind: 'number', key: fieldKey, label: humanize(fieldKey), required, min, max })
        continue
      }

      if (inner instanceof z.ZodBoolean) {
        fields.push({ kind: 'boolean', key: fieldKey, label: humanize(fieldKey), required })
        continue
      }

      if (inner instanceof z.ZodEnum) {
        fields.push({
          kind: 'enum',
          key: fieldKey,
          label: humanize(fieldKey),
          required,
          options: inner.options.map((value: string) => ({ value, label: humanize(value) })),
        })
        continue
      }

      if (inner instanceof z.ZodLiteral) {
        fields.push({
          kind: 'enum',
          key: fieldKey,
          label: humanize(fieldKey),
          required,
          options: [{ value: String(inner.value), label: String(inner.value) }],
        })
        continue
      }

      if (inner instanceof z.ZodObject) {
        fields.push({
          kind: 'object',
          key: fieldKey,
          label: humanize(fieldKey),
          required,
          fields: zodToFieldMeta(inner, fieldKey),
        })
        continue
      }

      if (inner instanceof z.ZodArray) {
        const itemSchema = inner._def.type as ZodTypeAny
        const itemMeta = zodToFieldMeta(itemSchema, `${fieldKey}Item`)[0]
        const minLength = inner._def.minLength?.value as number | undefined
        const maxLength = inner._def.maxLength?.value as number | undefined
        fields.push({
          kind: 'array',
          key: fieldKey,
          label: humanize(fieldKey),
          required,
          item: itemMeta ?? {
            kind: 'string',
            key: 'value',
            label: 'Value',
            required: true,
          },
          min: minLength,
          max: maxLength,
        })
      }
    }
    return fields
  }

  return []
}

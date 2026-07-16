import { socialPlatformLabelIt } from '../settings/socialPlatforms.js'

export const DAY_OF_WEEK_LABELS_IT: Record<string, string> = {
  Monday: 'Lunedì',
  Tuesday: 'Martedì',
  Wednesday: 'Mercoledì',
  Thursday: 'Giovedì',
  Friday: 'Venerdì',
  Saturday: 'Sabato',
  Sunday: 'Domenica',
  PublicHolidays: 'Festivi',
}

export const SOCIAL_PLATFORM_LABELS_IT: Record<string, string> = {
  linkedin: 'LinkedIn',
  instagram: 'Instagram',
  facebook: 'Facebook',
  x: 'X',
  youtube: 'YouTube',
  tiktok: 'TikTok',
  whatsapp: 'WhatsApp',
}

export const FEATURED_COLLECTION_MODE_LABELS_IT: Record<string, string> = {
  featured: 'In evidenza',
  manual: 'Manuale',
}

export const LEGAL_POLICY_SOURCE_LABELS_IT: Record<string, string> = {
  manual: 'Manuale',
  iubenda: 'Iubenda',
}

export function enumLabelIt(fieldKey: string, value: string): string {
  if (fieldKey === 'dayOfWeek') return DAY_OF_WEEK_LABELS_IT[value] ?? value
  if (fieldKey === 'platform') {
    return SOCIAL_PLATFORM_LABELS_IT[value] ?? socialPlatformLabelIt(value as never) ?? value
  }
  if (fieldKey === 'mode') return FEATURED_COLLECTION_MODE_LABELS_IT[value] ?? value
  if (fieldKey === 'source') return LEGAL_POLICY_SOURCE_LABELS_IT[value] ?? value
  return value
}

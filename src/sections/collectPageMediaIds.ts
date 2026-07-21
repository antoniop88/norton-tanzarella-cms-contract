import type { CmsPageDocument } from '../pages/document.js'

function isUuid(value: string): boolean {
  if (value.length !== 36) return false
  return /^[0-9a-f-]{36}$/i.test(value)
}

function walkCollectMediaIds(value: unknown, into: Set<string>): void {
  if (value == null) return
  if (Array.isArray(value)) {
    for (const entry of value) walkCollectMediaIds(entry, into)
    return
  }
  if (typeof value !== 'object') return
  for (const [key, entry] of Object.entries(value as Record<string, unknown>)) {
    if (
      (key === 'mediaId' ||
        key.startsWith('mediaId') ||
        key.endsWith('MediaId') ||
        key === 'videoMediaId') &&
      typeof entry === 'string' &&
      isUuid(entry)
    ) {
      into.add(entry.toLowerCase())
    } else {
      walkCollectMediaIds(entry, into)
    }
  }
}

export function collectPageMediaIds(document: CmsPageDocument | unknown): string[] {
  const ids = new Set<string>()
  if (!document || typeof document !== 'object') return []
  const sections = (document as CmsPageDocument).sections
  if (!Array.isArray(sections)) return []
  for (const section of sections) {
    walkCollectMediaIds(section?.content, ids)
  }
  return [...ids]
}

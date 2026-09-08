import type { CmsSection } from '../pages/document.js'

/**
 * Pull legacy `statement.questionnaire` (pre-v0.32) before strip.
 */
export function extractLegacyStatementQuestionnaire(sections: CmsSection[]): unknown | null {
  for (const section of sections) {
    if (section.type !== 'statement') continue
    const content = section.content as Record<string, unknown>
    if (content.questionnaire && typeof content.questionnaire === 'object') {
      return content.questionnaire
    }
  }
  return null
}

/**
 * v0.32: questionnaire lives in cms_settings — strip legacy `statement.questionnaire`.
 */
export function stripStatementQuestionnaire(sections: CmsSection[]): CmsSection[] {
  return sections.map((section) => {
    if (section.type !== 'statement') return section
    const content = section.content as Record<string, unknown>
    if (!('questionnaire' in content)) return section
    const { questionnaire: _removed, ...rest } = content
    return { ...section, content: rest }
  })
}

/** @deprecated Use stripStatementQuestionnaire — questionnaire is in settings since v0.32. */
export function migrateStatementQuestionnaire(
  sections: CmsSection[],
  _defaults?: unknown,
): CmsSection[] {
  return stripStatementQuestionnaire(sections)
}

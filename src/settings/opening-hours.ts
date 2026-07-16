import { z } from 'zod'

export const dayOfWeekSchema = z.enum([
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
  'PublicHolidays',
])

export const openingHoursSchema = z
  .object({
    dayOfWeek: dayOfWeekSchema.describe('Giorno'),
    opens: z.string().regex(/^\d{2}:\d{2}$/).describe('Apertura'),
    closes: z.string().regex(/^\d{2}:\d{2}$/).describe('Chiusura'),
    description: z.string().max(80).optional().describe('Nota'),
  })
  .describe('Orario di apertura')

export type OpeningHoursEntry = z.infer<typeof openingHoursSchema>
export type DayOfWeek = OpeningHoursEntry['dayOfWeek']

export type TimeSlot = {
  opens: string
  closes: string
}

export type DaySchedule = {
  dayOfWeek: DayOfWeek
  closed: boolean
  slots: TimeSlot[]
  description?: string
}

export const WEEKDAY_ORDER = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
] as const satisfies readonly DayOfWeek[]

export const EDITOR_DAY_ORDER = [...WEEKDAY_ORDER, 'PublicHolidays'] as const satisfies readonly DayOfWeek[]

function compareTime(a: string, b: string): number {
  return a.localeCompare(b)
}

function sortSlots(slots: TimeSlot[]): TimeSlot[] {
  return [...slots].sort((a, b) => compareTime(a.opens, b.opens))
}

export function groupOpeningHoursByDay(entries: OpeningHoursEntry[]): DaySchedule[] {
  const byDay = new Map<DayOfWeek, OpeningHoursEntry[]>()

  for (const entry of entries) {
    const list = byDay.get(entry.dayOfWeek) ?? []
    list.push(entry)
    byDay.set(entry.dayOfWeek, list)
  }

  return EDITOR_DAY_ORDER.map((dayOfWeek) => {
    const dayEntries = byDay.get(dayOfWeek) ?? []
    if (dayEntries.length === 0) {
      return { dayOfWeek, closed: true, slots: [] }
    }

    const description = dayEntries.find((entry) => entry.description)?.description
    const slots = sortSlots(
      dayEntries.map((entry) => ({
        opens: entry.opens,
        closes: entry.closes,
      })),
    )

    return {
      dayOfWeek,
      closed: false,
      slots,
      ...(description ? { description } : {}),
    }
  })
}

export function flattenDaySchedules(schedules: DaySchedule[]): OpeningHoursEntry[] {
  const entries: OpeningHoursEntry[] = []

  for (const schedule of schedules) {
    if (schedule.closed || schedule.slots.length === 0) continue

    const sortedSlots = sortSlots(schedule.slots)
    sortedSlots.forEach((slot, index) => {
      entries.push({
        dayOfWeek: schedule.dayOfWeek,
        opens: slot.opens,
        closes: slot.closes,
        ...(index === 0 && schedule.description ? { description: schedule.description } : {}),
      })
    })
  }

  return entries
}

export type DayScheduleGroup = {
  days: DayOfWeek[]
  startDay: DayOfWeek
  endDay: DayOfWeek
  closed: boolean
  slots: TimeSlot[]
  description?: string
}

function scheduleSignature(schedule: DaySchedule): string {
  if (schedule.closed || schedule.slots.length === 0) return 'closed'
  const slots = schedule.slots.map((slot) => `${slot.opens}-${slot.closes}`).join('|')
  return `open|${slots}|${schedule.description ?? ''}`
}

/**
 * Merge CONSECUTIVE weekdays (in WEEKDAY_ORDER) that share the same signature
 * (both closed, or identical slots + note) into a single range group.
 * PublicHolidays are excluded — handle them separately.
 */
export function groupConsecutiveSchedules(schedules: DaySchedule[]): DayScheduleGroup[] {
  const byDay = new Map<DayOfWeek, DaySchedule>(schedules.map((s) => [s.dayOfWeek, s]))
  const groups: Array<DayScheduleGroup & { signature: string }> = []

  for (const day of WEEKDAY_ORDER) {
    const schedule = byDay.get(day) ?? { dayOfWeek: day, closed: true, slots: [] }
    const signature = scheduleSignature(schedule)
    const last = groups[groups.length - 1]

    if (last && last.signature === signature) {
      last.days.push(day)
      last.endDay = day
      continue
    }

    groups.push({
      signature,
      days: [day],
      startDay: day,
      endDay: day,
      closed: schedule.closed || schedule.slots.length === 0,
      slots: schedule.slots,
      ...(schedule.description ? { description: schedule.description } : {}),
    })
  }

  return groups.map(({ signature: _signature, ...group }) => group)
}

/**
 * Return `sourceHours` (days + times) but carrying over each locale-specific
 * note (`description`) already present in `targetHours`, aligned by
 * (dayOfWeek, ordinal position within the day). Source notes are dropped.
 * Used to keep opening hours shared across locales while notes stay per-locale.
 */
export function mergeOpeningHoursNotes(
  sourceHours: OpeningHoursEntry[],
  targetHours: OpeningHoursEntry[],
): OpeningHoursEntry[] {
  const targetNotes = new Map<string, string>()
  const targetCounts = new Map<DayOfWeek, number>()
  for (const entry of targetHours) {
    const ordinal = targetCounts.get(entry.dayOfWeek) ?? 0
    targetCounts.set(entry.dayOfWeek, ordinal + 1)
    if (entry.description) targetNotes.set(`${entry.dayOfWeek}#${ordinal}`, entry.description)
  }

  const sourceCounts = new Map<DayOfWeek, number>()
  return sourceHours.map((entry) => {
    const ordinal = sourceCounts.get(entry.dayOfWeek) ?? 0
    sourceCounts.set(entry.dayOfWeek, ordinal + 1)
    const note = targetNotes.get(`${entry.dayOfWeek}#${ordinal}`)
    const base: OpeningHoursEntry = {
      dayOfWeek: entry.dayOfWeek,
      opens: entry.opens,
      closes: entry.closes,
    }
    return note ? { ...base, description: note } : base
  })
}

export type OpeningHoursValidationIssue = {
  path: (string | number)[]
  message: string
}

export function validateOpeningHours(entries: OpeningHoursEntry[]): OpeningHoursValidationIssue[] {
  const issues: OpeningHoursValidationIssue[] = []
  const byDay = new Map<DayOfWeek, OpeningHoursEntry[]>()

  for (let index = 0; index < entries.length; index++) {
    const entry = entries[index]
    if (!entry) continue

    if (compareTime(entry.opens, entry.closes) >= 0) {
      issues.push({
        path: ['openingHours', index, 'closes'],
        message: 'La chiusura deve essere successiva all\'apertura',
      })
    }

    const list = byDay.get(entry.dayOfWeek) ?? []
    list.push(entry)
    byDay.set(entry.dayOfWeek, list)
  }

  for (const [dayOfWeek, dayEntries] of byDay) {
    if (dayEntries.length > 2) {
      issues.push({
        path: ['openingHours'],
        message: `Massimo 2 fasce per ${dayOfWeek}`,
      })
      continue
    }

    const sorted = sortSlots(
      dayEntries.map((entry) => ({ opens: entry.opens, closes: entry.closes })),
    )

    for (let index = 1; index < sorted.length; index++) {
      const previous = sorted[index - 1]
      const current = sorted[index]
      if (!previous || !current) continue

      if (compareTime(current.opens, previous.closes) < 0) {
        issues.push({
          path: ['openingHours'],
          message: 'Le fasce dello stesso giorno non possono sovrapporsi',
        })
        break
      }
    }
  }

  return issues
}

export const DEFAULT_OPENING_HOURS_IT: OpeningHoursEntry[] = [
  { dayOfWeek: 'Monday', opens: '09:00', closes: '13:00' },
  { dayOfWeek: 'Monday', opens: '15:00', closes: '19:00' },
  { dayOfWeek: 'Tuesday', opens: '09:00', closes: '13:00' },
  { dayOfWeek: 'Tuesday', opens: '15:00', closes: '19:00' },
  { dayOfWeek: 'Wednesday', opens: '09:00', closes: '13:00' },
  { dayOfWeek: 'Wednesday', opens: '15:00', closes: '19:00' },
  { dayOfWeek: 'Thursday', opens: '09:00', closes: '13:00' },
  { dayOfWeek: 'Thursday', opens: '15:00', closes: '19:00' },
  { dayOfWeek: 'Friday', opens: '09:00', closes: '13:00' },
  { dayOfWeek: 'Friday', opens: '15:00', closes: '19:00' },
  { dayOfWeek: 'Saturday', opens: '09:00', closes: '13:00' },
]

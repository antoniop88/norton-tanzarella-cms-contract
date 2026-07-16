import { describe, expect, it } from 'vitest'
import {
  flattenDaySchedules,
  groupConsecutiveSchedules,
  groupOpeningHoursByDay,
  mergeOpeningHoursNotes,
  mergeSharedOrganization,
  organizationSchema,
  validateOpeningHours,
  type OpeningHoursEntry,
} from '../src/index.js'

describe('opening hours utilities', () => {
  it('groups flat entries into fixed day schedules', () => {
    const grouped = groupOpeningHoursByDay([
      { dayOfWeek: 'Monday', opens: '09:00', closes: '13:00' },
      { dayOfWeek: 'Monday', opens: '15:00', closes: '19:00' },
      { dayOfWeek: 'Saturday', opens: '09:00', closes: '13:00' },
    ])

    expect(grouped.find((day) => day.dayOfWeek === 'Monday')).toEqual({
      dayOfWeek: 'Monday',
      closed: false,
      slots: [
        { opens: '09:00', closes: '13:00' },
        { opens: '15:00', closes: '19:00' },
      ],
    })
    expect(grouped.find((day) => day.dayOfWeek === 'Sunday')).toEqual({
      dayOfWeek: 'Sunday',
      closed: true,
      slots: [],
    })
  })

  it('flattens day schedules back to storage format', () => {
    const flat = flattenDaySchedules([
      {
        dayOfWeek: 'Monday',
        closed: false,
        slots: [
          { opens: '09:00', closes: '13:00' },
          { opens: '15:00', closes: '19:00' },
        ],
        description: 'Su appuntamento',
      },
      { dayOfWeek: 'Sunday', closed: true, slots: [] },
    ])

    expect(flat).toEqual([
      {
        dayOfWeek: 'Monday',
        opens: '09:00',
        closes: '13:00',
        description: 'Su appuntamento',
      },
      { dayOfWeek: 'Monday', opens: '15:00', closes: '19:00' },
    ])
  })

  it('round-trips group and flatten', () => {
    const original = [
      { dayOfWeek: 'Friday' as const, opens: '09:00', closes: '13:00' },
      { dayOfWeek: 'Friday' as const, opens: '15:00', closes: '19:00' },
      { dayOfWeek: 'PublicHolidays' as const, opens: '10:00', closes: '12:00' },
    ]

    expect(flattenDaySchedules(groupOpeningHoursByDay(original))).toEqual(original)
  })
})

describe('validateOpeningHours', () => {
  it('rejects closing before opening', () => {
    const issues = validateOpeningHours([
      { dayOfWeek: 'Monday', opens: '18:00', closes: '09:00' },
    ])
    expect(issues.some((issue) => issue.message.includes('chiusura'))).toBe(true)
  })

  it('rejects more than two slots on the same day', () => {
    const issues = validateOpeningHours([
      { dayOfWeek: 'Monday', opens: '09:00', closes: '11:00' },
      { dayOfWeek: 'Monday', opens: '12:00', closes: '13:00' },
      { dayOfWeek: 'Monday', opens: '15:00', closes: '18:00' },
    ])
    expect(issues.some((issue) => issue.message.includes('Massimo 2 fasce'))).toBe(true)
  })

  it('rejects overlapping slots', () => {
    const issues = validateOpeningHours([
      { dayOfWeek: 'Tuesday', opens: '09:00', closes: '14:00' },
      { dayOfWeek: 'Tuesday', opens: '13:00', closes: '18:00' },
    ])
    expect(issues.some((issue) => issue.message.includes('sovrapporsi'))).toBe(true)
  })
})

describe('organizationSchema openingHours', () => {
  const baseOrganization = {
    legalName: 'Test',
    email: 'test@example.com',
    phone: '+39 06 1234 5678',
    address: {
      street: 'Via Roma 1',
      city: 'Roma',
      postalCode: '00100',
      country: 'IT',
    },
    geo: { latitude: 41.9, longitude: 12.5 },
  }

  it('accepts valid multi-slot schedule', () => {
    const result = organizationSchema.safeParse({
      ...baseOrganization,
      openingHours: [
        { dayOfWeek: 'Monday', opens: '09:00', closes: '13:00' },
        { dayOfWeek: 'Monday', opens: '15:00', closes: '19:00' },
      ],
    })
    expect(result.success).toBe(true)
  })

  it('rejects invalid schedule via superRefine', () => {
    const result = organizationSchema.safeParse({
      ...baseOrganization,
      openingHours: [{ dayOfWeek: 'Monday', opens: '18:00', closes: '09:00' }],
    })
    expect(result.success).toBe(false)
  })
})

describe('groupConsecutiveSchedules', () => {
  it('merges consecutive weekdays with identical hours and groups closed days', () => {
    const weekdayHours: OpeningHoursEntry[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].flatMap(
      (dayOfWeek) => [
        { dayOfWeek, opens: '09:00', closes: '13:00' } as OpeningHoursEntry,
        { dayOfWeek, opens: '17:00', closes: '20:00' } as OpeningHoursEntry,
      ],
    )
    const groups = groupConsecutiveSchedules(groupOpeningHoursByDay(weekdayHours))

    expect(groups).toHaveLength(2)
    expect(groups[0]).toMatchObject({
      startDay: 'Monday',
      endDay: 'Friday',
      closed: false,
      slots: [
        { opens: '09:00', closes: '13:00' },
        { opens: '17:00', closes: '20:00' },
      ],
    })
    expect(groups[1]).toMatchObject({
      startDay: 'Saturday',
      endDay: 'Sunday',
      closed: true,
    })
  })

  it('breaks a group when slots or note differ, and keeps single-day groups', () => {
    const groups = groupConsecutiveSchedules(
      groupOpeningHoursByDay([
        { dayOfWeek: 'Monday', opens: '09:00', closes: '13:00' },
        { dayOfWeek: 'Tuesday', opens: '09:00', closes: '13:00', description: 'Su appuntamento' },
        { dayOfWeek: 'Wednesday', opens: '10:00', closes: '13:00' },
      ]),
    )

    const open = groups.filter((group) => !group.closed)
    expect(open).toHaveLength(3)
    expect(open.map((group) => group.startDay)).toEqual(['Monday', 'Tuesday', 'Wednesday'])
    expect(open.every((group) => group.startDay === group.endDay)).toBe(true)
  })
})

describe('mergeOpeningHoursNotes / mergeSharedOrganization', () => {
  it('carries over per-locale notes onto shared hours by day and position', () => {
    const source: OpeningHoursEntry[] = [
      { dayOfWeek: 'Monday', opens: '09:00', closes: '13:00', description: 'source note' },
      { dayOfWeek: 'Monday', opens: '17:00', closes: '20:00' },
    ]
    const target: OpeningHoursEntry[] = [
      { dayOfWeek: 'Monday', opens: '08:00', closes: '12:00', description: 'By appointment' },
      { dayOfWeek: 'Monday', opens: '16:00', closes: '19:00' },
    ]

    expect(mergeOpeningHoursNotes(source, target)).toEqual([
      { dayOfWeek: 'Monday', opens: '09:00', closes: '13:00', description: 'By appointment' },
      { dayOfWeek: 'Monday', opens: '17:00', closes: '20:00' },
    ])
  })

  it('overwrites all organization fields from source but keeps target notes', () => {
    const targetOrg = {
      legalName: 'Target',
      email: 'target@example.com',
      phone: '+39 0000',
      address: { street: 'A', city: 'B', postalCode: '00100', country: 'IT' },
      geo: { latitude: 1, longitude: 2 },
      openingHours: [{ dayOfWeek: 'Monday' as const, opens: '08:00', closes: '12:00', description: 'nota IT' }],
    }
    const sourceOrg = {
      legalName: 'Source',
      email: 'source@example.com',
      phone: '+39 1111',
      address: { street: 'C', city: 'D', postalCode: '20100', country: 'IT' },
      geo: { latitude: 3, longitude: 4 },
      openingHours: [{ dayOfWeek: 'Monday' as const, opens: '09:00', closes: '13:00', description: 'nota EN' }],
    }

    const merged = mergeSharedOrganization(targetOrg, sourceOrg)
    expect(merged.legalName).toBe('Source')
    expect(merged.email).toBe('source@example.com')
    expect(merged.openingHours).toEqual([
      { dayOfWeek: 'Monday', opens: '09:00', closes: '13:00', description: 'nota IT' },
    ])
  })
})

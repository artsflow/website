import { difference } from 'lodash'
import { RRuleSet, rrulestr } from 'rrule'
import { format, addMinutes } from 'date-fns'

export const ruleText = (r: string, duration: number) => {
  const rule = rrulestr(r)
  const from = format(rule.options.dtstart, 'HH:mm')
  const to = format(addMinutes(rule.options.dtstart, duration), 'HH:mm')
  const [freq, days] = rule.toText().replace(' for 15 times', '').split(' on ')
  return { freq, days, time: `${from} - ${to}` }
}

export const getAvailableDatesMap = (rrules: string[], exdate: string[]) => {
  const rruleSet = new RRuleSet()

  rrules.forEach((r: string) => {
    const rule = rrulestr(r)
    const { dtstart } = rule.options
    const date = new Date(dtstart)
    const now = new Date(Date.now())

    date.setDate(now.getDate())
    date.setMonth(now.getMonth())

    rruleSet.rrule(rrulestr(r, { dtstart: date }))
  })

  const dates = difference(
    rruleSet.all().map((e) => e.toString()),
    exdate.map((d: string) => new Date(d)).map((e: Date) => e.toString())
  )

  const datesMap = new Map()

  dates.forEach((date) => {
    const d = new Date(date)
    const dd = d.getDate()
    const mm = d.getMonth()
    const yy = d.getFullYear()
    const minutes = d.getMinutes()
    const hours = d.getHours()

    const datestr = new Date(yy, mm, dd).toString()
    const timestr = `${hours}:${minutes}`

    if (datesMap.has(datestr)) {
      const tmpset = datesMap.get(datestr)
      tmpset.add(timestr)
    } else {
      const tmpset = new Set()
      tmpset.add(timestr)
      datesMap.set(datestr, tmpset)
    }
  })

  return datesMap
}

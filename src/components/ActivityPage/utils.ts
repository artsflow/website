import { sortBy } from 'lodash'
import { format, addMinutes, addHours } from 'date-fns'

export const getAvailableDatesMap = (dates: string[]) => {
  const datesMap = new Map()

  const sorted = sortBy(dates, [(d: string) => new Date(d)])
    .map((d: string) => new Date(d))
    .filter((d) => d > new Date())
    .map((d) => d.toString())

  sorted.forEach((date) => {
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

export const getTimeSlot = (t: string, duration: number) => {
  const d = new Date(2020, 0, 1)
  const [hh, mm] = t.split(':')
  const from = addMinutes(addHours(d, +hh), +mm)
  const to = addMinutes(from, +duration)
  return `${format(from, 'HH:mm')} - ${format(to, 'HH:mm')}`
}

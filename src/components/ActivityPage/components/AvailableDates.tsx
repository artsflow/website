import { useEffect, useState } from 'react'
import { Heading, useRadioGroup, Text } from '@chakra-ui/react'
import { format } from 'date-fns'
import { useStateMachine } from 'little-state-machine'

import { update } from 'lib/store'
import { RadioCard } from '../../RadioCard'
import { getAvailableDatesMap } from '../utils'
import { XScroller } from './utils'

export const AvailableDates = ({ frequency }: any) => {
  const [selectedDate, setSelectedDate] = useState('')
  const { rrules, exdate } = frequency
  const {
    state: { order },
    actions,
  } = useStateMachine({ update }) as any

  const datesMap = getAvailableDatesMap(rrules, exdate)
  const dates = [...datesMap.keys()]

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'days',
    value: selectedDate,
    onChange: (date) => {
      setSelectedDate(date)
      actions.update({ order: { date } })
    },
  })

  const group = getRootProps()

  useEffect(() => {
    setSelectedDate(order.date)
  }, [])

  return (
    <>
      <Heading as="h2" fontSize="xl" mb="1.5rem">
        Available Dates
      </Heading>
      <XScroller {...group}>
        {dates.map((value) => {
          const radio = getRadioProps({ value })
          return (
            <RadioCard key={value} {...radio}>
              <Text fontSize="xs">{format(new Date(value), 'eee')}</Text>
              <Text fontWeight="bold" fontSize="xs">
                {format(new Date(value), 'dd MMM')}
              </Text>
            </RadioCard>
          )
        })}
      </XScroller>
    </>
  )
}

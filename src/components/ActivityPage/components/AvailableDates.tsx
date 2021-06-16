import { useEffect, useState } from 'react'
import { Box, Heading, useRadioGroup, Text } from '@chakra-ui/react'
import { format } from 'date-fns'
import { useStateMachine } from 'little-state-machine'

import { update, resetStore } from 'lib/store'
import { RadioCard } from '../../RadioCard'
import { getAvailableDatesMap } from '../utils'
import { XScroller } from './utils'

export const AvailableDates = ({ dates }: any) => {
  const [selectedDate, setSelectedDate] = useState('')
  const {
    state: { order },
    actions,
  } = useStateMachine({ update, resetStore }) as any

  const datesMap = getAvailableDatesMap(dates)
  const availableDates = [...datesMap.keys()]

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'days',
    value: selectedDate,
    onChange: (date) => {
      setSelectedDate(date)
      actions.update({ order: { ...order, date, time: '' } })
    },
  })

  const group = getRootProps()

  useEffect(() => {
    actions.resetStore()
  }, [])

  return (
    <Box mb="1.5rem">
      <Heading as="h2" fontSize="xl" mb="1.5rem">
        Available Dates
      </Heading>
      {availableDates.length > 0 ? (
        <XScroller {...group} disableNavigation={availableDates.length <= 4}>
          {availableDates.map((value) => {
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
      ) : (
        <Text>no dates are scheduled</Text>
      )}
    </Box>
  )
}

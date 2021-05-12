import { useEffect, useState } from 'react'
import { Box, Heading, useRadioGroup, Text } from '@chakra-ui/react'
import { format } from 'date-fns'
import { useStateMachine } from 'little-state-machine'

import { update } from 'lib/store'
import { RadioCard } from '../../RadioCard'
import { getAvailableDatesMap } from '../utils'
import { XScroller } from './utils'

export const AvailableDates = ({ dates }: any) => {
  const [selectedDate, setSelectedDate] = useState('')
  const {
    state: { order },
    actions,
  } = useStateMachine({ update }) as any

  const datesMap = getAvailableDatesMap(dates)

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
    setSelectedDate(order.date)
  }, [])

  return (
    <Box mb="1.5rem">
      <Heading as="h2" fontSize="xl" mb="1.5rem">
        Available Dates
      </Heading>
      <XScroller {...group}>
        {[...datesMap.keys()].map((value) => {
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
    </Box>
  )
}

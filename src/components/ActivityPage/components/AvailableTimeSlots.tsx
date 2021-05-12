import { useRadioGroup, Text, VStack } from '@chakra-ui/react'
import { useStateMachine } from 'little-state-machine'

import { update } from 'lib/store'
import { RadioCard } from '../../RadioCard'
import { getAvailableDatesMap, getTimeSlot } from '../utils'
import { XScroller } from './utils'

export const AvailableTimeSlots = ({ duration, dates }: any) => {
  const {
    state: { order },
    actions,
  } = useStateMachine({ update }) as any

  const datesMap = getAvailableDatesMap(dates)
  const availableTimes: string[] = Array.from(datesMap.get(order.date) || [])

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'hours',
    value: order.time,
    onChange: (time) => {
      actions.update({ order: { ...order, time } })
    },
  })

  const group = getRootProps()

  if (!order.date) return null

  return (
    <VStack mb="1.5rem" alignItems="flex-start">
      <Text mb="1rem">Select one of the available time slots below:</Text>
      <XScroller disableNavigation {...group}>
        {availableTimes.map((value) => {
          const radio = getRadioProps({ value })
          return (
            <RadioCard key={value} {...radio}>
              <Text fontWeight="bold" fontSize="xs" px="1.5rem">
                {getTimeSlot(value, duration)}
              </Text>
            </RadioCard>
          )
        })}
      </XScroller>
    </VStack>
  )
}

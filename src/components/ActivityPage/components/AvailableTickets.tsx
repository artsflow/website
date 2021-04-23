import { useRadioGroup, Text, VStack } from '@chakra-ui/react'
import { useStateMachine } from 'little-state-machine'

import { update } from 'lib/store'
import { RadioCard } from '../../RadioCard'
import { XScroller } from './utils'

export const AvailableTickets = () => {
  const {
    state: { order },
    actions,
  } = useStateMachine({ update }) as any

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'tickets',
    value: order.tickets,
    onChange: (t) => {
      actions.update({ order: { ...order, tickets: Number(t) } })
    },
  })

  const group = getRootProps()

  if (!order.date || !order.time) return null

  return (
    <VStack mb="1.5rem" alignItems="flex-start">
      <Text mb="1rem">Select number of tickets:</Text>
      <XScroller disableNavigation {...group}>
        {[1, 2, 3, 4].map((value: number) => {
          const radio = getRadioProps({ value })
          return (
            <RadioCard key={value} {...radio}>
              <Text fontWeight="bold" fontSize="lg">
                {value}
              </Text>
            </RadioCard>
          )
        })}
      </XScroller>
    </VStack>
  )
}

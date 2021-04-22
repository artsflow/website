import { Heading, Button, useRadioGroup, Grid, Text } from '@chakra-ui/react'
// import { RRuleSet, rrulestr } from 'rrule'
import { format } from 'date-fns'
import { useWindowSize } from 'rooks'
import { useStateMachine } from 'little-state-machine'

import { update } from 'lib/store'
import { RadioCard } from '../../RadioCard'
import { getAvailableDatesMap } from '../utils'

export const AvailableDates = ({ frequency }: any) => {
  const { rrules, exdate } = frequency
  const { outerWidth = 0 } = useWindowSize() as any
  const {
    state: { order },
    actions,
  } = useStateMachine({ update }) as any

  const datesMap = getAvailableDatesMap(rrules, exdate)

  const dates = [...datesMap.keys()]

  const isSmallScreen = outerWidth < 480

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'days',
    value: order.date,
    // value: 'Fri Apr 30 2021 00:00:00 GMT+0100 (British Summer Time)',
    onChange: (date) => {
      console.log(date)
      actions.update({ order: { date } })
    },
  })

  const group = getRootProps()

  console.log(datesMap, order, isSmallScreen, outerWidth)

  return (
    <Grid bg="white" p={[0, 0, '2rem']} rounded="1rem" mb="2rem">
      <Heading as="h2" fontSize="xl" mb="1rem">
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
      <Text>Select one of the available time slots below:</Text>
      <Button
        bg="af.teal"
        color="white"
        fontSize="xl"
        alignSelf="flex-start"
        px="2rem"
        py={['1.5rem', '2rem']}
        w="full"
        rounded="12px"
      >
        Continue with payment (£0)
      </Button>
    </Grid>
  )
}

const XScroller = (props: any) => {
  //
  return (
    <Grid
      as="ul"
      overflowX="auto"
      my="1rem"
      gap="1rem"
      autoFlow="column"
      css={{
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        scrollSnapType: 'x proximity',
        scrollbarWidth: 'none',
      }}
      {...props}
    />
  )
}

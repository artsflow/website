import { useRef, useEffect, useState } from 'react'
import { Heading, Button, useRadioGroup, Grid, Text, IconButton } from '@chakra-ui/react'
// import { RRuleSet, rrulestr } from 'rrule'
import { format } from 'date-fns'
import { useStateMachine } from 'little-state-machine'
import { BsCaretLeft, BsCaretRight } from 'react-icons/bs'

import { update } from 'lib/store'
import { RadioCard } from '../../RadioCard'
import { getAvailableDatesMap } from '../utils'

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

  console.log(datesMap, order)

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
  const { children, ...rest } = props
  const ref = useRef(null) as any
  const distance = 240

  const scroll = (x: number) => {
    ref.current.scrollTo({
      top: 0,
      left: ref.current.scrollLeft + x,
      behavior: 'smooth',
    })
  }

  return (
    <Grid pos="relative">
      <NavButton dir="left" onClick={() => scroll(-distance)} />
      <NavButton dir="right" onClick={() => scroll(distance)} />
      <Grid
        as="ul"
        overflow="scroll"
        my="1rem"
        gap="1rem"
        autoFlow="column"
        pos="relative"
        ref={ref}
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          scrollSnapType: 'x proximity',
          scrollbarWidth: 'none',
        }}
        {...rest}
      >
        {children}
      </Grid>
    </Grid>
  )
}

const NavButton = ({ onClick, dir }: any) => (
  <IconButton
    pos="absolute"
    zIndex="3"
    aria-label="navigate dates"
    isRound
    top="calc(50% - 20px)"
    opacity="50%"
    left={dir === 'left' ? '-20px' : ''}
    right={dir === 'right' ? '-20px' : ''}
    icon={dir === 'left' ? <BsCaretLeft /> : <BsCaretRight />}
    onClick={onClick}
  />
)

import { Stack, Text } from '@chakra-ui/react'
import { useStateMachine } from 'little-state-machine'
import { format, addMinutes, setHours, setMinutes } from 'date-fns'
import pluralize from 'pluralize'

export const OrderInfo = ({ duration, price }: any) => {
  const { state } = useStateMachine() as any
  const { date, tickets, time } = state.order

  if (!date || !tickets || !time) return null

  const bookingDate = new Date(date)
  const [hh, mm] = time.split(':')
  const bookingTimeFrom = setMinutes(setHours(bookingDate, hh), mm)
  const bookingTimeTo = addMinutes(bookingTimeFrom, duration)

  return (
    <Stack direction={['column', 'row']} justifyContent="space-between" w="full">
      <Text>
        Booking date: <b>{format(bookingDate, 'dd MMMM')}</b> from{' '}
        <b>
          {format(bookingTimeFrom, 'HH:mm')} - {format(bookingTimeTo, 'HH:mm')}
        </b>
      </Text>
      <Text>
        Price: <b>£{tickets * price}</b> ({pluralize('ticket', tickets, true)})
      </Text>
    </Stack>
  )
}

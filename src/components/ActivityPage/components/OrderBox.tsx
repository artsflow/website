import { HStack, Stack, Box, Button, Grid, Text, VStack } from '@chakra-ui/react'
import { useStateMachine } from 'little-state-machine'
import { useRouter } from 'next/router'

import { update } from 'lib/store'

import { showAlert, getAmount, ARTSFLOW_FEE } from 'lib/utils'
import { trackConfirmBookingActivity } from 'analytics'
import { AvailableDates } from './AvailableDates'
import { AvailableTimeSlots } from './AvailableTimeSlots'
import { getAvailableDatesMap } from '../utils'

export const OrderBox = (activity: any) => {
  const { id, frequency, dates, duration, price, isFeePassed, monetizationType, status } = activity
  const router = useRouter()

  const {
    state: { order },
  } = useStateMachine({ update }) as any

  const handleContinue = () => {
    window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: 'smooth' })
    if (!order.date || !order.time) showAlert({ title: 'Please confirm date and time' })
    else {
      // TODO: check if capacity is not full
      trackConfirmBookingActivity(id, order.date)
      router.push(`/a/${id}/book`)
    }
  }

  const isFree = monetizationType === 'Free'

  const datesMap = getAvailableDatesMap(dates)
  const availableDates = [...datesMap.keys()]

  const isPaused = status === 'paused'
  const nominalFee = (price * ARTSFLOW_FEE) / 100

  return (
    <Grid
      bg="white"
      rounded="1rem"
      mb={[0, '2rem']}
      boxShadow={[0, 0, '0px 3px 8px -1px rgba(50, 50, 71, 0.05)']}
    >
      <Box p={[0, 0, '2rem']}>
        {isPaused ? (
          <Text>This activity is paused and does not accept bookings at this time.</Text>
        ) : (
          <>
            <AvailableDates frequency={frequency} dates={dates} />
            <AvailableTimeSlots frequency={frequency} dates={dates} duration={duration} />
          </>
        )}
      </Box>
      <Stack
        bg={['white', 'white', '#e0f4f7']}
        p={['1.5rem', '2rem']}
        left="0"
        w="full"
        pos={['fixed', 'fixed', 'relative']}
        bottom={['0px', 0, 'auto']}
        zIndex="3"
        boxShadow={[
          '0px -8px 20px rgba(0, 0, 0, 0.05)',
          '0px -8px 20px rgba(0, 0, 0, 0.05)',
          'none',
        ]}
        borderTopRadius={['1rem', '1rem', 0]}
        borderBottomRadius={[0, 0, '1rem']}
        justifyContent="space-between"
        direction={['column', 'row']}
        spacing={['20px', 0]}
      >
        <HStack fontSize={['lg', 'xl']} fontWeight="bold" flex="1" justifyContent="center">
          {isFree ? (
            <Text>Free to join</Text>
          ) : (
            <VStack>
              <HStack>
                <Text>£{getAmount(price, isFeePassed) * (order.tickets || 1)}</Text>
                <Text color="gray.400">/ session</Text>
              </HStack>
              {isFeePassed && (
                <Text color="#616166" fontSize="xs">
                  (£{nominalFee} service fee)
                </Text>
              )}
            </VStack>
          )}
        </HStack>
        <Button
          bg="af.teal"
          color="white"
          fontSize="xl"
          alignSelf="flex-start"
          px={['1rem', '3rem']}
          py="2rem"
          rounded="12px"
          onClick={handleContinue}
          disabled={!availableDates.length || isPaused}
        >
          Continue
        </Button>
      </Stack>
    </Grid>
  )
}

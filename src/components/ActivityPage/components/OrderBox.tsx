import { Button, Grid } from '@chakra-ui/react'

import { AvailableDates } from './AvailableDates'
import { AvailableTimeSlots } from './AvailableTimeSlots'

export const OrderBox = ({ frequency, duration }: any) => {
  return (
    <Grid bg="white" p={[0, 0, '2rem']} rounded="1rem" mb="2rem">
      <AvailableDates frequency={frequency} />
      <AvailableTimeSlots frequency={frequency} duration={duration} />
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

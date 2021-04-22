import { Button, Grid, Text } from '@chakra-ui/react'

import { AvailableDates } from './AvailableDates'

export const OrderBox = ({ frequency }: any) => {
  return (
    <Grid bg="white" p={[0, 0, '2rem']} rounded="1rem" mb="2rem">
      <AvailableDates frequency={frequency} />
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

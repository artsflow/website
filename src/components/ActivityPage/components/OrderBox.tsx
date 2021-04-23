import { HStack, Box, Button, Grid, Text } from '@chakra-ui/react'

import { AvailableDates } from './AvailableDates'
import { AvailableTimeSlots } from './AvailableTimeSlots'

export const OrderBox = ({ frequency, duration, price }: any) => {
  return (
    <Grid
      bg="white"
      rounded="1rem"
      mb={[0, '2rem']}
      boxShadow={[0, 0, '0px 3px 8px -1px rgba(50, 50, 71, 0.05)']}
    >
      <Box p={[0, 0, '2rem']}>
        <AvailableDates frequency={frequency} />
        <AvailableTimeSlots frequency={frequency} duration={duration} />
      </Box>
      <HStack
        bg={['white', 'white', '#e0f4f7']}
        p="2rem"
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
      >
        <HStack fontSize="1.3rem" fontWeight="bold" flex="1" justifyContent="center">
          <Text>£{price}</Text>
          <Text color="gray.400">/ session</Text>
        </HStack>
        <Button
          bg="af.teal"
          color="white"
          fontSize="xl"
          alignSelf="flex-start"
          px={['2rem', '3rem']}
          py="2rem"
          rounded="12px"
        >
          Continue
        </Button>
      </HStack>
    </Grid>
  )
}

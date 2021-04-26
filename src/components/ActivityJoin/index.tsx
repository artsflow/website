import { Flex, Box, Stack, Heading, Text, VStack, Icon, Image, HStack } from '@chakra-ui/react'
import { useStateMachine } from 'little-state-machine'
import { format, addMinutes, setHours, setMinutes } from 'date-fns'
import pluralize from 'pluralize'

import ArtsflowSvg from 'svg/artsflow.svg'
import { getImageKitUrl } from 'lib/utils'
import { Meta } from '../Meta'

export const ActivityJoin = ({ activity, profile }: any) => {
  const { title, images, price, duration } = activity
  const { state } = useStateMachine() as any
  const { date, tickets, time } = state.order
  const { displayName } = profile

  const [image] = images

  const bookingDate = new Date(date)
  const [hh, mm] = time.split(':')
  const bookingTimeFrom = setMinutes(setHours(bookingDate, hh), mm)
  const bookingTimeTo = addMinutes(bookingTimeFrom, duration)

  return (
    <>
      <Meta title={`Join ${title}`} />
      <VStack
        bg="#f9f9f9"
        pt={[0, '1.5rem']}
        minH={['calc(100vh - 153px)', 'calc(100vh - 95px)']}
        spacing="1.5rem"
      >
        <Flex mb={['1rem', '3rem']} display={['none', 'flex']}>
          <Icon as={ArtsflowSvg} w="107px" h="24px" mx="auto" />
        </Flex>
        <HStack>
          <Box w="50px" h="6px" bg="af.teal" rounded="3px" />
          <Box w="50px" h="6px" bg="gray" rounded="3px" />
          <Box w="50px" h="6px" bg="gray" rounded="3px" />
        </HStack>
        <VStack
          bg="white"
          mb="20px"
          py={['1rem', '2rem']}
          maxW={['full', '800px']}
          w="full"
          rounded={[0, '1rem']}
          alignItems="flex-start"
        >
          <Heading mb={['1rem', '1.5rem']} fontSize="md" alignSelf="center">
            Confirm your booking
          </Heading>
          <Image w="full" h={['200px', '360px']} src={getImageKitUrl(image, { w: 800, h: 360 })} />
          <VStack
            px={['2rem', '2.5rem']}
            alignItems="flex-start"
            w="full"
            spacing={['1rem', '1.5rem']}
          >
            <Stack
              direction={['column', 'row']}
              mt={['1rem', '1.5rem']}
              alignItems={['flex-start', 'center']}
            >
              <Heading fontSize="2xl">{title}</Heading>t
              <Text fontSize="2xl"> with {displayName}</Text>
            </Stack>
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
          </VStack>
        </VStack>
      </VStack>
    </>
  )
}

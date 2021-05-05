import { useEffect } from 'react'
import { Flex, Box, Heading, Text, VStack, Icon, HStack, Avatar, Button } from '@chakra-ui/react'
import { useStateMachine } from 'little-state-machine'
import { format, addMinutes, fromUnixTime } from 'date-fns'

import ArtsflowSvg from 'svg/artsflow.svg'
import TickIcon from 'svg/landing/tick.svg'
import CalendarIcon from 'svg/calendar.svg'
import Calendar2Icon from 'svg/calendar2.svg'
import ClockIcon from 'svg/clock.svg'
import { getImageKitUrl } from 'lib/utils'
import { resetStore } from 'lib/store'
import { useAttended } from 'hooks'
import { Meta } from '../Meta'
import { Share } from '../ActivityPage/components'

export const BookingConfirmed = ({ activity, profile }: any) => {
  const { actions } = useStateMachine({ resetStore }) as any
  const { id, title, duration } = activity
  const { displayName, photoURL } = profile
  const [attended = [{}]] = useAttended(id)
  const [{ date }] = attended

  useEffect(() => {
    actions.resetStore()
  }, [])

  const eventDate = date ? format(fromUnixTime(date), 'dd MMM YYY') : '...'
  const eventTimeFrom = date ? format(fromUnixTime(date), 'HH:mm') : '...'
  const eventTimeTo = date ? format(addMinutes(fromUnixTime(date), duration), 'HH:mm') : '...'

  return (
    <>
      <Meta title={`Booking confirmed: ${title}`} />
      <VStack
        bg="#f9f9f9"
        pt={[0, '1.5rem']}
        pb="4rem"
        minH={['calc(100vh - 153px)', 'calc(100vh - 95px)']}
        spacing="1.5rem"
      >
        <Flex mb={['1rem', '3rem']} display={['none', 'flex']}>
          <Icon as={ArtsflowSvg} w="107px" h="24px" mx="auto" />
        </Flex>
        <HStack>
          <Box w="50px" h="6px" bg="af.teal" rounded="3px" />
          <Box w="50px" h="6px" bg="af.teal" rounded="3px" />
          <Box w="50px" h="6px" bg="af.teal" rounded="3px" />
        </HStack>
        <VStack
          bg="white"
          py={['2rem', '4rem']}
          pt={['60px', '80px']}
          maxW={['full', '800px']}
          w="full"
          rounded={[0, '1rem']}
          alignItems="center"
          spacing="1.5rem"
          px="2rem"
        >
          <Icon as={TickIcon} boxSize={['30px', '40px']} />
          <Heading
            mb={['1rem', '1.5rem']}
            fontSize={['2xl', '4xl']}
            fontWeight="semibold"
            alignSelf="center"
          >
            Booking confirmed
          </Heading>
          <Text textAlign="center" color="#616167">
            You can cancel your booking up to 24 hours prior to the event.
          </Text>
          <VStack
            px="1.5rem"
            alignItems="flex-start"
            w="full"
            maxW="460px"
            spacing={['1rem', '1.5rem']}
            border="1px solid #E5E5E5"
            rounded="10px"
            mx="2rem"
          >
            <VStack my={['1rem', '1.5rem']} alignItems="flex-start" w="full" spacing="1.5rem">
              <HStack>
                <Icon as={CalendarIcon} boxSize="2rem" ml="5px" mr="10px" />
                <VStack alignItems="flex-start">
                  <Text>Activity name</Text>
                  <Heading fontSize="lg">{title}</Heading>t
                </VStack>
              </HStack>
              <Box w="full" border="1px solid #E5E5E5" />
              <HStack>
                <Avatar
                  name={displayName}
                  width="40px"
                  height="40px"
                  bg="af.pink"
                  color="white"
                  fontSize="xs"
                  src={getImageKitUrl(photoURL, { w: 40, h: 40, tr: 'fo-face' })}
                />
                <VStack pl="10px">
                  <Heading fontSize="md">{displayName}</Heading>
                </VStack>
              </HStack>
            </VStack>
          </VStack>
          <HStack spacing="1rem" w="full" maxW="460px">
            <VStack bg="#fffaec" w="full" minW="150px" rounded="10px" py="1.5rem">
              <Icon as={Calendar2Icon} boxSize="2rem" />
              <Text color="#616167">Event date</Text>
              <Text fontWeight="bold">{eventDate}</Text>
            </VStack>
            <VStack bg="#fdf3f7" w="full" minW="150px" rounded="10px" py="1.5rem">
              <Icon as={ClockIcon} boxSize="2rem" />
              <Text color="#616167">Time</Text>
              <Text fontWeight="bold">
                {eventTimeFrom} - {eventTimeTo}
              </Text>
            </VStack>
          </HStack>
          <HStack w="full" maxW="460px" spacing="1rem" pt="2.5rem">
            <Share
              id={id}
              title={title}
              TriggerButton={(props: any) => (
                <Button bg="af.teal" color="white" w="full" h="3rem" {...props}>
                  Invite Friends
                </Button>
              )}
              placement="top-start"
              triggerProps={{ w: 'full' }}
            />
            <Button bg="#edf8fa" color="af.teal" w="full" h="3rem">
              Add to Calendar
            </Button>
          </HStack>
        </VStack>
      </VStack>
    </>
  )
}

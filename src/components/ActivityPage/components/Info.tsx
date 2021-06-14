import { Text, Heading, Button, VStack, HStack, Icon } from '@chakra-ui/react'
import { format } from 'date-fns'

import HourglassIcon from 'svg/activity/hourglass.svg'
import ClockwiseIcon from 'svg/activity/clockwise.svg'
import UsercircleplusIcon from 'svg/activity/usercircleplus.svg'
import { FiUser, FiStar } from 'react-icons/fi'
import { MdEqualizer } from 'react-icons/md'

import { getAvailableDatesMap } from '../utils'

export const Info = ({
  category,
  capacity,
  dates,
  duration,
  activityPresence,
  audienceLevel,
  audienceType,
  categoryType,
}: any) => {
  const datesMap = getAvailableDatesMap(dates)
  const [nextSession] = [...datesMap.keys()]

  return (
    <VStack
      bg="white"
      h="full"
      spacing="1rem"
      p={[0, '1rem']}
      roundedBottomRight="1rem"
      roundedTopRight="1rem"
      justifyContent="center"
      boxShadow={[0, 0, '0px 3px 8px -1px rgba(50, 50, 71, 0.05)']}
    >
      <Heading
        as="h2"
        fontSize="xl"
        alignSelf="flex-start"
        px="2rem"
        display={['block', 'block', 'none']}
      >
        Activity details
      </Heading>
      <HStack justifyContent="space-between" w="full" px={['2rem', '0rem']}>
        <Text color="af.pink" fontWeight="bold">
          {category}
        </Text>
        <Text color="af.teal" fontWeight="bold">
          {activityPresence}
        </Text>
      </HStack>

      <HStack spacing="10px">
        <VStack
          bg="#fffaea"
          rounded="10px"
          p="1rem"
          w="100px"
          h="130px"
          justifyContent="space-around"
        >
          <Icon as={MdEqualizer} boxSize="24px" color="#FCCE36" />
          <Text color="#616167" fontSize="xs" textAlign="center">
            Level
          </Text>
          <Text fontSize="xs" fontWeight="bold" textAlign="center">
            {audienceLevel}
          </Text>
        </VStack>
        <VStack
          bg="#edf8fa"
          rounded="10px"
          p="1rem"
          px="0"
          w="100px"
          h="130px"
          justifyContent="space-around"
        >
          <Icon as={FiUser} boxSize="24px" color="#47BCC8" />
          <Text color="#616167" fontSize="xs" textAlign="center">
            Suitability
          </Text>
          <Text fontSize="xs" fontWeight="bold" textAlign="center">
            {audienceType}
          </Text>
        </VStack>
        <VStack
          bg="#fcf2f7"
          rounded="10px"
          p="1rem"
          w="100px"
          h="130px"
          justifyContent="space-around"
        >
          <Icon as={FiStar} boxSize="24px" color="#E27CB0" />
          <Text color="#616167" fontSize="xs" textAlign="center">
            Type
          </Text>
          <Text fontSize="xs" fontWeight="bold" textAlign="center">
            {categoryType}
          </Text>
        </VStack>
      </HStack>

      <HStack spacing="10px">
        <VStack
          bg="#edf8fa"
          rounded="10px"
          p="1rem"
          w="100px"
          h="130px"
          justifyContent="space-around"
        >
          <HourglassIcon />
          <Text color="#616167" fontSize="xs" textAlign="center">
            Duration
          </Text>
          <Text fontSize="xs" fontWeight="bold" textAlign="center">
            {duration} min
          </Text>
        </VStack>
        <VStack
          bg="#fcf2f7"
          rounded="10px"
          p="1rem"
          px="0"
          w="100px"
          h="130px"
          justifyContent="space-around"
        >
          <ClockwiseIcon />
          <Text color="#616167" fontSize="xs" textAlign="center">
            Next session
          </Text>
          <Text fontSize="xs" fontWeight="bold" textAlign="center">
            {nextSession ? format(new Date(nextSession), 'dd MMMM') : '- not scheduleds yet'}
          </Text>
        </VStack>
        <VStack
          bg="#fffaea"
          rounded="10px"
          p="1rem"
          w="100px"
          h="130px"
          justifyContent="space-around"
        >
          <UsercircleplusIcon />
          <Text color="#616167" fontSize="xs" textAlign="center">
            Capacity
          </Text>
          <Text fontSize="xs" fontWeight="bold" textAlign="center">
            {capacity} people
          </Text>
        </VStack>
      </HStack>
      <Button
        bg="af.teal"
        color="white"
        fontSize="xl"
        px="2rem"
        py={['1.5rem', '2rem']}
        w="full"
        rounded="12px"
        display={['none', 'none', 'flex']}
        onClick={() => {
          window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: 'smooth' })
        }}
      >
        Book now
      </Button>
    </VStack>
  )
}

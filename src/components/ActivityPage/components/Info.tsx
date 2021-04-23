import { Box, Text, Heading, Button, VStack, HStack } from '@chakra-ui/react'
import { RRuleSet, rrulestr } from 'rrule'
import { format } from 'date-fns'

import HourglassIcon from 'svg/activity/hourglass.svg'
import ClockwiseIcon from 'svg/activity/clockwise.svg'
import UsercircleplusIcon from 'svg/activity/usercircleplus.svg'

import { getAvailableDatesMap, ruleText } from '../utils'

export const Info = ({ category, capacity, frequency, duration }: any) => {
  const { rrules, exdate } = frequency
  const rruleSet = new RRuleSet()
  rrules.forEach((r: string) => rruleSet.rrule(rrulestr(r)))

  const { freq } = ruleText(rrules[0], duration)
  const datesMap = getAvailableDatesMap(rrules, exdate)
  const [nextSession] = [...datesMap.keys()]

  return (
    <VStack
      bg="white"
      h="full"
      spacing="2rem"
      p={[0, '2rem']}
      roundedBottomRight="1rem"
      roundedTopRight="1rem"
      justifyContent="center"
    >
      <Heading
        as="h2"
        fontSize="xl"
        alignSelf="flex-start"
        px="1.5rem"
        display={['block', 'block', 'none']}
      >
        Activity details
      </Heading>
      <Box
        color="af.pink"
        fontWeight="bold"
        alignSelf="flex-start"
        display={['none', 'none', 'block']}
      >
        {category}
      </Box>
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
          w="100px"
          h="130px"
          justifyContent="space-around"
        >
          <ClockwiseIcon />
          <Text color="#616167" fontSize="xs" textAlign="center">
            Frequency
          </Text>
          <Text fontSize="xs" fontWeight="bold" textAlign="center">
            {freq}
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
      <Text fontSize="xs" textAlign="center" display={['none', 'none', 'flex']}>
        Next session on&nbsp;
        <b>{format(new Date(nextSession), 'dd MMMM')}</b>
      </Text>
      <Button
        bg="af.teal"
        color="white"
        fontSize="xl"
        alignSelf="flex-start"
        px="2rem"
        py={['1.5rem', '2rem']}
        w="full"
        rounded="12px"
        display={['none', 'none', 'flex']}
      >
        Book now
      </Button>
    </VStack>
  )
}
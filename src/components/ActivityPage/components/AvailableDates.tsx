import { Box, Heading, Button } from '@chakra-ui/react'
import { RRuleSet, rrulestr } from 'rrule'

export const AvailableDates = ({ frequency }: any) => {
  const { rrules } = frequency
  const rruleSet = new RRuleSet()
  rrules.forEach((r: string) => rruleSet.rrule(rrulestr(r)))

  // rruleSet.all().map(console.log)

  return (
    <Box>
      <Heading as="h2" fontSize="xl" mb="1rem">
        Available Dates
      </Heading>
      <Button
        bg="af.teal"
        color="white"
        fontSize="xl"
        alignSelf="flex-start"
        px="2rem"
        py={['1.5rem', '2rem']}
        w={['100%', '400px']}
        rounded="12px"
      >
        Book now
      </Button>
    </Box>
  )
}
